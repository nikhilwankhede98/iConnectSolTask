import React from 'react'
import { connect } from 'react-redux'

const Content = (props) => {
    const { isAuthenticated, loggedIn } = props.auth
    return (
        isAuthenticated ? 
            <div className="welcome-text">
                <h1>Well, hello. Bonjour. Salut</h1>
            </div> : '' 
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Content)

