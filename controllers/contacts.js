import contacts from '../models/contacts.js'

export const createForm = async (req, res) => {
  try {
    const result = await contacts.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      text: req.body.text,
    })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    console.log(error)
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getForm = async (req, res) => {
  try {
    const result = await contacts.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}