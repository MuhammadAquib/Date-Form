function X(){
    const firstDate = document.getElementById('firstDate').value;
    const secondDate = document.getElementById('secondDate').value;

    const startTimestamp = new Date(firstDate).gettime();
    const endtTimestamp = new Date(secondDate).gettime();

    const difference = endTimetamp - startTimestamp;

    const differenceInDays = Math.round(difference / (1000 * 60 * 60 * 24));

    const dayCountElement = document.getElementById('dayCount');
    dayCountElement.innerHTML = 'The difference between the dates is ${differenceInDays} days.';

}