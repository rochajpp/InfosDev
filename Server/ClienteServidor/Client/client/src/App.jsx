import { useState, useEffect } from 'react'

import './App.css'



function App() {
  const [texts, setTexts]  = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getDataApi(endpoint){
      try{
        const response = await fetch("http://localhost:8080/" + endpoint);
        const data = await response.json();
        return data;
      } catch(err){
        console.log(err);
        setErr(err.toString());
      }
    }

    async function init(){
      setTexts(await getDataApi("api/getAllNotes"));
      setCarregando(false);
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

  if(err != null){
    return(
      <>
        <h2>Erro na conexão com o Servidor</h2>
        <h3>{err}</h3>
        <p>Verifique se o servidor está funcionando corretamente</p>
        <button onClick={() => location.href = "/"}>Tentar novamente</button>
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

      <button>Adicionar mais</button>
    </>
  )
}

export default App

