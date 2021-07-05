var img1 ="https://wallpaperaccess.com/full/1319765.jpg"
var img2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDZocarSkaqQu8nZwcpF7oTPrwU1sfWvHfiAED14rLgAO3f7wM_YFEm76e0aDRkO6htY&usqp=CAU"
var img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthOWYeX9-PfjduV6oKoWwQqp0s57T4dFC3w&usqp=CAU"
var img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMuNr43Yd9m55mQ88ggl9Ibp0Awo2arGoIqA&usqp=CAU"
var img5 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6Sx4oVMKr7vSwzgesnjxAYPTRCwvyMzSMQ&usqp=CAU"

var images = [img1, img2, img3, img4, img5];

let img = [];
for(let i=0; i<5; i++){
    let pic = document.createElement('img');
    pic.src = images[i];
    pic.setAttribute("data-ns-test" , "img"+(i+1));
    pic.onclick = function(){clicked(this)};
    img.push(pic);
}

let random = Math.floor(Math.random() * 5)
let duplicateImage = document.createElement('img');
duplicateImage.src = images[random];
duplicateImage.setAttribute("data-ns-test" , "img"+(random+1));
duplicateImage.onclick = function(){clicked(this)};
img.push(duplicateImage)

//swapping
for(let i=0; i<6; i++){
    let x = Math.floor(Math.random()*6)
    let temp = img[i];
    img[i] = img[x];
    img[x] = temp;

}
for(let i=0; i<6; i++){
    document.body.appendChild(img[i]);
}

let h3 = document.createElement('h3');
h3.innerHTML = "Please click on the identical tiles to verify that you are not a robot"
document.body.appendChild(h3);


let resetButton = document.createElement("button");
resetButton.innerHTML = "Reset";
resetButton.id = "reset";
resetButton.style.display = "none";
resetButton.onclick = function(){reset()};
document.body.appendChild(resetButton);

let verifyBtn = document.createElement('button');
verifyBtn.innerHTML = "Verify";
verifyBtn.id= "btn";
verifyBtn.style.display = "none";
verifyBtn.onclick = function(){verify()};
document.body.appendChild(verifyBtn)

var selectedImage = 0;

var clicked = function(image){
    if(image.style.border != "2px solid"){
        h3.innerHTML = "";
        selectedImage++;
    
        image.style.border = "2px solid";
        resetButton.style.display = "block"
        if(selectedImage == 2){
            verifyBtn.style.display = "block"
        }
        else{
            verifyBtn.style.display = "none"
        }
    
    }
}

var para = document.createElement('p');
para.id = "para"

function reset(){
    for(let i=0; i<6; i++){
        img[i].style.border = "1px solid";
        if(img[i].class =="selectedImage")
        {
            img[i].removeClass("selectedImage")
        }
    }
    h3.iinerHTML = "Please click on the identical tiles to verify that you are not a robot"
    resetButton.style.dispalay = "none";
    verifyBtn.style.display = "none";
    para.innerHTML = "";
    selectedImage = 0
}

function verify(){
    verifyBtn.style.display = "none";
    var checkIfSame = document.querySelectorAll('[data-ns-test= ' + duplicateImage.getAttribute('data-ns-test')+']');
    var check = document.querySelectorAll('[data-ns-test= '+duplicateImage.getAttribute("data-ns-test")+']');
    if(checkIfSame[0].style.border === checkIfSame[1].style.border && check[0].style.border == "2px solid"){
            para.innerHTML = "You are a human. Congratulations!";
    }
    else{
        para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
    }
    document.body.appendChild(para)

}




