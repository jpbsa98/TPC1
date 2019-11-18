var express = require('express');
var router = express.Router();
var Compositores= require('../Controllers/CompositoresController')
/* GET home page. */


router.get('/', function(req, res, next) {

  if(req.query.ano == undefined){
    console.log('a procurar compositores')
    Compositores.listarCompositores()
    .then(dados => {
      console.log(dados)
      res.jsonp(dados)
    })
    .catch(erro => res.status(500).jsonp(erro))
  }

  if(req.query.ano =! undefined && req.query.periodo == undefined){
    Compositores.Compositores_Ano(req.query.date)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }

  if(req.query.periodo =! undefined && req.query.ano == undefined){
    Compositores.Compositores.Periodo(req.query.period)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
 
  if(req.query.ano!=undefined&&req.query.periodo!=undefined){
    Compositores.Compositores_AP(req.query.date,req.query.period)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }

});

router.get('/compositores/:id', function(req, res) {
  Compositores.consultar(req.params.idCompositor)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;