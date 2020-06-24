export const createControl = (config, validation) => ({
  ...config,
  validation,
  valid: !validation,
  touched: false,
  value: '',
});

export const validate = (value, validation = null) => {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== '' && isValid;
  }

  return isValid;
};

export const validateForm = (formControls) => {
  let isFormValid = true;

  const formKeys = Object.keys(formControls);
  for (let i = 0; i < formKeys.length; i += 1) {
    const item = formKeys[i];
    if (Object.prototype.hasOwnProperty.call(formControls, item)) {
      isFormValid = formControls[item].valid && isFormValid;
    }
  }

  return isFormValid;
};
