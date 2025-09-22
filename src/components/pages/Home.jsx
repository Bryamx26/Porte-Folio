import Vitamines from "./Vitamines.jsx";
import Profile from "./Profile.jsx";
import BomberBoat from "./BomberBoat.jsx";


function Home (){

    return (

        <div className="Home">


            <div className={"slideable"}><Profile/></div>

            <div className={"slideable"}><Vitamines/></div>
            <div className={"slideable"}><BomberBoat/></div>

        </div>)

}

export default Home