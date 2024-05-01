import '../Testimonial/Testimonial.css';
import img from '../../Images/profile.png';

export default function Testimonial() {
    return (
        <section className="testimonial">
            <div className='container'>
                <div className="testimonial-section">
                    <header className="header text-center my-5">
                        <h2>What customer say</h2>
                    </header>
                    <div className="testimonial-container">
                        <div className="item testimonial-card">
                            <main className="test-card-body">
                                <div className="quote">
                                    <i className="fa fa-quote-left"></i>

                                </div>
                                <p>Excellent service! The delivery was done very quickly and the delivery agent was very kind and professional too!!</p>
                                <div className="ratings">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="profile">
                                    <div className="profile-image">
                                        <img src={img} />
                                    </div>
                                    <div className="profile-desc">
                                        <span>Dania Shaik</span>
                                    </div>
                                </div>

                            </main>

                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}