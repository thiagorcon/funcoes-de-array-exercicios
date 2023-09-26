const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"

}


function propriedadeCaixaAlta(pessoa){
pessoa.nome = pessoa.nome.toUpperCase()
pessoa.profissao = pessoa.profissao.toUpperCase()
pessoa.username = pessoa.username.toUpperCase()
pessoa.senha = pessoa.senha.toUpperCase()
return pessoa
}

//console.log(propriedadeCaixaAlta(infosPessoa));
//O valor da propriedade ${propriedade} é ${valor}.`
//console.log(`O valor da propriedade nome é ${infosPessoa.nome}.`);
for (const i in infosPessoa) {
console.log(i);
for (const j of i) {
    console.log(`O valor da propriedade ${i} é ${infosPessoa[i]}.`) 
}
}
