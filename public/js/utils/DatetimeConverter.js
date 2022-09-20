class DatetimeConverter {
    constructor(dt, timezone) {
        this.localTimeStamp = dt;
        this.localTimeZone = timezone;
    }
    toLocaleDatetime() {
        return new Date( ( this.localTimeStamp + this.localTimeZone ) * 1000 );
    }
    toLocaleDate() {
        const dateOptions = { 
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short', 
                            day: 'numeric'
                        };
        return this.toLocaleDatetime().toLocaleDateString(undefined, dateOptions);
    }
    toLocaleTime() {
        const timeOptions = {
                            timeZone: "UTC",
                            hour: '2-digit',
                            minute: '2-digit'
                        }; 
        return this.toLocaleDatetime().toLocaleTimeString(undefined, timeOptions);  
    }
};

export default DatetimeConverter;