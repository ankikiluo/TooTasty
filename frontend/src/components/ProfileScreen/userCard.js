import {Link} from "react-router-dom";
import './userprofile.css'
const UserCard = ({
    user = {
        "_id": "34238432784901",
        "name": "Alice",
        "email": "alice@134.com",
        "role": "customer",
        "bio": "I love eatting!",
        "location": "Watertown",
        "image_url": "./img/top-liked-1.jpg"
    }
                  }) => {
    return(
        <>
            <div className="user-card user-card-flex">
                <div className="m-5">
                    <img src={user.image_url} alt=""/>
                    <h3 className="user-card-name text-white">{user.name}
                        {/*<button type="button" className="btn btn-primary">Follow</button>*/}
                    </h3>
                    <span className="badge rounded-pill bg-primary disabled">{user.role}</span>
                    <p className="text-white">{user.bio}</p>

                    {/*<ul className="list-group mb-4">*/}
                        {/*<li className="list-group-item"><Link to="#">Follower</Link></li>*/}
                        {/*<li className="list-group-item"><Link to="#">Following</Link></li>*/}
                        {/*<li className="list-group-item"><Link to="#">Reviews</Link></li>*/}
                        {/*<li className="list-group-item"><Link to="#">Favourite restaurants</Link></li>*/}
                    {/*</ul>*/}
                    <button type="reset" className="btn btn-outline-white">Edit Profile</button>
                </div>
            </div>
        </>
    )
}
export default UserCard;