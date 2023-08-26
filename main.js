const clipboardIcons = document.getElementsByClassName("fa-clipboard")
console.log(clipboardIcons);


for (let i = 0; i < clipboardIcons.length; i++) {
    clipboardIcons[i].addEventListener('click',(e)=>{
        const text = document.getElementById(`code${i}`).innerText
        navigator.clipboard.writeText(text);
        e.target.classList.replace("fa-clipboard","fa-check")
        setTimeout(()=>{
           e.target.classList.replace("fa-check","fa-clipboard")
        },2000)
    })
}