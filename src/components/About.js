import Hero from "./Hero";
const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              deleniti nisi rerum, esse culpa quisquam optio maxime fugit, at
              mollitia consectetur minima architecto vel. Eius corrupti
              necessitatibus magni eveniet deserunt. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aliquid deleniti nisi rerum, esse
              culpa quisquam optio maxime fugit, at mollitia consectetur minima
              architecto vel. Eius corrupti necessitatibus magni eveniet
              deserunt.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
