function whatShallIWear(temp) {
    if (temp < 15) {
        console.log("Ubierz kurtkę");
    } else if (temp < 25) {
        console.log("Ubierz sweter");
    } else {
        console.log("Ubierz t-shirt");
    }
}
whatShallIWear(15);
whatShallIWear(30);
whatShallIWear(10);
