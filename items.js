const express = require('express')
const router = new express.Router()
const items = require('./fakeDb')

router.get('/', (req, res) => {
    return res.json(items)
})

router.post('/', (req, res) => {
    items.push({name: req.body.name, price: req.body.price})
    return res.json({"added": {items}})
})

router.get('/:name', (req, res) => {
    const foundItem = items.find(item => item.name === req.params.name)
    if (foundItem === undefined) {
        throw new ExpressError("Item not found", 404)
    }
    res.json({ item: foundItem })
})

router.patch('/:name', (req, res) => {
    const foundItem = items.find(item => item.name === req.params.name)
    if (foundItem === undefined){
        throw new ExpressError("Item not found", 404)
    }
    foundItem.name = req.body.name
    foundItem.price = req.body.price
    res.json({ 'updated': { foundItem }})
})

router.delete('/:name', (req, res) => { 
    const foundItem = items.findIndex(item => item.name === req.params.name)
    if (foundItem === -1){
        throw new ExpressError("Item not found", 404)
    }
    cats.splice(foundItem, 1)
    res.json({ message: "Deleted" })
})