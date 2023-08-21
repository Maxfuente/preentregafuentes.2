import { Link,} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
        <Link to='/'>
            <h1 style={{ color: 'red' }}>Bienvenidos a <small style={{ color: 'red' }}>___ElectroMax</small></h1>
            </Link>
            <div>
                
            <Link to='/category/Discos SSD'> <button type="button" class="btn btn-primary">Discos SSD</button></Link>
            <Link to ='/category/Memorias'> <button type="button" class="btn btn-danger">Memoria Ram</button></Link>
            <Link to ='/category/Audifonos'><button type="button" class="btn btn-primary">Audifonos</button></Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar