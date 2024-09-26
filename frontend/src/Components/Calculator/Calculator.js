import React, { useState, useEffect } from 'react';
import './Calculator.css';

function Calculator() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
    setTransactions(localStorageTransactions || []);
  }, []);

  const addTransaction = (e) => {
    e.preventDefault();
    if (text.trim() === '' || amount.trim() === '') {
      alert('Please add text and amount');
    } else {
      const newTransaction = {
        id: generateID(),
        text,
        amount: +amount
      };
      setTransactions([...transactions, newTransaction]);
      updateLocalStorage([...transactions, newTransaction]);
      setText('');
      setAmount('');
    }
  };


  const generateID = () => {
    return Math.floor(Math.random() * 1000000000);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
    updateLocalStorage(updatedTransactions);
  };

  const updateLocalStorage = (transactions) => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };

  const balance = transactions.reduce((acc, item) => acc + item.amount, 0).toFixed(2);
  const income = transactions.filter(item => item.amount > 0).reduce((acc, item) => acc + item.amount, 0).toFixed(2);
  const expense = (transactions.filter(item => item.amount < 0).reduce((acc, item) => acc + item.amount, 0) * -1).toFixed(2);

  return (
    <div className="calculator-container">
      <h2>Expense Tracker</h2>
      <div className="">
        <h4>Your Balance</h4>
        <h1 id="balance">${balance}</h1>
      </div>
      <div className="inc-exp-container">
        <div className="income-container">
          <h4>Income</h4>
          <p className="money money-plus">+${income}</p>
        </div>
        <div className="expense-container">
          <h4>Expense</h4>
          <p className="money money-minus">-${expense}</p>
        </div>
      </div>

      <h3>History</h3>
      <ul className="transaction-list">
        {transactions.map(transaction => (
          <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => removeTransaction(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
      <h3>Add New Transaction</h3>
      <form className="transaction-form" onSubmit={addTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text...." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default Calculator;