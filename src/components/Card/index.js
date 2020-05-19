import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Star } from '@styled-icons/evil/Star';

const StyledButton = styled.button`
  width: 100%;
  text-align: inherit;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 1em;
  outline: none;
  cursor: pointer;
  background-color: #FFF;
`;
const Container = styled.div`
  display: flex;
  border: solid grey 1px;
  padding: 1em;
  min-height: 60px;
`;
const Left = styled.div`
  flex-grow: 1;
`;
const Right = styled.div`
  width: auto;
  align-self: flex-end;
`;

const Card = ({ title, year, imdbID, onClick, isselected }) => (
  <StyledButton onClick={onClick(imdbID)}>
    <Container>
      <Left>{title}</Left>
      <Right>
        {isselected && <Star />}
        <div>{year}</div>
      </Right>
    </Container>
  </StyledButton>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  isselected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  isselected: false,
};

export default Card;
