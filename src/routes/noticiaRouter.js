const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); 
const upload_transf = require('../config/configTransf'); 
const noticiaController = require('../controllers/noticiaController');

router.get("", (req, res) => {
  res.render("dashboard")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/publicar', upload.single('foto'), (req, res) => {
  noticiaController.salvar(req, res);
});

router.post('/transferencia', upload_transf.fields([
  { name: 'foto_perfil', maxCount: 1 },
  { name: 'foto_atual', maxCount: 1 },
  { name: 'foto_futuro', maxCount: 1 }]), (req, res) => {
  noticiaController.transferencia(req, res);
});

router.get('/:id', upload.single('foto'), (req, res) => {
  noticiaController.buscarUsuarioPeloId(req, res);
});

module.exports = router;

