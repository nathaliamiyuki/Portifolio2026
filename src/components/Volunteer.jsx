import { IconInstagram, IconYoutube, Ornament } from './Icons'

const ITEMS = [
  {
    title: 'Despertar para a Ciência — UTFPR',
    text: 'Criação de conteúdos e roteirização para divulgação científica no Instagram e YouTube.',
    links: [
      { href: 'https://www.instagram.com/despertarparaaciencia/', label: 'Instagram', icon: IconInstagram },
      { href: 'https://www.youtube.com/@despertarparaaciencia/videos', label: 'YouTube', icon: IconYoutube },
    ],
  },
  {
    title: 'Quanto Amor Você Tem Para Dar? — UTFPR',
    text: 'Organização de ações comunitárias, eventos e elaboração de materiais educativos.',
    links: [{ href: 'https://www.instagram.com/quantoamorutfpr/', label: 'Instagram', icon: IconInstagram }],
  },
]

export default function Volunteer() {
  return (
    <section id="voluntariado" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl text-forest md:text-4xl">Voluntariado &amp; Impacto Social</h2>
        <Ornament />
        <ol className="relative mt-12 grid gap-8 md:grid-cols-2">
          {ITEMS.map((item, index) => (
            <li key={item.title} className="card-soft relative rounded-3xl p-8 transition duration-300 hover:-translate-y-1">
              <span className="font-script text-4xl text-rose">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-serif text-xl text-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-moss">{item.text}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blush px-3 py-2 text-xs font-semibold uppercase tracking-wider text-forest transition duration-300 hover:bg-forest hover:text-cream"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
