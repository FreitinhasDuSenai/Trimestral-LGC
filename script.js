const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        if (imc < 18.5) {
            classification = 'MAGRÃO'
        } else if (imc < 24.9) {
            classification = 'NORMAL'
        } else if (imc < 29.9) {
            classification = 'GORDÃO'
        } else if (imc < 39.9) {
            classification = 'Obesidade I'
        } else if (imc < 40) {
            classification = 'Obesidade II'
        } else {
            classification = 'Obesidade III'
        }

        resultado.innerHTML = `IMC: ${imc} (${classification})`
    } else {
        resultado.innerHTML = 'Preencha os campos'
    }
}