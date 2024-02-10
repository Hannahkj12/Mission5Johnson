// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculateBtn').click(function () {
        // Get the number of hours entered by the user
        var hours = parseFloat($('#hours').val());

        // Get the hourly rate
        var hourlyRate = parseFloat($('#hourlyRate').val());

        // Calculate the total
        var total = hours * hourlyRate;

        // Set the value of the total input element
        $('#total').val(total.toFixed(2)); // Round to 2 decimal places

        // Prevent form submission
        return false;
    });
});

