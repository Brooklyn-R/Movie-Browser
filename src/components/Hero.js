import Background from "../images/netflix_background.jpg";

const Hero = ({ text, backdrop }) => {
  return (
    <header
      className="d-flex align-items-center justify-content-center bg-dark text-white p-5 hero-container"
      style={{
        width: "100%",
        height: "92vh",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <h1
        className="hero-text d-flex align-items-center justify-content-center font-weight-bold"
        style={{ fontSize: "50px", letterSpacing: "1px", color: "darkorange" }}
      >
        {text}
      </h1>
      {backdrop && (
        <div
          className="hero-backdrop"
          style={{ backgroundImage: `url(${backdrop})` }}
        ></div>
      )}
    </header>
  );
};

export default Hero;
