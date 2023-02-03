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
