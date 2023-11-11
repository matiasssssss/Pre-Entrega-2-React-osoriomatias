import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='detailItem'>
            <h2 className='detailTitulo'> {nombre} </h2>
            <img src={img} alt={nombre} className='detailImg' />
            <p className='detailPrecio'> ${precio}</p>
            <p className='detailTexto'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id incidunt corrupti quod earum eaque alias nam culpa accusantium, iure quam! Eos ducimus laborum nulla ratione culpa. Quo delectus eligendi officia.</p>
            <p className='detailid'> ID: {id}</p>

        </div>
    )
}

export default ItemDetail