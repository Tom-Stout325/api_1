
    const baseUrl = 'https://picsum.photos/v2/list'

    let shutter = document.querySelector('camera');
    let button = document.createElement('button');
   
   
   
        
     function takePic()  {
        fetch(baseUrl)
             .then (res => res.json())
             .then (json => {
                 console.log(json)    
                 let img = document.getElementById('image')
                 img.src = json[20].download_url;
              })
       
              button.innerHTML = "Want more inspiration?  Click here!";                   
              document.body.appendChild(button);               
    }

     camera.addEventListener("click", takePic);

     
    function refresh() {
        let img = document.getElementById('image')
        img.src=("https://picsum.photos/916/610?random=7")
  
     }

     button.addEventListener("click", refresh)

