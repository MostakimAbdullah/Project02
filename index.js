const loadDataAll=() => {
    fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res)=>res.json())
    .then((response)=> {
        const category=response.data.forEach(element => {
            const get_id = element.category_id;
            const category_name=element.category;
            const all = document.getElementById("ALL-button");
            if (category_name==all.innerText) {
                      displaydata(get_id)          
            }
        });
    })
    showAllButtons();
};


const loadDataSort=() => {
    fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res)=>res.json())
    .then((response)=> {
        const category=response.data.forEach(element => {
            const get_id = element.category_id;
            const category_name=element.category;
            const all = document.getElementById("ALL-button");
            if (category_name==all.innerText) {
              fetch(`https://openapi.programming-hero.com/api/videos/category/${get_id}`)
              .then((res)=>res.json())
              .then((data)=>{
                const sortedData = data.data.sort((a, b) => {
                    return parseFloat(b.others.views) - parseFloat(a.others.views);
                });
                document.getElementById("content-container").innerHTML='';
                const videos=sortedData.forEach((video)=>{
                    const content=document.createElement("div");
                    content.classList.add("video-item");
                    if (video.authors[0].verified!=true){
                    content.innerHTML=`
                    <img class="thumb-img" src="${video.thumbnail}" alt="">
                    <div class="d-flex gap-3 align-content-center mt-3">
                    <img class="pro-img" src="${video.authors[0].profile_picture} alt="">
                    <h6 class="img-title">${video.title}</h6>
                    </div>
                    <div class="text-start" style="padding-left:45px">
                      <p class="name">${video.authors[0].profile_name}</p>
                      <p class="view">${video.others.views}  views</p> 
                    </div>`
                    document.getElementById("content-container").appendChild(content)
                        
                    }
                    else{
                        content.innerHTML=`
                    <img class="thumb-img" src="${video.thumbnail}" alt="">
                    <div class="d-flex gap-3 align-content-center mt-3">
                    <img class="pro-img" src="${video.authors[0].profile_picture} alt="">
                    <h6 class="img-title">${video.title}</h6>
                    </div>
                    <div class="text-start" style="padding-left:45px">
                      <div class="d-flex gap-2">
                      <p class="name">${video.authors[0].profile_name}</p>
                      <i class="fa-solid fa-circle-check"></i>
                      </div>
                      <p class="view">${video.others.views}  views</p> 
                    </div>`
                    document.getElementById("content-container").appendChild(content)
                    }
                    
                })
              })                   
            }
        });
    })
};




const displaydata=(id) => {
    document.getElementById("content-container").innerHTML='';
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((res)=>res.json())
    .then (response=>{
        if (response.data.length != 0) {
            const videos=response.data.forEach((video)=>{
                const content=document.createElement("div");
                content.classList.add("video-item");
                if (video.authors[0].verified!=true){
                content.innerHTML=`
                <img class="thumb-img" src="${video.thumbnail}" alt="">
                <div class="d-flex gap-3 align-content-center mt-3">
                <img class="pro-img" src="${video.authors[0].profile_picture} alt="">
                <h6 class="img-title">${video.title}</h6>
                </div>
                <div class="text-start" style="padding-left:45px">
                  <p class="name">${video.authors[0].profile_name}</p>
                  <p class="view">${video.others.views}  views</p> 
                </div>`
                document.getElementById("content-container").appendChild(content)
                    
                }
                else{
                    content.innerHTML=`
                <img class="thumb-img" src="${video.thumbnail}" alt="">
                <div class="d-flex gap-3 align-content-center mt-3">
                <img class="pro-img" src="${video.authors[0].profile_picture} alt="">
                <h6 class="img-title">${video.title}</h6>
                </div>
                <div class="text-start" style="padding-left:45px">
                  <div class="d-flex gap-2">
                  <p class="name">${video.authors[0].profile_name}</p>
                  <i class="fa-solid fa-circle-check"></i>
                  </div>
                  <p class="view">${video.others.views}  views</p> 
                </div>`
                document.getElementById("content-container").appendChild(content)
                }
                
            })
        }
        else{
             const content2 = document.createElement("div");
             content2.classList.add("null-item");
             content2.innerHTML = `
                <div>
                <img class="w-25" src="./PHero-Tube-main/Icon.png" alt="">
                </div>
                <div class="mt-2">
                <p style="font-size:30px; font-weight:bold;">Oops!! Sorry,There is no<br> content here </p>
                </div>
             `
             document.getElementById("content-container").appendChild(content2);



            
        }
});
}

const loadDataMusic=() => {
    fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res)=>res.json())
    .then((response)=> {
        const category=response.data.forEach(element => {
            const get_id = element.category_id;
            const category_name=element.category;
            const music = document.getElementById("Music-button");
            if (category_name==music.innerText) {
                      displaydata(get_id)          
            }
        });
    })
    showAllButtons();
    hidebutton('sorted')
};


const loadDataComedy=() => {
    fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res)=>res.json())
    .then((response)=> {
        const category=response.data.forEach(element => {
            const get_id = element.category_id;
            const category_name=element.category;
            const comedy = document.getElementById("comedy-button");
            if (category_name==comedy.innerText) {
                      displaydata(get_id)          
            }
        });
    })
    showAllButtons();
    hidebutton('sorted')
};


const loadDataDrawing=() => {
    fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res)=>res.json())
    .then((response)=> {
        const category=response.data.forEach(element => {
            const get_id = element.category_id;
            const category_name=element.category;
            const drawing = document.getElementById("Drawing-button");
            if (category_name==drawing.innerText) {
                displaydata(get_id);
        }
    });
        
    })
    showAllButtons();
    hidebutton('sorted')
};




const showAllButtons=()=> {
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.style.display = "inline-block";
    });
}



const hidebutton=(id)=>{

    const button=document.getElementById(id);
    button.style.display="none";

}



const minus1=()=>{
    const showminus=document.getElementById("anchor1");
    if(showminus.innerText=="+"){
        showminus.innerText="-";
    }
    else{
        showminus.innerText="+";
    }
}

const minus2=()=>{
    const showminus=document.getElementById("anchor2");
    if(showminus.innerText=="+"){
        showminus.innerText="-";
    }
    else{
        showminus.innerText="+";
    }
}

const minus3=()=>{
    const showminus=document.getElementById("anchor3");
    if(showminus.innerText=="+"){
        showminus.innerText="-";
    }
    else{
        showminus.innerText="+";
    }
}














loadDataAll();


