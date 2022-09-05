const sides = document.querySelectorAll('.side-input');
const areaBtn = document.querySelector('#area-btn');
const outputEl = document.querySelector('#output');

function calculateProductOfSides(a , b){
    const productOfSides = (a*b)/2 ;
return productOfSides;
}

function calculateArea() {
   const productOfSides = calculateProductOfSides(Number(sides[0].value), Number(sides[1].value));
   const areaOfTriangle = productOfSides;
   outputEl.innerText = "The area of the triangles is: " + areaOfTriangle;

}

areaBtn.addEventListener("click", calculateArea)