import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blockchain = () => {
    const [chain, setChain] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5001/chain')
            .then(response => setChain(response.data.chain))
            .catch(error => console.error('Error fetching the blockchain:', error));
    }, []);

    return (
        <div>
            <h1>Blockchain</h1>
            {chain.map(block => (
                <div key={block.index} className="block">
                    <h2>Block {block.index}</h2>
                    <p><strong>Timestamp:</strong> {new Date(block.timestamp * 1000).toLocaleString()}</p>
                    <p><strong>Previous Hash:</strong> {block.previous_hash}</p>
                    <p><strong>Proof:</strong> {block.proof}</p>
                    <h3>Transactions</h3>
                    {block.transactions.map((tx, idx) => (
                        <div key={idx} className="transaction">
                            <p><strong>Sender:</strong> {tx.sender}</p>
                            <p><strong>Recipient:</strong> {tx.recipient}</p>
                            <p><strong>Amount:</strong> {tx.amount}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Blockchain;
