const express = require('express');
const itemRoutes = require('./items');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use("/items", itemRoutes)

// app.get('/items', (req, res) => {
//     return res.json(items)
// })

// app.post('/items', (req, res) => {
//     items.push({name: req.body.name, price: req.body.price})
//     return res.json({"added": {items}})
// })

// app.get('/items/:name', (req, res) => {
//     const foundItem = items.find(item => item.name === req.params.name)
//     if (foundItem === undefined) {
//         throw new ExpressError("Item not found", 404)
//     }
//     res.json({ item: foundItem })
// })

// app.patch('/items/:name', (req, res) => {
//     const foundItem = items.find(item => item.name === req.params.name)
//     if (foundItem === undefined){
//         throw new ExpressError("Item not found", 404)
//     }
//     foundItem.name = req.body.name
//     foundItem.price = req.body.price
//     res.json({ 'updated': { foundItem }})
// })

// app.delete('/items/:name', (req, res) => { 
//     const foundItem = items.findIndex(item => item.name === req.params.name)
//     if (foundItem === -1){
//         throw new ExpressError("Item not found", 404)
//     }
//     cats.splice(foundItem, 1)
//     res.json({ message: "Deleted" })
// })