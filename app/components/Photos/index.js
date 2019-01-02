/**
 *
 * Photos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(22, 22, 22);
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Photo = styled.div`
  height: 550px;
  width: 550px;
  border: 1px solid green;
  background-image: url(${props => props.source});
  background-size: cover;
  background-position: center center;
`;

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
