import { Button, Container, Spacer, Text } from '@nextui-org/react'
import React, { useContext } from 'react'
import { UIContext } from '../../context/UIContext'

export const Main = () => {

  const { Theme, DarkTheme } = useContext( UIContext )

  return (
    <Container className="animate__animated animate__fadeIn" display='flex' justify='center' alignContent='center' css={{ height: '100vh', backgroundColor: `${ Theme === DarkTheme ? 'rgba(0, 0, 0, 0.6)' : '#0952A5' }`, textAlign: 'center' }}>

        <Container display='grid' justify='center' alignContent='center'>
            <Text h4 color='white' className='texth5'> Bienvenidos, yo soy </Text>
            <Text h1 size={55} css={{ textGradient: `${ Theme === DarkTheme ? '45deg, $blue600 -20%, $pink600 50%' : '45deg, $yellow600 -20%, $red600 100%' }` }} weight="bold"> César Pérez </Text>
            <Text h1 size={50} color='white' weight="bold" className='texth1'> Desarrollador web y móvil </Text><br />
            <Text css={{ width: '75%', margin: 'auto' }} size={ 18 } color='white' className='texth5' > Soy un desarrollador de software viviendo en México. Especializado en el desarrollo Frontend de aplicaciones Web, Móviles y todo lo relacionado. </Text>
        </Container>

        <a className="btn" href='#contacto' style={{ marginTop: 40 }}> CONTÁCTAME </a>
    </Container>
  )
}
