const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSelections = document.querySelector('.main-content');

function PageTransitions() {
    // This is for the clicked active class to hide the inactive
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn');
            
            // Remove the active-btn class from the current button
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }

            // Add the active-btn class to the clicked button
            this.classList.add('active-btn');
        });
    }
    //To show the active sections
    allSelections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();