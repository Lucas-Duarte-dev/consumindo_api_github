
async function api() {
    const card = document.querySelector('.card');
    const response = await fetch('http://localhost:3333/api');
    const data = await response.json();
    data.forEach(element => {
        card.innerHTML += `
            <div class="cardRepo">
            <img src="${element.owner.avatar_url}"/>
            <div class="description">
                <h3>${element.owner.login}: <p> ${element.name}</p></h3>
                <span>${element.description !== null ? element.description : "Esse post não tem descrição"}</span>
                <a target="_blank" href="${element.svn_url}">Acesse esse código</a>
            </div>
            </div>
        `;
    });

    return data;
}

window.addEventListener('load', () => {
    api();
})


