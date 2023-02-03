import "../../utils/styles/HomeStyle.css";
import { Link } from "react-router-dom";
import { homeGallery } from "../../datas/homeGallery";
import GalleryCard from "../../components/GalleryCard";
import Header from "../../components/Header";

function Home() {
  return (
    <div className="home-whole-page">
      <Header />

      <main className="home-main">
        <h1 className="home-main-tagline">Chez vous, partout et ailleurs</h1>
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