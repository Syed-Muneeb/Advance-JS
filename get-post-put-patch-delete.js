
    // getting a resourse

//  get data  

fetch ("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(data => console.log(data))


    // creating a resource

// post data 

fetch("https://jsonplaceholder.typicode.com/posts" , {

    method: "POST",
    body : JSON.stringify({

        userID : "5",
        title : "hello",
        body : "world"
    }),
    headers : {

        'Content-type': 'application/json; charset=UTF-8',
    }
})
.then(response => response.json())
.then(data => console.log(data))


// updating a resource 

    // put method


fetch ("https://jsonplaceholder.typicode.com/posts/1" , {

    method : "PUT",
    body : JSON.stringify({

        userID : 4,
        title : "hello",
        body : "foo"
    }),
    headers : {

        'Content-type': 'application/json; charset=UTF-8',
    }
})

.then(response => response.json())
.then(data => console.log(data));



    // updating a resource with a patch

fetch("https://jsonplaceholder.typicode.com/posts/1", {

    method : "PATCH",
    body : JSON.stringify({

        title : "muneeb"
    }),
    headers : {

        'Content-type': 'application/json; charset=UTF-8',
    }
})

.then(response => response.json())
.then(data => console.log(data))


    // deleting resource


fetch("https://jsonplaceholder.typicode.com/posts/1",{

    method : "DELETE",
})
.then(response => response.json())
.then(data => console.log(data))


    // feltering resousre


fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
.then(response => response.json())
.then(data => console.log(data))


fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
.then(response => response.json())
.then(data => console.log(data))

