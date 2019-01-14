import * as React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20,
    },
  });

class Index extends React.Component<WithStyles<typeof styles>> {
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography variant="h4" gutterBottom>
          USHIRONOKO Portfolio
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          example project
        </Typography>
        <Button variant="contained" color="secondary" onClick={this.handleClick}>
          Subscribe
        </Button>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
