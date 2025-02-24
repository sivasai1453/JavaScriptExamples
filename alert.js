let username=window.prompt("enter you name");
username= username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();
console.log(username);
