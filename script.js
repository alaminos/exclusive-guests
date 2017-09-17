var myobject = {

    welcomeMessage: function(name) {
        var message = "";
        if (name === "Lola" || name === "Paco") {
            message = "Welcome " + name + "! 🌞";
        }
        else {
            message = "I am sorry " + name + ", but you are not welcome here."
        }
        return message;
        
    }
};

var handlers = {
    enterName: function() {
        var name = document.getElementById('userNameInput').value;
        var text = myobject.welcomeMessage(name);  // I had "return" before "console.log", it wasn't working but I am not sure why. Where was it trying to "return" it.
        view.typeMessage(text);

    }
    
};

var view = {
    typeMessage: function(text) {
        var getElmnt = document.getElementById('messageBoard');
        getElmnt.innerHTML = text;

    }
}