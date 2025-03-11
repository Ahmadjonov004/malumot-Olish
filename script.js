const users = document.getElementById('users')
const loading = document.getElementById('loading')
const modal = document.getElementById('modal');

const fetchData = async () => {
    try{
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
            throw new Error('Server is busy')
        }
        const data = await response.json()
        setData(data)
    }catch(error){
        console.log(Error);
    }finally{
        setLoading(false)
    }
}

fetchData()


function setData(data) {
    console.log(data)
    data.forEach(({ name, username, address, email, phone}) =>{
        users.innerHTML +=`
        <div class="cards">
        <div class="card">
            <div class="weather">
                <div class="country"><i class="fa-solid fa-location-dot"></i> ${address.city}</div>
                <div class="temperature">${address.geo.lat} <i class="fas fa-sun"></i></div>
            </div>
            <div class="about">
                <ul>
                    <li>Ism:  ${name} </li>
                    <li>Username:  ${username}</li>
                    <li>Email:  ${email}</li>
                    <li>Phone number:  ${phone}</li>
                </ul>
            </div>
                <button onclick="handleClick">Batafsil...</button>
        </div>
    </div>
        `
    })
}

function setLoading(isTrused) {
    if(isTrused){
        return loading.textContent = "Yuklanmoqda...";
    }else{
        return loading.textContent = "";
    }
}