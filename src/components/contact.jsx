import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_abfnrgr', 'template_6ef3cjo', e.target, 'lLFPejDJp9Dz_ywF4'
      )
      .then(
        (result) => {
          console.log(result.text)
          //clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='footer'>
      <div className='col-md-12'>
      <div className='row'>
        <div className='container text-center'>

          <ul>
            <li>
            <a href="javascript:alert('The following information (Impressum) is required under sec. 5 German Telemedia Act (TMG). \n
            Management board: Arezki Djelouadji, Hinsight Analytics UG  (haftungsbechränkt) \n

            Address: Frankensteiner Platz 25, 60594 Frankfurt a. Main. \n

            Registration: District court of Frankfurt am Main Reg. No. 118943 \n

            Out-of-court settlement of disputes / information duties according to § 36 Consumer Dispute Settlement Act (VSBG). \n

            Note for clarification:  \n

            Our offer and our services are directed exclusively at companies. We are therefore not obliged to participate in dispute resolution proceedings before a consumer arbitration board as defined in § 2 VSGB.G) \n

            You are welcome to contact us via:

            contact@tracific.com');" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Imprint</a>
            </li>
          </ul>

          <ul>
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a href="javascript:alert('No data is collected on this website apart from the web server logs. The server logs are used for system administration purposes only. There is no cookie nor beacons, and no forms to be filled out with personal information. Additionally there is no statistics collection tool, no third party content delivery (ads) through which your information could be transmitted to or from tracific.com website. This website is one simple landing page which is short, efficient and minimalistic and self-served. If you have questions or concerns please contact admin@tracific.com');" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy Policy</a>
          </li>
          </ul>
        </div>
          <div className='container text-center'>
        &copy; All rights reserved. TemplateWire.
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
