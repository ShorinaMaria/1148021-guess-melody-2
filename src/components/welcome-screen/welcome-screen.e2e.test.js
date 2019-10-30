import React from 'react';
import WelcomeScreen from "./welcome-screen";
import Enzyme, {shallow} from 'enzyme';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`startButton works`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(
      <WelcomeScreen
        time={10}
        errorCount={3}
        onStartButtonClick={clickHandler}
      />
  );

  const startButton = welcomeScreen.find(`.welcome__button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
