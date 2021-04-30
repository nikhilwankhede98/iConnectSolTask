import React, {useState, useEffect, Fragment} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Alert,
    Container
} from 'reactstrap'
import { connect } from 'react-redux'
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout'
import LoginModal from './auth/LoginModal'

const AppNavbar = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(true)

    const { isAuthenticated, user, loggedIn } = props.auth
    
    useEffect(() => {
        setVisible(true)
    }, [isAuthenticated])
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const alertToggle = () => {
        setVisible(!visible)
    }

    const authLinks = (
        <Fragment>
            <NavItem>
                <span className= "navbar-text mr-1">
                    <strong> Welcome {user ? ` ${user.name}` : '' } </strong>
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
            <Navbar color="dark" dark expand="sm" className= "mb-0">
                <Container>
                    <NavbarBrand href="/">
                    <span>
                        <i className="fa fa-code fa-lg my-2 mr-2"></i>
                    </span>
                        iConnect Solution
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            { isAuthenticated ? authLinks : guestLinks }
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            {isAuthenticated && loggedIn &&
                <Container>
                    <Alert color = "success" isOpen = {visible} toggle = {alertToggle}>
                        Login Successful!
                    </Alert>
                </Container>
            }
        </>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar)