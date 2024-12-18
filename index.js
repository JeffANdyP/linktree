const shareButtons = document.querySelectorAll('.title-share-button')
// console.log(shareButtons)


async function copyText(e) {
    //prevent button going to the site 
    e.preventDefault()
    const link = this.getAttribute('link')
    try{
        await navigator.clipboard.writeText(link)
        showPopup("Copied the text: " + link)
    } catch (err){
        console.error(err)
 
    }
}

function showPopup (message) {
    const popup = document.getElementById('popupMessage');
    const popupText = document.getElementById('popupText');
    popupText.textContent = message;
    popup.style.display = "flex";
}

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popUpmessage').style.display ="none";
})

document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('popupMessage').style.display = "none"; // Hide the pop-up
});

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))