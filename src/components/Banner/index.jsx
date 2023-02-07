/* Home Banner component
 */
function Banner({ source, alt, text, caller }) {
  return (
    <div className={`main-banner ${caller}`}>
      <img className={`main-banner-image ${caller}`} src={source} alt={alt} />

      {text ? (
        <div className={`main-banner-text ${caller}`}>
          <p>{text}</p>
        </div>
      ) : null}
    </div>
  );
}

Banner.defaultProps = {
  source: "",
  alt: "Default text",
  text: "",
  caller: "",
};

export default Banner;
