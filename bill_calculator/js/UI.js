class UI {

    constructor(storedData){
        this.storedData= storedData;
    }

    settingCollapseInputs() {
        const storedDataObject = this.storedData.getStoredData();

        unitPrice.value = storedDataObject.unitPrice;
        discountFromDay.value = storedDataObject.discountFromDay;
        discount.value = storedDataObject.discount;
        touristTax.value = storedDataObject.touristTax;
        extraBedPrice.value = storedDataObject.extraBedPrice;

    }

    areThereValues() {        
        if (unitPrice.value == '' || 
            discountFromDay.value == '' ||
            discount.value == '' || 
            touristTax.value == ''||
            extraBedPrice.value == '') {

            alertForSettingData.setAttribute('style', 'display:block');
        } else {
            alertForSettingData.setAttribute('style', 'display:none');
        }
    }

    under18DropDown() {
        const under18Div = document.querySelector('.under18Div');
        if(under18Div){
            under18Div.remove();
        }

        const options = Number(guests.value);
        const mydiv = document.createElement('div');
        mydiv.innerHTML = `
        <div class="d-flex p-2 bd-highlight under18Div">
            <div class="input-group-prepend">
                <label class="input-group-text" for="under18">Kiskorúak száma:</label>
            </div>
            <select class="custom-select" id="under18">
                <option vaule="0" selected>0</option>
                
            </select>
        </div>
        `;

        if (guests.value > 0) {
            const endButton = document.querySelector('#sendBtn');
            const card = document.querySelector('#card');
            card.insertBefore(mydiv, endButton);
        }
        if (options > 0) {
            const kisloruakSzama = document.querySelector('#under18');
            for (let i = 0; i < options; i++) {
                kisloruakSzama.innerHTML += `<option value="${i+1}">${i+1}</option>`;
            }
        }
    }

    payingPopUpWindow(calculatedPrice, nights){

        const mainDiv = paying.querySelector('#mainDiv');

        if(mainDiv != null)
            paying.removeChild(mainDiv);

        if(nights == '')
            nights = 0;

        let div = document.createElement('div');
        div.innerHTML = `
            <h4>Szállásért Fizetendő</h4>
            <div>
                Éjszakák száma: <span class="font-weight-bold">${nights}</span>
            </div>
            <div>
                Eredeti összeg:  <span class="font-weight-bold">${calculatedPrice.price} Ft</span>
            </div>
            <div>
                Pótágyak száma <span class="text-danger">${calculatedPrice.extraBed}</span> 
                és ezért fizetendő <span class="text-danger">${calculatedPrice.extraBedPriceForAllNight}</span> 
            </div>
            <div>
                Pótágyakkal együtt fizetendő: <span class="text-danger">${calculatedPrice.priceWithExtrabed}</span>
            </div>
            <div>
                Kedvezmény mértéke <span class="text-danger">${calculatedPrice.discount}%</span>
            </div>
            <div>
                Kedvezményes összeg: 
                <span class="font-weight-bold">${calculatedPrice.finalPriceWithDiscount} Ft </span>
            </div>
            <p>
                &nbsp;
            </p>
            <h4>Idegenforgalmi agó</h4>
            <p>
                Idegenforgalmi adó <span class="text-danger">${calculatedPrice.numsOfAdults} fő</span> 
                részére és <span class="text-danger">${nights}</span> éjszakára: 
                <span class="font-weight-bold">${calculatedPrice.touristTax} Ft</span>
            </p>
            <p>
                &nbsp;
            </p>
            <p class="font-weight-bold text-success">
                Összesen fizetendő: ${calculatedPrice.finalPriceWithTouristTax} FT
            </p>
            `;
        div.setAttribute('Id', 'mainDiv');

        paying.appendChild(div);
    }

}