import { Container } from "@nextui-org/react";
import Layout from "../components/layouts/Layout";
import { About } from "../components/portafolio/About";
import { Conocimientos } from "../components/portafolio/Conocimientos";
import { Contacto } from "../components/portafolio/Contacto";
import { Footer } from "../components/portafolio/Footer";
import { Main } from "../components/portafolio/Main";
import { Portafolio } from "../components/portafolio/Portafolio";

export default function Home() {
  return (
    <Layout>
      <Main/>

      <About/>

      <Container>
      <Conocimientos/>
      </Container>

      <Container>
      <Portafolio/>
      </Container>

      <Container>
        <Contacto/>
      </Container>

      <Footer/>
    </Layout>
  )
}
