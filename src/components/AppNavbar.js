import React, {Component, Fragment} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout'
import LoginModal from './auth/LoginModal'
import laptop from './images/laptop.jpeg'

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: Proptypes.object.isRequired
    }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }) 
    }

    render() {
        const { isAuthenticated, user } = this.props.auth

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className= "navbar-text mr-1">
                        <strong>Welcom {user ? ` ${user.name}` : '' } ! </strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        )

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        )

        return(
            <>
                <Navbar color="dark" dark expand="sm" className= "mb-5">
                    <Container>
                        <NavbarBrand href="/">
                        <span>
                            <i className="fa fa-code fa-lg my-2 mr-2"></i>
                        </span>
                            iConnect Solution
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                               { isAuthenticated ? authLinks : guestLinks } 
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar)