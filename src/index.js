import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app.jsx';
import questions from '../src/mocks/questions.js';
import gameSettings from './mocks/game-settings.js';

const init = (gameQuestions) => {

  ReactDOM.render(
      <App
        errorCount={gameSettings.errorCount}
        gameTime={gameSettings.gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
