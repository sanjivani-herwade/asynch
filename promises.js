//callback
const getDataCallback = (callback) => {
setTimeout(() => {
    //console.log('Time up')
    //console.log('Time up')
   })
}

getDataCallback((error, data) => {
        if (error) {
            console.log(error)
         } else {
             console.log(data)
         }
     })
    

//Promises
const getDataPromise = (data) => {
        return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('my promise: ${data}')
        //reject('my name is:')
        //reject('my name is:')
     })
  })
}

const myPromise = getDataPromise (111)
myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})