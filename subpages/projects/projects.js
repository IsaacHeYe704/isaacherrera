//urls
const MYADDRESSVALIDATOR_URL = "https://myaddress-validator.web.app/"
const EXHIBITION_MYADDRESSVALIDATOR = "./myaddressValidator/myaddressvalidator.html"
//object that holds the urls so its easy accesing them
const links = {
    "MYADDRESSVALIDATOR_URL":MYADDRESSVALIDATOR_URL,
    "EXHIBITION_MYADDRESSVALIDATOR":EXHIBITION_MYADDRESSVALIDATOR
}

// putting event to all buttons with class url, their id must correspont to a constant in urls above
const buttons = document.querySelectorAll(".Url")
const subscribeUrl= button => {
    button.addEventListener("click",()=> window.location.href = links[button.id])
}
buttons.forEach(subscribeUrl)