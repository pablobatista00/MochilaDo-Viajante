let FizzBuzz = (x1,x2) => 
{

  for (let i = 1; i <= 100; i++)
  {
      if ((i % x1 == 0) && (i % x2 == 0)) 
      {
          console.log ('FizzBuzz');
      }
      else if (i % x1 == 0) 
      {
          console.log('Fizz');
      }
      else if (i % x2 == 0) 
      {
          console.log('Buzz');
      }
      else
      {
          console.log(i);
      }
  }
}
FizzBuzz (4,7);