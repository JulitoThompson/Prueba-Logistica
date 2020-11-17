const formulario = document.getElementById('add_form');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    

    let datos = new FormData (formulario)
    console.log(datos)
    console.log(datos.get('name_input'))
    fetch('http://127.0.0.1:3000/elefantes',{
    method:'POST',
    mode: 'cors',
    body:datos })
    .then (res => res.json)
    .then (data => {
        console.log(data)
    });
})




/* async function postData(url = 'http://127.0.0.1:3000/elefantes', data = datos) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
       mode: 'no-cors', // no-cors, *cors, same-origin 
       
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url 
      body: data //JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } */
  
  /* postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    }); */
    
    /* const add_json = ()=>{
        console.log("en la funcion")
        $.ajax('http://127.0.0.1:3000/elefantes', {
       // method: 'POST',
        data: {
            "name": "NuevoElefante",
            "affiliation": "Bogota",
            "species": "Asian",
            "sex": "Female",
             "fictional": "false",
            "dob": "1973",
            "dod": "1998",
            "wikilink": "https://en.wikipedia.org/wiki/Ruby_(elephant)",
            "image": "https://elephant-api.herokuapp.com/pictures/036.jpg",
            "note": "An elephant famous for creating paintings. The most expensive of her paintings sold for $25,000."
        }
    }).then(function(data) {
        console.log("succes");
    });}

    document.querySelector('click', add_json) */

