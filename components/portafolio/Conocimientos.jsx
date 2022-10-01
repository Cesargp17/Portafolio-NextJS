import { Card, Container, Grid, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import { CardItem } from './CardItem'

export const Conocimientos = () => {
  return (
    <>
    <Text id="conocimientos" css={{ textGradient: "45deg, $blue600 -20%, $blue800 100%", textAlign: 'center', mt: 200 }} h1 size={40}>CONOCIMIENTOS</Text>
    <Spacer/>
    <Text  className='texth5' css={{ textAlign: 'center' }} size={ 20 } blockquote> Actualmente cuento con sólidos conocimientos <br /> en las siguientes técnologias y todos los dias, <br /> me esfuerzo en aprender nuevas cosas que me ayuden a mejorar. </Text>
    <Spacer/>

    <Grid.Container gap={ 2 } justify='center'>
        <CardItem src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='JavaScriptLogo' />
        <CardItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='ReactLogo' />
        <CardItem src='https://media.graphcms.com/VKHHNvEETYqZRkqgjybc' alt='NexttLogo' />
        <CardItem src='https://softprodigy.com/wp-content/uploads/2019/06/nodejs-logo.png' alt='NodeLogo' />
        <CardItem src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' alt='HtmlLogo' />
        <CardItem src='https://uploads-ssl.webflow.com/5fea43e7361e25dcac081be5/62c43f49d8dc1931ce365b89_react-native-1.svg' alt='RNativetLogo' />
    </Grid.Container>

    <Grid.Container gap={ 2 } justify='center'>
        <CardItem src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' alt='CSStLogo' />
        <CardItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png' alt='Bootstrap' />
        <CardItem src='https://www.desuvit.com/wp-content/uploads/2021/03/mongodb-icon.png' alt='MongoLogo' />
        <CardItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png' alt='LaravelLogo'/>
        <CardItem src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt='GitLogo' />
        <CardItem src='https://blog.artegrafico.net/wp-content/uploads/2019/10/mysql-logo.png' alt='MysqlLogo' />
    </Grid.Container>
    </>
  )
}
