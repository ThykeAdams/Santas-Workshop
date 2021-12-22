const { hash, compare } = require("bcrypt")
const { randomUUID } = require("crypto")
const { Router } = require("express")
const router = Router()
const userModel = require("../../models/user")
async function checkAuth(req, res, next) {
  let user = userModel.findOne({ tokens: req.cookies.token })
  if (!user) return res.redirect('/login')
  req.user = user
  next()
}
router.post("/register", async (req, res) => {
  const { username, password } = req.body
  hash(password, 10, (err, hash) => {
    if (err) return console.error(err)
    userModel.create({ username, password: hash })
    res.redirect("/login")
  })
})
router.get("/me", checkAuth, async (req, res) => {
  req.user.tokens = null
  console.log(req.user)
  res.json(req.user)
})

router.post("/login", async (req, res, next) => {
  let d = await userModel.findOne({ username: req.body?.username })
  if (!d) return res.status(401).send("Invalid username or password")
  let passCheck = await compare(req.body.password, d.password)
  if (!passCheck) return res.status(401).send("Invalid username or password")
  let token = `${randomUUID()}.${randomUUID()}.${randomUUID()}`
  d.tokens.push(token)
  d.save()
  res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 365 })
  res.json({ code: 1002, status: "logged in" })
})

module.exports = router