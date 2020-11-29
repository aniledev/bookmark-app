//  EXAMPLE STORE DATA SINGLE SOURCE OF TRUTH
let store = {
  bookmarks: [
    {
      id: 1,
      title: "javascript",
      rating: 3,
      url: "",
      description: "",
      expanded: false,
      filtered: false,
    },
    {
      id: 2,
      title: "css",
      rating: 4,
      url: "",
      description: "",
      expanded: false,
      filtered: false,
    },
    {
      id: 3,
      title: "programming",
      rating: 4,
      url: "",
      description: "",
      expanded: false,
      filtered: false,
    },
  ],
  adding: false, // is the new bookmark form showing or not?
  filtering: false, // is the dropdown box for filtering showing or not?
  filter: 0, // what rating are we filtering for?
  error: null, // is there an error on the new bookmark form or not?
};

// TEMPLATE GENERATION FUNCTIONS
const generateHomeScreen = function () {
  return `<div class="top-button button">
  <button id="new" class="new">
    <i class="fas fa-plus fa-xs"></i> New
  </button>
  <button id="filter" class="filter">
    <i class="fas fa-filter fa-xs"></i> Filter
  </button>
</div>
<div id="bookmarks" class="bookmarks">
  <h3>Title 11</h3>
  <h3>Title 10</h3>
  <h3>Title 9</h3>
  <h3>Title 8</h3>
  <h3>Title 7</h3>
  <h3>Title 6</h3>
</div>`;
};

const generateAddForm = function () {
  return `<div id="form" class="form">
  <h3>Add a new bookmark</h3>
  <form action="">
    <label for="title">Title</label>
    <input
      type="text"
      id="title"
      class="title"
      name="title"
      placeholder="Awesome Bookmark Site"
    />
    <label for="url">URL</label>
    <input
      type="text"
      id="url"
      class="url"
      name="url"
      placeholder="www.samplesite.com"
    />
    <label for="rating">Rating</label>
    <select
      id="rating"
      name="rating"
      type="number"
      class="rating"
      placeholder="3"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <label for="description">Description</label>
    <textarea
      name="description"
      id="description"
      class="description"
      cols="30"
      rows="10"
      placeholder="Enter a description (optional)"
    ></textarea>
  </form>
</div>
<div id="bookmarks" class="bookmarks"></div>
<div class="bottom-button">
  <button id="cancel" class="cancel">Cancel</button>
  <button id="create" class="create">Create</button>
</div>`;
};

const generateFilterSelect = function () {
  return `<div class="top-button button">
  <button id="new" class="new">
    <i class="fas fa-plus fa-xs"></i> New
  </button>
  <button id="filter" class="filter">
    <i class="fas fa-filter fa-xs"></i> Filter
  </button>
</div>
<div id="ratings" class="ratings">
  <label for="ratings" class="ratings">Select Filter</label>
  <select name="ratings" id="ratings">
    <option value="All">All</option>
    <option value="5">5</option>
    <option value="4">4</option>
    <option value="3">3</option>
    <option value="2">2</option>
    <option value="1">1</option>
  </select>
</div>
<div id="bookmarks" class="bookmarks">
  <h3>Title 10</h3>
  <h3>Title 8</h3>
</div>
<div class="bottom-button">
  <button id="clear-filter" class="clear-filter">Clear</button>
</div>`;
};

// EVENT HANDLER FUNCTIONS

const handleNewButtonClick = function () {
  $("main").on("click", ".new", function () {
    // code that you want to execute
    console.log("new item button clicked");
    // when user clicks button, change adding state to true
    store.adding = true;
    // when user clicks button, change filtering state to false
    store.filtering = false;
    // render new html for the form when adding state is true
    render();
  });
};

const handleFilterClick = function () {
  $("main").on("click", ".filter", function () {
    // console log to indicate user clicked the button
    console.log("filter button clicked");
    // when user clicks button, change addings state to false
    store.adding = false;
    // when user clicks button, change filtering state to true
    store.filtering = true;
    // render new html for the filter dropdown when filtering state is true
    render();
  });
};

const handleFilterDropdown = function () {
  $(".").on("", "", (event) => {
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
    // render();
  });
};

const handleClearFilterClick = function () {
  $(".button").on("click", ".clear-filter", (event) => {
    // code that you want to execute
    //console log that user clicked button
    // change filtering state in store to false
    // if filtering state is false generate html without dropdown box/home state of app
    console.log("clear filter button clicked");
    // render();
  });
};

const handleExpandItemClick = function () {
  $(".bookmark").on("click", ".title", (event) => {
    // code that you want to execute
    // console log that user clicked button
    // for that item change expanded in store to true
    // render new html for expanded bookmark
    console.log("expand bookmark clicked");
    // render();
  });
};

const handleCancelClick = function () {
  $("main").on("click", ".cancel", function () {
    // code that you want to execute
    console.log("cancel button clicked");
    // when user clicks button, change adding state to false
    store.adding = false;
    // when user clicks button, change filtering state to false
    store.filtering = false;
    // render the home page html based on the condition
    render();
  });
};

const handleCreateItemClick = function () {
  $(".button").on("click", ".create", (event) => {
    //code that you want to execute
    // prevent default action
    // when the user inputs information into the form, capture the info in way that can be added into the store
    // use .val to capture the input values
    // call the addNewBookmark function to add bookmark and change the state of the store
    console.log("create new bookmark click");
    // render();
  });
};

// FUNCTIONS THAT CHANGE THE STATE OF THE STORE
const addNewBookmark = function () {
  //code you want to execute
  // run the validate name function to validate the form inputs
  // run the create item name function, this factory funtion will return an object to push to the store
  // push the new bookmark to the store using .push()
  // call the render function to show the new state of the store
  // add a try catch block to handle errors
};

// RENDER FUNCTION
const render = function () {
  // if adding state is true, generate html for form and give to the dom
  if (store.adding === true) {
    console.log("render form function working");
    $(".top-button").empty();
    // create empty string for html
    let html = "";
    // set new html equal to the return string of generateAddForm()
    html = generateAddForm();
    // use jquery .replaceWith() to replace the current html with new html of the form
    $(".top-button").html(html);
  }
  // if filtering state is true, generate html for dropdown and give to dom
  if (store.filtering === true) {
    console.log("render filter function working");
    // set html to empty string
    let html = "";
    // assign html to filter dropdown template
    html = generateFilterSelect();
    // use jquery to replace the old html with new html
    // $(".bookmarks").remove();
    // $(".bottom-button").remove();
    $(".top-button").html(html);
  }
  // if adding state is false and filtering state is false, generate the home screen html
  if (store.adding === false && store.filtering === false) {
    console.log("render home function working");
    // use jquery to replace existing html with html for the home state
    let html = "";
    html = generateHomeScreen();
    $(".top-button").html(html);
  }
};

function main() {
  handleNewButtonClick();
  handleFilterClick();
  handleCancelClick();
}

// this function is the only function that stays in the index.js file once you modularize the tile structure
$(main);
