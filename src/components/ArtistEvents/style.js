export default theme => ({
  artistEvents: {
    position: 'relative',
  },
  filterWrapper: {
    marginBottom: 32,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 16
    }
  },
  eventFilter: {
    flex: '0 0 calc(50% - 32px)',
    [theme.breakpoints.down('xs')]: {
      flex: '0 0 calc(50% - 16px)',
    }
  },
  messageBlock: {}
})