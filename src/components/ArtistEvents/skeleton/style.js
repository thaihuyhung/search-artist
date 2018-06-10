import commonStyle from '../../../common/style';

export default {
  skeleton: commonStyle.skeleton,
  filterWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  filter: {
    flex: '0 0 calc(50% - 32px)',
    height: 32,
    marginTop: 16,
  },
  event: {
    display: 'flex',
    height: '85px',
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '&:not(:last-child)': {
      marginBottom: 16
    }
  },
  eventInfo: {
    display: 'flex',
    width: 'calc(100% - 130px)',
  },
  eventDate: {
    flex: '0 0 84px',
    width: '84px',
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
  },
  eventVenue: {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
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
  },
  ticket: {
    width: '115px',
    height: '34px',
    marginTop: '17px',
  }
}