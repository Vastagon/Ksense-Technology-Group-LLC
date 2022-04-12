fetch('https://my-json-server.typicode.com/vastagon/vastagon-takehome/', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json'}
})

.then(res => console.log(res))