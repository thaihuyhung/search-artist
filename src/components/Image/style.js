import commonStyle from '../../common/style';

export default Object.assign({
  customImage: {
    backgroundSize: 'contain',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c7cad9',
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
    }
  }
}, commonStyle);