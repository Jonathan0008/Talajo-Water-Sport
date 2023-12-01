import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";


const Menu = () => {
  const [image0, setImage0] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Price`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setImage0(data.image0);
          setImage1(data.image1);
          setImage2(data.image2);
          setImage3(data.image3);
          setImage4(data.image4);
          setImage5(data.image5);
          setImage6(data.image6);
          setImage7(data.image7);
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
      {/* ======= Menu Section ======= */}
      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Price</h2>
            <p>The Price We Offer</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
            </div>
          </div>
          <div
            className="row menu-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-6 menu-item filter-starters">
              <img
                src={`${image0}`}
                className="menu-img"
                alt
              />
              <div className="menu-content">
                <a href="#">Glamping</a>
                <span>Rp 650.000,-/night</span>
              </div>
              <div className="menu-ingredients">
                Glamping pertama di Manado. Nikmati pengalaman baru Anda bersama kami.
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-specialty">
            <img
                src={`${image1}`}
                className="menu-img"
                alt
              />
              <div className="menu-content">
                <a href="#">Family Tent</a>
                <span>Rp 600.000,-/night for 5-6 pax</span>
              </div>
              <div className="menu-ingredients">
                Kami menyediakan tenda untuk Anda bersama keluarga dan kerabat Anda. Berikan pengalaman quality time yang terbaik bersama orang-orang terdekat Anda.
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-starters">
            <img
                src={`${image2}`}
                className="menu-img"
                alt
              />
              <div className="menu-content">
                <a href="#">Friendship Tent</a>
                <span>Rp 450.000,-/night for 6 pax</span>
              </div>
              <div className="menu-ingredients">
              Berikan pengalaman quality time yang terbaik bersama teman dan orang-orang terdekat Anda.
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-salads">
              <img
                src={`${image3}`}
                className="menu-img"
                alt
              />
              <div className="menu-content">
                <a href="#">Couple Tent</a>
                <span>Rp 350.000,-/night for 4 pax</span>
              </div>
              <div className="menu-ingredients">
                Nikmati waktu dan pengalaman baru bersama pasangan Anda.
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-specialty">
              <img
                src={`${image4}`}
                className="menu-img"
                alt
              />
              <div className="menu-content">
                <a href="#">Jetski</a>
                <span>Rp 600.000,-/30 minutes/unit & Rp 1.000.000,-/1 hour/unit</span>
              </div>
              <div className="menu-ingredients">
                Sewa wahana Jetski terbaru di Manado. Rasakan pengalaman seru Anda dengan kualitas Jetski kamai.
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-starters">
              <img
                src={`${image5}`}
                className="menu-img"
                alt
              />
              <div className="menu-content">
                <a href="#">Banana Boat</a>
                <span>Rp 200.000/4 pax</span>
              </div>
              <div className="menu-ingredients">
                Rasakan adrenalin jatuh di tengah lautan bersama Banana Boat kami.
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-salads">
              <img
                src={`${image6}`}
                className="menu-img"
                alt
              />
              <div className="menu-content">
                <a href="#">Kayak</a>
                <span>Rp 100.000/1 hour/unit</span>
              </div>
              <div className="menu-ingredients">
                Santai di tengah laut akan memberikan pengalaman rileks dan segar untuk Anda.
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-salads">
              <img
                src={`${image7}`}
                className="menu-img"
                alt
              />
              <div className="menu-content">
                <a href="#">Swimming Pool</a>
                <span>Rp 200.000/minimum spend for 4 pax & FREE for guests staying</span>
              </div>
              <div className="menu-ingredients">
                Berenang dengan view yang menarik membuat Anda akan semakin menikmati momen Anda.
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-specialty">
              <img
                src="src/assets/img/menu/lobster-roll.jpg"
                className="menu-img"
                alt
              />
              <div className="menu-content">
                <a href="#">Lobster Roll</a>
                <span>$12.95</span>
              </div>
              <div className="menu-ingredients">
                Plump lobster meat, mayo and crisp lettuce on a toasted bulky
                roll
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Menu Section */}
    </div>
  );
};

export default Menu;
