$(function(){

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
			view.init();
		},

		allCatsName: function() {
			let cats = model.map( () => {
				return model.name;
			});
		}
	};

	let view = {
		init: function() {

		}
	};

	octopus.init();
});