let informationEl = document.getElementById("information");
// let listEl = document.getElementById("lists");

fetch("https://dummyjson.com/products")
.then ((res) => {
    if (res.ok) {
        return res.json();
    }
})
.then ((products) => {
    for ( let i=0; i<products.products.length ; i++) {
    const inf = document.createElement('div');
    const inf1 = document.createElement('li');
    inf.innerHTML = products.products[i].description;
    inf1.innerHTML = products.products[i].title;
    informationEl.append(inf);
    informationEl.append(inf1);
}
})