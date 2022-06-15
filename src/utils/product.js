const productos =[
    {id:1, 
    titulo:'La Comunidad del Anillo',
    autor: "J J Tolking",
    editorial:"Minotauro",
    isbn:"1234", 
    descripcion:"En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal. ", 
    img: '/img/libros/LaComunidadDelAnillo.jpg',    
    precio:1587,
    category:1,
    stock:5    
    },

    {id:2, 
    titulo:'Las Dos Torres',
    autor: "J J Tolking",
    editorial:"Minotauro",
    isbn:"12345", 
    descripcion:"Segundo volumen de la mejor trilogía de fantasía épica de todos los tiempos. LAS DOS TORRES. La Compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam continúan solos su viaje a lo largo del río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del Anillo. Mientras, hombres, elfos y enanos se preparan para la batalla final contra las fuerzas del Señor del Mal.", 
    img:'/img/libros/LasDosTorres.jpg',
    precio:2354,
    category:1,
    stock:10
    },

    {id:3, 
    titulo:'El Retorno del Rey',  
    autor: "J J Tolking",
    editorial:"Minotauro",
    isbn:"123456",
    descripcion:"La última parte del viaje de Frodo y SamLos ejércitos del Señor Oscuro van extendiendo cada vez más su maléfica sombra por la Tierra Media. Hombres, elfos y enanos unen sus fuerzas para presentar batalla a Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam siguen adentrándose en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas.", 
    img:'/img/libros/ElRetornoDelRey.jpg',
    precio:2987,
    category:1,
    stock:32
    },

    {id:4, 
    titulo:'El niño de piyama a rayas',  
    autor: "Boyne John",
    editorial:"Salamandra",
    isbn:"1234567",
    descripcion:"La acción se narra desde el punto de vista de Bruno, el hijo de ocho años de un militar de alto rango nazi. Él y su familia se ven obligados a abandonar Berlín cuando a su padre lo destinan para trabajar en el campo de concentración de Auschwitz. La familia acepta el cambio pero no de buen grado. El joven desde la ventana de su habitación puede ver personas que visten “pijamas de rayas.", 
    img:'/img/libros/niñoPiyamarayas.jpg',
    precio:3099,
    category:1,
    stock:45
    },

    {id:5, 
    titulo:'Moby Dick',  
    autor: "Melville Herman",
    editorial:"Alma",
    isbn:"12345678",
    descripcion:"El narrador, Ismael, un joven con experiencia en la marina mercante, decide que su siguiente viaje será en un ballenero. De igual forma se convence de que su travesía debe comenzar en Nantucket, Massachusetts, isla prestigiosa por su industria ballenera. Antes de alcanzar su destino, o el origen de su aventura, entabla una estrecha amistad con el experimentado arponero polinesio Queequeg, con quien acuerda compartir la empresa.", 
    img:'/img/libros/mobyDick.jpg',
    precio:3950,
    category:1,
    stock:21
    },

    {id:6, 
    titulo:'Juguete Rabioso',  
    autor: "Roberto Alt",
    editorial:"Del Fondo Editorial",
    isbn:"123456789",
    descripcion:"El protagonista de El Juguete Rabioso, una novela casi autobiográfica que refleja el caos de comienzos del siglo XX en Buenos Aires, es Silvio Astier, un adolescente expulsado del colegio, que vive como una humillación su pobreza, e intenta vanamente escapar de ella a toda costa, sumiéndose cada vez más en un oscuro pesimismo a medida que fracasa en sus intentos. En un ambiente saturado de personajes siniestros se debate entre la vida y la muerte", 
    img:'/img/libros/jugueteRabioso.jpg',
    precio:1270,
    category:1,
    stock:43
    },

    {id:7, 
    titulo:'El Principito',     
    autor: "Saint-Exupery Antoine",
    editorial:"Salamandra",
    isbn:"12345678910",
    descripcion:"Fábula mítica y relato filosófico que interroga acerca de la relación del ser humano con su prójimo y con el mundo; El Principito concentra; con maravillosa simplicidad; la constante reflexión de Saint-Exupéry sobre la amistad; el amor; la responsabilidad y el sentido de la vida. Viví así; solo; sin nadie con quien hablar verdaderamente; hasta que tuve una avería en el desierto del Sahara; hace seis años. Algo se había roto en mi motor.", 
    img:'/img/libros/elPrincipito.jpg',
    precio:1100,
    category:1,
    stock:50
    },

    {id:8, 
    titulo:'Habia una vez un reino',  
    autor: "Gabriel Saez",
    editorial:"Edelvives",
    isbn:"1234567891011",
    descripcion:"Un reino es un lugar donde pueden ocurrir muchas cosas fantásticas: gente que no se puede ver a sí misma, o que se olvida hasta que se olvida, lugares donde siempre es verano, inventos que nunca funcionan para lo que fueron creados o personas que pueden caminar sobre el agua como otras lo hacen por la vereda. Todo puede suceder y eso se cuenta en estas ocho historias mágicas para disfrutar.", 
    img:'/img/libros/habiaUnaVezUnReino.jpg',
    precio:1050,
    category:1,
    stock:50
    },

    {id:9, 
    titulo:'Luca',  
    autor:"Disney Pixar",
    editorial:"Planeta Junior",
    isbn:"123456789101112",
    descripcion:"Ambientada en una ciudad costera de la Riviera Italiana; la película de Disney y Pixar; Luca; cuenta la historia de un chico y un verano inolvidable lleno de descubrimientos. Luca comparte gelato; pasta y viajes en motocicleta acompañado de su nuevo mejor amigo; hasta que la diversión se ve amenazada por el secreto que ocultan: que son monstruos provenientes de un mundo escondido bajo el mar.", 
    img:'/img/peliculas/Luca.png',
    precio:2440,
    category:3,
    stock:20
    },

    {id:10, 
    titulo:'La vida es bella',  
    autor:"Roberto Benigni",
    editorial:"Miramax",
    isbn:"12345678910111213",
    descripcion:"En 1939, a punto de estallar la Segunda Guerra Mundial (1939-1945), el extravagante Guido llega a Arezzo, en la Toscana, con la intención de abrir una librería. Allí conoce a la encantadora Dora y, a pesar de que es la prometida del fascista Rodolfo, se casa con ella y tiene un hijo. Al estallar la guerra, los tres son internados en un campo de exterminio, donde Guido hará lo imposible para hacer creer a su hijo que la terrible situación que están padeciendo es tan sólo un juego.", 
    img:'/img/peliculas/LaVidaEsBella.jpg',
    precio:1895,
    category:3,
    stock:11
    },

    {id:11, 
    titulo:'Chip & Dale: Al rescate',  
    autor:"Tad Stones",
    editorial:"Disney Pixar",
    isbn:"1234567891011124",
    descripcion:"Chip y Dale, dos ardillas con olfato para los problemas abren una agencia de detectives, Rescue Rangers, junto a sus nuevos amigos Gadget, Monterey Jack y Zipper. El grupo decide resolver casos y crímenes ofrecidos por sus clientes (normalmente animales antropomorfos) los cuales la policía encuentran los casos demasiado pequeños como para ocuparse.",
    img:'/img/peliculas/Chip&Dale.jpeg',
    precio:2000,
    category:3,
    stock:11
    },

    {id:12, 
    titulo:'90 minutos al cielo',  
    autor:"Michael Polish",
    editorial:"Disney Pixar",
    isbn:"1234567891011121",
    descripcion:"Tras un aparatoso accidente en el que es arrollado por un camión, dan por muerto a Don Piper. 90 minutos después del accidente, mientras un pastor rezaba por él, Piper regresó milagrosamente a la vida. ¿Qué pasó durante esos 90 minutos?.",
    img:'/img/peliculas/90MinCielo.jpg',
    precio:2500,
    category:3,
    stock:11
    },

    {id:13, 
    titulo:'Titanic',  
    autor:"James Cameron",
    editorial:"20th Century Fox",
    isbn:"1234567891011121314",
    descripcion:"En 1996, el buscador de tesoros Brock Lovett y su equipo de exploración visitan el RMS Titanic, con el propósito de explorar los restos y encontrar una gargantilla con un valioso diamante conocido como «el Corazón del Mar.",
    img:'/img/peliculas/titanic.jpg',
    precio:1800,
    category:3,
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

