import $ from "jquery";

//  STORE DATA SINGLE SOURCE OF TRUTH

// TEMPLATE GENERATION FUNCTIONS

const generateAddForm = function () {
  return `<div id="form" class="form">
  <h3>Add a new bookmark</h3>
  <form action="">
    <label for="url">URL</label>
    <input
      type="text"
      id="url"
      name="url"
      placeholder="www.samplesite.com"
    />
    <label for="rating">Rating</label>
    <input type="number" id="rating" name="rating" placeholder="3" />
    <label for="description">Description</label>
    <textarea
      name="description"
      id="description"
      cols="30"
      rows="10"
      placeholder="Enter a description (optional)"
    ></textarea>
  </form>
</div>
<div class="button">
  <button id="cancel" class="cancel">Cancel</button>
  <button id="create" class="create">Create</button>
</div>`;
};

// EVENT HANDLER FUNCTIONS

const handleNewItemClick = function (event) {
  $(".top-button").on("click", ".new", (event) => {
    // code that you want to execute
    console.log("new item button clicked");
    let html = "";
    html = generateAddForm();
    $(".top-button").empty();
    $("").html(html);
  });
};

const handleFilterClick = function () {
  $(".top-button").on("click", ".filter", (event) => {
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
  $(".button").on("click", ".clear-filter", (event) => {
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
  $(".button").on("click", ".cancel", (event) => {
    // code that you want to execute
    console.log("cancel add button clicked");
    render();
  });
};

const handleCreateItemClick = function () {
  $(".button").on("click", ".create", (event) => {
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
