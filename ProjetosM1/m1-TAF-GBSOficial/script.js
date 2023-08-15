// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

// verifcia o Genero Male = Masculino
if (gender === "male") {
    //Verifica se a altura é maior ou igual a 1,60 metros.
    if (height >= 1.70) {
        /* Verificar se as Abdominais é maior ou igual a 41 e 
        Verficia se há pelo menos 5 repetições na barra OU a duração é no mínimo 12 segundos
        */
        if (abs >= 41 && (barReps >= 6 || barSeconds >= 15)) {
            /*
             Verifica se a Distancia percorrida é Pelo menos 3km em no máximo 12 minutos de corrida 
             OU
             Verifica se a Distancia percorrida é Pelo menos 5km em no máximo 20 minutos de corrida 
             */
            if ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) {
                /*
                Verifica se a Distacia foi  Pelo menos 100 metros em no máximo 1 minuto de natação
                OU
                Verifica se o Tempo foi no Máximo 30 Segundos de Mergulho
                */
                if ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30)) {
                    // Se a caso todas verificações baterem, ele vai retornar True
                    passed = true;
                }
            }
        }
    }

}
// verifcia o Genero Female = Feminino
if (gender === "female") {
    //Verifica se a altura é maior ou igual a 1,60 metros.
    if (height >= 1.60) {
        /* Verificar se as Abdominais é maior ou igual a 41 e 
        Verficia se há pelo menos 5 repetições na barra OU a duração é no mínimo 12 segundos
        */
        if (abs >= 41 && (barReps >= 5 || barSeconds >= 12)) {
            /*
             Verifica se a Distancia percorrida é Pelo menos 3km em no máximo 12 minutos de corrida 
             OU
             Verifica se a Distancia percorrida é Pelo menos 5km em no máximo 20 minutos de corrida 
             */
            if ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) {
                /*
                Verifica se a Distacia foi  Pelo menos 100 metros em no máximo 1 minuto de natação
                OU
                Verifica se o Tempo foi no Máximo 30 Segundos de Mergulho
                */
                if ((swimDistance >= 100 && swimTime <= 60) || (diveTime <= 30)) {
                    // Se a caso todas verificações baterem, ele vai retornar True
                    passed = true;
                }
            }
        }
    }
}

/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
