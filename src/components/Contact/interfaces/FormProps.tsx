export interface FormDataProps {
   name: string;
   email: string;
   phoneNumber: string;
   company: string;
   message: string;
}
export interface FormStructureProps {
   [key: string]: {
      value: string;
      error: boolean;
      error_message: string;
   };
}