const express = require('express')
const exphbs = require('express-handlebars')

//function引用，命名跟function一樣就好
const generatePassword = require('./generate_password')

const app = express()
const port = 3000

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting body-parser
app.use(express.urlencoded({ extended: true }))

//set routes
app.get('/', (req, res) => {
  res.render('index')
})

//此路由，是user送出資料後，會走這條
//為什麼表單送出會使用post? 因為我們在<form>的method寫的是POST
//本身預設是GET，但是user輸入資料會出現在網址，要是有密碼就完蛋。
app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)  //直接呼叫function，並用console看成果
  // console.log('req.bodyParser', req.body,'\n','password',password)  
  res.render('index', { password: password, options: options })
})

app.listen(port, () => {
  console.log(`Express app listening on port:${port}`)
})