document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    
    if (textInput.trim() === '') {
        alert('Please enter some text.');
        return;
    }
    
    // Simulate spelling correction
    const correctedText = textInput.replace(/wrong/g, 'correct'); // Dummy correction logic
    document.getElementById('result').innerText = correctedText;
});

document.getElementById('download-doc').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const blob = new Blob([textInput], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.doc';
    a.click();
    URL.revokeObjectURL(url);
});

document.getElementById('download-pdf').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const pdf = new jsPDF();
    pdf.text(textInput, 10, 10);
    pdf.save('document.pdf');
});
