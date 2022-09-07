import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Circle } from 'styled-spinkit';

const NotApplicable = 'N/A';
const Container = styled.article`
  padding: 1em;
  position: relative;
  @media (min-width: 1024px), { 
    flex-basis: 66.66%; 
    display: flex;
    border-left: solid grey 1px;
  }
`;
const Left = styled.div`
  flex-grow: 1; 
`;
const Right = styled.div`
  flex-grow: 1;
`;
const Header = styled.h1`
  margin-bottom: 0;
`;
const Label = styled.span`
  font-weight: bold;
`;

const Loading = styled.div`
  background-color: #FEFEFE;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Details = ({ title, genre, plot, director, actors, language, duration, poster, loading }) => (
  <Container>
    { loading && (
    <Loading>
      <Circle width={60} />
    </Loading>
    )}
    <Left>
      <Header>{title}</Header>
      <sub>
        {genre}
      </sub>
      { plot && <p>{`Movie plot - ${plot}`}</p>}
      { language && language !== NotApplicable && (
        <p>
          <Label>{'Language: '}</Label>
          <span>{language}</span>
        </p>
      )}
      { director && director !== NotApplicable && (
        <p>
          <Label>{'Director: '}</Label>
          <span>{director}</span>
        </p>
      )}
      { actors && actors !== NotApplicable && (
        <p>
          <Label>{'Actors: '}</Label>
          <span>{actors}</span>
        </p>
      )}
      { duration && duration !== NotApplicable && (
        <p>
          <Label>{'Duration: '}</Label>
          <span>{duration}</span>
        </p>
      )}
    </Left>
    <Right>
      <img src={poster} alt={title} />
    </Right>
  </Container>
);

Details.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string,
  language: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,

};

Details.defaultProps = {
  actors: '',
};

export default Details;
