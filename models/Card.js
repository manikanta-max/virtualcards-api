const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  owner_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  custname: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  spend: {
    value: {
      type: Number,
      require: true
    },
    currency: {
      type: String,
      required: true
    },
  },
  avaliable: {
    value: {
      type: Number,
      require: true
    },
    currency: {
      type: String,
      required: true
    },
  },
  cardtype: {
    type: String,
    required: true
  },
  expiry: {
    type: String,
    required: true
  },
  limit: {
    type: Number,
    required: true
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Card', cardSchema)