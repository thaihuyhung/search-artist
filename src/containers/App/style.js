const styles = theme => ({
  pageContainer: {
    margin: '64px auto 0',
    maxWidth: 1040,
    boxSizing: 'border-box',
    background: '#fff',
    minHeight: 'calc(100vh - 64px - 100px)',
    padding: 24,
    [theme.breakpoints.down('xs')]: {
      padding: 8,
      margin: '56px auto 0',
      minHeight: 'calc(100vh - 56px - 100px)',
    }
  }
});

export default styles;