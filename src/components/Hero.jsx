export default function Hero() {
  return (
    <section id="inicio" className="relative scroll-mt-24 overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
      <div className="pointer-events-none absolute -left-16 top-20 h-56 w-56 rounded-full bg-rose/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-cream/70 blur-3xl" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-moss">Portfólio profissional</p>
          <h1 className="font-script text-[3.4rem] leading-[1.05] text-forest sm:text-7xl md:text-8xl">
            Nathália Nishihara
          </h1>
          <p className="mt-5 font-serif text-xl italic text-forest-soft sm:text-2xl">
            Engenheira de Software em Formação &amp; Desenvolvedora
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-moss">
            Transformando ideias e requisitos em soluções funcionais, bem estruturadas e com foco na experiência do
            utilizador.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-forest-soft"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="rounded-full border border-forest/25 bg-cream/70 px-6 py-3 text-sm font-medium text-forest transition duration-300 hover:-translate-y-0.5 hover:border-forest hover:bg-cream"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <figure className="relative max-w-[420px]">
            <img
              src="/nathalia-perfil.png?v=2"
              alt="Retrato em preto e branco de Nathália Nishihara, com moldura de renda"
              className="lace-photo w-full"
              width="647"
              height="463"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
