import { NextUIProvider } from '@nextui-org/react'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { UIContext } from '../../context/UIContext'
import { NavbarComponent } from '../ui/NavbarComponent'
import AOS from 'aos';
import 'aos/dist/aos.css';

const origin = typeof window == 'undefined' ? '' : window.location.origin;

const Layout = ({ children }) => {

  const { Theme } = useContext( UIContext );

  useEffect(() => {
    AOS.init()
}, [])

  return (
    <NextUIProvider theme={ Theme }>
        <Head>
            <title>César Pérez - Web & Mobile Developer</title>

            <meta name="author" content="César Pérez" />
            <meta name="description" content='Hola! soy César, un Desarrollador Web y Móvil viviendo en Nayarit, MX, Disfruto mucho desarrollar Software de confianza para plataformas Web y Móvil.' />
            <meta name="keywords" content='Developer, Javascript, Freelancer, React, React native, PHP, Laravel Developer, Vue JS Developer, React Developer' />

            <meta property="og:title" content='César Pérez - Web & Mobile Developer' />
            <meta property="og:description" content='Hola! soy César, un Desarrollador Web y Móvil viviendo en Nayarit, MX, Disfruto mucho desarrollar Software de confianza para plataformas Web y Móvil.' />
            <meta property="og:image" content={`${ origin }/img/banner.jpg`} />

            <meta property="Twitter:title" content='César Pérez - Web & Mobile Developer' />
            <meta property="Twitter:description" content='Hola! soy César, un Desarrollador Web y Móvil viviendo en Nayarit, MX, Disfruto mucho desarrollar Software de confianza para plataformas Web y Móvil.' />
            <meta property="Twitter:image" content={`${ origin }/img/banner.jpg`} />

            <meta property="og:image" content={`${ origin }/img/banner.jpg`} />
        </Head>

        <NavbarComponent/>

        <main>
            { children }
        </main>
    </NextUIProvider>
  )
}

export default Layout