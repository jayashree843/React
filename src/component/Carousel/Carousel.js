import '../Carousel/Carousel.css';
import img from '../../Images/delivery.png';

export default function Carousel() {
  return (
    <div id="home" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="hero-section">
            <div className="container">
              <div className="row">
                <div className="d-flex align-items-center justify-content-center flex-md-column-outer">
                  <div className="col-12 col-lg-6 innerdiv1">
                    <div className="first-carousel animate__animated animate__zoomIn animate_faster flex-md-column-outer-inner-1">
                      <h1 className="fw-bold animate__animated animate__zoomIn">
                        Anything Anywhere
                      </h1>
                      <p className="text-dark pt-2 fs-2">
                        We Deliver Get it delivered
                      </p>

                      <button
                        type="button"
                        className="btn btn-outline-dark btn-lg mt-3 "
                      >
                        Order Now
                      </button>
                      <button
                        type="button"
                        className="btn btn-lg btn-outline-secondary btn-lg bg-white mt-3"
                        style={{ color: "black" }}
                      >
                        Whatsapp Now
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 innerdiv2">
                    <div className="d-flex justify-content-end animate__animated animate__zoomIn animate_faster ">
                      <img src={img} className="hero-img" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="hero-section">
            <div className="container">
              <div className="row">
                <div className="d-flex align-items-center justify-content-center flex-md-column-outer">
                  <div className="col-12 col-lg-6 innerdiv1">
                    <div className="second-carousel animate__animated animate__zoomIn flex-md-column-outer-inner-1">
                      <h1 className="fw-bold pt-4">
                        Worried about safe cake deliveries?{" "}
                      </h1>
                      <p className="text-white pt-4">
                        We are the best, safest cake deliverers Pan INDIA Book
                        your cake delivery now
                      </p>
                      <button
                        type="button"
                        className="btn btn-outline-dark btn-lg mt-3"
                      >
                        Book Now
                      </button>
                      <button
                        type="button"
                        className="btn btn-lg btn-outline-secondary btn-lg bg-white mt-3"
                        style={{ color: "black" }}
                      >
                        Whatsapp Now
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 innerdiv2">
                    <div className="d-flex justify-content-end animate__animated animate__zoomIn">
                      <img
                        src={img}
                        className="hero-img"
                        alt=""
                        width="100%"
                        height="490px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
