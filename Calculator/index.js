let input = document.querySelector("#input-text");


const number = document.querySelectorAll(".numbers")

number.forEach( (el)=> {
  el.addEventListener("click", function (e) {
    if (input.value === "NaN") {
      input.value = "";
    }
    if (input.value === "0") {
      input.value = "";
    }
    input.value += e.target.innerHTML.trim();
  });
});


const calculate = document.querySelectorAll(".operators");

calculate.forEach((el)=>{

    el.addEventListener("click" , function(e){
        console.log( e.target.innerHTML)
        if (e.target.innerHTML === "=") {
            input.value = eval(input.value);
        } 
        else if (e.target.innerHTML === "Clear") {
            input.value = 0;
        } 
        else 
        {
            input.value += e.target.innerHTML;
        }
    })
})