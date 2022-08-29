import mongoose from 'mongoose'
import validator from 'validator'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '缺少姓名欄位'],
  },
  phone:{
    type:String,
    required: [true, '缺少電話欄位'],
    match: [/^[0-9]+$/, '電話格式錯誤'],
    minlength: [10, '電話必須 10 個字'],
    maxlength: [10, '電話必須 10 個字'],
    unique: true,
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
  text: {
    type: String
  }
}, { versionKey: false })

export default mongoose.model('contacts', schema)
