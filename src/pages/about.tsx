import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Links } from '../components/Links'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title } from '../styles/styles'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Newton Cutrim</title>
        <meta
          name="description"
          content="Meu nome é Newton cutrim, sou um desenvolvedor Back-end Laravel
            do Brasil."
        />
        <meta property="og:title" content="About | Newton Cutrim" />
        <meta
          property="og:description"
          content="Meu nome é Newton cutrim, sou um desenvolvedor Back-end Laravel
          do Brasil."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about</p>
            Sobre
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/perfil.jpeg"
                alt="Imagem de perfil Newton"
              />

              <div className="links">
                <ul role="list">
                  <Link href={'https://github.com/newtoncutrim'}>
                    <a target="_blank" aria-label="Link para o Github">
                      <AiFillGithub size={25} /> @NewtonCutrim
                    </a>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/newton-cutrim/'}>
                    <a target="_blank" aria-label="Link para o Linkedin">
                      <BsLinkedin size={25} /> @NewtonCutrim
                    </a>
                  </Link>
                  <Link
                    href={'https://api.whatsapp.com/send?phone=5598984212805'}
                  >
                    <a target="_blank" aria-label="Link para o WhatsApp">
                      <RiWhatsappFill size={25} /> +55 (98) 998421-2805
                    </a>
                  </Link>
                 {/*  <Link
                    href={'}
                  >
                    <a
                      className="dc"
                      target="_blank"
                      aria-label="Link para o Discord"
                    >
                      <FaDiscord size={25} /> @
                    </a>
                  </Link> */}
                  <Link href={'mailto:evander.20112@hotmail.com'}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link para o email"
                    >
                      <GrMail size={25} /> @newtoncutrim777@gmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Vamos conversar, quem sabe criar um projeto incrível juntos?
                </h3>
                <p>Me mande uma mensagem! 😉</p>
                <Link href={'/contact'}>
                  <a>
                    <ButtonAlt>Contato</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
                Meu nome é Newton Cutrim, sou um desenvolvedor Back-end Laravel, apaixonado por projetar e codificar.
              </p>
              <p>
                Iniciei minha jornada na universidade com o objetivo inicial de
                cursar Análise e Desenvolvimento de Sistemas. Sempre tive
                interesse por computadores e uma curiosidade em relação à
                criação de sistemas web. Então, decidi unir essas duas paixões e
                ingressei na faculdade para explorar as possibilidades da área
                de TI.
              </p>
              <p>
                Foi somente em 2021, no primeiro semestre da faculdade, que
                comecei a jornada pela programação. Iniciei minha
                primeira tentativa de aprender HTML e CSS, porém acabei dando
                uma pausa após alguns meses devido à falta de tempo livre.
              </p>
              <p>
                No ano seguinte, em 2022, percebi que precisava definir um
                objetivo claro. Foi então que direcionei meus esforços para
                aprimorar minhas habilidades em HTML, CSS e JavaScript, com o
                objetivo de construir aplicações web e aprofundar meu
                aprendizado. Esse foi o ponto de partida para me tornar um
                desenvolvedor web.
              </p>
              <p>
                Em termos de minha experiência até o momento, tenho uma base
                sólida em desenvolvimento web Back-end.
                Atualmente, trabalho como desenvolvedor Back-end freelancer,
                utilizando Php, Laravel, Docker, Reactjs, Git, linux.
              </p>
              <p>
                Além do trabalho, continuo estudando e desenvolvendo projetos
                pessoais para expandir meus conhecimentos, focado no ecossistema
                Laravel para desenvolvimento Full-stack.
              </p>
              <p>
                Estou sempre em busca de desafios e oportunidades para crescer
                profissionalmente, e estou animado para contribuir com projetos
                interessantes e inovadores no campo do desenvolvimento web.
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  )
}
