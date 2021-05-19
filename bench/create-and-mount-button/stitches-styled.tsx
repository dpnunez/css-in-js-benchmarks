import React, { Profiler } from 'react';
import { TestRunner } from '../TestRunner';
import { styled } from '../utils/stitches-styled.config';

const Test = () => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  const Button = styled('button', {
    boxSizing: 'border-box',
    variants: {
      color: {
        red: {
          color: 'red',
        },
        blue: {
          color: 'blue',
        },
      },
    },
  });

  return <Button>testing</Button>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
