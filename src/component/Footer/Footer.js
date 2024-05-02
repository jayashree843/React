import '../Footer/Footer.css';

export default function Footer(){
    return(
        <>
        <footer class="bg-dark text-white pt-5 pd-4">
        <div className="container text-md-left">
      <div className="row">
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Turtu Services</h5>
          <p>Turtu started as intracity courier service providing company. Now has become ONE STOP SOLUTION for home
            delivery i.e Now one can get everything from everywhere.</p>



        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Services</h5>
          <p>
            <a href="#" className="text-white" >Pick and Drop</a>
          </p>
          <p>
            <a href="#" className="text-white" >Courier services</a>
          </p>
          <p>
            <a href="#" className="text-white" >Food delivery</a>
          </p>
          <p>
            <a href="#" className="text-white" >Cake delivery</a>
          </p>
          <p>
            <a href="#" className="text-white" >Gift and Flower delivery</a>
          </p>
          <p>
            <a href="#" className="text-white">Medicine delivery</a>
          </p>
          <p>
            <a href="#" className="text-white">Home made food</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company</h5>
          <p>
            <a href="#home" className="text-white" >Home</a>
          </p>
          <p>
            <a href="#about" className="text-white" >About</a>
          </p>
          <p>
            <a href="#services" className="text-white" >Services</a>
          </p>
          <p>
            <a href="#contact" className="text-white">Contact</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">contact</h5>
          <p>
            <i className="fas fa-home mr-3 px-2"></i> 3rd Floor, Balachandra Apartment, Bauxite Road, Near Saibaba Mandir,
            Belagavi, Karnataka - 590010
          </p>
          <p>
            <i className="fas fa-envelope mr-3 px-2"></i> turtuservices@gmail.com
          </p>
          <p>
            <i className="fas fa-phone mr-3 px-2"></i> +91 7975443090, +91 8747858317
          </p>



        </div>

      </div>
      
      
      </div>
      <div className=''>
      <hr className="mb-4"/>
      <div className="container row align-items-center">
        <div className="col-md-7 col-lg-8">
          <p>Copyright © 2024 All Rights Reserved by:
            <a href="#">
              <strong className="text-warning">Turtu</strong>
            </a>
          </p>

        </div>
        
        </div>

      </div>
      
      </footer>


        </>
    );
}