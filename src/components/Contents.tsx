import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

import Chips from '../components/Chips'

const styles = (theme: Theme) =>
  createStyles({
    papar: {
      padding: '30px',
      fontSize: '20px'
    }
  })

type ClassNames = typeof styles

const Contents = withStyles(styles)((props: WithStyles<ClassNames>) => {
  return (
    <>
      <Paper className={props.classes.papar} elevation={1}>
        <Typography variant="title">プロフィール</Typography>
        <hr />
        <p>
          名前 うしろのこ
          <wbr />
        </p>
        <p>年齢 24歳</p>

        <Typography variant="title">できる/ちょっとできる/勉強してる</Typography>
        <hr />
        <Chips />

        <Typography noWrap>
          {`
            フロント、サーバー共に好きです。
          `}
        </Typography>

        <br />

        <Typography variant="title">つくったもの</Typography>
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
