import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Too Long!")
    .matches(/^[A-Za-z0-9 ]*$/, "Invalid Name")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  emailContent: Yup.string().required("Required"),
});

function Contact() {
  return (
    <div className="inner-content-wrapper">
      <section className="main-panel-section">
        <div className="row">
          <div className="section-title">
            <h4>Contact Information</h4>
          </div>
          <div className="contact-info-card-wrapper">
            <div className="contact-card">
              <div className="info-table p-15-15">
                <ul>
                  <li>
                    <strong>Country: </strong>
                    Pakistan
                  </li>
                  <li>
                    <strong>City: </strong>
                    Islamabad
                  </li>
                  <li>
                    <strong>Zip Code: </strong>
                    46000
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-info-card-wrapper">
            <div className="contact-card">
              <div className="info-table p-15-15">
                <ul>
                  <li>
                    <strong>Email: </strong>
                    adnannoor@outlook.com
                  </li>
                  <li>
                    <strong>Contact: </strong>
                    +92 (308) 521 21 21
                  </li>
                  <li>
                    <strong>Skype: </strong>
                    live:adnannoor_2
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-info-card-wrapper">
            <div className="contact-card">
              <div className="info-table p-15-15">
                <ul>
                  <li>
                    <strong>LinkedIn: </strong>
                    adnan-noor-5b7780122
                  </li>
                  <li>
                    <strong>Whatsapp: </strong>
                    +92 (308) 521 21 21
                  </li>
                  <li>
                    <strong>Facebook: </strong>
                    ednannur.21
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-panel-section">
        <div className="row">
          <div className="section-title">
            <h4>Get in touch</h4>
          </div>
          <div className="contact-card-wrapper">
            <div className="contact-card">
              <div className="info-table p-15-15">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    emailContent: "",
                  }}
                  validationSchema={ValidationSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);

                    axios
                      .post(
                        "https://adnannoor.me/portfolioAjax",
                        JSON.stringify(values)
                      )
                      .then((result) => {
                        console.log(result.data);
                        setSubmitting(false);
                        resetForm();
                      })
                      .catch((error) => {
                        console.log(error);
                        setSubmitting(false);
                      });
                  }}
                >
                  {({ errors, isSubmitting, touched }) => (
                    <Form>
                      <div className="form-field">
                        <Field
                          type="text"
                          name="name"
                          className={`form-control ${
                            errors.name && touched.name ? "is-invalid" : ""
                          }`}
                          autoComplete="off"
                          maxLength="50"
                          placeholder="Name"
                        />
                        <label
                          className={
                            errors.name && touched.name ? "is-invalid" : ""
                          }
                        >
                          <i className="fa fa-user"></i>
                        </label>
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-field">
                        <Field
                          type="text"
                          name="email"
                          className={`form-control ${
                            errors.email && touched.email ? "is-invalid" : ""
                          }`}
                          autoComplete="off"
                          placeholder="Your email"
                        />
                        <label
                          className={
                            errors.email && touched.email ? "is-invalid" : ""
                          }
                        >
                          <i className="fa fa-at"></i>
                        </label>
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-field">
                        <Field
                          component="textarea"
                          type="text"
                          name="emailContent"
                          className={`form-control ${
                            errors.emailContent && touched.emailContent
                              ? "is-invalid"
                              : ""
                          }`}
                          autoComplete="off"
                          placeholder="Message"
                        />
                        <label
                          className={
                            errors.emailContent && touched.emailContent
                              ? "is-invalid"
                              : ""
                          }
                        >
                          <i className="fa fa-envelope"></i>
                        </label>
                        <ErrorMessage
                          name="emailContent"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <button
                        className="main-banner-btn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        <span>Send Message</span>
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
