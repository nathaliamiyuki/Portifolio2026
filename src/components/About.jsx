import { Ornament } from './Icons'

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-24 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-3xl text-forest md:text-4xl">Sobre mim</h2>
        <Ornament />
        <article className="card-soft mt-8 rounded-3xl px-7 py-10 md:px-12 md:py-12">
          <p className="text-center font-serif text-lg leading-8 text-forest-soft md:text-xl md:leading-9">
            Olá! Sou a <strong className="font-semibold text-forest">Nathália Nishihara</strong>, estudante de Engenharia
            de Software na UTFPR. Sou apaixonada por transformar ideias em sistemas eficientes e intuitivos, unindo o
            rigor técnico da engenharia à atenção aos detalhes e à experiência do utilizador. Com um perfil analítico,
            comunicativo e foco em aprendizagem contínua, procuro sempre criar soluções digitais funcionais e de
            impacto.
          </p>
        </article>
      </div>
    </section>
  )
}
