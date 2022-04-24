import './vendors/fontawesome/css/all.min.css';
import './vendors/bootstrap/bootstrap.min.css'
import './vendors/css/index.css'
import HomeScreen from "./components/HomeScreen/homescreen";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import LogInScreen from "./components/LandingScreen/logInScreen";
import Register from "./components/LandingScreen/register";
import PrivacyPolicy from "./components/LandingScreen/privacyPolicy";
import SearchScreen from "./components/SeaechScreen/searchScreen";
import React from "react";
import UserProfile from "./components/ProfileScreen/userProfile";
import NavbarComp from "./components/Navbar/NavbarComp";


function App() {
  return (
    <>

        <BrowserRouter>
            <NavbarComp/>
            <Routes>
                <Route exact path="/" element={<LogInScreen/>}/>
                <Route exact path="/login" element={<LogInScreen/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route path="/register/privacy" element={<PrivacyPolicy/>}/>
                <Route path="/profile" element={<UserProfile/>}/>
                {/*<Route path="/profile/:id" element={<Profile/>}/>*/}
                <Route exact path="/home" element={<HomeScreen/>}/>
                {/*<Route exact path="/ReviewsList/:id" element={<ReviewsListScreen/>}/>*/}
                <Route path="/search" element={<SearchScreen/>}/>
                {/*<Route path="/search/:keyword" element={<SearchScreen/>}/>*/}
                {/*<Route path="/search/details/:id" element={<DetailsScreen/>}/>*/}
            </Routes>
        </BrowserRouter>
        <div className="flex mt-5">
            <h6 className="text-decoration-none ">Copyright © 2004–2022 TooTasty Inc. TooTasty burst and related marks are registered trademarks of TooTasty.</h6>
        </div>

    </>
  );
}

export default App;
