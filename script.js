document.getElementById('calculateButton').addEventListener('click', calculate);

function calculate() {
    // Get the values from input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);
    const num6 = parseFloat(document.getElementById('num6').value);

    // Perform calculations
    const subtractionResult = num1 - num2 - num3;
    const quotientResult = (num4 / num5) / num6;

    // Display results using SweetAlert
    Swal.fire({
        title: 'Results',
        html: `<p>Subtraction Result: ${subtractionResult}</p><p>Quotient Result: ${quotientResult}</p>`,
        icon: 'success'
    });
}
