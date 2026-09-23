import { useState } from 'react'
import { IconGithub, IconLinkedin, IconMail, Ornament } from './Icons'

const EMAIL = 'nathalianishihara@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  function onChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const body = encodeURIComponent(`Nome: ${form.nome}\nE-mail: ${form.email}\n\n${form.mensagem}`)
    const subject = encodeURIComponent(form.assunto || 'Contacto pelo portfólio')
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const fieldClass =
    'mt-1 w-full rounded-2xl border border-forest/15 bg-ivory px-4 py-3 text-sm text-forest outline-none transition focus:border-forest/40'

  return (
    <section id="contato" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl text-forest md:text-4xl">Contato</h2>
        <Ornament />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <aside className="card-soft rounded-3xl p-8">
            <p className="font-serif text-2xl italic text-forest">Vamos conversar?</p>
            <p className="mt-3 text-sm leading-6 text-moss">
              Estou aberta a estágios, projetos colaborativos e conversas sobre engenharia de software.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 text-sm font-medium text-forest transition hover:text-moss"
                >
                  <IconMail className="h-5 w-5" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nathalianishihara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-medium text-forest transition hover:text-moss"
                >
                  <IconLinkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nathaliamiyuki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-medium text-forest transition hover:text-moss"
                >
                  <IconGithub className="h-5 w-5" />
                  GitHub
                </a>
              </li>
            </ul>
          </aside>

          <form className="card-soft rounded-3xl p-8" onSubmit={onSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-moss">
                Nome
                <input className={fieldClass} name="nome" autoComplete="name" required value={form.nome} onChange={onChange} />
              </label>
              <label className="text-xs font-semibold uppercase tracking-wider text-moss">
                E-mail
                <input
                  className={fieldClass}
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={onChange}
                />
              </label>
            </div>
            <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-moss">
              Assunto
              <input className={fieldClass} name="assunto" required value={form.assunto} onChange={onChange} />
            </label>
            <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-moss">
              Mensagem
              <textarea
                className={`${fieldClass} min-h-32 resize-y`}
                name="mensagem"
                required
                value={form.mensagem}
                onChange={onChange}
              />
            </label>
            <button
              type="submit"
              className="mt-6 rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-forest-soft"
            >
              Enviar mensagem
            </button>
            {sent ? (
              <p className="mt-3 text-sm text-moss" role="status">
                O seu cliente de e-mail deve abrir em seguida. Se isso não acontecer, escreva para {EMAIL}.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
