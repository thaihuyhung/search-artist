import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import defaultImage from '../../assets/default-image.jpg';

class CustomImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fromJS({
        loaded: false,
        backgroundImage: ''
      })
    }
  }

  shouldComponentUpdate(nextProps, { data: nextData }) {
    const { data } = this.state;
    return data.get('loaded') !== nextData.get('loaded') ||
      data.get('backgroundImage') !== nextData.get('backgroundImage') ||
      this.props.src !== nextProps.src;
  }

  componentDidMount() {
    /**
     * Improving UX by display skeleton loading when image is loading.
     * In case the image url is broken, we show a default image
     */
    const { src, defaultImage } = this.props;
    let image = new Image();
    image.onload = () => {
      this.setState(({ data }) => ({
        data: data
          .update('loaded', () => true)
          .update('backgroundImage', () => encodeURI(src))
      }));
    }
    image.onerror = () => {
      this.setState(({ data }) => ({
        data: data
          .update('loaded', () => true)
          .update('backgroundImage', () => defaultImage)
      }));
    }
    image.src = src;
  }


  render() {
    const { className, classes, alt } = this.props;
    const { data } = this.state;
    const loaded = data.get('loaded');
    const backgroundImage = data.get('backgroundImage');
    return (
      <div 
        className={classNames(className, classes.customImage, { [classes.skeleton]: !loaded })}
      >
        {
          backgroundImage && <img src={backgroundImage} alt={alt} />
        }
      </div>
    );
  }
}

CustomImage.defaultProps = {
  defaultImage: defaultImage
}

CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  defaultImage: PropTypes.string,
  alt: PropTypes.string,
};

export default withStyles(styles)(CustomImage);