import AnimationContainer from './components/AnimationContainer';
import {
  AccordianItems,
  howToDoItInstructions,
  FAQs,
} from './components/Assests';
import CustomAccordion from './components/CustomAccordian';
import Footer from './components/Footer';
import StepInstruction from './components/StepInstruction';
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';
import PricingSection from './components/pricing/PricingSection';
import { AuroraHero } from './components/AuroraHero';

export default function Home() {
  return (
    <div className="grid min-h-[100dvh] bg-background grid-rows-[auto_1fr_auto]">
      <main className="w-[100%] mx-auto flex min-h-screen flex-col gap-[50px] items-center justify-between">
        {/*Hero Section*/}
        <section id="hero" className="w-[100%] bg-background">
          <AuroraHero
            heading="Capture and Share Your Success Stories"
            content="Collect client reviews, seamlessly manage testimonials, and easily
          embed them in various styles on your site."
            buttonText="Get started!"
          />
        </section>

        <div className="flex flex-col  gap-[50px]">
          {/*What KudosCraft offers*/}
          <section
            id="whatIsKudosCraft"
            className="w-[100%] flex justify-center gap-[50px] flex-col min-h-screen "
          >
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
              What does KudosCraft offer?
            </h1>
            <div className="w-[90%] lg:min-w-[903px] mx-auto rounded-[10px] border shadow-lg p-[15px] lg:p-[24px]">
              {AccordianItems.map((item, index) => (
                <CustomAccordion
                  id={`${index + 1}`}
                  key={item.title}
                  title={item.title}
                  details={item.details}
                />
              ))}
            </div>
          </section>
          {/*How it works section*/}
          <section
            id="howItWorks"
            className="w-[100%] flex gap-[50px] flex-col min-h-screen mx-auto "
          >
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center ">
              How it works
            </h1>
            <div className="flex flex-col gap-[50px]">
              {howToDoItInstructions.map((item, index) => (
                <div
                  className={
                    index % 2 === 0
                      ? 'w-[90%]  p-[24px] mx-auto flex border shadow-lg rounded-[10px] flex-col md:flex-row justify-between items-center'
                      : 'w-[90%]  p-[24px] mx-auto flex border shadow-lg rounded-[10px] flex-col md:flex-row-reverse justify-between items-center'
                  }
                  key={index}
                >
                  <div className="flex-1">
                    <StepInstruction
                      stepNo={item.stepNo}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                  <div className="flex-1">
                    <AnimationContainer src={item.animationLink} />
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/*Testimonials*/}
          <section
            id="testimonials"
            className="mt-[100px] !max-w-full !w-[100%] flex gap-[50px] flex-col min-h-screen mx-auto "
          >
            <h1 className="scroll-m-20 w-full text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
              What people say about us ?
            </h1>
            <div>
              <InfiniteScroll />
            </div>
          </section>
          {/*Pricing*/}
          <section
            id="pricing"
            className="w-[100%] flex gap-[50px] flex-col min-h-screen mx-auto "
          >
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
              Choose your plan according to your needs
            </h1>
            <div>
              <PricingSection />
            </div>
          </section>
          {/*FAQ*/}
          <section
            id="FAQs"
            className="w-[100%] flex justify-center gap-[50px] flex-col min-h-screen "
          >
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center ">
              Frequently asked questions
            </h1>
            <div className="w-[90%] lg:min-w-[903px] mx-auto rounded-[10px] shadow-lg p-[15px] lg:p-[24px]">
              {FAQs.map((item, index) => (
                <CustomAccordion
                  id={`${index + 1}`}
                  key={item.title}
                  title={item.title}
                  details={item.details}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      {/*Footer*/}
      <section id="footer" className="bg-background">
        <Footer />
      </section>
    </div>
  );
}
