/* Identificadores */

let parallaxElementsBack = document.querySelectorAll('.parallax-back'),
    speedVerticalBack = 0
let parallaxElementsNubes = document.querySelectorAll('.parallax-nubes'),
    speedVerticalNubes = 0
let parallaxElements = document.querySelectorAll('.parallax'),
    speedVertical = 0,
    speedHorizontal = 0
let claimStructure = document.getElementById('claim-structure')
let iconsStructure = document.getElementById('icons-structure')
let logoSkydive = document.getElementById('logo-skydive')
let claimHeader = document.getElementById('claim-header')
let buttonHeader = document.getElementById('button-header')
let aside = document.getElementById('aside')
let generalInfo = document.getElementById('general-information')
let hello = document.getElementById('hello')
let about = document.getElementById('about')
let join = document.getElementById('join')
let scheduleSection = document.getElementById('schedule')
let nubesGeneralIcons = document.getElementById('nubes-general-icons')
let buttonJump = document.getElementById('button-jump')
let aside1 = document.getElementById('aside1')
let aside2 = document.getElementById('aside2')
let followUs = document.getElementById('follow-us')
let footerSection = document.getElementById('footer')
let socials = document.getElementById('socials')

/* Schudule */

let reservar = document.getElementById('reservar')
let formReserve = document.getElementById('form-reserve')

let tableCellContent = [
    'Monday at 9:00 - 11:00',
    'Tuesday at 9:00 - 11:00',
    'Thursday at 9:00 - 11:00',
    'Monday at 12:00 - 14:00',
    'Tuesday at 12:00 - 14:00',
    'Wednesday at 12:00 - 14:00',
    'Thursday at 12:00 - 14:00',
    'Monday at 15:00 - 17:00',
    'Tuesday at 15:00 - 17:00',
]

/* start scroll */
let start = 0;

/* function Vertical Scroll */

document.addEventListener('scroll', apply2DEffects)

function apply2DEffects() {

    parallaxElementsBack.forEach(function (elementBack) {

        /* Parallax fondo Structure  - parallaxElementsBack */

        if (elementBack.dataset.direction === 'vertical') {
            speedVerticalBack = elementBack.dataset.speed * elementBack.getBoundingClientRect().top

            if ((elementBack.getBoundingClientRect().top) <= -15) {
                claimStructure.classList.add('slide-out-top-anim');
                claimStructure.classList.remove('slide-in-top-anim');
            } else {
                claimStructure.classList.add('slide-in-top-anim');
                claimStructure.classList.remove('slide-out-top-anim');
            }

            if ((elementBack.getBoundingClientRect().top) <= -185) {
                iconsStructure.classList.add('slide-out-top-anim');
                iconsStructure.classList.remove('slide-in-top-anim');
            } else {
                iconsStructure.classList.add('slide-in-top-anim');
                iconsStructure.classList.remove('slide-out-top-anim');
            }

        } else {
            speedVerticalBack = 0
        }

        elementBack.style.backgroundPosition = `0px calc(80% - ${speedVerticalBack}px)`


    })

    /* Nubes Parallax Schedule */

    scheduleSection.style.backgroundPosition = `0px calc(${speedVerticalBack + 70}px)`


    /* Parallax Elementos - parallaxElements */

    parallaxElements.forEach(function (element) {

        // console.log(window.pageYOffset);

        if (element.dataset.direction === 'vertical') {
            speedVertical = element.dataset.speed * element.getBoundingClientRect().top

            claimHeader.classList.remove('delay2');
            buttonJump.classList.remove('delay4');
            aside1.classList.remove('delay3');
            aside2.classList.remove('delay5');

            if (window.pageYOffset >= 30) {
                logoSkydive.classList.add('slide-out-top-anim');
                logoSkydive.classList.remove('slide-in-top-anim');
            } else if (window.pageYOffset <= 0) {
                logoSkydive.classList.add('slide-in-top-anim');
                logoSkydive.classList.remove('slide-out-top-anim');
            }

            if (window.pageYOffset >= 80) {
                claimHeader.classList.add('slide-out-top-anim');
                claimHeader.classList.remove('slide-in-top-anim');
            } else if (window.pageYOffset <= 80) {
                claimHeader.classList.add('slide-in-top-anim');
                claimHeader.classList.remove('slide-out-top-anim');
            }

            if (window.pageYOffset >= 120) {
                buttonHeader.classList.add('slide-out-top-anim');
                buttonHeader.classList.remove('slide-in-top-anim');
                start = 1;
            } else if (window.pageYOffset <= 120 && start == 1) {
                buttonHeader.classList.add('slide-in-top-anim');
                buttonHeader.classList.remove('slide-out-top-anim');
            }

            if ((element.getBoundingClientRect().top) <= -301) {
                aside.classList.add('slide-out-top-anim');
                aside.classList.remove('slide-in-top-anim');
                followUs.style.right = '-70px'
                start = 1;
            } else if (start == 1) {
                aside.classList.add('slide-in-top-anim');
                aside.classList.remove('slide-out-top-anim');
                followUs.style.right = '-145px'
            }

            if (generalInfo.getBoundingClientRect().top <= 350) {
                nubesGeneralIcons.classList.add('fade-out-nubes')
            } else {
                nubesGeneralIcons.classList.remove('fade-out-nubes')
            }

            if (generalInfo.getBoundingClientRect().top >= 0) {
                hello.classList.add('slide-in-top-anim');
                hello.classList.remove('slide-out-top-anim');
            } else {
                hello.classList.remove('slide-in-top-anim');
                hello.classList.add('slide-out-top-anim');
            }

            if (generalInfo.getBoundingClientRect().top >= -60) {
                about.classList.add('slide-in-top-anim');
                about.classList.remove('slide-out-top-anim');
            } else {
                about.classList.remove('slide-in-top-anim');
                about.classList.add('slide-out-top-anim');
            }

            if (generalInfo.getBoundingClientRect().top >= -120) {
                join.classList.add('slide-in-top-anim');
                join.classList.remove('slide-out-top-anim');
            } else {
                join.classList.remove('slide-in-top-anim');
                join.classList.add('slide-out-top-anim');
            }


            /* Pestaña Follow Us Footer */
            if (window.pageYOffset >= (document.body.offsetHeight - document.body.clientHeight)) {
                followUs.style.right = '-145px'
            }

        } else {
            speedVertical = 0
        }


        // if (element.dataset.direction === 'horizontal') {
        //     speedHorizontal = element.dataset.speed * element.getBoundingClientRect().top
        // } else {
        //     speedHorizontal = 0
        // }



        /* Animación nubes General Info */

        element.style.transform = `translate(${speedHorizontal}px, ${speedVertical}px)`

        if ((-speedVertical - 100 * 2) <= 0) {
            nubesGeneralIcons.style.left = `${-speedVertical - 100 * 2}px`
            nubesGeneralIcons.style.zIndex = `1`
        } else {
            nubesGeneralIcons.style.left = `0px`
            nubesGeneralIcons.style.zIndex = `-1`

        }


    })


}

function selectTable(tcs) {
    let scheduleCells = document.querySelectorAll('.cells')

    scheduleCells.forEach(function (e) {
        if (scheduleCells[tcs] == e) {
            scheduleCells[tcs].outerHTML = `<td id="cell-selected" class="cells cell-selected" onclick="deselectTable(${tcs})"><i class="fas fa-check jello-diagonal-2-anim"></i></td>`
        } else {
            e.outerHTML = '<td class="cells cell-disabled"></td>'
        }
    }
    )

    formReserve.style.display = 'block'

    reservar.innerHTML = `<p class="slide-in-top-anim delay2"><i class="fas fa-check check-verde" style="margin-right:3px"></i> ${tableCellContent[tcs]}</p>
    <a href="javascript:void(0)"><button id="button-reservar" type="button" class="button-reservar slide-in-top-anim delay4" data-direction="vertical" onclick="alert('Reserved ${tableCellContent[tcs]}')">Reserve</button></a>`
}

function deselectTable(tcs) {
    let scheduleCells = document.querySelectorAll('.cells')

    scheduleCells.forEach(function (e, idx) {

        if (idx == tcs) {
            scheduleCells[tcs].outerHTML = `<td class="cells unmarked" onclick="selectTable(${tcs})"></td>`
        } else {
            e.outerHTML = `<td class="cells unmarked" onclick="selectTable(${idx})"></td>`
        }
    }
    )

    formReserve.style.display = 'none'

    reservar.innerHTML = `<p class="slide-in-top-anim delay2">Select Time Slot Cell <i class="far fa-hand-pointer heartbeat-anim"></i></p>
    <a href="javascript:void(0)"><button id="button-reservar" type="button" class="button-reservar slide-in-top-anim delay4" data-direction="vertical" disabled>Reserve</button></a>`
}

function overFollowUs() {
    followUs.style.right = '0px'
}

function outFollowUs() {
    followUs.style.right = '-70px'
}


followUs.addEventListener('mouseover', overFollowUs)
followUs.addEventListener('mouseout', outFollowUs)



// function apply3DEffects() {
//     document.querySelector('.cube-wrap').style.transform = `rotateX(${window.scrollY * .2}deg) rotateY(${window.scrollY * .2}deg) rotateZ(${window.scrollY * .2}deg)`
// }