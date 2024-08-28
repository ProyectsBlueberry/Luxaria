export const FuncionWhatsApp = () => {
    const phoneNumber = '523329738939';
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  };