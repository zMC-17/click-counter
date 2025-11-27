import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };


  return (
    <div className="App">
      <header className="App-header">
        {/* Заголовок приложения */}
        <h1>Счётчик кликов</h1>

        {/* Отображение текущего значения счётчика */}
        <div className="counter-value">
          <h2>{count}</h2>
        </div>

        {/* Контейнер для кнопок */}
        <div className="button-container">
          {/* Кнопка для уменьшения */}
          <button onClick={decrement} className="btn btn-decrement">
            -
          </button>

          {/* Кнопка для сброса */}
          <button onClick={reset} className="btn btn-reset">
            Сбросить
          </button>

          {/* Кнопка для увеличения */}
          <button onClick={increment} className="btn btn-increment">
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;