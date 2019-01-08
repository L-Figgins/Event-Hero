/**
 *
 * Photos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import PhotosWrapper from './PhotosWrapper';
import Photo from './Photo';

function Photos({ photos }) {
  const pictures = photos.data.map(photo => (
    <Photo key={photo.id} {...photo} />
  ));

  return <PhotosWrapper>{pictures}</PhotosWrapper>;
}

Photos.propTypes = {
  photos: PropTypes.object.isRequired,
};

export default Photos;
