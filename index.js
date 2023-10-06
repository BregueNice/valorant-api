let campo = document.getElementById('campo')

async function valorantApi() {
    let conexao = await fetch('https://valorant-api.com/v1/agents');
    let conexaoConvertida = await conexao.json();

    let conexaoMap = await fetch('https://valorant-api.com/v1/maps');
    let conexaoMapConvertida = await conexaoMap.json();

    console.log(conexaoConvertida);

    campo.style.backgroundImage = `url('${conexaoMapConvertida.data[Math.round(Math.random() * 14)].splash}')`;

    conexaoConvertida.data.forEach(item => {



        if (item.isPlayableCharacter) {

            campo.innerHTML += ` <div class="card" id="${item.displayName}" style="background-color: #${item.backgroundGradientColors[0]}">
                <img src="${item.fullPortrait}" class="agent-img" style="background-image: url('${item.background}');" />
                <button class="button-descricao" style="background-color: #${item.backgroundGradientColors[0]}" onclick="mudar(this)">Description</button>
                <div id="d" class="agent-descricao" style="background-color: #${item.backgroundGradientColors[0]}">
                <p class="agent-descricao-text" >${item.description}</p>
                </div>
                <p class="agent-name" >${item.displayName}</p>
                <ul class="skill-lists" style="font-size:10px">
                    <li class="agent-skills"><div><img class="skill-icon" src=${item.abilities[0].displayIcon}/></div>${item.abilities[0].displayName}</li>
                    <li class="agent-skills"><div><img class="skill-icon" src=${item.abilities[1].displayIcon}/></div>${item.abilities[1].displayName}</li>
                    <li class="agent-skills"><div><img class="skill-icon" src=${item.abilities[2].displayIcon}/></div>${item.abilities[2].displayName}</li>
                    <li class="agent-skills"><div><img class="skill-icon" src=${item.abilities[3].displayIcon}/></div>${item.abilities[3].displayName}</li>
                </ul>
                </div>`
        }
    });

}

function mudar(obj) {
    if (obj.parentNode.childNodes[5].style.display == 'none') {
        obj.parentNode.childNodes[5].style.display = 'flex';
    }else{
        obj.parentNode.childNodes[5].style.display= 'none';
    }
}

valorantApi()