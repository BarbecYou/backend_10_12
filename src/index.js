"use strict";
// Automata forditas:
// npx tsc --watch
// npx webpack watch
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitButton').addEventListener('click', () => {
        let elem = document.getElementById('usernameInput');
        let felhasznaloNev = elem.value;
        if (felhasznaloNev.length < 6 || felhasznaloNev.length > 30 || felhasznaloNev.includes('&') || felhasznaloNev.includes('=') || felhasznaloNev.includes('_') || felhasznaloNev.includes('-') || felhasznaloNev.includes('+') || /* felhasznaloNev.includes('\,') || felhasznaloNev.includes('\'')*/ felhasznaloNev.includes('<') || felhasznaloNev.includes('>') || (felhasznaloNev.match('.').length > 1)) {
            console.log("hibas nev");
        }
    });
});
