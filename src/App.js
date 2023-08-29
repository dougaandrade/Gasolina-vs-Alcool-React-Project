import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { calculateBestOption } from './utils/calculateHandle.js'

function App() {

  const [alcoolInput, setAlcoolInput] = useState()
  const [gasolinaInput, setGasolinaInput] = useState()
  const [info, setInfo] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gasolina vs Álcool</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <form action="" onSubmit={(event) => {
          calculateBestOption(event, alcoolInput, gasolinaInput, setInfo)
        }}>
          <div className='container-input'>
            <label className='title-label'>Preço da Gasolina/L</label>
            <input className='input-dev'
              type='number'
              placeholder='Insira o Preço da Gasolina'
              min="1"
              step="0.01"
              required
              value={gasolinaInput}
              onChange={(event) => setGasolinaInput(Number(event.target.value))}
            ></input>
            <label className='title-label'>Preço da Álcool/L</label>
            <input className='input-dev'
              type='number'
              placeholder='Insira o Preço da Alcool'
              min="1"
              step="0.01"
              required
              value={alcoolInput}
              onChange={(event) => setAlcoolInput(Number(event.target.value))}
            ></input>
          </div>
          <div className='container-button'>
            <button type='submit'>Calcular</button>
          </div>
        </form>
        <footer>
          <div className='resultado-container'>
            {info && Object.keys(info).length > 0 && (
              <section className="resultado">
                <h2 className="resultado-title">
                  {info.title}
                </h2>
                <span>Álcool {info.alcool}</span>
                <span>Gasolina {info.gasolina}</span>
              </section>
            )}
          </div>
        </footer>
      </header>
    </div>

  );
}

export default App;
