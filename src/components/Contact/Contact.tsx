import { ChangeEvent, useEffect, useState } from 'react';
import Loader from "react-js-loader";
import { useValidForm } from './hooks/useValidForm';
import { AlertModal } from './components/Modal/AlertModal';
import { useTranslation } from 'react-i18next';
import './contact_styles.scss';
import { emailSend } from '../../utils/SenEmail';
import AnimatorFade from '../AnimatorFade/AnimatorFade';
import useMobile from '../../hooks/useMobile';
import { icon_email_contact, icon_whatsapp_contact } from '../../data/img/img-data';

export const Contact = () => {

   const redirectToExternalLink = (href: string) => {
      window.open(href, '_blank');
   };

   const { isMobile } = useMobile();
   const { t } = useTranslation();
   const [clearInput, setClearInput] = useState(false);
   const [sending, setSending] = useState(false);
   const [modalVisible, setModalVisible] = useState(false);
   const [modalTitle, setModalTitle] = useState('');
   const [modalMessage, setModalMessage] = useState('');

   const [formData, setFormData] = useState<Record<string, { value: string; error: boolean; error_message: string }>>({
      name: { value: '', error: false, error_message: '' },
      phone: { value: '', error: false, error_message: '' },
      email: { value: '', error: false, error_message: '' },
      message: { value: '', error: false, error_message: '' },
   });

   const [num1, setNum1] = useState<number>(Math.floor(Math.random() * 10));
   const [num2, setNum2] = useState<number>(Math.floor(Math.random() * 10));
   const [captcha, setCaptcha] = useState<string>('');
   const [captchaError, setCaptchaError] = useState<boolean>(false);

   useEffect(() => {
      setFormData({
         name: { value: '', error: false, error_message: '' },
         phone: { value: '', error: false, error_message: '' },
         email: { value: '', error: false, error_message: '' },
         message: { value: '', error: false, error_message: '' },
      });
   }, []);

   useEffect(() => {
      if (clearInput) {
         setFormData({
            name: { value: '', error: false, error_message: '' },
            phone: { value: '', error: false, error_message: '' },
            email: { value: '', error: false, error_message: '' },
            message: { value: '', error: false, error_message: '' },
         });
         setClearInput(false);
      }
   }, [clearInput]);

   const { newForm, setNewForm, validateForm } = useValidForm(formData);

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setNewForm((prevFormData) => ({
         ...prevFormData,
         [name]: {
            ...prevFormData[name],
            value: value,
            error: false,
            error_message: '',
         },
      }));
   };

   const handleCaptchaChange = (e: ChangeEvent<HTMLInputElement>) => {

      const newValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
      setCaptcha(newValue);
      setCaptchaError(false);
   };

   const SendLeads = async () => {
      try {
         setClearInput(false);
         setSending(true);

         const isValid = validateForm();
         if (!isValid || parseInt(captcha) !== num1 + num2) {
            setCaptchaError(parseInt(captcha) !== num1 + num2);
            setSending(false);
            return;
         }

         setModalVisible(true);

         const data = {
            name: newForm.name.value,
            phone: newForm.phone.value,
            email: newForm.email.value,
            message: newForm.message.value,
         };

         const { message, title } = await emailSend(data, import.meta.env.VITE_EMAIL_TEMPLATE, import.meta.env.VITE_EMAIL_SERVICE, import.meta.env.VITE_PRIVATE_KEY);

         setModalTitle(title);
         setModalMessage(message);
         setClearInput(true);
         setCaptcha('');
         setNum1(Math.floor(Math.random() * 10));
         setNum2(Math.floor(Math.random() * 10));
      } catch (error: any) {
         // console.log(error)
         setModalTitle('lo sentimos!');
         setModalMessage('Se produjo un error al recibir su información. Inténtelo de nuevo o utilice nuestro otro método de contacto.');
      } finally {
         setSending(false);
      }
   };

   return (
      <>
         <section className="contact_main_container" id='contact-id'>
            {
               modalVisible &&
               <div className='loder'>
                  {
                     sending && <Loader type='bubble-top' />
                  }
                  {
                     !sending &&
                     <>
                        <AlertModal type={1}
                           visible={modalVisible}
                           title={modalTitle}
                           message={modalMessage}
                           onPress={() => setModalVisible(false)}
                        />
                     </>
                  }
               </div>
            }
            <div className='contact_container'>
               <AnimatorFade className='contacts_container'>
                  <div>
                     <h2 className='title'>{t('contact.title')}</h2>
                     {
                        !isMobile &&
                        <>
                           <h3>{t('contact.subtitle')}</h3>
                           <p onClick={() => redirectToExternalLink('https://wa.me/523318987845')}><img className='icon-whats' src={icon_whatsapp_contact.url} alt={icon_whatsapp_contact.alt} /> {t('contact.contacts.cont_1')}</p>
                           <p onClick={() => redirectToExternalLink('mailto:contacto@luxaria.com')}><img className='icon-email' src={icon_email_contact.url} alt={icon_email_contact.alt} /> {t('contact.contacts.cont_2')}</p>
                        </>
                     }
                  </div>
               </AnimatorFade>
               <div className='form_container'>
                  <label htmlFor={'name'} />
                  <div className='input_container' style={{ width: '100%' }}>
                     <div className="before"></div>
                     <input
                        placeholder={t('contact.inputs.input_1')}
                        value={newForm.name.value}
                        type='text'
                        name={'name'}
                        required
                        onChange={handleChange}
                     />
                     {
                        newForm.name.error &&
                        <label className='error error_label' >{newForm.name.error_message}</label>
                     }
                  </div>
                  <label htmlFor={'Teléfono'} />
                  <div className='input_container' style={{ width: '100%' }}>
                     <div className="before"></div>
                     <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={newForm.phone.value}
                        onChange={(e) => {
                           e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                           handleChange(e)
                        }}
                        placeholder={t('contact.inputs.input_2')}
                     />
                     {
                        newForm.phone.error &&
                        <label className='error error_label' >{newForm.phone.error_message}</label>
                     }
                  </div>
                  <label htmlFor={'email'} />
                  <div className='input_container' style={{ width: '100%' }}>
                     <div className="before"></div>
                     <input
                        placeholder={t('contact.inputs.input_3')}
                        value={newForm.email.value}
                        type='text'
                        name={'email'}
                        required
                        onChange={handleChange}
                     />
                     {
                        newForm.email.error &&
                        <label className='error error_label' >{newForm.email.error_message}</label>
                     }
                  </div>

                  <label className='label-textarea' htmlFor={'message'}>Mensaje</label>
                  <div className='textarea_container' style={{ width: '100%' }}>
                     <div className="before"></div>
                     <textarea id='message' name={'message'} required 
                     onChange={handleChange}  
                     value={newForm.message.value}
                     style={{
                        height: isMobile ? `30vw` : `8vw`,
                     }}
                     ></textarea>
                     {
                        newForm.message.error &&
                        <label className='error error_label error-textarea' >{newForm.message.error_message}</label>
                     }
                  </div>

                  <div className='captcha_container'>
                     <div className="before"></div>
                     <p className='info-message'>Resuelve la siguiente operación para enviar tu mensaje:</p>
                     <label htmlFor={'captcha'}>{`${num1} + ${num2} =`}</label>
                     <input
                        id='captcha'
                        value={captcha}
                        type='text'
                        name={'captcha'}
                        required
                        onInput={handleCaptchaChange}
                     />
                     {
                        captchaError &&
                        <>
                           <br />
                           <label className='error error_label'>Respuesta incorrecta</label>
                        </>
                     }
                  </div>

                  <div className='button_container_form'>
                     <button className="custom-btn btn-13" onClick={SendLeads}>{t('global.btn_send')}</button>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
