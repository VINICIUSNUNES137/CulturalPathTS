import './Header.css'

export const Header = () => {
  return (
    <>
      <header>
        <nav className="nav">
          <a className="logo">
            <img className="logo-img" src="https://culturalpath.netlify.app/img/logoCulturalPath.png" alt="" />
          </a>
          <ul className="nav-list">
            <li><a href="/" className="nav-list__animation">Home</a></li>
            <li>
              <a href="/encontros" className="nav-list__animation">Encontros</a>
            </li>
            <li><a href="/parceiro" className="nav-list__animation">Parceiro</a></li>
            <li>
              <a href="/calendario" className="nav-list__animation">Calendário</a>
            </li>
            <li>
              <a href="/voluntario" className="nav-list__animation">Voluntário</a>
            </li>
            <li>
              <a href="/recreacao" className="nav-list__animation">Recreação</a>
            </li>
          </ul>
          <a className="button_doe btn_enable" id="button_doe" href="/doe">DOE</a>
        </nav>
      </header>

    </>
  )
}