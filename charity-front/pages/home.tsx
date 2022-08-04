import SimpleNavbar from "../components/Navbar";
import LargeWithLogoLeft from '../components/homeComponents/footer'
import BasicStatistics from '../components/homeComponents/infoOne';
import WithSpeechBubbles from '../components/homeComponents/infoTwo';
const Home = () =>{

    return (
        <div>
            <SimpleNavbar/>
            <WithSpeechBubbles/>
            <BasicStatistics/>
            <LargeWithLogoLeft />
        </div>
    )
}
export default Home;