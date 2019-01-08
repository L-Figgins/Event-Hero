import styled from 'styled-components';

const Photo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  flex-wrap: wrap;
  padding: 2rem;
  height: 25rem;
  width: 25rem;

  border: 1px solid #928f8a;
  background-image: url(${props => props.source});
  background-size: cover;
  background-position: center center;
  margin: 1rem;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.5);
  transition: ease 0.25s;

  &:hover {
    transition: ease 0.25s;
    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.8);
    opacity: 0.5;
  }
`;

export default Photo;
