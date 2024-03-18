export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?!.*\s).{8,12}$/;
export const lowerCaseRegex = /(?=.*[a-z])/;
export const upperCaseRegex = /(?=.*[A-Z])/;
export const digitRegex = /(?=.*\d)/;
export const specialRegex = /(?=.*[!@#$%^&*()_+}{":;'?/>.<,])/;
export const whiteSpaceRegex = /\s/;
