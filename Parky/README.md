# IDD Final Project: Parky - AI Parking Assistant

#### Eduardo Castillo (EC833), Bar Kadosh (BK497), Ben Kadosh (BK499), & Jeremy Walker (JDW342)

<p align="center">
  <img src="Parky_Intro.png" width="600" height="420">
</p>

### Ideation 

Our product is a computer-vision assisted device that detects open parking spaces to ease the difficult process users often face with finding parking spaces that are free/cheap and near their target location. Immediately, we realized that a big challenge for this product would be mounting it to a vehicle (car, bike, etc.). The following two images capture our earliest brainstorming session:

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/IMG_9735.JPEG" width="600" height="420">
</p>

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/IMG_9736.JPEG" width="600" height="420">
</p>

As can be seen in image 1, we imagined that our device would be a clear box with a Raspberry Pi, breadboard, and raspberry pi camera inside. As we will discuss later, this was very close to what we ended up building, minus the breadboard. Additionally, we ended up not having a clear box, so the raspberry pi camera had to poke a bit out of the box to capture photos. 

As for where to attach our device, the second image shows that we aimed to place it on a car and on the bottom of a car. However, we soon realized that this would be a tricky place to mount, both because it would be difficult to maintain and because field of vision might be obstructed by components/wheels on the car. Instead, we shifted to trying to mount it to the side view mirror.   

### Cardboard Prototype

We ended up pivoting to the driver-side sideview mirror because we believed it would allow for a wide field of vision, which is necessary for tracking cars and distance between them. While this means the camera might be obstructed by traffic on the opposite side at times, we worried that placing it by the passenger side would severely limit the field of vision and make our product completely ineffective. The photos below show our prototype construction process and the prototype ultimately being mounted to a car with a C-clamp mechanism:

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/IMG_9738.JPEG" width="600" height="700">
</p>

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/IMG_9741.JPEG" width="600" height="700">
</p>

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/IMG_9743.JPEG" width="600" height="700">
</p>

Through our ideation and prototyping processes, we were also better able to identify the components our final product would require. Since, the product would be portable and constantly moving, we needed a portable battery to power it — we settled upon the Raspberry Pi 3 B+ Battery Pack 4000mAh with suction so that we could easily attach it or attach to it. With our prototype, we also realized that an easy replacement for our cardboard box would be a Kugi raspberry pi case with all holes already in place for easy access. Lastly, we realized that a small raspberry pi camera would be ideal, so we ordered the Raspberry Pi Mini Camera Video Module 5 Megapixels 1080p Sensor OV5647 Webcam. All of these components are shown below:

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/components.jpg" width="600" height="700">
</p>

### Control Flow

### GPS

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/IMG_9823.jpeg" width="600" height="700">
</p>

### Computer Vision

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/IMG_9825.JPG" width="600" height="420">
</p>

### Map and Notification API

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/api.jpg" width="600" height="700">
</p>

### Final Device

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/IMG_9794.JPEG" width="600" height="700">
</p>

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/IMG_9795.JPEG" width="600" height="700">
</p>

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/IMG_9796.JPEG" width="600" height="420">
</p>

<p align="center">
  <img src="https://github.com/jwalker34/Interactive-Lab-Hub/blob/master/Parky/device_bike.jpg" width="600" height="700">
</p>

### Integration and Demo 

[Parky in Action!](https://www.youtube.com/watch?v=cwewLBq8r5M&feature=youtu.be)
