import { FC, useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { IconMapPinFilled, IconBrandLinkedin } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
//import useShowComponentForm from 'hooks/useShowComponentForm';
import { ValidationResult, validateEmail, validatePhone } from 'utils/formValidation';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ContactFormProps {
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  message: string,
}

const ContactForm: FC = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [formData, setFormData] = useState<ContactFormProps>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  })

  const main = useRef<any>(null)
  const [isDelayed, setIsDelayed] = useState(false)

  //delays useGSAP markers for correct scroll trigger behavior
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsDelayed(true);
    }, 200);

    return () => clearTimeout(timeOut)
  }, []);

  useGSAP(() => {
      if(!isDelayed) {
        return
      }
      gsap.fromTo(".form",
      {
        opacity: 0,
        x: -500
      },{
        duration: 2,
        opacity: 1,
        x: 0,
        delay: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".form",
          start: "top bottom-=50",
          end: "top center",
          id: "contact",
          scrub: 2
        }
      })
      // ScrollTrigger.create({
      //   trigger: ".contact-section-wrapper",
      //   pin: true,
      //   id: "contact-me",
      //   start:"bottom-=500 center",
      //   end:"bottom-=300 center",
      //   scrub: 1,
      //   markers: true,
      //   toggleActions: "play reverse play reverse"
      // });
    },  {dependencies: [isDelayed], scope: main, revertOnUpdate: true});
  
  //useShowComponentForm({ selector: '.full-form-wrapper'})
  const [t] = useTranslation("translation")
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const sendEmail = async (e: any) => {
    e.preventDefault();
    const emailValidation: ValidationResult = validateEmail(formData.email, t);
    const phoneValidation: ValidationResult = validatePhone(formData.phone, t)

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      !emailValidation.isValid ||
      !phoneValidation.isValid
    ) {
      setEmailError(emailValidation.error || "")
      setPhoneError(phoneValidation.error || "")
      return;
    }
    setEmailError("")
    setPhoneError("")

    try {
      const result = await emailjs.sendForm(
        'service_ygowsmq',
        'template_8h47km9',
        formRef.current!,
        'VMLj4xeAHls4ctRDH',
      );
    
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
      });

      setSuccessMessage(t("success.form_success"))

      console.log(result.text)

    } catch (err) {
      console.error(err)
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage]);


  return (
    <div id="contact-me" className="full-form-wrapper" ref={main}>
      <div className="form contact-section-wrapper">
        <div className="information-wrapper">
          <div className="information-container">
            <h1 className="info-text">
              {t("contact_form.info_text_1")} 
              <span data-highlight="highlight"> {t("contact_form.info_text_2")} </span> {t("contact_form.info_text_3")}
            </h1>
              <div className="icons-text-section">
                <a href="https://www.linkedin.com/in/ppecenka/" rel="noreferrer" target='_blank'>
                  <p>
                    <span data-highlight="icon">
                      <IconBrandLinkedin/>
                    </span> 
                      {t("contact_form.linkedin")}
                  </p>
                </a>
                {/*<p> <span data-highlight="icon"><IconPhoneFilled/></span> +420 723 866 407</p>*/}
                <p>
                  <span data-highlight="icon">
                    <IconMapPinFilled/>
                  </span>
                    {t("contact_form.adress")}
                </p>
              </div>
          </div>
        </div>

        <div className="background-form-wrapper">
          <div className='inside-form-wrapper'>
            <form ref={formRef} onSubmit={sendEmail} className="form-container" >
              <h4>{t("contact_form.h4_text")}</h4>
              <div className="name-group">
                <label className='name-label'>
                  <input  
                    placeholder={t("contact_form.ph_fname")} 
                    type="text" 
                    name="first_name" 
                    value={formData.first_name} 
                    onChange={onChange}
                  />
                </label>
                <label className='last-name-label'>
                  <input 
                    placeholder={t("contact_form.ph_lname")} 
                    type="text" 
                    name="last_name" 
                    value={formData.last_name} 
                    onChange={onChange} 
                  />
                </label>
              </div>
              <div className="contact-group">
                <label className='email-label'>
                  <input 
                    placeholder={t("contact_form.ph_email")} 
                    name="email" 
                    value={formData.email} 
                    onChange={onChange} 
                  />
                  <p className='error-paragraph'>{emailError}</p>
                </label>
                <label className='phone-label'>
                  <input 
                    placeholder={t("contact_form.ph_phone")} 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={onChange} 
                  />
                  <p className='error-paragraph'>{phoneError}</p>
                </label>
              </div>
              <label className='message-label'>
                <textarea 
                  placeholder={t("contact_form.ph_message")} 
                  name="message" 
                  value={formData.message} 
                  onChange={onChange} 
                />
              </label>
              <label className="error-label">
              </label>
              <button className='form-submit-button' type="submit" value="Send">{t("contact_form.button")}</button>
              {successMessage && <p className='success-paragraph'>{successMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm