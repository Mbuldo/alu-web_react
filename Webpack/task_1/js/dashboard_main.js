import $ from 'jquery';
import _ from 'lodash';

let count = 0;

// Function to update the counter
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Add elements to the page when DOM is ready
$(document).ready(function() {
  // Add paragraph elements and button in order
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="start-button">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
  
  // Bind debounced click event to the button
  $('#start-button').on('click', _.debounce(updateCounter, 500));
});
