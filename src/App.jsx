import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('')  // o Set muda o valor da varialvel e o email e o nome da variavel
  const [senha, setSenha] = useState('')  // mesma coisa que o de cima 

  const mudancaDeEmail = (e) => {
    setEmail(e.target.value)
  } // para mudar os valores 

  const mudancaDeSenha = (e) => {
    setSenha(e.target.value)
  } // mudar os valores 

  const enviarForms = (e) => {
    e.preventDefault()
    console.log(`Email: ${email}, Senha: ${senha}`)
  } //envia as variaveis para o console  quando clicado no botao submit  la no form que puxa essa variavel

  return (
    <>


      <div className='Top'>

        <div className='Titulo'>
          <h1> Formulário </h1>
        </div>

        <form onSubmit={enviarForms}> 

          <div className='div_3'>
            <div className='div_label'>
              <label htmlFor=''>Nome</label>
              <input type='text' placeholder='Name'></input>
            </div>


            <div className='div_label'>
              <label htmlFor='Email'>Emai</label>
              <input id='email'
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => mudancaDeEmail(e)}></input>
            </div>

            <div className='div_label'>
              <label htmlFor='Senha'>Senha</label>
              <input
                id='password'
                type='password'
                placeholder='password'
                value={senha}
                onChange={(e) => mudancaDeSenha(e)}></input>
            </div>


            <div className='div_label'>
              <label htmlFor='Email'>Idade</label>
              <input type='date' placeholder='Idade'></input>
            </div>

            <div className='div_label'>
              <label htmlFor=''>Telefone</label>
              <input type='number' placeholder='Telefone'></input>
            </div>

          </div>

          <div className='div_label'>
            <label htmlFor=''>Instagram</label>
            <input type='text' placeholder='Instagram'></input>
          </div>

          <div className='div_label'>
            <label htmlFor=''>Github</label>
            <input type='text' placeholder='Github'></input>
          </div>

          <div className='div_label'>
            <label htmlFor=''>Pensamento</label>
            <input type='text' placeholder='Pensamento'></input>
          </div>

          <div className='div_label'>
            <label htmlFor=''>Probleminha</label>
            <input type='text' placeholder='Probleminha'></input>
          </div>

          <div className='div_label'>
            <label htmlFor=''>Última Serie</label>
            <input type='text' placeholder='Última Serie'></input>
          </div>

          <div className='div_label'>
            <label htmlFor=''>Último Jogo</label>
            <input type='text' placeholder='Último Jogo'></input>
          </div>

          <div className='div_label'>
            <label htmlFor=''>Música</label>
            <input type='text' placeholder='Música'></input>
          </div>

          <div className='div_label'>
            <label htmlFor='Genero'>Genero</label>
            <select name="Genero" id="Genero">
              <option value="Feminino">Feminino</option>
              <option value="Masculino" selected>Masculino</option>
            </select>
          </div>

          <div className='div_label'>
            <label htmlFor=''>Habilidade Especial</label>
            <input type='text' placeholder='Habilidade Especial'></input>
          </div>

          <div className='div_label'>
            <label htmlFor=''>Poder Especial</label>
            <input type='text' placeholder='Poder Especial'></input>
          </div>

          <div className='div_label'>
            <label htmlFor=''>Time que torce</label>
            <input type='text' placeholder='Time que torce'></input>

          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>

    </>
  )
}

export default App
