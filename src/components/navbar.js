import React from 'react'
import { Link } from 'gatsby'

import Logo from './logo'
import ResponsiveMenu from './responsive-menu'

class Navbar extends React.Component {

    render() {

        return(

            <header className="fl w-100 h4 ph6-l ph5-m ph4-ns fixed z-999">

                <div className="mw9 center pv4 mt3 ph4">

                    <Logo/>

                    <div id="menu-button" className="hamburger fr dib dn-l">

                        <div className="bar-inner upper"></div>

                        <div className="bar-inner mid"></div>

                        <div className="bar-inner lower"></div>

                    </div>

                    <div id="desktop-menu" className="f5 lh-solid tracked-mega pv2 fr dn dib-l gilroy-medium">

                        <Link to="#" className="link strike white ttu mv4 mh3 dim">about</Link>

                        <Link to="#" className="link strike white ttu mv4 mh3 dim">projects</Link>

                        <Link to="#" className="link strike white ttu mv4 mh3 dim">blog</Link>

                        <Link to="#" className="link strike white ttu mv4 ml3 dim">reach me</Link>

                    </div>

                    <ResponsiveMenu/>

                </div>

            </header>

        )

    }

}

export default Navbar
