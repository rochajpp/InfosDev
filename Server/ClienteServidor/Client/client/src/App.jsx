import { useState, useEffect } from 'react'

import './App.css'



function App() {
  const [texts, setTexts]  = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function getDataApi(endpoint){
      const response = await fetch("http://localhost:8080/" + endpoint);
      const data = await response.json();
      return data;
    }

    async function init(){
      setTexts(await getDataApi("api/getAllTexts"));
      setCarregando(false);
    }

    function popUp(){

    }
    
    init();
  }, [])

  if(carregando){
    return (
      <>
        <p>Carregando...</p>
      </>
    )
  }

  return (
    <>
      <h1>Notas</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Texto</th>
          </tr>
        </thead>

        <tbody>
          {texts.map((text, key) => (
            <tr key={key}>
              <td>{text.title}</td>
              <td>{text.text}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={popUp()}>Adicionar mais</button>
    </>
  )
}

export default App

