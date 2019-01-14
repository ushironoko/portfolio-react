import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

const styles = (theme: Theme) =>
  createStyles({
    papar: {
      padding: '30px'
    }
  })

type ClassNames = typeof styles

const Contents = withStyles(styles)((props: WithStyles<ClassNames>) => {
  return (
    <>
        <Paper className={props.classes.papar} elevation={1}>
          <Typography variant="title">プロフィール</Typography>
          <hr />
          <Typography noWrap>
            {`
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          `}
          </Typography>

          <br />

          <Typography noWrap>
            {`
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          `}
          </Typography>

          <br />

          <Typography variant="title">状況</Typography>
          <hr />
          <Typography noWrap>
            {`
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          `}
          </Typography>

          <br />

          <Typography variant="title">できること</Typography>
          <hr />
          <Typography noWrap>
            {`
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          `}
          </Typography>

          <br />

          <Typography noWrap>
            {`
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          `}
          </Typography>
        </Paper>
    </>
  )
})

export default withRoot(withStyles(styles)(Contents))
