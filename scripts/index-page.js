

const commentsArray = [
    {name: "Connor Walton",date: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {name: "Emilie Beach", date: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name: "Miles Acosta", date: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
]

function printComments(){
    for (let i=0; i<commentsArray.length; i++) {
    const name = commentsArray[i].name
    const date = commentsArray[i].date
    const comment = commentsArray[i].comment

    const commentsContainer = document.querySelector(".comments__container")

    const commentsCard = document.createElement("section")
    const commentsAvatarContainer = document.createElement("section")
    const commentsAvatar = document.createElement("img")
    const commentsTextContainer = document.createElement("section")
    const commentsNameDateContainer = document.createElement("section")
    const commentsName = document.createElement("p")
    const commentsDate = document.createElement("p")
    const commentsComment = document.createElement("p")

    commentsCard.classList.add("comments__card")
    commentsAvatarContainer.classList.add("comments__avatar-container")
    commentsAvatar.classList.add("comments__avatar")
    commentsTextContainer.classList.add("comments__text-container")
    commentsNameDateContainer.classList.add("comments__name-date-container")
    commentsName.classList.add("comments__name")
    commentsDate.classList.add("comments__date")
    commentsComment.classList.add("comments__comment")

    commentsName.innerText = name
    commentsDate.innerText = date
    commentsComment.innerText = comment
    commentsAvatar.src = "./assets/images/grey-avatar.png"
    commentsAvatar.alt = "Comment Avatar"

    commentsContainer.appendChild(commentsCard)
    commentsCard.appendChild(commentsAvatarContainer)
    commentsCard.appendChild(commentsTextContainer)
    commentsAvatarContainer.appendChild(commentsAvatar)
    commentsTextContainer.appendChild(commentsNameDateContainer)
    commentsTextContainer.appendChild(commentsComment)
    commentsNameDateContainer.appendChild(commentsName)
    commentsNameDateContainer.appendChild(commentsDate)
    }
}

printComments()

const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target.formName.value)
    // console.log(event.target.formComment.value)
    commentsArray.push({name: event.target.formName.value, date: "test", comment: event.target.formComment.value})
    let commentsContainer = document.querySelector(".comments__container")
    commentsContainer.textContent = ""
    // console.log(commentsArray)
    printComments()
}

const user = document.querySelector("#user")
user.addEventListener("submit",handleSubmit)

