// function getImage(image, callback) {
//     let err= "";
//     if (image.type != "png") {
//         err = "PNG file bish baina";
//     }
//     callback(image,err);
// }

const doPromise = new Promise((resolve, reject) => {
    setTimeout ( () => {
        const skills = [];
        if (skills.length > 0) {
            resolve(skills);
        } else {
            reject ("Something wrong has happened")
        }
    },2000);
});

console.log(doPromise)