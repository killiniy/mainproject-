const num = 42000
let str = '2020-12-21 12:34:35'
const u = null 
const u2 = undefined
const arr = ['vasya', 'petya', 'tanya']
const obj = {}
const ao = [ { number: 1 }, { number: 2 }, { number: 3 }, { number: 4 } ]

const newarr = []

function capitalize(name){
    let firstChar = name.charAt(0).toUpperCase()
    newarr.push(firstChar + name.slice(1, name.length))
}

arr.forEach(capitalize)

console.log(newarr)

newarr.push('Masha')

console.log(newarr)

const a = [1,2,3,4,5,6]

const b = a.map((el, i) => ({index: i, number: el}))

console.log(b)

const sum = b.reduce((prevValue, current) => prevValue + current.number, 0)

console.log(sum)

//const newarr2 = newarr.reduce()

//console.log(newarr2)

const people = [{age: 29, name: 'Ilya'}, {age: 28, name: 'Vanya'}, {age: 40, name: 'Tanya'}]

// Задача Получить на выходе вот это "Ilya,Vanya"

const names = people.filter(info => info.age < 30).map(info => info.name).join(',')
console.log(names)
