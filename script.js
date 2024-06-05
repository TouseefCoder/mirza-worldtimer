let selectedTimeZone = 'Asia/Karachi';

        function updateTime() {
            const date = moment().tz(selectedTimeZone);
            const formattedDate = date.format('h:mm:ss a, dddd, MMMM Do YYYY');
            document.getElementById('time').innerText = formattedDate;
        }

        setInterval(updateTime, 1000);

        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function() {
                selectedTimeZone = this.getAttribute('data-timezone');
                document.getElementById('learnMoreButton').innerText = this.getAttribute('data-country');
                updateTime();
            });
        });

        updateTime();