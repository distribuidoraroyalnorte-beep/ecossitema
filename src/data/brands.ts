import alereLogo from '../assets/brands/alere.PNG'
import alivirLogo from '../assets/brands/alivira.png'
import churuLogo from '../assets/brands/churu.png'
import dentalLightLogo from '../assets/brands/dental-light.png'
import hebronVetLogo from '../assets/brands/hebron-vet.png'
import megazooLogo from '../assets/brands/megazoo.png'
import msdLogo from '../assets/brands/msd.PNG'
import petFitLogo from '../assets/brands/pet-fit.png'
import pethyGroupLogo from '../assets/brands/pethygroup.PNG'
import royalCaninLogo from '../assets/brands/royal-canin.png'
import virbacLogo from '../assets/brands/virbac.png'
import type { BrandAsset } from './brand'

export type PartnerBrand = {
  name: string
  logo: BrandAsset
}

export const partnerBrandsByName = {
  'Royal Canin': {
    name: 'Royal Canin',
    logo: { src: royalCaninLogo, alt: 'Royal Canin', width: 3840, height: 2400 },
  },
  Virbac: {
    name: 'Virbac',
    logo: { src: virbacLogo, alt: 'Virbac', width: 920, height: 920 },
  },
  Alivir: {
    name: 'Alivir',
    logo: { src: alivirLogo, alt: 'Alivir' },
  },
  'MSD Saúde Animal': {
    name: 'MSD Saúde Animal',
    logo: { src: msdLogo, alt: 'MSD Saúde Animal' },
  },
  Alere: {
    name: 'Alere',
    logo: { src: alereLogo, alt: 'Alere' },
  },
  PethyGroup: {
    name: 'PethyGroup',
    logo: { src: pethyGroupLogo, alt: 'PethyGroup', width: 447, height: 447 },
  },
  'Hebron Vet': {
    name: 'Hebron Vet',
    logo: { src: hebronVetLogo, alt: 'Hebron Vet', width: 330, height: 87 },
  },
  'INABA CHURU': {
    name: 'INABA CHURU',
    logo: { src: churuLogo, alt: 'INABA CHURU', width: 3000, height: 1408 },
  },
  Megazoo: {
    name: 'Megazoo',
    logo: { src: megazooLogo, alt: 'Megazoo', width: 600, height: 600 },
  },
  'Dental Light': {
    name: 'Dental Light',
    logo: { src: dentalLightLogo, alt: 'Dental Light', width: 1150, height: 460 },
  },
  'Pet Fit': {
    name: 'Pet Fit',
    logo: { src: petFitLogo, alt: 'Pet Fit' },
  },
} as const satisfies Record<string, PartnerBrand>

export const featuredPartnerBrands = [
  partnerBrandsByName['Royal Canin'],
  partnerBrandsByName.Virbac,
  partnerBrandsByName['MSD Saúde Animal'],
  partnerBrandsByName.Alere,
  partnerBrandsByName['INABA CHURU'],
  partnerBrandsByName.PethyGroup,
] as const satisfies readonly PartnerBrand[]
