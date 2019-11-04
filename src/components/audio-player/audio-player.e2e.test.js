import React from 'react';
import Enzyme, {mount} from 'enzyme';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import questions from '../../mocks/questions';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

it(`AudioPlayer works`, () => {
  const clickHandler = jest.fn();
  const audioFile = questions[0].answers[0].src;

  const audioPlayer = mount(
      <AudioPlayer
        isPlaying={false}
        onPlayButtonClick={clickHandler}
        src={audioFile}
      />
  );

  audioPlayer.setState({'isLoading': false});

  audioPlayer.find(`.track__button`).simulate(`click`);
  expect(audioPlayer.state(`isPlaying`)).toBe(true);

  audioPlayer.find(`.track__button`).simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(2);
  expect(audioPlayer.state(`isPlaying`)).toBe(false);

});
