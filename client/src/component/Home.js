import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        
        <div className="card " style={{width: "18rem",margin:"auto",marginTop:"7%"}}>
  <img src="https://media.istockphoto.com/id/961345118/photo/tik-tak-toe-game-with-donuts-and-asparagus-health-nutrition-concept-image.jpg?b=1&s=170667a&w=0&k=20&c=5MeIrRCe8afBTS1xmI_InZyRyn-wKo49E3fQnAuvGlY=" className="card-img-top" alt="..."/>
  <div className="card-body">
    
  <Link to="/login"><button type="button" className="btn btn-warning btn-lg btn-block " style={{width:"100%",marginBottom:"20px"}}>Log in</button></Link>
 <Link to="/register"> <button type="button" className="btn btn-primary btn-lg btn-block " style={{width:"100%",marginBottom:"20px"}}>Register</button></Link>

  </div>
</div>

        </>
    )
}
export default Home;