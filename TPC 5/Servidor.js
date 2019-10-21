var http = require('http')
var url = require('url')
var fs = require('fs')
var jsonfile = require ('jsonfile')
var pug = require ('pug')

var{parse} = require('querystring')

var myBd = 'Tarefas.json'


var Myserver = http.createServer((req,res)=>{
    var pedido = url.parse(req.url, true)
    var query = pedido.query
    console.log(pedido.pathname)


    if(req.method == 'GET'){
        if(pedido.pathname=="/w3.css"){
            console.log('chegou aqui')
            res.writeHead(200, {'Content-Type':'text/css'})
            fs.readFile('stylesheets/w3.css',(erro,dados)=>{
                if(!erro){
                    console.log("aqui tambem")
                    res.write(dados)
                }
                else{
                    console.log('estorou')
                }
                console.log("final")
                res.end()
            })
        }
        if(pedido.pathname=='/'){
            console.log('aqui também')
            jsonfile.readFile(myBd, (erro, tarefas)=>{
                res.writeHead(200,{'content-type':'Text/html; charset=UTF-8'})
                res.write(pug.renderFile('Index.pug',{lista : tarefas }))
        })
    }
    }
    console.log(req.method)
    if(req.method == 'POST'){
        console.log('cá estou')
        if(pedido.pathname == '/Processaform'){
            recuperaInfo(req, resultado=>{
                jsonfile.readFile(myBd, (erro, tarefas) =>{
                    if(!erro){
                        tarefas.push(resultado)
                        jsonfile.writeFile(myBd, tarefas, erro=>{
                            if(erro)
                                console.log(erro)
                            else
                                console.log('Registo guardado com sucesso...')
                        })
                    }
                })
            })
            res.writeHead(301, { Location:'http://localhost:7777'});
                                res.end()
        }
    }
    

    else{
        jsonfile.readFile(myBd, (erro, tarefas)=>{
            res.writeHead(200,{'content-type':'Text/html; charset=UTF-8'})
            res.write(pug.renderFile('Index.pug',{lista : tarefas }))
        })
    }

})

Myserver.listen(7777)

function recuperaInfo(request, callback){
    if(request.headers['content-type'] == 'application/x-www-form-urlencoded' ){
        let body = ''
        request.on('data', bloco => {
            body += bloco.toString()
        })
        request.on('end', ()=>{
            callback(parse(body))
        })
    }
}