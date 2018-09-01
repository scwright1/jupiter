import React from 'react'
import { Link } from 'gatsby'

import Logo from './logo'
import ResponsiveMenu from './responsive-menu'

class Navbar extends React.Component {

    constructor(props) {

        super(props)

        this.state = {menuOpen: false}

        this.setMenuState = this.setMenuState.bind(this)

        this.toggleMenu = this.toggleMenu.bind(this)

    }

    setMenuState = () => {

        if(this.state.menuOpen) {

            this.setState({menuOpen: false})

        } else {

            this.setState({menuOpen: true})

        }

    }

    toggleMenu = (menuState) => {

        this.setState({menuOpen: menuState})

    }


    render() {

        return(

            <header className="fl w-100 h4 ph6-l ph5-m ph4-ns fixed z-max">

                <div className="mw9 center pv4 mt3 ph4">

                    <Logo/>

                    <div id="menu-button" className="hamburger fr dib dn-l" onClick={this.setMenuState}>

                        <div className="bar-inner upper"></div>

                        <div className="bar-inner mid"></div>

                        <div className="bar-inner lower"></div>

                    </div>

                    <div id="desktop-menu" className="f6 lh-solid tracked-mega pv2 fr dn dib-l gilroy-medium">

                        <Link to="#" className="link strike white ttu mv4 mh3 disabled-link">about</Link>

                        <Link to="#" className="link strike white ttu mv4 mh3 disabled-link">projects</Link>

                        <Link to="#" className="link strike white ttu mv4 mh3 disabled-link">blog</Link>

                        <Link to="#" className="link strike white ttu mv4 ml3 disabled-link">reach me</Link>

                    </div>

                </div>

                <ResponsiveMenu active={this.state.menuOpen} onMenuChange={this.toggleMenu}/>

            </header>

        )

    }

}

export default Navbar
