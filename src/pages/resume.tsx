import Head from 'next/head'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { CV } from '../components/CV'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'

export default function Resume() {
  const resumeData =
    'https://www.canva.com/design/DAFq4JY5w0A/QPeUsGmlAG1G4eNG3Px3nA/view?utm_content=DAFq4JY5w0A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'

  const previewData = `${resumeData.substr(
    0,
    resumeData.lastIndexOf('/') + 1
  )}view?embed`

  return (
    <>
      <Head>
        <title>Resume | Newton Cutrim </title>
        <meta
          name="description"
          content="Aqui você poderá ver ou baixar o meu currículo."
        />
        <meta property="og:title" content="Resume | Newton Cutrim" />
        <meta
          property="og:description"
          content="Aqui você poderá ver ou baixar o meu currículo."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../curriculum</p>
          Currículo
          <span>
            <BsFileText /> Curriculum
          </span>
        </Title>
        <Description>
          Aqui você poderá ver ou baixar o meu currículo.
        </Description>

        <PageSection>
          <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="Newton Cutrim"
          />

          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  )
}
