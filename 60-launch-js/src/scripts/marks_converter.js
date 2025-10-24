/* Convert Italian exam marks into percentages */
function pc2marks(marks) {

    let converted = (marks / 30) * 100
  
    // Math.round() is a 'foreign' function that rounds up 50.65 --> 51 etc.
    let pc = Math.round(converted);
  
    return pc;
} 


function react() {

    var it_marks = document.getElementById("marksSelector").value;

    conv = pc2marks(it_marks);
    
    console.log(conv)

    // notice that '+' here means concatenation
    document.getElementById("output_area").innerHTML = "This is your equiv.UK marks: " + conv;  
    
    if (conv == 100) {

        console.log('We have a winner!')

        alert('Congratulations!');

        // this only works if at execution time 'body' is completed
        // try giving it ex post from the console
        document.body.style.background = 'red';
    } else {
        console.log('go back to default page')
        // the new value is below 30: go back to (or remain in) a normal background
        document.body.style.background = 'white';
    }
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

