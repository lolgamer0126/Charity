import SimpleNavbar from "../components/Navbar";
import LargeWithLogoLeft from '../components/aboutComponents/footer'
import BasicStatistics from '../components/aboutComponents/infoOne';
import WithSpeechBubbles from '../components/aboutComponents/infoTwo';
import MyText from "../components/aboutComponents/myText";
import { Progress } from "@chakra-ui/react";
const About = () =>{

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
export default About;