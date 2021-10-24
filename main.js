// 🧁 Cinnamon roll constructors

function Original(flavor, glaze, count, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.count = count;
    this.price = price;
    this.image = "images/Menu/original.png"
    this.image_alt = "A cinnamon roll with original flavoring.";
}

function Blackberry(flavor, glaze, count, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.count = count;
    this.price = price;
    this.image = "images/Menu/blackberry.png"
    this.image_alt = "A cinnamon roll with blackberry flavoring.";
}

function Walnut(flavor, glaze, count, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.count = count;
    this.price = price;
    this.image = "images/Menu/walnut.png"
    this.image_alt = "A cinnamon roll with walnut flavoring.";
}

function GlutenFree(flavor, glaze, count, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.count = count;
    this.price = price;
    this.image = "images/Menu/gluten_free.png"
    this.image_alt = "A cinnamon roll with original gluten free flavoring.";
}

function Pumpkin(flavor, glaze, count, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.count = count;
    this.price = price;
    this.image = "images/Menu/pumpkin_spice.png"
    this.image_alt = "A cinnamon roll with pumpkin spice flavoring.";
}

function Caramel(flavor, glaze, count, price) {
    this.flavor = flavor;
    this.glaze = glaze;
    this.count = count;
    this.price = price;
    this.image = "images/Menu/caramel_pecan.png"
    this.image_alt = "A cinnamon roll with caramel pecan flavoring.";
}


let rolls = [Original, Blackberry, Walnut, GlutenFree, Pumpkin, Caramel];
let product = {};

// Button hovers: change color
// function onButtonHover () {
    
// }

function onClick () {
    const productString = JSON.stringify(product);
    console.log(productString);
    localStorage.setItem("prod",productString);
    localStorage.getItem("prod");
    // document.getElementById("addedMessage").textContent = "The item has been added to cart!";
  }