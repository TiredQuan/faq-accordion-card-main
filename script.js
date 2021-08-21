let answers=document.querySelectorAll('.answers')
let questionActive = document.querySelectorAll('.questions')
let arrows = document.querySelectorAll('.arrows')
document.querySelectorAll('.questions').forEach(item => {
    item.addEventListener('click', event => {
        if(item.classList.contains('question__active')){
        } else {
            
            for(var i = 0; i < answers.length; i++)
            {
                answers[i].classList.remove('show')
                questionActive[i].classList.remove('question__active')
                arrows[i].classList.remove('rotate')

            }
        }
        item.classList.toggle('question__active')
        item.nextElementSibling.classList.toggle('show')
        item.childNodes[1].classList.toggle('rotate')
    })
})
