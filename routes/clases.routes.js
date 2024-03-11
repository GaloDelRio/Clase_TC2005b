const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
const joyeriaController = require('../controllers/joyeria.controller');

    router.get('/Add', joyeriaController.get_crear);
    router.post('/crear', joyeriaController.post_crear);
    router.get('/', joyeriaController.get_root);

module.exports= router;