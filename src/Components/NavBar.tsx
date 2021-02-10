import React, { Fragment, useState } from 'react'
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
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import AssignmentInd from '@material-ui/icons/AssignmentInd'
import Home from '@material-ui/icons/Home'
import Apps from '@material-ui/icons/Apps'
import ContactMail from '@material-ui/icons/ContactMail'
import Link from '../Link'

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
    background: theme.palette.primary.main,
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
  linkContainer: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}))

const menuItems = [
  {
    listIcon: <Home fontSize="large" />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <Apps fontSize="large" />,
    listText: 'Projects',
    listPath: '/projects',
  },
  {
    listIcon: <ContactMail fontSize="large" />,
    listText: 'About',
    listPath: '/about',
  },
  {
    listIcon: <AssignmentInd fontSize="large" />,
    listText: 'Resume',
    listPath: '/resume',
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
          <Fragment key={item.listText}>
            <Link href={item.listPath} className={classes.linkContainer}>
              <ListItem button key={i} onClick={() => setOpen(false)}>
                <ListItemIcon className={classes.listItem}>
                  {item.listIcon}
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary={item.listText}
                />
              </ListItem>
            </Link>
          </Fragment>
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
          <Typography variant="h6" className={classes.title}>
            DJ TOLO
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="github"
            target={'_blank'}
            href="https://twitter.com/cacc___"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="linkedIn"
            target={'_blank'}
            href="https://instagram.com/cacc___"
          >
            <InstagramIcon fontSize="large" />
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
