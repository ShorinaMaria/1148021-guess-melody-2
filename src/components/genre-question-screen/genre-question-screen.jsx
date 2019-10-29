import React from 'react';
import PropTypes from 'prop-types';

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialState() {
    return {answers: this.props.question.answers.map(() => false)};
  }

  handleAnswerChange(event, answerIndex) {
    const answers = this.state.answers.map((el, i) => {
      return i === answerIndex ? event.target.checked : el;
    });
    this.setState({answers});
  }

  handleSubmit(event) {
    event.preventDefault();
    const answers = this.state.answers;
    const userAnswerIndexes = Object.keys(answers).filter((el) => answers[el]);
    this.props.onAnswer(userAnswerIndexes.map((i) => this.props.question.answers[i]));
    this.setState(this.getInitialState());
  }

  render() {
    const {question, screenIndex} = this.props;
    const {
      answers,
      genre,
    } = question;

    return (
      <section className="game game--genre">
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
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" name="testik" onSubmit={this.handleSubmit}>
            {answers.map((it, i) => {
              return (
                <div key={`${screenIndex}-answer-${i}`} className="track">
                  <button className="track__button track__button--play" type="button" />
                  <div className="track__status">
                    <audio />
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden"
                      type="checkbox"
                      checked={this.state.answers[i]}
                      onChange={(event) => this.handleAnswerChange(event, i)}
                      name={`answer-${i}`}
                      value={`answer-${i}`}
                      id={`answer-${i}`} />
                    <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                  </div>
                </div>
              );
            })}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

const genres = [`rock`, `jazz`, `folk`, `blues`, `pop`];

export const GenreQuestion = PropTypes.shape({
  type: PropTypes.oneOf([`genre`]),
  genre: PropTypes.oneOf(genres),
  answers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    genre: PropTypes.oneOf(genres)
  }))
});

GenreQuestionScreen.propTypes = {
  question: GenreQuestion,
  screenIndex: PropTypes.number,
  onAnswer: PropTypes.func
};

export default GenreQuestionScreen;
