var Compositor = require('../Models/CompositoresModel')

module.exports.listar = () => {
    return Compositor
        .find()
        .exec()
}


module.exports.listarCompositores = () => {
    return Compositor 
        .find()
        .exec()
}
module.exports.Compositores_Ano = (date) => {
    return Compositor
        .find({dataNas:date})
        .exec()
}   

module.exports.Compositores_Periodo = (period) => {
    return Compositor
    .find({periodo:period})
    .exec()
}
module.exports.Compositores_AP = (date, period) => {
    return Compositor   
        .find({dataNasc:date, periodo:period})
        .exec()
}

module.exports.Consultar = id => {
    return Compositor 
        .find({_id:id})
        .exec()
}