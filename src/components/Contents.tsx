import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

import Chips from '../components/Chips'
import Production from '../components/Production'
import SocialLink from '../components/SocialLink'

const styles = (theme: Theme) =>
  createStyles({
    papar: {
      padding: '30px',
      fontSize: '16px',
      zIndex: -1
    },
    underline: {
      borderBottom: '1px solid #ebeef5',
      boxSizing: 'border-box'
    }
  })

type ClassNames = typeof styles

const Contents = withStyles(styles)((props: WithStyles<ClassNames>) => {
  return (
    <>
      <Paper className={props.classes.papar} elevation={1}>
        <Typography variant="h6" className={props.classes.underline}>
          プロフィール
        </Typography>
        <div>
          <p>
            名前 うしろのこ
            <wbr />
          </p>
          <p>年齢 24歳</p>
          <p>
            フロント/サーバともに好きです。
            <wbr />
            アイマスとラジオとゲームが好きです。
            <wbr />
            アイマスに貢献することが最近の趣味です。
          </p>
        </div>

        <div>
          <Typography variant="h6" className={props.classes.underline}>
            ちょっとできる/勉強してる
          </Typography>
          <br />
          <Chips />

          <Typography noWrap>
            {`
              フロント、サーバー共に好きです。
            `}
          </Typography>
        </div>

        <br />
        <div>
          <Typography variant="h6" className={props.classes.underline}>
            つくったもの
          </Typography>
          <br />
          <Production />
        </div>
        <br />
        <div>
          <SocialLink />
        </div>
      </Paper>
    </>
  )
})

export default withRoot(withStyles(styles)(Contents))
