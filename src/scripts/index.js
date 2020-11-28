import $ from "jquery";

// TEMPLATE GENERATION FUNCTIONS

// EVENT HANDLER FUNCTIONS
const handleNewItemClick = function (event) {
  $(".home").on("click", ".new", (event) => {
    // code that you want to execute
    console.log("new item button clicked");
    // render();
  });
};

const handleFilterClick = function () {
  $(".home").on("click", ".filter", (event) => {
    // code that you want to execute
    console.log("filter button clicked");
    render();
  });
};

const handleDeleteItemClick = function () {
  $(".bookmark").on("click", ".delete", (event) => {
    // code that you want to execute
    console.log("delete bookmark button clicked");
    render();
  });
};

const handleClearFilterClick = function () {
  $("").on("click", "", (event) => {
    // code that you want to execute
    console.log("clear filter button clicked");
    render();
  });
};

const handleExpandItemClick = function () {
  $(".bookmark").on("click", ".title", (event) => {
    // code that you want to execute
    console.log("expand bookmark clicked");
    render();
  });
};

const handleCancelClick = function () {
  $("").on("click", "", (event) => {
    // code that you want to execute
    console.log("cancel add button clicked");
    render();
  });
};

const handleCreateItemClick = function () {
  $("").on("click", "", (event) => {
    // code that you want to execute
    console.log("create new bookmark click");
    render();
  });
};

// RENDER FUNCTION
const render = function () {};

function main() {}

// this function is the only function that stays in the index.js file once you modularize the tile structure
$(main);
