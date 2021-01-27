import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../src/ProTip'
import Copyright from '../src/Copyright'
import { Button, Link } from '@material-ui/core'

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about">
          <Button variant="contained" color="primary">
            Go to the About page
          </Button>
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
