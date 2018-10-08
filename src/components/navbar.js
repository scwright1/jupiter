import React from 'react'
import { Link } from 'gatsby'

import { FiXCircle, FiTwitter, FiGithub } from 'react-icons/fi'

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

    _handleScroll(ev) {
        console.log("scrolling");
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this._handleScroll);
    }

    componentWillUnmount = () => {
        window.addEventListener('scroll', this._handleScroll)
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

                        <Link to="#blog" className="link strike disabled-link white ttu mv4 mh3">blog</Link>

                        <a href="mailto:hello@stephencwright.co.uk" className="link white ttu mv4 ml3 dim no-underline">reach me</a>

                        <a href="https://twitter.com/ste_wr" className="link white ttu mv4 ml2 dim no-underline"><FiTwitter/></a>

                        <a href="https://github.com/scwright1" className="link white ttu mv4 ml2 dim no-underline"><FiGithub/></a>

                    </div>

                </div>

                <ResponsiveMenu active={this.state.menuOpen} onMenuChange={this.toggleMenu}/>

            </header>

        )

    }

}

export default Navbar
