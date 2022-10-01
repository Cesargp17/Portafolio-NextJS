import { Text, Image, Spacer, Grid } from '@nextui-org/react'
import React, { useContext } from 'react'
import { UIContext } from '../../context/UIContext'

export const Footer = () => {

    const { Theme, DarkTheme } = useContext( UIContext )

  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">
        <Text css={{  textAlign: 'center', mt: 120}} color={ Theme === DarkTheme ? 'white' : 'black' } className='texth5' h5>Desarrollado en: </Text>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png' width={ 120 } alt='nextImg'/>
        <Text css={{  textAlign: 'center', mt: 20}} color={ Theme === DarkTheme ? 'white' : 'black' } className='texth5' h5>2022 - César Pérez</Text>

        <br /><br /><br />
        <hr /><br /><br />
    </div>
  )
}