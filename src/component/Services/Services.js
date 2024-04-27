import img from '../../Images/del.png'
import '../Services/Services.css';
export default function Services() {
    return (
        <section className='services'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='services-heading'>
                        <img src={img} alt="" />
                        <h3>Pick and Drop</h3>
                        <p className='text-center'>Have you let or forgotten anything at home/office/anywhere? get it picked and dropped at your door step.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}