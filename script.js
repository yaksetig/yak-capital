// Modal functionality
const modal = document.getElementById('deckModal');
const btn = document.getElementById('submitDeckBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// File input label update
document.getElementById('deckFile').addEventListener('change', function(e) {
    const label = document.querySelector('.file-input-label');
    if (e.target.files.length > 0) {
        label.textContent = `📎 ${e.target.files[0].name}`;
        label.style.color = '#764ba2';
        label.style.borderColor = '#764ba2';
    }
});

// Form submission
document.getElementById('deckForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Submitting...';
    button.style.background = '#28a745';
    
    // Simulate form submission
    setTimeout(() => {
        button.textContent = 'Deck Submitted!';
        setTimeout(() => {
            modal.style.display = 'none';
            button.textContent = originalText;
            button.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
            this.reset();
            document.querySelector('.file-input-label').textContent = '📎 Click to upload your pitch deck (PDF or PowerPoint)';
            document.querySelector('.file-input-label').style.color = '';
            document.querySelector('.file-input-label').style.borderColor = '#e9ecef';
        }, 2000);
    }, 1500);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
