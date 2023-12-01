import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [image8, setImage8] = useState("");
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Gallery`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setImage1(data.image1);
          setImage2(data.image2);
          setImage3(data.image3);
          setImage4(data.image4);
          setImage5(data.image5);
          setImage6(data.image6);
          setImage7(data.image7);
          setImage8(data.image8);

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
      {/* ======= Gallery Section ======= */}
      <section id="gallery" className="gallery">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Some photos from Our Talajo Water Sport</p>
          </div>
        </div>
        <div
          className="container-fluid"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="row g-0">
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href={`${image1}`}
                  className="gallery-lightbox"
                  data-gall="gallery-item"
                >
                  <img
                    src={`${image1}`}
                    alt
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href={`${image2}`}
                  className="gallery-lightbox"
                  data-gall="gallery-item"
                >
                  <img
                    src={`${image2}`}
                    alt
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href={`${image3}`}
                  className="gallery-lightbox"
                  data-gall="gallery-item"
                >
                  <img
                    src={`${image3}`}
                    alt
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href={`${image6}`}
                  className="gallery-lightbox"
                  data-gall="gallery-item"
                >
                  <img
                    src={`${image6}`}
                    alt
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href={`${image5}`}
                  className="gallery-lightbox"
                  data-gall="gallery-item"
                >
                  <img
                    src={`${image5}`}
                    alt
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href={`${image4}`}
                  className="gallery-lightbox"
                  data-gall="gallery-item"
                >
                  <img
                    src={`${image4}`}
                    alt
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href={`${image7}`}
                  className="gallery-lightbox"
                  data-gall="gallery-item"
                >
                  <img
                    src={`${image7}`}
                    alt
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href={`${image8}`}
                  className="gallery-lightbox"
                  data-gall="gallery-item"
                >
                  <img
                    src={`${image8}`}
                    alt
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Gallery Section */}
    </div>
  );
};

export default Gallery;
