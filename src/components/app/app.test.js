import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`app renders correctly`, () => {
  const tree = renderer.create(
      <App gameTime={10} errorCount={4}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
