export default function initCount() {
    document.addEventListener('DOMContentLoaded', () => {
        const currentDate = new Date();
        const datingAnniversary = new Date('March 12 2024');

        const yearsHTML = document.getElementById('years');
        const monthsHTML = document.getElementById('months');
        const daysHTML = document.getElementById('days');

        let years = currentDate.getFullYear() - datingAnniversary.getFullYear();
        let months = currentDate.getMonth() - datingAnniversary.getMonth();
        let days = currentDate.getDate() - datingAnniversary.getDate();

        if (days < 0) {
            months--;
            const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
            days += lastDayOfMonth;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        yearsHTML.innerText = years;
        monthsHTML.innerText = months;
        daysHTML.innerText = days;

        const selectedNumber = document.querySelectorAll("[data-number]");

        selectedNumber.forEach((numbers) => {
            const total = +numbers.innerHTML;
            let start = 0;
            const timer = setInterval(() => {
                start++;
                numbers.innerHTML = start;
                if (start >= total) {
                    clearInterval(timer);
                }
            }, 80);
        });
    });

}
setInterval(initCount, 1000);
