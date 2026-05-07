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
        // 1. Open modal when clicking an image
        this.metaImages.forEach(img => {
            img.addEventListener("click", (event) => {
                // This stops the click from "bubbling up" to the window immediately
                event.stopPropagation(); 
                this.openModal(event.target);
            });
        });

        // 2. Close modal when clicking the neon green X
        this.closeBtn.addEventListener("click", () => this.closeModal());
        
        // 3. NEW: Close modal when clicking ANYWHERE else on the screen
        window.addEventListener("click", (event) => {
            // Check if the modal is currently open AND the user clicked outside of it
            if (this.modal.style.display === "block" && !this.modal.contains(event.target)) {
                this.closeModal();
            }
        });
    }

    openModal(clickedImage) {
        const xmlFilePath = clickedImage.dataset.xmlSrc;
        this.codeBlock.textContent = "Fetching XML data...";
        
        // 1. Temporarily show the modal way off-screen so the browser 
        // can calculate its actual width (which is around 600px)
        this.modal.style.left = "-9999px";
        this.modal.style.display = "block";
        
        // 2. Get the dimensions of the clicked image and the modal
        const rect = clickedImage.getBoundingClientRect();
        const modalWidth = this.modal.offsetWidth; 
        
        // 3. Default position: Right side of the image
        let calculatedLeft = rect.right + 20;
        
        // 4. THE FIX: Check if popping to the right pushes it off the screen
        // window.innerWidth is the total width of the user's browser window
        if (calculatedLeft + modalWidth > window.innerWidth) {
            
            // It bleeds off the right! Calculate position for the LEFT side instead
            calculatedLeft = rect.left - modalWidth - 20;
        }
        
        // 5. Mobile Failsafe: What if the screen is so small it bleeds off the left too?
        if (calculatedLeft < 10) {
            calculatedLeft = 10; // Pin it 10px from the left edge of the screen
        }

        // Calculate the top position (same as before)
        const calculatedTop = rect.top + window.scrollY;

        // Apply the final, safe coordinates
        this.modal.style.left = `${calculatedLeft}px`;
        this.modal.style.top = `${calculatedTop}px`;

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
        this.modal.style.left = "-9999px"; 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new MetadataModal();
});