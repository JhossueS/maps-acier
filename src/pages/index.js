import '../styles/home-page.css'

const App = () => {
  return (
    <div className="home">
      <div className="home--container__inputs">
        <label>
          <span>Ratio del marcador</span>
          <input type="number" placeholder="2000" />
        </label>
        <input type="button" value="Aceptar" />
      </div>
    </div>
  )
}

export default App
