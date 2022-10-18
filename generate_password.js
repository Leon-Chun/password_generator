//this function output random letter
function randomLetter(collectionArray) {
  let randomIndex = Math.floor(Math.random() * collectionArray.length)
  return collectionArray[randomIndex]
}



function generatePassword(options){
  //define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  //define dummy data (測試用)
  // const options = {
  //   length: 5,
  //   numbers: 'on',
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   symbols: 'on',
  //   excludeCharacters: '978'
  // }

  //create a collection to store things user pick up
  //將user想要得密碼要素，丟進陣列裡]
  
  let collectionArray = []

  if(options.lowercase ==='on' ){
    collectionArray = collectionArray.concat(lowerCaseLetters.split(''))
  }

  if(options.uppercase === 'on') {
    collectionArray = collectionArray.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collectionArray = collectionArray.concat(number.split(''))
  }

  if (options.symbols === 'on') {
    collectionArray = collectionArray.concat(symbols.split(''))
  }
  


  //remove things user do not need  
  //原陣列collectionArray
  //不需要的要素 option.excludeCharacters 字串
  //1.先判斷有沒有user不要的要素，有就篩，沒有就繼續下一步 用if
  // 一一比對內容，不要的篩掉
  if(options.excludeCharacters){
    collectionArray = collectionArray.filter((character) =>
      !options.excludeCharacters.includes(character)
     )
  }

  //加個防呆機制，避免空輸入
  if(collectionArray.length === 0 ){
    return 'There is no valid character in your selection'
  }



  //start generating password
  //需用到 Math.random() , 搭配 Math.floor() ，看陣列內有多少元素要抽獎 .length
  //先寫好隨機抽的機制，並接起結果
  //把這小功能做成小function，方便呼叫使用,最後要丟到外面去。
  //function間是不互相影響的
  let password = ''

  for(i=1 ; i <= options.length ; i++ ){
    password += randomLetter(collectionArray)
  }


  //return password
  //1.function 一定搭 return 把 目的結果值 傳出去。
  //2.先把帶的假資料的變數 option，放到這支function的參數裡：function(option)

  // console.log(password)
  return password

  // console.log('This function will generate password')
} 

//把這個 function, export出去，給其他檔案引用，例如給 app.js用。
//而引用方 使用 require 引用
module.exports = generatePassword
// generatePassword()
