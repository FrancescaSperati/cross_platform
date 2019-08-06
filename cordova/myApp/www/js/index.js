
var app = {
    initialize: function() {
        $('#takePicture').click(app.takePhoto);
        $('#login-app').click(app.loginToDoList);
    },

    takePhoto: function() {
        let options = {
            quality: 80,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirecttion: Camera.Direction.BACK,
            targetWidth: 300,
            targetHeight: 400
        };
        navigator.camera.getPicture(app.ftw, app.wtf, options);
    },

    loginToDoList: function() {
        var userEmail = document.getElementById("InputEmail").value;
        var userPassword = document.getElementById("InputPassword").value;
    
        if((userEmail=="user@email")&&(userPassword=="password"))
            window.open('main.html', '_blank');
    },
    
    
    ftw: function(imgURI){
        $('#msg').text(imgURI);
        document.getElementById('photo').src = imgURI;
    },

    wtf: function(msg) {
        $('#msg').text(msg);
    }
};

app.initialize();


