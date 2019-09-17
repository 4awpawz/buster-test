(function () {
    var imgs = [
        "media/sub/alphabet-arts-and-crafts-blog-459688-worked.jpg",
        "media/sub/black-and-white-close-up-cobweb-worked.jpg",
        "media/cyclone-roller-coaster-coney-island-worked.jpg",
        "media/tatoo-handshake-worked.jpg"
    ];
    
    var image = [];

    imgs.forEach(img => {
        image = new Image();
        image.src = img;
    });
}());