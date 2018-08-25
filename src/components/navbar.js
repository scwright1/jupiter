import React from 'react'

import {Link} from 'gatsby'

import Logo from './logo'

class Navbar extends React.Component {

    render() {

        return(

            <header className="fixed w-100">

                <div className="mw9 center ph5 pt3 pb3 mt2 mb2 dt db-ns">

                    <Logo/>

                </div>

            </header>

        )

    }

}

export default Navbar
