// const arr = [
//   'Asabeneh',
//   250,
//   true,
//   { country: 'Finland', city: 'Helsinki' },
//   { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
// ] // arr containing different data types
// const numbers=[1,2,3,4,5,6]
// numbers[0]=12
// numbers[1]=23
// console.log(numbers)
// console.log(numbers.lastIndexOf(5))
// console.log(numbers.lastIndexOf(6))
// console.log(numbers.lastIndexOf(7))
// numbers.push(55)
// numbers.reverse()
// console.log(numbers)

// const web=[
//   'kal','be','js'
// ]
// console.log(web.includes('kal'))

// const kal =Array(5).fill('kalkidan')
// console.log(kal)



// const firstlist=[1,2,3,4]
// const secondlist=[5,6,7,8]
// const thirdlist=firstlist.concat(secondlist)
// console.log(thirdlist)
// console.log(thirdlist.length)
// console.log(thirdlist.indexOf(6))

// //quation 1
// const kali=[]
// const kaliya=[1,2,3,4,5,6,4,43,32,67,7653,24]
// console.log(kaliya.length)
// console.log(kaliya[0])
// const mixedDataTypes=["k","l",2,4,6.7]
// const Companies=["Facebook", "Google"," Microsoft", "Apple"," IBM", "Oracle ", "Amazon"]
// console.log(Companies)


// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// // Remove all punctuation using regex and convert the string to an array of words
// let words = text.replace(/[^\w\s]/g, '').split(' ');

// console.log(words); // Output the array of words
// console.log(words.length); // Output the number of words


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' at the beginning if it's not already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
if (!shoppingCart.includes('kal')){
  shoppingCart.unshift('kal')
}

// Add 'Sugar' at the end if it's not already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}
if (!shoppingCart.includes('yab')){
  shoppingCart.push('yab')
}

// Remove 'Honey' if allergic
const isAllergicToHoney = true; // Set to true if allergic
if (isAllergicToHoney) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);
const countries =['usa','ethiopa','germany','brazil']
if (countries.includes('ethio')){
  console.log('ethiopan');
}
else{
  countries.push('ethio')
}
console.log(countries)