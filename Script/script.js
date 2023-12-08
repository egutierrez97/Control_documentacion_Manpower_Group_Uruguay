document.addEventListener('DOMContentLoaded', function(){
    listenUploadDate()
});

function listenUploadDate(){

    const inputMonth = document.getElementById("monthSendDoc");
    const inputYear = document.getElementById("yearSendDoc");

    const buttonAplicarDateUpload = document.getElementById("btnSendDoc");
    buttonAplicarDateUpload.addEventListener('click', function(){
        if (localStorage.getItem("date") !== null) {
            localStorage.removeItem("date");
        }
        let filtro = {months: inputMonth.value , years: inputYear.value};
        localStorage.setItem('date',JSON.stringify(filtro));
    });
}

