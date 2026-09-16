export type TrustBarItem = {
  label: string
  detail?: string
}

type Props = {
  label?: string
  items: TrustBarItem[]
}

export default function TrustBar({ label, items }: Props) {
  return (
    <aside className="trust-bar" aria-label={label ?? 'Indicadores de confiança'}>
      <div className="container trust-bar-inner">
        {label && <p className="trust-bar-label">{label}</p>}
        <ul className="trust-bar-list">
          {items.map((item) => (
            <li key={`${item.label}-${item.detail ?? ''}`}>
              <strong>{item.label}</strong>
              {item.detail && <span>{item.detail}</span>}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
