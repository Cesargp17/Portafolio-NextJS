import { Card, Container, Grid, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import { CardItem } from './CardItem'

export const Conocimientos = () => {
  return (
    <>
    <Text id="conocimientos" css={{ textGradient: "45deg, $blue600 -20%, $blue800 100%", textAlign: 'center', mt: 200 }} h1 size={30}>CONOCIMIENTOS</Text>
    <Spacer/>
    <Text  className='texth5' css={{ textAlign: 'center', width: '90%', textJustify: 'auto', margin: 'auto' }} size={ 20 } blockquote> Actualmente cuento con sólidos conocimientos en las siguientes técnologias y todos los dias me esfuerzo en aprender nuevas cosas que me ayuden a mejorar. </Text>
    <Spacer/>

    <Grid.Container gap={ 1 } justify='center'>
        <CardItem src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='JavaScriptLogo' width={ 60 } />
        <CardItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='ReactLogo' width={ 60 }/>
        <CardItem src='https://media.graphcms.com/VKHHNvEETYqZRkqgjybc' alt='NexttLogo' width={ 60 }/>
        <CardItem src='https://softprodigy.com/wp-content/uploads/2019/06/nodejs-logo.png' alt='NodeLogo' width={ 60 }/>
        <CardItem src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' alt='HtmlLogo' width={ 60 }/>
        <CardItem src='https://uploads-ssl.webflow.com/5fea43e7361e25dcac081be5/62c43f49d8dc1931ce365b89_react-native-1.svg' alt='RNativetLogo' width={ 60 }/>
    </Grid.Container>

    <Grid.Container gap={ 1 } justify='center'>
        <CardItem src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' alt='CSStLogo' width={ 60 }/>
        <CardItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png' alt='Bootstrap' width={ 60 }/>
        <CardItem src='https://www.desuvit.com/wp-content/uploads/2021/03/mongodb-icon.png' alt='MongoLogo' width={ 60 }/>
        <CardItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png' alt='LaravelLogo'width={ 60 }/>
        <CardItem src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt='GitLogo' width={ 60 }/>
        <CardItem src='https://blog.artegrafico.net/wp-content/uploads/2019/10/mysql-logo.png' alt='MysqlLogo' width={ 60 }/>
    </Grid.Container>

    <br /><br />
    <hr />
    </>
  )
}
