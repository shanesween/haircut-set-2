import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../src/Components/ProTip'
import Link from '../src/Link'
import Copyright from '../src/Components/Copyright'
import { Button, Grid, makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function About() {
  const classes = useStyles()
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Container>
  )
}
