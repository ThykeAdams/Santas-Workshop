const { randomUUID } = require("crypto")
const { Router } = require("express")
const router = Router()

router.use("/auth", require("./subs/auth"))

router.get("/cart", (req, res) => {
  res.json(req.session.cart)
})
router.post("/cart", (req, res) => {
  req.body.item.uuid = randomUUID()
  req.session.cart.push(req.body)
  req.session.save()
  res.send(req.session.cart)
})
router.delete("/cart/:id", async (req, res) => {
  req.session.cart = req.session.cart.filter(item => item.item.uuid !== req.params.id)
  req.session.save()
  res.send(req.session.cart)
})
module.exports = router