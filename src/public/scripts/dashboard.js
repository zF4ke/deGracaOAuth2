const authenticationInput = document.getElementById('authenticationInput')
const homeInput = document.getElementById('homeInput')
const defaultOptions = document.querySelectorAll('.epicgames, .nitro, .boost, .minecraft, .redesky, .netflix, .crunchyroll')

authenticationInput.setAttribute("href","/auth/logout")
authenticationInput.innerHTML = "Sair&nbsp&nbsp"

homeInput.setAttribute("href","/")
defaultOptions.forEach(option => option.style.display = "none")

function setVisibles() {
    const dropdownStyle1visible = document.querySelectorAll('.dropdown-style1-content button:not([style*="display: none;"])')
    const dropdownStyle2visible = document.querySelectorAll('.dropdown-style2-content button:not([style*="display: none;"])')

    dropdownStyle1visible[dropdownStyle1visible.length - 1].style.borderRadius = "0px 0px 15px 15px"
    dropdownStyle2visible[dropdownStyle2visible.length - 1].style.borderRadius = "0px 0px 15px 15px"
}

setVisibles()

const dropdownOptionContent = document.querySelector('.dropdown-option-content')
const dropdownStyle1content = document.querySelector('.dropdown-style1-content')
const dropdownStyle2content = document.querySelector('.dropdown-style2-content')

const dropdownOptionMainButton = document.querySelector('.dropdown-option-mainbutton')
const dropdownStyle1mainButton = document.querySelector('.dropdown-style1-mainbutton')
const dropdownStyle2mainButton = document.querySelector('.dropdown-style2-mainbutton')

dropdownOptionContent.onmouseleave = () => {
    dropdownOptionContent.style.display = 'none'
}
dropdownOptionMainButton.onmouseenter = () => {
    dropdownOptionContent.style.display = 'flex'
}
dropdownStyle1content.onmouseleave = () => {
    dropdownStyle1content.style.display = 'none'
}
dropdownStyle1mainButton.onmouseenter = () => {
    dropdownStyle1content.style.display = 'block'
}
dropdownStyle2content.onmouseleave = () => {
    dropdownStyle2content.style.display = 'none'
}
dropdownStyle2mainButton.onmouseenter = () => {
    dropdownStyle2content.style.display = 'block'
}

function updateButtons() {
    var actualBlocked = document.querySelector('.blocked:not(.disabled)')

    return actualBlocked;
}
const optionsMainPanel = document.querySelectorAll('.option')

optionsMainPanel.forEach(optionMain => {
    optionMain.addEventListener('click', () => {
        const option = (optionMain.classList[2]).replace(/-optionMain/g, '')

        document.querySelector(`.${option}-button`).click()
    })
})

const dropdownOptionButtons = document.querySelectorAll('.dropdown-option-content button')

dropdownOptionButtons.forEach(dropdownOption => {
    dropdownOption.addEventListener('click', () => {
        if(dropdownOption.classList.contains('blocked')) return
        const dropdownOptionMainButtonImage = document.querySelector('.dropdown-option-mainbutton img')
        const option = (dropdownOption.classList[0]).replace(/-button/g, '')
        const tempHidden = document.querySelectorAll('.dropdown-style1-button, .dropdown-style2-button')
        const optionSelectors = document.querySelectorAll(`.${option}`)
        var actualBlocked = updateButtons()

        tempHidden.forEach(button => button.style.display = "none")
        
        dropdownOptionMainButtonImage.setAttribute('src', `./images/${option}-logo.png`)

        dropdownStyle1mainButton.innerText = "Selecionar"
        dropdownStyle2mainButton.innerText = "Selecionar"

        optionSelectors.forEach(selector => selector.style.display = "block")
        actualBlocked.classList.remove('blocked')
        dropdownOption.classList.add('blocked')
        setVisibles()
    })
})

const dropdownStyle1Buttons = document.querySelectorAll('.dropdown-style1-button')
const dropdownStyle2Buttons = document.querySelectorAll('.dropdown-style2-button')

dropdownStyle1Buttons.forEach(dropdownStyleButton => {
    dropdownStyleButton.addEventListener('click', () => {
        dropdownStyle1mainButton.innerText = dropdownStyleButton.innerHTML
        dropdownStyle1content.style.display = 'none'
    })
})

dropdownStyle2Buttons.forEach(dropdownStyleButton => {
    dropdownStyleButton.addEventListener('click', () => {
        dropdownStyle2mainButton.innerText = dropdownStyleButton.innerHTML
        dropdownStyle2content.style.display = 'none'
    })
})

const usernameInput = document.querySelector("#commands > div > input")
const discriminatorInput = document.querySelector("#commands > div > div.username-separator-discriminator > input")
const continueButton = document.querySelector("#commands > div > div.continue > button")

function isReady() {
    if(dropdownStyle1mainButton.innerText == "Selecionar") return;
    if(dropdownStyle2mainButton.innerText == "Selecionar") return;
    if(usernameInput.value == "" || usernameInput.length == 0) return;
    if(discriminatorInput.value == "" || discriminatorInput.value.length == 0 || discriminatorInput.value.length < 4) return;

    if(!continueButton.classList.contains('active')) continueButton.classList.add('active');
}

setInterval("isReady()", 100)

const alertBox = document.querySelector('.alert')

continueButton.addEventListener('click', () => {

    if(!continueButton.classList.contains('active')) return;
    alertBox.style.display = 'block';

    const url = getURL()
    setTimeout(() => {
        window.open(url, '_blank')
    }, 1500)
})

function getURL() {
    return "https://dimagratis.online/degraca-f649";
}

function enforceMinMax(el){
    if(el.value != ""){
        if(parseInt(el.value) < parseInt(el.min)){
            el.value = el.min;
        }
        if(parseInt(el.value) > parseInt(el.max)){
            el.value = el.max;
        }
    }
}

