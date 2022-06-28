fetch("./products.json")
    .then(response => response.json())
    .catch(console.error())
    .then(product => {
        var producttable1 = document.getElementById("ptable1")
        var productlist = product.products;

        for (var i = 0; i < productlist.length; i++) {
            console.log(productlist[i])

            // create an img element
            var img = document.createElement("img");
            // load imagie location from json
            img.src = `${productlist[i].img}`;
            // set height and width
            img.height = "150";
            img.width = "150";
            // create element 
            producttable1.appendChild(img);

            // create a table element
            var tableText = document.createElement("a");
            // set table text to product name and price from json
            tableText.innerHTML = `${productlist[i].name} ${productlist[i].price}`;
            tableText.classList.add("product-info");
            // create element
            producttable1.appendChild(tableText);

            // create an 'a' element
            var link = document.createElement("a");
            // set text to shop
            link.innerHTML = "shop"
            // add a class called shop-link
            link.classList.add("shop-link");
            // set href to shop.html
            link.href = "./shop.html"
            // create element
            producttable1.appendChild(link);
        }
    })