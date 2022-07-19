//urls
const MYADDRESSVALIDATOR_URL = "https://myaddress-validator.web.app/"
const EXHIBITION_MYADDRESSVALIDATOR = "./myaddressValidator/myaddressvalidator.html"
const CUIDARTE_URL = "https://www.figma.com/proto/7ywaSCvIU0eeBh7jKt4nZ3/cudiarte?node-id=202%3A1435&scaling=scale-down&page-id=0%3A1&starting-point-node-id=202%3A1435&show-proto-sidebar=1"
//object that holds the urls so its easy accesing them
const links = {
    "MYADDRESSVALIDATOR_URL":MYADDRESSVALIDATOR_URL,
    "EXHIBITION_MYADDRESSVALIDATOR":EXHIBITION_MYADDRESSVALIDATOR,
    "CUIDARTE_URL":CUIDARTE_URL
}

// putting event to all buttons with class url, their id must correspont to a constant in urls above
const buttons = document.querySelectorAll(".Url")
const subscribeUrl= button => {
    button.addEventListener("click",()=> window.location.href = links[button.id])
}
buttons.forEach(subscribeUrl)
