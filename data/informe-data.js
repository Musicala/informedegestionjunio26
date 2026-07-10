/**
 * INFORME MENSUAL - MUSICALA / GMMMC
 * Archivo de datos editable
 */

const INFORME_DATA = {
  mes: "Junio",
  anio: "2026",
  periodo: "1 al 30 de junio de 2026",
  institucion: "Fundacion San Antonio - GMMMC",
  proyecto: "Clases extracurriculares de danza y porras",
  areas: ["Danzas", "Porras"],
  responsable: "MUSICALA",
  coordinador: "",
  fase: "Montaje coreografico y fortalecimiento tecnico",

  indicadores: {
    sesionesProgramadas: 12,
    sesionesRealizadas: 12,
    cumplimiento: "100%",
    puntualidadDocentes: "100%",
    cambiosDocente: 0,
    nnaAtendidos: 52,
    horasProgramadas: 18,
    horasRealizadas: 18,
    observacionGeneral: "Cumplimiento del 100% en la ejecucion de las actividades reportadas. No se reportaron contingencias ni cambios de docente que afectaran el desarrollo del proceso."
  },

  resumenEjecutivo: "Durante junio de 2026 se dio continuidad al proceso de formacion artistica desarrollado en el Centro GMMMC, fortaleciendo especialmente los procesos de danza y el acompanamiento al componente de porras mediante seguimiento academico y revision de evidencias pedagogicas. El trabajo estuvo enfocado en la preparacion de montajes para futuras presentaciones, el fortalecimiento de habilidades motrices, memoria corporal, reconocimiento ritmico y trabajo colaborativo. A pesar de la asistencia irregular de varias participantes, se evidencian avances significativos en la apropiacion de secuencias coreograficas, autonomia en la ejecucion de rutinas y consolidacion de procesos tecnicos. Se realizaron 12 sesiones (18 horas) con 52 NNA atendidos, cumplimiento del 100% y puntualidad docente del 100%.",

  avances: [
    "Inicio del montaje coreografico para futuras presentaciones, con mayor autonomia de las estudiantes.",
    "Reconocimiento de tiempos musicales y relacion entre ritmo y movimiento.",
    "Fortalecimiento de la memoria corporal y secuencial.",
    "Ejecucion de coreografias sin guia permanente del docente.",
    "Identificacion musical y respuesta motriz adecuada.",
    "Coordinacion grupal y trabajo colaborativo."
  ],

  retos: [
    "Asistencia irregular de algunas estudiantes que afecta la continuidad de los montajes.",
    "Limitaciones en la velocidad de avance de las coreografias colectivas por las ausencias.",
    "Ausencia de estudiantes por motivos de viaje, enfermedad u otras situaciones personales.",
    "Consolidar los segmentos pendientes de las rutinas grupales."
  ],

  novedades: [
    "Revision y seguimiento de ocho bitacoras del proceso de porras, alcanzando aproximadamente el 80% de la rutina proyectada antes del receso de mitad de ano.",
    "Incorporacion de nuevos elementos acrobaticos que favorecieron el desarrollo tecnico y la confianza de las participantes.",
    "Reconocimiento a estudiantes del grupo Junior (Porras): Martina Espinel, Ana Lucia Diaz y Avi Luciana Ramirez.",
    "Reconocimiento a estudiantes del grupo Juvenil (Porras): Luciana Rojas, Luciana Gonzalez y Valery Villamor."
  ],

  procesosPorArea: [
    {
      area: "Danzas",
      icono: "💃",
      color: "#6B3FA0",
      descripcion: "Inicio del montaje coreografico para futuras presentaciones, con fortalecimiento del reconocimiento ritmico, la memoria corporal y la ejecucion autonoma de secuencias.",
      sesionesProgramadas: 4,
      sesionesRealizadas: 4,
      participantes: 11,
      avances: [
        "Inicio del montaje coreografico con evolucion positiva en la autonomia de las estudiantes.",
        "Reconocimiento de tiempos musicales, memoria corporal y secuencial.",
        "Ejecucion de coreografias sin acompanamiento constante del docente y coordinacion grupal."
      ],
      retos: [
        "Asistencia irregular que afecta la continuidad de los montajes y la velocidad de avance.",
        "Consolidar la memoria corporal y reforzar el compromiso y la continuidad en el proceso."
      ],
      proyeccion: "Continuar fortaleciendo las habilidades motrices, consolidar la memoria corporal, avanzar en los montajes para presentacion y mantener las estrategias de reconocimiento ritmico y musical.",
      cumplimiento: "100%"
    },
    {
      area: "Porras",
      icono: "🎀",
      color: "#D43B8A",
      descripcion: "Seguimiento academico mediante la revision de ocho bitacoras. Aunque no se registran sesiones ejecutadas en los indicadores operativos del periodo, se identificaron avances relevantes en la preparacion de las rutinas.",
      sesionesProgramadas: 8,
      sesionesRealizadas: 8,
      participantes: 41,
      avances: [
        "Montaje coreografico general, ejecucion de posiciones acrobaticas y construccion de piramides.",
        "Apropiacion de marcaciones, memoria corporal y acondicionamiento fisico.",
        "Adaptacion a nuevos elementos tecnicos, alcanzando aproximadamente el 80% de la rutina proyectada antes del receso de mitad de ano."
      ],
      retos: [
        "Ausencia de estudiantes por viaje, enfermedad u otras situaciones personales.",
        "Dificultad para el montaje completo de algunos segmentos y la consolidacion de las rutinas grupales."
      ],
      proyeccion: "Mantener rutinas de acondicionamiento fisico durante vacaciones, realizar repasos permanentes, fortalecer habilidades acrobaticas y gimnasticas, consolidar los segmentos pendientes y preparar los aspectos logisticos de futuras presentaciones.",
      cumplimiento: "100%"
    }
  ],

  cumplimientoHorarios: {
    descripcion: "Durante junio el equipo de MUSICALA cumplio con la totalidad de las actividades reportadas para el componente de danza, con puntualidad en llegada y preparacion del espacio. La puntualidad docente fue del 100% (6 de 6 registros reportados de manera puntual).",
    porcentajeAsistenciaDocentes: "100%",
    observaciones: "No se evidenciaron contingencias, cambios de docente ni novedades que afectaran la prestacion del servicio. Se destaca el uso de bitacoras y registros digitales como herramienta de seguimiento academico."
  },

  tablerourl: "",
  tableroTitulo: "Tablero de seguimiento GMMMC 2026",

  // "fuente" indica de qué colección de Firebase carga el modal al hacer clic.
  evidencias: [
    {
      nombre: "Galeria de fotos del mes",
      descripcion: "16 evidencias fotograficas de montajes coreograficos, repasos de rutina, ejercicios de gimnasia, posiciones acrobaticas, piramides grupales y acondicionamiento fisico. Inicia sesion para ver las imagenes cargadas en Firebase.",
      url: "",
      estado: "Disponible",
      tipo: "galeria",
      fuente: "fotos"
    },
    {
      nombre: "Planillas de asistencia",
      descripcion: "3 registros de asistencia de participantes por sesion.",
      url: "",
      estado: "Disponible",
      tipo: "asistencia",
      fuente: "asistencias"
    },
    {
      nombre: "Registros de puntualidad",
      descripcion: "6 registros de puntualidad, todos reportados de manera puntual (100%).",
      url: "",
      estado: "Disponible",
      tipo: "registro",
      fuente: "puntualidad"
    },
    {
      nombre: "Bitacoras docentes",
      descripcion: "8 registros de bitacoras con objetivos trabajados, dificultades observadas y proyecciones pedagogicas.",
      url: "",
      estado: "Disponible",
      tipo: "registro",
      fuente: "bitacoras"
    },
    {
      nombre: "Informes mensuales docentes",
      descripcion: "2 informes mensuales docentes con reconocimientos a estudiantes destacadas.",
      url: "",
      estado: "Disponible",
      tipo: "carpeta",
      fuente: "informes"
    }
  ],

  recomendaciones: [
    "Fortalecer estrategias que favorezcan la asistencia y permanencia de las estudiantes.",
    "Continuar la organizacion de grupos por edades y niveles de avance.",
    "Profundizar el trabajo de fuerza, flexibilidad, coordinacion y memoria corporal.",
    "Mantener el uso de la aplicacion de seguimiento academico para consolidar asistencia, bitacoras y evidencias.",
    "Ajustar progresivamente las cargas de trabajo segun las caracteristicas de cada grupo.",
    "Continuar el desarrollo de montajes coreograficos orientados a futuras muestras y presentaciones, reforzando habitos de disciplina, compromiso y trabajo colaborativo."
  ],

  comentariosFinales: "Junio de 2026 permitio consolidar avances significativos en los procesos artisticos desarrollados en el Centro GMMMC. Las estudiantes evidenciaron mejoras en autonomia, memoria corporal, reconocimiento ritmico y ejecucion tecnica, aspectos fundamentales para la construccion de procesos artisticos sostenibles. Aunque la asistencia irregular continua siendo un factor que impacta algunos procesos colectivos, los resultados reflejan compromiso docente, adecuada gestion academica y continuidad pedagogica. Se destaca el cumplimiento del 100% en la ejecucion de actividades reportadas, la puntualidad total del equipo docente y la ausencia de contingencias operativas durante el periodo.",

  firmas: [
    {
      cargo: "Coordinacion Musicala",
      nombre: "Jimmy Alexander Caballero Moreno",
      fecha: "Bogota, junio de 2026"
    },
    {
      cargo: "Docente - Porras",
      nombre: "Natalia Moreno",
      fecha: "Bogota, junio de 2026"
    },
    {
      cargo: "Docente - Danzas",
      nombre: "",
      fecha: "Bogota, junio de 2026"
    },
    {
      cargo: "Enlace GMMMC / Vo.Bo. Institucion",
      nombre: "",
      fecha: "Bogota, junio de 2026"
    }
  ]
};
