// Bum! Replace the entire page with a fixed image.
// page stays replaced until the user refreshes.
function closeShop(replacement_img) {
    //var replacement_img = 'imgs/Armani-Reopens-Flagship-store-MO-10.jpg'; 

    // make page full-height and wipe existing content
    document.documentElement.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.height = '100%';
    
    // Bum!
    document.body.innerHTML = '';

    // create and insert the full-screen image
    var img = document.createElement('img');
    img.src = replacement_img;
    img.alt = 'Shop closed';
    img.style.cssText = 'width:100vw;height:100vh;object-fit:contain;display:block;background:#000';

    document.body.appendChild(img);

    // change document title so user knows about refresh
    document.title = 'Closed — refresh to return';
}