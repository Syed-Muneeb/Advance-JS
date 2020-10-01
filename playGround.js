
const name = "Muneeb";

setTimeout(() => console.log("This is setTime out"),2000);


fetch ("https://jsonplaceholder.typicode.com/todos/2")

.then(response => response.json())

.then(data => console.log(data))

.catch(err => console.log("catch in error", err))

console.log(name)

