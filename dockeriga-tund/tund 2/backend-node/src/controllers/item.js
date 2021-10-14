const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  const newItem = {
    name: "Table",
    quality: 99,
    unused: true,
    color: "blue"
  }

  const createdItem = new Item(newItem)

  const savedItem = createdItem.save()

  res.status(200).send("yay")
}

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findOne({_id: id})

  item.quality = item.quality + 1;
  const savedItem = item.save()

  res.status(200).send("done")
}

exports.deleteItem = async (req, res) => {
  console.log(req.params)
  const { id } = req.params;
  

  const item = await Item.findOneAndDelete({ _id: id })

  console.log(item)
}