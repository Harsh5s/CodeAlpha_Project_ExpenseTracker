document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');
  
    expenseForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('expenseName').value;
      const amount = parseFloat(document.getElementById('expenseAmount').value);
      if (name && amount) {
        addExpense(name, amount);
        expenseForm.reset();
      } else {
        alert('Please enter both expense name and amount.');
      }
    });
  
    function addExpense(name, amount) {
      const li = document.createElement('li');
      li.innerHTML = `
        ${name}: $${amount.toFixed(2)}
        <button class="delete">Delete</button>
        <button class="edit">Edit</button>
      `;
      expenseList.appendChild(li);
  
      li.querySelector('.delete').addEventListener('click', function() {
        expenseList.removeChild(li);
      });
  
      li.querySelector('.edit').addEventListener('click', function() {
        const newName = prompt('Enter new expense name:', name);
        const newAmount = parseFloat(prompt('Enter new expense amount:', amount));
        if (newName && !isNaN(newAmount)) {
          li.innerHTML = `
            ${newName}: $${newAmount.toFixed(2)}
            <button class="delete">Delete</button>
            <button class="edit">Edit</button>
          `;
          li.querySelector('.delete').addEventListener('click', function() {
            expenseList.removeChild(li);
          });
          li.querySelector('.edit').addEventListener('click', function() {
            editExpense(newName, newAmount);
          });
        } else {
          alert('Invalid input. Please try again.');
        }
      });
    }
  });