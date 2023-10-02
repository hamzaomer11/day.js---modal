
MicroModal.init();

// function apply() {
//     let choice = document.getElementById('chicago').value;

//     if(document.getElementsByClassName("modal__btn").onclick) {
//         document.getElementById("timezone").innerHTML = dayjs().tz(choice).format('HH:mm:ss');
//     }
// }


let bogus = luxon.DateTime.local().setZone("America/New_York").toLocaleString();
document.getElementById("timezone").innerHTML = bogus;