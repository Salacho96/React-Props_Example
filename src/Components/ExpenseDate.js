import './ExpenseDate.css';

function ExpenseDate(props){
    const month = props.fecha.toLocaleString('en-US',{month: "long"});
    const day = props.fecha.toLocaleString('en-US',{day: "2-digit"});
    const year = props.fecha.getFullYear();
    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-year">{year}</div>
            <div className="expense-day">{day}</div>
        </div>
    )
}

export default ExpenseDate;