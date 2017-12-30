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
//**********************************************************************//
	// Lary the octopus is the controller
	let octopus = {
		init: function() {
			viewList.init();
			viewCat.init();
			octopus.catClick();
			octopus.catClickCounter();
		},
		// maps thru all cats
		allCats: function() {
			let cat = model.map( (cat, index, model) => {
				return cat;
			});
			return cat;
		},

		// Number of selected cat in the model
		currentCat: 0,
		// Tell the view which cat to display after the click on li 
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
		// Update the counter for each cat and tells the view to display
		catClickCounter: function() {
			$(".container").on("click", "img", function() {
				console.log(octopus.currentCat);
				model[octopus.currentCat].numClicks += 1;
				viewCat.catClicksHTML(model[octopus.currentCat].numClicks);
			});
		}
	};
//**********************************************************************//
	let viewList = {
		// Creates list of all cats
		init: function() {
			const listOfCats = document.querySelector(".list");
			octopus.allCats().forEach( cat => {
				listOfCats.insertAdjacentHTML("beforeend", `<li>${cat.name}</li>`);
			});
		}
	};
//**********************************************************************//
	// display cat window
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
			// Add new cat to the container
			containerHtml = `
				<article>
					<h1>${cat.name}</h1>
					<img src="img/${cat.img}" alt="${cat.name} the cat" data-cat="${cat.name}">
		        	<h2>Number of clicks <span>${cat.numClicks}</span></h2>
		        </article>
			`;
			document.querySelector(".container").insertAdjacentHTML("afterbegin", containerHtml);
		},
		// Show number of clicks for particular cat
		catClicksHTML: function(clicks) {
			document.querySelector("h2 span").textContent = clicks;
		}
	}; 

	octopus.init();
});