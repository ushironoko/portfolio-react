import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

import DiscriptionCard from '../components/discriptionCard'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      boxSizing: 'border-box',
      width: '100%',
      minHeight: 'calc(100vh - 61px)',
      background: '#E6ECF0',
    },
    container: {
      width: '70%',
      margin: '0 auto',
      background: '#fafafa',
      paddingTop: '30px',
      minHeight: 'calc(100vh - 61px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    card: {
      flex: 1,
      margin: '0 auto',
      padding: '10px',
      manWidth: 275
    },
    appbar: {
      top: 10,
      background: '#FFF',
      color: '#00b1bb'
    }
  })

class Index extends React.Component<WithStyles<typeof styles>> {
  handleClick = () => {
    this.setState({
      open: true
    })
  }

  render() {
    return (
      <>
        <section className={this.props.classes.root}>
          <AppBar position="sticky">
            <Toolbar>
              <Typography color="inherit" noWrap>
                Ushironoko Portfolio
              </Typography>
            </Toolbar>
          </AppBar>

          <div className={this.props.classes.container}>
            <div className={this.props.classes.card}>
              <DiscriptionCard />
            </div>

            <div className={this.props.classes.card}>
              <Card>
                <Typography variant="subtitle1" gutterBottom>
                  お前はここ
                </Typography>
              </Card>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default withRoot(withStyles(styles)(Index))
