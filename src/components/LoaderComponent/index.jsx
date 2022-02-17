import React from 'react';
import Loader from 'react-js-loader';
import styled from 'styled-components';

const StyledLoader = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-accent-color);
`;

const LoaderComponent = function LoaderComponent() {
  return (
    <StyledLoader>
      <Loader
        type="bubble-top"
        bgColor={'#FFFFFF'}
        color={'#FFFFFF'}
        size={150}
      />
    </StyledLoader>
  );
};

export default LoaderComponent;
