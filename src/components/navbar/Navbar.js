import "./Navbar.css"
import { useContext } from "react"
import { Context } from "../../Context"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const { cart } = useContext(Context)
    const len = cart.length

    return (
        <nav>
            <Link to="/"><h1 id="logo">MyMart</h1></Link>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /> <span>({len})</span></Link>
        </nav>
    )
}