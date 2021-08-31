import { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='header'>
      <h1 style={{ color }}>ReactHooks</h1>
      <button type='button' onClick={handleClick}>
        {darkMode ? 'Dark' : 'Light'}
      </button>
      <button type='button' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Dark 2' : 'Light 2'}
      </button>
    </div>
  );
};

export default Header;
