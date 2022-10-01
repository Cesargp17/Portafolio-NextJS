import { Button, Card, Container, Grid, Link, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import { PortafolioItem } from './PortafolioItem'

const Proyectos = [
    { 
        id: 1, 
        name: 'uResell - Ecommerce',
        img: 'https://res.cloudinary.com/djxmfnsct/image/upload/v1664549612/nbqhshgk4zkc81tz2p98.jpg',
        link: 'https://uresell.netlify.app/', 
        description: 'eCommerce desarrollado en ReactJS para la venta de sneakers limitados de diferentes marcas como Nike, Adidas, Rebook, etc...', 
        repo: 'https://github.com/Cesargp17/uResell-React',
        alt: 'uresell'
    },

    {
        id: 2,
        name: 'WhitexicansBlog - Red Social',
        img: 'https://res.cloudinary.com/djxmfnsct/image/upload/v1664634145/ihuahk0ubqoyxirih1al.jpg',
        link: 'https://whitexicansblog.tk/',
        description: 'WhitexicansBlog es una red social creada por dos estudiantes universitarios, pensando en agregar una tematica diferente al mundo de las redes sociales.',
        repo: 'https://github.com/Cesargp17/Whitexicans-React',
        alt: 'wblog'
    },
    
    {
        id: 3,
        name: 'Mi Portafolio - Personal',
        img: 'https://res.cloudinary.com/djxmfnsct/image/upload/v1664607021/louw9ctzhhjtvu7hzrxg.jpg',
        link: '/#',
        description: 'Proyecto realizado para presentarme como desarrollador, incluyendo proyectos, conocimientos, etc...',
        alt: 'portafolio'
    }
]

export const Portafolio = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">
        <Text id="portafolio" css={{ textGradient: "45deg, $blue600 -20%, $blue800 100%", textAlign: 'center', mt: 200 }} h1 size={30}>PROYECTOS</Text>
        <Text css={{ textAlign: 'center', width: '90%', textJustify: 'auto', margin: 'auto' }} className='texth5' size={ 20 } blockquote> Estos son algúnos de los proyectos que he realizado, Todos los días realizo nuevos proyectos para mejorar mis habilidades como desarrollador. Mi GitHub siempre esta publico para que puedan ver todos mis proyectos terminados y los que aún están en desarrollo.</Text>
            <Spacer/>
                {
                    Proyectos.map( proyecto => (
                        <PortafolioItem proyecto={ proyecto } key={ proyecto.id } />
                        ))
                }
    </div>
  )
}
