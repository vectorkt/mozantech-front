# STORE-PARTS-FRONT

I was told the deadline for this exercise is two weeks, therefore I prioritized a few other technical tests with shorter deadlines first.

Some notes:

- Code that ships, not code that's perfect.
- The project does not contain complex dependencies that would have been overkill: no SASS, no Bootstrap, Redux, Typescript etc.
- The only complex dependency is Axios, to facilitate the API request.
- Everything is **hand built**. One exception is a hash function(when's the last time you implemented one by hand since leaving university?).
- Not a talented designer, though I've put in a bit of work towards the CSS to showcase ability.
- Since the provided API was quite slow and the returned queries are imprecise, I did not bind API calls to the search box. 
- Instead, I bound API calls to the type filter and the Parts page.
- Though I've not had much experience with React unit testing, I've built a rudimentary unit test for everything using the React testing library
- One thing I couldn't wire was a mock API with Axios. I'm sure I could do it eventually, though after a day of fruitless search, it's clear I have to move on. If you have suggestions on that point, I'd be more than happy to hear them.

## APP Documentation

To run the APP you will two commands.

```
npm install
npm run start
```

It should automatically open the default 3000 port. 

If there are any issues, let me know, I'll deploy it somewhere.
