import { useState, useEffect } from 'react';
import '../Form/Form.css';
import axios from 'axios';
import img from '../../Images/del.png';
export default function Form() {
    const initialValues = { username: "", email: "", phonenumber: "", query: "" }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        const username = e.target.username.value;
        const email = e.target.email.value;
        const phonenumber = e.target.phonenumber.value;
        const query = e.target.query.value;
        axios.post("http://admin.turtu.in/query", {
            username,
            email,
            phonenumber,
            query
        })
            .then((response) => {
                console.log(response);
                e.target.reset();
            })
            .catch((error) => {
                console.log(error);
            });

    };
    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    })
    const validate = (values) => {
        const errors = {}
        const regex = "_%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/";
        if (!values.username) {
            errors.username = "username is required";
        }
        if (values.username < 2) {
            errors.username = "username must be more that 2 characters";
        }
        if (!values.email) {
            errors.email = "email is required";
        }

        if (!values.phonenumber) {
            errors.phonenumber = "phone number is required";
        }
        else if (values.phonenumber < 10) {
            errors.phonenumber = "phone number is not valid";
        }
        if (!values.query) {
            errors.query = "query message is required";
        }
        return errors;

    }
    return (
        <><section className="container my-5">
            <div>
                <div className="heading text-center">
                    <h3>Contact Us</h3>
                    <p>Leave us a message</p>
                </div>
                <div className="form py-4">

                    <form onSubmit={handleSubmit}>

                        <div className="input-control">
                            <label for="fname">User Name</label>
                            <input type="text" name='username' placeholder="Username" value={formValues.username}
                                onChange={handleChange} />
                        </div>
                        <p>{formErrors.username}</p>
                        <div className="input-control">
                            <label for="fname">Email Address</label>
                            <input type="email" name='email' placeholder="Email Address" value={formValues.email}
                                onChange={handleChange} />
                        </div>
                        <p>{formErrors.email}</p>
                        <div className="input-control">
                            <label for="fname">Phone Number</label>
                            <input type="text" name='phonenumber' placeholder="Phone Number" value={formValues.phonenumber}
                                onChange={handleChange} />
                        </div>
                        <p>{formErrors.phonenumber}</p>
                        <div className="input-control">
                            <label for="subject">Query</label>
                            <textarea id="Query" name='query' placeholder="Write something.." value={formValues.query}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <p>{formErrors.query}</p>
                        <div className="input-control">
                            <button className=''>Submit</button>
                        </div>

                        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='message-success'>Message sent successfully !!</div>
                        ) : (
                            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                        )}





                    </form>
                </div>
               

            </div>

        </section>
            </>

    );
} 