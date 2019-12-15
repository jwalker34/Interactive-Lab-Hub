import subprocess
import time
from picamera import PiCamera
from datetime import datetime




fail_count = 0
init_lat = 0.0
init_long = 0.0
camera = PiCamera()
count = 0
open_locations = [] # array will store tuple of (long, lat, ns, ew, filepath, date_time)

while(True):
    
    cmd = 'timeout 1 stdbuf -o0 curl 172.20.10.1:11123 > parky.txt'
    process_run = subprocess.Popen(cmd, shell=True)

    time.sleep(1)
    
    with open('parky.txt', 'r') as file:
        data = file.read()

    try:
        camera.start_preview()
        data = data.split(',')
        timestamp = data[1]
        latitude = float(data[2])
        north_south = data[3]
        longitude = float(data[4])
        east_west = data[5]

        if abs(latitude - init_lat) > 0.0001 or abs(longitude - init_long) > 0.0001:
            init_lat = latitude
            init_long = longitude
            print("CALL CAMERA")
            #camera.start_preview()
            time.sleep(.3)
            date_time = datetime.now().strftime('%Y_%m_%d %H_%M_%S')
            file_path = '/home/pi/parky_images/image_'+date_time+'.jpg'
            camera.capture(file_path)

            ######
            #insert camera processing code here which will access at file path 
            

            #once we verify there is a potential spot store long, lat in array


            ######
            print("image stored")


        print(timestamp)
        print(latitude)
        print(longitude)
        print("\n")
        fail_count = 0


    except:
        fail_count+=1
        if fail_count >8:
            camera.stop_preview()
            print('No connection...terminating program')
            break
    

     
    count +=1

    if count > 20:
        camera.stop_preview() # remove?
        break
    













