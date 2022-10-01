import { Card, Grid, Link } from '@nextui-org/react'
import React from 'react'

export const CardItem = ({ src, alt, href, width = 100 }) => {
  return (
    <Grid  css={{ marginLeft: 20, marginBottom: 20 }} xs={ 5 } sm={ 3 } md={ 2 } xl={ 1 }>
        <Link href={ href || null }>
            <Card isHoverable>
                <Card.Body>
                    <Card.Image src={src} alt={alt} width={ width } />
                </Card.Body>
            </Card>
        </Link>
    </Grid>
  )
}
