import { useContext } from 'react'

import React from 'react'
import classes from './MeetUpItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../store/favoritesContext'

function MeetUpItem(props) {
    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            let newFav = {
                "id": props.id,
                "title": props.title,
                "description": props.description,
                "image": props.image,
                "address": props.address
            }
            favoriteCtx.addFavorite(newFav);

            // try {
            //     const response = fetch(`https://meetupreact-c5408-default-rtdb.firebaseio.com/favorites.json`, {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify(newFav),
            //     });
            //     if (!response.ok) {
            //         throw new Error("Failed to add to favorites");
            //     }
            // } catch (error) {
            //     console.log("Error saving to the database:", error);
            // }
        }
    }

  return (
    <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button 
                  onClick={toggleFavoriteStatusHandler}
                >
                    {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
                </button>
                {props.showDelete && (
                    <button onClick={() => props.onDelete(props.id)}>Delete Meetup</button>
                )}
            </div>
        </Card>
    </li>
  )
}

export default MeetUpItem
