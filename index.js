const app = require('express')()

app.get('/', (req, res) => {
    res.send('Seja bem vindo ao App!')
})

app.get('/sobre', (req, res) => {
    res.send('Minha Pagina sobre!')
})

app.get('/blog', (req, res) => {
    res.send('<h1>'+'Meu Blog'+'</h1>')
})

app.get('/Ola/:nome/:funcao', (req, res) => {
    res.send('<h1>'+'Ola '+ req.params.nome +'</h1>')
})

app.listen(3000, ()=> {
    console.log('Servidor rodando')
})