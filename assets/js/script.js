//1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие
let isAdult = function(howYearsOld) {
  if(typeof (isAdult) !== "number") {
    return "Неверное значение";
  }
  else if(howYearsOld >= 18) {
    return "Вы совершеннолетние!";
  }
  else {
    return "Вы несовершеннолетние!";
  }
}
 
isAdult(15);

//2.Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым
function checkMultiplicity (num1, num2){
  if(num1 % num2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

checkMultiplicity(25, 5);

//3. Проверка возможности треугольника.
function checkSideTriiangle (A, B, C){
  if(A + B > C || A + C > B || B + C > A){
    return true;
  }
  else{
    return false;
  }
}

checkSideTriiangle (10, 15, 30);

//4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника
//ромб
function rhombusArea (d1, d2) {
  return 0.5 * d1 * d2;
}
rhombusArea(15, 20);


//цилиндр
function cylinderArea (R, h) {
  return 2 * Math.PI * R * h + 2 * Math.PI * R**2 ;
}
cylinderArea(10, 5);


//треугольник
function triiangleArea (a, h) {
  return 0.5 * a * h;
}
triiangleArea(5, 15);


//прямоугольник
function rectangleArea (a, b) {
  return a * b;
}
rectangleArea(5, 15);
