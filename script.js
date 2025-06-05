function animarERedirecionar() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'volun/volun.html'
    }, 500);
}

function burguerMenu() {
    if (itens.style.display == 'block'){
       itens.style.display = 'none' 
    } else {
        itens.style.display = 'block'
    }
}