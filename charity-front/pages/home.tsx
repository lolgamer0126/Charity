import SimpleNavbar from "../components/Navbar";
import LargeWithLogoLeft from '../components/homeComponents/footer'
import BasicStatistics from '../components/homeComponents/infoOne';
import WithSpeechBubbles from '../components/homeComponents/infoTwo';
import MyText from "../components/homeComponents/myText";
import { Progress } from "@chakra-ui/react";
const Home = () =>{

    return (
        <div>
            <SimpleNavbar/>
            <MyText/>
            <WithSpeechBubbles/>
            <BasicStatistics/>
            <Progress size={'xs'} colorScheme = 'pink' value = {80} />
            <LargeWithLogoLeft />
        </div>
    )
}
export default Home;