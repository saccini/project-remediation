class MetadataModal {
    constructor() {
        this.modal = document.getElementById("metadata-modal");
        this.closeBtn = document.querySelector(".close-button");
        this.codeBlock = document.getElementById("metadata-code-block");
        this.metaImages = document.querySelectorAll(".metadata-image");

        if (this.modal) {
            this.init();
        }
    }

    init() {
        this.metaImages.forEach(img => {
            img.addEventListener("click", (event) => this.openModal(event.target));
        });

        this.closeBtn.addEventListener("click", () => this.closeModal());
        
        window.addEventListener("click", (event) => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        });
    }

    openModal(clickedImage) {
        const xmlFilePath = clickedImage.dataset.xmlSrc;
        this.codeBlock.textContent = "Fetching XML data...";
        
        // --- NEW: Calculate exact position ---
        const rect = clickedImage.getBoundingClientRect();
        
        // Calculate the 'left' position: Right edge of the image + 20px of breathing room
        const calculatedLeft = rect.right + 20;
        
        // Calculate the 'top' position: Top edge of the image + how far the user has scrolled down
        const calculatedTop = rect.top + window.scrollY;

        // Apply coordinates to the modal
        this.modal.style.left = `${calculatedLeft}px`;
        this.modal.style.top = `${calculatedTop}px`;
        
        // Show the modal
        this.modal.style.display = "block";

        // Fetch the XML file
        if (xmlFilePath) {
            fetch(xmlFilePath)
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                    return response.text();
                })
                .then(xmlText => {
                    this.codeBlock.textContent = xmlText;
                })
                .catch(error => {
                    this.codeBlock.textContent = `Error loading metadata:\n${error.message}`;
                });
        } else {
            this.codeBlock.textContent = "Error: No XML file path provided.";
        }
    }

    closeModal() {
        this.modal.style.display = "none";
        
        // Reset the position so it doesn't accidentally flash in the wrong spot next time
        this.modal.style.left = "-9999px"; 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new MetadataModal();
});