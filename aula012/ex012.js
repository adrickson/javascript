var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas.`)

if (hora < 5) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 19){
    console.log('Boa tarde!')
} else if (hora < 23.60) {
    console.log('Boa Noite!')
} else {
    console.log('Esse formato não consta como Horário')
}