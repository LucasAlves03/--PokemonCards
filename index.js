const image =document.getElementById('logo');
image.style.animation = 'rotate 5s linear';

let i = setInterval(function(){
    clearInterval(i);
    document.getElementById('loading').style.display = "none";
    document.getElementById('conteudo').style.display = "inline";
},5000)


//cardData

var cardData = [
    {
        image: "img/charizard.webp",
        title:"Charizard",
        text:"Charizard is a powerful and iconic Pokémon known for its fierce appearance and impressive abilities. As the final evolution of Charmander, it becomes a formidable Fire- and Flying-type Pokémon"
    },

    {
        image:"img/mewtwo.png",
        title:"Mewtwo",
        text:"Mewtwo is a powerful and legendary Pokémon that holds a special place in the Pokémon franchise. It is known for its mysterious origins and immense psychic abilities. Mewtwo was created through genetic manipulation and cloning of the mythical Pokémon Mew, making it a unique and artificially created creature."
    },

    {
        image:"img/ninetales.png",
        title:"Ninetales",
        text:"Ninetales is a variant of the Pokémon Ninetales found in the Alola region. It has a beautiful, icy blue coat and a majestic, flowing mane. Known for its grace and elegance, Alolan Ninetales possesses powerful ice and fairy abilities, making it a versatile and enchanting Pokémon."
    },

    {
        image:"img/arcanine.png",
        title:"Arcanine",
        text:"Arcanine is a majestic and legendary Pokémon resembling a large, fiery dog. It has a proud and noble demeanor and is known for its speed and bravery. With its impressive fire-based attacks and loyal nature, Arcanine is a popular choice among trainers."
    },

    {
        image:"img/alakazam.png",
        title:"Alakazam",
        text:"Alakazam is a psychic-type Pokémon known for its extraordinary intelligence and psychic abilities. It has a humanoid appearance with a large mustache and a spoon that it uses to amplify its psychic powers. Alakazam's mind is said to have an IQ of over 5,000."
    },

    {
        image:"img/gengar.png",
        title:"Gengar",
        text:"Gengar is a mischievous and ghostly Pokémon known for its ability to hide in the shadows and to haunt people's dreams. It is a dual-type Ghost- and Poison-type Pokémon with a devilish grin and a tongue that is always hanging out. Gengar enjoys playing tricks on both humans and other Pokémon."
    }
];

var cardIndex = 0;
var generateButton = document.getElementById("generate-button");
var cardImage = document.getElementById("card-image");
var cardText = document.getElementById("card-text");
var description = document.getElementById("desc");

generateButton.addEventListener("click", function(){
    cardIndex = getRandomIndex(cardIndex, cardData.length);
    var randomCard = cardData[cardIndex];
    cardImage.src = randomCard.image;
    cardText.textContent = randomCard.title;
    description.textContent = randomCard.text
})


function getRandomIndex(currentIndex, maxLength){
    var newIndex = Math.floor(Math.random() * maxLength);
    if(newIndex === currentIndex){
        return getRandomIndex(currentIndex, maxLength)
    }
    return newIndex;
}