import * as React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      boxSizing: 'border-box',
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20,
      width: '70%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center'
    },
    card: {
      flex: 1,
      width: '100%',
      minWidth: '100px'
    }
  })

class Index extends React.Component<WithStyles<typeof styles>> {
  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleClick = () => {
    this.setState({
      open: true
    })
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Card className={this.props.classes.card}>
          <Typography variant="h4">USHIRONOKO Portfolio</Typography>
        </Card>
        <Card className={this.props.classes.card}>
          <Typography variant="subtitle1" gutterBottom>
            example project
          </Typography>
        </Card>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
        >
          Subscribe
        </Button>
      </div>
    )
  }
}

export default withRoot(withStyles(styles)(Index))
