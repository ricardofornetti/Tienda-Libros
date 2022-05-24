



const productos =[
    {id:'01', 
    name:'El señor de los anillos: La Comunidad del Anillo',
    autor: "J J Tolking",
    Editorial:"Minotauro",
    isbn:"1234", 
    description:"En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal. ", 
    img: 'img/LaComunidadDelAnillo.jpg',    
    precio:"$ 1.587,00",
    stock:5
    },

    {id:'02', 
    name:'El señor de los anillos: Las Dos Torres',
    autor: "J.J.Tolking",
    Editorial:"Minotauro",
    isbn:"12345", 
    description:"Segundo volumen de la mejor trilogía de fantasía épica de todos los tiempos. LAS DOS TORRES. La Compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam continúan solos su viaje a lo largo del río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del Anillo. Mientras, hombres, elfos y enanos se preparan para la batalla final contra las fuerzas del Señor del Mal.", 
    img:'img/LasDosTorres.jpg',
    precio:"$ 2.354,76",
    stock:10
    },

    {id:'03', 
    name:'El señor de los anillos: El Retorno del Rey',  
    autor: "J.J.Tolking",
    Editorial:"Minotauro",
    isbn:"123456",
    description:"La última parte del viaje de Frodo y SamLos ejércitos del Señor Oscuro van extendiendo cada vez más su maléfica sombra por la Tierra Media. Hombres, elfos y enanos unen sus fuerzas para presentar batalla a Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam siguen adentrándose en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas del Destino.", 
    img:'img/ElRetornoDelRey.jpg',
    precio:"$ 2.987,32",
    stock:32
    },

    {id:'04', 
    name:'El niño con el piyama a rayas',  
    autor: "Boyne John",
    Editorial:"Salamandra",
    isbn:"1234567",
    description:"La acción se narra desde el punto de vista de Bruno, el hijo de ocho años 4​ de un militar de alto rango nazi. Él y su familia se ven obligados a abandonar Berlín cuando a su padre lo destinan para trabajar en el campo de concentración de Auschwitz. La familia acepta el cambio pero no de buen grado. El joven desde la ventana de su habitación puede vislumbrar varias casas y muchas personas que visten “pijamas de rayas”. La inocencia característica de un niño de su edad le hace creer que son granjeros, cuando en realidad son los judíos presos del campo", 
    img:'img/niñoPiyamarayas.jpg',
    precio:"$ 3.099,56",
    stock:45
    },

    {id:'05', 
    name:'Moby Dick',  
    autor: "Melville Herman",
    Editorial:"Alma",
    isbn:"12345678",
    description:"El narrador, Ismael, un joven con experiencia en la marina mercante, decide que su siguiente viaje será en un ballenero. De igual forma se convence de que su travesía debe comenzar en Nantucket, Massachusetts, isla prestigiosa por su industria ballenera. Antes de alcanzar su destino, o el origen de su aventura, entabla una estrecha amistad con el experimentado arponero polinesio Queequeg, con quien acuerda compartir la empresa.", 
    img:'img/mobyDick.jpg',
    precio:"$ 3.950,00",
    stock:21
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

