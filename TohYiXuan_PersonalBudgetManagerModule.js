// Personal Budget Manager Node Module
let transactions = [
    { id: 1, type: 'income', amount: 4500, category: 'Salary', desc: 'Monthly Salary' },
    { id: 2, type: 'expense', amount: 103.99, category: 'Utility Bills', desc: 'Rent' },
    { id: 3, type: 'expense', amount: 144.40, category: 'Food', desc: 'Groceries' }
];

let idCounter = 4;

// Functions

// 1. Add Income
function addIncome(amount, description, category) {
    transactions.push({
        id: idCounter++,
        type: 'income',
        amount: amount,
        description: description,
        category: category
    });
    return "Income added successfully";
}

// 2. Add Expense
function addExpense(amount, description, category) {
    transactions.push({
        id: idCounter++,
        type: 'expense',
        amount: amount,
        description: description,
        category: category
    });
    return "Expense added successfully";
}

// 3. Get Balance
function getBalance() {
    let totalIncome = 0;
    let totalExpenses = 0;

    for (let i = 0; i < transactions.length; i++) {
        let item = transactions[i];
        if (item.type === 'income') {
            totalIncome += item.amount;
        }
        if (item.type === 'expense') {
            totalExpenses += item.amount;
        }
    }
    return totalIncome - totalExpenses;
}

// 4. Get All Income
function getAllIncome() {
    let incomeList = [];
    for (let i = 0; i < transactions.length; i++) {
        let item = transactions[i];
        if (item.type === 'income') {
            incomeList.push(item);
        }
    }
    return incomeList;
}

// 5. Filter Expenses By Category
function filterExpensesByCategory(category) {
    let result = [];
    for (let i = 0; i < transactions.length; i++) {
        let item = transactions[i];
        if (item.type === 'expense' && item.category === category) {
            result.push(item);
        }
    }
    return result;
}

// 6. Get Summary
function getSummary() {
    let totalIncome = 0;
    let totalExpense = 0;

    for (let i = 0; i < transactions.length; i++) {
        let item = transactions[i];
        if (item.type === 'income') totalIncome += item.amount;
        if (item.type === 'expense') totalExpense += item.amount;
    }

    return {
        totalIncome: totalIncome,
        totalExpenses: totalExpense,
        balance: totalIncome - totalExpense
    };
}

// Export functions
module.exports = {
    addIncome,
    addExpense,
    getBalance,
    filterExpensesByCategory,
    getAllIncome,
    getSummary,
    transactions
};
