import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [subTitle2, setSubTitle2] = useState("");
  const [image, setImage] = useState("");
  const [cek1, setCek1] = useState("");
  const [cek2, setCek2] = useState("");
  const [cek3, setCek3] = useState("");
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `About`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTitle(data.title);
          setSubTitle(data.subTitle);
          setSubTitle2(data.subTitle2);
          setImage(data.image);
          setCek1(data.cek1);
          setCek2(data.cek2);
          setCek3(data.cek3);
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
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="about-img">
                <img src={`${image}`} alt />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>{title}</h3>
              <p className="fst-italic">{subTitle}</p>
              <ul>
                <li>
                <i className="bi bi-check-circle" /> {cek1}
                </li>
                <li>
                  <i className="bi bi-check-circle" /> {cek2}
                </li>
                <li>
                  <i className="bi bi-check-circle" /> {cek3}
                </li>
              </ul>
              <p>
                {subTitle2}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};

export default About;
