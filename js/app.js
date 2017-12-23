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
		},

		allCats: function() {
			let cat = model.map( (cat, index, model) => {
				return cat;
			});
			console.log(cat);
			return cat;
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

	}; 

	octopus.init();
});