import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import './PartsPage.css'


const PartsPage = () => {

    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true)

    const query = {
        name: searchParams.get('name'),
        price: searchParams.get('price'),
        type: searchParams.get('type'),
    }

    const isQueryValid =
        query.name && query.name.length > 0
        && query.type && query.type.length > 0
        && query.price && query.price.length > 0;

    const fetchPart = async () => {

        if (isQueryValid) {
            try {
                var url = "http://localhost:8081/store/parts"
                    + `?name=${query.name}&type=${query.type}&price=${query.price}`
                //console.log(url)
                const { data } = await axios.get(url)
                const robustParts = data.map((datum) => JSON.stringify(datum));
                const isPartInAPI = robustParts.includes(JSON.stringify(query));

                setShouldDisplay(isPartInAPI)
                setIsLoading(false)
            }
            catch (error) {
                //console.log(error)
                alert("Network error, please try again later...")
            }
        }
        else {
            setIsLoading(false)
        }
    }

    useEffect(() => {


        fetchPart();
    },
        [])


    return (
        <>
            {
                isLoading ?
                    <Loading />
                    :
                    shouldDisplay ?
                        <div className={"panel"}>
                            <div>{searchParams.get('name')}</div >
                            <div>{searchParams.get('type')}</div>
                            <div>{searchParams.get('price')}</div>
                        </div>
                        :
                        <div>Part Not found</div>

            }
        </>
    )
}

export default PartsPage;