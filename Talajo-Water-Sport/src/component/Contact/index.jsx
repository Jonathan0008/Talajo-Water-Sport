import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const Contact = () => {
  const [alamat, setAlamat] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [hub, setHub] = useState("");
  const [open, setOpen] = useState("");
  const [open1, setOpen1] = useState("");

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Contact`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setAlamat(data.alamat);
          setInstagram(data.instagram);
          setFacebook(data.facebook);
          setLokasi(data.lokasi);
          setHub(data.hub);
          setOpen(data.open);
          setOpen1(data.open1);
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
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
        </div>
        <div data-aos="fade-up">
          <iframe
            style={{ border: 0, width: "100%", height: 350 }}
            src="https://www.google.com/maps/place/TALAJO+Watersports+Cafe+%26+Resto/@1.6109216,124.8665472,17z/data=!4m14!1m7!3m6!1s0x3287a39c6bd03787:0xb1dda12ac059cccc!2sTALAJO+Watersports+Cafe+%26+Resto!8m2!3d1.6109162!4d124.8691221!16s%2Fg%2F11rtp1vk75!3m5!1s0x3287a39c6bd03787:0xb1dda12ac059cccc!8m2!3d1.6109162!4d124.8691221!16s%2Fg%2F11rtp1vk75?entry=ttu"
            frameBorder={0}
            allowFullScreen
          />
        </div>
        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4> 
                  <p>{lokasi}</p>
                </div>
                <div className="open-hours">
                  <i className="bi bi-clock" />
                  <h4>Open Hours:</h4>
                  <p>
                    {open}
                  </p>
                </div>
                <br/>
                <div className="instagram">
                  <i className="bi bi-instagram" />
                  <h4>Instagram:</h4>
                  <p>{instagram}</p>
                </div>
                <br/>
                <div className="facebook">
                  <i className="bi bi-facebook" />
                  <h4>Facebook:</h4>
                  <p>{facebook}</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>{hub}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={8}
                    placeholder="Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </div>
  );
};

export default Contact;
