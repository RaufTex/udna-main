import Dna from "./Dna/Dna";
import Plans from "./Plans/Plans";
import Steps from "./Steps/Steps";
import StepsTwo from "./StepsTwo/StepsTwo";
import Tutorial from "./Tutorial/Tutorial";
import CallToAction from "../HomePage/CallToAction/CallToAction"
import Footer from "../Footer/Footer";
import Header from "../Header/Header"


/*    position: absolute;
    top: 0;
    background: local;*/ 
function PaternityPage() {
  return (
    <>
      <Header />
      <Dna />
      <Steps />
      <StepsTwo />
      <Tutorial />
      <Plans />
      <CallToAction />
      <Footer />
    </>
  );
}

export default PaternityPage;