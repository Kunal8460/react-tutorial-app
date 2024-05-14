import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <h3>{props.title}</h3>
      <div className="expense-item_description">
        <div>
          <div>{props.date}</div>
        </div>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
