import { FC, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IconMapPinFilled, IconBrandLinkedin } from '@tabler/icons-react';

interface ContactFormProps {
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  message: string,
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<ContactFormProps>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  })

  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      console.log("Please fullfill the form")
    }

    emailjs
      .sendForm(
        'service_ygowsmq',
        'template_8h47km9',
        formRef.current!,
        'VMLj4xeAHls4ctRDH',

      )

      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: ''
    })
  };



  return (
    <div id="contact-me" className="full-form-wrapper">
      <div className="contact-section-wrapper">
        <div className="information-wrapper">
          <div className="information-container">
            <h1 className="info-text">
              Let's create something <span data-highlight="highlight"> cool </span> together
            </h1>
              <div className="icons-text-section">
                <p><span data-highlight="icon"><IconBrandLinkedin/></span> linkedin.com</p>
                {/*<p> <span data-highlight="icon"><IconPhoneFilled/></span> +420 723 866 407</p>*/}
                <p> <span data-highlight="icon"><IconMapPinFilled/></span> Usti nad Labem, Czech Republic</p>
              </div>
          </div>
        </div>

        <div className="background-form-wrapper">
          <div className='inside-form-wrapper'>
            <form ref={formRef} onSubmit={sendEmail} className="form-container" >
              <h4>Ready to transform your idea into reality? Hit me up and let's make it happen! </h4>
              <div className="name-group">
                <label className='name-label'>
                  <input  placeholder="First Name" type="text" name="first_name" value={formData.first_name} onChange={onChange} />
                </label>
                <label className='last-name-label'>
                  <input placeholder='Last Name' type="text" name="last_name" value={formData.last_name} onChange={onChange} />
                </label>
              </div>
              <div className="contact-group">
                <label className='email-label'>
                  <input placeholder='Email' type="email" name="email" value={formData.email} onChange={onChange} />
                </label>
                <label className='phone-label'>
                  <input placeholder='Phone' type="tel" name="phone" value={formData.phone} onChange={onChange} />
                </label>
              </div>
              <label className='message-label'>
                <textarea placeholder='Message...' name="message" value={formData.message} onChange={onChange} />
              </label>
              <button className='form-submit-button' type="submit" value="Send">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm