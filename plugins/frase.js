const contoh = `*Asmaul Husna*
`
// data here
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`

let handler = async (m, { args, usedPrefix, command }) => {
    let json = JSON.parse(JSON.stringify(global.asmaulhusna))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) throw `Ejemplo:\n${usedPrefix + command} 1`
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `mínimo 1 y máximo 99!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return m.reply(`🔢 *Número:* ${index}
${arabic}

${latin}

${translation_id}

${translation_en}
`.trim())
    }
    m.reply(contoh + data + anjuran)
}
handler.help = ['frase [escribe un número 1 - 99]']
handler.tags = ['quran']
handler.command = /^(frase(s)?)$/i
module.exports = handler

global.asmaulhusna = [
    {
        index: 1,
        latin: "💐 *Autor:* *John Maxwell*",
        arabic: "💐 *Frase:* _En la vida algunas veces se gana, otras veces se aprende._",
        translation_id: "💐 *Opinión:* Hay que aprender de esos momentos desagradables, para de esta manera seguir creciendo como individuos. En otras palabras, no importa cómo caes, sino cómo te levantas.",
        translation_en: "En otras palabras, no importa cómo caes, sino cómo te levantas."
    },
    {
        index: 2,
        latin: "💐 *Autor:* *Paulo Coelho*",
        arabic: "💐 *Frase:* _No midas tu riqueza por el dinero que tienes, mídela por aquellas cosas que tienes y que no cambiarías por dinero._",
        translation_id: "💐 *Opinión:* En una sociedad materialista es fácil autoevaluarse en función de las posesiones que tenemos, y este tipo de valoraciones son muy negativas para la autoestima.",
        translation_en: "Además, lo que realmente te hará feliz en el día a día, son esas pequeñas cosas y esos momentos agradables."
    },
    {
        index: 3,
        latin: "💐 *Autor:* *Anónimo*",
        arabic: "💐 *Frase:* _Pedir perdón es de inteligentes, perdonar es de nobles y perdonarse es de sabios._",
        translation_id: "💐 *Opinión:* El perdón es una de las mejores terapias emocionales. Si pides perdón y si perdonas, demuestra tu grandeza como individuo. Pero más grande eres, y mejor vas a estar emocionalmente, si también te perdonas a ti mismo. Algo que parece fácil en la teoría, pero que se vuelve complicado en la práctica.",
        translation_en: "Si te identificas con esta frase porque te cuesta perdonarte a ti mismo, el Mindfulness te puede ser de gran utilidad. También existe una filosofía hawaiana llamada Ho'oponopono que basa su efectividad en el perdón espiritual."
    },
    {
        index: 4,
        latin: "💐 *Autor:* *Anónimo*",
        arabic: "💐 *Frase:* _Si quieres algo que nunca tuviste, debes hacer algo que nunca hiciste._",
        translation_id: "💐 *Opinión:* Si haces siempre lo mismo, seguramente siempre tendrás las mismas consecuencias. ",
        translation_en: "Si lo que quieres es tener nuevas experiencias, conocer a gente interesante o crecer en el trabajo, mejor que empieces a plantearte nuevas actividades y hagas cosas que habitualmente no haces."
    },
    {
        index: 5,
        latin: "💐 *Autor:* *Proverbio turco*",
        arabic: "💐 *Frase:* _El que busca un amigo sin defectos se queda sin amigos._",
        translation_id: "💐 *Opinión:* La intención esta frase es hacernos notar que todos tenemos defectos y cometemos muchos errores, no hay persona perfecta en este mundo. ",
        translation_en: "Ser una persona demasiado perfeccionista provoca consecuencias negativas para uno mismo."
    },
    {
        index: 6,
        latin: "💐 *Autor:* *Proverbio escocés*",
        arabic: "💐 *Frase:* _La sonrisa cuesta menos que la electricidad y da más luz._",
        translation_id: "💐 *Opinión:* Esta frase es una de esas frases inspiradoras, pero también es una frase sabia. Sonreír ayuda a mantener el buen humor, embellece el rostro y despierta buenos pensamientos.  ",
        translation_en: "No es lo mismo pedirle algo a alguien fríamente, que pedirlo con una sonrisa, pues la sonrisa no solamente produce un efecto muy positivo en nosotros mismos, también en la otra persona."
    },
    {
        index: 7,
        latin: "💐 *Autor:* *Henry Ford*",
        arabic: "💐 *Frase:* _No encuentres la falta, encuentra el remedio._",
        translation_id: "💐 *Opinión:* Esta frase me recuerda a una que un buen amigo siempre me decía: “ Si no formas parte de la solución, pasas a formar parte del problema.",
        translation_en: "Ambas frases no nos quieren decir que no debemos buscar el origen del problema, pues es necesario hacerlo. Pero en lugar de quedarnos lamentando la falla de manera eterna, debemos solucionar lo antes posible lo que ha ocurrido mal. Esta es la clave para mejorar.",
    },
    {
        index: 8,
        latin: "💐 *Autor:* *William George Ward*",
        arabic: "💐 *Frase:* _El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas._",
        translation_id: "💐 *Opinión:* Tanto ser un pesimista como demasiado optimista puede traer consecuencias negativas para uno mismo.",
        translation_en: "El pesimista todo lo va a ver mal y no existirá nada para que ese mal cambie. El optimista todo lo va a ver bien y distorsiona la realidad para que encaje con sus pensamientos. En cambio, una persona realista trata de solucionar los problemas pese a saber que es complicado en muchas ocasiones. Es decir, mantiene los pies en el suelo y actúa de manera sensata.",
    },
    {
        index: 9,
        latin: "💐 *Autor:* *Madre Teresa de Calcuta*",
        arabic: "💐 *Frase:* _A veces sentimos que lo que hacemos es tan solo una gota en el mar, pero el mar sería mucho menos si le faltara una gota._",
        translation_id: "💐 *Opinión:* Significa que aunque sintamos que lo que hacemos no sirve para nada, cada cosa que hacemos tiene una consecuencia.",
        translation_en: "A veces no somos capaces de ver esa consecuencia inmediatamente, o a veces es solamente un paso más en un camino que estamos recorriendo. Se trata de ir construyendo y al final llegará la recompensa.",
    },
    {
        index: 10,
        latin: "💐 *Autor:* *Buddha*",
        arabic: "💐 *Frase:* _La reflexión es el camino hacia la inmortalidad; la falta de reflexión, el camino hacia la muerte._",
        translation_id: "💐 *Opinión:* Esta frase extraída de la filosofía budista hace referencia a la importancia de la reflexión en el desarrollo personal y en el aprendizaje por y para la vida.",
        translation_en: "Todos hemos aprendido de los errores, pero cada uno vive las experiencias de manera única. Para poder retener estas experiencias, es necesario un proceso de pensamiento activo sobre lo que vivimos, para, de esta manera, cuestionarnos el sentido que tienen estas experiencias para nosotros.",
    },
    {
        index: 11,
        latin: "💐 *Autor:* *Francis Bacon*",
        arabic: "💐 *Frase:* _La ocasión hay que crearla, no esperar a que llegue._",
        translation_id: "💐 *Opinión:* Esta frase se refiere a que las oportunidades hay que buscarlas, no van a venir solas.",
        translation_en: "Es decir, si queremos algo, hay que luchar por ello. Un antídoto contra la Parálisis del análisis.",
    },
    {
        index: 12,
        latin: "💐 *Autor:* *Napoleón*",
        arabic: "💐 *Frase:* _Los sabios son los que buscan la sabiduría; los necios piensan haberla encontrado._",
        translation_id: "💐 *Opinión:* Esta frase se refiere a que las oportunidades hay que buscarlas, no van a venir solas.",
        translation_en: "Es decir, si queremos algo, hay que luchar por ello. Un antídoto contra la Parálisis del análisis.",
    },
    {
        index: 13,
        latin: "💐 *Autor:* *Séneca*",
        arabic: "💐 *Frase:* _No es pobre el que tiene poco, sino el que mucho desea._",
        translation_id: "💐 *Opinión:* Esta frase es igual a la frase “No es más rico el que más tiene, sino el que menos necesita”, y se refiere a que las personas que menos cosas materiales desean o necesitan, son las que definitivamente van a ser más felices en la vida.",
        translation_en: "Tener mucho no significa ser más feliz, pues si uno se contenta con poco, no necesita tener mucha riqueza.",
    },
    {
        index: 14,
        latin: "💐 *Autor:* *William Shakespeare*",
        arabic: "💐 *Frase:* _Si no recuerdas la más ligera locura en que el amor te hizo caer, no has amado._",
        translation_id: "💐 *Opinión:* Esta frase del autor de Romeo y Julieta nos recuerda que el enamoramiento es una de las sensaciones más extraordinarias de las que puede disfrutar el ser humano.",
        translation_en: "El amor es como una droga que te puede hacer sentir en pleno subidón y te puede hacer cometer locuras increíbles que jamás hayas pensado.",
    },
    {
        index: 15,
        latin: "💐 *Autor:* *Anónimo*",
        arabic: "💐 *Frase:* _Cuando el sabio señala la luna, el tonto se fija en el dedo._",
        translation_id: "💐 *Opinión:* Los necios no quieren ver más allá de lo que sus ojos pueden ver.",
        translation_en: "En cambio, los sabios expanden su mente, son creativos y reflexionan. Mientras el sabio es un explorador, el necio es conformista.",
    },
    {
        index: 16,
        latin: "💐 *Autor:* *Ralph Waldo Emerson*",
        arabic: "💐 *Frase:* _Un amigo es una persona con la que se puede pensar en voz alta._",
        translation_id: "💐 *Opinión:* Un auténtico amigo es esa persona que no te va a fallar y a la que le puedes confiar tus mayores secretos.",
        translation_en: "Esta frase define el significado de amistad y resalta la importancia de la confianza plena en alguien. Sin duda, quien tiene un amigo tiene un tesoro y debemos valorar esta conexión con otras personas.",
    },
    {
        index: 17,
        latin: "💐 *Autor:* *Buddha*",
        arabic: "💐 *Frase:* _El dolor es inevitable pero el sufrimiento es opcional._",
        translation_id: "💐 *Opinión:* Todos podemos vivir experiencias que nos hagan sufrir y pasarlo mal, y esto tiene un proceso para superarlo pues es parte de la vida.",
        translation_en: "Pero nosotros tenemos la posibilidad de hacer cosas para no quedarnos estancados en el sufrimiento. Por tanto, es decisión nuestra superar las malas experiencias lo antes posible.",
    },
    {
        index: 18,
        latin: "💐 *Autor:* *David Abernathy*",
        arabic: "💐 *Frase:* _Se puede matar al soñador, pero no al sueño._",
        translation_id: "💐 *Opinión:* Una frase que nos explica que la carne es finita, pero no así las ideas.",
        translation_en: "Incluso lo intagible es finito.",
    },
    {
        index: 19,
        latin: "💐 *Autor:* *Benjamin Franklin*",
        arabic: "💐 *Frase:* _Quien tiene paciencia, obtendrá lo que desea._",
        translation_id: "💐 *Opinión:* Uno de los primeros presidentes de los Estados Unidos nos informa sobre la gran virtud que es la paciencia.",
        translation_en: "Dicha virtud que no todos tienen.",
    },
    {
        index: 20,
        latin: "💐 *Autor:* *Pitágoras*",
        arabic: "💐 *Frase:* _Educad a los niños, y no será necesario castigar a los hombres._",
        translation_id: "💐 *Opinión:* Pitágoras el griego sobre la gran trascendencia de la educación en una sociedad.",
        translation_en: "Hacer el mal a alguien en su plena etapa de cremiento no es bueno.",
    },
    {
        index: 21,
        latin: "💐 *Autor:* *Confucio*",
        arabic: "💐 *Frase:* _Aprender sin reflexionar es malgastar la energía._",
        translation_id: "💐 *Opinión:* El sabio pensador chino Confucio, sobre la necesidad de llevar a cabo un estilo de aprendizaje basado en la reflexión.",
        translation_en: "Saber no gastar el tiempo.",
    },
    {
        index: 22,
        latin: "💐 *Autor:* *Maquiavelo*",
        arabic: "💐 *Frase:* _Las personas ofenden antes a los que aman que a los que temen._",
        translation_id: "💐 *Opinión:* Las personas que son obstinadas pueden causarnos cierto miedo, es por eso que vamos con pies de plomo a la hora de tratar con ellas.",
        translation_en: "Tener cuidado con ese tipo de personas.",
    },
    {
        index: 23,
        latin: "💐 *Autor:* *Francis Bacon*",
        arabic: "💐 *Frase:* _La amistad duplica las alegrías y divide las angustias por la mitad._",
        translation_id: "💐 *Opinión:* Una verdad innegable; la vida es menos cruda cuando la pasamos cerca de personas que nos quieren de forma genuina.",
        translation_en: "La amistad puede ser buena dependiendo de las personas.",
    },
    {
        index: 24,
        latin: "💐 *Autor:* *Friedrich Nietzsche*",
        arabic: "💐 *Frase:* _Solamente aquel que construye el futuro tiene derecho a juzgar el pasado._",
        translation_id: "💐 *Opinión:* Nietzsche nos dejó muchas citas célebres, como por ejemplo esta, que nos indica la relevancia de tomar el control de nuestras vidas.",
        translation_en: "Recuerda tomar Agua. 👀",
    },
    {
        index: 25,
        latin: "💐 *Autor:* *Johann Kaspar Lavater*",
        arabic: "💐 *Frase:* _Si quieres ser sabio, aprende a interrogar razonablemente, a escuchar con atención, a responder serenamente y a callar cuando no tengas nada que decir._",
        translation_id: "💐 *Opinión:* Unos consejos prácticos para alcanzar altas cotas de inteligencia y sabiduría.",
        translation_en: "Consejos que salvan vidas.",
    },
    {
        index: 26,
        latin: "💐 *Autor:* *Jorge Luis Borges*",
        arabic: "💐 *Frase:* _He cometido el peor pecado que uno puede cometer. No he sido feliz._",
        translation_id: "💐 *Opinión:* Borges nos dejó esta reflexión, que demuestra que no estuvo suficientemente atento a gozar de la vida.",
        translation_en: "Vivela, tal vez sea la ultima.",
    },
    {
        index: 27,
        latin: "💐 *Autor:* *Platón*",
        arabic: "💐 *Frase:* _La libertad está en ser dueños de nuestra propia vida._",
        translation_id: "💐 *Opinión:* La libertad es uno de los conceptos más ampliamente estudiados por los filósofos.",
        translation_en: "Aquí, Platón nos explica cuál es la clave para ser libre.",
    },
    {
        index: 28,
        latin: "💐 *Autor:* *René Descartes*",
        arabic: "💐 *Frase:* _Daría todo lo que sé, por la mitad de lo que ignoro._",
        translation_id: "💐 *Opinión:* El francés René Descartes también era totalmente consciente de que, a pesar de ser uno de los más brillantes pensadores modernos, ignoraba mucho más de lo que conocía.",
        translation_en: "Ignorar las cosas, no es bueno.",
    },
    {
        index: 29,
        latin: "💐 *Autor:* *Baltasar Gracián*",
        arabic: "💐 *Frase:* _Saber y saberlo demostrar es valer dos veces._",
        translation_id: "💐 *Opinión:* Una de las diferencias entre el conocimiento superficial y el conocimiento profundo, según Baltasar Gracián.",
        translation_en: "Poner en práctica lo que sabes.",
    },
    {
        index: 30,
        latin: "💐 *Autor:* *Lao-tsé*",
        arabic: "💐 *Frase:* _Saber que no se sabe, eso es humildad. Pensar que uno sabe lo que no sabe, eso es enfermedad._",
        translation_id: "💐 *Opinión:* Lao-tsé ahonda en el asunto de la ignorancia y la percepción de sabiduría, en la línea de otros pensadores que pronunciaron frases similares.",
        translation_en: "No ser ignorante.",
    },
    {
        index: 31,
        latin: "💐 *Autor:* *Epicteto de Frigia*",
        arabic: "💐 *Frase:* _La persona sabia no debe abstenerse de participar en el gobierno del Estado, pues es un delito renunciar a ser útil a los necesitados y un cobardía ceder el paso a los indignos._",
        translation_id: "💐 *Opinión:* Una reflexión de corte político; los ciudadanos sabios deben intentar participar en la gestión de la polis, para aportar su granito de arena a una administración que debe ser justa con todos.",
        translation_en: "Recuerda tener tiempo para todo.",
    },
    {
        index: 32,
        latin: "💐 *Autor:* *Confucio*",
        arabic: "💐 *Frase:* _La vida es muy simple, pero insistimos en hacerla complicada._",
        translation_id: "💐 *Opinión:* El filósofo Confucio creía que la vida se rige por principios simples que debemos adoptar como normas para nuestro día a día.",
        translation_en: "Es tan simple...",
    },
    {
        index: 33,
        latin: "💐 *Autor:* *Abraham Lincoln*",
        arabic: "💐 *Frase:* _Al final, no son los años en nuestra vida lo que cuenta, sino la vida en nuestros años._",
        translation_id: "💐 *Opinión:* Lincoln, sobre el criterio de calidad que según él deberíamos aplicar a la hora de valorar nuestras vidas.",
        translation_en: "Todos omiten el hecho que cada vez se acercan la muerte con el pasar del tiempo, pero si vives plenamente habrá valido la pena",
    },
    {
        index: 34,
        latin: "💐 *Autor:* *Voltaire*",
        arabic: "💐 *Frase:* _Cada persona es una criatura del tiempo en el que vive._",
        translation_id: "💐 *Opinión:* Voltaire creía que no podemos considerarnos seres independizados del contexto histórico que nos toca vivir.",
        translation_en: "Nuestras ideas y nuestro modo de vida están siempre condicionados por la fecha de nuestro nacimiento.",
    },
    {
        index: 35,
        latin: "💐 *Autor:* *Aristóteles*",
        arabic: "💐 *Frase:* _Somos lo que hacemos repetidamente._",
        translation_id: "💐 *Opinión:* Aristóteles se distanció del idealismo de Platón; para él importaban más los hechos y el entorno, y esto queda claro en esta frase de la vida eminentemente filosófica.",
        translation_en: "Repetir nos hace mejor.",
    },
    {
        index: 36,
        latin: "💐 *Autor:* *Charlie Chaplin*",
        arabic: "💐 *Frase:* _La vida es una tragedia cuando se ve en primer plano, pero en plano general pasa a ser una comedia._",
        translation_id: "💐 *Opinión:* Chaplin, como director de cine, sabía que un mismo hecho, o incluso la vida de una persona, cambia dependiendo del modo en el que se presente.",
        translation_en: "Malos y buenos momentos.",
    },
    {
        index: 37,
        latin: "💐 *Autor:* *Albert Camus*",
        arabic: "💐 *Frase:* _El hombre es la única criatura que se niega a ser quien es._",
        translation_id: "💐 *Opinión:* Albert Camus, en una de sus frases filosóficas acerca de la lucha que el ser humano mantiene con la creación de un sentido para su existencia.",
        translation_en: "Aprende aceptar lo que eres.",
    },
    {
        index: 38,
        latin: "💐 *Autor:* *Cassandra Clare*",
        arabic: "💐 *Frase:* _Todo conocimiento resulta hiriente._",
        translation_id: "💐 *Opinión:* Una frase sabia referida al modo en el que cada nueva pieza de conocimiento trastoca los cimientos de lo que creíamos que sabíamos.",
        translation_en: "Siempre hay algo por aprender",
    },
    {
        index: 39,
        latin: "💐 *Autor:* *Pablo Picasso*",
        arabic: "💐 *Frase:* _Lleva mucho tiempo llegar a ser joven._",
        translation_id: "💐 *Opinión:* El reputado pintor invierte el orden temporal en el que se ubica la juventud para dar a entender que es, más que una fase biológica, algo aprendido.",
        translation_en: "Recuerda ser buena persona 😸",
    },
    {
        index: 40,
        latin: "💐 *Autor:* *William Penn*",
        arabic: "💐 *Frase:* _El tiempo es aquello que más queremos y también lo que peor utilizamos._",
        translation_id: "💐 *Opinión:* Una paradoja planteada por el filósofo inglés William Penn. Para ser conscientes de que la vida está para saberla aprovechar al máximo.",
        translation_en: "Si fuera posible cambiarlo, es probable el resultado de la paradoja del abuelo",
    },
    {
        index: 41,
        latin: "Al Jaliil",
        arabic: "الْجَلِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Majestic"
    },
    {
        index: 42,
        latin: "Al Kariim",
        arabic: "الْكَرِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
        translation_en: "The Bountiful, the Generous"
    },
    {
        index: 43,
        latin: "Ar Raqiib",
        arabic: "الرَّقِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
        translation_en: "The Watchful"
    },
    {
        index: 44,
        latin: "Al Mujiib",
        arabic: "الْمُجِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
        translation_en: "The Responsive, the Answerer"
    },
    {
        index: 45,
        latin: "Al Waasi’",
        arabic: "الْوَاسِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
        translation_en: "The Vast, the All Encompassing"
    },
    {
        index: 46,
        latin: "Al Hakiim",
        arabic: "الْحَكِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
        translation_en: "The Wise"
    },
    {
        index: 47,
        latin: "Al Waduud",
        arabic: "الْوَدُودُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
        translation_en: "The Loving, the Kind One"
    },
    {
        index: 48,
        latin: "Al Majiid",
        arabic: "الْمَجِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The All Glorious"
    },
    {
        index: 49,
        latin: "Al Baa’its",
        arabic: "الْبَاعِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
        translation_en: "The Raiser of the Dead"
    },
    {
        index: 50,
        latin: "As Syahiid",
        arabic: "الشَّهِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
        translation_en: "The Witness"
    },
    {
        index: 51,
        latin: "Al Haqq",
        arabic: "الْحَقُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
        translation_en: "The Truth, the Real"
    },
    {
        index: 52,
        latin: "Al Wakiil",
        arabic: "الْوَكِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
        translation_en: "The Trustee, the Dependable"
    },
    {
        index: 53,
        latin: "Al Qawiyyu",
        arabic: "الْقَوِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
        translation_en: "The Strong"
    },
    {
        index: 54,
        latin: "Al Matiin",
        arabic: "الْمَتِينُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
        translation_en: "The Firm, the Steadfast"
    },
    {
        index: 55,
        latin: "Al Waliyy",
        arabic: "الْوَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
        translation_en: "The Protecting Friend, Patron, and Helper"
    },
    {
        index: 56,
        latin: "Al Hamiid",
        arabic: "الْحَمِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
        translation_en: "The All Praiseworthy"
    },
    {
        index: 57,
        latin: "Al Mushii",
        arabic: "الْمُحْصِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
        translation_en: "The Accounter, the Numberer of All"
    },
    {
        index: 58,
        latin: "Al Mubdi’",
        arabic: "الْمُبْدِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
        translation_en: "The Producer, Originator, and Initiator of all"
    },
    {
        index: 59,
        latin: "Al Mu’iid",
        arabic: "الْمُعِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
        translation_en: "The Reinstater Who Brings Back All"
    },
    {
        index: 60,
        latin: "Al Muhyii",
        arabic: "الْمُحْيِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
        translation_en: "The Giver of Life"
    },
    {
        index: 61,
        latin: "Al Mumiitu",
        arabic: "اَلْمُمِيتُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
        translation_en: "The Bringer of Death, the Destroyer"
    },
    {
        index: 62,
        latin: "Al Hayyu",
        arabic: "الْحَيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
        translation_en: "The Ever Living"
    },
    {
        index: 63,
        latin: "Al Qayyuum",
        arabic: "الْقَيُّومُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
        translation_en: "The Self Subsisting Sustainer of All"
    },
    {
        index: 64,
        latin: "Al Waajid",
        arabic: "الْوَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
        translation_en: "The Perceiver, the Finder, the Unfailing"
    },
    {
        index: 65,
        latin: "Al Maajid",
        arabic: "الْمَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Illustrious, the Magnificent"
    },
    {
        index: 66,
        latin: "Al Wahiid",
        arabic: "الْواحِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
        translation_en: "The One, The Unique, Manifestation of Unity"
    },
    {
        index: 67,
        latin: "Al ‘Ahad",
        arabic: "اَلاَحَدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
        translation_en: "The One, the All Inclusive, the Indivisible"
    },
    {
        index: 68,
        latin: "As Shamad",
        arabic: "الصَّمَدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
        translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
    },
    {
        index: 69,
        latin: "Al Qaadir",
        arabic: "الْقَادِرُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
        translation_en: "The All Able"
    },
    {
        index: 70,
        latin: "Al Muqtadir",
        arabic: "الْمُقْتَدِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
        translation_en: "The All Determiner, the Dominant"
    },
    {
        index: 71,
        latin: "Al Muqaddim",
        arabic: "الْمُقَدِّمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
        translation_en: "The Expediter, He who brings forward"
    },
    {
        index: 72,
        latin: "Al Mu’akkhir",
        arabic: "الْمُؤَخِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
        translation_en: "The Delayer, He who puts far away"
    },
    {
        index: 73,
        latin: "Al Awwal",
        arabic: "الأوَّلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
        translation_en: "The First"
    },
    {
        index: 74,
        latin: "Al Aakhir",
        arabic: "الآخِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
        translation_en: "The Last"
    },
    {
        index: 75,
        latin: "Az Zhaahir",
        arabic: "الظَّاهِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
        translation_en: "The Manifest; the All Victorious"
    },
    {
        index: 76,
        latin: "Al Baathin",
        arabic: "الْبَاطِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
        translation_en: "The Hidden; the All Encompassing"
    },
    {
        index: 77,
        latin: "Al Waali",
        arabic: "الْوَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
        translation_en: "The Patron"
    },
    {
        index: 78,
        latin: "Al Muta’aalii",
        arabic: "الْمُتَعَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Self Exalted"
    },
    {
        index: 79,
        latin: "Al Barri",
        arabic: "الْبَرُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
        translation_en: "The Most Kind and Righteous"
    },
    {
        index: 80,
        latin: "At Tawwaab",
        arabic: "التَّوَابُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
        translation_en: "The Ever Returning, Ever Relenting"
    },
    {
        index: 81,
        latin: "Al Muntaqim",
        arabic: "الْمُنْتَقِمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
        translation_en: "The Avenger"
    },
    {
        index: 82,
        latin: "Al Afuww",
        arabic: "العَفُوُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
        translation_en: "The Pardoner, the Effacer of Sins"
    },
    {
        index: 83,
        latin: "Ar Ra`uuf",
        arabic: "الرَّؤُوفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
        translation_en: "The Compassionate, the All Pitying"
    },
    {
        index: 84,
        latin: "Malikul Mulk",
        arabic: "مَالِكُ الْمُلْكِ",
        translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
        translation_en: "The Owner of All Sovereignty"
    },
    {
        index: 85,
        latin: "Dzul JalaaliWal Ikraam",
        arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
        translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
        translation_en: "The Lord of Majesty and Generosity"
    },
    {
        index: 86,
        latin: "Al Muqsith",
        arabic: "الْمُقْسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Equitable, the Requiter"
    },
    {
        index: 87,
        latin: "Al Jamii’",
        arabic: "الْجَامِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
        translation_en: "The Gatherer, the Unifier"
    },
    {
        index: 88,
        latin: "Al Ghaniyy",
        arabic: "الْغَنِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
        translation_en: "The All Rich, the Independent"
    },
    {
        index: 89,
        latin: "Al Mughnii",
        arabic: "الْمُغْنِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
        translation_en: "The Enricher, the Emancipator"
    },
    {
        index: 90,
        latin: "Al Maani",
        arabic: "اَلْمَانِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
        translation_en: "The Withholder, the Shielder, the Defender"
    },
    {
        index: 91,
        latin: "Ad Dhaar",
        arabic: "الضَّارَّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
        translation_en: "The Distressor, the Harmer"
    },
    {
        index: 92,
        latin: "An Nafii’",
        arabic: "النَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
        translation_en: "The Propitious, the Benefactor"
    },
    {
        index: 93,
        latin: "An Nuur",
        arabic: "النُّورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
        translation_en: "The Light"
    },
    {
        index: 94,
        latin: "Al Haadii",
        arabic: "الْهَادِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
        translation_en: "The Guide"
    },
    {
        index: 95,
        latin: "Al Baadii",
        arabic: "الْبَدِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
        translation_en: "Incomparable, the Originator"
    },
    {
        index: 96,
        latin: "Al Baaqii",
        arabic: "اَلْبَاقِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
        translation_en: "The Ever Enduring and Immutable"
    },
    {
        index: 97,
        latin: "Al Waarits",
        arabic: "الْوَارِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
        translation_en: "The Heir, the Inheritor of All"
    },
    {
        index: 98,
        latin: "Ar Rasyiid",
        arabic: "الرَّشِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
        translation_en: "The Guide, Infallible Teacher, and Knower"
    },
    {
        index: 99,
        latin: "As Shabuur",
        arabic: "الصَّبُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
        translation_en: "The Patient"
    }
]
