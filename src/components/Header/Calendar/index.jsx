import { useState, useEffect } from 'react';
import {
    Frame, Header, NextPrev, Body, Day, Week, CurrentDay,
    Next, Previous, DeliveryTimes, TimePicker, Time,
} from './style';
const Calendar = () => {
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_THE_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'November', 'December'];

    const today = new Date();
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDay(getStartDayOfMonth(date));
    }, [date]);

    function getStartDayOfMonth(date) {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return startDate === 0 ? 7 : startDate;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

    return (
        <>
            <Frame>
                <Header>
                    <CurrentDay>{MONTHS[month]} {year}</CurrentDay>
                    <NextPrev>
                        <Previous onClick={() => setDate(new Date(year, month - 1, day))} />
                        <Next onClick={() => setDate(new Date(year, month + 1, day))} />
                    </NextPrev>
                </Header>
                <Body>
                    {DAYS_OF_THE_WEEK.map((d) => (
                        <Week key={d}><strong>{d}</strong></Week>
                    ))}
                    {Array(days[month] + (startDay - 1))
                        .fill(null)
                        .map((_, index) => {
                            const d = index - (startDay - 2);
                            return (
                                <Day key={index}
                                    isSelected={d === day}
                                    isToday={d === today.getDate()}
                                    onClick={() => setDate(new Date(year, month, d))}>
                                    {d > 0 ? d : d + 31}
                                </Day>
                            );
                        })}
                </Body>
            </Frame>
            <DeliveryTimes>
                {Array(10).fill().map((_, index) => {
                    return (
                        <TimePicker key={index}>
                            <Time>{day} {MONTHS[month]}</Time>
                            <Time>{8 + index}:00 AM — {9 + index}:00 AM</Time>
                        </TimePicker>
                    )
                })}
            </DeliveryTimes>
        </>
    );
}
export default Calendar