import React from 'react'
import classNames from 'classnames'

class ResponsiveMenu extends React.Component {

    constructor(props) {

        super(props)

        this.state = {active: true}

    }

    render() {

        let propClass = classNames('something', {active: this.state.active});

        return(

            <div id="responsive-menu" className={propClass}>

                <h1>Hello</h1>

            </div>

        )

    }

}

export default ResponsiveMenu
