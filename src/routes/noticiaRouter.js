const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
const noticiaController = require('../controllers/noticiaController');

router.get("", (req, res) => {
  res.render("dashboard")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/publicar', upload.single('foto'), (req, res) => {
  noticiaController.salvar(req, res);
});

router.get('/:id', upload.single('foto'), (req, res) => {
  noticiaController.buscarUsuarioPeloId(req, res);
});

module.exports = router;

