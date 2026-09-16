import { ExternalLink, Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { clientLink, navigation, navigationUi, portalLink } from '../data/site'
import Logo from './Logo'

export default function PremiumHeader() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    const firstMenuLink = headerRef.current?.querySelector<HTMLAnchorElement>('.main-nav a')

    const closeMenu = () => {
      setOpen(false)
      menuButtonRef.current?.focus()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeMenu()
    }

    document.body.style.overflow = 'hidden'
    firstMenuLink?.focus()
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [open])

  const closeWithoutFocus = () => setOpen(false)

  return (
    <header ref={headerRef} className="site-header premium-header">
      <div className="container header-inner">
        <Logo />
        <nav
          id={menuId}
          className={open ? 'main-nav open' : 'main-nav'}
          aria-label={navigationUi.ariaLabel}
        >
          <div className="main-nav-links">
            {navigation.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeWithoutFocus}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <div className="header-actions">
            <a
              className="portal-link"
              href={portalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeWithoutFocus}
            >
              {portalLink.label}
              <ExternalLink aria-hidden="true" size={16} />
            </a>
            <NavLink className="header-client-cta" to={clientLink.to} onClick={closeWithoutFocus}>
              {clientLink.label}
            </NavLink>
          </div>
        </nav>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? navigationUi.closeMenu : navigationUi.openMenu}
          aria-controls={menuId}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
