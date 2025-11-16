export interface CicloFormativo {
    codcicl: number;
    nom: string;
    nomEuskera: string;
    abr: string;
    familia: string;
    grado: 'Básico' | 'Medio' | 'Superior';
    modalidad: 'Presencial' | 'Dual' | 'Distancia';
    turno: 'Diurno' | 'Vespertino' | 'Nocturno' | 'Mixto';
    idiomas: ('ES' | 'EU' | 'EN')[];
    centros: number[];
    duracion?: number;
  }
  
  export const ciclos: CicloFormativo[] = [
    // INFORMÁTICA Y COMUNICACIONES - GRADO MEDIO
    {
      codcicl: 10001,
      nom: "Sistemas Microinformáticos y Redes",
      nomEuskera: "Sistema Mikroinformatikoak eta Sareak",
      abr: "SMR",
      familia: "Informática y Comunicaciones",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14945, 15112, 14422, 12648, 14151, 15628, 12345, 14615, 12497, 10248, 15305, 14669, 14696, 14779, 12108, 12053, 12982],
      duracion: 2000
    },
  
    // INFORMÁTICA Y COMUNICACIONES - GRADO SUPERIOR
    {
      codcicl: 10002,
      nom: "Administración de Sistemas Informáticos en Red",
      nomEuskera: "Sareko Sistema Informatikoen Administrazioa",
      abr: "ASIR",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 15112, 12648, 14151, 14615, 12479, 10248, 14728, 14669, 12456, 14696, 12485, 14779, 14718, 12053, 12982],
      duracion: 2000
    },
    {
      codcicl: 10003,
      nom: "Desarrollo de Aplicaciones Multiplataforma",
      nomEuskera: "Plataforma Anitzeko Aplikazioen Garapena",
      abr: "DAM",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 15112, 15630, 15763, 14615, 12491, 14631, 12479, 10248, 14747, 12485, 14779, 12108, 12053],
      duracion: 2000
    },
    {
      codcicl: 10004,
      nom: "Desarrollo de Aplicaciones Web",
      nomEuskera: "Web Aplikazioen Garapena",
      abr: "DAW",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 15112, 15763, 15628, 12491, 14631, 12479, 10248, 14747, 14775, 14696, 14718, 12108, 12053, 12982],
      duracion: 2000
    },
  
    // COMERCIO Y MARKETING - GRADO MEDIO
    {
      codcicl: 10005,
      nom: "Actividades Comerciales",
      nomEuskera: "Merkataritza Jarduerak",
      abr: "AC",
      familia: "Comercio y Marketing",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12053, 12544, 12648, 12982, 14696, 15069, 15112, 15268, 15763],
      duracion: 2000
    },
  
    // COMERCIO Y MARKETING - GRADO SUPERIOR
    {
      codcicl: 10006,
      nom: "Comercio Internacional",
      nomEuskera: "Nazioarteko Merkataritza",
      abr: "CI",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"],
      centros: [10137, 12053, 14422, 14669, 12497, 12108],
      duracion: 2000
    },
    {
      codcicl: 10007,
      nom: "Gestión de Ventas y Espacios Comerciales",
      nomEuskera: "Salmenten eta Espazio Komertzialen Kudeaketa",
      abr: "GVEC",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 15763, 14669, 12982, 14837, 12462],
      duracion: 2000
    },
    {
      codcicl: 10008,
      nom: "Marketing y Publicidad",
      nomEuskera: "Marketina eta Publizitatea",
      abr: "MP",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 15763, 14696, 12497, 14810, 12479, 10248, 15305, 12490, 12982, 14779],
      duracion: 2000
    },
    {
      codcicl: 10009,
      nom: "Transporte y Logística",
      nomEuskera: "Garraioa eta Logistika",
      abr: "TL",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12053, 15666, 14620, 14718, 12108],
      duracion: 2000
    },
  
    // ADMINISTRACIÓN Y GESTIÓN - GRADO MEDIO
    {
      codcicl: 10012,
      nom: "Gestión Administrativa",
      nomEuskera: "Administrazio Kudeaketa",
      abr: "GA",
      familia: "Administración y Gestión",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [12225, 10137, 15112, 14950, 13556, 13432, 14069, 13020, 15666, 15630, 12544, 14747, 15624, 15108, 10349],
      duracion: 2000
    },
  
    // ADMINISTRACIÓN Y GESTIÓN - GRADO SUPERIOR
    {
      codcicl: 10010,
      nom: "Administración y Finanzas",
      nomEuskera: "Administrazioa eta Finantzak",
      abr: "AF",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [14279, 14888, 10137, 15112, 14950, 13556, 13432, 13020, 14069, 15666, 15630, 13023, 15763, 12053, 13022, 14615,
                14669, 12462, 14696, 14635, 14704, 14797, 14810, 12497, 12479, 10248, 12581, 13586, 12742, 12746, 14775, 14728,
                12490, 15854, 14718, 10201, 12132, 12108, 12982, 12298],
      duracion: 2000
    },
    {
      codcicl: 10011,
      nom: "Asistencia a la Dirección",
      nomEuskera: "Zuzendaritzarako Laguntza",
      abr: "AD",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"],
      centros: [14888, 10137, 14088, 10248, 15112, 13020, 14669, 12462, 12490, 10201],
      duracion: 2000
    },
  
    // ELECTRICIDAD Y ELECTRÓNICA - GRADO MEDIO
    {
      codcicl: 20001,
      nom: "Instalaciones Eléctricas y Automáticas",
      nomEuskera: "Instalazio Elektriko eta Automatikoak",
      abr: "IEA",
      familia: "Electricidad y Electrónica",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 10138, 14069, 14088, 14205, 14301, 14945, 14950, 15112, 15628, 15630],
      duracion: 2000
    },
    {
      codcicl: 20002,
      nom: "Instalaciones de Telecomunicaciones",
      nomEuskera: "Telekomunikazio Instalazioak",
      abr: "IT",
      familia: "Electricidad y Electrónica",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 14069, 14205, 14301, 14950, 15112],
      duracion: 2000
    },
  
    // ELECTRICIDAD Y ELECTRÓNICA - GRADO SUPERIOR
    {
      codcicl: 20003,
      nom: "Automatización y Robótica Industrial",
      nomEuskera: "Automatizazio eta Robotika Industriala",
      abr: "ARI",
      familia: "Electricidad y Electrónica",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 14069, 14088, 14205, 14301, 14634, 14664, 14680, 14945, 14950, 15112, 15630],
      duracion: 2000
    },
    {
      codcicl: 20004,
      nom: "Sistemas Electrotécnicos y Automatizados",
      nomEuskera: "Sistema Elektroteknikoak eta Automatizatuak",
      abr: "SEA",
      familia: "Electricidad y Electrónica",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 14069, 14205, 14301, 14950, 15112],
      duracion: 2000
    },
    {
      codcicl: 20005,
      nom: "Mantenimiento Electrónico",
      nomEuskera: "Mantentze-lan Elektronikoak",
      abr: "ME",
      familia: "Electricidad y Electrónica",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 14069, 14950, 15112],
      duracion: 2000
    },
  
    // FABRICACIÓN MECÁNICA - GRADO MEDIO
    {
      codcicl: 30001,
      nom: "Mecanizado",
      nomEuskera: "Mekanizazioa",
      abr: "MEC",
      familia: "Fabricación Mecánica",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 12054, 12763, 13020, 13432, 14069, 14088, 14205, 14950, 15112, 15628],
      duracion: 2000
    },
    {
      codcicl: 30002,
      nom: "Soldadura y Calderería",
      nomEuskera: "Soldadura eta Galdareria",
      abr: "SC",
      familia: "Fabricación Mecánica",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 12054, 13020, 14069, 14088, 14950, 15112],
      duracion: 2000
    },
  
    // FABRICACIÓN MECÁNICA - GRADO SUPERIOR
    {
      codcicl: 30003,
      nom: "Programación de la Producción en Fabricación Mecánica",
      nomEuskera: "Fabrikazio Mekanikoko Ekoizpenaren Programazioa",
      abr: "PPFM",
      familia: "Fabricación Mecánica",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 12054, 12763, 13020, 13255, 13432, 14069, 14088, 14950, 15112],
      duracion: 2000
    },
    {
      codcicl: 30004,
      nom: "Diseño en Fabricación Mecánica",
      nomEuskera: "Fabrikazio Mekanikoko Diseinua",
      abr: "DFM",
      familia: "Fabricación Mecánica",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 12054, 13020, 14069, 14950, 15112],
      duracion: 2000
    },
  
    // INSTALACIÓN Y MANTENIMIENTO - GRADO MEDIO
    {
      codcicl: 40001,
      nom: "Mantenimiento Electromecánico",
      nomEuskera: "Mantentze-lan Elektromekanikoak",
      abr: "MEM",
      familia: "Instalación y Mantenimiento",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 14069, 14088, 14950, 15112],
      duracion: 2000
    },
  
    // INSTALACIÓN Y MANTENIMIENTO - GRADO SUPERIOR
    {
      codcicl: 40002,
      nom: "Mantenimiento de Instalaciones Térmicas y de Fluidos",
      nomEuskera: "Instalazio Termikoen eta Fluidoen Mantentze-lanak",
      abr: "MITF",
      familia: "Instalación y Mantenimiento",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 14069, 14088, 14950, 15112],
      duracion: 2000
    },
    {
      codcicl: 40003,
      nom: "Mecatrónica Industrial",
      nomEuskera: "Mekatronika Industriala",
      abr: "MI",
      familia: "Instalación y Mantenimiento",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 12054, 13020, 14069, 14088, 14950, 15112],
      duracion: 2000
    },
  
    // TRANSPORTE Y MANTENIMIENTO DE VEHÍCULOS - GRADO MEDIO
    {
      codcicl: 50001,
      nom: "Electromecánica de Vehículos Automóviles",
      nomEuskera: "Ibilgailu Automobilena Elektromekanika",
      abr: "EVA",
      familia: "Transporte y Mantenimiento de Vehículos",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 14069, 14945, 15112],
      duracion: 2000
    },
    {
      codcicl: 50002,
      nom: "Carrocería",
      nomEuskera: "Karoseria",
      abr: "CAR",
      familia: "Transporte y Mantenimiento de Vehículos",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 14069, 14945, 15112],
      duracion: 2000
    },
  
    // TRANSPORTE Y MANTENIMIENTO DE VEHÍCULOS - GRADO SUPERIOR
    {
      codcicl: 50003,
      nom: "Automoción",
      nomEuskera: "Automozioa",
      abr: "AUTO",
      familia: "Transporte y Mantenimiento de Vehículos",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 14069, 14945, 15112],
      duracion: 2000
    },
  
    // HOSTELERÍA Y TURISMO - GRADO MEDIO
    {
      codcicl: 60001,
      nom: "Cocina y Gastronomía",
      nomEuskera: "Sukaldaritza eta Gastronomia",
      abr: "CG",
      familia: "Hostelería y Turismo",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10256, 12291, 13070, 14340, 15176],
      duracion: 2000
    },
    {
      codcicl: 60002,
      nom: "Servicios en Restauración",
      nomEuskera: "Jatetxe Zerbitzua",
      abr: "SR",
      familia: "Hostelería y Turismo",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10256, 12291, 13070, 14340, 15176],
      duracion: 2000
    },
  
    // HOSTELERÍA Y TURISMO - GRADO SUPERIOR
    {
      codcicl: 60003,
      nom: "Dirección de Cocina",
      nomEuskera: "Sukaldaritza Zuzendaritza",
      abr: "DC",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10256, 12291, 13070, 14340, 15176, 15325],
      duracion: 2000
    },
    {
      codcicl: 60004,
      nom: "Dirección de Servicios de Restauración",
      nomEuskera: "Jatetxe Zerbitzuen Zuzendaritza",
      abr: "DSR",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10256, 12291, 13070, 14340, 15176, 15325],
      duracion: 2000
    },
    {
      codcicl: 60005,
      nom: "Gestión de Alojamientos Turísticos",
      nomEuskera: "Turismo Ostatuen Kudeaketa",
      abr: "GAT",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"],
      centros: [10256, 12291, 13070, 14340],
      duracion: 2000
    },
    {
      codcicl: 60006,
      nom: "Agencias de Viajes y Gestión de Eventos",
      nomEuskera: "Bidaia Agentziak eta Ekitaldien Kudeaketa",
      abr: "AVGE",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"],
      centros: [10256, 12291, 13070],
      duracion: 2000
    },
    {
      codcicl: 60007,
      nom: "Guía, Información y Asistencias Turísticas",
      nomEuskera: "Gida, Informazio eta Turismo Laguntzak",
      abr: "GIAT",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"],
      centros: [10256, 12291, 13070],
      duracion: 2000
    },
  
    // IMAGEN PERSONAL - GRADO MEDIO
    {
      codcicl: 70001,
      nom: "Peluquería y Cosmética Capilar",
      nomEuskera: "Ile-apainketa eta Kosmetika Kapilar",
      abr: "PCC",
      familia: "Imagen Personal",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12756, 14669],
      duracion: 2000
    },
    {
      codcicl: 70002,
      nom: "Estética y Belleza",
      nomEuskera: "Estetika eta Edertasuna",
      abr: "EB",
      familia: "Imagen Personal",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12756, 14669],
      duracion: 2000
    },
  
    // IMAGEN PERSONAL - GRADO SUPERIOR
    {
      codcicl: 70003,
      nom: "Estética Integral y Bienestar",
      nomEuskera: "Estetika Integral eta Ongizatea",
      abr: "EIB",
      familia: "Imagen Personal",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12756, 14669],
      duracion: 2000
    },
    {
      codcicl: 70004,
      nom: "Estilismo y Dirección de Peluquería",
      nomEuskera: "Estilismoa eta Ile-apainketaren Zuzendaritza",
      abr: "EDP",
      familia: "Imagen Personal",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12756, 14669],
      duracion: 2000
    },
    {
      codcicl: 70005,
      nom: "Caracterización y Maquillaje Profesional",
      nomEuskera: "Karakterizazioa eta Makillaje Profesionala",
      abr: "CMP",
      familia: "Imagen Personal",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12756],
      duracion: 2000
    },
  
    // SANIDAD - GRADO MEDIO
    {
      codcicl: 80001,
      nom: "Cuidados Auxiliares de Enfermería",
      nomEuskera: "Erizaintzako Laguntza Lanak",
      abr: "CAE",
      familia: "Sanidad",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12490, 13534, 14633, 14669, 15774],
      duracion: 2000
    },
    {
      codcicl: 80002,
      nom: "Farmacia y Parafarmacia",
      nomEuskera: "Farmazia eta Parafarmazia",
      abr: "FP",
      familia: "Sanidad",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12490, 14633, 14669],
      duracion: 2000
    },
  
    // SANIDAD - GRADO SUPERIOR
    {
      codcicl: 80003,
      nom: "Laboratorio Clínico y Biomédico",
      nomEuskera: "Laboratorio Kliniko eta Biomedikoa",
      abr: "LCB",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14634, 14669, 15769, 15774],
      duracion: 2000
    },
    {
      codcicl: 80004,
      nom: "Anatomía Patológica y Citodiagnóstico",
      nomEuskera: "Anatomia Patologikoa eta Zitodiagnostikoa",
      abr: "APCD",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14669, 15774],
      duracion: 2000
    },
    {
      codcicl: 80005,
      nom: "Imagen para el Diagnóstico y Medicina Nuclear",
      nomEuskera: "Diagnostikorako Irudia eta Mediku Nuklearra",
      abr: "IDMN",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14669, 15774],
      duracion: 2000
    },
    {
      codcicl: 80006,
      nom: "Radioterapia y Dosimetría",
      nomEuskera: "Erradioterapia eta Dosimetria",
      abr: "RD",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14669],
      duracion: 2000
    },
    {
      codcicl: 80007,
      nom: "Higiene Bucodental",
      nomEuskera: "Ahoko Higienea",
      abr: "HB",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12490, 14633, 14669],
      duracion: 2000
    },
    {
      codcicl: 80008,
      nom: "Prótesis Dentales",
      nomEuskera: "Protesi Dentalak",
      abr: "PD",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14669],
      duracion: 2000
    },
    {
      codcicl: 80009,
      nom: "Audiología Protésica",
      nomEuskera: "Audiologia Protesikoa",
      abr: "AP",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14669],
      duracion: 2000
    },
  
    // SERVICIOS SOCIOCULTURALES Y A LA COMUNIDAD - GRADO SUPERIOR
    {
      codcicl: 90001,
      nom: "Educación Infantil",
      nomEuskera: "Haur Hezkuntza",
      abr: "EI",
      familia: "Servicios Socioculturales y a la Comunidad",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12490, 12517, 13534, 14669, 14704],
      duracion: 2000
    },
    {
      codcicl: 90002,
      nom: "Integración Social",
      nomEuskera: "Gizarte Integrazio",
      abr: "IS",
      familia: "Servicios Socioculturales y a la Comunidad",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12490, 13534, 14669],
      duracion: 2000
    },
    {
      codcicl: 90003,
      nom: "Animación Sociocultural y Turística",
      nomEuskera: "Animazio Soziokultural eta Turistikoa",
      abr: "ASCT",
      familia: "Servicios Socioculturales y a la Comunidad",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 12490, 13534, 14669],
      duracion: 2000
    },
  
    // EDIFICACIÓN Y OBRA CIVIL - GRADO SUPERIOR
    {
      codcicl: 100001,
      nom: "Proyectos de Edificación",
      nomEuskera: "Eraikuntza Proiektuak",
      abr: "PE",
      familia: "Edificación y Obra Civil",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10296, 14945, 15112],
      duracion: 2000
    },
    {
      codcicl: 100002,
      nom: "Proyectos de Obra Civil",
      nomEuskera: "Obra Zibileko Proiektuak",
      abr: "POC",
      familia: "Edificación y Obra Civil",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10296, 14945, 15112],
      duracion: 2000
    },
  
    // ENERGÍA Y AGUA - GRADO SUPERIOR
    {
      codcicl: 110001,
      nom: "Energías Renovables",
      nomEuskera: "Energia Berriztagarriak",
      abr: "ER",
      familia: "Energía y Agua",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 13532, 14301, 15112],
      duracion: 2000
    },
    {
      codcicl: 110002,
      nom: "Eficiencia Energética y Energía Solar Térmica",
      nomEuskera: "Energia Eraginkortasuna eta Energia Solar Termikoa",
      abr: "EEEST",
      familia: "Energía y Agua",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 13532, 14301, 15112],
      duracion: 2000
    },
  
    // ARTES GRÁFICAS - GRADO SUPERIOR
    {
      codcicl: 120001,
      nom: "Diseño y Edición de Publicaciones Impresas y Multimedia",
      nomEuskera: "Argitalpen Inprimatu eta Multimedia Diseinua eta Edizioa",
      abr: "DEPIM",
      familia: "Artes Gráficas",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14205],
      duracion: 2000
    },
    {
      codcicl: 120002,
      nom: "Diseño y Gestión de la Producción Gráfica",
      nomEuskera: "Ekoizpen Grafikoaren Diseinua eta Kudeaketa",
      abr: "DGPG",
      familia: "Artes Gráficas",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14205],
      duracion: 2000
    },
  
    // IMAGEN Y SONIDO - GRADO SUPERIOR
    {
      codcicl: 130001,
      nom: "Iluminación, Captación y Tratamiento de Imagen",
      nomEuskera: "Argitze, Irudiaren Kaptura eta Tratamendua",
      abr: "ICTI",
      familia: "Imagen y Sonido",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [12229, 12394],
      duracion: 2000
    },
    {
      codcicl: 130002,
      nom: "Sonido para Audiovisuales y Espectáculos",
      nomEuskera: "Ikus-entzunezkoentzako eta Ikuskizunentzako Soinua",
      abr: "SAE",
      familia: "Imagen y Sonido",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [12229, 12394],
      duracion: 2000
    },
    {
      codcicl: 130003,
      nom: "Producción de Audiovisuales y Espectáculos",
      nomEuskera: "Ikus-entzunezkoen eta Ikuskizunen Ekoizpena",
      abr: "PAE",
      familia: "Imagen y Sonido",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [12229, 12394],
      duracion: 2000
    },
    {
      codcicl: 130004,
      nom: "Animaciones 3D, Juegos y Entornos Interactivos",
      nomEuskera: "3D Animazioak, Jokoak eta Ingurune Interaktiboak",
      abr: "A3DJEI",
      familia: "Imagen y Sonido",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [12229, 12394],
      duracion: 2000
    },
  
    // ACTIVIDADES FÍSICAS Y DEPORTIVAS - GRADO MEDIO
    {
      codcicl: 140001,
      nom: "Guía en el Medio Natural y de Tiempo Libre",
      nomEuskera: "Natura Inguruneko eta Aisialdiko Gida",
      abr: "GMNTL",
      familia: "Actividades Físicas y Deportivas",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137],
      duracion: 2000
    },
  
    // ACTIVIDADES FÍSICAS Y DEPORTIVAS - GRADO SUPERIOR
    {
      codcicl: 140002,
      nom: "Enseñanza y Animación Sociodeportiva",
      nomEuskera: "Irakaskuntza eta Animazio Sozio-deportiboa",
      abr: "EASD",
      familia: "Actividades Físicas y Deportivas",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137],
      duracion: 2000
    },
    {
      codcicl: 140003,
      nom: "Acondicionamiento Físico",
      nomEuskera: "Gorputz Prestakuntza",
      abr: "AF",
      familia: "Actividades Físicas y Deportivas",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137],
      duracion: 2000
    },
  
    // AGRARIA - GRADO MEDIO
    {
      codcicl: 150001,
      nom: "Producción Agroecológica",
      nomEuskera: "Ekoizpen Agroekologikoa",
      abr: "PA",
      familia: "Agraria",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10108, 14949],
      duracion: 2000
    },
    {
      codcicl: 150002,
      nom: "Jardinería y Floristería",
      nomEuskera: "Lorezaintza eta Loredenda",
      abr: "JF",
      familia: "Agraria",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10108, 14949],
      duracion: 2000
    },
  
    // AGRARIA - GRADO SUPERIOR
    {
      codcicl: 150003,
      nom: "Paisajismo y Medio Rural",
      nomEuskera: "Paisajismoa eta Landa Ingurunea",
      abr: "PMR",
      familia: "Agraria",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10108, 14949],
      duracion: 2000
    },
    {
      codcicl: 150004,
      nom: "Gestión Forestal y del Medio Natural",
      nomEuskera: "Baso eta Natura Ingurunearen Kudeaketa",
      abr: "GFMN",
      familia: "Agraria",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10108, 14949],
      duracion: 2000
    },
  
    // MARÍTIMO-PESQUERA - GRADO MEDIO
    {
      codcicl: 160001,
      nom: "Navegación y Pesca de Litoral",
      nomEuskera: "Nabigazioa eta Itsasertzerako Arrantza",
      abr: "NPL",
      familia: "Marítimo-Pesquera",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [14601, 13533],
      duracion: 2000
    },
    {
      codcicl: 160002,
      nom: "Mantenimiento y Control de la Maquinaria de Buques y Embarcaciones",
      nomEuskera: "Ontzi eta Itsasontzien Makinen Mantentze-lanak eta Kontrola",
      abr: "MCMBE",
      familia: "Marítimo-Pesquera",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [14601, 13533],
      duracion: 2000
    },
  
    // MARÍTIMO-PESQUERA - GRADO SUPERIOR
    {
      codcicl: 160003,
      nom: "Transporte Marítimo y Pesca de Altura",
      nomEuskera: "Itsas Garraioa eta Urruneko Arrantza",
      abr: "TMPA",
      familia: "Marítimo-Pesquera",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [14601, 13533],
      duracion: 2000
    },
    {
      codcicl: 160004,
      nom: "Organización del Mantenimiento de Maquinaria de Buques y Embarcaciones",
      nomEuskera: "Ontzi eta Itsasontzien Makinen Mantentze-lanen Antolaketa",
      abr: "OMMBE",
      familia: "Marítimo-Pesquera",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [14601, 13533],
      duracion: 2000
    },
    {
      codcicl: 160005,
      nom: "Acuicultura",
      nomEuskera: "Akuikultura",
      abr: "ACU",
      familia: "Marítimo-Pesquera",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [14601, 13533],
      duracion: 2000
    },
  
    // QUÍMICA - GRADO SUPERIOR
    {
      codcicl: 170001,
      nom: "Laboratorio de Análisis y de Control de Calidad",
      nomEuskera: "Analisi eta Kalitate Kontroleko Laborategia",
      abr: "LACC",
      familia: "Química",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14634, 14664],
      duracion: 2000
    },
    {
      codcicl: 170002,
      nom: "Química Industrial",
      nomEuskera: "Kimika Industriala",
      abr: "QI",
      familia: "Química",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14634, 14664],
      duracion: 2000
    },
  
    // MODALIDAD DUAL - EJEMPLOS
    {
      codcicl: 10003001,
      nom: "Desarrollo de Aplicaciones Multiplataforma (DUAL)",
      nomEuskera: "Plataforma Anitzeko Aplikazioen Garapena (DUALA)",
      abr: "DAM-D",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "Dual",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 15112, 14634],
      duracion: 2000
    },
    {
      codcicl: 10010001,
      nom: "Administración y Finanzas (DUAL)",
      nomEuskera: "Administrazioa eta Finantzak (DUALA)",
      abr: "AF-D",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "Dual",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10137, 14088, 14950],
      duracion: 2000
    },
    {
      codcicl: 30003001,
      nom: "Programación de la Producción en Fabricación Mecánica (DUAL)",
      nomEuskera: "Fabrikazio Mekanikoko Ekoizpenaren Programazioa (DUALA)",
      abr: "PPFM-D",
      familia: "Fabricación Mecánica",
      grado: "Superior",
      modalidad: "Dual",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [12054, 13020, 14950],
      duracion: 2000
    },
    {
      codcicl: 20003001,
      nom: "Automatización y Robótica Industrial (DUAL)",
      nomEuskera: "Automatizazio eta Robotika Industriala (DUALA)",
      abr: "ARI-D",
      familia: "Electricidad y Electrónica",
      grado: "Superior",
      modalidad: "Dual",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10138, 14069, 14950],
      duracion: 2000
    },
  
    // MODALIDAD A DISTANCIA - EJEMPLOS
    {
      codcicl: 10010002,
      nom: "Administración y Finanzas (DISTANCIA)",
      nomEuskera: "Administrazioa eta Finantzak (URRUTIRA)",
      abr: "AF-DIST",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "Distancia",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10618],
      duracion: 2000
    },
    {
      codcicl: 10004002,
      nom: "Desarrollo de Aplicaciones Web (DISTANCIA)",
      nomEuskera: "Web Aplikazioen Garapena (URRUTIRA)",
      abr: "DAW-DIST",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "Distancia",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10618, 13613],
      duracion: 2000
    },
    {
      codcicl: 90001001,
      nom: "Educación Infantil (DISTANCIA)",
      nomEuskera: "Haur Hezkuntza (URRUTIRA)",
      abr: "EI-DIST",
      familia: "Servicios Socioculturales y a la Comunidad",
      grado: "Superior",
      modalidad: "Distancia",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10618, 13613],
      duracion: 2000
    },
    {
      codcicl: 10012001,
      nom: "Gestión Administrativa (DISTANCIA)",
      nomEuskera: "Administrazio Kudeaketa (URRUTIRA)",
      abr: "GA-DIST",
      familia: "Administración y Gestión",
      grado: "Medio",
      modalidad: "Distancia",
      turno: "Diurno",
      idiomas: ["ES", "EU"],
      centros: [10618, 13613],
      duracion: 2000
    },
  
    // TURNO VESPERTINO - EJEMPLOS
    {
      codcicl: 10010003,
      nom: "Administración y Finanzas (VESPERTINO)",
      nomEuskera: "Administrazioa eta Finantzak (ARRATSALDEKOA)",
      abr: "AF-VESP",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Vespertino",
      idiomas: ["ES", "EU"],
      centros: [10137, 15112],
      duracion: 2000
    },
    {
      codcicl: 10003002,
      nom: "Desarrollo de Aplicaciones Multiplataforma (VESPERTINO)",
      nomEuskera: "Plataforma Anitzeko Aplikazioen Garapena (ARRATSALDEKOA)",
      abr: "DAM-VESP",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Vespertino",
      idiomas: ["ES", "EU"],
      centros: [10137, 15112],
      duracion: 2000
    },
  
    // TURNO NOCTURNO - EJEMPLOS
    {
      codcicl: 10012002,
      nom: "Gestión Administrativa (NOCTURNO)",
      nomEuskera: "Administrazio Kudeaketa (GAUEKOA)",
      abr: "GA-NOCT",
      familia: "Administración y Gestión",
      grado: "Medio",
      modalidad: "Presencial",
      turno: "Nocturno",
      idiomas: ["ES", "EU"],
      centros: [10137],
      duracion: 2000
    },
  
    // CICLOS EN INGLÉS - EJEMPLOS
    {
      codcicl: 10004003,
      nom: "Desarrollo de Aplicaciones Web (INGLÉS)",
      nomEuskera: "Web Aplikazioen Garapena (INGELESEZ)",
      abr: "DAW-EN",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["EN", "ES"],
      centros: [12229],
      duracion: 2000
    },
    {
      codcicl: 10006001,
      nom: "Comercio Internacional (INGLÉS)",
      nomEuskera: "Nazioarteko Merkataritza (INGELESEZ)",
      abr: "CI-EN",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["EN", "ES"],
      centros: [10137, 12053],
      duracion: 2000
    },
    {
      codcicl: 60005001,
      nom: "Gestión de Alojamientos Turísticos (INGLÉS)",
      nomEuskera: "Turismo Ostatuen Kudeaketa (INGELESEZ)",
      abr: "GAT-EN",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "Presencial",
      turno: "Diurno",
      idiomas: ["EN", "ES", "EU"],
      centros: [10256, 14340],
      duracion: 2000
    }
  ];
  
  // Funciones auxiliares para filtrar y buscar ciclos
  export const filtrarCiclos = {
    porGrado: (grado: 'Básico' | 'Medio' | 'Superior') => 
      ciclos.filter(ciclo => ciclo.grado === grado),
    
    porFamilia: (familia: string) => 
      ciclos.filter(ciclo => ciclo.familia === familia),
    
    porModalidad: (modalidad: 'Presencial' | 'Dual' | 'Distancia') => 
      ciclos.filter(ciclo => ciclo.modalidad === modalidad),
    
    porTurno: (turno: 'Diurno' | 'Vespertino' | 'Nocturno' | 'Mixto') => 
      ciclos.filter(ciclo => ciclo.turno === turno),
    
    porIdioma: (idioma: 'ES' | 'EU' | 'EN') => 
      ciclos.filter(ciclo => ciclo.idiomas.includes(idioma)),
    
    porCentro: (codigoCentro: number) =>
      ciclos.filter(ciclo => ciclo.centros.includes(codigoCentro)),
    
    disponiblesEnIngles: () => 
      ciclos.filter(ciclo => ciclo.idiomas.includes('EN')),
    
    modalidadDual: () =>
      ciclos.filter(ciclo => ciclo.modalidad === 'Dual'),
    
    aDistancia: () =>
      ciclos.filter(ciclo => ciclo.modalidad === 'Distancia'),
    
    buscarPorTexto: (texto: string) =>
      ciclos.filter(ciclo => 
        ciclo.nom.toLowerCase().includes(texto.toLowerCase()) ||
        ciclo.nomEuskera.toLowerCase().includes(texto.toLowerCase()) ||
        ciclo.abr.toLowerCase().includes(texto.toLowerCase())
      )
  };
  
  // Obtener todas las familias profesionales disponibles
  export const familiasProfesionales = [...new Set(ciclos.map(c => c.familia))].sort();
  
  // Estadísticas de la oferta formativa
  export const estadisticas = {
    totalCiclos: ciclos.length,
    porGrado: {
      basico: ciclos.filter(c => c.grado === 'Básico').length,
      medio: ciclos.filter(c => c.grado === 'Medio').length,
      superior: ciclos.filter(c => c.grado === 'Superior').length
    },
    porModalidad: {
      presencial: ciclos.filter(c => c.modalidad === 'Presencial').length,
      dual: ciclos.filter(c => c.modalidad === 'Dual').length,
      distancia: ciclos.filter(c => c.modalidad === 'Distancia').length
    },
    totalFamilias: familiasProfesionales.length,
    ciclosEnIngles: ciclos.filter(c => c.idiomas.includes('EN')).length
  };
  
  export default ciclos;