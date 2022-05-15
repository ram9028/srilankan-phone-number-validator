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

const numberType = (ext) => {
  const phoneTypes = phone.phoneTypes;
  const msisdnCategory = phoneTypes.find((phoneType) =>
    phoneType.prefix.includes(ext)
  );
  return msisdnCategory ? msisdnCategory.name : "unknown";
};

exports.validatePhone = (phone) => {
  const msisdn = standardizeMSISDN(phone);

  let isValid = false;

  const resp = (status, info) => {
    return {
      phone: msisdn ? msisdn : phone,
      valid: status,
      info,
      type: numberType(msisdn.substring(0, 2)),
    };
  };

  if (msisdn != "") {
    isValid = true;

    const info = isValid
      ? "Is valid srilankan phone number"
      : `${msisdn} is not a valid lankan phone number`;

    return resp(isValid, info);
  } else {
    return resp(
      false,
      `Phone number ${phone} is not a valid srilankan number`,
      "unknown"
    );
  }
};
