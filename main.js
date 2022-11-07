function firstload() {
    /* It's getting the value of the localStorage and putting it in the div. */
    bkp_articles = JSON.parse(localStorage.getItem("cards"))
    if (bkp_articles != null) {
        console.log("entrou")
        let div_new = document.createElement('div')
        div_new.innerHTML = bkp_articles
        document.querySelector('div').innerHTML = div_new.innerHTML
    }
}
function create() {
    /* Creating a new div and an array of articles. */
    let div_old = document.querySelector('div')
    let div_new = document.createElement('div')
    let articles = []
    let bkp_articles = []

    /* Creating an array of articles. */
    for (let i = 0; i < div_old.children.length; i++) {
        articles[i] = div_old.children[i]
    }
    /* Creating a new article with a header, a title, a paragraph, a value, a footer, a button, an input
    and another button. */
    let article = document.createElement('article')
    let header = document.createElement('header')
    let title = document.createTextNode(window.prompt("Digite o titulo da nova Caixinha")) 
    let button_remove = document.createElement('button')
    let p = document.createElement('p')
    let value = document.createTextNode(window.prompt("Insira o valor Inicial"))
    let footer = document.createElement('footer')
    let button_more = document.createElement('button')
    let input = document.createElement('input')
    let button_less = document.createElement('button')

    /* It's setting the id and the text of the buttons. */
    button_remove.setAttribute("onclick","removecard(this)")
    button_remove.innerText = "X"
    button_more.setAttribute("id","more")
    button_more.setAttribute("onclick","valuein(this)")
    button_more.innerText = "+"
    button_less.setAttribute("id","less")
    button_less.setAttribute("onclick","valuede(this)")
    button_less.innerText = "-"

    /* It's creating a new article with a header, a title, a paragraph, a value, a footer, a button, an
    input and another button. */
    header.appendChild(title)
    header.appendChild(button_remove)
    p.appendChild(value)
    footer.appendChild(button_more)
    footer.appendChild(input)
    footer.appendChild(button_less)
    article.appendChild(header)
    article.appendChild(p)
    article.appendChild(footer)

    /* It's adding the new article in the array of articles. */
    articles.splice(articles.length-1,0,article)
    /* It's creating a new div and adding the articles in the array of articles. */
    for (let i = 0; i < articles.length; i++) {
        articles[i].setAttribute("id",i)
        div = document.createElement('div').innerHTML = articles[i]
        div_new.appendChild(div)
    }
    /* It's replacing the old div with the new div. */
    document.querySelector('div').innerHTML = div_new.innerHTML
    localStorage.setItem("cards", JSON.stringify(div_new.innerHTML));
}
function valuein(button) {
    /* It's getting the value of the input and adding it to the value of the paragraph. */
    let article = button.parentNode.parentNode
    let id = article.getAttribute("id")
    let value_old = article.children[1].innerText
    let value_new = Math.floor((parseFloat(value_old) + parseFloat(document.querySelectorAll('input')[id].value))*100) / 100
    document.querySelectorAll('p')[id].textContent = value_new
    localStorage.setItem("cards", JSON.stringify(document.querySelector('div').innerHTML));
}
function valuede(button) {
    /* It's getting the value of the input and subtracting it from the value of the paragraph. */
    let article = button.parentNode.parentNode
    let id = article.getAttribute("id")
    let value_old = article.children[1].innerText
    let value_new = Math.floor((parseFloat(value_old) - parseFloat(document.querySelectorAll('input')[id].value))*100) / 100
    document.querySelectorAll('p')[id].textContent = value_new
    localStorage.setItem("cards", JSON.stringify(document.querySelector('div').innerHTML));
}
function removecard(button) {
    let article = button.parentNode.parentNode
    let id = article.getAttribute("id")
    let div_old = document.querySelector('div')
    let div_new = document.createElement('div')
    let articles = []

    for (let i = 0; i < div_old.children.length; i++) {
        articles[i] = div_old.children[i]
    }

    articles.splice(id, 1)

    for (let i = 0; i < articles.length; i++) {
        articles[i].setAttribute("id",i)
        div = document.createElement('div').innerHTML = articles[i]
        div_new.appendChild(div)
    }

    document.querySelector('div').innerHTML = div_new.innerHTML
    localStorage.setItem("cards", JSON.stringify(div_new.innerHTML));
}
