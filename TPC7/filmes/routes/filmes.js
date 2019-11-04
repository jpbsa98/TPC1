var express = require('express');
var router = express.Router();
var Filmes= require('../controllers/filmes')

var FilmeModel = require('../models/filme')
console.log('cheguei')
/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.url)
  Filmes.listar()
    .then(dados=> {
      console.log('cheguei')
      res.render('../views/index.pug',{lista:dados})

      //res.send(dados)
      //res.status(200)
    })
    .catch(erro=>res.status(500).jsonp(erro))
});
router.post('/',function(req, res, next) {
  var movie = new FilmeModel(req.body)
  Filmes.inserir(movie)
  res.redirect('/filmes')
});




router.get('/apagar.js', function(req, res, next) {
  fs.readFile('./public/javascripts/apagar.js', (erro, dados) => {
      if(!erro) res.write(dados)
      else res.render('error',{error: erro})
      res.end()
  })
})



router.get('/ver.js', function(req, res, next) {
  fs.readFile('./public/javascripts/ver.js', (erro, dados) => {
      if(!erro) res.write(dados)
      else res.render('error',{error: erro})
      res.end()
  })
})


router.get('/ver/:idFilme', function(req, res, next) {
  Filmes.consulta(req.params.idFilme)
    .then(dados => res.render('editar.pug',{filme:dados}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:idFilme', function(req, res, next) {
  Filmes.consulta(req.params.idFilme)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.delete('/:idFilme',function(req, res, next) {
  Filmes.apagar(req.params.idFilme)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/edit',function(req, res, next) {
  Filmes.atualizar(req.body.id,req.body)
  res.redirect('/filmes')
});

router.put('/:idFilme',function(req, res, next) {
  var movie = new FilmeModel(req.body)
  console.log(movie)
  Filmes.atualizar(req.params.idFilme,req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});
module.exports = router;
