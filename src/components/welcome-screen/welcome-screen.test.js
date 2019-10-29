import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from "./welcome-screen";

it(`welcome-screen renders correctly`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        time={5}
        errorCount={3}
        onStartButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
