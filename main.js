
MicroModal.init();

function apply() {
    let choice = document.getElementById("time-zone").value;
    document.getElementById('timezone').innerHTML = choice;

    let time_of_zone = luxon.DateTime.now().setZone(choice).toFormat('HH:mm:ss')
    document.getElementById("time-area").innerHTML = time_of_zone;

    let day_of_zone = luxon.DateTime.local().setZone(choice).toLocaleString();
    document.getElementById("day-area").innerHTML = day_of_zone;
    
}