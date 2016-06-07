
   var lista = document.querySelector('#lista');

    function dibujarPeliculas(peliculas) {
     //limpiar
     lista.innerHTML = '';

     //dibujo
     //peliculas esa un arreglo
     peliculas.forEach(function (pelicula) {
       var li = document.createElement('li');

       var template = '<a href="peliculas.html"><div class="pelicula">'+pelicula.title+'</div><img width="100px" src="'+pelicula.poster+'"></a>'+ '<p>'+ pelicula.genre + '</p>';

       // pelicula.genre.forEach(function (genre) {
       //   template += '<div>'+genre+'</div>'
       // });

       li.innerHTML = template;

       lista.appendChild(li);
     });
   };

 dibujarPeliculas(data);

   var allTags = [];
   for (var i = 0; i < data.length; i++) {
     allTags = allTags.concat(data[i].genre);
   }

   var allTagsSinDuplicados = getSinDuplicados(allTags);
    var abajitoSelect = $('#abajito');

   allTagsSinDuplicados.forEach(function (text) {
      var opt = document.createElement('option');
      opt.value = text.toLowerCase();
      opt.innerText = text.toLowerCase();
      abajito.appendChild(opt);
});

    abajitoSelect.on('change', function (e){
      if (!e.target.value) {
        return dibujarPeliculas(data);
      }

      var peliculasFiltradas = []
      for (var i = 0; i < data.length; i++) {
       var encontrado = data[i].genre.indexOf(e.target.value) > -1;
       if (encontrado) {
         peliculasFiltradas.push(data[i])
       }

      console.log(peliculasFiltradas)
     }
        var valor=$('#abajito').val();
        var seleccionado = $("#abajito option:selected").html();
        var text = seleccionado.toLowerCase()    
            dibujarPeliculas(peliculasFiltradas)
     // botones.appendChild(newButton);
});

  function getSinDuplicados(arr) {
     var sinDuplicados = [];
     for (var i = 0; i <arr.length; i++) {
       //indexOf
       if (sinDuplicados.indexOf(arr[i]) === -1) {
         sinDuplicados.push(arr[i]);
       }
     }
     return sinDuplicados;
   }
   // var botones = cont.getAttribute(value);

   // console.log(allTagsSinDuplicados);
   // allTagsSinDuplicados.forEach(function (text) {
   //   console.log('hola', text);
   //   // var newButton = document.createElement('button');
   //   // newButton.innerText = text;
   //   });
   
