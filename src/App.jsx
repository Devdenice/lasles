import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Location from "./sections/Location";
import Milestone from "./sections/Milestone";
import Navigation from "./sections/Navigation";
import Newsletter from "./sections/Newsletter";
import Plans from "./sections/Plans";
import Testimonies from "./sections/Testimonies";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="w-10/12 mx-auto">
          <section className="h-[100vh] flex flex-col lg:justify-around ">
            <Navigation />
            <Hero />
          </section>
          <section className="h-[60vh]  flex items-center">
            <Milestone />
          </section>
          <section className="h-[90vh] flex items-center">
            <Features />
          </section>
          <section className="h-[170vh] flex items-center justify-center ">
            <Plans />
          </section>
          <section className="h-[170vh] flex items-center ">
            <Location />
          </section>
          <section className="h-[80vh] relative">
            <Testimonies />
          </section>
          <section>
            <Newsletter />
          </section>
          <section className="h-[80vh] flex items-center">
            <Footer />
          </section>
          {/* <h1 className="text-3xl font-bold underline sample">Hello world!</h1> */}
        </div>
      </div>
    </>
  );
}

export default App;
