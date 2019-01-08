import styled from 'styled-components';

const TicketButton = styled.button`
  width: 100%;
  background-color: #141414;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #ffe7ae;
  border: 1px solid #ffe7ae;

  h1 {
    font-size: 1rem;
  }
  &:hover {
    box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
    border: 1px solid #fff;
    h1 {
      color: #fff;
    }
  }
  &:active {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
    border: 1px solid #fff;
    h1 {
      color: #928f8a;
      border: 1px solid #928f8a;
    }
  }
`;

export default TicketButton;
