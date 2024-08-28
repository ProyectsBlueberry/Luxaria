
import emailjs from '@emailjs/browser';

import { useTranslation } from "react-i18next";
import { FormStructureProps } from '../components/Contact/interfaces/FormProps';

export const useSendEmail = ( data: FormStructureProps ) => {

   const { t } = useTranslation();

   const createEmailTemplate = (data: FormStructureProps) => {
      const form = document.createElement('form');
      form.style.display = 'none';

      const values = Object.keys(data).map(fieldName => ({
         fieldName,
         value: data[fieldName].value
      }));

      values.forEach(({ fieldName, value }) => {
         const input = document.createElement('input');
         input.type = 'text';
         input.name = fieldName;
         input.value = value;
         form.appendChild(input);
      });

      return form;
   }

   const sendEmail = async () => {

      const form = createEmailTemplate(data);

      document.body.appendChild(form);

      try {
            await emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID,
            form, 
            import.meta.env.VITE_PUBLIC_KEY
         );

         const res = {
            title: t('email.success.title'),
            message: t('email.success.message')
         }

         return res;

      } catch (error: any) {
         const res = {
            title: t('email.error.title'),
            message: t('email.error.message')
         }
         return res;
      }
      finally {
         document.body.removeChild(form);
      }
   }
   
   return { sendEmail };
}