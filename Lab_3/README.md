# Data Logger (and using cool sensors!)

*A lab report by Jeremy D Walker.*

## In The Report

Include your responses to the bold questions on your own fork of [this lab report template](https://github.com/FAR-Lab/IDD-Fa18-Lab2). Include snippets of code that explain what you did. Deliverables are due next Tuesday. Post your lab reports as README.md pages on your GitHub, and post a link to that on your main class hub page.

For this lab, we will be experimenting with a variety of sensors, sending the data to the Arduino serial monitor, writing data to the EEPROM of the Arduino, and then playing the data back.

## Part A.  Writing to the Serial Monitor
 
**a. Based on the readings from the serial monitor, what is the range of the analog values being read?**

0-1023
 
**b. How many bits of resolution does the analog to digital converter (ADC) on the Arduino have?**

10 bits

## Part B. RGB LED

**How might you use this with only the parts in your kit? Show us your solution.**

## Part C. Voltage Varying Sensors 
 
### 1. FSR, Flex Sensor, Photo cell, Softpot

**a. What voltage values do you see from your force sensor?**

roughly 200-1000

**b. What kind of relationship does the voltage have as a function of the force applied? (e.g., linear?)**

Linear, acting as a voltage divider, Vout = Vin(R1/R1+R2)

**c. Can you change the LED fading code values so that you get the full range of output voltages from the LED when using your FSR?**

Yes, by changing the brightness to vary from 0 to 255, I varied it from 0 to analogRead(A0)

**d. What resistance do you need to have in series to get a reasonable range of voltages from each sensor?**

10K for photocell
2 x 10K for softpot (one per side, for one pull-up and one pull-down)

**e. What kind of relationship does the resistance have as a function of stimulus? (e.g., linear?)**

Linear, also acting as a voltage divider

## Part D. I2C Sensors

### 2. Accelerometer
 
**a. Include your accelerometer read-out code in your write-up.**

![accelcode](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_3/Screen%20Shot%202019-09-21%20at%203.59.13%20PM.png)

## Part E. Graphic Display

**Take a picture of your screen working insert it here!**

## Part F. Logging values to the EEPROM and reading them back
 
### 1. Reading and writing values to the Arduino EEPROM

**a. Does it matter what actions are assigned to which state? Why?**

Yes, you have to clear previous data before you can write new data and you also cant read data before you have written it

**b. Why is the code here all in the setup() functions and not in the loop() functions?**

Because you only have to execute one iteration

**c. How many byte-sized data samples can you store on the Atmega328?**

1024

**d. How would you get analog data from the Arduino analog pins to be byte-sized? How about analog data from the I2C devices?**

Sampling the data at a specific rate, then dividing into 8 bit segments to determine most significant through least significant bit out of the byte.

**e. Alternately, how would we store the data if it were bigger than a byte? (hint: take a look at the [EEPROMPut](https://www.arduino.cc/en/Reference/EEPROMPut) example)**

Use multiple bytes

**Upload your modified code that takes in analog values from your sensors and prints them back out to the Arduino Serial Monitor.**

![EEPROM_Code](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_3/Screen%20Shot%202019-09-25%20at%206.23.38%20PM.png)

### 2. Design your logger
 
![Data_Logger_FSM](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_3/Screen%20Shot%202019-09-27%20at%2011.54.59%20PM.png)

### 3. Create your data logger!
 
**a. Record and upload a short demo video of your logger in action.**

https://youtu.be/EjHc8rUebb4
