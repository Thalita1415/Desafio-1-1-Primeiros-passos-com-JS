const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const IMC = peso / (altura * altura);

if(!(IMC >= 30 || IMC <= 29.9)){
    //se sim deixar entrar
    console.log('Carlos você está acima do peso!')
       
    }
     //se não bloquear a entrada
    else{
    
        console.log('Carlos você não está acima do peso!!!')
    }