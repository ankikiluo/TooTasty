import {Link} from "react-router-dom";

const TopLikedElement = ({
     restaurant = {
         "name": "La Royal",
         "address": "221 Concord Ave cambridge, MA 02138 Huron Village",
         "image_url": "./img/top-liked-2.jpg",
         "rating": 4.5,
         "liked": 100
         // TODO: review 返回的response json里需要有餐厅的address,img,liked
     }
                             }) => {
    return(
        <>
            <div className="m-2">
                <Link to="#">
                    <div className="card homepage-card-img">
                        <img src={restaurant.image_url} alt="restaurant_image_url"/>
                        <div className="text">
                            <h2>{restaurant.name}</h2>
                            <p><i className="fa-solid fa-star"/>{restaurant.rating}</p>
                            <p>{restaurant.address}</p>
                            <p><i className="fa-solid fa-heart"/> liked by 100 users</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )

}
export default TopLikedElement;