/* HousingRating component
  Manage the 5 rating stars building an array of 5 booleans.
*/
import starActive from "../../../assets/star_active.png";
import starInactive from "../../../assets/star_inactive.png";

function HousingRating({ rating }) {
  const setStars = [];
  for (let i = 0; i < 5; i++) {
    i <= rating ? setStars.push(true) : setStars.push(false);
  }

  return (
    <div className="housing-header-2-rating">
      {setStars.map((status, index) =>
        status ? (
          <span key={index}>
            <img src={starActive} alt="Etoile Evaluation active" />
          </span>
        ) : (
          <span key={index}>
            <img src={starInactive} alt="Etoile Evaluation inactive" />
          </span>
        )
      )}
    </div>
  );
}

HousingRating.defaultProps = {
  rating: 0,
};

export default HousingRating;
