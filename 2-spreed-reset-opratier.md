Spread opraters, mostly used for coping object or array like this and for destructuring

```
const a1 = ['1', '2']

const a2 = [...a1],
```

# Rest opraters

- keep that in mind that rest opraters, return always array

```
const arr = (...args) => {
  return args,
}

console.log(arr(1,2,3,4))
// Output: [1,2,3,4]
// note that in return we got the array 

```


---
Although both are have same syntax name diffre based on where it's used