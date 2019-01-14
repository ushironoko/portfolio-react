import * as React from 'react'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import Fade from '@material-ui/core/Fade'
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
      minHeight: 'calc(100vh - 61px)',
      background: '#E6ECF0'
    },
    container: {
      flex: 1,
      maxWidth: '780px',
      margin: '0 auto',
      background: '#ebeef5',
      paddingTop: '10px'
    },
    section: {
      margin: '0 auto',
      padding: '10px'
    },
  })

class Index extends React.Component<WithStyles<typeof styles>> {
  handleChange = () => {}

  state = {
    myAvatarChecked: false,
    contentsChecked: false
  }

  render() {
    return (
      <>
        <TheHeader />
        <section className={this.props.classes.root}>
          <Fade in={this.state.myAvatarChecked}>
            <div>
              <MyAvatar imgPath={AVATAR_PATH} />
            </div>
          </Fade>
          <Fade in={this.state.contentsChecked}>
            <div className={this.props.classes.container}>
              <Contents />
            </div>
          </Fade>
        </section>
      </>
    )
  }

  async componentDidMount() {
    await setTimeout(() => {
      this.setState(() => ({ myAvatarChecked: !this.state.myAvatarChecked }))
    }, 600)

    await setTimeout(() => {
      this.setState(() => ({ contentsChecked: !this.state.contentsChecked }))
    }, 300)
  }
}

export default withRoot(withStyles(styles)(Index))
