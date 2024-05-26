function calculateTotal() {
    var coffeeSelect = document.getElementById('coffeeSelect');
    var dessertSelect = document.getElementById('dessertSelect');
    var coffeeQuantityInput = document.getElementById("coffeeQuantity").value;
    var dessertQuantityInput = document.getElementById("dessertQuantity").value;

 
    var coffeeQuantity;
    if (coffeeQuantityInput === "") {
        coffeeQuantity = 0;
    } else {
        coffeeQuantity = parseFloat(coffeeQuantityInput);
    }

    
    var dessertQuantity;
    if (dessertQuantityInput === "") {
        dessertQuantity = 0;
    } else {
        dessertQuantity = parseFloat(dessertQuantityInput);
    }

    var totalPrice = 0;

    if (coffeeSelect.value === "" && dessertSelect.value === "") {
        alert("You should select one option at least!");
        return;
    }

    if (coffeeQuantity === 0 && dessertQuantity === 0) {
        alert("Please enter at least one quantity.");
        return;
    }

    if (coffeeQuantity < 0 || dessertQuantity < 0) {
        alert("Please enter a valid quantity of both coffee and dessert.");
        return;
    }

    var coffeePrice = getPrice(coffeeSelect.value);
    var dessertPrice = getPrice(dessertSelect.value);
    totalPrice = (coffeePrice * coffeeQuantity) + (dessertPrice * dessertQuantity);

 
    alert("Total Price: $" + totalPrice.toFixed(2));

var discount = 0;
    var newTotalPrice = totalPrice;
    if (totalPrice > 15) {
        discount = totalPrice * 0.15;
        newTotalPrice = totalPrice - discount;
    }
    if(totalPrice>20.00)
        
        alert("You got a 15% discount! Your new total price is $" + newTotalPrice.toFixed(2));
    
        
}

function getPrice(item) {
    
    var prices = {
        "Espresso": 2.50,
        "Matcha Latte": 3.00,
        "Cold Brew": 3.50,
        "Chocolate": 3.00,
        "Muffins": 2.00,
        "Blue Berry": 2.50,
        "Cheese Cake": 3.50
    }; return prices[item] || 0;
}