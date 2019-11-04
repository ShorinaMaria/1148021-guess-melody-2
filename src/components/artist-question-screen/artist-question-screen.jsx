import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class ArtistQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {question, screenIndex, onAnswer} = this.props;
    const {isPlaying} = this.state;
    const {answers, song} = question;

    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <div className="timer__value">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <AudioPlayer
              isPlaying={isPlaying}
              onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
              src={song.src}
            />
          </div>

          <form className="game__artist" onChange={(event) => {
            onAnswer(answers[event.target.value]);
          }}>
            {answers.map((it, i) => {
              return (
                <div key={`${screenIndex}-answer-${i}`} className="artist">
                  <input className="artist__input visually-hidden"
                    type="radio"
                    name="answer"
                    value={i}
                    id={`answer-${i}`} />
                  <label className="artist__name" htmlFor={`answer-${i}`}>
                    <img className="artist__picture" src={it.picture} alt={it.artist} />
                    {it.artist}
                  </label>
                </div>
              );
            })}
          </form>
        </section>
      </section>
    );
  }
}

export const ArtistQuestion = PropTypes.shape({
  type: PropTypes.oneOf([`artist`]),
  song: PropTypes.shape({
    artist: PropTypes.string,
    src: PropTypes.string
  }),
  answers: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string,
    artist: PropTypes.string
  }))
});

ArtistQuestionScreen.propTypes = {
  question: ArtistQuestion,
  screenIndex: PropTypes.number,
  onAnswer: PropTypes.func
};

export default ArtistQuestionScreen;
