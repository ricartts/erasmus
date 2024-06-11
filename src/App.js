import "./App.css";
import FirstSection from "./components/FirstSection/FirstSection";
import Footer from "./components/Footer/Footer";

//COMPONENTS
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <FirstSection
        text={
          "BLEARN AUTONOMY is an Erasmus+ Strategic Partnership (Ref. 2020-1-ES01-KA203-082513). Between November 2020 and December 2022, the project will experiment with digital, innovative strategies that improve teachers’ feedback to higher education students, foster collaborative teaching across institutions and develop consistent institutional policies of blended learning."
        }
      />
      <Footer />
    </>
  );
}

export default App;
