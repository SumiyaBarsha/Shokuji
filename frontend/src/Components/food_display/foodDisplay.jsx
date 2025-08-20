// FoodDisplay.jsx - Fixed version
import React, { useContext, useEffect, useState } from 'react';
import './foodDisplay.css';
import { StoreContext } from '../../context/storeContext';
import FoodItem from '../FoodItem/foodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    const [filteredFoods, setFilteredFoods] = useState([]);

    useEffect(() => {
        if (category === "All") {
            setFilteredFoods(food_list);
        } else {
            // Make sure category names match exactly (case-sensitive)
            const filtered = food_list.filter(item => 
                item.category && item.category.toLowerCase() === category.toLowerCase()
            );
            setFilteredFoods(filtered);
        }
    }, [category, food_list]);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes you may like</h2>
            <div className="food-display-list">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((item, index) => (
                        <FoodItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            description={item.description} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))
                ) : (
                    <p className="no-items-message">
                        {category === "All" 
                            ? "No food items available." 
                            : `No ${category} items available.`
                        }
                    </p>
                )}
            </div>
        </div>
    );
}

export default FoodDisplay;