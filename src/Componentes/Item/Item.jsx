import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>
      <img src={img} alt={nombre} className='cardImg' />
      <h3 className='cardTitulo'> {nombre} </h3>
      <p className='cardPrecio'> ${precio}</p>
      <p className='cardTexto'> ID: {id}</p>
      <Link to={`/item/${id}`} className='cardButton'> Ver Detalles </Link>
    </div>
  )
}

export default Item