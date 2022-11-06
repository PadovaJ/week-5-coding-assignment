  //I created a class called Player and passed the parameters 'skillClass' and 'name' through the constructor
class Player {
   cosntructor(name, skillClass) {
      this.name = name;
      this.skillClass = skillClass;
   }
 }

//Then I created a class called clan and passed the parameter 'name' through the constructor and created an array callled 'warriors.'
class Clan {
   constructor (name) {
      this.name = name;
      this.warriors = [];
   }

   addWarrior(players) {
      if (players instanceof Player) {
         this.warriors.push(players)
      }else {
         throw new Error (`players is the only allowed argument: ${players}`)
      }
   }
}  

   

 

//I then created a class called 'Menu' and created an array called 'clans' for the warrior players to join, and a variable called 'selectClan'.
class Menu {
   constructor() {
      this.clans = [];
      this. selectClan = null;
   } 
//I created the method 'start' here followed by assigning the variable 'selection' to the method 'showMainMenuOptions'.
   start() {
      let selection =this. showMainMenuOptions();
 //here I used a while loop to assign the variable selection the 'not operator' against zero. In the event zero is selected it will kick the user out.
      while (selection != 0) {
 //Here a switch operator was used in creating the menu. zero was assigned to default to kick the user if zero is selected. 
         switch (selection) {
            case '1':
               this.createClan();
               break;
            case '2':
               this.viewClan();
               break;
             case '3':
              this.deleteClan();
              break ;
           case '4':
            this.displayClan();
            break;
           default:
            selection = 0;

              
         }
//The variable 'selection' closes the Menu loop here.
         selection = this.showMainMenuOptions();
      }
//This alert is placed outside the loop, and is called if zero is pressed
      alert('you are ejected')
   }
 // The showMainMenuOptions method here is the text to be displayed when the main menu is prompted
   showMainMenuOptions() {
      return prompt(`
      0) exit
      1) create new Clan
      2) view clan
      3) delete clan
      4) display all clans
    `);
   }
//The showClanMenuOptions method is used to create and delete a player from a clan
 showClanMenuOptions(clanDescription) {
 //This is what will be displayed when prompted.  
      return prompt(`
        0) back
        1) create player
        2) delete player
        ------------------------------------------------

        ${clanDescription}
      `);

   }
/* here I started writing the methods that were assigned to the menu(s). With 'displayClan' I declared a blank string called 'clanString'
I then used a for loop to iterate through the 'clans' array followed by concatinating 'clanString' with the index of the loop followed
by concatinating that with  another string and the 'clans' array using the 'new line' method*/
   displayClan() {
      let clanString = ' ';
      for (let i = 0; i < this.clans.length; i++) {
 //the 'clans' array is using the name method with the index to give us access to individual clans depending on which index is used as input        
       clanString += i + ' )  ' + this.clans[i].name + '\n';
      }
//This alert propmpts the 'clanString' variable    
      alert(clanString);
   }
// //I declared the method createClan and assigned it to a prompt called 'name' for the purpose of entering the name you wish to call the clan     
   createClan() {
      let name = prompt('Enter name of clan: ');
 //I then pushed the newly named clan to the clans array     
      this.clans.push(new Clan(name));
   }
//Here I created the method 'viewClan()'
 viewClan() {
 //I declared the variable index and assigned it to a prompt to access a chosen clan  
      let index = prompt('Enter the index of the clan you want too access: ');
 //here I used an if statement to validate the index variable and the arguments the user can input     
      if (index > -1 && index < this.clans.length) {
      this.selectClan = this.clans[index];
 /*The variable 'description' is established and assigned to the string 'Clan Name'.  'ClanName' is concatinated with  the
 'selectClan' variable, which is representing the 'clans' array, which then gives us access to the clan names. then I called for a new line.*/      
         let description ='Clan Name: ' + this.selectClan.name + '\n';
           for (let i = 0; i < this.selectClan.warriors.length; i++) {
            description += i + ' )  ' + this.selectClan.warriors[i].name + ' - '  + this.selectClan.warriors[i].skillClass + '\n';
             
         }
/*showClanMenuOptions is a secondary menu that allows you to name a warrior and define there main skills. After they have been assigned to a clan.  
and you have the option to delete a player as well*/    
         let selection = this.showClanMenuOptions(description);
         switch (selection) {
                case '1':
                  this.createPlayer()
                  break;
               case '2':
                  this.deletePlayer();
                }
      }

     
   }
 // this is the the method, 'createPlayer()',  that creates a player is assigned to the 'showClanMenuOptions()'.  
 createPlayer() { 
      let name = prompt('Enter name of the new player: ');
      let  skillClass = prompt('Enter skillclass for player: ');
      this.selectClan.warriors.push(new Player(name, skillClass));
   }
/*The method,  'deletePlayer()',  also assigned the to the 'showClanMenuOptions(), deletes a player
using index as input based on the length of the 'warriors' array.*/
deletePlayer() {
      let index = prompt('Enter the index of the player you wish to delete: ');
      if (index > -1 && index < this.selectClan.warriors.length) {
         this.selectClan.warriors.splice(index, 1);
      }
   }
//deleteClan() also uses the length of an array to use its index as input. but this uses the 'clans' array
   deleteClan() {
      let index = prompt('Enter the index for the team you wish to delete: ')
      if ( index > -1 && index < this.clans.length) {
         this.clans.splice(index, 1)
      }
   }
}
//and finally the instance to invoke the main Menu
let menu = new Menu();
menu.start();
//everything works, accept no matter what I do I cant get 'createPlayer' to print anything other then 'undefined-undefined'.