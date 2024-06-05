const fs = require('fs');
const path = require('path');

const controller = {
    index: (req, res) => {
        return res.render('index')
    }
}

module.exports = controller;