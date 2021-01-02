//const myFunction = () => {
    //const name = 'this is my name'
    //const printName = () => {
        //console.log(name)
    //}
    //return printName
//}
         //const myPrintName = myFunction()
            //myPrintName()

    const creatCounter = () => {
        let count = 0

        return {
            increment() {
                count++
            },
            decrement(){
                count--
            },
            get () {
                return count
            }
        }
    }
    const counter = creatCounter()
    counter.increment()
    counter.decrement()
    counter.decrement()
        console.log(counter.get())


// Add Subtract
const add = (a,b) => a+b
const creatAdder = (a) => {
    return (b) => {
        return a+b
    }
}
const add10 = creatAdder(10)
console.log(add10(-2))
console.log(add10(10))
const add100 = creatAdder(100)
console.log(add100(40))
console.log(add100(-20))

//Tipper

const creatTipper = (baseTip) => {
    return (amount) => {
        return baseTip + amount
    }
}
const tip30 = creatTipper(-2)
const tip40 = creatTipper(-4)
console.log(tip30(100))
console.log(tip40(100))

