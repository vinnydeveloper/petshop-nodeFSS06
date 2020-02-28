const http = require('http')
const url = require('url')
const petshop = require("./petshop")

let server = http.createServer((request, response)=>{

    let urlCompleta = url.parse(request.url, true)
    console.log(urlCompleta)


    if(urlCompleta.pathname == "/"){
      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      response.write('Você está na pagina inicial')
      
      response.end()
    }

    if(urlCompleta.pathname == "/home"){
      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      
      response.end("Você está no sistema Petshop!")
    }
   


    if(urlCompleta.pathname == "/pet/adicionar"){
        if(petshop.adicionarPet(urlCompleta.query.nome)){
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      
            response.end("O pet foi cadastro com sucesso!")
        }else {
            response.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
      
            response.end("Erro ao tentar cadastrar um pet")
        }
    }
})

server.listen(3000, 'localhost')