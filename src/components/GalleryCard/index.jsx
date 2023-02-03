/* GalleryCard component
  Gets the housing description & housing picutre as props
  Build each individual housing card rendered on the Home page
*/
function GalleryCard({ title, picture }) {
  const backgroundSetup = {
    backgroundImage: "url(" + picture + ")",
  };

  return (
    <div style={backgroundSetup} className="home-main-gallery-card">
      <p>{title}</p>
    </div>
  );
}

export default GalleryCard;
