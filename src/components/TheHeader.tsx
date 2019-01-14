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
      position: 'sticky',
      background: '#0c0c0c',
      color: '#FFF',
      zIndex: -1
    }
  })

function TheHeader(props: WithStyles<typeof styles>) {
  const { classes } = props
  return (
    <>
      <div>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Typography color="inherit">Ushironoko Portfolio</Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

export default withRoot(withStyles(styles)(TheHeader))
