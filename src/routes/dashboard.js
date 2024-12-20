const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get("/total_likes", function (req, res) {
    dashboardController.total_likes(req, res);
});

router.get("/total_noticias", function (req, res) {
    dashboardController.total_noticias(req, res);
});

router.get("/total_transferencias", function (req, res) {
    dashboardController.total_transferencias(req, res);
});

router.get("/mais_publicacoes", function (req, res) {
    dashboardController.mais_publicacoes(req, res);
});

router.post("/qtd_publicacoes/", function (req, res) {
    dashboardController.qtd_publicacoes(req, res);
});

router.get("/grafico_bar/", function (req, res) {
    dashboardController.grafico_bar(req, res);
});

module.exports = router;