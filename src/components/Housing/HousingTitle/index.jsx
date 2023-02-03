/* HousingTitle component
  Title & location passed as props
*/
function HousingTitle({ title, location }) {
  return (
    <div className="housing-header-1-title">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
}

HousingTitle.defaultProps = {
  title: "",
  location: "",
};
export default HousingTitle;
