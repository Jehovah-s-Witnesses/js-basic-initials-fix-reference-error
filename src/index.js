const login = prompt('Enter login');
const password = prompt('Enter password');

if (login === 'admin' && password === 'qwerty1234') {
  alert ('Hello, admim');
} else if (login === 'guest' && password === 'guest666') {
    alert('Hello, guest');
  } else if (login !== 'admin' && login !== 'guest') {
   alert('Go away.');
  } else {
    alert('Incorrect info.');
  }




/*if (login === 'admin') {
  if (password === 'qwerty1234') {
    alert('Hello, admin');
  } else {
    alert('Incorrect info');
  }
} else if (login === 'Guest') {
  if (password === 'guest666') {
    alert('Hello, guest');
  } else {
    alert('Incorrect info');
  }
} else {
  alert('Go away');
}
  */
