const shareButtons = document.querySelectorAll('.title-share-button')

async function copyText() {
    //prevent button going to the site 
    e.preventDefault()
    const link = this.getAttribute("link")
    try{
        await NavigationPreloadManager.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err){
        console.error(err)
 
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))