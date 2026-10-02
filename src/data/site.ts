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
    name: 'Filial Macapá',
    label: 'Filial',
    city: 'Macapá',
    state: 'AP',
    address: 'Av. Stephan Houat, Residencial Extremo Norte, nº 420',
    district: 'Jardim Marco Zero',
    zipCode: '68.903-193',
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
} as const

export const contactLinks = {
  clientWhatsApp: `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site da Royal Norte e gostaria de falar com a equipe comercial para me tornar cliente.')}`,
  generalWhatsApp: `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site da Royal Norte e gostaria de falar com a equipe.')}`,
  partnershipEmail: `mailto:${site.contact.email}?subject=${encodeURIComponent('Parceria comercial - Royal Norte')}&body=${encodeURIComponent('Olá! Vim pelo site da Royal Norte e gostaria de conversar sobre uma possível parceria comercial.')}`,
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
  href: contactLinks.clientWhatsApp,
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
  { href: contactLinks.clientWhatsApp, label: 'Seja cliente', newTab: true },
  { href: contactLinks.partnershipEmail, label: 'Indústrias e parceiros' },
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
