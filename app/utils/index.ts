import { toast } from "vue-sonner";

export const nationalCodeCheck = (code: string): boolean => {
  // Ensure the national code is 10 digits
  if (!/^\d{10}$/.test(code)) {
    return false;
  }

  // Convert the national code to an array of digits
  const codeDigits = code.split("").map(Number);

  // Extract the checksum digit (the 10th digit)
  const checksum = codeDigits[9];

  // Calculate the sum of the products of the first 9 digits and their weights (10 to 2)
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += (codeDigits[i] ?? 0) * (10 - i);
  }

  // Calculate the remainder when sum is divided by 11
  const remainder = sum % 11;

  // Check if the checksum is valid
  if (remainder < 2) {
    return checksum === remainder;
  } else {
    return checksum === 11 - remainder;
  }
};

export const bankCartCheck = (code: string): boolean => {
  // Remove non-numeric characters like spaces or dashes
  const cleanedCode = code.replace(/\D/g, "");

  // Ensure the card number is exactly 16 digits
  if (!/^\d{16}$/.test(cleanedCode)) {
    return false;
  }

  // Convert the card number into an array of digits
  const digits = cleanedCode.split("").map(Number);

  let sum = 0;
  let isSecond = false;

  // Apply the Luhn algorithm
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i] ?? 0;

    if (isSecond) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isSecond = !isSecond; // Toggle for every second digit
  }

  // The card is valid if the total sum is divisible by 10
  return sum % 10 === 0;
};

export const shebaCodeCheck = (code: string): boolean => {
  // Check if the length is 26 and starts with 'IR'
  if (!/^IR\d{24}$/.test(code)) {
    return false;
  }

  // Remove 'IR' and append '1827' (numeric equivalent of 'IR')
  const checkString = code.substring(4) + "1827" + code.substring(2, 4);

  // Convert the string to a number and calculate the remainder when divided by 97
  const mod97 = BigInt(checkString) % BigInt(97);

  // Return true if remainder is 1, false otherwise
  return mod97 === BigInt(1);
};

export const postalCodeCheck = (code: string): boolean => {
  return /^\d{10}$/.test(code);
};

export const copyToClipboard = (value: any) => {
  navigator.clipboard.writeText(value).then(
    function () {
      toast.success("Event has been created", {
        description: "کپی شد",
      });
    },
    function (err) {
      toast.error("Event has been created", {
        description: "خطا در کپی",
      });
    },
  );
};

export const checkPayload = (params: any) => {
  const result = Object.keys(params).reduce((acc: any, key: string) => {
    if (
      params[key] !== null &&
      params[key] !== undefined &&
      params[key] !== ""
    ) {
      acc[key] = params[key];
    }
    return acc;
  }, {});

  return result;
};

export const createFormData = (data: any) => {
  const formData = new FormData();
  return Object.keys(data).forEach((key) => formData.append(key, data[key]));
};

export const formatMessages = (value: string) => {
  if (/\r\n/g.test(value)) {
    return value.replace(/\r\n/g, "<br>");
  } else if (/\n/g.test(value)) {
    return value.replace(/\n/g, "<br>");
  } else if (/\r/g.test(value)) {
    return value.replace(/\r/g, "<br>");
  } else if (/\n\r/g.test(value)) {
    return value.replace(/\n\r/g, "<br>");
  } else if (/\r\n\r\n/g.test(value)) {
    return value.replace(/\r\n\r\n/g, "<br>");
  } else if (/\n\n/g.test(value)) {
    return value.replace(/\n\n/g, "<br>");
  } else if (/\r\r/g.test(value)) {
    return value.replace(/\r\r/g, "<br>");
  } else if (/\n\r\n\r/g.test(value)) {
    return value.replace(/\n\r\n\r/g, "<br>");
  } else {
    return value;
  }
};

export const toCurrencyString = (value: string | number) => {
  const number = Number(value);
  if (isNaN(number)) {
    return "";
  }
  return number.toLocaleString("fa-IR");
};

export function toCurrencyStringGB(value: string | number) {
  const number = Number(value);
  if (isNaN(number)) {
    return "";
  }
  return number.toLocaleString("en-GB");
}

export function toCurrencyFixedString(value: string | number, decimal: number) {
  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimal,
  };
  return Number(value).toLocaleString("fa-IR", options);
}

export const milifyAmount = (value: string | number, decimal?: number) => {
  value = Number(value);
  if (value < 1000) {
    const fixed = value.toFixed(decimal || 0);
    return parseFloat(fixed) || "بدون قیمت";
  }
  var si = [
    { v: 1e3, s: " هزار" },
    { v: 1e6, s: " میلیون" },
    { v: 1e9, s: " میلیارد" },
    { v: 1e12, s: " بیلیون" },
    { v: 1e15, s: " بیلیارد" },
    { v: 1e18, s: " تریلیون" },
  ];
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (value >= (si[i]?.v ?? 0)) {
      break;
    }
  }
  return (
    (value / (si[i]?.v ?? 0))
      .toFixed(decimal || 2)
      .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + (si[i]?.s ?? "")
  );
};

export function sizeOfTheFile(value: number) {
  if (value < 1024) {
    return value + "B";
  }
  if (value < 1024 * 1024) {
    return (value / 1024).toFixed(2) + "KB";
  }
  if (value < 1024 * 1024 * 1024) {
    return (value / 1024 / 1024).toFixed(2) + "MB";
  }
  return (value / 1024 / 1024 / 1024).toFixed(2) + "GB";
}

export const convertPersianNumber = (value: string) => {
  return value.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
};

export const separate = (value: string) => {};

export function truncateString(value: string, size: number) {
  value = value.toString();
  return value.substring(0, size) + "...";
}

export const truncateCenterString = (value: string, size: number) => {
  value = value.toString();
  if (value.length <= size) {
    return value;
  }
  const start = Math.floor((size - 3) / 2);
  const end = Math.ceil((size - 3) / 2);
  return (
    value.substring(0, start) + "..." + value.substring(value.length - end)
  );
};
