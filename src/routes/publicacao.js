const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); 
const upload_transf = require('../config/configTransf'); 
const publicacaoController = require('../controllers/publicacaoController');

router.get("", (req, res) => {
  res.render("dashboard")
});

//publicar NOTICIA
router.post('/publicar_noticia', upload.single('foto'), (req, res) => {
  publicacaoController.publicacao_noticia(req, res);
});

//publicar TRANSFÊRENCIA
router.post('/publicar_transferencia', upload_transf.fields([
  { name: 'foto_perfil', maxCount: 1 },
  { name: 'foto_atual', maxCount: 1 },
  { name: 'foto_futuro', maxCount: 1 }]), (req, res) => {
  publicacaoController.publicacao_transferencia(req, res);
});

router.get("/listar_noticias", function (req, res) {
  publicacaoController.listar_noticias(req, res);
});

//BUSCAR AS NOTICIAS PARA O FEED DE NOTICIAS


module.exports = router;

