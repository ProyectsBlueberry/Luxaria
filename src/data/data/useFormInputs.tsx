import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
   name: string;
   label: string;
   type: 'text' | 'number' | 'email' | 'date' | 'select';
   maxLength?: number;
   inputWidth?: number;
   inputHeight?: number;
   options?: options[]
   full: boolean;
}


export interface options {
   value: string,
   text: string
}
export const useFormInputs = () => {
   const { t } = useTranslation();
   const [inputsFields, setInputsFields] = useState<Props[]>([]);


   useEffect(() => {
      setInputsFields([
         {
            name: 'name',
            label: t('contact.form_contact.input_1'),
            type: 'text',
            maxLength: undefined,
            inputWidth: 90,
            inputHeight: 3,
            full: false
         },
         {
            name: 'gender',
            label: t('contact.form_contact.input_2'),
            type: 'text',
            maxLength: undefined,
            inputWidth: 90,
            inputHeight: 3,
            full: false
         },
         {
            name: 'phone',
            label: t('contact.form_contact.input_3'),
            type: 'number',
            maxLength: undefined,
            inputWidth: 90,
            inputHeight: 3,
            full: false
         },
         {
            name: 'email',
            label: t('contact.form_contact.input_4'),
            type: 'email',
            maxLength: undefined,
            inputWidth: 90,
            inputHeight: 3,
            full: false
         },
         {
            name: 'date',
            label: t('contact.form_contact.input_5'),
            type: 'date',
            maxLength: undefined,
            inputWidth: 90,
            inputHeight: 3,
            full: false
         },
         {
            name: 'specialty',
            label: t('contact.form_contact.input_7'),
            type: 'select',
            maxLength: undefined,
            inputWidth: 90,
            inputHeight: 3,
            full: false,
            options: [
               {
                  "value": "Estudios detección de cáncer de colon y gástrico",
                  "text": "Estudios detección de cáncer de colon y gástrico"
               },
               {
                  "value": "Endoscopía",
                  "text": "Endoscopía"
               },
               {
                  "value": "Colonoscopía",
                  "text": "Colonoscopía"
               },
               {
                  "value": "Endoscopía terapéutica",
                  "text": "Endoscopía terapéutica"
               },
               {
                  "value": "Colangiopancreatografía retrógrada endoscópica",
                  "text": "Colangiopancreatografía retrógrada endoscópica"
               },
               {
                  "value": "Endoscopía Bariátrica",
                  "text": "Endoscopía Bariátrica"
               },
               {
                  "value": "Detección de bacteria H. Pylori",
                  "text": "Detección de bacteria H. Pylori"
               },
               {
                  "value": "Pruebas de aliento",
                  "text": "Pruebas de aliento"
               },
               {
                  "value": "Cirugía",
                  "text": "Cirugía"
               },
               {
                  "value": "Consulta",
                  "text": "Consulta"
               }
            ]
         },

      ]);

   }, []);

   return { inputsFields };
}