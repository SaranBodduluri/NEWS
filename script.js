
let category = "top";

function clicker(headingText) {
    document.querySelectorAll("aside > a").forEach(function(el)
    {
        el.classList.remove("selected");
    });

    document.querySelector(`aside > a.${headingText.toLowerCase()}`).classList.add("selected")

    let heading = document.querySelector('#newsList > h2');
    heading.innerText = headingText + " Stories";

    category = headingText.toLowerCase();
    fetcher();
}



async function fetcher()
{
    document.querySelector("#topStoriesContainer").innerHTML = "";

    const resp = await fetch(`https://hacker-news.firebaseio.com/v0/${category}stories.json`);
    const ids = await resp.json();
    //JSON = JavaScript Object Notation
    //const itemsArray = [];

    let items = ids.slice(0, 20);
    console.log(items);

    for(let i = 0 ; i < 20 ; i++)
    {
        const itemData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${items[i]}.json`);
        const resp = await itemData.json();
        //itemsArray.push(resp);

        const inserter = 
        `<a class="news-item" href="${resp.url}" target="blank" data-title="${resp.title}">` +
            `<h3 class="news-title">${resp.title}</h3>` +
            `<p class="news-byline">${resp.by}</p>` +
            `<p class="news-time">${resp.time}</p>` +
            `<p class="news-score">` +
                `<i class="fa fa-thumbs-up"></i>${resp.score}` +
            `</p>` +
        `</a>`;

        console.log(inserter)

        document.querySelector("#topStoriesContainer").insertAdjacentHTML("beforeend", inserter);
    }
}



function main()
{
    console.log("Hey");
}


fetcher();
fetche();
main();

function topClicked(){
    clicker("Top");
}

function bestClicked(){
    clicker("Best");
}

function newClicked(){
    clicker("New");
}


async function fetche(){
document.querySelector("#WeatherContainer").innerHTML = "";

const respo = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4fab3dcc0a948530302f0382667820ad');
const idss = await respo.json();
//idss is the variable which is being used 
//to get the json from the response
//idss is what needs to passed for HTML
const insert = 
`<a class="weather-item" href="${respo.url} " target="blank" data-title="${idss.name}">` +
`<h4 class="city-name" >${idss.name}</h4>` +
`<p class="temp">${idss.main.temp} </p> ` +
`</a>` ;

console.log(insert)

document.querySelector('#WeatherContainer').insertAdjacentHTML("beforeend", insert);
}
