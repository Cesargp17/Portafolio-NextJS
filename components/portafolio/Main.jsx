import { Button, Container, Spacer, Text } from '@nextui-org/react'
import React, { useContext } from 'react'
import { UIContext } from '../../context/UIContext'

export const Main = () => {

  const { Theme, DarkTheme } = useContext( UIContext )

  return (
    <Container className="animate__animated animate__fadeIn" display='flex' justify='center' alignContent='center' css={{ height: '85vh', backgroundColor: `${ Theme === DarkTheme ? 'rgba(0, 0, 0, 0.6)' : '#0952A5' }` }}>

        <Container display='grid' justify='center' alignContent='center'>
            <Text h4 color='white' className='texth5'> Bienvenidos, yo soy </Text>
            <Text h1 size={60} color={ Theme === DarkTheme ? 'blue' : 'orange' } weight="bold" className='texth1'> César Pérez </Text>
            <Text h1 size={60} color='white' weight="bold"> Desarrollador web y móvil </Text><br />
            <Text size={ 20 } color='white' className='texth5' > Soy un desarrollador de software viviendo en Nayarit, México, <br /> especializado en el desarrollo Frontend de aplicaciones Web, <br /> Móviles y todo lo relacionado. </Text>
        </Container>

        <button className="btn" style={{ marginTop: 80 }}> CONTÁCTAME </button>
    </Container>
  )
}
