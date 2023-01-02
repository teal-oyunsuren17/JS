const color = document.getElementById('body');
function background() {
    let colorCode1 = Math.floor(Math.random() * 256) + 1 ;
    let colorCode2 = Math.floor(Math.random() * 256) + 1 ;
    let colorCode3 = Math.floor(Math.random() * 256) + 1 ;
    color.style.cssText = `
    background-color: rgb(${colorCode1},${colorCode2},${colorCode3});
    `
    document.getElementById('color').style.cssText = `
    color: rgb(${colorCode3},${colorCode2},${colorCode1});
    background-color: rgb(${colorCode2},${colorCode3},${colorCode1});`
}
