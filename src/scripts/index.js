import $ from "jquery";

//  EXAMPLE STORE DATA SINGLE SOURCE OF TRUTH
let store = {
  bookmarks: [
    { id: 1, title: javascript, rating: 3, expanded: false, filtered: false },
    { id: 2, title: css, rating: 4, expanded: false, filtered: false },
    { id: 3, title: programming, rating: 2, expanded: false, filtered: false },
  ],
  adding: false,
  filtering: false,
};

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
    // console log to indicated user clicked button
    // change adding state to true in store
    // if adding is true generate add form html in the render function
    // render add form html
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
    // console log to indicate user clicked the button
    // change filtering state in store to true
    // if filtered state is true generate the dropdown html in the render function
    console.log("filter button clicked");
    render();
  });
};

const handleFilterDropdown = function () {
  $("").on("", "", (event) => {
    //code that you want to excute
    // when user selects a dropbox rating option
    // hide all bookmarks that are less than this rating / show bookmarks that are equal or greater than this rating using the store data
    // change filtered: false to true for store items
    //render the html
    console.log("user selected filter option");
  });
};

const handleDeleteItemClick = function () {
  $(".bookmark").on("click", ".delete", (event) => {
    // code that you want to execute
    //console log that user clicked button
    // when user clicks delete button, use splice to remove specific bookmark from store
    console.log("delete bookmark button clicked");
    render();
  });
};

const handleClearFilterClick = function () {
  $(".button").on("click", ".clear-filter", (event) => {
    // code that you want to execute
    //console log that user clicked button
    // change filtering state in store to false
    // if filtering state is false generate html without dropdown box/home state of app
    console.log("clear filter button clicked");
    render();
  });
};

const handleExpandItemClick = function () {
  $(".bookmark").on("click", ".title", (event) => {
    // code that you want to execute
    // console log that user clicked button
    // for that item change expanded in store to true
    // render new html for expanded bookmark
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
