const express = require('express')
const router = express.Router()
const cardControllers = require('../controllers/cardControllers')

router.route('/')
  .get(cardControllers.getCards)
  .post(cardControllers.createCard)
  .put(cardControllers.updateCard)
  .delete(cardControllers.deleteCard)

module.exports = router