document.getElementById('first-class-increase').addEventListener('click', function () {
    handleTicketChange('first-class', true);
})

document.getElementById('first-class-decrease').addEventListener('click', function () {
    handleTicketChange('first-class', false);
})

document.getElementById('economy-increase').addEventListener('click', function () {
    handleTicketChange('economy', true);
})

document.getElementById('economy-decrease').addEventListener('click', function () {
    handleTicketChange('economy', false);
})

document.getElementById('book-now').addEventListener('click', function () {
    document.getElementById('confirmation').style.display = 'flex';
})

document.getElementById('cross-sign').addEventListener('click', function () {
    document.getElementById('confirmation').style.display = 'none';

    // FORM VALUES
    document.getElementById('first-class-count').value = 0;
    document.getElementById('economy-count').value = 0;
    document.getElementById('subtotal-amount').innerText = '$' + 0;
    document.getElementById('vat-amount').innerText = '$' + 0;
    document.getElementById('total-amount').innerText = '$' + 0;

    // CONFIRMATION VALUES
    document.getElementById('first-class-ticket').innerText = 0;
    document.getElementById('economy-ticket').innerText = 0;
    document.getElementById('total-bill').innerText = '$' + 0;

})

// FUNCTION START
function handleTicketChange(ticket, isIncreasing) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncreasing == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncreasing == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    calculateTotal();
}

// CALCULATION OF TICKET PRICE
function calculateTotal() {
    const firstClassCount = getInputValue('first-class');
    const economyCount = getInputValue('economy');

    // CONFIRMATION TICKET
    document.getElementById('first-class-ticket').innerText = firstClassCount;
    document.getElementById('economy-ticket').innerText = economyCount;

    // CALCULATION OF SUBTOTAL
    const subTotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal-amount').innerText = '$' + subTotal;

    // CALCULATION OF VAT
    const vat = Math.round(subTotal * .1);
    document.getElementById('vat-amount').innerText = '$' + vat;

    // CALCULATION OF Total
    const Total = subTotal + vat;
    document.getElementById('total-amount').innerText = '$' + Total;

    // SEND ALL AMOUNT FOR CONFIRMATION
    document.getElementById('total-bill').innerText = '$' + Total;
}

// CALCULATION OF TICKET AMOUNT
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}