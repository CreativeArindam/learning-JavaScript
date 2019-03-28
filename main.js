/*It is just for a learning purpose. In this project user can edit an array. He/She can add, remove and display the array items by entering "add", "remove" and "display" respectively. There are many other functionalities like quit. I have tried to solve the problem of entering UpperCase or LowerCase values. User can access the same functions when he/she enters the values in different cases. "Remove","remove" and "rEmoVe" have the same function. I have also tried to solve the problems when a user enters a "unknown" value. I have given the necessary instructions to fix the problem when he/she enters a "unknown" value.*/ 


//Declaring an empty Array..
const arr = [];


//Declaring functions..

//Function to add eliments to the Array..
function add(){
  enteredData = prompt(`Enter what you want to add?`);
  return arr.push(enteredData); //The entered data will push into the Array..
}

//Function to remove an eliment to the Array..
function remove(){
  const deleteData = prompt(`Enter what you want to remove`);
  let index = arr.indexOf(deleteData); //Finding the position of the eliment which we want to remove..
  const isInArray = arr.includes(deleteData); //Finding if the eliment is present in the Array..
    if(isInArray){ 
      arr.splice(index,1); //Removing the eliment if it is found..
    }else{
      console.log(`"${deleteData}" is not exist in the array.\n NOTE: Srting items are case sensitive.`);
      alert(`"${deleteData}" is not exist in the array.\n NOTE: Srting items are case sensitive.`);
    }
}

//Function to display the items..
function display(){
  if(arr.length < 1 || arr == undefined){
    console.log(`Array is empty.\nPlease add some data.`);
    alert(`Array is empty.\nPlease add some data.`); //Alert if no data is assigned yet in the Array..
  }else{
    console.log(`Array item(s) are: [ ${arr} ]`);
    alert(`Array item(s) are: [ ${arr} ]`); //Showing the elimentss if any found..
  }
}

//Function to quit, if the user doesn't want to add, remove and display any eliment..
function quit(){
  console.log(`You choosed "QUIT". If you want to "RUN AGAIN", reload the page.\nThank You!`);
  alert(`You choosed "QUIT". If you want to "RUN AGAIN", reload the page.\nThank You!`);
}

//Getting informations if user wants to edit the Array Yes or No..
const YorN = prompt(`Do you want to edit the array? y/n?`).toLowerCase(); 
if(YorN === "y"){

  while(true){  //If the user want to make any change in the array, giving all the functions to do so.. 
    const choice = prompt(`Please enter what you want add, remove, display or quit?`).toLowerCase();

    if(choice === "add"){
      add(); //Adding an eliment, using add() function which is declared before..

    }else if(choice === "remove"){
      remove(); //Removing an eliment, using remove() function which is declared before..

    }else if(choice === "display"){
      display(); //Displaying the array, using display() function which is declared before..
    
    }else if(choice === "quit"){
      quit(); //Quitting to edit, using quit() function which is declared before..
      break; //If user wants to quit, no option of editing will come again..

    }else{
      alert(`Not Recognised what you want to do. Maybe you mistyped! \nClick OK to choose again.`);
      //If the user type other than the function add,remove,display or quit..
    }
  }

}else if(YorN === "n"){ //If the user doesn't want to make any change in the Array in begining..
  console.log(`You choosed "NO". If you want to choose "YES", reload the page.\nThank You!`);
  alert(`You choosed "NO". If you want to choose "YES", reload the page.\nThank You!`);

}else{ //If the user mistakenly enters other than YES or NO in the begining to edit the Array.. 
  console.log(`You have entered "${YorN}" and it is not recognised.\nTo enter correct data reload the page`);
  alert(`You have entered "${YorN}" and it is not correct.\nReload the page and enter y/n.`);
}