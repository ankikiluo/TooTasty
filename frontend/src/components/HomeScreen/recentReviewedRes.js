import HomepageCardElement from "./homepageCardElement";

const RecentReviewedRes = () => {
  return(
      <>
          <div className="mt-5 m-3 flex">
              <h1 className="text-white">You recent view</h1>
          </div>

          <div className="flex p-2">
              <ul className="list-group">
                  <a href="#">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                          <div className="homepage-list-child">
                              <img src="./img/top-liked-1.jpg" alt=""/>
                              <div className="text p-2">
                                  <h2>NAME</h2>
                                  <p>address:</p>
                              </div>
                          </div>
                          <span ><p><i className="fa-solid fa-heart"/> 100 likes</p></span>
                      </li>
                  </a>
                  <a href="#">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                          <div className="homepage-list-child">
                              <img src="./img/top-liked-2.jpg" alt=""/>
                              <div className="text p-2">
                                  <h2>NAME</h2>
                                  <p>address:</p>
                              </div>
                          </div>
                          <span ><p><i className="fa-solid fa-heart"/> 100 likes</p></span>
                      </li>
                  </a>
                  <a href="#">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                          <div className="homepage-list-child">
                              <img src="./img/top-liked-3.jpg" alt=""/>
                              <div className="text p-2">
                                  <h2>NAME</h2>
                                  <p>address:</p>
                              </div>
                          </div>
                          <span ><p><i className="fa-solid fa-heart"/> 100 likes</p></span>
                      </li>
                  </a>
              </ul>
          </div>
      </>
  )
}
export default RecentReviewedRes;