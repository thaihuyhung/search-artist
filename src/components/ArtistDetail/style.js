const styles = theme => ({
  artistInfo: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  artistImage: {
    width: 300,
    height: 300,
    marginBottom: 16,
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    borderRadius: 4,
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100vw - 16px)',
      height: 'calc(100vw - 16px)',
    }
  },
  bandsintown: {
    display: 'block',
    marginBottom: 8,
    '& img:last-child': {
      marginLeft: 8
    }
  },
  facebookPage: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
    '& span': {
      fontSize: '24px',
      lineHeight: '24px',
      marginLeft: '4px',
    }
  },
  artistInfoContent: {
    paddingLeft: 16,
    width: 'calc(100% - 300px)',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingLeft: 0,
    }
  },
  artistName: {
    color: '#1b9cb8'
  },
  upcomingEvent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 16,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 8
    }
  },
  upcomingEventContent: {
    background: '#1b9cb8',
    display: 'inline-block',
    color: '#fff',
    padding: '8px 16px',
    fontSize: '14px',
    height: '32px',
    boxSizing: 'border-box',
    position: 'relative',
    '&:before': {
      content: '""',
      width: '0',
      height: '0',
      position: 'absolute',
      background: 'rgba(0,0,0,0)',
      border: '16px solid #1c9cb8',
      borderLeft: '16px solid rgba(0,0,0,0)',
      borderRight: '0',
      top: '0',
      left: '-15px',
    },
    '&:after': {
      content: '""',
      width: '0',
      height: '0',
      position: 'absolute',
      background: 'rgba(0,0,0,0)',
      border: '16px solid #1c9cb8',
      borderRight: '16px solid rgba(0,0,0,0)',
      borderLeft: '0',
      top: '0',
      right: '-15px',
    }
  }
});

export default styles;