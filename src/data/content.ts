import { site } from './site'

export type IconName =
  | 'boxes'
  | 'building'
  | 'check'
  | 'compass'
  | 'handshake'
  | 'heart'
  | 'map'
  | 'package'
  | 'paw'
  | 'store'
  | 'stethoscope'
  | 'target'
  | 'truck'
  | 'users'

export type ActionContent = {
  label: string
  to: string
  style?: 'primary' | 'ghost' | 'light'
  external?: boolean
}

export type HeroContent = {
  eyebrow: string
  title: string
  highlight?: string
  text: string
  actions?: ActionContent[]
}

export type SectionIntro = { eyebrow?: string; title: string; text?: string }

export type CTAContent = {
  eyebrow: string
  title: string
  text: string
  actions: ActionContent[]
}

export type CardContent = {
  icon: IconName
  title: string
  text: string
  eyebrow?: string
}

export type FormField = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required?: boolean
  options?: readonly string[]
  full?: boolean
}

export type FormContent = {
  subject: string
  submitLabel: string
  privacyLabel: string
  unavailableMessage: string
  fields: FormField[]
}

export const formUi = {
  selectOption: 'Selecione',
  missingValue: 'Não informado',
  privacyLink: 'Saiba mais.',
  whatsappOpened: 'O atendimento foi aberto em uma nova janela.',
  emailOpened: 'Seu aplicativo de e-mail foi aberto para concluir o envio.',
} as const

const customerFields: FormField[] = [
  { name: 'nome', label: 'Nome responsável', required: true },
  { name: 'empresa', label: 'Empresa', required: true },
  { name: 'cidade', label: 'Cidade / UF', required: true },
  {
    name: 'telefone',
    label: 'Telefone',
    type: 'tel',
    required: true,
  },
  { name: 'cnpj', label: 'CNPJ' },
  { name: 'segmento', label: 'Segmento', type: 'select', required: true, options: site.segments },
  {
    name: 'mensagem',
    label: 'Como podemos ajudar?',
    type: 'textarea',
    full: true,
  },
]

export const homeContent = {
  hero: {
    eyebrow: 'Pará · Amapá · Maranhão',
    title: 'Distribuição veterinária com presença regional.',
    highlight: 'presença regional',
    text: 'Conectamos grandes marcas, clientes e profissionais veterinários através de uma operação comercial preparada para a realidade da região.',
    actions: [
      { label: 'Seja cliente', to: '/seja-cliente', style: 'primary' },
      { label: 'Seja parceiro', to: '/parceiros', style: 'ghost' },
    ],
  } satisfies HeroContent,
  capabilities: {
    intro: {
      eyebrow: 'O que fazemos',
      title: 'Muito além de distribuir produtos.',
      text: 'A Royal Norte aproxima indústria e mercado, unindo disponibilidade, relacionamento e execução comercial.',
    },
    cards: [
      {
        icon: 'truck',
        title: 'Distribuição regional',
        text: 'Atuação no Pará, Amapá e Maranhão com atenção às particularidades de cada mercado.',
      },
      {
        icon: 'boxes',
        title: 'Portfólio relevante',
        text: 'Marcas reconhecidas em nutrição, saúde, diagnóstico e cuidado veterinário.',
      },
      {
        icon: 'store',
        title: 'Foco no cliente',
        text: 'Atendimento direcionado aos diferentes canais do mercado veterinário.',
      },
      {
        icon: 'package',
        title: 'Execução comercial',
        text: 'Relacionamento e suporte para desenvolver negócios de forma sustentável.',
      },
    ] satisfies CardContent[],
  },
  brands: {
    intro: {
      eyebrow: 'Representadas',
      title: 'Marcas parceiras',
      text: 'Marcas reconhecidas que fazem parte dos portfólios da Royal Norte no Pará, Amapá e Maranhão.',
    },
    link: { label: 'Conheça o portfólio', to: '/marcas' },
  },
  coverage: {
    intro: {
      eyebrow: 'Presença regional',
      title: 'Atuação no Pará, Amapá e Maranhão.',
      text: 'Nossa presença aproxima marcas, clientes e oportunidades em mercados com diferentes características e necessidades comerciais.',
    },
    action: {
      label: 'Conheça nossa cobertura',
      to: '/cobertura',
      style: 'light',
    } satisfies ActionContent,
  },
  cta: {
    eyebrow: 'Vamos crescer juntos?',
    title: 'Encontre o caminho certo para falar com a Royal Norte.',
    text: 'Atendemos empresas interessadas em comprar e marcas que desejam desenvolver sua presença regional.',
    actions: [
      { label: 'Quero ser cliente', to: '/seja-cliente', style: 'primary' },
      { label: 'Quero ser parceiro', to: '/parceiros', style: 'ghost' },
    ],
  } satisfies CTAContent,
}

export const companyContent = {
  hero: {
    eyebrow: 'A Royal Norte',
    title: 'Uma história construída perto de quem faz o mercado veterinário acontecer.',
    text: 'Desde 2005, conectamos indústria, lojistas e profissionais veterinários, com atuação atual no Pará, Amapá e Maranhão.',
  } satisfies HeroContent,
  history: {
    intro: {
      eyebrow: 'Nossa história',
      title: 'Experiência regional construída com relacionamento.',
    },
    paragraphs: [
      'A Royal Norte nasceu com o propósito de levar produtos veterinários de qualidade a um mercado regional com necessidades próprias.',
      'Ao longo dos anos, ampliou sua presença, fortaleceu parcerias e construiu uma equipe próxima dos clientes e das marcas representadas.',
    ],
    yearLabel: 'desde',
    yearText: 'crescendo junto com o mercado.',
  },
  principles: {
    intro: { eyebrow: 'Nosso jeito de trabalhar', title: 'Princípios que orientam cada relação.' },
    cards: [
      {
        icon: 'handshake',
        title: 'Relacionamento',
        text: 'Parcerias duradouras com clientes, representadas e equipes.',
      },
      {
        icon: 'target',
        title: 'Execução',
        text: 'Disciplina comercial para transformar planos em resultados consistentes.',
      },
      {
        icon: 'compass',
        title: 'Presença regional',
        text: 'Conhecimento do Norte para decisões mais próximas da realidade do mercado.',
      },
    ] satisfies CardContent[],
  },
  structure: {
    eyebrow: 'Estrutura',
    title: 'Presença para atender melhor.',
  } satisfies SectionIntro,
  strengthsIntro: {
    eyebrow: 'Confiança',
    title: 'Uma distribuidora próxima do mercado.',
  } satisfies SectionIntro,
  strengths: [
    {
      icon: 'building',
      title: 'Trajetória sólida',
      text: 'Uma história construída no setor veterinário desde 2005.',
    },
    {
      icon: 'truck',
      title: 'Conhecimento regional',
      text: 'Atuação orientada às distâncias e particularidades da região.',
    },
    {
      icon: 'handshake',
      title: 'Parcerias fortes',
      text: 'Relações comerciais conectadas às necessidades de cada canal.',
    },
  ] satisfies CardContent[],
}

export const activityContent = {
  hero: {
    eyebrow: 'Como atuamos',
    title: 'Capacidade regional a serviço do mercado veterinário.',
    text: 'Conectamos portfólio, atendimento e distribuição para apoiar o desenvolvimento de clientes e marcas.',
  } satisfies HeroContent,
  services: {
    intro: { eyebrow: 'Nossa atuação', title: 'Uma operação orientada ao mercado.' },
    cards: [
      {
        icon: 'truck',
        title: 'Distribuição',
        text: 'Disponibilidade e atendimento para empresas dos canais veterinário e pet.',
      },
      {
        icon: 'store',
        title: 'Atendimento comercial',
        text: 'Relacionamento próximo para compreender cada perfil de negócio.',
      },
      {
        icon: 'boxes',
        title: 'Gestão de portfólio',
        text: 'Marcas e categorias organizadas para diferentes necessidades do mercado.',
      },
      {
        icon: 'target',
        title: 'Desenvolvimento regional',
        text: 'Execução comercial conectada às oportunidades do Pará, Amapá e Maranhão.',
      },
    ] satisfies CardContent[],
  },
  channels: {
    intro: {
      eyebrow: 'Canais atendidos',
      title: 'Relacionamento com diferentes perfis profissionais.',
    },
    cards: [
      {
        icon: 'paw',
        title: 'Pet shops',
        text: 'Atendimento ao varejo especializado e suas diferentes categorias.',
      },
      {
        icon: 'stethoscope',
        title: 'Clínicas veterinárias',
        text: 'Soluções alinhadas à rotina de atendimento e cuidado animal.',
      },
      {
        icon: 'heart',
        title: 'Hospitais veterinários',
        text: 'Portfólio para operações veterinárias de maior complexidade.',
      },
      {
        icon: 'users',
        title: 'Profissionais',
        text: 'Relacionamento com quem atua diretamente no mercado veterinário.',
      },
    ] satisfies CardContent[],
  },
  steps: {
    intro: { eyebrow: 'Relacionamento', title: 'Uma jornada comercial simples e próxima.' },
    cards: [
      {
        icon: 'check',
        eyebrow: '01',
        title: 'Cadastro',
        text: 'Conhecemos a empresa, sua localização e seu perfil de atuação.',
      },
      {
        icon: 'users',
        eyebrow: '02',
        title: 'Atendimento',
        text: 'O time comercial orienta sobre portfólio e condições aplicáveis.',
      },
      {
        icon: 'package',
        eyebrow: '03',
        title: 'Distribuição',
        text: 'Os pedidos seguem o fluxo de atendimento definido para cada região.',
      },
      {
        icon: 'handshake',
        eyebrow: '04',
        title: 'Relacionamento',
        text: 'A parceria continua com proximidade e acompanhamento comercial.',
      },
    ] satisfies CardContent[],
  },
  cta: {
    eyebrow: 'Atendimento comercial',
    title: 'Quer comprar com a Royal Norte?',
    text: 'Apresente sua empresa e inicie o contato com nossa equipe.',
    actions: [{ label: 'Seja cliente', to: '/seja-cliente', style: 'primary' }],
  } satisfies CTAContent,
}

export const brandsContent = {
  hero: {
    eyebrow: 'Marcas e portfólio',
    title: 'Soluções para diferentes necessidades do mercado veterinário.',
    text: 'Trabalhamos com marcas de saúde, nutrição, diagnóstico e cuidado animal, com portfólios definidos por estado.',
  } satisfies HeroContent,
  portfolio: {
    eyebrow: 'Representadas',
    title: 'Representadas por estado de atuação.',
    text: 'A composição do portfólio varia entre Pará, Amapá e Maranhão. Consulte nossa equipe para conhecer linhas e disponibilidade.',
  } satisfies SectionIntro,
  audiences: {
    intro: { eyebrow: 'Quem atendemos', title: 'Um mercado conectado pela distribuição.' },
    cards: [
      {
        icon: 'paw',
        title: 'Pet shops',
        text: 'Portfólio para abastecer e desenvolver o varejo especializado.',
      },
      {
        icon: 'stethoscope',
        title: 'Clínicas',
        text: 'Soluções para a rotina clínica e o cuidado animal.',
      },
      {
        icon: 'heart',
        title: 'Hospitais',
        text: 'Produtos para operações veterinárias de maior complexidade.',
      },
      {
        icon: 'users',
        title: 'Profissionais',
        text: 'Atendimento a quem atua diretamente no cuidado veterinário.',
      },
    ] satisfies CardContent[],
  },
  cta: {
    eyebrow: 'Novas parcerias',
    title: 'Sua marca quer ampliar a presença regional?',
    text: 'Conheça a atuação da Royal Norte no Pará, Amapá e Maranhão.',
    actions: [{ label: 'Fale sobre parcerias', to: '/parceiros', style: 'primary' }],
  } satisfies CTAContent,
}

export const coverageContent = {
  hero: {
    eyebrow: 'Cobertura regional',
    title: 'Presença construída para diferentes mercados regionais.',
    text: 'Atuamos no Pará, Amapá e Maranhão, aproximando clientes, marcas e oportunidades com portfólios definidos por estado.',
  } satisfies HeroContent,
  presence: {
    eyebrow: 'Onde atuamos',
    title: 'Três estados, portfólios conectados a cada mercado.',
    text: 'A atuação comercial da Royal Norte considera as representadas disponíveis em cada território.',
  } satisfies SectionIntro,
  knowledge: {
    intro: {
      eyebrow: 'Conhecimento regional',
      title: 'Cada mercado pede proximidade e entendimento.',
    },
    cards: [
      {
        icon: 'map',
        title: 'Cobertura',
        text: 'Atuação direcionada aos mercados do Pará, Amapá e Maranhão.',
      },
      {
        icon: 'compass',
        title: 'Contexto local',
        text: 'Conhecimento das diferenças entre capitais, regiões metropolitanas e interior.',
      },
      {
        icon: 'truck',
        title: 'Distribuição regional',
        text: 'Planejamento compatível com distâncias e características territoriais.',
      },
    ] satisfies CardContent[],
  },
  cta: {
    eyebrow: 'Consulte sua região',
    title: 'Quer saber se atendemos sua cidade?',
    text: 'Envie os dados da sua empresa para nosso time comercial.',
    actions: [{ label: 'Consultar atendimento', to: '/seja-cliente', style: 'primary' }],
  } satisfies CTAContent,
}

export const customerContent = {
  hero: {
    eyebrow: 'Seja cliente',
    title: 'Vamos colocar a Royal Norte ao lado do seu negócio.',
    text: 'Apresente sua empresa para iniciar o contato com nosso time comercial.',
  } satisfies HeroContent,
  intro: {
    eyebrow: 'Cadastro comercial',
    title: 'Conte um pouco sobre sua empresa.',
    text: 'As informações ajudam nossa equipe a direcionar o atendimento de acordo com seu perfil e região.',
  },
  benefits: [
    'Atendimento regional',
    'Portfólio de marcas reconhecidas',
    'Equipe comercial próxima',
  ],
  form: {
    subject: 'Interesse em ser cliente Royal Norte',
    submitLabel: 'Enviar interesse',
    privacyLabel:
      'Li a Política de Privacidade e autorizo o uso destes dados para retorno comercial.',
    unavailableMessage:
      'O envio online está temporariamente indisponível. Tente novamente pelos canais da página de contato.',
    fields: customerFields,
  } satisfies FormContent,
}

export const partnersContent = {
  hero: {
    eyebrow: 'Indústrias e parceiros',
    title: 'Presença regional para marcas que querem ampliar mercados.',
    text: 'Construímos relações de longo prazo com empresas interessadas em desenvolver oportunidades no Pará, Amapá e Maranhão.',
  } satisfies HeroContent,
  value: {
    intro: {
      eyebrow: 'Por que conversar conosco',
      title: 'Uma parceria conectada ao mercado regional.',
    },
    cards: [
      {
        icon: 'map',
        title: 'Presença regional',
        text: 'Relacionamento comercial nos mercados do Pará, Amapá e Maranhão.',
      },
      {
        icon: 'store',
        title: 'Acesso aos canais',
        text: 'Proximidade com diferentes perfis de clientes veterinários.',
      },
      {
        icon: 'target',
        title: 'Execução comercial',
        text: 'Atuação orientada ao desenvolvimento sustentável das marcas.',
      },
      {
        icon: 'handshake',
        title: 'Relações duradouras',
        text: 'Transparência e colaboração na construção de oportunidades.',
      },
    ] satisfies CardContent[],
  },
  intro: {
    eyebrow: 'Novas parcerias',
    title: 'Apresente sua empresa ou marca.',
    text: 'Compartilhe as informações iniciais para direcionarmos a conversa.',
  },
  form: {
    subject: 'Parceria com a Royal Norte',
    submitLabel: 'Enviar proposta',
    privacyLabel:
      'Li a Política de Privacidade e autorizo o uso destes dados para retorno comercial.',
    unavailableMessage:
      'O envio online está temporariamente indisponível. Utilize os canais da página de contato.',
    fields: [
      { name: 'nome', label: 'Nome responsável', required: true },
      {
        name: 'empresa',
        label: 'Empresa ou marca',
        required: true,
      },
      {
        name: 'email',
        label: 'E-mail',
        type: 'email',
        required: true,
      },
      {
        name: 'telefone',
        label: 'Telefone',
        type: 'tel',
        required: true,
      },
      { name: 'categoria', label: 'Categoria' },
      {
        name: 'regiao',
        label: 'Região de interesse',
        type: 'select',
        options: site.serviceArea,
      },
      {
        name: 'mensagem',
        label: 'Sobre a proposta',
        type: 'textarea',
        required: true,
        full: true,
      },
    ],
  } satisfies FormContent,
}

export const contactContent = {
  hero: {
    eyebrow: 'Contato',
    title: 'Fale com a Royal Norte.',
    text: 'Escolha o caminho mais adequado para sua empresa e acompanhe nossos canais oficiais.',
  } satisfies HeroContent,
  channels: {
    eyebrow: 'Canais de atendimento',
    title: 'Como podemos ajudar?',
    text: 'Direcionamos cada conversa de acordo com o objetivo do contato.',
  } satisfies SectionIntro,
  cards: [
    {
      icon: 'store',
      title: 'Quero ser cliente',
      text: 'Apresente sua empresa para iniciar um atendimento comercial.',
      to: '/seja-cliente',
      label: 'Iniciar cadastro',
    },
    {
      icon: 'handshake',
      title: 'Indústrias e parceiros',
      text: 'Converse conosco sobre representação e oportunidades de parceria.',
      to: '/parceiros',
      label: 'Apresentar proposta',
    },
    {
      icon: 'map',
      title: 'Localização',
      text: `${site.contact.address}. Atuação no Pará, Amapá e Maranhão.`,
      to: '/cobertura',
      label: 'Ver cobertura',
    },
  ] satisfies (CardContent & { to: string; label: string })[],
  social: {
    title: 'Acompanhe a Royal Norte',
    text: 'Conteúdo, novidades das marcas e ações do mercado veterinário.',
  },
}

export const privacyContent = {
  hero: {
    eyebrow: 'Privacidade',
    title: 'Política de Privacidade.',
    text: 'Transparência sobre o uso das informações enviadas pelos canais digitais da Royal Norte.',
  } satisfies HeroContent,
  updatedAt: 'Última atualização: setembro de 2026.',
  sections: [
    {
      title: 'Dados coletados',
      paragraphs: [
        'Podemos receber dados de identificação e contato, informações profissionais e dados da empresa fornecidos voluntariamente em nossos formulários.',
      ],
    },
    {
      title: 'Finalidades',
      paragraphs: [
        'Usamos essas informações para responder solicitações, avaliar cadastros comerciais, conversar sobre parcerias e manter o relacionamento solicitado pelo titular.',
      ],
    },
    {
      title: 'Compartilhamento e proteção',
      paragraphs: [
        'Os dados devem ser acessados somente por pessoas e fornecedores necessários ao atendimento, observando medidas adequadas de segurança e confidencialidade.',
      ],
    },
    {
      title: 'Retenção',
      paragraphs: [
        'As informações são mantidas pelo período necessário às finalidades informadas e às obrigações legais aplicáveis.',
      ],
    },
    {
      title: 'Direitos do titular',
      paragraphs: [
        'O titular pode solicitar confirmação de tratamento, acesso, correção ou outras providências previstas na legislação brasileira por meio dos canais oficiais da Royal Norte.',
      ],
    },
    {
      title: 'Contato',
      paragraphs: [
        'Solicitações relacionadas à privacidade podem ser encaminhadas pelos canais disponibilizados na página de contato.',
      ],
    },
  ],
}

export const notFoundContent = {
  code: '404',
  title: 'Página não encontrada.',
  text: 'O endereço pode ter sido alterado ou não existe.',
  action: 'Voltar ao início',
}
