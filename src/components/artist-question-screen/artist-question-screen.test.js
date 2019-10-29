import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';
import questions from '../../mocks/questions';

it(`ArtistQuestionScreen renders correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={questions[2]}
        screenIndex={1}
        onAnswer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
