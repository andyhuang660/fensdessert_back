import news from '../models/news.js'

export const createNews = async (req, res) => {
  try {
    const result = await news.create({
      title: req.body.title,
      description: req.body.description,
      image: req.file?.path || ''
    })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      return res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

// 抓最消息
export const getNews = async (req, res) => {
  try {
    const result = await news.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}


// 編輯最新消息
export const editNews = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description
    }
    if (req.file) data.image = req.file.path
    const result = await news.findByIdAndUpdate(req.params.id, data, { new: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      return res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}