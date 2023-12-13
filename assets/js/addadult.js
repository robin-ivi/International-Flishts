(function ($) {
	"use strict";
	
	(function () {

		// Add Adult & childElementCount
		const guestBtn = document.querySelector("#guests-input-btn"),
			guestOptions = document.querySelector("#guests-input-options"),
			adultsSubsBtn = document.querySelector("#adults-subs-btn"),
			adultsAddBtn = document.querySelector("#adults-add-btn"),
			childrenSubsBtn = document.querySelector("#children-subs-btn"),
			childrenAddBtn = document.querySelector("#children-add-btn"),
			roomSubsBtn = document.querySelector("#room-subs-btn"),
			roomAddBtn = document.querySelector("#room-add-btn"),
			adultsCountEl = document.querySelector("#guests-count-adults"),
			childrenCountEl = document.querySelector("#guests-count-children"),
			roomCountEl = document.querySelector("#guests-count-room");
		let maxNumGuests = 15,
			isGuestInputOpen = false,
			adultsCount = 1,
			childrenCount = 0,
			roomCount = 0;
		updateValues();
		guestBtn.addEventListener('click', function (e) {
			if (isGuestInputOpen) {
				guestBtn.classList.remove("open");
				guestOptions.classList.remove("open");
			} else {
				guestBtn.classList.add("open");
				guestOptions.classList.add("open");
			}
			isGuestInputOpen = isGuestInputOpen ? false : true;
			e.preventDefault();
		});
		adultsAddBtn.addEventListener('click', function () {
			adultsCount = addValues(adultsCount);
			updateValues();
		});
		adultsSubsBtn.addEventListener('click', function () {
			adultsCount = substractValues(adultsCount, 1);
			updateValues();
		});
		childrenAddBtn.addEventListener('click', function () {
			childrenCount = addValues(childrenCount);
			updateValues();
		});
		childrenSubsBtn.addEventListener('click', function () {
			childrenCount = substractValues(childrenCount, 0);
			updateValues();
		});
		roomAddBtn.addEventListener('click', function () {
			roomCount = addValues(roomCount);
			updateValues();
		});
		roomSubsBtn.addEventListener('click', function () {
			roomCount = substractValues(roomCount, 0);
			updateValues();
		});

		function calcTotalGuests() {
			return adultsCount + childrenCount + roomCount;
		}

		function addValues(count) {
			return (calcTotalGuests() < maxNumGuests) ? count + 1 : count;
		}

		function substractValues(count, min) {
			return (count > min) ? count - 1 : count;
		}

		function updateValues() {
			let btnText = `${adultsCount} Adults`;
			btnText += (childrenCount > 0) ? `, ${childrenCount} Childs` : '';
			btnText += (roomCount > 0) ? `, ${roomCount} Rooms` : '';
			guestBtn.innerHTML = btnText;
			adultsCountEl.innerHTML = adultsCount;
			childrenCountEl.innerHTML = childrenCount;
			roomCountEl.innerHTML = roomCount;
			if (adultsCount == 1) {
				adultsSubsBtn.classList.add("disabled");
			} else {
				adultsSubsBtn.classList.remove("disabled");
			} if (childrenCount == 0) {
				childrenSubsBtn.classList.add("disabled");
			} else {
				childrenSubsBtn.classList.remove("disabled");
			} if (roomCount == 0) {
				roomSubsBtn.classList.add("disabled");
			} else {
				roomSubsBtn.classList.remove("disabled");
			} if (calcTotalGuests() == maxNumGuests) {
				adultsAddBtn.classList.add("disabled");
				childrenAddBtn.classList.add("disabled");
				roomAddBtn.classList.add("disabled");
			} else {
				adultsAddBtn.classList.remove("disabled");
				childrenAddBtn.classList.remove("disabled");
				roomAddBtn.classList.remove("disabled");
			}
		}

	})();
	
	
})(this.jQuery);