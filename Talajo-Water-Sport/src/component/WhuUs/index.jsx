const WhyUs = () => {
  return (
    <div>
      {" "}
      {/* ======= Why Us Section ======= */}
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Why Us</h2>
            <p>Why Choose Talajo Water Sports</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                <span>01</span>
                <h4>Lokasi Strategis</h4>
                <p>
                  Berdekatan dengan pusat kota, hanya dengan kurang lebih 15 menit, memberikan Anda kemudahan dalam mengakses berbagai tempat di kota Manado. Jelajahi kota Manado dengan keindahan dan keunikannya.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay={200}>
                <span>02</span>
                <h4>Dekat destinasi Bunaken</h4>
                <p>
                  Tidak lengkap rasanya berkunjung ke Manado, jika tidak menikmati pulau Bunaken. Bunaken merupakan pusat pariwisata dari Sulawesi Utara. Kami bersedia memberikan Anda jasa layanan (partner) menuju Bunaken.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay={300}>
                <span>03</span>
                <h4> Pemandangan</h4>
                <p>
                Pemandangan pantai, mangrove dan gunung indah Bunaken dapat dinikmati dari lokasi Talajo Water Sports. Tidak hanya itu, rasakan pengalaman yang berbeda dengan ambience yang kami sediakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Why Us Section */}
    </div>
  );
};

export default WhyUs;
