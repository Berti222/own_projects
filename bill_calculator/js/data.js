
class StoredData {

    getStoredData() {
        const storedDataString = localStorage.getItem('storedData');

        return JSON.parse(storedDataString);
    }
    setStoredData(externalData) {
        const storedDataString = JSON.stringify(externalData);
        localStorage.setItem('storedData', storedDataString);
    }
    
    setDataIfNotExists() {
        let dataObject =
        {
            unitPrice: null,
            discountFromDay: null,
            discount: null,
            touristTax: null,
            extraBedPrice: null
        }
        return dataObject;
    }

    setData(key, value){
        const storedData =  this.getStoredData();
        storedData[key] = this.parseIntoNumber(value);

        this.setStoredData(storedData);

    }

    objectValuesIntoNumber(object) {
        for(let key in object){
            object[key] = this.parseIntoNumber(object[key]);
        }
    }


    parseIntoNumber(value){
        if(typeof value === 'string' || typeof value === 'number'){
            if(value === ''){
                return null;
            }
            return Number(value);
        } else {
            return null;
        }
    }

    isStoredDataExist(){
        if(this.getStoredData() == null){
            this.setStoredData(this.setDataIfNotExists());
        }
    }
    
}

class InputData {

    makingDataObject(){
        let numberOfKids = document.querySelector('#under18');
        numberOfKids = numberOfKids ? numberOfKids.value : 0;
        const numberOfNights = nights.value;
        const numberOfGuests = guests.value;

        return {
            numberOfNights : numberOfNights,
            numberOfGuests : numberOfGuests,
            numberOfKids : numberOfKids
        }
    }
}
