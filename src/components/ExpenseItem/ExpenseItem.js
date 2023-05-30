import React from 'react';
import ExpenseDate from'../ReusableComponent/Date/Date'
import './ExpenseItem.css';


const ExpenseItem =(props) =>{
  // const [title, setTitle] = useState(props.title);

  // const clickHandler =() =>{
  //   setTitle('Updated!');
  //   console.log(title)
  // }
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </div>
  );
}

export default ExpenseItem;