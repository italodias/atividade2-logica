var data_atual = Date.now();
var data = new Date(2029916126196)

if (data>data_atual){
    console.log("data válida")
}else{
    console.log("data inválida")
}

let idade = 19

if (idade>=18){
    console.log('idade válida')
}else{
    console.log("idade inválida")
}

const participantes = ["juninho","clebersvaldo", "mariscleuda"]
if (participantes.length <= 100){
    console.log("cadastro efetuado")
}else{
    console.log("número de participantes excedido, max:100")
}
return 0;