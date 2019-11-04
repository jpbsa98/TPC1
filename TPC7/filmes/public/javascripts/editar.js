function editarItem (ident){
	console.log('vou tentar editar o' + ident+'...')
	
	axios.get('filmes/ver/'+ident)
		.then(function(response){
            document.open('text/html')
            document.write(response.data)
            document.close()
        })
		.catch(error=>console.log(error))
}