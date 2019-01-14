import * as React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import withRoot from '../withRoot'

import TheHeader from '../components/TheHeader'
import MyAvatar from '../components/MyAvatar'
import Contents from '../components/Contents'

const AVATAR_PATH = '/images/avatar.jpg'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      boxSizing: 'border-box',
      width: '100%',
      paddingTop: '20px',
      minHeight: 'calc(100vh - 61px)',
      background: '#FFF'
    },
    container: {
      flex: 1,
      maxWidth: '780px',
      margin: '0 auto',
      background: '#FFF',
      paddingTop: '20px'
    },
    section: {
      margin: '0 auto',
      padding: '10px'
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
        <TheHeader />
        <section className={this.props.classes.root}>
          <div className={this.props.classes.container}>
            <MyAvatar imgPath={AVATAR_PATH} />
            <Contents />
          </div>
        </section>
      </>
    )
  }
}

export default withRoot(withStyles(styles)(Index))
