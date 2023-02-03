/* HousingTags component
  Get the tags as an array in props
*/
function HousingTags({ tags }) {
  return (
    <div className="housing-header-1-tags">
      {tags.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}

HousingTags.defaultProps = {
  tags: [],
};

export default HousingTags;
