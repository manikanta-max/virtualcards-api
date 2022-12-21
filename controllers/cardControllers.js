const Card = require('../models/Card')
const asyncHandler = require('express-async-handler')


const getCards = asyncHandler(async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const cards = await Card.find({}).limit(pageSize).skip(pageSize * page);
  res.json(cards)
})

const createCard = asyncHandler(async (req, res) => {
  const {
    owner_id,
    name,
    custname,
    budget,
    spent: { value: spendValue },
    spent: { currency: spendCurrency },
    avaliable: { value: avaliableValue },
    avaliable: { currency: avaliableCurrency },
    cardtype,
    expiry,
    limit
  } = req.body

  const cardObj = {
    owner_id,
    name,
    custname,
    budget,
    "spend": {
      "value": spendValue,
      "currency": spendCurrency
    },
    "avaliable": {
      "value": avaliableValue,
      "currency": avaliableCurrency
    },
    cardtype,
    expiry,
    limit
  }

  const card = await Card.create(cardObj)

  if (card) {
    res.status(200).json({ message: `New card ${name} created` })
  } else {
    res.status(400).json({ message: 'Invalid data' })
  }
})

const updateCard = asyncHandler(async (req, res) => {
  res.json({ message: 'Card Updated' })
})

const deleteCard = asyncHandler(async (req, res) => {
  res.json({ message: 'Card Deleted' })
})

module.exports = { createCard, updateCard, deleteCard, getCards }