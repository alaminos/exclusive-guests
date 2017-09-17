
This program takes a name from the user and greets them only if the provided name is Lola or Paco. Otherwise it displays a different message.

This program basically revolves around the welcomeMessage() function which takes a string variable (the name that the user enters) and returns one message or another depending on whether the name entered is a valid one or not.

I tried this line,
```javascript
if (name === Lola || Paco) 
```
didn't work. Apart from that, having the function work in the console was fast.

Later I got stuck because the onclick attribute on the button element wasn't calling the function. Calling the function manually on the console was working, clicking the "enter" button wasn't. Not sure how I solved it.

But then I made the onclick attribute call a function from the handlers object.

Now the handlers.enterName() function wasn't working. This was before having a view object so the function final line was "return myobject.welcomeMessage()". Running the debugger I saw that it was working properly until certain point, I didn't understand what was happening after that. I figured out at some point that it was returning the result away somewhere (maybe?), but not in the console. So I changed the last line to a console.log instead of a return, this worked! The message was now being printed on the console.

Well typing the function in the console was working but clicking the enter button (which has an onclick attribute pointing to that function) wasn't doing nothing more than deleting the content entered in the input field. I learned however that it was actually working and the message was being printed on the div and then automatically disappearing. This was solved by removing the form element, obviously keeping its children: button, label and input.

Then I did the CSS part. I had to check my previous works to remind myself how to do stuff in CSS, from centering a div (never too clear) to select an element by ID. Yes I had forgotten the most basic things.

Some conclusions: I have learned that the debugger is useful and my knowledge of it is limited. I have also learned that after a couple of months away from coding I have forgotten a lot of things. Fortunately relearning is faster than learning.