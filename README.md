Ex 1:
-----
If you had to use the next node.js module and call methods a and then b sequencially, explain why it's not so straightforward and what are the different solutions if we are using node v.8+.
Which is the most elegant solution in your opinion.
```javascript
module.exports = {
    a: (cb) => {
        setTimeout(()=>{
          return cb(null,1000)
        },1000)
    },

    b: (cb) => {
        setTimeout(()=>{
            return cb(null,500)
        },500)
    },
}
```

### Answer
What `setTimeout` method does in NodeJS is to wait for the amount of milliseconds specified,
and then it puts the callback into the call queue. Once that happens, it gets eventually picked up by the event loop and
sent to the call stack. 

That means that if we execute `a` and `b` one after the other, `b` callback is going to be
sent to the call queue before `a` callback since the timeout is shorter.

If we wanted to execute both methods sequentially, we could put each of them inside a `Promise` and use `async/await` or
`then/catch`. The difference between these two ways is how it's executed: the first being synchronous, the second still
being asynchronous.

Ex 2:
-----
Enum top 5 features a table web component should have

### Answer
Sorting, filtering, searching, paging, grouping

Ex 3:
-----

- Create a rest api containing methods GET/POST/PUT/DELETE, using express, following standards, and with minimal code
- Create a vue (v2) app with view to manage this rest

### Answer
Start the API:
```
npm run api-start
```

Start the UI:
```
npm start
```

Open in your browser:
```
http://localhost:3000/
```