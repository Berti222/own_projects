
// Card inputs & button ----------

const guests = document.querySelector('#guestsNumber');
const sendBtn = document.querySelector('#sendBtn');

// collapse section inputs ----------
const unitPrice = document.querySelector('#unitPrice');
const discountFromDay = document.querySelector('#discountFromDay');
const discount = document.querySelector('#discount');
const touristTax = document.querySelector('#touristTax');
const extraBedPrice = document.querySelector('#extraBedPrice');


const settingDataBtn = document.querySelector('#settingDataBtn');
const alertForSettingData = document.querySelector('#alertForSettingData');

const paying = document.querySelector('#paying');

// Event listeners ----------
window.addEventListener('load', Window_load_handler);
sendBtn.addEventListener('click', calculate);
guests.addEventListener('change', guestsChangeListener);

    //collapse section inputs
unitPrice.addEventListener('change', setunitPrice);
discountFromDay.addEventListener('change', setDiscountFromDay);
discount.addEventListener('change', setDiscount);
touristTax.addEventListener('change', setTouristTax);
extraBedPrice.addEventListener('change', setExtraBedPrice);

// Instantiating---------------------------
const myData = new StoredData();
const ui = new UI(myData, unitPrice, discountFromDay, discount, touristTax, extraBedPrice, paying);
const inputData = new InputData();

function Window_load_handler(){

    myData.isStoredDataExist();
    ui.settingCollapseInputs();
    ui.areThereValues();
}


//collapse section inputs -- Functions ------------------------

function setunitPrice(){

    myData.setData('unitPrice', unitPrice.value);
    ui.settingCollapseInputs();
}

function setDiscountFromDay(){

    myData.setData('discountFromDay', discountFromDay.value);
    ui.settingCollapseInputs();
}

function setDiscount(){

    myData.setData('discount', discount.value);
    ui.settingCollapseInputs();
}

function setTouristTax(){

    myData.setData('touristTax', touristTax.value);
    ui.settingCollapseInputs();
}

function setExtraBedPrice(){

    myData.setData('extraBedPrice', extraBedPrice.value);
    ui.settingCollapseInputs();
}

// Kids ---------------------------------------
function guestsChangeListener(){

    ui.under18DropDown();
}

// Sending button ---------------------------------------
function calculate() {
    const nights = document.querySelector('#nights');
    const numberOfKids = document.querySelector('#under18');

    const logic = new Logics(myData.getStoredData(), inputData.makingDataObject(nights, numberOfKids, guests));

    ui.payingPopUpWindow(logic.calsulatedObjecWhitSpaces() ,nights.value)    
}