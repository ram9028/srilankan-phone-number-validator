const { phone } = require("../data/phone");

const standardizeMSISDN = (number) => {

  const phoneLength = `${number}`.length;

  const isValid = phone.regex(number);

  if (!isValid) return "";

  switch (phoneLength) {
    case 9:
      return number;
    case 10:
      return `${number}`.substring(1);
    case 12:
      return `${number}`.substring(3);
    case 13:
      return `${number}`.substring(4);
    default:
      return "";
  }

};

exports.validatePhone = (phone) => {

  const msisdn = standardizeMSISDN(phone);

  let isValid = false;

  const resp = (status) => {
    return {
        phone: msisdn ? msisdn : phone,
        valid: status
    };
  };

  if (msisdn != "") {

    const info = isValid
      ? "Is valid srilankan phone number"
      : `${msisdn} is not a valid ${provider.name} phone number`;

    return resp(isValid, info, telco ? telco : "unknown");
  } else {
    return resp(
      false,
      `Phone number ${phone} is not a valid srilankan number`,
      "unknown"
    );
  }
};