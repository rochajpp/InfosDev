import { useState, useEffect } from 'react'

import './App.css'

import PopUp from "./Shared/PopUp"

function App() {
  const [texts, setTexts]  = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [err, setErr] = useState(null);
  const [popup, setPopup] = useState(false);

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
      <PopUp state={popup}>
        <form action="http://localhost:8080/api/saveNote" method="POST" className="box">
          <h1>Nova nota</h1>

          <div className="input-area">
            <label>Título: </label>
            <input name="title" placeholder="Insira o título da nota" required />
          </div>

          <div className="input-area">
            <label>Texto:</label>
            <textarea name="text" placeholder="Insira o texto da nota" required></textarea>
          </div>

          <button>Salvar</button>
        </form>
      </PopUp>

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

      <button onClick={() => setPopup(true)}>Adicionar mais</button>
    </>
  )
}

export default App

