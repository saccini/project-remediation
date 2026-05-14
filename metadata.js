class MetadataModal {
    constructor() {
        this.modal = document.getElementById("metadata-modal");
        this.closeBtn = document.querySelector(".close-button");
        this.codeBlock = document.getElementById("metadata-code-block");
        this.metaImages = document.querySelectorAll(".metadata-image");

        if (this.modal && this.codeBlock) {
            this.init();
        }
    }

    init() {
        this.metaImages.forEach(img => {
            img.addEventListener("click", (event) => {
                event.stopPropagation(); 
                this.openModal(event.target);
            });
        });

        this.closeBtn.addEventListener("click", () => this.closeModal());
        
        window.addEventListener("click", (event) => {
            if (this.modal.style.display === "block" && !this.modal.contains(event.target)) {
                this.closeModal();
            }
        });
    }

    openModal(clickedImage) {
        const xmlFilePath = clickedImage.dataset.xmlSrc;
        
        this.codeBlock.innerHTML = '<div class="xml-loading">Fetching XML data...</div>';
        
        this.modal.style.left = "-9999px";
        this.modal.style.display = "block";
        
        const rect = clickedImage.getBoundingClientRect();
        const modalWidth = this.modal.offsetWidth; 
        
        let calculatedLeft = rect.right + 20;
        
        if (calculatedLeft + modalWidth > window.innerWidth) {
            calculatedLeft = rect.left - modalWidth - 20;
        }
        
        if (calculatedLeft < 10) calculatedLeft = 10; 

        const calculatedTop = rect.top + window.scrollY;

        this.modal.style.left = `${calculatedLeft}px`;
        this.modal.style.top = `${calculatedTop}px`;

        if (xmlFilePath) {
            fetch(xmlFilePath)
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                    return response.text();
                })
                .then(xmlText => {
                    this.codeBlock.innerHTML = this.syntaxHighlight(this.escapeHTML(xmlText));
                })
                .catch(error => {
                    this.codeBlock.innerHTML = `<div class="xml-error">Error loading metadata:<br>${error.message}</div>`;
                });
        } else {
            this.codeBlock.innerHTML = '<div class="xml-error">Error: No XML file path provided.</div>';
        }
    }

    closeModal() {
        this.modal.style.display = "none";
        this.modal.style.left = "-9999px"; 
    }

    escapeHTML(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    syntaxHighlight(str) {
        return str
            .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="xc">$1</span>')
            .replace(/(&lt;\/?[\w:]+)([\s\S]*?)(\/?&gt;)/g, function(m, open, attrs, close) {
                const highlightedAttrs = attrs.replace(/([\w:]+)(=)(&quot;[^&]*&quot;)/g,
                    '<span class="xa">$1</span>$2<span class="xv">$3</span>');
                return '<span class="xt">' + open + '</span>' + highlightedAttrs + '<span class="xt">' + close + '</span>';
            });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new MetadataModal();
});

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('compare-slider');
    const overlay = document.getElementById('compare-overlay');
    const line = document.getElementById('compare-line');

    if (slider && overlay && line) {
        slider.addEventListener('input', (e) => {
            const sliderValue = e.target.value;
            overlay.style.clipPath = `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`;
            line.style.left = `${sliderValue}%`;
        });
    }
});