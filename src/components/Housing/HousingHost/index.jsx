function HousingHost({ host }) {
  return (
    <div className="housing-header-2-host">
      <p>{host.name}</p>
      {host.picture ? <img src={host.picture} alt="Cliché du loueur" /> : null}
    </div>
  );
}

HousingHost.defaultProps = {
  host: {
    name: "",
    picture: "",
  },
};

export default HousingHost;
