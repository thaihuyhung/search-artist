import commonStyle from '../../../common/style';

export default theme => ({
  skeleton: commonStyle.skeleton,
  container: {
    flexWrap: 'wrap',
  },
  filterWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '16px',
    }
  },
  filter: {
    flex: '0 0 calc(50% - 32px)',
    height: 32,
    marginTop: 16,
    [theme.breakpoints.down('xs')]: {
      flex: '0 0 calc(50% - 16px)',
    }
  },
  event: {
    display: 'flex',
    height: '85px',
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '&:not(:last-child)': {
      marginBottom: 16
    },
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      height: '135px',
    }
  },
  eventInfo: {
    display: 'flex',
    width: 'calc(100% - 130px)',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '85px',
    }
  },
  eventDate: {
    flex: '0 0 84px',
    width: '84px',
    [theme.breakpoints.down('xs')]: {
      flex: '0 0 72px',
      maxWidth: '72px',
      height: '85px',
    }
  },
  eventMonth: {
    width: '28px',
    height: '14px',
    margin: '5px auto',
  },
  eventDay: {
    width: '28px',
    height: '22px',
    margin: '11px auto',
  },
  eventDayOfWeek: {
    height: '14px',
    margin: '13px auto',
    width: '45px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0
    }
  },
  eventVenue: {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      boxSizing: 'border-box',
      height: '85px',
    }
  },
  eventName: {
    width: '240px',
    height: '24px',
  },
  eventLocation: {
    width: '140px',
    height: '15px',
  },
  ticketInfo: {
    flex: '0 0 130px',
    display: 'flex',
    padding: '8px',
    maxWidth: '130px',
    boxSizing: 'border-box',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '100%',
      height: '50px',
      flex: '0 0 100%',
    }
  },
  ticket: {
    width: '115px',
    height: '34px',
    marginTop: '17px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0',
      margin: '0 auto',
      zIndex: '1',
    }
  }
})