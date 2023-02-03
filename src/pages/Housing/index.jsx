import "../../utils/styles/HousingStyle.css";
import { useParams, Navigate } from "react-router-dom";
import Header from "../../components/Header";
import HousingCarousel from "../../components/Housing/HousingCarousel";
import DropItem from "../../components/DropItem";
import HousingHost from "../../components/Housing/HousingHost";
import HousingRating from "../../components/Housing/HousingRating";
import HousingTags from "../../components/Housing/HousingTags";
import HousingTitle from "../../components/Housing/HousingTitle";
import { homeGallery } from "../../datas/homeGallery";

function Housing() {
  const { id: queryId } = useParams();
  const housingData = homeGallery.find((housing) => housing.id === queryId);

  if (typeof housingData === "undefined") {
    return <Navigate to="/error" />;
  }

  return (
    <div className="housing-whole-page">
      <Header />

      <main className="housing-main">
        <HousingCarousel pictures={housingData.pictures} />

        <div className="housing-header">
          <div className="housing-header-1">
            <HousingTitle
              title={housingData.title}
              location={housingData.location}
            />
            <HousingTags tags={housingData.tags} />
          </div>
          <div className="housing-header-2">
            <HousingHost host={housingData.host} />
            <HousingRating rating={housingData.rating} />
          </div>
        </div>

        <div className="housing-drops">
          <DropItem
            title="Description"
            type="text"
            content={housingData.description}
            caller="housing"
          />
          <DropItem
            title="Équipements"
            type="list"
            content={housingData.equipments}
            caller="housing"
          />
        </div>
      </main>
    </div>
  );
}

export default Housing;
