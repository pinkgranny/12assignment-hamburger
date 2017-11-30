import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>
        <Grid className="header-grid">
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </Grid>

        <label className="hamburger" htmlFor="hamburger">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </label>
        <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

        <div className="menu">
          <a href="http://technigo.io">Technigo</a><br />
          <a href="http://technigo.io">Boot Camp</a><br />
          <a href="http://technigo.io">Stories</a><br />
          <a href="http://technigo.io">About</a>
        </div>
      </header>
    )
  }

}

export default Header
