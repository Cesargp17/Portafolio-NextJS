import { Card, Container, Grid, Link, Text } from '@nextui-org/react'
import React from 'react'

export const About = () => {
  return (
    <>
        <Text id="about" css={{ textGradient: "45deg, $blue600 -20%, $blue800 100%", textAlign: 'center', mt: 200}} h1 size={30}>SOBRE MÍ</Text>

        <Container className="animate__animated animate__fadeIn" display='flex' justify='center' alignContent='center' height='100vh' >
        <Link>
            <Card isHoverable isPressable css={{ mw: "400px", height: 400 }}>
                    <Card.Image
                        src='https://res.cloudinary.com/djxmfnsct/image/upload/v1664605382/bqmuohp0hcwr7mtojduz.jpg'
                        width={ 300 }
                        height={ 400 }
                        alt='cesarImg'
                        />
            </Card>
        </Link>

        <Card css={{ p: "$6", mw: "500px", height: 330, marginLeft: -10, marginTop: 20 }} >
            <Card.Header>
            <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                    César Pérez, Desarrollador Web & Móvil.
                    </Text>
                </Grid>
                {/* <Grid xs={12}>
                    <Text css={{ color: "$accents8" }}>{ proyecto.link }</Text>
                </Grid> */}
            </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text className='texth5'>
                Estudiante de Ingeniero de Software, en la Universidad Técnologica de Nayarit. Disfruto mucho desarrollar Software de confianza para plataformas Web y Móvil.
                Mi objetivo es Desarrollar Software de calidad, y buenas experiencias para el cliente y el usuario.
                </Text>
            </Card.Body>
        </Card>
    </Container><br /><br />
    <hr />
    </>
  )
}
