//  EXAMPLE STORE DATA SINGLE SOURCE OF TRUTH
let store = {
  bookmarks: [
    {
      id: cuid(),
      title: "javascript",
      rating: 1,
      url: "url",
      description: "description",
      expanded: false,
      filtered: false,
    },
    {
      id: cuid(),
      title: "code",
      rating: 2,
      url: "url",
      description: "description",
      expanded: false,
      filtered: false,
    },
    {
      id: cuid(),
      title: "coding",
      rating: 4,
      url: "url",
      description: "description",
      expanded: false,
      filtered: false,
    },
    {
      id: cuid(),
      title: "stuff",
      rating: 4,
      url: "url",
      description: "description",
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
  return `<div>
  <h1>myMarks</h1>
</div><div id="form" class="form">
  <h3>Add a new bookmark</h3>
  <form id="form" class="form" action="" method="" enctype="">
    <label for="bookmark-title">Title</label>
    <input
    required type="text"
      id="bookmark-title"
      class="bookmark-title"
      name="bookmark-title"
      placeholder="Awesome Bookmark Site" 
    />
    <label for="url">URL</label>
    <input
    required type="text"
      id="url"
      class="url"
      name="url"
      placeholder="www.samplesite.com" 
    />
    <label for="rating">Rating</label>
    <select
    required id="rating"
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
  <button type="text" id="cancel" class="cancel">Cancel</button>
  <input type="submit" id="create" class="create" value="Create"></input>
</div>`;
};

const generateFilterDropdown = function () {
  const bookmarks = store.bookmarks.map((element) =>
    generateNewBookmark(element)
  );
  return `<div>
  <h1>myMarks</h1>
</div><div class="top-button button">
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
${bookmarks.join("")}
</div>
<div class="bottom-button">
  <button id="clear-filter" class="clear-filter">Clear</button>
</div>`;
};

const generateFilterList = function (object) {
  console.log("filtered list function");
  debugger;
  // use filter array method to create filtered store.bookmarks based on store.filter selected value

  const filteredBookmarks = store.bookmarks.filter(
    (element) => element.rating >= store.filter
  );
  console.log(store.bookmarks);
  console.log(store.filter);
  console.log(filteredBookmarks);

  //   if (store.bookmarks.rating >= store.filter) {
  //     const bookmarks = store.bookmarks.map((element) =>
  //       generateNewBookmark(element)
  //     );
  //     console.log(bookmarks.join(""));

  //     return `<div>
  //   <h1>myMarks</h1>
  // </div><div class="top-button button">
  //   <button id="new" class="new">
  //     <i class="fas fa-plus fa-xs"></i> New
  //   </button>
  //   <button id="filter" class="filter">
  //     <i class="fas fa-filter fa-xs"></i> Filter
  //   </button>
  // </div>
  // <div id="ratings" class="ratings">
  //   <label for="ratings" class="ratings">Select Filter</label>
  //   <select name="ratings" id="ratings">
  //     <option value="All">All</option>
  //     <option value="5">5</option>
  //     <option value="4">4</option>
  //     <option value="3">3</option>
  //     <option value="2">2</option>
  //     <option value="1">1</option>
  //   </select>
  // </div>
  // <div id="bookmarks" class="bookmarks">
  // ${bookmarks.join("")}
  // </div>
  // <div class="bottom-button">
  //   <button id="clear-filter" class="clear-filter">Clear</button>
  // </div>`;
  //   }
};

// this function generates the html for a single bookmark title
const generateNewBookmark = function (object) {
  console.log("single bookmark generated function");
  return `<h3>${object.title}</h3>`;
};

// this function generates the string for all the bookmarks to be rendered
const generateBookmarksString = function (object) {
  console.log("bookmark string function");
  const bookmarks = store.bookmarks.map((element) =>
    generateNewBookmark(element)
  );
  console.log(bookmarks.join(""));
  return `<div><h1>myMarks</h1></div><div class="top-button button">
  <button id="new" class="new">
    <i class="fas fa-plus fa-xs"></i> New
  </button>
  <button id="filter" class="filter">
    <i class="fas fa-filter fa-xs"></i> Filter
  </button>
</div>
<div id="bookmarks" class="bookmarks">
${bookmarks.join("")}
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
  $("main").on("change", ".ratings", function () {
    //code that you want to excute
    console.log("user selected filter");
    store.filter = $(".ratings option:selected").val();
    console.log(`the rating is ${store.filter}`);
    // hide all bookmarks that are less than this rating / show bookmarks that are equal or greater than this rating using the store data
    //render the html
    render();
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
  $("main").on("click", ".clear-filter", function () {
    console.log("clear filter button clicked");
    // change filtering state in store to false
    store.adding = false;
    store.filtering = false;
    store.filter = 0;
    // if filtering state is false generate html without dropdown box/home state of app
    render();
  });
};

const handleExpandItemClick = function () {
  $(".bookmark").on("click", ".bookmark-title", (event) => {
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
  //the purpose of this function is to capture the values from the input form to be able to use for the factory function
  $("main").on("click", ".create", function () {
    event.preventDefault();
    console.log("create bookmark button clicked");
    event.preventDefault();
    event.preventDefault();
    console.log("form submitted");
    addNewBookmark();
    // when the user inputs information into the form, capture the info in way that can be added into the store
    // use .val to capture the input values and set to values to pass into factory function
    // call the addNewBookmark function to add bookmark and change the state of the store
    store.adding = false;
    store.filtering = false;
    render();
  });
};

// FUNCTIONS THAT CHANGE THE STATE OF THE STORE

const createBookmarkObject = function () {
  // this function will take in values from the form and create a new object that can be pushed to the store data
  console.log("create object function working");
  const rating = $(".rating").val();
  const url = $(".url").val();
  const description = $(".description").val();
  const bookmarkTitle = $(".bookmark-title").val();

  let object = {
    id: cuid(),
    title: bookmarkTitle,
    rating: rating,
    url: url,
    description: description,
    expanded: false,
    filtered: false,
  };
  console.log(object);
  return object;
};

console.log(createBookmarkObject());

const addNewBookmark = function () {
  console.log("add bookmark function invoked");
  // invoke factory function when submit is clicked, factory function returns an object to push to the store
  let newBookmark = createBookmarkObject();
  // push the new bookmark to the store using .push()
  console.log(store.bookmarks);
  store.bookmarks.push(newBookmark);
  console.log(store.bookmarks);
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
    $("section").html(html);
  }
  // if filter has been selected value would be greater than 0
  if (store.filtering === true && store.filter > 0) {
    console.log("rendering filter list function");
    let html = "";
    html = generateFilterList();
    $("section").html(html);
  }
  // if filtering state is true, generate html for dropdown and give to dom
  if (store.filtering === true && store.filter <= 0) {
    console.log("render filter function working");
    // set html to empty string
    let html = "";
    // assign html to filter dropdown template
    html = generateFilterDropdown();
    // use jquery to replace the old html with new html
    // $(".bookmarks").remove();
    // $(".bottom-button").remove();
    $("section").html(html);
  }
  // if adding state is false and filtering state is false, generate the home screen html
  if (store.adding === false && store.filtering === false) {
    console.log("render home/bookmark store function working");

    // use jquery to replace existing html with html for the home state
    let html = "";
    html = generateBookmarksString();
    $("section").html(html);
  }
};

function main() {
  handleNewButtonClick();
  handleCancelClick();
  handleCreateItemClick();
  handleFilterClick();
  handleFilterDropdown();
  handleClearFilterClick();
}

// this function is the only function that stays in the index.js file once you modularize the tile structure
$(main);
