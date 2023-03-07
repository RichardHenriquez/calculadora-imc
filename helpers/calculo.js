// Definimos una función asíncrona llamada "calcularImc" que recibe el peso y la altura como parámetros
const calcularImc = ( peso, altura ) => {
     
    // Creamos una nueva promesa para realizar el cálculo del IMC
    return new Promise(( resolve, reject ) => {

        // Realizamos el cálculo del IMC
        const resultado = peso / ( altura *  altura );
        const imc = resultado.toFixed(2);

        // Verificamos si el resultado es un número válido
        ( isNaN( imc ) ) 
        ? reject( 'No se pudo calcular' )
        : resolve( imc )
    })
}

// Definimos una función asíncrona llamada "limite" que recibe el IMC como parámetro
const limite = (imc) => {
    // Creamos una nueva promesa para determinar si el IMC está dentro del límite adecuado
    return new Promise(( resolve, reject ) => {

        // Comparamos el IMC con un límite predefinido
        if ( imc > 30 )  {
            resolve( 'sobrepeso' );
        } else if ( imc < 30 ) {
            resolve('Peso normal');
        } else if (isNaN(imc)) {
            reject( 'No se pudo calcular' );
        }

    })
}

// Definimos una función asíncrona llamada "mostrarImc" que recibe el peso y la altura como parámetros
const mostrarImc = async ( peso, altura ) => {

    try {
        // Calculamos el IMC llamando a la función asíncrona "calcularImc"
        const imc = await( calcularImc( peso, altura ) );

        // Verificamos si el IMC está dentro del límite adecuado llamando a la función asíncrona "limite"
        const sobrepeso = await( ( limite( imc ) ) );

        // Devolvemos un mensaje que incluye el IMC y el resultado de la verificación
        return `Su imc es de ${imc} usted esta en ${sobrepeso}`;
    } catch ( error ) {
        // Si ocurre un error, lo lanzamos
        throw error;
    }

}

// Exportamos la función "mostrarImc" para que pueda ser utilizada desde otros archivos
module.exports = {
    mostrarImc
}
