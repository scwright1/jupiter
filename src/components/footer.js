import React from 'react'

import { Link } from 'gatsby'

import { FiInbox, FiTwitter, FiGithub, FiCode, FiLinkedin } from 'react-icons/fi'

class Footer extends React.Component {
    render() {

        return (

            <div className="flex justify-center items-center w100 bt b--near-white pv3">

                <div class="dib">

                    <a href="mailto:hello@stephencwright.co.uk" className="di link no-underline col-dark ph2"><FiInbox/></a>

                    <a href="https://twitter.com/ste_wr" className="di link no-underline col-dark ph2"><FiTwitter/></a>

                    <a href="https://github.com/scwright1" className="di link no-underline col-dark ph2"><FiGithub/></a>

                    <a href="https://stackoverflow.com/users/1711816/stephen-wright" className="di link no-underline col-dark ph2"><FiCode/></a>

                    <a href="https://www.linkedin.com/in/stephen-wright-640172b8" className="di link no-underline col-dark ph2"><FiLinkedin/></a>

                </div>

            </div>

        )

    }
}

export default Footer
