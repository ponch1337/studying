// const prompt = require('prompt-sync')({ sigint: true });
// const num = prompt('Enter a number: ');
// console.log(`${num} + 4 = ${Number(num) + 4}`);




// const a = 3
// const b = 9
// function sum(num1, num2) {
//     const result = num1 + num2
//     const resultString = `Число ${num1} + число ${num2} = ${result}` // Строка с переменными
//     console.log(resultString)
// }
// sum(a, b)


// const a = function () {console.log('Ya zhizn bol')}
// a()


// const a = 5
// const b = 3
// const sum = (num1, b) => {
//     console.log(num1)
//     console.log(b)
//     console.log(num1+b)
// }
// sum(a, b)


// const object = {
//     sayHi(ghvghvghvgh) {
//         console.log(`Hello, ${ghvghvghvgh}`)
//     },
//     info: {
//         age: 5
//     }
// }
// object.name = 'Kate'
// object.sayHi(object.name)
// object.sayHi('Bodya')

// const object2 = JSON.parse(JSON.stringify(object))
// object2.name = 'Aboba'
// console.log(object2)

// const object2 = Object.assign ({}, object)
// object2.name = 'Aboba'
// object2.sayHi(object2.name)

// const object2 = {...object}
// object2.name = 'Aboba'
// object2.sayHi(object2.name)


// function sum(a, b) {
//     const c = a + b
//     return c
// }


// const result = sum(5, 6)
// console.log(result)


// function printMyName() {
//     console.log('Kate')
// }
// console.log('Start')
// setTimeout(printMyName, 2000)


// function showImage() {
//     console.log('Now you can see images')
// }
// function loadImage(callback) {
//     console.log('Started loading images')
//     console.log('Loading images')
//     console.log('Finished loading')
//     callback()
// }
// loadImage(function (){
//     console.log('Now you can see images')
// })

// let a
// let b 
// function fn() {
//     let b
//     a = true
//     b = 10
//     console.log(b)
//     return b 
// }
// const result = fn()
// console.log(a)
// console.log(result)


// const a=7
// function fn() {
//     function innerFn() {
//         console.log(a)
//     }
//     innerFn()
// }
// fn()

// function fio (name='Ivanessa', surname='Ivanova', fatherName='Ivanovna') {
//     const result = `Hello, ${name} ${surname} ${fatherName}`
//     return result
// }
// const result = fio('Kate', 'Posikira-Kostina', 'Pavlovna')
// console.log(result)
// const result2 = fio('Kate')
// console.log(result2)


// const fio = function (name='Ivanessa', surname='Ivanova', fatherName='Ivanovna') {
//     const result = `Hello, ${name} ${surname} ${fatherName}`
//     return result
// }
// const result = fio('Kate', 'Posikira-Kostina', 'Pavlovna')
// console.log(result)
// const result2 = fio('Kate')
// console.log(result2)


// const fio = (name='Ivanessa', surname='Ivanova', fatherName='Ivanovna') => {
//     const result = `Hello, ${name} ${surname} ${fatherName}`
//     return result
// }
// const result = fio('Kate', 'Posikira-Kostina', 'Pavlovna')
// console.log(result)
// const result2 = fio('Kate')
// console.log(result2)


// const info = {
//     age: 20,
//     name: 'Katya'
// }
// console.table(info)


// const functionWithError = () => {
//     throw new Error('Assshibka')
// }
// try {
//     functionWithError()
// }
// catch (error) {
//     // console.error(error)
//     console.log(error.message)
// }
// console.log('oZHIDanie...')


// let a 
// const b = 5
// if (a>b) {
//     console.log('a is larger')
// }
// else {
//     console.log('b is larger')
// }

// const users = [{ name: 'Kate', age: 20 }, { name: 'Bodya', age: 23 }]
// console.log(users)

// const usersNames = users.map(el => el.name+el.name)
// console.log(usersNames)

// const Suchka = [1, 3]
// const [num1, num2] = Suchka
// console.log(num1, num2)


// const userProfile = 
// {
//     name: 'Kate',
//     commentsQty: 999,
//     hasSignedAgreement: false
// }
// const userInfo = ({ name, commentsQty }) => 
// {
//     if (!commentsQty)
//     {
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentsQty} comments`
// }
// userInfo(userProfile)


// while (true) {
//     const age = +promt('How old are you?')

//     if (age) {
//         alert('Hello') 
//         break
//     }

//     alert ('Not correct')
// }
// alert('End')


// let tries = 0
// while (tries<3) {
//     const age = +promt('How old are you?')

//     if (age) {
//         alert('Hello')
//         break
//     }
// tries ++
// alert ('Not correct')
// }
// alert('End')


for (let i = 0; i < 10; i++) {
    if (i  % 2 ===0) continue 
    console.log(i)
}
console.log('end')