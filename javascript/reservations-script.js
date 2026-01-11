$(document).ready(function() {
    // Toggle between Dine-In and Event forms
    //.click event handlers
    $('#dineInBtn').click(function() {
        $('#dineInForm').show();
        $('#eventForm').hide();
    });

    $('#eventBtn').click(function() {
        $('#eventForm').show();
        $('#dineInForm').hide();
    });

    // AM PM toggle for dine in
    let isDineInAM = true;
    //toggles between true and false
    $('#ampmToggle').click(function() {
        isDineInAM = !isDineInAM;
        //updates the display element
        $(this).text(isDineInAM ? 'AM' : 'PM');
    });

    // AM PM toggle for special event
    let isEventAM = true;
    $('#eventAmPmToggle').click(function() {
        isEventAM = !isEventAM;
        $(this).text(isEventAM ? 'AM' : 'PM');
    });

    // validation and submission handling for dine-In 
    $('#dineInForm form').submit(function(event) {
        event.preventDefault(); // prevent submission before validation
        //calls function below
        if (validateDineInForm()) {
            alert('Registration successful!');
        }
    });

    // validation and submission handling for special event
    $('#eventForm form').submit(function(event) {
        event.preventDefault(); // Prevent submission before validation
        //calls function below
        if (validateEventForm()) {
            alert('Registration successful!');
        }
    });
});

// Dine-In form validation
function validateDineInForm() {
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const phone = $('#phone').val().trim();
    const guests = $('#guests').val();
    const date = $('#date').val();
    const time = $('#time').val();

    let valid = true;

    if (name === '') {
        alert('Please enter your name');
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        valid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        valid = false;
    }

    if (date === '') {
        alert('Please select a reservation date');
        valid = false;
    }

    if (time === '') {
        alert('Please select a reservation time');
        valid = false;
    }

    if (guests < 1) {
        alert('Please enter a valid number of guests (at least 1)');
        valid = false;
    }

    return valid;
}

// Special Event form validation
function validateEventForm() {
    const eventName = $('#eventName').val().trim();
    const organizer = $('#organizer').val().trim();
    const emailEvent = $('#emailEvent').val().trim();
    const phoneEvent = $('#phoneEvent').val().trim();
    const guestsEvent = $('#guestsEvent').val();
    const eventDate = $('#eventDate').val();
    const eventTime = $('#eventTime').val();

    let valid = true;

    if (eventName === '') {
        alert('Please enter the event name');
        valid = false;
    }

    if (organizer === '') {
        alert('Please enter organizer name');
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailEvent)) {
        alert('Please enter a valid email address');
        valid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneEvent)) {
        alert('Please enter a valid 10-digit phone number');
        valid = false;
    }

    if (eventDate === '') {
        alert('Please select an event date');
        valid = false;
    }

    if (eventTime === '') {
        alert('Please select an event time');
        valid = false;
    }

    if (guestsEvent < 1) {
        alert('Please enter a valid number of guests (at least 1)');
        valid = false;
    }

    return valid;
}
