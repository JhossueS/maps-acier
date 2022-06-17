import './index.css'

const Header = () => {
  return (
    <header>
      <div className="header--container">
        <div className="header--name">
          <h1>MAPS ACIERTALA</h1>
        </div>
        <div className="header--search">
          <div className="header--search__container">
            <input type="text" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
