import React from 'react';
import { NavLink } from "react-router-dom";

function Album({ albums }) {

    return (
        <div className="AlbumsBoard">
            <h2>List of Albums</h2>
            <div className="Albums">
                {albums.map((item, index) => {
                    return (
                        <NavLink className='Album' activeClassName='active' key={index} to={`albums/${item.id}`}>
                            <div>{item.title}</div>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}
export default Album;