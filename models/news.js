import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  image: {
    type: String
  },
  title: {
    type: String,
    required: [true, '給個標題吧']
  },
  description: {
    type: String,
    required: [true, '要有描述哦']
  }
}, { versionKey: false })

export default mongoose.model('news', schema)