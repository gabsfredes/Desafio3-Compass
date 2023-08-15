import Card from './RestaurantCard/Card';
import classes from './Restaurants.module.css';

const Restaurants: React.FC = () => {
    return (
        <>
        <section id={classes.restaurants}>
            <div className={classes.title}>
                Restaurants

                <Card />
            </div>
        </section>
        </> 
    );
}

export default Restaurants;