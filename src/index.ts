// Automata forditas:
// npx tsc --watch
// npx webpack watch

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitButton')!.addEventListener('click', () => {
        let elem : HTMLInputElement= document.getElementById('usernameInput') as HTMLInputElement;
        let felhasznaloNev : string = elem.value;
        
        if (felhasznaloNev.length < 6 || felhasznaloNev.length > 30 || felhasznaloNev.includes('&') || felhasznaloNev.includes('=') || felhasznaloNev.includes('_') || felhasznaloNev.includes('-') || felhasznaloNev.includes('+') || /* felhasznaloNev.includes('\,') || felhasznaloNev.includes('\'')*/ felhasznaloNev.includes('<') || felhasznaloNev.includes('>') || (felhasznaloNev.match('.')!.length > 1)){
            console.log("hibas nev");
        }
         
    });
});