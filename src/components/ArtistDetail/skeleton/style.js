import commonStyle from '../../../common/style';
import artistDetail from '../style';
const styles = theme => ({
  skeleton: commonStyle.skeleton,
  upcomingEvent: artistDetail(theme).upcomingEvent,
  upcomingEventContent: artistDetail(theme).upcomingEventContent,
  artistImage: {
    width: 300,
    height: 300,
    marginBottom: 16,
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100vw - 16px)',
      height: 'calc(100vw - 16px)'
    }
  },
  artistSocialPage: {
    width: 180,
    height: 24,
    marginBottom: 8
  },
  artistDetailSkeleton: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  artistInfoContent: {
    paddingLeft: 16,
    boxSizing: 'border-box',
    flex: '0 0 calc(100% - 300px)',
  },
  artistName: {
    width: 200,
    height: 40,
    marginBottom: 12,
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  artistNameMobile: {
    width: 200,
    height: 40,
    marginBottom: 12,
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    }
  }
});

export default styles;