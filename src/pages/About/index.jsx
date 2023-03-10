/* About page
  An array of objects created to manage the titles & Texts of each of the block.
  Easy to add / Change / remove without changing anything in the code itself.
*/

import "../../utils/styles/AboutStyle.css";
import DropItem from "../../components/DropItem";
import Header from "../../components/Header";
import { aboutItemList } from "../../datas/aboutItemList";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/aboutBanner.png";

function About() {
  return (
    <div className="about-whole-page">
      <Header />
      <main className="about-main">
        <Banner
          source={BannerImage}
          alt="Banière page A Propos"
          text=""
          caller="about"
        />

        {aboutItemList.map(({ id, title, text }) => (
          <div className="about-main-item-wrapper" key={id}>
            <DropItem title={title} type="text" content={text} caller="about" />
          </div>
        ))}
      </main>
    </div>
  );
}

export default About;
