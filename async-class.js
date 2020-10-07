
// const posts = [


//     {title : "post one", body : "this is post one"},
//     {title : "post two", body : "this is post one"},

// ]

// function getPost (){

//     let outPut = "";

//     setTimeout(() => {
        
//             posts.forEach((post)=> {

//                 outPut += `<li> ${post.title} </li>`
//             })

//             document.body.innerHTML = outPut
            
//         }, 1000);
        
//     }
    

    // function createPost (post,callback) {
        
    //     setTimeout(() => {
            
    //         posts.push(post)

    //         callback()
            
    //     },500);
    // }
    
    // createPost({title : "post three", body: "this is post three"},getPost)




// const posts = [

//     {title : "post one", body : "this is post one"},
//     {title : "post two", body : "this is post one"},

// ]

// function getPost (){

//     let outPut = "";

//     setTimeout(() => {
        
//             posts.forEach((post)=> {

//                 outPut += `<li> ${post.title} </li>`
//             })

//             document.body.innerHTML = outPut
            
//         }, 1000);
        
//     }
    

//     function createPost (post) {
        
//         return new Promise((resolve,reject) => {

//             setTimeout(() => {
                
//                 posts.push(post);

//           let err = false;

//                 if(!err){

//                     resolve();

//                 }  else{

//                     reject("something went wrong");
//                 }

//             }, 2000);

//   })
// }

//     createPost({title: "post three", body: "this is post three"})
//     .then(() => {

//         getPost();
//         return 10
//     })
//     .then( val => val *= 10 )
//     .then( val => console.log(val) )
//     .catch((err) => console.log(err))
    


// const posts = [

//     {title : "post one", body : "this is post one"},
//     {title : "post two", body : "this is post two"}

// ]

// function getPost(){

//     let output = "";

//     setTimeout(()=> {

//         posts.forEach(post => {
            
//             output += `<li> ${post.title} </li>`

//             document.body.innerHTML = output
//         });
//     },1000)
// }

// function createPost(post){

//     return new Promise((resolve,reject)=> {

//             setTimeout(() => {

//             posts.push(post);
//                 let err = false;

//              if(!err){

//                     resolve(10)
//               }else{

//                     reject("something went wrong");
//                 }

//             }, 2000);
//     })
// }

    
// createPost({title: "post three", body : "this is post three"})

//     .then((value)=> {

//         getPost()
//         return value
//     })
//     .then(val =>  val *= 10 )
//     .then(val => console.log(val))
//     .catch(err => console.log(err))


// fetch('https://jsonplaceholder.typicode.com/posts')
//  .then(response => response.json())
//   .then(data => data.map(post => post.title))
//    .then(data => console.log(data))
//     .catch(err => console.log(err))



let getPost = async ()=> {


    try{

        let postResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
        let userResponse = await fetch("https://jsonplaceholder.typicode.com/users");

        
        let postData = await postResponse.json()
        let userData = await userResponse.json()

        let title = postData.map(post => {

                return {

                    title : post.title
                }
        });
        console.log(title)
    
        console.log("postResponse =====> ", postData)
        console.log("userResponse =====> ", userData)
    }
    
    catch (err) {

        console.log(err)
    }
}

getPost()





