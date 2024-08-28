import { MainBanner } from "./1-MainBanner/MainBanner";
import '../../styles/global.scss';
import { useScroll } from "../../hooks/useScroll";
import { WhoWeAre } from "./2-WhoWeAre/WhoWeAre";
import { HowDoWeDoIt } from "./3-HowDoWeDoIt/HowDoWeDoIt";
import { Unforgettable } from "./4-Unforgettable/Unforgettable";
import { Services } from "./5-Services/Services";
import { StartYourEvent } from "./6-StartYourEvent/StartYourEvent";
import { TypesOfEvents } from "./7-TypesOfEvents/TypesOfEvents";
import { CustomEvents } from "./8-CustomEvents/CustomEvents";
import { Contact } from "../../components/Contact/Contact";
// import { Helmet } from "react-helmet";

export const Home = () => {

   useScroll('index_id');

   return (
      <div id="index_id">
         <MainBanner />
         <WhoWeAre />
         <HowDoWeDoIt /> 
         <Unforgettable/>
         <Services/>
         <StartYourEvent/>
         <TypesOfEvents/>
         <CustomEvents/>
         <Contact />
      </div>
   );
}