import mongoose from 'mongoose'
import validator from 'validator'

const schema = new mongoose.Schema({
  account: {
    type: String,
    required: [true, '缺少帳號欄位'],
    minlength: [4, '帳號必須 4 個字以上'],
    maxlength: [20, '帳號必須 20 個字以下'],
    unique: true,
    match: [/^[A-Za-z0-9]+$/, '帳號格式錯誤']
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, '缺少信箱欄位'],
    unique: true,
    validate: {
      validator (email) {
        return validator.isEmail(email)
      },
      message: '信箱格式錯誤'
    }
  },
  phone:{
    type:String,
    match: [/^[0-9]+$/, '電話格式錯誤'],
    minlength: [10, '電話必須 10 個字'],
    maxlength: [10, '電話必須 10 個字'],
    unique: true,
  },
  tokens: {
    type: [String]
  },
  cart: {
    type: [
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
    ]
  },
  // 通常管理員不會寫在這裡 範例寫一起
  role: {
    // 0 = 使用者
    // 1 = 管理員
    type: Number,
    default: 0
  }
  //停用資料出來的版本資料修改數"__v":0
}, { versionKey: false })

export default mongoose.model('users', schema)
