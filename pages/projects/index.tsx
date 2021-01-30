import React, { Fragment } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../../src/Components/ProTip'
import Link from '../../src/Link'
import Copyright from '../../src/Components/Copyright'
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Tooltip,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
  },
  mainContainer: {
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardRoot: {
    maxWidth: 345,
  },
  cardImage: {
    objectFit: 'contain',
  },
  toolContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}))

const projectsConfig = [
  {
    name: 'Rove',
    githubUrl: 'https://github.com/shanesween/Rove',
    demoUrl: '',
    image: '/projects/rove.png',
    description: 'A social media and exploration native app for digital nomads',
    tools: [
      { name: 'React Native', url: '/dev/react.svg' },
      { name: 'Redux', url: '/dev/redux.svg' },
      { name: 'Firebase', url: '/dev/firebase.svg' },
    ],
  },
  {
    name: 'Magasin',
    githubUrl: 'https://github.com/shanesween/Magasin',
    demoUrl: '',
    image: '/projects/magasin.png',
    description: 'French for Shop - An e-commerce site for knicks & knacks',
    tools: [
      { name: 'React', url: '/dev/react.svg' },
      { name: 'Redux', url: '/dev/redux.svg' },
      { name: 'Nodejs', url: '/dev/nodejs.svg' },
      { name: 'Express', url: '/dev/express.svg' },
      { name: 'Sequelize', url: '/dev/sequelize.svg' },
      { name: 'Bootstrap', url: '/dev/bootstrap.svg' },
    ],
  },
]

const Projects = () => {
  const classes = useStyles()

  const projectCard = (project, i) => (
    <Grid item xs={12} sm={8} md={4} key={i}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={project.name}
            height="140"
            image={project.image}
            title={`${project.name} - ${project.description}`}
            className={classes.cardImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {project.description}
            </Typography>
            <Box className={classes.toolContainer}>
              {project.tools &&
                project.tools.map((tool) => (
                  <Fragment key={tool.name}>
                    <Grid item>
                      <Tooltip title={tool.name}>
                        <Avatar
                          alt="tool"
                          variant="square"
                          sizes="lg"
                          src={tool.url}
                        />
                      </Tooltip>
                    </Grid>
                  </Fragment>
                ))}
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
                        Share
                      </Button> */}
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projectsConfig.map((project, i) => (
          <Fragment key={project.name}>{projectCard(project, i)}</Fragment>
        ))}
      </Grid>
    </Box>
  )
}

export default Projects
