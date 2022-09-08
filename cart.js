let cartItems = [
  {
    itemName: "Red Rice",
    Price: 180,
    Quantity:1,
    Unit: "Kg",
    Notes: "Organic red rice",
  },
  {
    itemName: "Brown Rice",
    Price: 50,
    Quantity:1,
    Unit: "Pc",
    Notes: "500gm",
  },
  {
    itemName: "Peanut butter",
    Price: 250,
    Quantity:1,
    Unit: "Pc",
    Notes: "400gm",
  },
  {
    itemName: "Flex seeds oil",
    Price: 225,
    Quantity:1,
    Unit: "Pc",
    Notes: "200ml",
  },
  {
    itemName: "Home made Garlic pickle",
    Price: 275,
    Quantity:1,
    Unit: "Pc",
    Notes: "400",
  },
  {
    itemName: "Kulath dal",
    Price: 300,
    Quantity:1,
    Unit: "Kg",
    Notes: "From Chamba",
  },
];

function getData() {
  for (let i in cartItems) {
    // console.log(i);
    let tdata = document.getElementById("tableData");
    let row = `<tr>
                        <td>${cartItems[i].itemName}</td>
                        <td>${cartItems[i].Price}</td>
                        <td>${cartItems[i].Quantity}</td>
                        <td>${cartItems[i].Unit}</td>
                        <td>${cartItems[i].Notes}
                        <td><button type = "button" class = "addCartButton btn btn-success" id = '${i}'>Add to cart</button></td>
                        </tr>
                        `;
    tdata.innerHTML += row;
  }

  cart = [];
  let cartn = document.getElementById("cartno");

  let b = document.getElementsByClassName("addCartButton");
  for (let i of b) {
    i.addEventListener("click", function (e) {
      cart.push(cartItems[e.target.id]);
      //console.log(cart);
      let total = cart.length;
      //console.log(total);
      cartn.innerHTML = total;
    });
  }
  let cartbody = document.getElementById("modalBody");
  let cartbtn = document.getElementById("cartbutton");
  cartbtn.addEventListener("click",displayCart);

  function displayCart(){
    let totalCost = 0;
    cartbody.innerHTML = "<p></p>";
    let key = -1;
    for (let i of cart) {
      console.log(i);
      totalCost += i.Price;
      console.log(i.Price);
      let p = `<p>Item Name: ${i.itemName}<br>Price: ${i.Price}</p>`;
      let q = `
      <div class="card">
              <div class="card-body">
                <h5>Item: ${i.itemName}</h5>
                <h5>Price: ${i.Price}</h5>
              </div>
              <div class="card-footer">
                <button class="btn btn-danger  remove" id=${(key = key + 1)}>
                Remove from cart
                </button>
              </div>
            </div>
      `;
      console.log(key);
      cartbody.innerHTML += q;
      cartn.innerHTML = cart.length;
    }
    cartbody.innerHTML += `<br><br>Total: ${totalCost}`;
    cartn.innerHTML = cart.length;

    let removebtns = document.getElementsByClassName("remove");
    for(let j of removebtns){
        j.addEventListener("click",function(e){
            console.log("clicked!");
            console.log(e.target.id);
            cart.splice(e.target.id,1)
            displayCart();
        })
    }
  }
  let clear = document.getElementById("clearCart")
  clear.addEventListener("click",function(){
    cart.splice(0,cart.length)
    displayCart();
  })

}
