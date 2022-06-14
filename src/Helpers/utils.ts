type LocalStorageProps = {
    name:string,
    data:string
}

export function setLocalStorage(name:string, data:string) {
    localStorage.setItem(name,data);
  }

  export function removeLocalStorage(name:string) {
    localStorage.removeItem(name);
  }
    
  export function getLocalStorage(name:string) {
    return localStorage.getItem(name);
  }
  
  
  export function checkIfValidEmail(str:string) {
    const EMAIL_REGEX = /^[^@]+@\w+(\.\w+)+\w$/;  
    return EMAIL_REGEX.test(str);
  }
  
  export function checkIfValidPasswordWithSpecialCharacters(str:string) {
    const PASSWORD_REGEX = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return PASSWORD_REGEX.test(str);
  }
  