var Filme= require('../models/filme')

const Filmes=module.exports

Filmes.listar=()=>{
    return Filme    
        .find()
        .sort({title:1})
        .exec()


}
Filmes.inserir = obj =>{
    return obj
    .save(function (err, filme) {
        if (err) return console.error(err);
        else
          console.log(filme.title + ' foi gravado com sucesso.')
      });
}

Filmes.consulta=fid=>{
    return Filme
    .findOne({_id:fid})
    .exec()
}
Filmes.apagar = fid => {
    return Filme
    .remove({_id:fid})
    .exec()
}
Filmes.contar=()=>{
    return Filme
    .countDocuments()
    .exec()
}
Filmes.projetar=campos=>{
    return Filme
    .find({},campos)
    .exec()
}
Filmes.atualizar = (fid,obj) =>{
    return Filme
    .findOneAndUpdate({ _id: fid }, {$set:obj})
    .exec()
}
