const arr = [];


function add(item){
  return arr.push(item);
}
function remove(item){
  let index = arr.indexOf(item);
  return arr.splice(index,1);
}
function display(){
  return console.log(arr);
}

const YorN = prompt(`Do you want to edit the array? y/n?`).toLowerCase();
if(YorN === "y"){

  while(YorN === "y" || choice != "quit"){
    const choice = prompt(`Please enter what you want add, remove, display or quit?`).toLowerCase();

    if(choice === "add"){
      enteredData = prompt(`Enter what you want to add?`);
      add(enteredData);

    }else if(choice === "remove"){
      const deleteData = prompt(`Enter what you want to remove`);
      isInArray = arr.includes(deleteData);
      if(isInArray){
        remove(deleteData); 
      }else{
        console.log(`"${deleteData}" is not exist in the array.\n NOTE: Srting items are case sensitive.`);
        alert(`"${deleteData}" is not exist in the array.\n NOTE: Srting items are case sensitive.`);
      }

    }else if(choice === "display"){
      console.log(arr);
      alert(arr);

    }else if(choice === "quit"){
      console.log(`You choosed "QUIT". If you want to "RUN AGAIN", reload the page.\nThank You!`);
      alert(`You choosed "QUIT". If you want to "RUN AGAIN", reload the page.\nThank You!`);
      break;

    }else{
      alert(`Not Recognised what you want to do. Maybe you misstyped! \nClick OK to choose again.`);
    }
  }

}else if(YorN === "n"){
  console.log(`You choosed "NO". If you want to choose "YES", reload the page.\nThank You!`);
  alert(`You choosed "NO". If you want to choose "YES", reload the page.\nThank You!`);
}else{
  console.log(`You have entered "${YorN}" and it is not recognised.\nTo enter correct data reload the page`);
  alert(`You have entered "${YorN}" and it is not correct.\nReload the page and enter y/n.`);
}