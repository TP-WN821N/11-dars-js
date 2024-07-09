// 1. argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan function tuzing
const numberDigit = (num = -12) => {
  if (num < 0) {
    num *= -1
  }
  let arr = Array.from(num.toString(), Number)
  let digit = arr.length
  return !isNaN(num) ? digit : "Son kiritmadingiz."
}
// console.log(numberDigit());


// 2. argument sifatida berilgan stringda nechta son qatnashganligini aniqlaydigan function tuzing
const textCountNum = (str = "123") => {
  let count = 0
  str += ""
  let err = str.split("")
  err.forEach((item) => {
    if (!isNaN(item)) {
      count++
    }
  })

  return count
}
// console.log(textCountNum());


// 3. argument sifatida berilgan stringda nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing
const stringCountA = (str = "Saalom Olam hmm") => {
  let countStrA = 0
  let arr = str.split(" ")
  arr.forEach((item) => {
    let itemArr = item.toLowerCase().split("")
    for (let index in itemArr) {
      if (itemArr[index] === "a") {
        countStrA++
        break
      }
    }
  })
  return `Berilgan stringning ${countStrA} so'zda a harifi qatnashgan`
}
// console.log(stringCountA(" argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan function tuzing"));



// 4. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating Input: “Men dasturlash kursida o’qiyman” Output: {minWord: “Men”, maxWord: “dasturlash”}
const minManWord = (str) => {
  let arr = str.trim().split(" ")
  let minWord = arr[0]
  let maxWord = arr[0]
  arr.forEach((item) => {
    if (minWord.length > item.length && item != "") {
      minWord = item
    } else if (maxWord.length < item.length) {
      maxWord = item
    }
  })
  return { minWord, maxWord }
}
// console.log(minManWord("Men dasturlash kursida o’qiyman"));




//  5. Stringlar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin Input: [”text”, “world”, “laptop”] Output: {”text”: 4, “world”: 4, “laptop”: 6}
let array = ['text', 'world', 'laptop']
const arrayObject = (arr) => {
  let obj = {}
  arr.forEach((item) => {
    obj[item] = item.length
  })
  return obj
}
// console.log(arrayObject(array));



//  6. n natural soni berilgan 2 sonining dastlabki nta darajasidan tashkil topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing n: 4 result : [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha
let getLevel = (n) => {
  let arr = []
  let num = 2
  for (let i = 1; i <= n; i++) {
    arr.push(num)
    num *= 2
  }
  return arr
}
// console.log(getLevel(10));




// 7.let o'rtadagi son
const numsArr = [1, 2, 3, 4]
const middleNum = (arr) => {
  let middle
  let arrLength = arr.length
  if (arrLength % 2 === 1) {
    middle = arr[(arrLength + 1) / 2 - 1]
  } else {
    let sum = arr[arrLength / 2 - 1] + arr[(arrLength / 2)]
    middle = sum / 2
  }
  return middle
}
// console.log(middleNum(numsArr));