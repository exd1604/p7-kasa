/* Home page
  Build the main welcome page building one housing card per housing found. 
  Currently the housings are stored in an array of objects.
  Eventually, when a backend DB & API will be available, this piece will need to be revied to inculde the fetch piece 
*/
import "../../utils/styles/HomeStyle.css";
import { Link } from "react-router-dom";
import { homeGallery } from "../../datas/homeGallery";
import GalleryCard from "../../components/GalleryCard";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import BannerImage from "../../assets/homeBanner.jpg";

function Home() {
  const bannerText = "Chez vous, partout et ailleurs";
  return (
    <div className="home-whole-page">
      <Header />

      <main className="home-main">
        <Banner
          source={BannerImage}
          alt="Banière page Accueil"
          text={bannerText}
          caller="home"
        />
        <div className="home-main-gallery">
          {homeGallery.map((rental, index) => (
            <Link key={`gallery-${rental.id}`} to={`/housing/${rental.id}`}>
              <GalleryCard
                key={`${rental.id}-${index}`}
                title={rental.title}
                picture={rental.cover}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
