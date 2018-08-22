import React from 'react'

import Logo from './logo'

class Navbar extends React.Component {

    render() {

        return(

            <header className="fixed bg-white w-100">

                <div className="mw9 center ph5 pt3 pb3 mt2 mb2">

                    <Logo/>

                </div>

            </header>

        )

    }

}

export default Navbar
