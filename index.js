const spellcheckToggle = document.getElementById('spellcheckToggle');
        const textArea = document.getElementById('textArea');

        // Set initial spellcheck state
        textArea.spellcheck = spellcheckToggle.checked;

        // Add event listener to toggle spellcheck
        spellcheckToggle.addEventListener('change', () => {
            textArea.spellcheck = spellcheckToggle.checked;
        });
      
      const textarea = document.getElementById('textArea');
        const wordCountElement = document.getElementById('wordCount');

        function updateWordCount() {
            const text = textarea.value.trim();
            const words = text.split(/\s+/).filter(Boolean); // Split by whitespace and filter out empty strings
            wordCountElement.textContent = words.length;
        }

        textarea.addEventListener('input', updateWordCount);
        // Initialize word count on page load
        updateWordCount();
