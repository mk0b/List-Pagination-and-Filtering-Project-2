/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//TODO: Delete existing comments and clean up my comments.
//TODO: Go through and refactor code to make sure it is as concise as possible.
//TODO: Double check progressive enhancement. Make sure core functionality can be
//completed wihtout JavaScript turned on.
//TODO: Test on all major browsers.

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

//You need two global variables.
//Store the student list items elements in the studentlist variable.
//log out hte variable storing the list to ensure it equals the list of li items
//and not the container of the li elements. (not sure what this means)
//Create a variable to store the number of items to show on each "page" which is 10.

const studentList = document.querySelectorAll('li');
const numberItemsPage = 10;

//TODO: Remove before submitting.
console.log(studentList);

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage(list, page) {
   let startIndex = (page * numberItemsPage) - numberItemsPage;
   let endIndex = page * numberItemsPage;
   for (let i = 0; i < list.length; i++) {
      if (list[i] >= startIndex && list[i] < endIndex) {
         //display the list items.
         //grab the html needed in a const
         //overwrite the section and show only the 10 that qualify.

      }

   }
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.