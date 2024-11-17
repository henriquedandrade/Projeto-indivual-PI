const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); 
const upload_transf = require('../config/configTransf'); 
const publicacaoController = require('../controllers/publicacaoController');

router.get("", (req, res) => {
  res.render("dashboard")
});


//NOTÍCIAS

//ROTA PARA PUBLICAR NOTICIA
router.post('/publicar_noticia', upload.single('foto'), (req, res) => {
  publicacaoController.publicacao_noticia(req, res);
});

//ROTA PARA BUSCAR AS NOTICIAS PARA O FEED DE NOTICIAS
router.get("/listar_noticias", function (req, res) {
  publicacaoController.listar_noticias(req, res);
});

// ROTA PARA CONTABILIZAR QUANTOS LIKES CADA NOTÍCIA POSSUI, SERÁ EXECUTADO NO FOR DA FUNÇÃO AtualizarNoticias()
router.get("/contabilizarNoticia_like/:id", function (req, res) {
  publicacaoController.contabilizar_likeNoticia(req, res);
});

//ROTA PARA VERIFICAR QUAIS NOTÍCIAS O USUÁRIO CURTIU, ESSA ROTA SERÁ EXECUTADA AO ACABAR DE CARREGAR AS NOTÍCIAS ARQUIVO HTML
router.get("/qualNoticia_curtiu/:id", function (req, res) {
  publicacaoController.qualNoticia_curtiu(req, res);
});

// ROTA PARA QUANDO O USUÁRIO CLICAR NO BOTÃO DE CURTIR, ELE PRIMEIRO IRÁ CONSULTAR SE JÁ CURTIU OU NÃO CURTIU, POSTERIORMENTE IRÁ EXECUTAR A PRÓXIMA ROTA DE CURTIR OU NÃO CURTIR
router.get("/consultarNoticia/:idPost/:id", function (req, res) {
  publicacaoController.consultar_like_noticia(req, res);
})

// ROTA PARA DAR LIKE NA NOTÍCIA
router.post("/likeNoticia/:id/:idPost", function (req, res) {
  publicacaoController.like_noticia(req, res);
});

// ROTA PARA TIRAR LIKE NA NOTÍCIA
router.delete("/unlikeNoticia/:id/:idPost", function (req, res) {
  publicacaoController.unlike_noticia(req, res);
});



//TRANSFÊRENCIAS

//ROTA PARA PUBLICAR TRANSFÊRENCIA
router.post('/publicar_transferencia', upload_transf.fields([
  { name: 'foto_perfil', maxCount: 1 },
  { name: 'foto_atual', maxCount: 1 },
  { name: 'foto_futuro', maxCount: 1 }]), (req, res) => {
  publicacaoController.publicacao_transferencia(req, res);
});

//ROTA PARA BUSCAR AS NOTICIAS PARA O FEED DE TRANSFERENCIAS RECENTES
router.get("/listar_trasnferencias_recentes", function (req, res) {
  publicacaoController.listar_trasnferencias_recentes(req, res);
});

// ROTA PARA CONTABILIZAR QUANTOS LIKES CADA CARD DE TRANSFÊRENCIA POSSUI, SERÁ EXECUTADO NO FOR DA FUNÇÃO AtualizarTransferenciasREcentes()
router.get("/contabilizarTransf_like/:id", function (req, res) {
  publicacaoController.contabilizar_likeTransf(req, res);
});

//ROTA PARA VERIFICAR QUAIS CARD DE TRANSFÊRENCIA O USUÁRIO CURTIU, ESSA ROTA SERÁ EXECUTADA AO ACABAR DE CARREGAR OS CARD DE TRANSFÊRENCIA NO ARQUIVO HTML
router.get("/qualTransf_curtiu/:id", function (req, res) {
  publicacaoController.qualTransf_curtiu(req, res);
});

// ROTA PARA QUANDO O USUÁRIO CLICAR NO BOTÃO DE CURTIR, ELE PRIMEIRO IRÁ CONSULTAR SE JÁ CURTIU OU NÃO CURTIU, POSTERIORMENTE IRÁ EXECUTAR A PRÓXIMA ROTA DE CURTIR OU NÃO CURTIR
router.get("/consultarTransf/:idPost/:id", function (req, res) {
  publicacaoController.consultar_like_transferencias(req, res);
})

// ROTA PARA DAR LIKE NO CARD DE TRANSFERENCIAS
router.post("/likeTransferencia/:id/:idPost", function (req, res) {
  publicacaoController.like_transferencias(req, res);
});

// ROTA PARA TIRAR LIKE NO CARD DE TRANSFERENCIAS
router.delete("/unlikeTransferencia/:id/:idPost", function (req, res) {
  publicacaoController.unlike_transferencias(req, res);
});

module.exports = router;

