# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Provide the references that you have used to support your assignment. 

Link to the Web Application:
https://lunchmoney.app/

## Overview
This is a simple Personal Budget Manager Node module to help users track their income and expenses.
This Node module consists of 5 functions.

## Function 1: addIncome(amount, description)
This function adds an Income.

There are 2 things that you need to fill in: 
1. amount - how much money you have earned
2. description - where the income is from (E.g addIncome(5000, 'Salary'))

## Function 2: addExpense(amount, description, category)
This function adds an expense.

There are 3 things that you need to fill in:
1. amount - how much money you have spent
2. description - what you have spent the money on
3. category - type of expense like Food, Transport (E.g addExpense(10, 'Dinner', 'Food'))

## Function 3: getBalance()
This function calculates your currrent balance.
It takes all of your income to subtract all of your expenses, and returns the remaining amount of money left.
No input is needed.

## Function 4: filterExpensesByCategory(category)
This function only shows you expenses from the category you have selected, like Food or Transport.
You just need to enter the category you want to see.

## Function 5: getSummary()
This function gives you a full report consisting of: total income, total expenses and final balance.
No input is needed. The function will return all 3 values.
