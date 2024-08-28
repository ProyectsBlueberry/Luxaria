import { useState } from "react";
import { useTranslation } from "react-i18next";

interface FormData {
   [key: string]: {
      value: string;
      error: boolean;
      error_message: string;
   };
}

export const useValidForm = (initialFormData: FormData) => {

   const { t } = useTranslation();
   const [newForm, setNewForm] = useState<FormData>(initialFormData);

   const validateEmptyFields = () => {
      const errorFields = Object.keys(newForm).filter(
         fieldName => newForm[fieldName].value.trim() === ''
      );

      setNewForm(prevFormData => {
         const updatedFormData = { ...prevFormData };

         errorFields.forEach(fieldName => {
            updatedFormData[fieldName] = {
               ...updatedFormData[fieldName],
               error: true,
               error_message: t('global.errors.empty_field'),
            };
         });

         return updatedFormData;
      });

      return errorFields.length == 0;
   };

   const validateEmail = () => {
      const email = newForm.email.value;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValidEmail = emailRegex.test(email);
      console.log('email validation: ' + isValidEmail);
      setNewForm(prevFormData => ({
         ...prevFormData,
         email: {
            ...prevFormData.email,
            error: !isValidEmail,
            error_message: t('global.errors.bad_email_format'),
         },
      }));
      
      return isValidEmail;
   };

   const validateForm = () => {
      const validEmpty = validateEmptyFields();
       const validEmail = validateEmail();
       
      //  console.log((validEmpty && validEmail));

      return (validEmpty && validEmail);
   };

   return {
      newForm,
      setNewForm,
      validateForm,
   };
};
