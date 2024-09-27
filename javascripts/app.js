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

// Call the function to generate links
generateLinks();
