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

const generateAddForm = function () {
  return `<div id="form" class="form">
  <h3>Add a new bookmark</h3>
  <form action="">
    <label for="title">Title<label>
    <input type="text" id="title" name="title" placeholder="Awesome Bookmark Site" />
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

const handleNewButtonClick = function () {
  $(".top-button").on("click", ".new", function () {
    // code that you want to execute
    console.log("new item button clicked");
    // when user clicks button, change adding state to true
    store.adding = true;
    // render new html for the form when adding state is true
    render();
  });
};

const handleFilterClick = function () {
  $(".top-button").on("click", ".filter", function () {
    // console log to indicate user clicked the button
    console.log("filter button clicked");

    // if filtered state is true generate the dropdown html in the render function

    // render();
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
  $(".button").on("click", ".cancel", (event) => {
    // code that you want to execute
    // change adding state to false in the store
    // if adding state is false, then generate the home page html
    // render the home page html
    console.log("cancel add button clicked");
    // render();
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
  console.log("render form function working");
  // if adding state is true, generate html for form and give to the dom
  if ((store.adding = true)) {
    // create empty string for html
    let html = "";
    // set new html equal to the return string of generateAddForm()
    html = generateAddForm();
    // use jquery .replaceWith() to replace the current html with new html of the form
    $(".top-button").replaceWith(html);
  }
};

function main() {
  handleNewButtonClick();
  handleFilterClick();
}

// this function is the only function that stays in the index.js file once you modularize the tile structure
$(main);
