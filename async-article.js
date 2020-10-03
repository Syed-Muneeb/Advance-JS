
console.log("helli")    


// let promise = new Promise((resolve,reject) => {

//     let a = 1 + 1;

//     if(a == 2){

//         resolve ("success");
//     }
//     else{

//         reject("failed")
//     }
// })

// promise.then((value) => {

//         console.log(value)
// })
// .catch((value) =>{ 

//     console.log(value)
// })


// callback exmaple 


// function watch(errorCallback,callback) {

//         let userLeft = false;
//         let userWatching = false
        

//             if (userLeft){

//             errorCallback({

//                 name : "user left",
//                 message : "episode complete"

//             })
//         }

//         else if(userWatching){

//             errorCallback({

//                 name : "user watching movie",
//                 message : "with harvey"
//             })
//         }

//         else{

//                 callback("Awesome")
//         }
// }

// watch((value) => console.log(value.name + " " + value.message), 
//                 err => console.log(err))


// let promise = new Promise((reslove,reject) => {

//         let userLeft = false;
//         let userWatching = false;

//         if(userLeft){

//             reject({

//                 name : "episod complete",
//                 message : "shit"
//             })
//         }

//         else if(userWatching){

//             reject({

//                 name : "user watching",
//                 message : "with harvey"
//             })
//         }
//         else {

//             reslove("Awesome")
//         }
// })

// promise.then(response => console.log(response))
//         .catch(err => console.log(err.name + " " + err.message))



function makeRequest (location) {

    return new Promise((resolve,reject) => {

          console.log(`making request to ${location}`);

            if(location === "google"){

                    resolve("google say hello");              
            }

            else{

                 reject("we can only talk to google");
         }
    })
}

function processRequest (data) {

        return new Promise ((resolve,reject)=>{

                if(data){

                  resolve(data);
           }
      })
}

// makeRequest("google").then((response) => {

//         console.log("response received")
//      return processRequest(response)
// })

// .then(dataBack => console.log("process request" ,dataBack))

async function doWork (){

        let response = await makeRequest("google");
        console.log("response recived");

        let process = await processRequest(response);
        console.log("process" , process)
}

doWork()