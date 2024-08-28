import emailjs from '@emailjs/browser';

type ValidateAccountResult = { status: 'success' | 'error', title: string, message: string };

export const emailSend = (data: any, template: string, service: string, keypublic: string): Promise<ValidateAccountResult> => {
   console.log(data)

   return new Promise((resolve, reject) => {
      emailjs.send(service, template, data, keypublic)
         .then(response => {
            if (response.status !== 200) {
               reject({
                  status: 'success',
                  title: 'Lo sentimos!',
                  message: 'Se produjo un error al recibir su información. Inténtelo de nuevo o utilice nuestro otro método de contacto.'
               });
            }

            resolve({
               status: 'success',
               title: 'Hemos recibido tu información!',
               message: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.'
            });
         })
         .catch(error => {
            console.log(error);
            reject({
               status: 'success',
               title: 'Lo sentimos!',
               message: 'Se produjo un error al recibir su información. Inténtelo de nuevo o utilice nuestro otro método de contacto.'
            });
         });
   });
};
