import { NavLink } from "react-router-dom";



const Home = () => {
  
  return (
    <div>
      {/* <Spotify /> */}
      {/* <Tmdb/> */}
      
      <div className="container-fluid px-0">
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark"  data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand text-center" href="#">
              <span className="badge text-center bg-danger text-light">API</span> DEMO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <a className="nav-link active" href="/News"> 
                <NavLink/>NEWS<NavLink/>
                
                </a>
              
                <a className="nav-link " aria-current="page" href="/Tmdb"> 
                 <NavLink />TMDB<NavLink/>
                </a>
                <a className="nav-link" href="/Spotify"> 
                <NavLink/>Spotify<NavLink/>
                </a>
                
                
              
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
