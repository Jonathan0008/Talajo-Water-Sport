import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const Testimonials = () => {
    const [foto1, setFoto1] = useState("");
    const [foto2, setFoto2] = useState("");
    const [foto3, setFoto3] = useState("");

    useEffect(() => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Testimonials`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setFoto1(data.foto1);
            setFoto2(data.foto2);
            setFoto3(data.foto3);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  return (
    <div>
      {" "}
      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>What they are saying about us</p>
          </div>
          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    very nice view and cleanliness is also good.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                src={`${foto1}`}
                    className="testimonial-img"
                    alt
                  />
                  <h3>Arumi Vidha</h3>
                  <h4>visitors </h4>
                </div>
              </div>
            </div>
            
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    WaterSport Sulut terbaik, aman & nyaman. Fasilitas lengkap.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                  src={`${foto2}`}
                    className="testimonial-img"
                    alt
                  />
                  <h3>Imelda Takasowa Kumajas</h3>
                  <h4>Visitor </h4>
                </div>
              </div>
            </div>

            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    watersports low prices and food also drinks recommend.. tasty
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                  src={`${foto3}`}
                    className="testimonial-img"
                    alt
                  />
                  <h3>Budi Dede</h3>
                  <h4>Visitor </h4>
                </div>
              </div>
            </div>

            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* End Testimonials Section */}
    </div>
  );
};

export default Testimonials;
