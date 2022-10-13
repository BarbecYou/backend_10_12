// Automata forditas:
// npx tsc --watch
// npx webpack watch

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitButton')!.addEventListener('click', () => {
        let felhasznaloNev : string = (document.getElementById('usernameInput') as HTMLInputElement).value;
        let email : string = (document.getElementById('emailInput') as HTMLInputElement).value;

        
        if (felhasznaloNev.length < 6 || felhasznaloNev.length > 30 || felhasznaloNev.includes('&') || felhasznaloNev.includes('=') || felhasznaloNev.includes('_') || felhasznaloNev.includes('-') || felhasznaloNev.includes('+') || felhasznaloNev.includes('\,') || felhasznaloNev.includes('\'') || felhasznaloNev.includes('<') || felhasznaloNev.includes('>') || (((felhasznaloNev.split('.').length - 1) > 1) || (felhasznaloNev[0] == '.'))){
            window.alert("Hibás felhasználónév!");
        }
        if (!(email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ))){
            window.alert("Hibás e-mail cím!");
        }else {
            window.alert("err!");
        }
         
    });
});

const validateEmail = (email : string) => {
    const re : RegExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
  };