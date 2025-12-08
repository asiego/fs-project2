const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// 1. GET all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. GET one item by ID
router.get('/:id', getItem, (req, res) => {
    res.json(res.item);
});

// 3. POST create a new item
router.post('/', async (req, res) => {
    const newItem = new Item(req.body);
    const saved = await newItem.save();
    res.json(saved);
});

// 4. PUT update item
router.put('/:id', async (req, res) => {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.json(updated);
});

// 5. DELETE item
router.delete('/:id', async (req, res) => {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    res.json(deleted);
});