// 把要驗證的類型傳進這裡
export default (type) => {
  // console.log(type)
  // 寫middleware一定要有(req, res, next)
  // next的功用就是進到下一步 不會帶任何東西
  return (req, res, next) => {
    // console.log(req.headers['content-type'])
    // 把原本寫在controllers的驗證搬過來這邊
    // 如果這個請求沒有內容類型 或是這個請求沒有json狀態
    if (!req.headers['content-type'] || !req.headers['content-type'].includes(type)) {
      return res.status(400).send({ success: false, message: '資料格式錯誤' })
    }
    next()
  }
}
