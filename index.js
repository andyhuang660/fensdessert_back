import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import './passport/passport.js'
import usersRouter from './routes/users.js'
import productRouter from './routes/products.js'
import ordersRouter from './routes/orders.js'
import newsRouter from './routes/news.js'


mongoose.connect(process.env.DB_URL)

const app = express()

app.use(cors({
  // origin代表進來的網址 callback代表要不要讓他過
  origin (origin, callback) {
    // 這邊console.log()出來會是前台網址
    // console.log(origin)
    // 如果我的請求有包含github跟localhost的話
    if (origin === undefined || origin.includes('github') || origin.includes('localhost') || origin.includes('127.0.0.1')) {
      // callback前面要放錯誤 放null
      callback(null, true)
    } else {
      callback(new Error('Not Allowed'), false)
    }
  }
}))

app.use(express.json())

app.use((_, req, res, next) => {
  res.status(400).send({ success: false, message: '請求格式錯誤' })
})

app.use('/users', usersRouter)

app.use('/products', productRouter)

app.use('/orders', ordersRouter)

app.use('/news', newsRouter)

app.all('*', (req,res)=>{
  res.status(400).send({ success: false, message: '找不到' })
})


app.listen(process.env.PORT || 4000, ()=>{
  console.log('Server is running')
})