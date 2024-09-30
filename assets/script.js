// spellcheck code
function toggleSpellcheck() {
        const link = document.getElementById('toggleLink');
        const textArea = document.getElementById('textArea');
        const isSpellcheckEnabled = textArea.getAttribute('spellcheck') === 'true';

        // Toggle spellcheck attribute
        if (isSpellcheckEnabled) {
            textArea.setAttribute('spellcheck', 'false');
        } else {
            textArea.setAttribute('spellcheck', 'true');
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

// Download button
document.getElementById('downloadBtn').addEventListener('click', function() {
        const text = document.getElementById('textArea').value;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'page.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
