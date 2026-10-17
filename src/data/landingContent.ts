export interface GroupItem {
  name: string
  description: string
}

export interface FactItem {
  label: string
  value: string
}

export interface StepItem {
  num: string
  title: string
  description: string
}

export interface NavItem {
  label: string
  to: string
  hint: string
  short?: string
}

export interface ContactInfo {
  parishName: string
  address: string
  email: string
  phone: string
  phoneLink: string
  whatsapp: string
  whatsappUrl: string
  facebook: string
  youtube: string
  instagram: string
  mapsUrl: string
}

export interface PillarItem {
  title: string
  description: string
  image: string
}

export interface MassSchedule {
  day: string
  times: string[]
  note?: string
}

export interface ParishData {
  intro: string
  masses: MassSchedule[]
}

export interface Credit {
  name: string
  href: string
}

export const credits: Credit[] = [
  { name: 'Luca Bertaina', href: 'https://github.com/LucaBertaina' },
  { name: 'Nicolás Correa', href: 'https://www.ncorrea.com.ar/' },
]

export const landingContent = {
  brandName: 'Acción Católica',
  parishName: 'Asunción de la Virgen',

  nav: [
    { label: 'Inicio', to: '/', hint: 'Quiénes somos y lo que nos sostiene' },
    { label: 'Grupos', to: '/grupos', hint: 'Un grupo para cada edad' },
    { label: 'Actividades', to: '/actividades', hint: 'Qué hacemos durante el año' },
    { label: 'Parroquia', to: '/parroquia', hint: 'Dónde estamos y horarios de misa' },
    { label: 'Contacto', to: '/contacto', hint: 'WhatsApp, teléfono y redes' },
  ] as NavItem[],

  invite: {
    eyebrow: 'Cómo sumarte',
    title: 'Hay un lugar para vos',
    description: 'Elegí el grupo que corresponde a tu edad y conocé los tres pasos para empezar.',
    cta: 'Ver los grupos',
  },

  hero: {
    eyebrow: 'Movimiento laical · Base parroquial',
    title: 'Fe, comunidad\ny servicio.',
    accent: 'comunidad',
    subtitle: 'Acción Católica es el espacio donde laicos de todas las edades viven su fe en comunidad, se forman y ponen manos a la obra en la parroquia y el barrio.',
    strongText: 'Sumate al grupo de Asunción de la Virgen.',
  },
  
  about: {
    eyebrow: 'Quiénes somos',
    dropCapLetter: 'L',
    dropCapText: 'a Acción Católica es la participación organizada de los laicos en la vida y la misión de la Iglesia. No es un club ni una ONG: es una forma concreta de vivir la fe junto a otros, con formación, oración y compromiso con la comunidad que nos rodea.',
    paragraph2: 'Fundada en Argentina en 1931, se organiza por parroquia y por edades, acompañada siempre por un asesor eclesiástico y por delegados laicos formados para guiar cada grupo.',
    pullQuote: 'Laicos que se forman, oran y actúan juntos, al servicio de su parroquia y su barrio.',
    facts: [
      { label: 'Fundada en', value: '1931' },
      { label: 'Alcance', value: 'Parroquial' },
      { label: 'Para', value: 'Todas las edades' },
    ] as FactItem[],
  },

  pillars: {
    title: 'Pilares que trabajamos',
    items: [
      {
        title: 'Oración',
        description: 'Es el pilar fundamental que sostiene nuestra fe y vida comunitaria. A través del encuentro personal y grupal con Dios en la oración, los Sacramentos y la Adoración, recargamos las fuerzas para el servicio diario.',
        image: 'oracion.png',
      },
      {
        title: 'Formación',
        description: 'Espacio para profundizar en la Palabra de Dios, la doctrina de la Iglesia y el magisterio. Nos formamos humana y espiritualmente para dar razón de nuestra fe en la sociedad actual con madurez.',
        image: 'formacion.png',
      },
      {
        title: 'Acción',
        description: 'La fe se demuestra con obras. Evangelizamos activamente a través de iniciativas solidarias, talleres, ayuda a sectores necesitados del barrio y la participación activa en las necesidades parroquiales.',
        image: 'accion.png',
      },
      {
        title: 'Sacrificio',
        description: 'El ofrecimiento generoso de nuestro tiempo, esfuerzo y pequeñas cruces diarias. Es la disposición de desgastar la vida alegremente por Cristo y por el bien de nuestros hermanos laicos y la comunidad.',
        image: 'sacrificio.png',
      },
    ] as PillarItem[],
  },
  
  groups: {
    eyebrow: 'Para cada edad',
    title: 'Nuestros grupos',
    description: 'Un lugar para cada edad. Encontrá el tuyo y conocé cómo empezar.',
    items: [
      { name: 'Niños', description: 'Primeros pasos en la fe a través del juego, la catequesis y el encuentro con otros chicos.' },
      { name: 'Jóvenes', description: 'Espacio para pensar la fe, la amistad y el proyecto de vida, con formación, servicio y comunidad.' },
      { name: 'Adultos', description: 'Compromiso laical maduro: familia, trabajo y parroquia desde una fe adulta.' },
      { name: 'Delegados', description: 'Formación permanente para quienes acompañan y coordinan a los demás grupos.' },
    ] as GroupItem[],
  },
  
  activities: {
    eyebrow: 'Qué hacemos',
    title: 'Actividades',
    description: 'Cada grupo arma su propio calendario, pero la mayoría de nuestras actividades giran en torno a estos ejes.',
    list: [
      'Catequesis y formación en la fe',
      'Encuentros semanales por grupo',
      'Retiros y campamentos',
      'Compromiso solidario y ayuda al prójimo',
      'Acompañamiento en celebraciones parroquiales',
      'Formación de delegados y catequistas',
    ],
  },
  
  join: {
    eyebrow: 'Cómo sumarte',
    title: 'Tres pasos para empezar',
    steps: [
      {
        num: '01',
        title: 'Acercate a la parroquia',
        description: 'Pasá por Asunción de la Virgen en el horario de secretaría, o escribinos por cualquiera de nuestros canales.',
      },
      {
        num: '02',
        title: 'Elegí tu grupo',
        description: 'Te contamos cuál corresponde a tu edad y te presentamos a los delegados que lo acompañan.',
      },
      {
        num: '03',
        title: 'Participá',
        description: 'Sumate al próximo encuentro. No hace falta experiencia previa, solo ganas de compartir el camino.',
      },
    ] as StepItem[],
  },
  
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos',
    description: 'Una consulta sobre los grupos, los horarios o cómo participar: elegí el canal que te quede más cómodo y te respondemos.',
    info: {
      parishName: 'Asunción de la Virgen',
      address: 'Dorrego 1592, Dorrego, Guaymallén, Mendoza',
      email: 'pquiasuncion@gmail.com',
      phone: '(0261) 431-3504',
      phoneLink: '+542614313504',
      whatsapp: '261 271-8793',
      whatsappUrl: 'https://wa.me/5492612718793',
      facebook: 'https://www.facebook.com/jovenesdeasuncion/',
      youtube: 'https://www.youtube.com/@parroquiaasunciondelavirge6301/videos',
      instagram: 'https://www.instagram.com/pquia.asunciondelavirgen/',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parroquia+Asunci%C3%B3n+de+la+Virgen+Dorrego+1592+Guaymall%C3%A9n',
    } as ContactInfo,
  },
}
