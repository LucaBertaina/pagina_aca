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
    title: 'Hay un lugar para vos',
    accent: 'vos',
    cta: 'Ver los grupos',
  },

  hero: {
    eyebrow: 'Movimiento laical · Base parroquial',
    title: 'Fe, comunidad\ny servicio.',
    accent: 'comunidad',
    subtitle: 'Laicos de todas las edades que viven su fe en comunidad, se forman y sirven a la parroquia y al barrio.',
  },
  
  about: {
    eyebrow: 'Quiénes somos',
    dropCapLetter: 'L',
    dropCapText: 'a Acción Católica es la participación organizada de los laicos en la vida y la misión de la Iglesia: formación, oración y compromiso con la comunidad.',
    pullQuote: 'Laicos que se forman, oran y actúan juntos, al servicio de su parroquia y su barrio.',
    facts: [
      { label: 'Fundada en', value: '1931' },
      { label: 'Organizada en', value: '3 edades' },
    ] as FactItem[],
  },

  pillars: {
    title: 'Pilares que trabajamos',
    items: [
      {
        title: 'Oración',
        description: 'Encuentro con Dios en la oración, los sacramentos y la adoración.',
        image: 'oracion.png',
      },
      {
        title: 'Formación',
        description: 'Profundizar la Palabra y la doctrina para dar razón de nuestra fe.',
        image: 'formacion.png',
      },
      {
        title: 'Acción',
        description: 'Evangelizar con obras: solidaridad, talleres y servicio al barrio.',
        image: 'accion.png',
      },
      {
        title: 'Sacrificio',
        description: 'Entregar tiempo y esfuerzo con alegría, por Cristo y los hermanos.',
        image: 'sacrificio.png',
      },
    ] as PillarItem[],
  },
  
  groups: {
    eyebrow: 'Para cada edad',
    title: 'Nuestros grupos',
    items: [
      { name: 'Niños', description: 'De 5 a 12 años. Los primeros pasos en la fe, a través del juego y la catequesis.' },
      { name: 'Jóvenes', description: 'De 13 a 30 años. Fe, amistad y proyecto de vida, con formación y servicio.' },
      { name: 'Adultos', description: 'Desde los 30. Una fe adulta vivida en familia, trabajo y parroquia.' },
      { name: 'Delegados', description: 'Formación para quienes acompañan y coordinan a los demás grupos.' },
    ] as GroupItem[],
  },
  
  activities: {
    eyebrow: 'Qué hacemos',
    title: 'Actividades',
    description: 'Cada grupo arma su calendario en torno a estos ejes.',
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
        description: 'Pasá por la parroquia o escribinos.',
      },
      {
        num: '02',
        title: 'Elegí tu grupo',
        description: 'Te contamos cuál corresponde a tu edad.',
      },
      {
        num: '03',
        title: 'Participá',
        description: 'Sumate al próximo encuentro. No hace falta experiencia.',
      },
    ] as StepItem[],
  },
  
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos',
    description: 'Elegí el canal que te quede más cómodo.',
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
