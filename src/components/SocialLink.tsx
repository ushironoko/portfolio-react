import * as React from 'react'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

const styles = (theme: Theme) =>
  createStyles({
    button: {
      boxSizing: 'border-box',
      width: '100%',
      margin: theme.spacing.unit,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'frex-start',
    },
  })

function SocialLink(props: WithStyles<typeof styles>) {
  const { classes } = props
  return (
    <>
      <div className={classes.button}>
        <IconButton>
        <a href="https://twitter.com/sirootosan" target="_blank"><i className={"fab fa-twitter"}></i></a>
        </IconButton>
        <IconButton>
        <a href="https://github.com/ushironoko" target="_blank"><i className={"fab fa-github"}></i></a>
        </IconButton>
        <IconButton>
          <a href="https://ushirock.hateblo.jp/" target="_blank"><i className={"fas fa-pen-fancy"}></i></a>
        </IconButton>
      </div>
    </>
  )
}

export default withRoot(withStyles(styles)(SocialLink))
