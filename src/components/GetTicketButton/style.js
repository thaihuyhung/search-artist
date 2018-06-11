export default theme => ({
  getTicketButton: {
    appearance: 'none',
    height: '34px',
    border: '1px solid #ffc500',
    fontSize: '14px',
    position: 'relative',
    padding: '0 16px',
    background: '#FFF',
    zIndex: '0',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 1, 1)',
    '& a': {
      color: '#ffc500',
      textDecoration: 'none'
    },
    '&:hover': {
      cursor: 'pointer',
      background: '#ffc500',
      '& a': {
        color: '#fff',
      }
    },
    '&:before': {
      content: '""',
      width: '9px',
      height: '16px',
      borderTopRightRadius: '16px',
      borderBottomRightRadius: '16px',
      border: '1px solid #ffc500',
      borderLeftColor: '#fff',
      background: '#ffffff',
      top: '8px',
      position: 'absolute',
      left: '-2px',
      zIndex: '1',
      boxSizing: 'border-box',
      [theme.breakpoints.down('xs')]: {
        background: '#f8f8f8',
        borderLeftColor: '#f8f8f8',
      }
    },
    '&:after': {
      content: '""',
      width: '9px',
      height: '16px',
      borderTopLeftRadius: '16px',
      borderBottomLeftRadius: '16px',
      border: '1px solid #ffc500',
      borderRightColor: '#fff',
      background: '#ffffff',
      top: '8px',
      position: 'absolute',
      right: '-2px',
      zIndex: '1',
      boxSizing: 'border-box',
      [theme.breakpoints.down('xs')]: {
        background: '#f8f8f8',
        borderRightColor: '#f8f8f8',
      }
    }
  }
})