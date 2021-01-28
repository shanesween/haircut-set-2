import React, { useState } from 'react'
import {
  makeStyles,
  Theme,
  AppBar,
  IconButton,
  Drawer,
  Typography,
  Toolbar,
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import AssignmentInd from '@material-ui/icons/AssignmentInd'
import Home from '@material-ui/icons/Home'
import Apps from '@material-ui/icons/Apps'
import ContactMail from '@material-ui/icons/ContactMail'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  title: {
    flexGrow: 1,
  },
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: theme.palette.secondary.main,
    '& span': {
      fontWeight: 900,
      fontSize: theme.typography.pxToRem(20),
    },
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const menuItems = [
  {
    listIcon: <Home fontSize="large" />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <AssignmentInd fontSize="large" />,
    listText: 'Resume',
    listPath: '/',
  },
  {
    listIcon: <Apps fontSize="large" />,
    listText: 'Projects',
    listPath: '/',
  },
  {
    listIcon: <ContactMail fontSize="large" />,
    listText: 'Contact',
    listPath: '/',
  },
]

const NavBar = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const drawerList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src="/code.png" alt="code" />
      <Divider className={classes.divider} />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            onClick={() => setOpen(false)}
            href={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="github"
            target={'_blank'}
            href="https://github.com/shanesween"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="linkedIn"
            target={'_blank'}
            href="https://www.linkedin.com/in/shanesween/"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {drawerList()}
      </Drawer>
    </div>
  )
}

export default NavBar
