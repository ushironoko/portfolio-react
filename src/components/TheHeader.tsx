import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

const styles = (theme: Theme) =>
  createStyles({
    appbar: {
      top: 0,
      background: '#0c0c0c',
      color: '#FFF'
    }
  })

function TheHeader(props: WithStyles<typeof styles>) {
  const { classes } = props
  return (
    <>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <Typography color="inherit" noWrap>
            Ushironoko Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default withRoot(withStyles(styles)(TheHeader))
