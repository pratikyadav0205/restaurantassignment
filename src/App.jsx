import restaurants from './data/restaurants.js'
import Header from './components/Header.jsx'
import RestaurantList from './components/RestaurantList.jsx'

function App() {
    return (
        <main className="page">
            <Header
                title="Where to eat in Helsinki"
                subtitle={`${restaurants.length} places worth booking a table at.`}
            />
            <RestaurantList restaurants={restaurants} />
        </main>
    )
}

export default App