import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  date: {
    type: Date,
    // 拿目前的時間戳記當預設值
    default: Date.now()
  },
  user: {
    type: mongoose.ObjectId,
    ref: 'users',
    required: [true, '缺少使用者欄位']
  },
  products: [
    {
      product: {
        type: mongoose.ObjectId,
        ref: 'products',
        required: [true, '缺少商品欄位']
      },
      quantity: {
        type: Number,
        required: [true, '缺少數量欄位']
      }
    }
  ],
  delivery:{
    type:String
  }
  // status: {
  //   // 0 = 訂單成立
  //   // 1 = 取消訂單
  //   // 2 = 已出貨
  //   type: String,
  //   required: [true, '缺少狀態欄位'],
  //   // 用enum做分類篩選
  //   enum: {
  //     values: ['訂單成立', '已出貨','取消訂單'],
  //     message: '訂單狀態錯誤'
  //   }
  // }
}, { versionKey: false })

export default mongoose.model('orders', schema)
