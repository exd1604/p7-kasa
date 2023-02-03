import "../../utils/styles/AboutStyle.css";
import DropItem from "../../components/DropItem";
import Header from "../../components/Header";
import { aboutItemList } from "../../datas/aboutItemList";

function About() {
  return (
    <div className="about-whole-page">
      <Header />
      <main className="about-main">
        <div className="about-main-banner"></div>

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
