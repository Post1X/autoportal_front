export class MaskHelper {
  static formatPhoneNumber = (text?: string) => {
    if (!text) {
      return;
    }

    const cleaned = text.replace(/\D/g, '');

    if (cleaned.length === 1) {
      text = '7' + cleaned;
    } else if (cleaned.length === 2) {
      text = '8' + cleaned;
    } else if (cleaned.length > 11) {
      cleaned = cleaned.slice(0, 11);
    }

    let formattedPhoneNumber = '+';

    for (let i = 0; i < cleaned.length; i++) {
      if (i === 1) {
        formattedPhoneNumber += ' (' + cleaned[i];
      } else if (i === 4) {
        formattedPhoneNumber += ') ' + cleaned[i];
      } else if (i === 7 || i === 9) {
        formattedPhoneNumber += ' ' + cleaned[i];
      } else {
        formattedPhoneNumber += cleaned[i];
      }
    }

    return formattedPhoneNumber;
  };

  static clearFormat = (phone: string) => {
    return '+' + phone.replace(/\D/g, '').slice(0, 11);
  };
}
