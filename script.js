let answers=document.querySelectorAll('.answers')
let questionActive = document.querySelectorAll('.questions')
console.log(answers)
document.querySelectorAll('.questions').forEach(item => {
    item.addEventListener('click', event => {
      console.log('clock')
      for(var i = 0; i < answers.length; i++)
  {
  answers[i].classList.remove('show')
  }

      for(var i = 0; i < questionActive.length; i++)
  {
  questionActive[i].classList.remove('question__active')
  }

      item.classList.toggle('question__active')
      item.nextElementSibling.classList.toggle('show')
    })
    // item.addEventListener('blur', event => {
        //     console.log('bruh')
        //     item.classList.remove('question__active')
        //     item.nextElementSibling.classList.remove('show')
        //   //       for(var i = 0; i < answers.length; i++)
        //   // {
            //   //   answers[i].classList.toggle('show')
            //   // }
            //   //   .classList.toggle('show')
            //   })
        })
        