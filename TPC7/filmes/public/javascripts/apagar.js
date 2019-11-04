function apagaItem (ident){
	console.log('apagar o' + ident+'...')
	
	axios.delete('/filmes/'+ident)
		.then(response=> window.location.assign('/filmes'))
		.catch(error=>console.log(error))
}