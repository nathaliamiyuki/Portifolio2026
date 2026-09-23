import { IconGithub, Ornament } from './Icons'

const PROJECTS = [
  {
    title: 'Sistema de Controlo de Voluntários (ELLP)',
    description:
      'Aplicação full stack para automatizar a gestão de voluntários e documentação na UTFPR.',
    techs: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase', 'Jest', 'Cypress'],
    github: 'https://github.com/anabmferraz/ellp-voluntarios-oficina2',
    accent: 'from-[#f8d7da] to-[#efe6dc]',
    motif: 'ELLP',
  },
  {
    title: 'Last.fm Dashboard',
    description: 'Plataforma web interativa para gestão, pesquisa e visualização de métricas e dados musicais.',
    techs: ['React', 'Material UI', 'Express.js', 'MongoDB Atlas', 'JWT'],
    github: 'https://github.com/anabmferraz/projeto2-fullstack-lastfm',
    accent: 'from-[#ead7d9] to-[#dce6dc]',
    motif: '♪',
  },
  {
    title: 'Sistema de Gestão de Voluntários',
    description: 'Sistema web responsivo para registo, controlo de horas e emissão de certificados.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'QA Web'],
    github: 'https://github.com/Thakirian/Sistema-de-Gest-o-de-Volunt-rio',
    accent: 'from-[#f3e1d8] to-[#fde2e4]',
    motif: '♡',
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl text-forest md:text-4xl">Projetos</h2>
        <Ornament />
        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="card-soft flex flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`flex h-40 items-center justify-center bg-gradient-to-br ${project.accent} font-script text-6xl text-forest/70`}
                aria-hidden="true"
              >
                {project.motif}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl text-forest">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-moss">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <li key={tech} className="rounded-full bg-blush px-2.5 py-1 text-[11px] font-medium text-forest">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-forest/20 px-4 py-2 text-sm font-medium text-forest transition duration-300 hover:bg-forest hover:text-cream"
                >
                  <IconGithub className="h-4 w-4" />
                  Ver no GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
