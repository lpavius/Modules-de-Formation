import {fromEvent, of} from 'rxjs';
import {ajax} from 'rxjs/ajax';

fromEvent(window, "DOMContentLoaded").subscribe((event) => {

    const formAddress = document.getElementById("naddress");
    const formPerson = document.getElementById("nperson");
    //console.dir(formPerson);
    let selectAdd = document.getElementById('addr');

    //récupération d'une liste d'adresse 
    const ajaxGetAddr = ajax({
        url: "http://localhost:8082/addresses",
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    }).subscribe(data => {
        //console.log(data)
        const addresses = data.response;
        if (data.status && 200 === data.status) {
            //console.log(addresses);
            addresses.forEach(address => {
                const optionAdd = document.createElement('option');
                optionAdd.value = address.id;
                optionAdd.innerHTML = `${address.street}, ${address.zipCode} ${address.city}, ${address.country}`;
                selectAdd.appendChild(optionAdd);
            })
        }
    })

    /**** formulaire d'une adresse ****/
    fromEvent(formAddress, 'submit').subscribe((event) => {

        event.preventDefault();
        const inputAdd = formAddress.getElementsByTagName('input');
        //console.dir(inputAdd);
        const street = inputAdd[0].value;
        const zipCode = inputAdd[1].value;
        const city = inputAdd[2].value;
        const country = inputAdd[3].value;

        const ajaxPostAddress = ajax({
            url: "http://localhost:8082/address",
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: {
                street: street,
                zipCode: zipCode,
                city: city,
                country: country
            }
        })
        
    })

    
    // formulaire d'une personne avec une adresse
    fromEvent(formPerson, "submit").subscribe(event => {
        event.preventDefault()

        const inputInfo = formPerson.getElementsByTagName('input');
        //console.dir(inputInfo);
        const addrOption = selectAdd.getElementsByTagName('option');
        //console.dir(addrOption);
        const f_name = inputInfo[0].value;
        const l_name = inputInfo[1].value;
        const b_name = inputInfo[2].value;
        const idAddr = parseFloat(addrOption[selectAdd.options.selectedIndex].value);
        //console.log(idAddr);

        // const ajaxPostPerson = ajax({
        //     url: "http://localhost:8082/person",
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body : {
        //         firstName: f_name,
        //         lastName : l_name,
        //         birthDate: b_name,
        //         address_id: idAddr
        //     }
        // })
        console.log(`firstname: ${f_name}, lastname: ${l_name}, birthdate: ${b_name}, address_id: ${idAddr}`);
    })
})