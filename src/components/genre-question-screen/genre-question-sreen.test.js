import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import questions from '../../mocks/questions';
import GenreQuestionScreen from './genre-question-screen';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

it(`GenreQuestionScreen renders correctly`, () => {
  const component = mount(
      <GenreQuestionScreen
        question={questions[0]}
        screenIndex={2}
        onAnswer={() => {}}
      />
  );

  expect(toJson(component)).toMatchSnapshot();
});
