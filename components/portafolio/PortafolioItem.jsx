import { Card, Container, Grid, Link, Text } from '@nextui-org/react'
import React from 'react'

export const PortafolioItem = ({ proyecto, width = '400' }) => {
  return (
    <>
    <Container className="animate__animated animate__fadeIn" display='flex' justify='center' alignContent='center' >
        <Link href={ proyecto.link }>
            <Card isHoverable isPressable css={{ mw: "400px", height: 350 }}>
                    <Card.Image
                        src={ proyecto.img }
                        width={ width }
                        height={ 400 }
                        alt={proyecto.alt }
                        />
            </Card>
        </Link>

        <Card css={{ p: "$6", mw: "500px", height: 310, marginLeft: -50, marginTop: 20 }}>
            <Card.Header>
            <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                    { proyecto.name }
                    </Text>
                </Grid>
                {/* <Grid xs={12}>
                    <Text css={{ color: "$accents8" }}>{ proyecto.link }</Text>
                </Grid> */}
            </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text className='texth5'>
                { proyecto.description }
                </Text>
            </Card.Body>
            <Card.Footer>
                <Link
                color="primary"
                target="_blank"
                href={ proyecto.repo }
                >
                Visit source code on GitHub.
                </Link>
            </Card.Footer>
        </Card>
    </Container><br /><br /><br />
    <hr />
    <br /><br /> <br />
    </>
  )
}
