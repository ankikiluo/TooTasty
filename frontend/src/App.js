import './vendors/fontawesome/css/all.min.css';
import './vendors/bootstrap/bootstrap.min.css'
import './vendors/css/index.css'
import HomeScreen from "./components/HomeScreen/homescreen";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import LogInScreen from "./components/LandingScreen/logInScreen";
import Register from "./components/LandingScreen/register";
import PrivacyPolicy from "./components/LandingScreen/privacyPolicy";


function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LogInScreen/>}/>
                <Route exact path="/login" element={<LogInScreen/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route path="/register/privacy" element={<PrivacyPolicy/>}/>
                {/*<Route path="/profile/" element={<Profile/>}/>*/}
                {/*<Route path="/profile/:id" element={<Profile/>}/>*/}
                <Route exact path="/home" element={<HomeScreen/>}/>
                {/*<Route exact path="/watchlist/:id" element={<WatchlistScreen/>}/>*/}
                {/*<Route path="/search" element={<SearchScreen/>}/>*/}
                {/*<Route path="/search/:searchTerm" element={<SearchScreen/>}/>*/}
                {/*<Route path="/search/details/:id" element={<DetailsScreen/>}/>*/}
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
