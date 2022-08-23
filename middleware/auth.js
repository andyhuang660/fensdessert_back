import passport from 'passport'
import jsonwebtoken from 'jsonwebtoken'

export const login = (req, res, next) => {
  // 不要存任何session
  // 把(err, user, info)拉出來
  passport.authenticate('login', { session: false }, (err, user, info) => {
    if (err || !user) {
      if (info.message === 'Missing credentials') info.message = '驗證錯誤'
      return res.status(401).send({ success: false, message: info.message })
    }
    // 把抓的user代進 req裡面
    req.user = user
    next()
  })(req, res, next)
}

export const jwt = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, data, info) => {
    if (err || !data) {
      if (info instanceof jsonwebtoken.JsonWebTokenError) {
        // console.log(err)
        return res.status(401).send({ success: false, message: '驗證錯誤' })
      } else {
        // console.log(err)
        return res.status(401).send({ success: false, message: info.message })
      }
    }
    // console.log(data.user)
    req.user = data.user
    req.token = data.token
    next()
    // console.log(req.user)
  })(req, res, next)
}