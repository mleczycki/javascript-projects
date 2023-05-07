function bake(degrees) {
    var message
    if (degrees > 250) {
        message = "Nie jestem reaktorem atomowym!"
    } else if (degrees < 20) {
        message = "Nie jestem lodówką!"
    } else {
        message = "To odpowiednia temperatura dla mnie.";
        setMode("pieczenie");
        setTemp("degrees");
    }
    return message;
}
var status = bake(200);
