function GetMap() {



    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        center: new Microsoft.Maps.Location(document.getElementById('LocationX').value, document.getElementById('LocationY').value),
        zoom: document.getElementById('MapZoom')});

    Microsoft.Maps.Events.addHandler(map, 'click', function (e) {
        document.getElementById('LocationY').value = e.location.longitude.toString()
       document.getElementById('LocationX').value = e.location.latitude.toString()
       
        
        //    document.getElementById('output4').innerHTML = e.location.longitude.toString()
        
        document.getElementById('MapZoom').value = map.getZoom()
     document.getElementById('PointTitle').value = map.Pushpin.title.toString()
    document.getElementById('PointSubTitle').value = map.Pushpin.subtitle.toString()

   });


    //var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {

    //    center: new Microsoft.Maps.Location(document.getElementById('LocationX').value, document.getElementById('LocationY').Value),
    //    zoom: document.getElementById('MapZoom')
    //});

  var center = map.getCenter();


    var pin = new Microsoft.Maps.Pushpin(center, {
        
       
        title: document.getElementById('PointTitle').value,
        subTitle: document.getElementById('PointSubTitle').value,
        text:'Fa'
    });

    ////Add the pushpin to the map
    map.entities.push(pin);

}

   
