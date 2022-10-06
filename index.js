const cor = ["verde", "amarelo", "rosa", "jeans"]

primeiroProduto = {
    roupa: "camiseta",
    preco: 20.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    masculino: true,
    cor: cor[0],
    img: "https://www.camiseteriabrasileira.com.br/imagem/index/31948108/G/camiseta_verde_militar_frente.png"
}

segundoProduto = {
    roupa: "short",
    preco: 50.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    masculino: true,
    cor: cor[3],
    img: "https://analima.vteximg.com.br/arquivos/ids/164021-450-450/Bermuda-Jeans-Used-c-Puidos-IMD-Jeans-Jeans-Escuro.png?v=637698258755030000"
}

terceiroProduto = {
    roupa: "cueca",
    preco: 15.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    masculino: true,
    cor: cor[2],
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/939/488/products/cueca18-21-a982d8d44847f57e6e16438313491096-1024-1024.png"
}

quartoProduto = {
    roupa: "calça",
    preco: 40.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    masculino: true,
    cor: cor[3],
    img: "https://analima.vteximg.com.br/arquivos/ids/163995-450-450/Calca-Jeans-Masculina-Ecxo-Jeans-Escuro.png?v=637698258649930000"
}
const carrinho = []

    if (primeiroProduto.masculino === true) {
        primeiroProduto.masculino = 'masculino'
        carrinho.push(primeiroProduto)
    } else {
        alert("Item não adicionado. Somente produtos masculinos.")
    }

    if (segundoProduto.masculino === true) {
        segundoProduto.masculino = 'masculino'
        carrinho.push(segundoProduto)
    } else {
        alert("Item não adicionado. Somente produtos masculinos.")
    }

    if (terceiroProduto.masculino === true) {
        terceiroProduto.masculino = 'masculino'
        carrinho.push(terceiroProduto)
    } else {
        alert("Item não adicionado. Somente produtos masculinos.")
    }

    if (quartoProduto.masculino === true) {
        quartoProduto.masculino = 'masculino'
        carrinho.push(quartoProduto)
    } else {
        alert("Item não adicionado. Somente produtos masculinos.")
    }

    console.log(carrinho)

    // //3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
    const retornaRoupa = carrinho.filter((objeto)=>{
        return objeto.roupa === "camiseta"
    })
    console.log(retornaRoupa)

    // //4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
    function retornaObjeto(array,item){
        let arrayString = []
        for(i=0;i<array.length;i++){
            if(array[i].roupa === item){
                arrayString.push(array[i])
            } else {
                console.log(`ITEM NÃO ENCONTRADO NO INDICE ${i+1}`)
            }
        }
        console.log(arrayString)
    }
    retornaObjeto(carrinho, "cueca")

    const pesquisar = (event) => {
        input = document.getElementById("input").value.toUpperCase()
        let elementos = document.getElementById("elementos")
        if(input === "CAMISETA"){
            return elementos.innerHTML = `
            <section id="elementos">
            <ul class="card">
            <img src="${carrinho[0].img}" class="img">
            <div class="container-card">
            <li>Roupa: <a href="https://pt.wikipedia.org/wiki/Camiseta" target="_blank">${carrinho[0].roupa}</a></li>
            <li>Preço: ${carrinho[0].preco}</li>
            <li>Sexo: ${carrinho[0].masculino}</li>
            <li>Cor: ${carrinho[0].cor}</li>
            </div>
            </ul>
            </section>
            `
        }else if(input === "CUECA"){
            return elementos.innerHTML = `
            <section id="elementos">
            <ul class="card">
            <img src="${carrinho[2].img}" class="img">
            <div class="container-card">
            <li>Roupa: <a href="https://pt.wikipedia.org/wiki/Cuecas" target="_blank">${carrinho[2].roupa}</a></li>
            <li>Preço: ${carrinho[2].preco}</li>
            <li>Sexo: ${carrinho[2].masculino}</li>
            <li>Cor: ${carrinho[2].cor}</li>
            </div>
            </ul>
            </section>
            `
        }else if(input === "CALÇA"){
            return elementos.innerHTML = `
            <section id="elementos">
            <ul class="card">
            <img src="${carrinho[3].img}" class="img">
            <div class="container-card">
            <li>Roupa: <a href="https://pt.wikipedia.org/wiki/Cal%C3%A7as" target="_blank">${carrinho[3].roupa}</a></li>
            <li>Preço: ${carrinho[3].preco}</li>
            <li>Sexo: ${carrinho[3].masculino}</li>
            <li>Cor: ${carrinho[3].cor}</li>
            </div>
            </ul>
            </section>
            `
        } else if(input === "SHORT"){
            return elementos.innerHTML = `
            <section id="elementos">
            <ul class="card">
            <img src="${carrinho[1].img}" class="img">
            <div class="container-card">
            <li>Roupa: <a href="https://pt.wikipedia.org/wiki/Cal%C3%A7%C3%A3o" target="_blank">${carrinho[1].roupa}</a></li>
            <li>Preço: ${carrinho[1].preco}</li>
            <li>Sexo: ${carrinho[1].masculino}</li>
            <li>Cor: ${carrinho[1].cor}</li>
            </div>
            </ul>
            </section>
            `
        }
        else {
             alert('item não encontrado')
        }
    }