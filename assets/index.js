// spellcheck code
function toggleSpellcheck() {
        const link = document.getElementById('toggleLink');
        const textArea = document.getElementById('textArea');
        const isSpellcheckEnabled = textArea.getAttribute('spellcheck') === 'true';

        // Toggle spellcheck attribute
        if (isSpellcheckEnabled) {
            textArea.setAttribute('spellcheck', 'false');
            link.textContent = 'Enable Spellcheck';
        } else {
            textArea.setAttribute('spellcheck', 'true');
            link.textContent = 'Disable Spellcheck';
        }

        // Toggle link styling
        link.classList.toggle('active', isSpellcheckEnabled);
    }
// word count code
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
