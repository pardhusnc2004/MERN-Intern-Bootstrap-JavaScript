function showDate() {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    document.getElementById("date").textContent = `${date}`;
}

function showTime() {
    const currentDate = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    };
    const detailedDateTime = currentDate.toLocaleDateString(undefined, options);
    document.getElementById("time").textContent = `${detailedDateTime}`;
}