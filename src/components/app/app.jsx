import React from 'react';
import WelcomeScreen from '../../../src/components/welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';


const App = (props) => {
  const {gameTime, errorCount} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number
};

export default App;
