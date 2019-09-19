# Digital Timer
 
Include your responses to the bold questions below. Include snippets of code that explain what you did. Deliverables are due next Tuesday. Post your lab reports as README.md pages on your GitHub, and post a link to that on your main class hub page.

## Part A. Solder your LCD panel

**Take a picture of your soldered panel and add it here!**

![LCD_name](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_2/LCD_Name.jpg)

## Part B. Writing to the LCD
 
**a. What voltage level do you need to power your display?**

5v for backlight and main power/3.3v for text

**b. What voltage level do you need to power the display backlight?**

5v
   
**c. What was one mistake you made when wiring up the display? How did you fix it?**

Found one wire that was not making contact properly. While debugging this, ran sweep across potentiometer values on serial monitor (connected to A0), verified voltages with voltmeter, connected circuit to external breadboard, swapped LCD's, etc.

**d. What line of code do you need to change to make it flash your name instead of "Hello World"?**

Simply change the text in line 54 (in mine I also modified the time on to make it easier to take a picture)
 
**e. Include a copy of your Lowly Multimeter code in your lab write-up.**

![voltmeter_code](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_2/voltmeter_code_screenshot.png)

![voltmeter_ex](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_2/LCD_Meter.jpg)

## Part C. Using a time-based digital sensor

**Upload a video of your working rotary encoder here.**

https://youtu.be/xU6oefpH5NQ

## Part D. Make your Arduino sing!

**a. How would you change the code to make the song play twice as fast?**

You can simply edit the code on line 36 and change noteduration from 1000 to 500 to make the song play twice as fast
 
**b. What song is playing?**

The star wars theme song plays after changing the melody and note duration arrays and adjusting the for loop

## Part E. Make your own timer

**a. Make a short video showing how your timer works, and what happens when time is up!**

![microwave_standby](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_2/Microwave_Standby.jpg)

![microwave_10s_sim](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_2/Microwave_ten.jpg)

https://youtu.be/NshX3Y1mxio

**b. Post a link to the completed lab report your class hub GitHub repo.**
