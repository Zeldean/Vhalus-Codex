// Sample array representing files in the docs folder
const files = [
    { name: "Zephlore Evolutionary Ranking", path: "docs/Zephlore-Evolutionary-Ranking-System.html" },
    { name: "Enigmatic Class Corelation", path: "docs/Class-System.html" },
    // Add more files as needed
];

// Function to generate links dynamically
function generateLinks() {
    const codexLinksContainer = document.getElementById('codex-links');

    files.forEach(file => {
        const linkElement = document.createElement('a');
        linkElement.href = file.path;
        linkElement.textContent = file.name;
        codexLinksContainer.appendChild(linkElement);
    });
}

function loadContent() {
    const contentSections = document.querySelectorAll('.JS-Inject-Here');

    contentSections.forEach(section => {
        const filePath = `docs/home-content/${section.getAttribute('data-file')}.html`
        console.log(filePath)
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(section.getAttribute('data-file')).innerHTML = data;
            })
    });
    // fetch('docs/world-overview.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById('world-overview-content').innerHTML = data;
    //     })
    //     .catch(error => console.error('Error loading the content:', error));
}
   
function headingLinking() {
    // Get all sections with class "content-section"
    const sections = document.querySelectorAll('.clickable-heading');
  
    // Loop through each section
    sections.forEach((section) => {
        // Get the heading element (assuming it's the first child element)
        const headingElement = section.querySelector('h2');
  
        // Create a new anchor element
        const aElement = document.createElement('a');
  
        // Set the href attribute to the URL of the page that fully explains the topic
        // You can modify this to generate the URL dynamically based on the heading text or other factors
        aElement.href = `docs/enigmatica-manipulation${section.id}.html`;
  
        // Wrap the heading element with the anchor element
        headingElement.parentNode.replaceChild(aElement, headingElement);
        aElement.appendChild(headingElement);
  
        // Add a CSS class to style the button
        aElement.classList.add('button-link');
    });
}

// Main
document.addEventListener('DOMContentLoaded', () => {
    // Call the function to generate links
    // generateLinks();

    loadContent();
    // headingLinking();
})

