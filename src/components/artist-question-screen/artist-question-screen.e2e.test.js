import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import questions from '../../mocks/questions';
import ArtistQuestionScreen from './artist-question-screen';

Enzyme.configure({adapter: new Adapter()});

it(`submitButton works`, () => {
  const clickHandler = jest.fn();
  const question = questions[2];

  const artistQuestionScreen = shallow(
      <ArtistQuestionScreen
        question={question}
        screenIndex={2}
        onAnswer={clickHandler}
      />
  );

  const answerIndex = 1;

  artistQuestionScreen.find(`form`).simulate(`change`, {
    target: {value: answerIndex},
    preventDefault: () => {}
  });

  const answers = question.answers;
  expect(clickHandler).toHaveBeenCalledWith(answers[answerIndex]);
});
