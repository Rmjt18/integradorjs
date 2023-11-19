const tratamientosdata = [ 
    {id: 1,
        name: "Plan Presencial Mensual",
        category: "Presencial",
        price: 51700,
        consultas: 4,
        prestaciones: ["Medico", "Nutricion", "Psicologo", "Grupos Educativos", "Actividad Fisica "],
        img: "/img/PlanPresencial1.jpg",
    
        
    },
    
    {
        id: 2,
        name: "Plan Presencial Trimestral",
        category : "Presencial",
        price: 131900,
        consultas: 12,
        prestaciones: ["Medico", "Nutricion", "Psicologo", "Grupos Educativos", "Actividad Fisica "],
        img: "/img/Presencialimg.jpeg",
    },
    
    {
        id: 3,
        name: "Plan Semipresencial Mensual",
        category: "mixto",
        price: 44500,
        consultas: 4,
        prestaciones: ["Medico", "Nutricion", "Psicologo", "Grupos Educativos", "Actividad Fisica "],
        img: "/img/PlanSemiPresencial1.jpg",
    },
    
    {
        id: 4,
        name: "Plan Semipresencial Trimestral",
        category: "mixto",
        price: 113500,
        consultas: 12,
        prestaciones: ["Medico", "Nutricion", "Psicologo", "Grupos Educativos", "Actividad Fisica "],
        img: "/img/semipresencialimg.png",
    },
    
    {
        id: 5,
        name: "Plan Online Mensual",
        category: "virtual",
        price: 36500,
        consultas: 4,
        prestaciones: ["Medico", "Nutricion", "Psicologo", "Grupos Educativos", "Actividad Fisica "],
        img: "/img/PlanDistancia1.jpg",
    },
    {
        id: 6,
        name: "Plan Online Trimestral",
        category: "virtual",
        price: 93100,
        consultas: 12,
        prestaciones: ["Medico", "Nutricion", "Psicologo", "Grupos Educativos", "Actividad Fisica "],
        img: "/img/PlanaDISTANCIA1.jpg",
    },
    {
        id: 7,
        name: "Plan Tgi Mensual",
        category: "virtual",
        price: 19400,
        consultas: 1,
        prestaciones: [ "Grupos Educativos", "Actividad Fisica "],
        img: "./img/tgia.jpeg",
    },
    {
        id: 8,
        name: "Plan Tgi Trimestral",
        category: "virtual",
        price: 49500,
        consultas: 3,
        prestaciones:[ "Grupos Educativos", "Actividad Fisica "],
        img: "./img/tgib.jpg",
    },
    
    {
        id: 9,
        name: "Plan Mantenimiento Mensual",
        category: "mixto",
        price: 31800,
        consultas: 2,
        prestaciones: ["Medico", "Nutricion", "Grupos Educativos", "Actividad Fisica "],
        img: "./img/mantenimientoimg.jpeg",
    },
    {
        id: 10,
        name: "Plan Mantenimiento Trimestral",
        category: "mixto",
        price: 81100,
        consultas: 6,
        prestaciones: ["Medico", "Nutricion", "Grupos Educativos", "Actividad Fisica "],
        img: "./img/mentenimiento2.png",
    },
    {
        id: 11,
        name: "Plan Pediatrico",
        category: "mixto",
        price: 40200,
        consultas: 4,
        prestaciones: ["Medico", "Nutricion", "Grupos Educativos", "Actividad Fisica "],
        img: "./img/PEDIATRICO.jpg",
    },

    {
        id: 12,
        name: "Plan Pediatrico Trimestral",
        category: "mixto",
        price: 102600,
        consultas: 12,
        prestaciones: ["Medico", "Nutricion", "Grupos Educativos", "Actividad Fisica "],
        img: "./img/pediatricob.jpeg",
    }
    
]

// divido en dos mi array

const dividetratamientosinparts= (size) => {
    let tratamientolist =[];

    for (let i = 0; i < tratamientosdata.length; i += (size)){
        tratamientolist.push(tratamientosdata.slice(i, i + size));

    }
    return tratamientolist;
    
};

//appstate 
const appState ={
    tratamientos : dividetratamientosinparts(6),
    currentTratamientosIndex: 0,
    tratamientosLimit: dividetratamientosinparts(6).length,
    activeFilter: null, 

};
