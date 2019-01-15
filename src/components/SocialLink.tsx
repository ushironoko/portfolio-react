import * as React from 'react'
import IconButton from '@material-ui/core/IconButton'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
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
      alignItems: 'flex-start'
    }
  })

function SocialLink(props: WithStyles<typeof styles>) {
  const { classes } = props
  return (
    <>
      <div className={classes.button}>
        <IconButton>
          <a href="https://twitter.com/sirootosan" target="_blank">
            <i className={'fab fa-twitter'} />
          </a>
        </IconButton>
        <IconButton>
          <a href="https://github.com/ushironoko" target="_blank">
            <i className={'fab fa-github'} />
          </a>
        </IconButton>
        <IconButton>
          <a href="https://ushirock.hateblo.jp/" target="_blank">
            <i className={'fas fa-pen-fancy'} />
          </a>
        </IconButton>
        <IconButton>
          <a href="https://qiita.com/ushironoko" target="_blank">
            <i className={'fas fa-search'} />
          </a>
        </IconButton>
      </div>
    </>
  )
}

export default withRoot(withStyles(styles)(SocialLink))
