const express = require("express");
const router = express.Router();
const Alien = require("../models/alien");

router.get("/", async(req, res) => {
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch (error) {
        res.send("Error" + error);
    }
});

router.get("/:id", async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch (error) {
        res.send("Error" + error);
    }
});

router.post("/", async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
    });
    try {
        const x = await alien.save();
        res.json(x);
    } catch (error) {
        res.send("Error" + error);
    }
});

router.put("/:id", async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        alien.name = req.body.name;
        alien.tech = req.body.tech;
        const x = await alien.save();
        res.json(x);
    } catch (error) {
        res.send("Error" + error);
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        // alien.sub = req.body.sub;
        const x = await alien.remove();
        res.json(x);
    } catch (error) {
        res.send("Error" + error);
    }
});

module.exports = router;