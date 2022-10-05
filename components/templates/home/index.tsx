import Appearance from "../../appearance";
import Content from "../../content";
import Header from "../../header";
import Hero from "../../hero";
import Information from "../../information";
import CardsSection from "../cards-section";
import styles from "./home.module.scss";


const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Information />
      <CardsSection />
      <Appearance />
      <Content/>
      
      
    </div>
  );
};

export default HomePage;
