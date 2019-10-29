import React from 'react';
import WelcomeScreen from '../../../src/components/welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';
import GenreQuestionScreen, {GenreQuestion} from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen, {ArtistQuestion} from '../artist-question-screen/artist-question-screen.jsx';


class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    if (currentQuestion.type === `genre`) {
      return <GenreQuestionScreen
        key={`genre-screen-${question}`}
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    } else if (currentQuestion.type === `artist`) {
      return <ArtistQuestionScreen
        key={`artist-screen-${question}`}
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  static checkAnswer(answers) {
    // todo
    return answers;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };

    this.handleUserAnswer = this.handleUserAnswer.bind(this);
  }

  handleUserAnswer(answers) {
    const {
      questions,
    } = this.props;
    App.checkAnswer(answers); // используем answers, чтобы линтер не ругался на unused переменную
    this.setState((prevState) => {
      const nextIndex = prevState.question + 1;
      const isEnd = nextIndex >= questions.length;

      return {
        ...prevState,
        question: !isEnd ? nextIndex : -1,
      };
    });
  }

  render() {
    const {question} = this.state;
    return App.getScreen(question, this.props, this.handleUserAnswer);
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.oneOfType([
    ArtistQuestion,
    GenreQuestion
  ]))
};

export default App;
