import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const Specials = () => {
  const [imageCs, setImageCs] = useState("");
  const [imagePwp, setImagePwp] = useState("");
  const [imageSp, setImageSp] = useState("");
  const [imageWp, setImageWp] = useState("");
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Special`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setImageCs(data.imageCs);
          setImagePwp(data.imagePwp);
          setImageSp(data.imageSp);
          setImageWp(data.imageWp);
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
      {/* ======= Specials Section ======= */}
      <section id="specials" className="specials">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Specials</h2>
            <p>Events & Package Deals</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    Event Package 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    Event Package 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    Promo Package 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                    Upcoming Deals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                    Upcoming Deals
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Pre Wedding</h3>
                      <h5>ONLY IDR 1.200.000</h5>
                      <p className="fst-italic">
                        Max Crew 10 persons
                      </p>
                      <h5>
                        Include
                      </h5>           
                      <p>
                        Jetski 30 minutes,
                        Ice Tea 4 Pitcher,
                        Snack 4 Portion (Gorengan),
                        1 Unit Kayak 30 minutes
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={`${imagePwp}`}
                        alt
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Wedding Package</h3>
                      <p className="fst-italic">
                        ONLY IDR 7.000.000
                      </p>
                      <h5>
                        Include
                      </h5>  
                      <p>
                        250 pax wedding packages,
                        Glamping 2 nights,
                        Jetski 2 hours,
                        Private ferry 2 hours for Pre-Wedding
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={`${imageWp}`}
                        alt
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Summer Season</h3>
                      <h5>ONLY IDR 2.000.000</h5>
                      <p className="fst-italic">
                       Max 10 persons
                      </p>
                      <h5>
                        Include
                      </h5>  
                      <p>
                       5 Soft drinks,
                       10 portion snacks,
                       Banana Boat 5 route,
                       2 Jetski for 30 minutes,
                       Free swimming pool
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={`${imageSp}`}
                        alt
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>
                        COMING SOON!
                      </h3>
                      <p className="fst-italic">
                        Stay tuned for our upcoming promo
                      </p>
                      <p>
                       
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={`${imageCs}`}
                        alt
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>
                        COMING SOON!
                      </h3>
                      <p className="fst-italic">
                        Stay tuned for our upcoming promo
                      </p>
                      <p>
                        
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={`${imageCs}`}
                        alt
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Specials Section */}
    </div>
  );
};

export default Specials;
