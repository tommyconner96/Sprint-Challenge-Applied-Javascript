// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


let container = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(variable => {
    for (let article in variable.data.articles) {
        for (let item in variable.data.articles[article]) {
            container.appendChild(cards(variable.data.articles[article][item]))
        }
    }
})

cards = (data) => {

    let card = document.createElement('div')
	let headline = document.createElement('div')
	let authorSection = document.createElement('div')
	let imgContainer = document.createElement('div')
	let img = document.createElement('img')
	let authorName = document.createElement('span')
	
    card.classList.add('card')
	headline.classList.add('headline')
	authorSection.classList.add('author')
	imgContainer.classList.add('img-container')

	card.appendChild(headline)
    card.appendChild(authorSection)
	authorSection.appendChild(imgContainer)
	imgContainer.appendChild(img)
	authorSection.appendChild(authorName)

    
    headline.textContent = data.headline
    img.src = data.authorPhoto
    authorName.textContent = data.authorName


    return card
}