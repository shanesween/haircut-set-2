import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import Particles from 'react-tsparticles'
import Copyright from './Components/Copyright'
import NavBar from './Components/NavBar'
import ProTip from './Components/ProTip'
import particlesConfig from './Config/particlesConfig'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
}))

const Layout = (props) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <NavBar />
      <div>{props.children}</div>
    </Box>
  )
}

export default Layout
