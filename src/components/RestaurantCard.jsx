import Badge from './Badge.jsx'
import Rating from './Rating.jsx'

function RestaurantCard({ restaurant }) {
    const { name, image, cuisine, price, rating, address, description } = restaurant

    return (
        <article className="card">
            <img className="card__image" src={image} alt={name} />
            <div className="card__body">
                <div className="card__badges">
                    <Badge label={cuisine} variant="cuisine" />
                    <Badge label={price} variant="price" />
                </div>
                <h2 className="card__title">{name}</h2>
                <Rating value={rating} />
                <p className="card__address">{address}</p>
                <p className="card__description">{description}</p>
            </div>
        </article>
    )
}

export default RestaurantCard