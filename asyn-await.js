const { resolve } = require("path")

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('number checked')
    }, 2000)
})
const processData = async () => {
    //const data = await getDataPromise(2)
        let data = await getDataPromise(2)
         data = await getDataPromise(data)
         data = await getDataPromise(data)
         return data
        //console.log(data)
}

processData().then((data) => {
    console.log('data', data)
}).catch((error) => {
    console.log('Error', error)
})