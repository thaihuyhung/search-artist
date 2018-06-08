export default {
  pageContainer: {
    margin: '64px auto 0',
    maxWidth: 1040,
    boxSizing: 'border-box',
    background: '#fff',
    minHeight: 'calc(100vh - 64px - 100px)',
    padding: 24,
  },
  '@keyframes skeleton-animation': {
    '0%': {
      backgroundPosition: '-200px 0'
    },
    '100%': {
      backgroundPosition: 'calc(200px + 100%) 0'
    }
  }
}