$(function(){
	// Model with all data
	let model = [
			{
				name: "Miki",
				img: "cat.jpg",
				numClicks: 0
			},
			{
				name: "Donald",
				img: "cat2.jpg",
				numClicks: 0
			},
			{
				name: "Ana",
				img: "cat3.jpg",
				numClicks: 0
			},
			{
				name: "Arthur",
				img: "cat4.jpg",
				numClicks: 0
			},
			{
				name: "Aragorn",
				img: "cat5.jpg",
				numClicks: 0
			},
			{
				name: "Lilly",
				img: "cat6.jpg",
				numClicks: 0
			}
		];

	let octopus = {
		init: function() {
			viewList.init();
			viewCat.init();
			octopus.catClick();
			octopus.catClickCounter();
		},

		allCats: function() {
			let cat = model.map( (cat, index, model) => {
				return cat;
			});
			return cat;
		},

		currentCat: 0,

		catClick: function() {
			for(let i = 0; i < model.length; i++) {
				$("li").click(function() {
					console.log($(this).text());
					if( $(this).text() === model[i].name ) {
						// Set currentCat
						octopus.currentCat = i;
						// return clicked cat object
						return viewCat.showCat(model[i]);
					}
				});
			}
		},

		catClickCounter: function() {
			$(".container").on("click", "img", function() {
				console.log(octopus.currentCat);
				model[octopus.currentCat].numClicks += 1;
				viewCat.catClicksHTML(model[octopus.currentCat].numClicks);
			});
		}
	};

	// First view
	let viewList = {
		// Creates list of all cats
		init: function() {
			const listOfCats = document.querySelector(".list");
			octopus.allCats().forEach( cat => {
				listOfCats.insertAdjacentHTML("beforeend", `<li>${cat.name}</li>`);
			});
		}
	};

	//
	let viewCat = {
		// Create cat window
		init: function() {
			containerHtml = `
				<article>
					<h1>${model[0].name}</h1>
					<img src="img/${model[0].img}" alt="${model[0].name} the cat" data-cat="${model[0].name}">
		        	<h2>Number of clicks <span>${model[0].numClicks}</span></h2>
		        </article>
			`;
			document.querySelector(".container").insertAdjacentHTML("afterbegin", containerHtml);
		},

		showCat: function(cat) {
			// Clear .container
			document.querySelector(".container").innerHTML = "";
			containerHtml = `
				<article>
					<h1>${cat.name}</h1>
					<img src="img/${cat.img}" alt="${cat.name} the cat" data-cat="${cat.name}">
		        	<h2>Number of clicks <span>${cat.numClicks}</span></h2>
		        </article>
			`;
			document.querySelector(".container").insertAdjacentHTML("afterbegin", containerHtml);
		},

		catClicksHTML: function(clicks) {
			document.querySelector("h2 span").textContent = clicks;
		}
	}; 

	octopus.init();
});