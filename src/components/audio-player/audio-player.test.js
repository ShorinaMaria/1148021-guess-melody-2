import React from 'react';
import questions from '../../mocks/questions';
import AudioPlayer from './audio-player';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

it(`AudioPlayer renders correctly`, () => {
  const audioFile = questions[0].answers[0].src;
  const component = mount(
      <AudioPlayer
        isPlaying={false}
        onPlayButtonClick={()=>{}}
        src={audioFile}
      />
  );

  expect(toJson(component)).toMatchSnapshot();
});
