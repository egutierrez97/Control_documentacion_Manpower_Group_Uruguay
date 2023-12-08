 document.addEventListener('DOMContentLoaded',function(){    
    var datos = JSON.parse(localStorage.getItem('date')); 
    
    if(datos !=null){
        let celda = document.getElementById("showMonthAndYear");
    celda.innerHTML=`${datos.months} ${datos.years}`
    };
    
    
})