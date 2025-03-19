export function setArrayLocalStorage(localName, arraytName){
    localStorage.setItem(localName, JSON.stringify(arraytName));
}

export function getArrayLocalStorage(localName, arrayName){
    const arrayData = localStorage.getItem(localName);
    if(arrayData){
        const recoveredData = JSON.parse(arrayData);
        recoveredData.forEach(item => {
            arrayName.push(item);
        });
    }
}