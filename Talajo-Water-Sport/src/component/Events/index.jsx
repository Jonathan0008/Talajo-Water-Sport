
import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";
  
  const Events = () => {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [image, setImage] = useState("");
    const [imageEvent, setImageEvent] = useState("");
    const [imageCoutent, setImageCoutent] = useState("");
    const [imageFrietent, setImageFrietent] = useState("");
    const [imageFamtent, setImageFamtent] = useState("");
    const [imageBanboat, setImageBanboat] = useState("");
    const [imageJetski, setImageJetski] = useState("");
    const [imageKayak, setImageKayak] = useState("");
    const [imageSwimpool, setImageSwimpool] = useState("");
  
    useEffect(() => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Facility`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setTitle(data.title);
            setSubTitle(data.subTitle);
            setImage(data.image);
            setImageEvent(data.imageEvent);
            setImageCoutent(data.imageCoutent);
            setImageFrietent(data.imageFrietent);
            setImageFamtent(data.imageFamtent);
            setImageBanboat(data.imageBanboat);
            setImageJetski(data.imageJetski);
            setImageKayak(data.imageKayak);
            setImageSwimpool(data.imageSwimpool);
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
      {/* ======= Events Section ======= */}
      <section id="events" className="events">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Facility</h2>
            <p>This is our Facilities!</p>
          </div>
          <div
            className="events-slider swiper"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src={`${imageEvent}`}
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Glamping</h3>
                    <div className="price">
                      <p>
                        <span></span>
                      </p>
                    </div>
                    <p>
                    Salah satu fasilitas yang kami sediakan ini adalah Glamping atau Glamor camping, ini dirancang untuk memberikan para pengunjung suasana berkemah yang mewah tanpa harus mengorbankan kenyamanan dan fasilitas modern.
                    </p>
                    <p>
                    Glamping juga menyediakan keindahan alam sekitarnya. Para pengunjung dapat menikmati pemandangan pegunungan, hutan, danau, atau pantai yang menakjubkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src={`${imageCoutent}`}
                      className="img-Fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Couple Tent</h3>
                    <div className="price">
                      <p>
                        <span></span>
                      </p>
                    </div>
                    <p>
                    Couple tend ini dikhususkan untuk pasangan. Menyediakan kesan romantis yang unik, menciptakan kenangan berharga bagi pasangan yang ingin merayakan momen khusus mereka dalam suasana yang intim dan indah.
                    </p>
                    <p>
                    Tent ini ditempatkan di lokasi yang tenang dan pribadi, memberikan pasangan kesempatan untuk menikmati momen bersama secara eksklusif tanpa gangguan.
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-private.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Private Parties</h3>
                    <div className="price">
                      <p>
                        <span>$290</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-custom.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Custom Parties</h3>
                    <div className="price">
                      <p>
                        <span>$99</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <br />
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src={`${imageFrietent}`}
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Friend Tent</h3>
                    <div className="price">
                      <p>
                        <span></span>
                      </p>
                    </div>
                    <p>
                    Family tent ini salah satu fasilitas kami sediakan yang memiliki ukuran yang lebih luas. Hal ini memungkinkan beberapa orang untuk menginap bersama di dalam satu tenda, menciptakan atmosfer yang lebih ramai dan ramah.
                    </p>
                    <p>
                    Tenda Friend biasanya memiliki ukuran yang lebih besar daripada tenda perorangan. Hal ini memungkinkan beberapa orang untuk menginap bersama di dalam satu tenda, menciptakan atmosfer yang lebih ramai dan ramah.
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-private.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Private Parties</h3>
                    <div className="price">
                      <p>
                        <span>$290</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-custom.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Custom Parties</h3>
                    <div className="price">
                      <p>
                        <span>$99</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <br/>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src={`${imageFamtent}`}
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Family Tent</h3>
                    <div className="price">
                      <p>
                        <span></span>
                      </p>
                    </div>
                    <p>
                    Family tend ini menyediakan fasilitas menginap di tenda keluarga dan menciptakan pengalaman bersama dengan anggota keluarga. Ini dapat memperkuat ikatan keluarga dan memberikan momen yang berharga bersama-sama.
                    </p>
                    <p>
                      Tent ini memiliki ukuran yang lebih besar dibandingkan dengan tenda perorangan
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-private.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Private Parties</h3>
                    <div className="price">
                      <p>
                        <span>$290</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-custom.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Custom Parties</h3>
                    <div className="price">
                      <p>
                        <span>$99</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <br/>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src={`${imageBanboat}`}
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Banana boat</h3>
                    <div className="price">
                      <p>
                        <span></span>
                      </p>
                    </div>
                    <p>
                    Banana boat ini salah satu watersports yang kami sediakan, yang menyajikan kombinasi keseruan dan adrenalin karena sensasi kecepatan, terutama saat banana boat berbelok atau meluncur di atas ombak. 
                    </p>
                    <p>
                    Meskipun menyenangkan, keselamatan tetap menjadi prioritas utama kami. Peserta akan diberikan peralatan pelindung seperti pelampung dan helm, dan instruksi keselamatan sebelum memulai permainan.
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-private.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Private Parties</h3>
                    <div className="price">
                      <p>
                        <span>$290</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-custom.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Custom Parties</h3>
                    <div className="price">
                      <p>
                        <span>$99</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <br/>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src={`${imageJetski}`}
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Jetski</h3>
                    <div className="price">
                      <p>
                        <span></span>
                      </p>
                    </div>
                    <p>
                    Water sports yang satu ini, Jetski, dapat disewa. Water sport ini juga dapat memberikan kesempatan untuk menyatu dengan air dan menikmati sensasi kecepatan di atas permukaan air. Pengalaman ini dapat dinikmati oleh pemula hingga pengendara jetski yang berpengalaman.
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-private.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Private Parties</h3>
                    <div className="price">
                      <p>
                        <span>$290</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-custom.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Custom Parties</h3>
                    <div className="price">
                      <p>
                        <span>$99</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <br/>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src={`${imageKayak}`}
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Kayak</h3>
                    <div className="price">
                      <p>
                        <span></span>
                      </p>
                    </div>
                    <p>
                    Dengan kayak, kami menawarkan pengalaman seru dan menyenangkan di air. Pengunjung dapat menikmati keindahan alam sekitar yang berada di Talajo.
                    </p>
                    <p>
                    Melalui fasilitas ini, kami mendukung konsep ekowisata dengan mengintegrasikan kegiatan kayak yang ramah lingkungan dan menjaga keberlanjutan ekosistem air.
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-private.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Private Parties</h3>
                    <div className="price">
                      <p>
                        <span>$290</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-custom.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Custom Parties</h3>
                    <div className="price">
                      <p>
                        <span>$99</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <br/>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src={`${imageSwimpool}`}
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Swimming Pool</h3>
                    <div className="price">
                      <p>
                        <span></span>
                      </p>
                    </div>
                    <p>
                    Kami juga menyediakan Kolam renang yang merupakan area rekreasi air yang dirancang untuk memberikan pengunjung kesempatan untuk berenang dan bersantai sambil menikmati pemandangan alam disekitar
                    </p>
                    <p>
                    Menjadi salah satu daya tarik utama kami untuk keluarga yang ingin menikmati waktu bersama secara santai dan menyenangkan.
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-private.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Private Parties</h3>
                    <div className="price">
                      <p>
                        <span>$290</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img
                      src="src/assets/img/event-custom.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Custom Parties</h3>
                    <div className="price">
                      <p>
                        <span>$99</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* End Events Section */}
    </div>
  );
};

export default Events;
