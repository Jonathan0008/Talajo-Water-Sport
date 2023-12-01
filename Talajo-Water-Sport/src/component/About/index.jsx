import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [image, setImage] = useState("");
  
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `About`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTitle(data.title);
          setSubTitle(data.subTitle);
          setImage(data.image);
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
                  <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
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
