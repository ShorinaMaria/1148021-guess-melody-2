import React from 'react';
import ArtistQuestionScreen from './artist-question-screen';
import questions from '../../mocks/questions';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

it(`ArtistQuestionScreen renders correctly`, () => {
  const component = mount(
      <ArtistQuestionScreen
        question={questions[2]}
        screenIndex={1}
        onAnswer={() => {}}
      />
  );

  expect(toJson(component)).toMatchSnapshot();
});
