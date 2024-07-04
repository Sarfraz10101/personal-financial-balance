import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Balance from './Balance';
import TransactionList from './Transactionlist';
import AddTransaction from './Addtransaction';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => (acc += transaction.amount), 0).toFixed(2);
  };

  return (
    <div className="container">
      <Header />
      <Balance balance={calculateBalance()} />
      <TransactionList transactions={transactions} />
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;
