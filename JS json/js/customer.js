let informationEl1 = document.getElementById("information1");
let informationEl2 = document.getElementById("information2");
let informationEl3 = document.getElementById("information3");
fetch("https://randomuser.me/api")
.then( (res)=> {
    if (res.ok) {
        return res.json();
    }
})
.then ((results) => {
    const inf1 = document.createElement('div');
    inf1.className = "header";
    const list1 = `
    <div class="profile"> <img src="${results.results[0].picture.thumbnail}" alt=""></div>
    <ul class ="ul1">
      <li>${results.results[0].name.title + " "+ results.results[0].name.first + " "+ results.results[0].name.last }</li>
      <li>${results.results[0].gender}</li>
      <li>${results.results[0].email}</li>
      <li>${results.results[0].phone}</li>
    </ul>`
    inf1.innerHTML = inf1.innerHTML + list1 ;


    const inf2 = document.createElement('div');
    inf2.className = "body"
    const list2 = `
    <ul class = "ul2" >
      <li>${results.results[0].location.city + ","+ results.results[0].location.state +","+ results.results[0].location.country}</li>
    </ul>`
    inf2.innerHTML = inf2.innerHTML + list2 ;


    informationEl1.append(inf1);
    informationEl1.append(inf2)
});

fetch("https://randomuser.me/api")
.then( (res)=> {
    if (res.ok) {
        return res.json();
    }
})
.then ((results) => {
    const inf1 = document.createElement('div');
    inf1.className = "header";
    const list1 = `
    <div class="profile"> <img src="${results.results[0].picture.thumbnail}" alt=""></div>
    <ul class ="ul1">
      <li>${results.results[0].name.title + " "+ results.results[0].name.first + " "+ results.results[0].name.last }</li>
      <li>${results.results[0].gender}</li>
      <li>${results.results[0].email}</li>
      <li>${results.results[0].phone}</li>
    </ul>`
    inf1.innerHTML = inf1.innerHTML + list1 ;


    const inf2 = document.createElement('div');
    inf2.className = "body"
    const list2 = `
    <ul class = "ul2" >
      <li>${results.results[0].location.city + ","+ results.results[0].location.state +","+ results.results[0].location.country}</li>
    </ul>`
    inf2.innerHTML = inf2.innerHTML + list2 ;


    informationEl2.append(inf1);
    informationEl2.append(inf2)
});

fetch("https://randomuser.me/api")
.then( (res)=> {
    if (res.ok) {
        return res.json();
    }
})
.then ((results) => {
    const inf1 = document.createElement('div');
    inf1.className = "header";
    const list1 = `
    <div class="profile"> <img src="${results.results[0].picture.thumbnail}" alt=""></div>
    <ul class ="ul1">
      <li>${results.results[0].name.title + " "+ results.results[0].name.first + " "+ results.results[0].name.last }</li>
      <li>${results.results[0].gender}</li>
      <li>${results.results[0].email}</li>
      <li>${results.results[0].phone}</li>
    </ul>`
    inf1.innerHTML = inf1.innerHTML + list1 ;


    const inf2 = document.createElement('div');
    inf2.className = "body"
    const list2 = `
    <ul class = "ul2" >
      <li>${results.results[0].location.city + ","+ results.results[0].location.state +","+ results.results[0].location.country}</li>
    </ul>`
    inf2.innerHTML = inf2.innerHTML + list2 ;


    informationEl3.append(inf1);
    informationEl3.append(inf2)
})