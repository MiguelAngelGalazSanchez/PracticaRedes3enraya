$( document ).ready(function() {
   
    loadItem()
    
    function loadItem() {
     $.ajax({
         method: "GET",
        url: 'http://localhost:8090/MejoresJugadores/'
    }).done(function (listajugadores) {
         
         
         
         for (var k = 0; k < listajugadores.length; k++) {
            $("#tablapuntuaciones").append( "<tr><td>" + listajugadores[k].nombre + "</td><td>" +listajugadores[k].puntos  + "</td></tr>");
        }
         
        console.log('Items loaded: ' + JSON.stringify(listajugadores));
         
       
    })
     
}
    
    $( "#atras" ).click(function() {
        
   window.open("http://localhost:8090/TresEnRaya.html","_self");
});
    
    
    
    
    
    
    
    
    
    
    
    
    
});