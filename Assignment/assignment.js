const title = document.getElementById("title");
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");
const title4 = document.getElementById("title4");
const title5 = document.getElementById("title5");
const date = document.getElementById("date");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const date3 = document.getElementById("date3");
const date4 = document.getElementById("date4");
const date5 = document.getElementById("date5");

const ApiKey = "eeb1bc8ff502470c8400eb4afd79661a";
const url = "https://newsapi.org/v2/everything?q=";

async function fetchData() {
    const pageSize = 7;
    const sortBy = 'publishedAt';
    let query = "india";
    try {
        const response = await fetch(`${url}${query}&pageSize=${pageSize}&sortBy=${sortBy}&apikey=${ApiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        date.innerHTML = ` ${data.articles[0].publishedAt}`;
        title1.innerHTML = data.articles[1].title;
        date1.innerHTML = ` ${data.articles[1].publishedAt}`;
        title2.innerHTML = data.articles[2].title;
        date2.innerHTML = ` ${data.articles[2].publishedAt}`;
        title3.innerHTML = data.articles[3].title;
        date3.innerHTML = ` ${data.articles[3].publishedAt}`;
        title4.innerHTML = data.articles[4].title;
        date4.innerHTML = ` ${data.articles[4].publishedAt}`;
        title5.innerHTML = data.articles[5].title;
        date5.innerHTML = ` ${data.articles[5].publishedAt}`;

        console.log(data);
        title.addEventListener("click", () => {
            window.open(data.articles[0].url, "_blank");
        });
        title1.addEventListener("click", () => {
            window.open(data.articles[1].url, "_blank");
        });
        title2.addEventListener("click", () => {
            window.open(data.articles[2].url, "_blank");
        });
        title3.addEventListener("click", () => {
            window.open(data.articles[3].url, "_blank");
        });
        title4.addEventListener("click", () => {
            window.open(data.articles[4].url, "_blank");
        });
        title5.addEventListener("click", () => {
            window.open(data.articles[5].url, "_blank");
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
