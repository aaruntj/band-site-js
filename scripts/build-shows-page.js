let showsArray = [
    {date:"Mon Sept 06 2021", venue:"Ronald Lane", location:"San Francisco, CA"},
    {date:"Tue Sept 21 2021", venue:"Pier 3 East", location:"San Francisco, CA"},
    {date:"Fri Oct 15 2021", venue:"View Lounge", location:"San Francisco, CA"},
    {date:"Sat Nov 06 2021", venue:"Hyatt Agency", location:"San Francisco, CA"},
    {date:"Fri Nov 26 2021", venue:"Moscow Center", location:"San Francisco, CA"},
    {date:"Wed Dec 15 2021", venue:"Press Club", location:"San Francisco, CA"},
]

for (let i=0; i<showsArray.length; i++) {
    const date = showsArray[i].date
    const venue = showsArray[i].venue
    const location = showsArray[i].location

    const showsShow = document.createElement("section")
    showsShow.classList.add("shows__show")

    const headingDate = document.createElement("p")
    headingDate.innerText = "DATE"
    headingDate.classList.add("shows__subheading")
    showsShow.appendChild(headingDate)

    const showsDate = document.createElement("p")
    showsDate.innerText = date
    showsDate.classList.add("shows__date")
    showsShow.appendChild(showsDate)

    const headingVenue = document.createElement("p")
    headingVenue.innerText = "VENUE"
    headingVenue.classList.add("shows__subheading")
    showsShow.appendChild(headingVenue)

    const showsVenue = document.createElement("p")
    showsVenue.innerText = venue
    showsVenue.classList.add("shows__text")
    showsShow.appendChild(showsVenue)

    const headingLocation = document.createElement("p")
    headingLocation.innerText = "LOCATION"
    headingLocation.classList.add("shows__subheading")
    showsShow.appendChild(headingLocation)

    const showsLocation = document.createElement("p")
    showsLocation.innerText = location
    showsLocation.classList.add("shows__text")
    showsShow.appendChild(showsLocation)

    const buttonBuy = document.createElement("button")
    buttonBuy.innerText = "BUY TICKETS"
    buttonBuy.classList.add("shows__button")
    showsShow.appendChild(buttonBuy)

    const shows = document.querySelector(".shows")
    shows.appendChild(showsShow)
}