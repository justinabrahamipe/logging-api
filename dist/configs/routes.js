"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getActivitiesList_1 = require("../src/getActivitiesList");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Hello, World!");
});
router.get("/activities", (req, res) => {
    (0, getActivitiesList_1.getUsers)().then((data) => {
        console.log(data);
        res.send("activities");
    });
});
router.get("/users/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send(`User ID: ${userId}`);
});
exports.default = router;
