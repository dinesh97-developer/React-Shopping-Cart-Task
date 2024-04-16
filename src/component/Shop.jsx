import {useState} from 'react'
import React from 'react'

export function Shop() {

    let [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    }
  return <>
  <li className="nav-item dropdown">
    <a className={`nav-link dropdown-toggle ${open ? 'show': ''}`} id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" onClick={toggleDropdown} aria-expanded={open ? 'true': 'false'}>Shop</a>

        <ul className={`dropdown-menu ${open ? 'show': ''}`} aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#!">All Products</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#!">Popular Items</a></li>
            <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
        </ul>
    </li>
  </>
}


