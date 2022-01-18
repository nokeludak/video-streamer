import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item" style={{color:'red', fontSize:'20px'}}>
                Streamer
            </Link>
            <div className="right menu">
                <Link to="/" className="item" style={{color:'red', fontSize:'20px'}}>
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header

