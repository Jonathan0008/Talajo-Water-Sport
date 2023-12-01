/* eslint-disable react/no-unescaped-entities */
import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const Chefs = () => {
  const [imageCs, setImageCs] = useState("");
  const [imageHtl, setImageHtl] = useState("");
  const [imageSprt, setImageSprt] = useState("");
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Partner`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setImageCs(data.imageCs);
          setImageHtl(data.imageHtl);
          setImageSprt(data.imageSprt);
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
      {/* ======= Chefs Section ======= */}
      <section id="chefs" className="chefs">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Partnership</h2>
            <p>The Partner Of Talajo Water Sport</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay={100}>
                <img
                  src={`${imageSprt}`}
                  className="img-fluid"
                  alt
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>JLE'S SPORTS CENTER MANADO</h4>
                  </div>
                  <div className="social">
                    <a href = "https://www.instagram.com/jlessports/">
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay={200}>
                <img
                  src={`${imageHtl}`}
                  className="img-fluid"
                  alt
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>JLE'S Boutique Hotel Manado</h4>
                  </div>
                  <div className="social">
                    <a href = "https://www.instagram.com/jleshotel/">
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay={300}>
                <img
                  src={`${imageCs}`}
                  className="img-fluid"
                  alt
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Coming Soon</h4>
                  </div>
                  <div className="social">
                    <a href>
                      <i className="bi bi-arrow-clockwise" />
                    </a>
                    <a href>
                      <i className="bi bi-arrow-clockwise" />
                    </a>
                    <a href>
                      <i className="bi bi-arrow-clockwise" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Chefs Section */}
    </div>
  );
};

export default Chefs;
