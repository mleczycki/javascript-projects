function calculateArea(r) {
    var area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}
var radius = 5.7;
var theArea = calculateArea(radius);
console.log("Pole koła wynosi: " + theArea);