import {  useState } from "react";
import { FormDataProps } from "../interfaces/FormDataProps";

export const useFormData = (initailFormData: FormDataProps) => {
   const [formDataState, setFormDataState] = useState(initailFormData);
   const [emailRule] = useState(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
   

   const validateForm = () => {
      let isValid = true;
   
      for (const fieldName in formDataState) {
         const trimmedValue = formDataState[fieldName].value.trim();
         const isRequired = formDataState[fieldName].required;
   
         if (isRequired && trimmedValue === '') {
            isValid = false;
            setFormDataState((prevData) => ({
               ...prevData,
               [fieldName]: {
                  ...prevData[fieldName],
                  error: true,
                  error_message: 'Este campo es obligatorio',
               },
            }));
         } 
         else if (formDataState[fieldName].type === 'email' && !isEmail(trimmedValue)) {
            isValid = false;
            setFormDataState((prevData) => ({
               ...prevData,
               [fieldName]: {
                  ...prevData[fieldName],
                  error: true,
                  error_message: 'Por favor, introduzca un formato de correo electrónico válido.',
               },
            }));
         }
      }
   
      return isValid;
   };
   

   
   const isEmail = (value: string) => {
      return emailRule.test(value);
   }

   return { formDataState, validateForm };
}