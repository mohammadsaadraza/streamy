
# Streamy
Create streams or watch streams from other users

# Tools Used
* Google OAuth 2.0
* JSON-server
* RTMP-server
* OBS Studio (Streaming Software)

# Instruction For Use
1. Without login to Google, you can only watch Streams created by other users.
2. By logining in you can Create, Edit, Delete streams of your own.
3. To run, clone the repository as is. Each of the 3 folders label a server that you need to run.
4. Go in to each folder (/api , /client , /rtmpServer ) and run the following command in your terminal `npm run start`.
5. To create a stream, fill the form on the frontend after which you will be directed to a video element.
6. After that go to `/api/db.json` and find your entry. Pick the `id` of your Stream and open OBS Studio.
7. Go to settings of OBS Studio and in to the Stream settings, put the `id` value you copied into the `Stream Key` field (check the screenshots below).
8. Make sure you fill the `Server` field as in the screenshot below.
9. Start your stream and go back to the frontend, refresh your page and click on your Stream in the list. The Stream will be running now. It will be visible to other users.

![db.json](/screenshot1.PNG)
![obsStudio](/screenshot2.PNG)


#Future Use
* For the time being, the app only works in the development mode.
* The app has been designed with the minimum functionality for simplicity purposes.
* Highly configurable to accomodate new flow and features
