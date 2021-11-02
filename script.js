const btn = document.querySelector('.self-deleting');
btn.addEventListener(`click`,function(){
    btn.remove();
})

const body = document.querySelector(`body`)
const img = document.createElement(`img`);
img.src = `https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg`;
body.appendChild(img)

const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg"
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg"
    }
];
const userList = document.querySelector(`#user-list`)
const userTable = users.map(user => {
    return `<div style="
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: white;
     margin: 50px 0;
     height: max-content; 
     border: white 10px solid;
     border-radius: 12px">
        <img src=${user.avatar} alt=${user.first_name} style="margin: 0 auto">
        <p style="text-align: center">${user.first_name} ${user.last_name}</p>
        <div>
        <button class="delete" style="margin-right: 40px;background-color:#F5FBFC; border:#F5FBFC 2px solid; cursor:pointer;">წაშლა</button>
        <button class="info" style="background-color:#F5FBFC; border:#F5FBFC 2px solid; cursor:pointer;">ინფო</button>
        </div>
        <p class="email" style="display:none; color:gray; text-align:center">${user.email}</p>
    </div> `
})
userList.style.display = `flex`
userList.style.justifyContent = `space-evenly`
userList.style.backgroundColor = "#F5FBFC"
userList.innerHTML = userTable.join(``)
const deleteButtons = document.querySelectorAll(`.delete`)
const moreInfo = document.querySelectorAll(`.info`)
const emails = document.querySelectorAll(`.email`)
deleteButtons.forEach(deleteButton =>{
    deleteButton.addEventListener(`click`, function(){
       deleteButton.parentNode.parentNode.remove()
    })
})
moreInfo.forEach(button => {
    button.addEventListener(`click`,function(){
        if(button.parentNode.parentNode.lastElementChild.style.display === `initial`){
            button.parentNode.parentNode.lastElementChild.style.display = `none`
        }else{
        button.parentNode.parentNode.lastElementChild.style.display = `initial`
        }
    })
})

const birthdayCakeCandles = (candles) =>{
    let max = 0;
    for(let i=0; i<candles.length;i++){
        if(max < candles[i]){
            max = candles[i]
        }
    }
    return candles.filter((x) => x===max).length
}