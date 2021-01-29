import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import Copyright from './Components/Copyright'
import NavBar from './Components/NavBar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const Layout = (props) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <NavBar />
      <div>{props.children}</div>
      <Copyright />
    </Box>
  )
}

export default Layout
