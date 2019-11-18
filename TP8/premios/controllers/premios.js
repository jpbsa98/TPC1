var Premio = require('../model/premios')

module.exports.listar = () => {
    return Premio
        .find()
        .exec()
}
module.exports.Premios = () => {
    return Premio
        .find({},{year:1,category:1})
        .exec()
}
module.exports.consultar = id => {
    return Premio
        .findOne({_id: id})
        .exec()
}
module.exports.categorias = () => {
    return Premio
        .find({},{category:1})
        .distinct('category')
        .exec()
}
module.exports.Premios_Categoria = (categoria) => {
    return Premio
        .find({category:categoria})
        .exec()
}
module.exports.Premios_Categoria_Date = (categoria,date) => {
    return Premio
        .find({category:categoria,year:date})
        .exec()
}
module.exports.laureades = () => {
    return Premio
    .aggregate([
    { $unwind : "$laureates" },
    { $project : { laureates:{firstname:1, surname:1},category:1,year:1 }},
    { $sort:{laureates:1}}])
    .exec()
}