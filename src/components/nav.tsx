/*
normally I wouldnt import React because its referenced globally, however due to how I like to have my 
project structured, this is a necessary evil.
*/
import React from 'react'; 
import '../styles/nav.css'

function Nav() {
  return (
  <>
    <nav className="top-navbar">
        <div className="site-name">Realmz</div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
    </nav>
  </>
  )
}

export default Nav
