import Navbar from '../Navbar/navbar'
import Searchbar from "../Searchbar/searchbar";
import TopLikedRes from "../HomeScreen/topLikedRes";
import RecentReviewedRes from "../HomeScreen/recentReviewedRes";
const HomeScreen = () => {
    return(
        <>
            <div>
                <section className="header">
                    {Navbar()}
                    <div className="flex">
                        <img className="mt-5" alt="webLogo" height="100px" src="./img/center-logo.png"/>
                    </div>
                    {Searchbar()}
                </section>

                <section className="homepage-card-section">
                    {TopLikedRes()}
                    {RecentReviewedRes()}
                    <div className="mt-5">
                        <h6 className="text-white ">Copyright © 2004–2022 TooTasty Inc. TooTasty burst and related marks are registered trademarks of TooTasty.</h6>
                    </div>
                </section>
            </div>
        </>
    )
}
export default HomeScreen;