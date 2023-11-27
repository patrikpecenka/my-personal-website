export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateEmail = (email: string, t: (key: string) => string): ValidationResult => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = re.test(String(email).toLowerCase());

  if(!email) {
    return { error: t("errors.email_required"), isValid: false }
  } else if (!isValid){
    return { error: t("errors.email"), isValid: false }
  }
  return { isValid: true };
}

export const validatePhone = (phone: string, t: (key: string) => string): ValidationResult => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const mo = phone.replace(/[^+\d+]/g,"")
  const isValid = re.test(mo)

  if(!phone) {
    return {error: t("errors.phone_required"), isValid: false};
  } else if (!isValid) {
    return {error: t("errors.phone"), isValid: false};
  }
  return {isValid: true}
}
