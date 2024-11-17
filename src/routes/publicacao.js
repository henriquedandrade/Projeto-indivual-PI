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

//BUSCAR AS NOTICIAS PARA O FEED DE NOTICIAS
router.get("/listar_noticias", function (req, res) {
  publicacaoController.listar_noticias(req, res);
});

//BUSCAR AS NOTICIAS PARA O FEED DE TRANSFERENCIAS RECENTES
router.get("/listar_trasnferencias_recentes", function (req, res) {
  publicacaoController.listar_trasnferencias_recentes(req, res);
});

router.get("/contabilizar_like/:id", function (req, res) {
  publicacaoController.contabilizar_like(req, res);
});

router.get("/:idPost/:id", function (req, res) {
  publicacaoController.consultar_like_transferencias(req, res);

})

router.post("/like/:id/:idPost", function (req, res) {
  publicacaoController.like_transferencias(req, res);
});

router.delete("/unlike/:id/:idPost", function (req, res) {
  publicacaoController.unlike_transferencias(req, res);
});

module.exports = router;

