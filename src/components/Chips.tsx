import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

const styles = (theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing.unit
    }
  })

type ClassNames = typeof styles

const Chips = withStyles(styles)((props: WithStyles<ClassNames>) => {
  return (
    <>
      <Chip
        avatar={<Avatar>JS</Avatar>}
        label="JavaScript"
        className={props.classes.chip}
        color="primary"
        variant="outlined"
      />

      <Chip
        avatar={<Avatar>TS</Avatar>}
        label="TypeScript"
        className={props.classes.chip}
        color="primary"
        variant="outlined"
      />

      <Chip
        avatar={<Avatar>JS</Avatar>}
        label="Vue.js"
        className={props.classes.chip}
        color="secondary"
        variant="outlined"
      />

      <Chip
        avatar={<Avatar>JS</Avatar>}
        label="Nuxt.js"
        className={props.classes.chip}
        color="secondary"
        variant="outlined"
      />

      <Chip
        avatar={<Avatar>TS</Avatar>}
        label="React"
        className={props.classes.chip}
        color="secondary"
        variant="outlined"
      />

      <Chip
        avatar={<Avatar>TS</Avatar>}
        label="Node.js"
        className={props.classes.chip}
        color="secondary"
        variant="outlined"
      />

      <Chip
        avatar={<Avatar>JA</Avatar>}
        label="Java"
        className={props.classes.chip}
        color="primary"
        variant="outlined"
      />

      <Chip
        avatar={<Avatar>JA</Avatar>}
        label="SpringBoot"
        className={props.classes.chip}
        color="secondary"
        variant="outlined"
      />

      <Chip
        avatar={<Avatar>C#</Avatar>}
        label="C#"
        className={props.classes.chip}
        color="primary"
        variant="outlined"
      />

      <Chip
        avatar={<Avatar>C#</Avatar>}
        label=".NET"
        className={props.classes.chip}
        color="secondary"
        variant="outlined"
      />

      <Chip
        avatar={<Avatar>Go</Avatar>}
        label="Go"
        className={props.classes.chip}
        color="primary"
        variant="outlined"
      />
    </>
  )
})

export default withRoot(withStyles(styles)(Chips))
