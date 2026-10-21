import { contactLinks, site } from './site'

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
  ariaLabel?: string
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

export const homeContent = {
  hero: {
    eyebrow: 'Pará · Amapá · Maranhão',
    title: 'Distribuição veterinária com presença regional.',
    highlight: 'presença regional',
    text: 'Conectamos grandes marcas, clientes e profissionais veterinários através de uma operação comercial preparada para a realidade da região.',
    actions: [
      { label: 'Seja cliente', to: contactLinks.clientWhatsApp, style: 'primary', external: true },
      { label: 'Seja parceiro', to: contactLinks.partnershipEmail, style: 'ghost', external: true },
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
      {
        label: 'Quero ser cliente',
        to: contactLinks.clientWhatsApp,
        style: 'primary',
        external: true,
      },
      {
        label: 'Quero ser parceiro',
        to: contactLinks.partnershipEmail,
        style: 'ghost',
        external: true,
      },
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
    actions: [
      { label: 'Seja cliente', to: contactLinks.clientWhatsApp, style: 'primary', external: true },
    ],
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
    actions: [
      {
        label: 'Fale sobre parcerias',
        to: contactLinks.partnershipEmail,
        style: 'primary',
        external: true,
      },
    ],
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
    actions: [
      {
        label: 'Consultar atendimento',
        to: contactLinks.clientWhatsApp,
        style: 'primary',
        external: true,
      },
    ],
  } satisfies CTAContent,
}

export const customerContent = {
  hero: {
    eyebrow: 'Seja cliente',
    title: 'Vamos colocar a Royal Norte ao lado do seu negócio.',
    text: 'Fale diretamente com nossa equipe comercial pelo WhatsApp para iniciar seu cadastro e atendimento.',
    actions: [
      {
        label: 'Falar pelo WhatsApp',
        to: contactLinks.clientWhatsApp,
        style: 'primary',
        external: true,
      },
    ],
  } satisfies HeroContent,
  intro: {
    eyebrow: 'Atendimento comercial',
    title: 'O próximo passo é uma conversa.',
    text: 'Nossa equipe dará continuidade ao cadastro e orientará o atendimento conforme o perfil e a região da sua empresa.',
  },
  benefits: [
    'Atendimento regional',
    'Portfólio de marcas reconhecidas',
    'Equipe comercial próxima',
  ],
}

export const partnersContent = {
  hero: {
    eyebrow: 'Indústrias e parceiros',
    title: 'Presença regional para marcas que querem ampliar mercados.',
    text: 'Construímos relações de longo prazo com empresas interessadas em desenvolver oportunidades no Pará, Amapá e Maranhão.',
    actions: [
      {
        label: 'Quero falar sobre parceria',
        to: contactLinks.partnershipEmail,
        style: 'primary',
        external: true,
      },
    ],
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
    title: 'Vamos conversar sobre sua marca.',
    text: 'Envie uma mensagem por e-mail para iniciar a conversa sobre uma possível parceria comercial.',
  },
}

export const contactContent = {
  hero: {
    eyebrow: 'Contato',
    title: 'Fale com a Royal Norte',
    text: 'Nossa equipe está pronta para orientar clientes, parceiros e profissionais do mercado veterinário.',
  } satisfies HeroContent,
  whatsapp: {
    label: 'Falar pelo WhatsApp',
    ariaLabel: 'Falar com a Royal Norte pelo WhatsApp em uma nova aba',
    phoneLabel: 'Canal comercial',
  },
  units: {
    eyebrow: 'Presença regional',
    title: 'Nossas unidades',
    text: 'Encontre a sede e as filiais da Royal Norte.',
  } satisfies SectionIntro,
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
        'Podemos receber dados de identificação e contato, informações profissionais e dados da empresa fornecidos voluntariamente pelos canais de WhatsApp e e-mail.',
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

// Data documental fixa: atualizar somente quando estes documentos forem revisados.
export const agendaPublicationDate = '21 de outubro de 2026'

export const agendaContent = {
  hero: {
    eyebrow: 'Ferramentas corporativas',
    title: 'Agenda de Reuniões | Royal Norte',
    text: 'Ferramenta corporativa de acesso restrito aos colaboradores autorizados da Royal Norte Distribuidora para organizar compromissos profissionais.',
  } satisfies HeroContent,
  applicationName: 'Agenda Royal Norte Comercial',
  accessNotice: 'O sistema interno é restrito aos colaboradores autorizados.',
  accessTitle: 'Página pública e sistema interno',
  publicPageText:
    'esta apresentação institucional da ferramenta é aberta a qualquer pessoa, sem login ou autorização.',
  internalSystemText:
    'o ambiente que contém dados reais das reuniões exige autenticação e autorização. Somente o time comercial e os demais colaboradores autorizados podem acessar suas informações.',
  introduction:
    'A Agenda Royal Norte Comercial é uma aplicação corporativa desenvolvida para organizar reuniões e eventos profissionais da Royal Norte Distribuidora. É utilizada pelo time comercial e por colaboradores autorizados para administrar compromissos, responsáveis, participantes e histórico operacional.',
  featuresTitle: 'Organização de reuniões profissionais',
  features: [
    'Cadastro, consulta, edição, reagendamento, transferência e cancelamento de reuniões.',
    'Definição de responsáveis e participantes.',
    'Integração ao Google Calendar para criação, consulta, atualização e cancelamento de eventos.',
    'Possibilidade de associar ou gerar reuniões no Google Meet, quando a integração disponibilizar esse recurso.',
    'Envio de convites, notificações e lembretes aos participantes envolvidos.',
    'Registro de informações das reuniões, histórico operacional e controle interno.',
    'Autenticação obrigatória para acesso às informações da agenda.',
  ],
  googleTitle: 'Uso de serviços Google',
  googleText:
    'A aplicação utiliza serviços Google exclusivamente para administrar compromissos profissionais autorizados e suas notificações. As integrações operam conforme as permissões concedidas e os recursos disponíveis nas contas corporativas.',
  legalTitle: 'Privacidade e condições de uso',
  legalText: 'Consulte como os dados são tratados e as responsabilidades no uso da ferramenta.',
  legalLinks: [
    { label: 'Política de Privacidade da Agenda', to: '/agenda/privacidade/' },
    { label: 'Termos de Uso da Agenda', to: '/agenda/termos/', style: 'ghost' },
  ] satisfies ActionContent[],
}

export const agendaPrivacyContent = {
  hero: {
    eyebrow: 'Agenda de Reuniões',
    title: 'Política de Privacidade da Agenda',
    text: 'Informações sobre o tratamento de dados na ferramenta corporativa de reuniões da Royal Norte.',
  } satisfies HeroContent,
  sections: [
    {
      title: 'Responsável pelo tratamento',
      paragraphs: [
        `A Agenda é uma ferramenta corporativa da Royal Norte Distribuidora, operada por ${site.legal.legalName}, CNPJ ${site.legal.cnpj}. Seu acesso é restrito aos colaboradores autorizados. Esta política é específica da Agenda e não substitui a política institucional do site.`,
      ],
    },
    {
      title: 'Finalidades do tratamento',
      paragraphs: [
        'Os dados são utilizados para organização comercial, reuniões internas e com convidados, definição de responsáveis e participantes, gestão de convites, notificações e lembretes, histórico operacional, controle interno e integrações com serviços Google autorizados.',
      ],
    },
    {
      title: 'Dados tratados',
      paragraphs: [
        'Podem ser tratados dados de identificação de colaboradores; nomes e e-mails de participantes; título e tipo da reunião; data, horários, status, local ou link; observações; identificadores de eventos sincronizados; histórico de alterações; e informações técnicas necessárias à autenticação e à segurança. Os usuários devem inserir somente dados pertinentes à finalidade profissional da reunião.',
      ],
    },
    {
      title: 'Google Calendar e Google Meet',
      paragraphs: [
        'Conforme as autorizações concedidas, a aplicação acessa o Google Calendar para consultar, criar, editar e cancelar eventos profissionais. Utiliza título, data, horários, responsáveis e participantes para manter os compromissos e seus convites atualizados. Recursos do Google Meet podem ser utilizados para associar reuniões virtuais e gerenciar suas configurações, quando necessários e disponíveis na integração. Esses recursos são utilizados exclusivamente para administrar compromissos profissionais autorizados.',
      ],
    },
    {
      title: 'Convites, notificações e lembretes',
      paragraphs: [
        'A Agenda utiliza o envio de e-mails para encaminhar convites, notificações de alterações e lembretes aos participantes envolvidos. Para essa finalidade, utiliza nomes, endereços de e-mail e as informações necessárias sobre o compromisso, como título, data, horário e local ou link da reunião. Requisições aos serviços de integração são realizadas para executar essas operações autorizadas; não se destinam a publicidade ou ao envio indiscriminado de mensagens.',
      ],
    },
    {
      title: 'Uso dos dados',
      paragraphs: [
        'Os dados não são vendidos nem utilizados para publicidade. A aplicação não acessa senhas das Contas Google. As permissões de integração são utilizadas para as funcionalidades informadas nesta política.',
      ],
    },
    {
      title: 'Armazenamento',
      paragraphs: [
        'A Agenda utiliza o Google Sheets para armazenar e consultar registros operacionais em planilhas corporativas controladas pela Royal Norte. Esses registros incluem informações das reuniões, responsáveis, participantes, status, identificadores de eventos sincronizados e histórico de alterações necessários à operação. Eventos e informações associados às integrações também podem permanecer no Google Calendar e nos demais serviços Google utilizados.',
      ],
    },
    {
      title: 'Compartilhamento',
      paragraphs: [
        'Eventos, convites e dados necessários às integrações podem ser compartilhados com o Google e com os participantes envolvidos, conforme as funcionalidades utilizadas. O acesso interno deve se limitar às pessoas autorizadas e às necessidades profissionais correspondentes. Também poderá ocorrer compartilhamento para cumprir obrigações legais aplicáveis.',
      ],
    },
    {
      title: 'Segurança',
      paragraphs: [
        'A Royal Norte utiliza controle de acesso, autenticação e medidas razoáveis de proteção contra acesso, uso, alteração e divulgação não autorizados. Colaboradores devem preservar suas credenciais e a confidencialidade das informações a que têm acesso. Nenhuma medida elimina integralmente os riscos de segurança.',
      ],
    },
    {
      title: 'Retenção e exclusão',
      paragraphs: [
        'Os registros são mantidos pelo tempo necessário à organização e ao acompanhamento dos compromissos, ao histórico operacional e ao cumprimento das obrigações legais aplicáveis. A retenção considera a finalidade do registro, a necessidade de continuidade operacional e eventuais exigências de segurança e auditoria interna; não há um prazo único para todos os dados. Solicitações de acesso, correção ou exclusão devem ser encaminhadas ao contato institucional indicado nesta página e serão avaliadas conforme a legislação. Registros podem ser preservados quando houver fundamento para sua manutenção.',
      ],
    },
    {
      title: 'Direitos dos titulares e LGPD',
      paragraphs: [
        'Nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), o titular pode solicitar confirmação de tratamento, acesso, correção e demais providências aplicáveis, incluindo informações sobre compartilhamento, anonimização, bloqueio ou eliminação quando cabíveis e revogação de consentimento quando essa for a base utilizada. As solicitações serão avaliadas conforme a legislação, podendo ser necessária a confirmação da identidade do solicitante.',
      ],
    },
    {
      title: 'Uso Limitado das APIs Google',
      paragraphs: [
        'O uso das informações recebidas das APIs Google observará a Política de Dados do Usuário dos Serviços de API do Google, incluindo seus requisitos de Uso Limitado, quando aplicáveis.',
      ],
      link: {
        label: 'Consultar a Política de Dados do Usuário dos Serviços de API do Google',
        href: 'https://developers.google.com/terms/api-services-user-data-policy',
      },
    },
    {
      title: 'Contato',
      paragraphs: [
        'Para dúvidas, solicitações sobre dados pessoais ou exercício de direitos, utilize o e-mail institucional da Royal Norte:',
      ],
      link: { label: site.contact.email, href: `mailto:${site.contact.email}` },
    },
    {
      title: 'Atualizações desta política',
      paragraphs: [
        'Esta política pode ser revisada para refletir alterações nas funcionalidades ou nos requisitos aplicáveis. A data de publicação ou revisão será registrada neste documento.',
      ],
    },
  ],
}

export const agendaTermsContent = {
  hero: {
    eyebrow: 'Agenda de Reuniões',
    title: 'Termos de Uso da Agenda',
    text: 'Condições para utilização da ferramenta corporativa de reuniões da Royal Norte.',
  } satisfies HeroContent,
  sections: [
    {
      title: 'Finalidade e acesso',
      paragraphs: [
        `A Agenda de Reuniões de ${site.legal.legalName}, CNPJ ${site.legal.cnpj}, destina-se exclusivamente ao uso corporativo. O acesso às informações é limitado a colaboradores autorizados e exige autenticação. Estas páginas públicas são informativas e não concedem acesso ao sistema.`,
      ],
    },
    {
      title: 'Credenciais e confidencialidade',
      paragraphs: [
        'É proibido compartilhar credenciais, permitir acesso por terceiros não autorizados ou utilizar o acesso de outra pessoa. O usuário deve preservar a confidencialidade das informações, respeitar as permissões recebidas e comunicar suspeitas de uso indevido pelos canais institucionais.',
      ],
    },
    {
      title: 'Informações e convidados',
      paragraphs: [
        'O usuário é responsável pela veracidade, atualização e pertinência das informações cadastradas, pelos convidados incluídos e pelos dados inseridos. Deve verificar destinatários, datas, horários e links antes de enviar convites ou alterar reuniões, evitando inserir informações desnecessárias ou dados que não esteja autorizado a utilizar.',
      ],
    },
    {
      title: 'Integrações, convites e notificações',
      paragraphs: [
        'A ferramenta pode utilizar o Google Calendar para criar, consultar, atualizar e cancelar eventos e, quando disponível, associar ou gerar reuniões no Google Meet. Convites, lembretes e notificações podem ser enviados aos participantes envolvidos. Essas funcionalidades dependem das autorizações concedidas, da configuração corporativa e da disponibilidade dos serviços Google.',
      ],
    },
    {
      title: 'Suspensão ou revogação de acesso',
      paragraphs: [
        'A Royal Norte pode suspender ou revogar o acesso por necessidade operacional, alteração de vínculo ou função, descumprimento destes termos, uso indevido ou razões de segurança, conforme as regras internas aplicáveis.',
      ],
    },
    {
      title: 'Manutenção e disponibilidade',
      paragraphs: [
        'A Agenda pode passar por manutenção, atualizações ou indisponibilidades, inclusive em razão de falhas nas integrações ou nos serviços de terceiros. Não há garantia de disponibilidade ininterrupta. Os usuários devem seguir as orientações internas para situações que exijam continuidade operacional.',
      ],
    },
    {
      title: 'Tratamento de dados pessoais',
      paragraphs: [
        'O tratamento dos dados relacionados à Agenda observa sua Política de Privacidade específica. Consulte o documento para conhecer finalidades, dados tratados, compartilhamento, retenção e canais para solicitações.',
      ],
    },
    {
      title: 'Legislação e atualizações',
      paragraphs: [
        'Estes termos são regidos pela legislação brasileira. Alterações nas condições de uso serão refletidas neste documento, com indicação da data de publicação ou revisão.',
      ],
    },
    {
      title: 'Contato institucional',
      paragraphs: [
        'Para dúvidas sobre o uso da Agenda ou estes termos, entre em contato com a Royal Norte:',
      ],
      link: { label: site.contact.email, href: `mailto:${site.contact.email}` },
    },
  ],
}
