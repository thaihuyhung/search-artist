export default theme => ({
  event: {
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '&:not(:last-child)': {
      marginBottom: 16
    }
  },
  eventInfo: {
    display: 'flex',
    maxWidth: 'calc(100% - 130px)',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '100%',
    }
  },
  eventVenue: {
    padding: '8px',
    maxWidth: 'calc(100% - 85px)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: 'calc(100% - 85px)',
    }
  },
  eventName: {
    maxHeight: '48px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px'
    }
  },
  eventDate: {
    width: '84px',
    flex: '0 0 84px',
    border: '1px solid #1c9cb8',
    [theme.breakpoints.down('xs')]: {
      flex: '0 0 70px',
      maxWidth: '70px',
    }
  },
  eventMonth: {
    background: '#1c9cb8',
    color: '#fff',
    padding: '4px',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  eventDay: {
    textAlign: 'center',
    fontSize: '24px',
    padding: '4px 0',
  },
  eventDayOfWeek: {
    color: '#5c5c5c',
    marginLeft: '8px',
    marginRight: '8px',
    padding: '4px 0',
    borderTop: '1px solid #5c5c5c',
    textAlign: 'center',
    fontSize: '12px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 4,
      marginRight: 4,
    }
  },
  eventLocation: {
    marginLeft: 8
  },
  ticketInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    padding: 8,
    flex: '0 0 130px',
    maxWidth: '130px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      flex: '0 0 100%',
      background: '#f8f8f8',
    }
  }
})