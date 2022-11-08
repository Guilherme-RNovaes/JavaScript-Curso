var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas!`)
if(hora < 12 && hora >= 6){
    console.log('Bom Dia!')
}else if(hora >= 13 && hora < 18){
    console.log('Boa Tarde!')
}else if(hora >=19){
    console.log('Boa Noite!')
}else if(hora <= 5){
    console.log('Boa Madrugada!')
}