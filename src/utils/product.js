const productos =[
    {id:'01', 
    titulo:'La Comunidad del Anillo',
    autor: "J J Tolking",
    editorial:"Minotauro",
    isbn:"1234", 
    descripcion:"En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal. ", 
    img: '/img/LaComunidadDelAnillo.jpg',    
    precio:"$ 1.587,00",
    category:'01',
    stock:5    
    },

    {id:'02', 
    titulo:'Las Dos Torres',
    autor: "J J Tolking",
    editorial:"Minotauro",
    isbn:"12345", 
    descripcion:"Segundo volumen de la mejor trilogía de fantasía épica de todos los tiempos. LAS DOS TORRES. La Compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam continúan solos su viaje a lo largo del río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del Anillo. Mientras, hombres, elfos y enanos se preparan para la batalla final contra las fuerzas del Señor del Mal.", 
    img:'/img/LasDosTorres.jpg',
    precio:"$ 2.354,76",
    category:'02',
    stock:10
    },

    {id:'03', 
    titulo:'El Retorno del Rey',  
    autor: "J J Tolking",
    editorial:"Minotauro",
    isbn:"123456",
    descripcion:"La última parte del viaje de Frodo y SamLos ejércitos del Señor Oscuro van extendiendo cada vez más su maléfica sombra por la Tierra Media. Hombres, elfos y enanos unen sus fuerzas para presentar batalla a Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam siguen adentrándose en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas.", 
    img:'/img/ElRetornoDelRey.jpg',
    precio:"$ 2.987,32",
    category:'01',
    stock:32
    },

    {id:'04', 
    titulo:'El niño de piyama a rayas',  
    autor: "Boyne John",
    editorial:"Salamandra",
    isbn:"1234567",
    descripcion:"La acción se narra desde el punto de vista de Bruno, el hijo de ocho años 4​ de un militar de alto rango nazi. Él y su familia se ven obligados a abandonar Berlín cuando a su padre lo destinan para trabajar en el campo de concentración de Auschwitz. La familia acepta el cambio pero no de buen grado. El joven desde la ventana de su habitación puede ver personas que visten “pijamas de rayas”.", 
    img:'/img/niñoPiyamarayas.jpg',
    precio:"$ 3.099,56",
    category:'01',
    stock:45
    },

    {id:'05', 
    titulo:'Moby Dick',  
    autor: "Melville Herman",
    editorial:"Alma",
    isbn:"12345678",
    descripcion:"El narrador, Ismael, un joven con experiencia en la marina mercante, decide que su siguiente viaje será en un ballenero. De igual forma se convence de que su travesía debe comenzar en Nantucket, Massachusetts, isla prestigiosa por su industria ballenera. Antes de alcanzar su destino, o el origen de su aventura, entabla una estrecha amistad con el experimentado arponero polinesio Queequeg, con quien acuerda compartir la empresa.", 
    img:'/img/mobyDick.jpg',
    precio:"$ 3.950,00",
    category:'01',
    stock:21
    },

    {id:'06', 
    titulo:'Juguete Rabioso',  
    autor: "Roberto Alt",
    editorial:"Del Fondo Editorial",
    isbn:"123456789",
    descripcion:"El protagonista de El Juguete Rabioso, una novela casi autobiográfica que refleja el caos de comienzos del siglo XX en Buenos Aires, es Silvio Astier, un adolescente expulsado del colegio, que vive como una humillación su pobreza, e intenta vanamente escapar de ella a toda costa, sumiéndose cada vez más en un oscuro pesimismo a medida que fracasa en sus intentos. En un ambiente saturado de personajes siniestros se debate entre la vida y la muerte", 
    img:'/img/jugueteRabioso.jpg',
    precio:"$ 1.270,00",
    category:'01',
    stock:43
    },

    {id:'07', 
    titulo:'El Principito',     
    autor: "Saint-Exupery Antoine",
    editorial:"Salamandra",
    isbn:"12345678910",
    descripcion:"Fábula mítica y relato filosófico que interroga acerca de la relación del ser humano con su prójimo y con el mundo; El Principito concentra; con maravillosa simplicidad; la constante reflexión de Saint-Exupéry sobre la amistad; el amor; la responsabilidad y el sentido de la vida. Viví así; solo; sin nadie con quien hablar verdaderamente; hasta que tuve una avería en el desierto del Sahara; hace seis años. Algo se había roto en mi motor.", 
    img:'/img/elPrincipito.jpg',
    precio:"$ 1.100,00",
    category:'01',
    stock:50
    },

    {id:'08', 
    titulo:'Habia una vez un reino',  
    autor: "Gabriel Saez",
    editorial:"Edelvives",
    isbn:"1234567891011",
    descripcion:"Un reino es un lugar donde pueden ocurrir muchas cosas fantásticas: gente que no se puede ver a sí misma, o que se olvida hasta que se olvida, lugares donde siempre es verano, inventos que nunca funcionan para lo que fueron creados o personas que pueden caminar sobre el agua como otras lo hacen por la vereda. Todo puede suceder y eso se cuenta en estas ocho historias mágicas para disfrutar.", 
    img:'/img/habiaUnaVezUnReino.jpg',
    precio:"$ 1.050,00",
    category:'01',
    stock:50
    },

    {id:'09', 
    titulo:'Luca',  
    autor:"Disney Pixar",
    editorial:"Planeta Junior",
    isbn:"123456789101112",
    descripcion:"Ambientada en una ciudad costera de la Riviera Italiana; la película de Disney y Pixar; Luca; cuenta la historia de un chico y un verano inolvidable lleno de descubrimientos. Luca comparte gelato; pasta y viajes en motocicleta acompañado de su nuevo mejor amigo; hasta que la diversión se ve amenazada por el secreto que ocultan: que son monstruos provenientes de un mundo escondido bajo el mar.", 
    img:'/img/Luca.png',
    precio:"$ 2.440,00",
    category:'03',
    stock:20
    },

    {id:'10', 
    titulo:'La vida es bella',  
    autor:"Roberto Benigni",
    editorial:"Miramax",
    isbn:"12345678910111213",
    descripcion:"En 1939, a punto de estallar la Segunda Guerra Mundial (1939-1945), el extravagante Guido llega a Arezzo, en la Toscana, con la intención de abrir una librería. Allí conoce a la encantadora Dora y, a pesar de que es la prometida del fascista Rodolfo, se casa con ella y tiene un hijo. Al estallar la guerra, los tres son internados en un campo de exterminio, donde Guido hará lo imposible para hacer creer a su hijo que la terrible situación que están padeciendo es tan sólo un juego.", 
    img:'/img/LaVidaEsBella.webp',
    precio:"$ 1.895,00",
    category:'03',
    stock:11
    },

    {id:'11', 
    titulo:'Chip & Dale: Al rescate',  
    autor:"Tad Stones",
    editorial:"Disney Pixar",
    isbn:"12345678910111213",
    descripcion:"Chip y Dale, dos ardillas con olfato para los problemas abren una agencia de detectives, Rescue Rangers, junto a sus nuevos amigos Gadget, Monterey Jack y Zipper. El grupo decide resolver casos y crímenes ofrecidos por sus clientes (normalmente animales antropomorfos) los cuales la policía encuentran los casos demasiado pequeños como para ocuparse.",
    img:'/img/Chip&Dale.jpeg',
    precio:"$ 2.000,00",
    category:'03',
    stock:11
    },

    {id:'12', 
    titulo:'90 minutos al cielo',  
    autor:"Michael Polish",
    editorial:"Disney Pixar",
    isbn:"12345678910111213",
    descripcion:"ras un aparatoso accidente en el que es arrollado por un camión, dan por muerto a Don Piper. 90 minutos después del accidente, mientras un pastor rezaba por él, Piper regresó milagrosamente a la vida. ¿Qué pasó durante esos 90 minutos?.",
    img:'/img/90MinCielo.jpg',
    precio:"$ 2.500,00",
    category:'03',
    stock:11
    },


]



export const getData = new Promise((resolve, reject) =>{
    let condicion = true

    setTimeout (()=>{
        if (condicion){
            resolve(productos)
        }else{
            reject("Salio Mal")
        }
    },3000)   
})

