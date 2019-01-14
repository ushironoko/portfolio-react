import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      margin: 20,
      width: 100,
      height: 100
    }
  })

type ClassNames = typeof styles

interface MyAvatar {
  imgPath: string
}
const MyAvatar = withStyles(styles)(
  (props: MyAvatar & WithStyles<ClassNames>) => {
    return (
      <>
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="grand closs"
            src={props.imgPath}
            className={props.classes.avatar}
          />
        </Grid>
      </>
    )
  }
)

export default withRoot(withStyles(styles)(MyAvatar))
