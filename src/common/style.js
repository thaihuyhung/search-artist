export default {
  '@keyframes skeleton-animation': {
    '0%': {
      backgroundPosition: '-200px 0'
    },
    '100%': {
      backgroundPosition: 'calc(200px + 100%) 0'
    }
  },
  skeleton: {
    animation: 'skeleton-animation 1.2s ease-in-out infinite',
    backgroundColor: '#EEE',
    backgroundImage: 'linear-gradient(90deg, #EEE, #F5F5F5, #EEE)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200px 100%'
  }
}