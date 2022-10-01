import { Button, Container, Grid, Input, Spacer, Text, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'
import { CardItem } from './CardItem'
import { send } from 'emailjs-com';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2'

export const Contacto = () => {

    const { nombre, email, telefono, asunto, message, onInputChange, onResetForm } = useForm({
        nombre: '', email: '', telefono: '', asunto: '', message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const Mensaje = {
            from_name: nombre,
            to_name: 'César Pérez',
            asunto,
            message,
            email,
            telefono,
            reply_to: ''
        }
        send(
            'service_u9318vh',
            'template_wwxfueu',
            Mensaje,
            'FUBtN15nUF8CSTjQ8'
          )
            .then((response) => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Mensaje enviado, muchas gracias.',
                showConfirmButton: false,
                timer: 1500
              })
              onResetForm();
            })
            .catch((err) => {
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Hubo un error, intente más tarde.',
                showConfirmButton: false,
                timer: 1500
              })
              onResetForm();
            })
    }

  return (
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">
        <Text id="contacto" css={{ textGradient: "45deg, $blue600 -20%, $blue800 100%", textAlign: 'center', mt: 200}} h1 size={30}>CONTÁCTAME</Text>
        <Text css={{ textAlign: 'center', width: '90%', textJustify: 'auto', margin: 'auto' }} size={ 20 } className='texth5' blockquote> Aquí se encuentran mis redes sociales y un formulario para que me puedas contactar, se aceptan sugerencias y criticas constructivas, todo me ayuda a mejorar.
        mis hábilidades. Espero te haya agradado mi trabajo y podamos trabajar en el proyecto que deseas.</Text>
        <Spacer/>

        <Grid.Container gap={ 2 } justify='center'>
            <CardItem src='https://cdn-icons-png.flaticon.com/512/5968/5968896.png' alt='gittLogo' href='https://github.com/Cesargp17' width={ 60 } />
            <CardItem src='https://www.facebook.com/images/fb_icon_325x325.png' alt='fbLogo' href='https://www.facebook.com/cesar.garcia.p.17/' width={ 60 } />
            <CardItem src='https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg' alt='igLogo' href='https://www.instagram.com/cesargp17/' width={ 60 } />
            <CardItem src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png' alt='waLogo' href='https://api.whatsapp.com/send?phone=+523271023398&text=Hola, Nececito informacion sobre sus servicios en desarrollo web!' width={ 60 } />
            <CardItem src='https://cdn-icons-png.flaticon.com/512/281/281769.png' alt='gmailLogo' href="mailto:asgarper11@gmail.com" width={ 60 } />
        </Grid.Container>

        <Grid.Container justify='center' css={{ mt: 20 }}>
        <form onSubmit={onSubmit} css={{ justify:'center' }}>
            <Input bordered name='nombre' value={ nombre } onChange={ onInputChange } color='primary' size='xl' width={300} placeholder="Tú nombre" /><br />
            <Spacer/>
            <Input bordered name='email' value={ email } onChange={ onInputChange } color='primary' size='xl' width={300} placeholder="Tú email" />
            <Spacer/>
            <Input bordered name='telefono' value={ telefono } onChange={ onInputChange } color='primary' size='xl' width={300} placeholder="Tú número de telefono" />
            <Spacer/>
            <Input bordered name='asunto' value={ asunto } onChange={ onInputChange } color='primary' size='xl' width={300} placeholder="Asunto" />
            <Spacer/>
            <Textarea bordered name='message' value={ message } onChange={ onInputChange } color='primary' size='xl' width={300} height={800} placeholder="Tú mensaje" />

            <Button auto css={{ marginTop: 30 }} type='submit' shadow color="primary">
                ENVIAR
            </Button>
        </form>
        </Grid.Container><br/>

        <br /><br />
        <hr />
      </div>
  )
}


//service_u9318vhwidth={ 70 } 