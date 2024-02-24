function gerarToken(comprimento){
    let caracteres = 
    'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789'


let token = ""

for(let i = 0; i < comprimento; i++){
    let randomIndex = Math.floor
    (Math.random() * caracteres.length)
    token += caracteres[randomIndex]
}

return token;

}

console.log(gerarToken(64));