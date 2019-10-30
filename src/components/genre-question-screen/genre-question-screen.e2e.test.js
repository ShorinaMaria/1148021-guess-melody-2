import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen';
import questions from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

it(`submitButton works`, () => {
  const clickHandler = jest.fn();
  const question = questions[0];

  const genreQuestionScreen = shallow(
      <GenreQuestionScreen
        question={question}
        screenIndex={2}
        onAnswer={clickHandler}
      />
  );

  const answer0 = genreQuestionScreen.find(`#answer-0`);
  answer0.simulate(`change`, {target: {checked: true}});

  const answer2 = genreQuestionScreen.find(`#answer-2`);
  answer2.simulate(`change`, {target: {checked: true}});

  genreQuestionScreen.find(`form`).simulate(`submit`, {
    preventDefault: () => {}
  });

  const answers = question.answers;
  expect(clickHandler).toHaveBeenCalledWith([answers[0], answers[2]]);
});
