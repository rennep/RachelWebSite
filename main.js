let myImagePuppies = document.getElementById('puppies');
let myImageKittens = document.getElementById('kittens');
let myImagePenguins = document.getElementById('penguins');

myImagePuppies.onclick = function() {
    let mySrc = myImagePuppies.getAttribute('src');
    if(mySrc === 'images/puppies1.webp') {
        myImagePuppies.setAttribute('src','images/puppies2.jpg')
    }
    else{
        if(mySrc === 'images/puppies2.jpg')
        {
            myImagePuppies.setAttribute('src','images/puppies3.jpg')
        }
        else
        {
            myImagePuppies.setAttribute('src','images/puppies1.webp')
        }
    }
}

myImageKittens.onclick = function() {
    let mySrc = myImageKittens.getAttribute('src');
    if(mySrc === 'images/kittens1.jpg') {
        myImageKittens.setAttribute('src','images/kittens2.JPG')
    }
    else{
        if(mySrc === 'images/kittens2.JPG')
        {
            myImageKittens.setAttribute('src','images/kittens3.jpg')
        }
        else
        {
            myImageKittens.setAttribute('src','images/kittens1.jpg')
        }
    }
}

myImagePenguins.onclick = function() {
    let mySrc = myImagePenguins.getAttribute('src');
    if(mySrc === 'images/baby-penguins1.jpg') {
        myImagePenguins.setAttribute('src','images/baby-penguins2.jpg')
    }
    else{
        if(mySrc === 'images/baby-penguins2.jpg')
        {
            myImagePenguins.setAttribute('src','images/baby-penguins3.jpg')
        }
        else
        {
            myImagePenguins.setAttribute('src','images/baby-penguins1.jpg')
        }
    }
}