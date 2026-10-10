import RestaurantCard from './RestaurantCard.jsx'

function RestaurantList({ restaurants }) {
    return (
        <section className="grid">
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </section>
    )
}

export default RestaurantList