// script.js

const messages = {
    'Estés triste': {
        frases: [
            'La tristeza es sólo una sombra que se va con el tiempo.',
            'Detrás de cada nube gris hay un sol esperando brillar.'
        ],
        fragmento: 'Como una tarde nublada, la tristeza nos envuelve, pero siempre hay luz al final del camino.',
        prosaPoetica: 'La tristeza acaricia el alma, es un susurro en el viento que nos recuerda que hemos vivido intensamente.'
    },
    'Tengas un mal día': {
        frases: [
            'Cada mal día es un peldaño en la escalera del éxito.',
            'Recuerda que después de la tormenta siempre viene la calma.'
        ],
        fragmento: 'Los días malos son lecciones disfrazadas. Por cada tropezón, nos levantamos más fuertes.',
        prosaPoetica: 'En los días grises encuentra la fuerza para florecer, porque el sol siempre regresa para iluminar tu camino.'
    },
    'Sea nuestro aniversario': {
        frases: [
            'Un año más a tu lado, un año de amor y locuras.',
            'Cada día contigo es un regalo que atesoro.'
        ],
        fragmento: 'Celebrar nuestro amor es recordar cada risa y cada lágrima compartida.',
        prosaPoetica: 'Hoy celebro la vida que hemos construido juntos, un viaje lleno de momentos mágicos y sueños cumplidos.'
    },
    'Sea tu cumple': {
        frases: [
            'Feliz cumpleaños, que cada deseo se haga realidad.',
            'Hoy es tu día, brilla como nunca antes.'
        ],
        fragmento: 'En este día especial, celebro la maravilla que eres y todo lo que aportas al mundo.',
        prosaPoetica: 'Cumpleaños es renovar la promesa de seguir soñando y creando juntos.'
    },
    'Cuando la noche pese demasiado': {
        frases: [
            'Noche oscura, pero recuerda que cada estrella está ahí para guiarte.',
            'Las noches largas son para reflexionar y sanar.'
        ],
        fragmento: 'Cuando la noche es densa como un océano, sé que hay un amanecer esperándote.',
        prosaPoetica: 'En el silencio de la noche encuentro la voz de mis pensamientos, a veces es el momento más claro de la vida.'
    },
    'Cuando me extrañes': {
        frases: [
            'La distancia no separa a los corazones que se quieren.',
            'Extrañarte es el recordatorio de lo mucho que significas para mí.'
        ],
        fragmento: 'Cuando pienses en mí, recuerda que estoy siempre contigo en espíritu.',
        prosaPoetica: 'Cada lágrima por tu ausencia es un reflejo del amor que siento, una conexión eterna que nunca se romperá.'
    },
    'Cuando no puedas dormir': {
        frases: [
            'La insomnio es sólo un momento en la vida, pronto llegarás a la serenidad.',
            'Deja que tus pensamientos fluyan como un río al amanecer.'
        ],
        fragmento: 'Cuando la luna se asoma por la ventana y te habla en silencio, escúchala.',
        prosaPoetica: 'Despierto en la noche, pero mis sueños siguen bailando entre las estrellas.'
    },
    'Cuando sientas que te falta algo': {
        frases: [
            'A veces perderse es la única manera de encontrarse.',
            'La vida tiene caminos misteriosos que te llevan a ti mismo.'
        ],
        fragmento: 'En la búsqueda de lo que falta, a menudo encontramos lo que realmente valemos.',
        prosaPoetica: 'Cada vacío en el alma es una invitación a llenarlo de amor y luz.'
    },
    'Cuando necesites volver a mí': {
        frases: [
            'Siempre estaré aquí, como un faro en la tormenta.',
            'No importa cuán lejos vayas, mi amor te sigue siempre.'
        ],
        fragmento: 'Vuelve cuando lo necesites, porque los lazos que hemos formado son inquebrantables.',
        prosaPoetica: 'La verdadera amistad nunca se pierde, sólo se encuentra un camino diferente de volver a conectar.'
    },
    'Cuando una canción te rompa': {
        frases: [
            'Las canciones son la voz del alma. Deja que te abracen.',
            'Cuando una melodía duele, es porque toca las fibras del corazón.'
        ],
        fragmento: 'Las notas de una canción pueden ser la catarsis que el alma anhela.',
        prosaPoetica: 'En el eco de una canción quebrada encuentro la libertad de sentir, de vivir cada emoción intensamente.'
    }
};