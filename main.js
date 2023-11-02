function getProjects(){
    const urlGitHub = 'https://api.github.com/users/ThauanFelipe98/repos'
    var loadingElement = document.getElementById('loading')

    //requisição onde iremos usar o method: 'GET' que seria pegar/buscar
    fetch(urlGitHub, {
        method: 'GET'
    })

        //tratamento de resposta
        .then((response) => response.json())
        .then((response) => {
            loadingElement.style.display = 'none'
            console.log(response)
            showProjects(response)
        })

        //Caso existir um erro ira mostrar um erro no console.log
        .catch((e) => {
            console.log(e)
        })
}

function showProjects(data){
    var listElement = document.getElementById("my-projects-list")

    for(let i = 0; i < data.length; i++)
    {
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = 'blank'
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
}

getProjects()