import SectionContainer from "@/container/sectionContainer";
import LowerFooter from "./footerLowerSection";
import UpperFooter from "./footerUpperSection";


const Footer = () => {
  return (
    <SectionContainer className="flex  flex-col  p-4 bg-primary min-h-[400px]">
     <UpperFooter/>
     <LowerFooter/>
    </SectionContainer>
  );
};
export default Footer;
