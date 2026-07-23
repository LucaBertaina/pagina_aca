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

export interface ContactInfo {
  parishName: string
  address: string
  email: string
  phone: string
  phoneLink: string
}

export interface PillarItem {
  title: string
  description: string
  image: string
}

export const landingContent = {
  brandName: 'Acción Católica',
  parishName: 'Asunción de la Virgen',
  
  hero: {
    eyebrow: 'Movimiento laical · Base parroquial',
    title: 'Fe, comunidad\ny servicio.',
    subtitle: 'Acción Católica es el espacio donde laicos de todas las edades viven su fe en comunidad, se forman y ponen manos a la obra en la parroquia y el barrio.',
    strongText: 'Sumate al grupo de Asunción de la Virgen.',
  },
  
  about: {
    eyebrow: 'Quiénes somos',
    dropCapLetter: 'L',
    dropCapText: 'a Acción Católica es la participación organizada de los laicos en la vida y la misión de la Iglesia. No es un club ni una ONG: es una forma concreta de vivir la fe junto a otros, con formación, oración y compromiso con la comunidad que nos rodea.',
    paragraph2: 'Fundada en Argentina en 1931, se organiza por parroquia y por edades, acompañada siempre por un asesor eclesiástico y por dirigentes laicos formados para guiar cada grupo.',
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
    eyebrow: 'Nuestros grupos',
    title: 'Un lugar para cada edad',
    items: [
      { name: 'Niños', description: 'Primeros pasos en la fe a través del juego, la catequesis y el encuentro con otros chicos.' },
      { name: 'Adolescentes', description: 'Espacio de pertenencia para pensar la fe, la amistad y las primeras preguntas grandes.' },
      { name: 'Jóvenes', description: 'Formación, servicio y comunidad para discernir vocación y proyecto de vida.' },
      { name: 'Adultos', description: 'Compromiso laical maduro: familia, trabajo y parroquia desde una fe adulta.' },
      { name: 'Dirigentes', description: 'Formación permanente para quienes acompañan a los demás grupos.' },
    ] as GroupItem[],
  },
  
  activities: {
    eyebrow: 'Qué hacemos',
    title: 'La fe puesta en acción',
    description: 'Cada grupo arma su propio calendario, pero la mayoría de nuestras actividades giran en torno a estos ejes:',
    list: [
      'Catequesis y formación en la fe',
      'Encuentros semanales por grupo',
      'Retiros y campamentos',
      'Compromiso solidario y ayuda al prójimo',
      'Acompañamiento en celebraciones parroquiales',
      'Formación de dirigentes y catequistas',
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
        description: 'Te contamos cuál corresponde a tu edad y te presentamos a los dirigentes que lo acompañan.',
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
    description: 'Cualquier consulta sobre los grupos, horarios o cómo participar, escribinos:',
    info: {
      parishName: 'Asunción de la Virgen',
      address: 'Calle 123, Asunción',
      email: 'contacto@asunciondelavirgen.org',
      phone: '+54 11 1234-5678',
      phoneLink: '+541112345678',
    } as ContactInfo,
  },
}
