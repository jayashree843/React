import '../About/About.css';
import image from './aboutUs.png';
import work from './howItWork.png';



export default function About() {
  return (
    <>
      <section id='about'>

        <div className='section-heading container'>
          <h2>About Us</h2>
        </div>
        <div className='about-section container'>
          <div className='about-content'>
            <h3>
              Welcome to<span> Turtu services</span>
            </h3>
            <p>
              TURTU is a on-demand service tech company based out of
              Belagavi. Dealing with on-demand delivery, #Hyperlocal
              Delivery & last mile Delivery, Serving both B2B and B2C.
            </p>
            <h3>
              Who <span>We Are?</span>
            </h3>
            <p>
              Are you tired of hopping to different applications for
              different on-demand services? With TURTU, you can access
              many essential on demand services under one roof.
            </p>
            <h3 style={{ color: "" }}><span>Vision</span></h3>
            <p>
              To be The India’s Largest on-demand Service tech Company.{" "}
            </p>
            <h3><span>Mission</span></h3>
            <p>
              To provide quick, safe, Trustworthy, Reliable and Time
              saving essential on-demand, Hyperlocal and Last mile
              Deliveries to all tier 2&3 cities of India.
            </p>

          </div>
          <div className="about-img">
            <img src={image} className="img-fluid" alt="about" />
          </div>
        </div>
      </section>
      
      <div className="works">
        <div className="outer-item text-center">
          <h2>How it works</h2>
        </div>
        <div className="inner-item">
          <img
            src={work}
            className=" "
            alt="..."
            id="web"
          />
        </div>
      </div>
    </>
  );
}
