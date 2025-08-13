
let btnMenu = document.getElementById('btn-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlayMenu = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => { 
  menuMobile.classList.add('active');
});

menuMobile.addEventListener('click', () => {
  menuMobile.classList.remove('active');
});

overlayMenu.addEventListener('click', () => {
  menuMobile.classList.remove('active');
});

document.querySelectorAll('.img-port').forEach(item => {
  let clickedOnce = false; // Variavel para lembrar a quantidade de clicks
 
  item.addEventListener('click', function (e) {
    const isMobile = window.matchMedia("(max-width: 989px)").matches; // Verifica se é mobile, pois muda a lógica

    if (isMobile) {
      if (!clickedOnce) {
        // 1 toque no mobile somente mostra o overlay
        e.preventDefault();
        item.querySelector('.overlay').style.opacity = '1';
        clickedOnce = true;
        setTimeout(() => clickedOnce = false, 1500); // reseta se não clicar de novo em 1,5s 
      } else {
        // 2 toque então já abre o link
        window.open(item.dataset.link, '_blank');
      }
    } else {
      window.open(item.dataset.link, '_blank'); // Já abri direto, pois overlay aciona sem click
    }
  });
});
 