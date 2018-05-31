let contact_name = "Mike";
let contact_surname = null;
let contact_phone = [0721234567,0571234567,0971234567];
let messenger_1 = {name:"telegram",id:0971234567};
let messenger_2 = {name:"viber",id:0971234567};
let messenger_3 = {name:undefined,id: undefined};
let contact_messengers = [messenger_1,messenger_2,messenger_3]
let contact_adress = NaN;
let spotlight = true;
let contactSmsLimit = 300;
let contactPhoneLimit = Infinity;
let note = {notesName:"about",notesVal:"best friend"};

const user = {
    name:contact_name,
    surname:contact_surname,
    phones: contact_phone,
    adress:contact_adress,
    messengers: contact_messengers,
    spotlight:spotlight,
    smsLimit:contactSmsLimit,
    phoneLimit:contactPhoneLimit,
    notes:note
}

console.log(user);
