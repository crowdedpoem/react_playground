import React from 'react'

import "./SideBar.css"
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export const SideBar = () => {
    
    return(
        <nav className='side-bar'> 
            
            <ul>
            <h3>Discover</h3>
              
                    <CustomLink to ='/'>Your Feed</CustomLink>
              
                <li>Most Upvoted</li>
                <li>Best Discussions</li>
            </ul>
            
            <ul>
            <h3>Manage</h3>
                <li>Bookmarks</li>
             
                    <CustomLink  to='/profile'>Profile</CustomLink>
            <h3>Contribute</h3>
                <CustomLink to='/add-post'>Add Post</CustomLink>
                    
            </ul>

        </nav>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}> {children}</Link>
        </li>
    )
}