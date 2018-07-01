var button = document.querySelector(".search-form-header");
var form = document.querySelector(".hotel-form");

var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");
var adults = form.querySelector("[name=adult-amount]");
var children = form.querySelector("[name=children-amount]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
  } catch (err) {
  isStorageSupport = false;
  }

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("hotel-form-hide");
  form.classList.remove("hotel-form-error");

  if (storageAdults) {
      adults.value = storageAdults;
    }
  if (storageChildren) {
      children.value = storageChildren;
    }
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.remove("hotel-form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("hotel-form-error");
  } else {
  	if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});


