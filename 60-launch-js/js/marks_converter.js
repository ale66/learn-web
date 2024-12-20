/* The 'change title' exercise here */

let big_title = document.getElementById("demo").textContent;

// remove when finished
alert(big_title);
// alternatively
console.log(big_title);

// now put that content to the new title
document.title = big_title;


/* Convert Italian exam marks into percentages */
function pc2marks(marks) {

    let converted = (marks / 30) * 100
  
    // Math.round() is a 'foreign' function that rounds up 50.65 --> 51 etc.
    let pc = Math.round(converted);
  
    return pc;
  } 
  
/* THE PART BELOW IS FOR STUDYING THE FUNCTION 
  ON PYTHONTUTOR.COM
*/
  
// type this by yourself
// let my_uk_exam_marks = [90, 68, 75, 82, 100]
  
  
/* convert and show on the page the UK version of the marks */
/*
for (const m of my_uk_exam_marks){
    let it_marks = pc2marks(m);
    console.log(it_marks)
  }
*/


var it_marks = document.getElementById("pull_down_marks").value;

conv = pc2marks(it_marks);

document.getElementById("output_area").innerHTML = conv; 
