class Logics {

    constructor(storedData, inputData) {
        this.storedData = storedData;
        this.inputData = this.objectValuesChecker(inputData);
    }

    calsulatedObjecWhitSpaces() {
        return this.bigNumsObjectWithSpace(this.calculate());
    }

    calculate() {
        return {
            price: this.price(),
            extraBed: this.numsOfExtrabed(),
            extraBedPriceForAllNight: this.extraBedForAllNights(),
            discount: this.hasDiscount(),
            priceWithExtrabed: this.priceWithExtrabed(),
            discountPrice: this.discountPrice(),
            finalPriceWithDiscount: this.finalPriceWithDiscount(),
            numsOfAdults: this.numsOfAdults(),
            touristTax: this.touristTax(),
            finalPriceWithTouristTax : this.finalPriceWithTouristTax()
        }
    }

    price() {
        return this.storedData.unitPrice * this.inputData.numberOfNights;
    }

    hasDiscount() {
        return this.inputData.numberOfNights > this.storedData.discountFromDay ?
            this.storedData.discount :
            0;
    }

    discount() {
        return this.storedData.discount / 100;
    }

    numsOfExtrabed() {
        return this.inputData.numberOfGuests > 2 ? this.inputData.numberOfGuests - 2 : 0;
    }

    extraBedPrice() {
        return this.storedData.extraBedPrice * this.numsOfExtrabed();
    }


    extraBedForAllNights() {
        return this.extraBedPrice() * this.inputData.numberOfNights
    }

    priceWithExtrabed() {
        return this.extraBedForAllNights() + this.price();
    }

    discountPrice() {
        const res =  this.priceWithExtrabed() * this.discount();
        return Math.round(res);
    }

    finalPriceWithDiscount() {
        return this.priceWithExtrabed() - this.discountPrice();
    }

    numsOfAdults() {
        return this.inputData.numberOfGuests - this.inputData.numberOfKids;
    }

    touristTax() {
        return this.numsOfAdults() * this.storedData.touristTax * this.inputData.numberOfNights;
    }

    finalPriceWithTouristTax(){
        return this.touristTax() + this.finalPriceWithDiscount();
    }

    objectValuesChecker(object) {
        for (let key in object) {
            if (object[key] == null)
                object[key] = 0;
            else if (typeof object[key] == 'string')
                object[key] = Number(object[key]);
        }
        return object;
    }

    bigNumbersWithSpace(num) {

        const number = num.toString();
        const numberArray = number.split('');
        numberArray.reverse();
        const resultArr = [];
        for (let i = 0; i < numberArray.length; i++) {
            if (i % 3 == 0 && i != 0)
                resultArr.push(' ');
            resultArr.push(numberArray[i]);
        }
        resultArr.reverse();
        return resultArr.join('');
    }

    bigNumsObjectWithSpace(object) {
        for (let key in object) {
            object[key] = this.bigNumbersWithSpace(object[key]);
        }
        return object;
    }
}
