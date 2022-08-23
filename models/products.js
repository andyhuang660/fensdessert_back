import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  image: {
    type: String
  },
  name: {
    type: String,
    required: [true, '請輸入商品名稱']
  },
  description: {
    type: String,
    required: [true, '給商品一些描述']
  },
  price: {
    type: Number,
    min: [0, '價格格式錯誤'],
    required: [true, '必須填入價格']
  },
  sell: {
    //預設false為下架
    type: Boolean,
    default: false
  },
  // category 類別
  category: {
    type: String,
    required: [true, '缺少分類欄位'],
    // 用enum做分類篩選
    enum: {
      values: ['肉桂捲', '提拉米蘇','司康','季節限定'],
      message: '商品分類錯誤'
    }
  }
}, { versionKey: false })

export default mongoose.model('products', schema)
