import { brand } from './brand'

const paraBrands = [
  'Royal Canin',
  'Virbac',
  'Alivira',
  'MSD Saúde Animal',
  'Alere',
  'PethyGroup',
  'Hebron Vet',
  'INABA CHURU',
  'Megazoo',
  'Dental Light',
  'Pet Fit',
] as const

const amapaBrands = [
  'Royal Canin',
  'Virbac',
  'Alivira',
  'MSD Saúde Animal',
  'Alere',
  'PethyGroup',
  'Hebron Vet',
  'Megazoo',
  'Dental Light',
  'Pet Fit',
] as const

const maranhaoBrands = ['MSD Saúde Animal', 'Alere', 'Hebron Vet', 'PethyGroup'] as const

export type SiteLocation = {
  name: string
  label: 'Sede' | 'Filial'
  city: string
  state: string
  address: string
  complement?: string
  district: string
  zipCode: string
}

const locations: SiteLocation[] = [
  {
    name: 'Sede Royal Norte',
    label: 'Sede',
    city: 'Ananindeua',
    state: 'PA',
    address: 'Passagem São Pedro, nº 20',
    complement: 'Rodovia BR-316, Galpão 01',
    district: 'Atalaia',
    zipCode: '67.013-710',
  },
  {
    name: 'Filial São Luís',
    label: 'Filial',
    city: 'São Luís',
    state: 'MA',
    address: 'Av. Casemiro Júnior, nº 33',
    district: 'Anil',
    zipCode: '65.045-180',
  },
  {
    name: 'Filial Macapá',
    label: 'Filial',
    city: 'Macapá',
    state: 'AP',
    address: 'Av. Stephan Houat, Residencial Extremo Norte, nº 420',
    district: 'Jardim Marco Zero',
    zipCode: '68.903-193',
  },
]

export const site = {
  since: 2005,
  portalUrl: 'https://app.royalnortedistribuidora.com.br',
  legal: {
    legalName: 'DAHAS CAMARA ROYAL NORTE LTDA',
    cnpj: '07.191.747/0001-13',
  },
  serviceArea: ['Pará', 'Amapá', 'Maranhão'],
  brandPortfolios: [
    {
      state: 'Pará',
      code: 'PA',
      description: 'Portfólio de representadas com atuação no mercado veterinário paraense.',
      brands: paraBrands,
    },
    {
      state: 'Amapá',
      code: 'AP',
      description: 'Operação baseada nas representadas do Pará, exceto INABA CHURU.',
      brands: amapaBrands,
    },
    {
      state: 'Maranhão',
      code: 'MA',
      description: 'Portfólio de representadas com atuação no mercado veterinário maranhense.',
      brands: maranhaoBrands,
    },
  ],
  locations,
  contact: {
    phone: '+55 91 98247-2700',
    whatsapp: '5591982472700',
    email: 'comercial@royalnorte.com.br',
  },
  brands: paraBrands,
  segments: [
    'Pet shops',
    'Clínicas veterinárias',
    'Hospitais veterinários',
    'Médicos-veterinários',
    'Lojistas especializados',
  ],
} as const

export const navigation = [
  { to: '/', label: 'Início' },
  { to: '/empresa', label: 'A Royal Norte' },
  { to: '/atuacao', label: 'Atuação' },
  { to: '/marcas', label: 'Marcas' },
  { to: '/cobertura', label: 'Cobertura' },
  { to: '/contato', label: 'Contato' },
] as const

export const portalLink = {
  label: `Portal ${brand.company.shortName}`,
  href: site.portalUrl,
} as const

export const clientLink = {
  label: 'Seja cliente',
  to: '/seja-cliente',
} as const

export const navigationUi = {
  ariaLabel: 'Navegação principal',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
} as const

export const footerNavigation = [
  { to: '/empresa', label: 'A Royal Norte' },
  { to: '/atuacao', label: 'Como atuamos' },
  { to: '/marcas', label: 'Marcas' },
  { to: '/cobertura', label: 'Cobertura' },
  { to: '/seja-cliente', label: 'Seja cliente' },
  { to: '/parceiros', label: 'Indústrias e parceiros' },
  { to: '/contato', label: 'Contato' },
  { to: '/privacidade', label: 'Privacidade' },
] as const

export const footerContent = {
  navigationTitle: 'Navegação',
  institutionalTitle: 'Institucional',
  locationTitle: 'Localização',
  rights: 'Todos os direitos reservados.',
  privacyLabel: 'Política de Privacidade',
} as const
