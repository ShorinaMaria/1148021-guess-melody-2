import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app.jsx';

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
      />,
      document.querySelector(`#root`)
  );
};

init();
