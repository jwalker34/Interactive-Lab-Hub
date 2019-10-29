# Video Doorbell, Lab 7

*A lab report by Jeremy D. Walker*

### In This Report

1. Upload a video of your version of the camera lab to your lab Github repository
1. As usual, update your class Hub repository to add your [forked IDD-Fa18-Lab7](/FAR-Lab/IDD-Fa18-Lab7) repository.
1. Answer the questions in-line below on your README.md.

## Part A. HelloYou from the Raspberry Pi

**a. Link to a video of your HelloYou sketch running.**

## Part B. Web Camera

**a. Compare `helloYou/server.js` and `IDD-Fa18-Lab7/pictureServer.js`. What elements had to be added or changed to enable the web camera? (Hint: It might be good to know that there is a UNIX command called `diff` that compares files.)**

The results of diff are displayed as follows per function:

![diff top](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_7/Diff_top.png)
![diff serial](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_7/diff_serial.png)
![diff webapp](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_7/diff_webapp.png)
![diff webcam](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_7/diff_webcam.png)
![diff websoc](https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Lab_7/diff_websoc.png)

Briefly scanning through these results, we can see that the main changes involve the serial communication commands between arduino/pi, the image setup (camera resolution, etc), and the actual taking of the picture (emit command for saving to public folder, etc.)

**b. Include a video of your working video doorbell**

## Part C. Make it your own

**a. Find, install, and try out a node-based library and try to incorporate into your lab. Document your successes and failures (totally okay!) for your writeup. This will help others in class figure out cool new tools and capabilities.**

**b. Upload a video of your working modified project**


