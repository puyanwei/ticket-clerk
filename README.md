# Movie Clerk

This is a kata from https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

### Examples

```
tickets([25, 25, 50]) // => YES
tickets([25, 100])
        // => NO. Vasya will not have enough money to give change to 100 dollars
```

### Conclusion

On having a pairing session and trying this out in Ruby first, it seems to me that it is indeed easier, and more readable than Javascript.

I had a lot of issues with trying to get my forEach loop to work, and it loses its scope inside it and is unable to refer to the this keyword. This meant that you had to attach the this keyword using the bind method or use an arrow function which stops the scope problem from happening.

However, once this was done I soon realised that you cannot break out of Javascript forEach loops, meaning that when one transaction returns false because there is no change, it keeps on going.

Javascript also can be quite confusing in remembering to have to explicitly keep returning outcomes of the functions. This is especially important when using controller functions that call other functions.

Note that the Kata tests don't use constructor functions, so till would be a global variable hash. It should also be noted that the Codewar "best solutions" typically are biased towards the shortest lines of code rather then readability and clarity.
