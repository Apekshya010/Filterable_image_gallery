const filter_buttons=document.querySelectorAll('.filter-buttons button');
const filter_cards=document.querySelectorAll('.gallery .card');
console.log(filter_buttons)

const filterContent=(e)=>{
    filter_cards.forEach(card=>{
        card.classList.add('hide');
        if (card.dataset.name==e.target.dataset.name || e.target.dataset.name==='all'){
            card.classList.remove('hide');
            
        }
    })
}
filter_buttons.forEach(button=>addEventListener('click',filterContent));

