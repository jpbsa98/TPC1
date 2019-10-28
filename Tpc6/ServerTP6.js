var http = require('http')
var url = require('url')
var pug = require('pug')
var json= require('jsonfile')
var{parse} = require('querystring')
const utf8 = require('utf8');

var file = 'ArqSon.json'

var myserver = http.createServer((req,res)=>{
    console.log(req.url)
    console.log(req.method)
    if(req.method == 'GET'){
        if(req.url == '/'){
            json.readFile(file,(erro, arqs)=>{
                res.writeHead(200,{'content-type':'Text/html; charset=UTF-8'})
                console.log('ola')
                if(!erro){
                    res.write(pug.renderFile(('Index.pug'),{'lista' : arqs}))
                }
                else{
                    console.log('Erro na abertura de ficheiro')
                }
                res.end()
            })
        }
        if(req.url.substring(0,1)){

            json.readFile(file,(erro,arqs)=>{
                if(!erro){
                    var i = 0
                    var check = 0
                    res.writeHead(200,{'content-type':'Text/html; charset=UTF-8'})
                    for(var arq in arqs){
                        //i = i + 1
                        //console.log(arqs[arq].tit)
                        var String = req.url.substring(2)
                        //console.log(String)
                        //arqs[arq].id = i
                        if(arqs[arq].id == String){
                            var listaarq = arqs[arq]
                            var file1 = 'arq1.json'
                            json.writeFile(file1,arqs[arq],erro=>{
                                if(!erro){
                                    json.readFile(file1,(erro,ficheiro)=>{
                                        console.log('cheguei')
                                        if(!erro){
                                            res.write(pug.renderFile(('View.pug'),{'lista1' : ficheiro}))
                                            console.log(ficheiro)
                                            res.end()
                                        }
                                    })
                                    
                                }
                            })
                            
                        }
                        
                    }
                    /*json.writeFile(file, arqs, erro=>{
                        if(!erro){
                            console.log('registo guardado com sucesso')
                        }
                    })
                    */
                }
            })
        }
    }
    if(req.method == 'POST'){
        if(req.url == '/'){
            recuperaInfo(req, resultado=>{
                json.readFile(file, (erro, musica) =>{
                    if(!erro){
                        musica.push(resultado)
                        json.writeFile(file, musica, erro=>{
                            if(erro)
                                console.log(erro)
                            else
                                console.log('Registo guardado com sucesso...')
                        })
                    }
                })
        })
    }
}
    
})


myserver.listen(5005,()=>{
    console.log("servidor em escuta na porta 5005")
})


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