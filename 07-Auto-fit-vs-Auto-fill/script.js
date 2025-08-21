const li = document.querySelectorAll(".dropdown-options li");
const mainContainer = document.getElementById("main-content");

/* Card layout function */
const cardLayout = () => `
  <div class="card flex-col">
    <div class="card-icon">
      <svg class="icon">
        <use xlink:href="icons.svg#icons"></use>
      </svg>
    </div>
    <div class="card-content">
      <h2>Order completed</h2>
      <p>You're happy now? Does this impulsive action really satisfy you? Anyway, your party-size pizza combo is on its way.</p>
      <div class="card-buttons">
        <button class="btn">View status</button>
        <button class="btn">Dismiss</button>
      </div>
    </div>
  </div>
`;

/* Display cards */
const displayCards = (limit = Infinity) => {
    mainContainer.innerHTML = Array.from(li)
        .filter(e => Number.isFinite(Number(e.textContent.trim())))
        .slice(0, limit)
        .map(() => cardLayout())
        .join('');
};

/* Change grid type */
const changeGridType = gridType => {
    document.documentElement.style.setProperty("--grid-type", gridType);
};

/* Handle dropdown selection */
const updateDropdownSelectedValue = e => {
    const option = e.target.textContent.trim();
    const ul = e.target.closest("ul");
    ul.previousElementSibling.innerText = option;

    if (Number.isFinite(Number(option))) {
        displayCards(Number(option));
    } else if (option.toLowerCase() === "all") {
        displayCards();
    } else {
        changeGridType(option.toLowerCase());
    }
};

/* Event listeners */
li.forEach(item => item.addEventListener("click", updateDropdownSelectedValue));
window.addEventListener("DOMContentLoaded", () => displayCards());
