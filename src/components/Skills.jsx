import { IconDatabase, IconHeart, IconMonitor, IconSpark, Ornament } from './Icons'

const GROUPS = [
  {
    title: 'Front-End & Web Design',
    icon: IconMonitor,
    items: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Material UI',
      'WordPress / Elementor',
      'Figma (Design Systems, Prototipagem, UX/UI)',
    ],
  },
  {
    title: 'Back-End & Bases de Dados',
    icon: IconDatabase,
    items: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'APIs REST', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Qualidade & Ferramentas',
    icon: IconSpark,
    items: ['Git', 'GitHub', 'VS Code', 'Jest', 'Cypress', 'Metodologias Ágeis (Scrum, Kanban)'],
  },
  {
    title: 'Soft Skills & Idiomas',
    icon: IconHeart,
    items: [
      'Comunicação',
      'Trabalho em Equipa',
      'Atenção aos Detalhes',
      'Resolução de Problemas',
      'Português (Nativo)',
      'Inglês (Intermediário)',
      'Mandarim (Iniciante)',
    ],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl text-forest md:text-4xl">Habilidades</h2>
        <Ornament />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {GROUPS.map((group) => (
            <article
              key={group.title}
              className="card-soft rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3 text-forest">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-forest/10 bg-ivory px-3 py-1.5 text-xs font-medium text-forest-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
