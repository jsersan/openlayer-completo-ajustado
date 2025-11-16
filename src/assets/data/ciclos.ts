export interface CicloFormativo {
    codigo: string;
    nombre: string;
    nombreEuskera: string;
    familia: string;
    grado: 'Básico' | 'Medio' | 'Superior';
    modalidad?: 'A' | 'B' | 'D'; // A: Presencial, B: Dual, D: Distancia
    duracion: number; // en horas
    turno?: 'Diurno' | 'Vespertino' | 'Nocturno';
    idiomas?: string[]; // Idiomas en los que se imparte
  }
  
  export const ciclosFormativos: CicloFormativo[] = [
    // FORMACIÓN PROFESIONAL BÁSICA
    {
      codigo: "FPB101",
      nombre: "Servicios Administrativos",
      nombreEuskera: "Administrazio Zerbitzuak",
      familia: "Administración y Gestión",
      grado: "Básico",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "FPB102",
      nombre: "Informática y Comunicaciones",
      nombreEuskera: "Informatika eta Komunikazioak",
      familia: "Informática y Comunicaciones",
      grado: "Básico",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "FPB103",
      nombre: "Electricidad y Electrónica",
      nombreEuskera: "Elektrizitatea eta Elektronika",
      familia: "Electricidad y Electrónica",
      grado: "Básico",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "FPB104",
      nombre: "Fabricación y Montaje",
      nombreEuskera: "Fabrikazioa eta Muntaketa",
      familia: "Fabricación Mecánica",
      grado: "Básico",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "FPB105",
      nombre: "Mantenimiento de Vehículos",
      nombreEuskera: "Ibilgailuen Mantentze-lanak",
      familia: "Transporte y Mantenimiento de Vehículos",
      grado: "Básico",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "FPB106",
      nombre: "Servicios Comerciales",
      nombreEuskera: "Merkataritza Zerbitzuak",
      familia: "Comercio y Marketing",
      grado: "Básico",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "FPB107",
      nombre: "Cocina y Restauración",
      nombreEuskera: "Sukaldaritza eta Jatetxe Zerbitzua",
      familia: "Hostelería y Turismo",
      grado: "Básico",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "FPB108",
      nombre: "Peluquería y Estética",
      nombreEuskera: "Ile-apainketa eta Estetika",
      familia: "Imagen Personal",
      grado: "Básico",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "FPB109",
      nombre: "Carpintería y Mueble",
      nombreEuskera: "Arozteria eta Altzariak",
      familia: "Madera, Mueble y Corcho",
      grado: "Básico",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "FPB110",
      nombre: "Reforma y Mantenimiento de Edificios",
      nombreEuskera: "Eraikinen Berrikuntza eta Mantentze-lanak",
      familia: "Edificación y Obra Civil",
      grado: "Básico",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - ADMINISTRACIÓN Y GESTIÓN
    {
      codigo: "GM-ADG01",
      nombre: "Gestión Administrativa",
      nombreEuskera: "Administrazio Kudeaketa",
      familia: "Administración y Gestión",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - INFORMÁTICA Y COMUNICACIONES
    {
      codigo: "GM-IFC01",
      nombre: "Sistemas Microinformáticos y Redes",
      nombreEuskera: "Sistema Mikroinformatikoak eta Sareak",
      familia: "Informática y Comunicaciones",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - ELECTRICIDAD Y ELECTRÓNICA
    {
      codigo: "GM-ELE01",
      nombre: "Instalaciones Eléctricas y Automáticas",
      nombreEuskera: "Instalazio Elektriko eta Automatikoak",
      familia: "Electricidad y Electrónica",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-ELE02",
      nombre: "Instalaciones de Telecomunicaciones",
      nombreEuskera: "Telekomunikazio Instalazioak",
      familia: "Electricidad y Electrónica",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - FABRICACIÓN MECÁNICA
    {
      codigo: "GM-FME01",
      nombre: "Mecanizado",
      nombreEuskera: "Mekanizazioa",
      familia: "Fabricación Mecánica",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-FME02",
      nombre: "Soldadura y Calderería",
      nombreEuskera: "Soldadura eta Galdareria",
      familia: "Fabricación Mecánica",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - INSTALACIÓN Y MANTENIMIENTO
    {
      codigo: "GM-IMA01",
      nombre: "Mantenimiento Electromecánico",
      nombreEuskera: "Mantentze-lan Elektromekanikoak",
      familia: "Instalación y Mantenimiento",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - TRANSPORTE Y MANTENIMIENTO DE VEHÍCULOS
    {
      codigo: "GM-TMV01",
      nombre: "Electromecánica de Vehículos Automóviles",
      nombreEuskera: "Ibilgailu Automobilena Elektromekanika",
      familia: "Transporte y Mantenimiento de Vehículos",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-TMV02",
      nombre: "Carrocería",
      nombreEuskera: "Karoseria",
      familia: "Transporte y Mantenimiento de Vehículos",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - COMERCIO Y MARKETING
    {
      codigo: "GM-COM01",
      nombre: "Actividades Comerciales",
      nombreEuskera: "Merkataritza Jarduerak",
      familia: "Comercio y Marketing",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - HOSTELERÍA Y TURISMO
    {
      codigo: "GM-HOT01",
      nombre: "Cocina y Gastronomía",
      nombreEuskera: "Sukaldaritza eta Gastronomia",
      familia: "Hostelería y Turismo",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-HOT02",
      nombre: "Servicios en Restauración",
      nombreEuskera: "Jatetxe Zerbitzua",
      familia: "Hostelería y Turismo",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - IMAGEN PERSONAL
    {
      codigo: "GM-IMP01",
      nombre: "Peluquería y Cosmética Capilar",
      nombreEuskera: "Ile-apainketa eta Kosmetika Kapilar",
      familia: "Imagen Personal",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-IMP02",
      nombre: "Estética y Belleza",
      nombreEuskera: "Estetika eta Edertasuna",
      familia: "Imagen Personal",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - SANIDAD
    {
      codigo: "GM-SAN01",
      nombre: "Cuidados Auxiliares de Enfermería",
      nombreEuskera: "Erizaintzako Laguntza Lanak",
      familia: "Sanidad",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-SAN02",
      nombre: "Farmacia y Parafarmacia",
      nombreEuskera: "Farmazia eta Parafarmazia",
      familia: "Sanidad",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - ADMINISTRACIÓN Y GESTIÓN
    {
      codigo: "GS-ADG01",
      nombre: "Administración y Finanzas",
      nombreEuskera: "Administrazioa eta Finantzak",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-ADG02",
      nombre: "Asistencia a la Dirección",
      nombreEuskera: "Zuzendaritzarako Laguntza",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"]
    },
  
    // GRADO SUPERIOR - INFORMÁTICA Y COMUNICACIONES
    {
      codigo: "GS-IFC01",
      nombre: "Desarrollo de Aplicaciones Multiplataforma",
      nombreEuskera: "Plataforma Anitzeko Aplikazioen Garapena",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-IFC02",
      nombre: "Desarrollo de Aplicaciones Web",
      nombreEuskera: "Web Aplikazioen Garapena",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-IFC03",
      nombre: "Administración de Sistemas Informáticos en Red",
      nombreEuskera: "Sareko Sistema Informatikoen Administrazioa",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - ELECTRICIDAD Y ELECTRÓNICA
    {
      codigo: "GS-ELE01",
      nombre: "Automatización y Robótica Industrial",
      nombreEuskera: "Automatizazio eta Robotika Industriala",
      familia: "Electricidad y Electrónica",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-ELE02",
      nombre: "Sistemas Electrotécnicos y Automatizados",
      nombreEuskera: "Sistema Elektroteknikoak eta Automatizatuak",
      familia: "Electricidad y Electrónica",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-ELE03",
      nombre: "Mantenimiento Electrónico",
      nombreEuskera: "Mantentze-lan Elektronikoak",
      familia: "Electricidad y Electrónica",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - FABRICACIÓN MECÁNICA
    {
      codigo: "GS-FME01",
      nombre: "Programación de la Producción en Fabricación Mecánica",
      nombreEuskera: "Fabrikazio Mekanikoko Ekoizpenaren Programazioa",
      familia: "Fabricación Mecánica",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-FME02",
      nombre: "Diseño en Fabricación Mecánica",
      nombreEuskera: "Fabrikazio Mekanikoko Diseinua",
      familia: "Fabricación Mecánica",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - INSTALACIÓN Y MANTENIMIENTO
    {
      codigo: "GS-IMA01",
      nombre: "Mantenimiento de Instalaciones Térmicas y de Fluidos",
      nombreEuskera: "Instalazio Termikoen eta Fluidoen Mantentze-lanak",
      familia: "Instalación y Mantenimiento",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-IMA02",
      nombre: "Mecatrónica Industrial",
      nombreEuskera: "Mekatronika Industriala",
      familia: "Instalación y Mantenimiento",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - TRANSPORTE Y MANTENIMIENTO DE VEHÍCULOS
    {
      codigo: "GS-TMV01",
      nombre: "Automoción",
      nombreEuskera: "Automozioa",
      familia: "Transporte y Mantenimiento de Vehículos",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - COMERCIO Y MARKETING
    {
      codigo: "GS-COM01",
      nombre: "Comercio Internacional",
      nombreEuskera: "Nazioarteko Merkataritza",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"]
    },
    {
      codigo: "GS-COM02",
      nombre: "Gestión de Ventas y Espacios Comerciales",
      nombreEuskera: "Salmenten eta Espazio Komertzialen Kudeaketa",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-COM03",
      nombre: "Marketing y Publicidad",
      nombreEuskera: "Marketina eta Publizitatea",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-COM04",
      nombre: "Transporte y Logística",
      nombreEuskera: "Garraioa eta Logistika",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - HOSTELERÍA Y TURISMO
    {
      codigo: "GS-HOT01",
      nombre: "Dirección de Cocina",
      nombreEuskera: "Sukaldaritza Zuzendaritza",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-HOT02",
      nombre: "Dirección de Servicios de Restauración",
      nombreEuskera: "Jatetxe Zerbitzuen Zuzendaritza",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-HOT03",
      nombre: "Gestión de Alojamientos Turísticos",
      nombreEuskera: "Turismo Ostatuen Kudeaketa",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"]
    },
    {
      codigo: "GS-HOT04",
      nombre: "Agencias de Viajes y Gestión de Eventos",
      nombreEuskera: "Bidaia Agentziak eta Ekitaldien Kudeaketa",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"]
    },
    {
      codigo: "GS-HOT05",
      nombre: "Guía, Información y Asistencias Turísticas",
      nombreEuskera: "Gida, Informazio eta Turismo Laguntzak",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"]
    },
  
    // GRADO SUPERIOR - IMAGEN PERSONAL
    {
      codigo: "GS-IMP01",
      nombre: "Estética Integral y Bienestar",
      nombreEuskera: "Estetika Integral eta Ongizatea",
      familia: "Imagen Personal",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-IMP02",
      nombre: "Estilismo y Dirección de Peluquería",
      nombreEuskera: "Estilismoa eta Ile-apainketaren Zuzendaritza",
      familia: "Imagen Personal",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-IMP03",
      nombre: "Caracterización y Maquillaje Profesional",
      nombreEuskera: "Karakterizazioa eta Makillaje Profesionala",
      familia: "Imagen Personal",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - SANIDAD
    {
      codigo: "GS-SAN01",
      nombre: "Laboratorio Clínico y Biomédico",
      nombreEuskera: "Laboratorio Kliniko eta Biomedikoa",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-SAN02",
      nombre: "Anatomía Patológica y Citodiagnóstico",
      nombreEuskera: "Anatomia Patologikoa eta Zitodiagnostikoa",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-SAN03",
      nombre: "Imagen para el Diagnóstico y Medicina Nuclear",
      nombreEuskera: "Diagnostikorako Irudia eta Mediku Nuklearra",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-SAN04",
      nombre: "Radioterapia y Dosimetría",
      nombreEuskera: "Erradioterapia eta Dosimetria",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-SAN05",
      nombre: "Higiene Bucodental",
      nombreEuskera: "Ahoko Higienea",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-SAN06",
      nombre: "Prótesis Dentales",
      nombreEuskera: "Protesi Dentalak",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-SAN07",
      nombre: "Audiología Protésica",
      nombreEuskera: "Audiologia Protesikoa",
      familia: "Sanidad",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - SERVICIOS SOCIOCULTURALES Y A LA COMUNIDAD
    {
      codigo: "GS-SSC01",
      nombre: "Educación Infantil",
      nombreEuskera: "Haur Hezkuntza",
      familia: "Servicios Socioculturales y a la Comunidad",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-SSC02",
      nombre: "Integración Social",
      nombreEuskera: "Gizarte Integrazio",
      familia: "Servicios Socioculturales y a la Comunidad",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-SSC03",
      nombre: "Animación Sociocultural y Turística",
      nombreEuskera: "Animazio Soziokultural eta Turistikoa",
      familia: "Servicios Socioculturales y a la Comunidad",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - EDIFICACIÓN Y OBRA CIVIL
    {
      codigo: "GS-EOC01",
      nombre: "Proyectos de Edificación",
      nombreEuskera: "Eraikuntza Proiektuak",
      familia: "Edificación y Obra Civil",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-EOC02",
      nombre: "Proyectos de Obra Civil",
      nombreEuskera: "Obra Zibileko Proiektuak",
      familia: "Edificación y Obra Civil",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - ENERGÍA Y AGUA
    {
      codigo: "GS-ENA01",
      nombre: "Energías Renovables",
      nombreEuskera: "Energia Berriztagarriak",
      familia: "Energía y Agua",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-ENA02",
      nombre: "Eficiencia Energética y Energía Solar Térmica",
      nombreEuskera: "Energia Eraginkortasuna eta Energia Solar Termikoa",
      familia: "Energía y Agua",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // MODALIDAD DUAL - Ejemplos
    {
      codigo: "GS-IFC01-DUAL",
      nombre: "Desarrollo de Aplicaciones Multiplataforma (DUAL)",
      nombreEuskera: "Plataforma Anitzeko Aplikazioen Garapena (DUALA)",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "B",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-ADG01-DUAL",
      nombre: "Administración y Finanzas (DUAL)",
      nombreEuskera: "Administrazioa eta Finantzak (DUALA)",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "B",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-FME01-DUAL",
      nombre: "Programación de la Producción en Fabricación Mecánica (DUAL)",
      nombreEuskera: "Fabrikazio Mekanikoko Ekoizpenaren Programazioa (DUALA)",
      familia: "Fabricación Mecánica",
      grado: "Superior",
      modalidad: "B",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-ELE01-DUAL",
      nombre: "Automatización y Robótica Industrial (DUAL)",
      nombreEuskera: "Automatizazio eta Robotika Industriala (DUALA)",
      familia: "Electricidad y Electrónica",
      grado: "Superior",
      modalidad: "B",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-COM01-DUAL",
      nombre: "Comercio Internacional (DUAL)",
      nombreEuskera: "Nazioarteko Merkataritza (DUALA)",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "B",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU", "EN"]
    },
    {
      codigo: "GS-HOT01-DUAL",
      nombre: "Dirección de Cocina (DUAL)",
      nombreEuskera: "Sukaldaritza Zuzendaritza (DUALA)",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "B",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // MODALIDAD A DISTANCIA - Ejemplos
    {
      codigo: "GS-ADG01-DIST",
      nombre: "Administración y Finanzas (DISTANCIA)",
      nombreEuskera: "Administrazioa eta Finantzak (URRUTIRA)",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "D",
      duracion: 2000,
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-IFC02-DIST",
      nombre: "Desarrollo de Aplicaciones Web (DISTANCIA)",
      nombreEuskera: "Web Aplikazioen Garapena (URRUTIRA)",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "D",
      duracion: 2000,
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-SSC01-DIST",
      nombre: "Educación Infantil (DISTANCIA)",
      nombreEuskera: "Haur Hezkuntza (URRUTIRA)",
      familia: "Servicios Socioculturales y a la Comunidad",
      grado: "Superior",
      modalidad: "D",
      duracion: 2000,
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-ADG01-DIST",
      nombre: "Gestión Administrativa (DISTANCIA)",
      nombreEuskera: "Administrazio Kudeaketa (URRUTIRA)",
      familia: "Administración y Gestión",
      grado: "Medio",
      modalidad: "D",
      duracion: 2000,
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-IFC01-DIST",
      nombre: "Sistemas Microinformáticos y Redes (DISTANCIA)",
      nombreEuskera: "Sistema Mikroinformatikoak eta Sareak (URRUTIRA)",
      familia: "Informática y Comunicaciones",
      grado: "Medio",
      modalidad: "D",
      duracion: 2000,
      idiomas: ["ES", "EU"]
    },
  
    // TURNO VESPERTINO - Ejemplos
    {
      codigo: "GS-ADG01-VESP",
      nombre: "Administración y Finanzas (VESPERTINO)",
      nombreEuskera: "Administrazioa eta Finantzak (ARRATSALDEKOA)",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Vespertino",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-IFC01-VESP",
      nombre: "Desarrollo de Aplicaciones Multiplataforma (VESPERTINO)",
      nombreEuskera: "Plataforma Anitzeko Aplikazioen Garapena (ARRATSALDEKOA)",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Vespertino",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-ADG01-VESP",
      nombre: "Gestión Administrativa (VESPERTINO)",
      nombreEuskera: "Administrazio Kudeaketa (ARRATSALDEKOA)",
      familia: "Administración y Gestión",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Vespertino",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-IFC01-VESP",
      nombre: "Sistemas Microinformáticos y Redes (VESPERTINO)",
      nombreEuskera: "Sistema Mikroinformatikoak eta Sareak (ARRATSALDEKOA)",
      familia: "Informática y Comunicaciones",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Vespertino",
      idiomas: ["ES", "EU"]
    },
  
    // TURNO NOCTURNO - Ejemplos
    {
      codigo: "GS-ADG01-NOCT",
      nombre: "Administración y Finanzas (NOCTURNO)",
      nombreEuskera: "Administrazioa eta Finantzak (GAUEKOA)",
      familia: "Administración y Gestión",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Nocturno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-IFC01-NOCT",
      nombre: "Sistemas Microinformáticos y Redes (NOCTURNO)",
      nombreEuskera: "Sistema Mikroinformatikoak eta Sareak (GAUEKOA)",
      familia: "Informática y Comunicaciones",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Nocturno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - ARTES GRÁFICAS
    {
      codigo: "GS-ARG01",
      nombre: "Diseño y Edición de Publicaciones Impresas y Multimedia",
      nombreEuskera: "Argitalpen Inprimatu eta Multimedia Diseinua eta Edizioa",
      familia: "Artes Gráficas",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-ARG02",
      nombre: "Diseño y Gestión de la Producción Gráfica",
      nombreEuskera: "Ekoizpen Grafikoaren Diseinua eta Kudeaketa",
      familia: "Artes Gráficas",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - IMAGEN Y SONIDO
    {
      codigo: "GS-IMS01",
      nombre: "Iluminación, Captación y Tratamiento de Imagen",
      nombreEuskera: "Argitze, Irudiaren Kaptura eta Tratamendua",
      familia: "Imagen y Sonido",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-IMS02",
      nombre: "Sonido para Audiovisuales y Espectáculos",
      nombreEuskera: "Ikus-entzunezkoentzako eta Ikuskizunentzako Soinua",
      familia: "Imagen y Sonido",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-IMS03",
      nombre: "Producción de Audiovisuales y Espectáculos",
      nombreEuskera: "Ikus-entzunezkoen eta Ikuskizunen Ekoizpena",
      familia: "Imagen y Sonido",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-IMS04",
      nombre: "Animaciones 3D, Juegos y Entornos Interactivos",
      nombreEuskera: "3D Animazioak, Jokoak eta Ingurune Interaktiboak",
      familia: "Imagen y Sonido",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - ACTIVIDADES FÍSICAS Y DEPORTIVAS
    {
      codigo: "GM-AFD01",
      nombre: "Guía en el Medio Natural y de Tiempo Libre",
      nombreEuskera: "Natura Inguruneko eta Aisialdiko Gida",
      familia: "Actividades Físicas y Deportivas",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - ACTIVIDADES FÍSICAS Y DEPORTIVAS
    {
      codigo: "GS-AFD01",
      nombre: "Enseñanza y Animación Sociodeportiva",
      nombreEuskera: "Irakaskuntza eta Animazio Sozio-deportiboa",
      familia: "Actividades Físicas y Deportivas",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-AFD02",
      nombre: "Acondicionamiento Físico",
      nombreEuskera: "Gorputz Prestakuntza",
      familia: "Actividades Físicas y Deportivas",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - AGRARIA
    {
      codigo: "GM-AGA01",
      nombre: "Producción Agroecológica",
      nombreEuskera: "Ekoizpen Agroekologikoa",
      familia: "Agraria",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-AGA02",
      nombre: "Jardinería y Floristería",
      nombreEuskera: "Lorezaintza eta Loredenda",
      familia: "Agraria",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - AGRARIA
    {
      codigo: "GS-AGA01",
      nombre: "Paisajismo y Medio Rural",
      nombreEuskera: "Paisajismoa eta Landa Ingurunea",
      familia: "Agraria",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-AGA02",
      nombre: "Gestión Forestal y del Medio Natural",
      nombreEuskera: "Baso eta Natura Ingurunearen Kudeaketa",
      familia: "Agraria",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - MARÍTIMO-PESQUERA
    {
      codigo: "GM-MAP01",
      nombre: "Navegación y Pesca de Litoral",
      nombreEuskera: "Nabigazioa eta Itsasertzerako Arrantza",
      familia: "Marítimo-Pesquera",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GM-MAP02",
      nombre: "Mantenimiento y Control de la Maquinaria de Buques y Embarcaciones",
      nombreEuskera: "Ontzi eta Itsasontzien Makinen Mantentze-lanak eta Kontrola",
      familia: "Marítimo-Pesquera",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - MARÍTIMO-PESQUERA
    {
      codigo: "GS-MAP01",
      nombre: "Transporte Marítimo y Pesca de Altura",
      nombreEuskera: "Itsas Garraioa eta Urruneko Arrantza",
      familia: "Marítimo-Pesquera",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-MAP02",
      nombre: "Organización del Mantenimiento de Maquinaria de Buques y Embarcaciones",
      nombreEuskera: "Ontzi eta Itsasontzien Makinen Mantentze-lanen Antolaketa",
      familia: "Marítimo-Pesquera",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-MAP03",
      nombre: "Acuicultura",
      nombreEuskera: "Akuikultura",
      familia: "Marítimo-Pesquera",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - QUÍMICA
    {
      codigo: "GS-QUI01",
      nombre: "Laboratorio de Análisis y de Control de Calidad",
      nombreEuskera: "Analisi eta Kalitate Kontroleko Laborategia",
      familia: "Química",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
    {
      codigo: "GS-QUI02",
      nombre: "Química Industrial",
      nombreEuskera: "Kimika Industriala",
      familia: "Química",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO MEDIO - VIDRIO Y CERÁMICA
    {
      codigo: "GM-VIC01",
      nombre: "Operaciones de Fabricación de Productos Cerámicos",
      nombreEuskera: "Zeramikako Produktuen Fabrikazioko Eragiketak",
      familia: "Vidrio y Cerámica",
      grado: "Medio",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // GRADO SUPERIOR - VIDRIO Y CERÁMICA
    {
      codigo: "GS-VIC01",
      nombre: "Desarrollo y Fabricación de Productos Cerámicos",
      nombreEuskera: "Zeramikako Produktuen Garapena eta Fabrikazioa",
      familia: "Vidrio y Cerámica",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["ES", "EU"]
    },
  
    // CICLOS EN INGLÉS - Ejemplos de programas bilingües
    {
      codigo: "GS-IFC02-EN",
      nombre: "Desarrollo de Aplicaciones Web (INGLÉS)",
      nombreEuskera: "Web Aplikazioen Garapena (INGELESEZ)",
      familia: "Informática y Comunicaciones",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["EN", "ES"]
    },
    {
      codigo: "GS-COM01-EN",
      nombre: "Comercio Internacional (INGLÉS)",
      nombreEuskera: "Nazioarteko Merkataritza (INGELESEZ)",
      familia: "Comercio y Marketing",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["EN", "ES"]
    },
    {
      codigo: "GS-HOT03-EN",
      nombre: "Gestión de Alojamientos Turísticos (INGLÉS)",
      nombreEuskera: "Turismo Ostatuen Kudeaketa (INGELESEZ)",
      familia: "Hostelería y Turismo",
      grado: "Superior",
      modalidad: "A",
      duracion: 2000,
      turno: "Diurno",
      idiomas: ["EN", "ES", "EU"]
    }
  ];
  
  // Función auxiliar para filtrar ciclos por diferentes criterios
  export const filtrarCiclos = {
    porGrado: (grado: 'Básico' | 'Medio' | 'Superior') => 
      ciclosFormativos.filter(ciclo => ciclo.grado === grado),
    
    porFamilia: (familia: string) => 
      ciclosFormativos.filter(ciclo => ciclo.familia === familia),
    
    porModalidad: (modalidad: 'A' | 'B' | 'D') => 
      ciclosFormativos.filter(ciclo => ciclo.modalidad === modalidad),
    
    porTurno: (turno: 'Diurno' | 'Vespertino' | 'Nocturno') => 
      ciclosFormativos.filter(ciclo => ciclo.turno === turno),
    
    porIdioma: (idioma: string) => 
      ciclosFormativos.filter(ciclo => ciclo.idiomas?.includes(idioma)),
    
    disponiblesEnIngles: () => 
      ciclosFormativos.filter(ciclo => ciclo.idiomas?.includes('EN'))
  };
  
  // Obtener todas las familias profesionales disponibles
  export const familiasProfesionales = [...new Set(ciclosFormativos.map(c => c.familia))].sort();