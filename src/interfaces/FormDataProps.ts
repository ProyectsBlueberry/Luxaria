export interface FormDataProps {
   [key: string]: {
      value:            string;
      type:             string
      error:            boolean;
      error_message:    string;
      required:         boolean,
   };
}