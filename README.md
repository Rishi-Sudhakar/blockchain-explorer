# blockchain-explorer

This is a basic blockchain explorer made using python (SHA 256 Encyrption Algorithm), Flask along with React.

## Installation

Clone the repository to a local directory.

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install Flask.

```bash
pip install Flask
```
Use SQLAlchemy for database integration.
```bash
pip install Flask-SQLAlchemy
pip install flask_cors
```

For the Frontend ( React), Install Node.js and create a new React app.
```bash
npx create-react-app client
cd client
npm install axios
```

Navigate to the blockchain folder,Run the python script app.py
```bash
python app.py
```
<img width="682" alt="Screenshot 2024-06-06 at 4 44 22 AM" src="https://github.com/Rishi-Sudhakar/blockchain-explorer/assets/79398572/e2913f62-a5ba-4292-843e-3efb8d024485">

Use python3 instead of python if it doesn't work. I have configured the script to run in port 5001, feel free to modify it.

Now navigate to the client folder, 
```bash
npm start
```
or
```bash
npm run
```
This will start the React development server in port 3000.(In my case it was 3001, as 3000 was busy) Check the code for the server port.

<img width="682" alt="Screenshot 2024-06-06 at 4 44 31 AM" src="https://github.com/Rishi-Sudhakar/blockchain-explorer/assets/79398572/81b445aa-e875-41ea-8cbf-febc0d06c05d">


## Structure of the Project (Backend)

```
blockchain/
├── app.py
├── blockchain.py
└── db/
    ├── __init__.py
    ├── models.py
    └── database_setup.py
```

## Working of the Project

1. The Blockchain class has an __init__ method that is called when a new instance of the class is created. It initializes two instance variables: chain and current_transactions. The chain variable is an empty list that will store the blocks of the blockchain, and the current_transactions variable is also an empty list that will store the transactions that are yet to be added to a block.

2. The __init__ method also calls the new_block method with some initial values for previous_hash and proof. This creates the first block of the blockchain with a previous hash of '1' and a proof value of 100.

3. The new_block method takes in a proof and an optional previous_hash parameter. It creates a new block by constructing a dictionary with the following key-value pairs: 'index': The index of the block in the blockchain (length of the chain list + 1).

   'timestamp': The current timestamp obtained using the time() function.

   'transactions': The list of current transactions stored in the current_transactions variable.

   'proof': The proof value passed as an argument.

   'previous_hash': The previous hash value obtained by calling the hash method on the last block in the chain list.

   After creating the block, the current_transactions list is cleared, and the block is appended to the chain list. Finally, the block is returned.

4. The new_transaction method is responsible for adding a new transaction to the blockchain. It takes in three parameters: sender, recipient, and amount, representing the sender's address, recipient's address, and the amount being transferred, respectively. Inside the method, a Transaction object is created (assuming it is defined elsewhere) with the provided details and added to a database session (db.session). The current_transactions list is then updated with a dictionary representing the transaction details. Finally, the index of the last block in the chain list is returned.

5. The hash method is a static method that takes in a block as a parameter and calculates the hash value of the block. It converts the block to a JSON string, sorts the keys to ensure consistent hashing, encodes the string, and then applies the SHA256 hashing algorithm. The resulting hash value is returned as a hexadecimal string.

6.  The last_block method is a property that returns the last block in the chain list. It uses the index -1 to access the last element. The proof_of_work method takes in a last_proof parameter and performs a proof-of-work algorithm to find a new proof value. The method starts with an initial proof value of 0 and increments it until a valid proof is found. The validity of the proof is determined by the valid_proof method, which checks if the hash of the concatenated last_proof and proof values starts with four leading zeros. Once a valid proof is found, it is returned.

7. The valid_proof method is a static method that takes in last_proof and proof as parameters. It concatenates the two values, encodes the resulting string, applies the SHA256 hashing algorithm, and checks if the first four characters of the resulting hash are equal to "0000". If they are, the proof is considered valid and True is returned; otherwise, False is returned.




## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
