const presidents = [
    { name: "George Washington", termLength: 8 },
    { name: "Thomas Jefferson", termLength: 8 },
    { name: "Abraham Lincoln", termLength: 4 },
    { name: "Franklin D. Roosevelt", termLength: 12 },
    { name: "John F. Kennedy", termLength: 3 },
    { name: "Ronald Reagan", termLength: 8 },
    { name: "Barack Obama", termLength: 8 },
    { name: "Donald Trump", termLength: 4 },
    { name: "Joe Biden", termLength: 2 } // Update this to reflect current term
];

// Populate the President list
const presidentContainer = document.getElementById('president-container');
presidents.forEach(president => {
    const presidentDiv = document.createElement('div');
    presidentDiv.className = 'president';
    presidentDiv.textContent = `${president.name} - Term Length: ${president.termLength} years`;
    presidentContainer.appendChild(presidentDiv);
});

// Generate the term bar
const termBarContainer = document.getElementById('term-bar-container');
presidents.forEach(president => {
    const termBar = document.createElement('div');
    termBar.className = 'term-bar';
    termBar.style.flex = president.termLength; // This will allow the bar to be sized according to term length
    termBar.style.backgroundColor = getColorByTermLength(president.termLength);
    termBarContainer.appendChild(termBar);
});

// Function to get color based on term length
function getColorByTermLength(termLength) {
    if (termLength > 8) return 'green';
    if (termLength === 8) return 'blue';
    if (termLength === 4) return 'orange';
    if (termLength < 4) return 'red';
    return 'gray';
}
