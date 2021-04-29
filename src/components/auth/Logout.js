import React, { Component, Fragment } from 'react'
import { logout } from '../../actions/authActions'
import { connect } from 'react-redux'
import { NavLink } from 'reactstrap'
import PropTypes from 'prop-types'

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <Fragment>
                {/* <NavLink onClick={this.props.logout} href="#">
                    Logout
                </NavLink> */}

                <ul className ="nav-area my-2">
                    <li>
                        <a onClick= {this.props.logout} href="#" className ="nav-links">
                            Logout
                        </a>
                    </li>
                </ul>
            </Fragment>
        )
    }
}

export default connect(
    null, 
    { logout }
)(Logout)
