import royalLogo from '../assets/brand/ROYAL LOGO.png'
import homeHeroPhoto from '../assets/brand/foto-royal-norte.webp'

export type BrandAsset = {
  src: string
  alt: string
  width?: number
  height?: number
}

export const brand = {
  company: {
    name: 'Royal Norte Distribuidora',
    shortName: 'Royal Norte',
    descriptor: 'Distribuidora',
    slogan: 'Distribuição que conecta marcas, negócios e o mercado veterinário do Norte.',
  },
  colors: {
    navy: '#041e42',
    navySoft: '#0d3768',
    red: '#ed1b23',
    redAccessible: '#dc151d',
    redHover: '#c81018',
    ink: '#101b2c',
    muted: '#526070',
    line: '#d9e0e8',
    paper: '#ffffff',
    surface: '#f5f7fa',
  },
  social: {
    instagram: 'https://www.instagram.com/royalnortedistribuidora/',
    linkedin: 'https://www.linkedin.com/company/royalnortedistribuidora/',
  },
  assets: {
    logo: {
      primary: {
        src: royalLogo,
        alt: 'Royal Norte Distribuidora',
        width: 8527,
        height: 3008,
      } satisfies BrandAsset,
      inverted: null as BrandAsset | null,
    },
    favicon: {
      src: royalLogo,
      alt: 'Royal Norte Distribuidora',
      width: 8527,
      height: 3008,
    } satisfies BrandAsset,
    socialCover: {
      src: royalLogo,
      alt: 'Royal Norte Distribuidora',
      width: 8527,
      height: 3008,
    } satisfies BrandAsset,
    images: {
      homeHero: {
        src: homeHeroPhoto,
        alt: 'Fachada da Royal Norte Distribuidora',
        width: 680,
        height: 510,
      } satisfies BrandAsset,
      companyHistory: null as BrandAsset | null,
      operation: [] as BrandAsset[],
      coverageBanner: null as BrandAsset | null,
      partnerBanner: null as BrandAsset | null,
    },
  },
} as const
