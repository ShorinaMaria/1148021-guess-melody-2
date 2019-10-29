import React from 'react';
import renderer from 'react-test-renderer';
import questions from '../../mocks/questions';
import GenreQuestionScreen from './genre-question-screen';

it(`GenreQuestionScreen renders correctly`, () => {
  const tree = renderer.create(
      <GenreQuestionScreen
        question={questions[0]}
        screenIndex={2}
        onAnswer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
