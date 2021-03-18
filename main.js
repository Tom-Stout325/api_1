
    const baseUrl = 'https://picsum.photos/v2/list'

    var shutter = document.querySelector(".camera")
   
   
        
     function takePic()  {
         fetch(baseUrl)
             .then (res => res.json())
             .then (json => {
                 console.log(json)    
                 let img = document.getElementById('image')
                 img.src = json[20].download_url;
                
              })
     }

     camera.addEventListener("click", takePic);