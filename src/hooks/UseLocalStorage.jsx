import { useState } from 'react';

const useLocalStorage = (record, initialValue) => {
    // Nova kuka (hook) čiji je zadatak da iz localStorage-a povuče podatke 
    // Definisanje početnog stanja
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Nalaženje stavke iz localStorage-a po zapisu record
            const item = window.localStorage.getItem(record);
            // Ukoliko postoje u memoriji podaci, oni će biti postavljeni kao početno stanje, u suprotnom 
            // postavljamo prosleđenu početnu vrednost
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // I kada se desi greška takođe vraćamo prosleđenu početnu vrednost
            console.log(error);
            return initialValue;
        }
    })

    // definisanje funkcije koja menja vrednost
    const setValue = value => {
        try {
            // kada se funkciji za update stanja prosledi vrednost value, tu vrednost želimo i da skladištimo
            const dataToStore = value;
            setStoredValue(dataToStore);
            window.localStorage.setItem(record, JSON.stringify(dataToStore));
        } catch (error) {
            console.log(error);
        }
    };
    // na kraju treba vratiti stanje i funkciju za promenu stanja
    return [storedValue, setValue];
}

export default useLocalStorage;