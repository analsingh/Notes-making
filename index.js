const addThemebtn = document.querySelector('.add_card');
const cardThemes = document.querySelector('.card_themes');
const card_Theme = document.querySelectorAll('.card_theme');
const cardCont = document.querySelector('.card_container');

var editable = [];
var count = 0;
addThemebtn.addEventListener('click', () => {
    if (count % 2 == 0) {
        for (let i = 0; i < card_Theme.length; i++) {
            setTimeout(function() {

                card_Theme[i].style.transform = 'translateY(0px)';
                card_Theme[i].style.display = 'block';

            }, 50 * i);
        }
    } else {
        for (let i = 0; i < card_Theme.length; i++) {
            setTimeout(function() {

                card_Theme[card_Theme.length - 1 - i].style.transform = 'translateY(calc(${card_Theme.length-1-i}* -40px))';
                card_Theme[card_Theme.length - 1 - i].style.display = 'none';

            }, 50 * i);
        }
    }
    count++;
})

card_Theme.forEach(elem => {

    elem.addEventListener('click', () => {
        if (document.querySelector('.card_template')) {
            document.querySelector('.card_template').remove();
        }
        let color = elem.style.backgroundColor;
        const card = document.createElement('div');
        card.classList.add('card', 'addCard');

        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let months = ['Jan', 'Feb', 'March', 'April', 'May', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];

        card.innerHTML = `
    <div class="card addCard">
    <span class="card-title">
      HELLO ,HAVE A NICE DAY
    </span>
    <span class="card_footer">
        <small> ${months[month]} ${day},${year}</small>
        <small class="card_edit"><i class="fas fa-pen"></i></small>
    </span>
</div>`;
        card.style.backgroundColor = color;
        cardCont.prepend(card);

        const cards = document.querySelectorAll('.card');
        cards.forEach((card, cardCount) => {
            editable[cardCount] = false;
            card.querySelector('.card_edit').addEventListener('click', () => {
                if (editable[cardCount]) {
                    card.querySelector('.card-title').contentEditable = 'false';
                    editable[cardCount] = false;
                    card.querySelector('.card_edit').innerHTML = '<i class="fas fa-pen"></i>';
                } else {

                    card.querySelector('.card-title').contentEditable = 'true';
                    editable[cardCount] = true;
                    card.querySelector('.card_edit').innerHTML = '<i class="fas fa-save"></i>';

                }
            })
        })
    })

})