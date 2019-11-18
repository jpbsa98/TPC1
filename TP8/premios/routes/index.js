var express = require('express');
var router = express.Router();
var Premios= require('../controllers/premios')

/* GET home page. */
router.get('/', function(req, res, next) {
  Premios.listar()
  .then(dados => {
    console.log(dados)
    res.jsonp(dados)
  })
  .catch(erro => res.status(500).jsonp(erro))
});
router.get('/premios', function(req, res, next) {
 if (req.query.categoria==undefined) 
 {
  Premios.Premios()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
 }
 if(req.query.categoria!=undefined&&req.query.data==undefined)
 {
  Premios.Premios_Categoria(req.query.categoria)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
5
 }
 if(req.query.categoria!=undefined&&req.query.data!=undefined)
 { 
  Premios.Premios_Categoria_Date(req.query.categoria,req.query.data)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))

 }


});
router.get('/premios/:idPremio', function(req, res) {
  Premios.consultar(req.params.idPremio)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})
router.get('/categorias', function(req, res, next) {
  Premios.categorias()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});
router.get('/laureades', function(req, res, next) {
  Premios.laureades()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});
module.exports = router;
