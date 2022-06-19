import React, { useEffect, useState } from "react";
import axios from 'axios';
import PartRow from "../../components/PartRow/PartRow";
import SearchBox from "../../components/SearchBox/SearchBox";
import TypeBtn from "../../components/TypeBtn/TypeBtn";
import SortBtn from "../../components/SortBtn/SortBtn";
import Loading from "../../components/Loading/Loading";
import hashCode from "../../helpers/helpers";
import './MainPage.css';

const MainPage = () => {

  const [parts, setParts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState();
  const [sortOrder, setSortOrder] = useState('asc');
  const [isPartsLoading, setIsPartsLoading] = useState(true);
  const [isTypesLoading, setIsTypesLoading] = useState(true);

  const filterFunction = (item) => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase())
      && (currentType === 'All' ? true : item.type === currentType);
  }

  const sortFunction = (a, b) => {
    const flipIfDescending = sortOrder === 'desc' ? (b = [a, a = b][0]) : null;
    return parseFloat(a.price) - parseFloat(b.price);
  }

  const searchHandler = (value) => {
    setSearchValue(value);
  }

  const typeBtnHandler = () => {
    const nextType = types[(types.indexOf(currentType) + 1) % types.length]
    setCurrentType(nextType);
  }

  const sortBtnHandler = () => {
    const nextOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(nextOrder);
  }

  const fetchTypes = async () => {
    try {
      const { data } = await axios.get("http://localhost:8081/store/part-types")

      setTypes(['All', ...data])
      setCurrentType('All')
      setIsTypesLoading(false)

    }
    catch (error) {
      console.log(error)
      alert("Network error, please try again later...")
    }

  }

  const fetchParts = async () => {
    try {

      setParts([]);

      var url;

      currentType === 'All' ?
        url = "http://localhost:8081/store/parts" :
        url = "http://localhost:8081/store/parts" + `?type=${currentType}`;

      const { data } = await axios.get(url)
      setParts(data);
    }
    catch (error) {
      console.log(error)
      alert("Network error, please try again later...")
    }
  }

  const toggleLoading = () => {

    const hasParts = parts.length > 0;

    hasParts ?
      setIsPartsLoading(false)
      :
      setIsPartsLoading(true);
  }

  useEffect(
    () => {
      fetchTypes();
    }
    , [])


  useEffect(
    () => {
      const hasTypes = types.length > 0
      if (hasTypes) {
        fetchParts()
      }
    }
    , [currentType, types])



  useEffect(() => {
    toggleLoading()
  },
    [parts])

  return (
    <>
      {
        (isTypesLoading || isPartsLoading) ?
          <Loading />
          :
          <div>

            <div className={"row operations"}>
              <span><SearchBox searchValue={searchValue} searchHandler={searchHandler} /></span>
              <span><TypeBtn btnText={currentType} btnHandler={typeBtnHandler} /></span>
              <span><SortBtn sortOrder={sortOrder} btnHandler={sortBtnHandler} /></span>
            </div>

            < div className={"table"}>
              {
                parts
                  .filter(filterFunction)
                  .sort(sortFunction)
                  .map((part) => {
                    const keyShouldBeUnique = hashCode(JSON.stringify(part))
                    return (<PartRow key={keyShouldBeUnique} part={part} />)
                  })
              }

            </div>
          </div>

      }
    </>
  )

}


export default MainPage;