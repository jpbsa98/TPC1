var http = require('http')
var fs = require('fs')


var myserver = http.createServer(function(req,res){
    var pedidos = req.url.split("/")
    var pag = pedidos[pedidos.length - 1]
    console.log(pag)
    var file =  ".//XML//" + pag + ".xml"
    console.log(file)
    fs.readFile(file, function(err, data){
        if(err){
            res.writeHead(200,{'content-Type': 'text/plain'})
            res.write("Ficheiro inexistente")
            res.end()
        }
        else{
        res.writeHead(200,{'content-Type': 'xml'})
        res.write(data)
        res.end()
        }
    })

    

})

myserver.listen(7777)