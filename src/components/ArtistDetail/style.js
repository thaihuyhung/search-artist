export default {
  artistInfo: {
    display: 'flex'
  },
  artistImage: {
    width: 300,
    height: 300,
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    borderRadius: 4,
    overflow: 'hidden'
  },
  artistInfoContent: {
    paddingLeft: 16,
    width: 'calc(100% - 300px)',
    boxSizing: 'border-box',
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
      left: '-16px',
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
      right: '-16px',
    }
  }
}