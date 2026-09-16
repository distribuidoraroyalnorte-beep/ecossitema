import {
  Boxes,
  Building2,
  CheckCircle2,
  Compass,
  Handshake,
  HeartPulse,
  MapPinned,
  PackageCheck,
  PawPrint,
  Store,
  Stethoscope,
  Target,
  Truck,
  Users,
} from 'lucide-react'
import type { IconName } from '../data/content'

const icons = {
  boxes: Boxes,
  building: Building2,
  check: CheckCircle2,
  compass: Compass,
  handshake: Handshake,
  heart: HeartPulse,
  map: MapPinned,
  package: PackageCheck,
  paw: PawPrint,
  store: Store,
  stethoscope: Stethoscope,
  target: Target,
  truck: Truck,
  users: Users,
}

export default function Icon({ name, size }: { name: IconName; size?: number }) {
  const Component = icons[name]
  return <Component size={size} aria-hidden="true" />
}
