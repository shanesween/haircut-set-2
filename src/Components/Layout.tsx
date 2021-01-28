import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import Particles from 'react-tsparticles'
import Copyright from './Copyright'
import NavBar from './NavBar'
import ProTip from './ProTip'
import particlesConfig from '../Config/particlesConfig'

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
      <Copyright />
      <ProTip />
    </Box>
  )
}

export default Layout
