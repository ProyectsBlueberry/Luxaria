import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
   name:             string;
   label:            string;
   type:            'text'|'number'|'email';
   maxLength?:       number;   
   inputWidth?:      number;
   inputHeight?:     number;
   full:             boolean;   
}

export const useInputsSmall = () => {

   const { t } = useTranslation();
   const [inputsFields, setiInputsFields] = useState<Props[]>([]);

   useEffect(() => {
      setiInputsFields([
         {
            name: 'name',
            label: t('global.placeholder_form.name'),
            type: 'text',
            maxLength: undefined,
            inputWidth: 95,
            inputHeight: 1.5,
            full: false
         },
         {
            name: 'phoneNumber',
            label: t('global.placeholder_form.phone'),
            type: 'number',
            maxLength: 10,
            inputWidth: 95,
            inputHeight: 1.5,
            full: false
         },
         {
            name: 'email',
            label: t('global.placeholder_form.email'),
            type: 'email',
            maxLength: undefined,
            inputWidth: 95,
            inputHeight: 1.5,
            full: false
         }
      ])
   }, [] )
   

   return { inputsFields };
}