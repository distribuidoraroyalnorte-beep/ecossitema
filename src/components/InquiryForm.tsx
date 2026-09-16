import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formUi } from '../data/content'
import type { FormContent, FormField } from '../data/content'
import { site } from '../data/site'

function Field({ field }: { field: FormField }) {
  const className = field.full ? 'full-field' : undefined
  if (field.type === 'textarea') {
    return (
      <label className={className}>
        {field.label}
        <textarea name={field.name} rows={5} required={field.required} />
      </label>
    )
  }
  if (field.type === 'select') {
    return (
      <label className={className}>
        {field.label}
        <select name={field.name} required={field.required} defaultValue="">
          <option value="" disabled>
            {formUi.selectOption}
          </option>
          {field.options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
    )
  }
  return (
    <label className={className}>
      {field.label}
      <input name={field.name} type={field.type ?? 'text'} required={field.required} />
    </label>
  )
}

export default function InquiryForm({ content }: { content: FormContent }) {
  const [message, setMessage] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const body = content.fields
      .map((field) => `${field.label}: ${String(formData.get(field.name) || formUi.missingValue)}`)
      .join('\n')

    if (site.contact.whatsapp) {
      const query = new URLSearchParams({ text: `${content.subject}\n\n${body}` })
      window.open(
        `https://wa.me/${site.contact.whatsapp}?${query}`,
        '_blank',
        'noopener,noreferrer',
      )
      setMessage(formUi.whatsappOpened)
      return
    }
    if (site.contact.email) {
      const query = new URLSearchParams({ subject: content.subject, body })
      window.location.href = `mailto:${site.contact.email}?${query}`
      setMessage(formUi.emailOpened)
      return
    }
    setMessage(content.unavailableMessage)
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-fields">
        {content.fields.map((field) => (
          <Field key={field.name} field={field} />
        ))}
      </div>
      <label className="form-consent">
        <input type="checkbox" required />{' '}
        <span>
          {content.privacyLabel} <Link to="/privacidade">{formUi.privacyLink}</Link>
        </span>
      </label>
      <button className="btn primary" type="submit">
        {content.submitLabel} <Send size={18} />
      </button>
      {message && (
        <p className="form-note" role="status">
          {message}
        </p>
      )}
    </form>
  )
}
