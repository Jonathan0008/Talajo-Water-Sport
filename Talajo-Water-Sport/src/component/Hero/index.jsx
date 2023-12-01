const Hero = () => {
  return (
    <div>
      {" "}
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <div className="row">
            <div className="col-lg-8">
              <h1>
                Welcome to <br/><span>Talajo Water Sports</span>
              </h1>
              <h2>Enjoy your wonderful moments with us</h2>
              <div className="btns">
                <a 
                  href="#menu" 
                  className="btn-menu animated fadeInUp scrollto"
                  >
                  Price
                </a>
                <a
                  href="#events"
                  className="btn-book animated fadeInUp scrollto"
                >
                  Facility
                </a>
                <a
                  href="#specials"
                  className="btn-book animated fadeInUp scrollto"
                >
                  Speciials
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <a
                href="https://youtu.be/rU1YqSxmtvQ?si=rqT0-TAQwAJTEVMP"
                className="glightbox play-btn"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
};
export default Hero;
