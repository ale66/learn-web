/*
Learn-Web-->Learn-JS
Execute this step-by-step in Pythontutor:

https://pythontutor.com/render.html#code=%0A/*%20Convert%20Italian%20exam%20marks%20into%20percentages%20*/%0Afunction%20pc2marks%28marks%29%20%7B%0A%0A%20%20%20%20let%20converted%20%3D%20%28marks%20 /% 20100%29%20 *% 2030%0A%20%20%0A%20%20%20%20//%20Math.round%28%29%20is%20a%20'foreign'%20function%20that%20rounds%20up%2050.65%20--%3E%2051%20etc.%0A%20%20%20%20let%20pc%20%3D%20Math.round%28converted%29%3B%0A%20%20%0A%20%20%20%20return%20pc%3B%0A%20%20%7D%20%0A%20%20%0A/*%20THE%20PART%20BELOW%20IS%20FOR%20STUDYING%20THE%20FUNCTION%20%0A%20%20ON%20PYTHONTUTOR.COM%0A*/%0A%20%20%0A//%20type%20this%20by%20yourself%0Alet%20my_uk_exam_marks%20%3D%20%5B90,%2068,%2075,%2082,%20100%5D%0A%20%20%0A%20%20%0A/*%20convert%20and%20show%20on%20the%20page%20the%20UK%20version%20of%20the%20marks%20*/%0Afor%20%28const%20m%20of%20my_uk_exam_marks%29%7B%0A%20%20%20%20let%20it_marks%20%3D%20pc2marks%28m%29%3B%0A%20%20%20%20console.log%28it_marks%29%0A%20%20%7D&cumulative=false&curInstr=17&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
*/





/* Convert Italian exam marks into percentages */
function pc2marks(marks) {

    let converted = (marks / 100) * 30
  
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