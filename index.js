
function makeinstance(Title, Genre, Description, RealeseYear, image, Rating,Duration, Categorie) {
    return {
        Title: Title,
        Genre: Genre,
        Description: Description,
        RealeseYear: RealeseYear,
        image: image,
        Rating:Rating,
        Duration: Duration,
        Categorie: Categorie,

    };
}


var instance2 = makeinstance('Berlin', 'Action Drame',
    "Returning to its golden age before the events of Money Heist Berlin and a masterful gang gather in Paris to plan one of the most ambitious heists they have ever committed. This sets the stage for an action-packed, suspenseful drama.", "2023", "./images/6.webp",'80%', "8 Episodes", "Serie")


var instance3 = makeinstance('Double piège', 'Mystery Drame ',
    "Mya, a widowed mother, is disturbed by an image of her late husband captured by the nanny cam of her child.", 2024, "./images/5.jpg",'75%', "8 Episodes", "Serie")
var instance4 = makeinstance('Game of Thrones', 'Drama Action Adventure',
    "Nine noble families vie for control of the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.", 2011 - 2019, "./images/2.jpg",'80%', "73 Episodes", "Serie")
var instance5 = makeinstance('Saltburn', 'Drame Comodie Thriller',
    "An Oxford University student finds himself drawn into the world of a charming and aristocratic classmate, who invites him to the vast estate of his eccentric family for a summer that will never be forgotten.", 2024, "./images/1.jpg",'75%', "2h", "Movie")
var instance6 = makeinstance('Pauvres créatures', 'Comodie drame romantique ',
    "The incredible tale of the fantastic evolution of Bella Baxter, a young woman brought back to life by Dr. Godwin Baxter, a brilliant and unorthodox scientist", 2023, "./images/3.jpg",'75%', "2h", "Movie")

var instance8 = makeinstance('Barbie', 'Adventure comodie fanntastique ',
    "Barbie, troubled by somber thoughts, decides to leave Barbie Land to find the person responsible. Accompanied by Ken, they discover that women don't rule the real world, sparking ideas for change."
    , 2023, "./images/14.jpg",'60%', "2h", "Movie")
var products = [instance2, instance3, instance4, instance5, instance6, instance8]
var trend = [instance3, instance8, instance5]
//   var movies =[]
//   var series =[]
function each(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i], i);
    }
}


var $conatiner = $('.container')


function display(products) {
    $conatiner.empty()
    each(products, function (ele, i) {
        $conatiner.append(`
        <img id="imga"  src=${ele.image}>
        <h2 class="test"> ${ele.Title}</h2>
        <h2 class="test"> ${ele.Genre}</h2>  
        <h2 class="test"> ${ele.Description}</h2>
        <h2 class="test"> ${ele.RealeseYear}</h2>
        <h2 class="test"> ${ele.Rating}</h2>
        <h2 class="test"> ${ele.Duration}</h2>
        <h2 class="test"> ${ele.Catégorie}</h2>





        `)
    })
}
display(products)

$("#home").click(function () {
    display(products)
})
$("#movies").click(function () {
    var test1 = filterByCategory("Movie")
    display(test1)
})
$("#series").click(function () {
    var test2 = filterByCategory("Serie")
    display(test2)
})
$("#trends").click(function () {
    display(trend)
})

function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {

        if (predicate(element, index)) {

            acc.push(element);
        }
    });
    return acc;
}
function filterByCategory(query) {
    return filter(products, function (ele, i) {
        return ele.Categorie === query;
    });
}
function filterByTitle(query) {
    return filter(products, function (ele) {
        return ele.Title.toLowerCase().includes(query.toLowerCase());
    });
}
function SearchUp() {
    var searchInput = $("#search2").val()
    var results = filterByTitle(searchInput)
    if (results.length > 0) {
        $conatiner.empty()
        display(results);
    } else {
        alert("no results");
    }
}
var $searchbutton = $('#submit')
$searchbutton.on('click', SearchUp)







