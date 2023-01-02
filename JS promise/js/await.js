function prepare_breakfast() {
    let coffee_promise = new Promise((resolve, reject) => resolved("coffee ready"));
    let egg_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("finished frying egg");
        },1000);
    });
    let combined_promise = Promise.all([coffee_prromise, egg_promise]);
    return coffee_promise;
}

async function morning() {
    let result = await
}