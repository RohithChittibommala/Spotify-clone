# Frontend Task

Technologies used - React.js
- Hosted At : [here](https://fluffy-griffin-487207.netlify.app/)

### ScreenShots
![image](https://github.com/RohithChittibommala/Frontend-Task/assets/62145732/cf6a9528-4168-439a-b4ff-1bafefa3a0ce)
![image](https://github.com/RohithChittibommala/Frontend-Task/assets/62145732/ccb29587-18c3-4a6b-8e41-b6fd126cfe5d)
![image](https://github.com/RohithChittibommala/Frontend-Task/assets/62145732/26ce40fa-6012-437b-a734-8e081136469b)
![image](https://github.com/RohithChittibommala/Frontend-Task/assets/62145732/31ddaa4c-e2d4-4477-9fbf-9697e663fdb4)






- Folder Structure
```
src/
│   App.css
│   App.js
│   main.jsx
│
├───assets
│       logo.svg
│
├───components
│   ├───Player
│   │       Controls.js
│   │       DisplaySongDetails.js
│   │       index.js
│   │       player.module.css
│   │       SongProgressBar.js
│   │
│   ├───PlayList
│   │       index.js
│   │       playlist.module.css
│   │       PlayListShimmer.js
│   │
│   ├───SideBar
│   │       index.js
│   │       sidebar.module.css
│   │       SideBarShimmer.js
│   │
│   └───SongCard
│           index.js
│           songcard.module.css
│           SongCardShimmer.js
│
├───graphql
│   └───queries
│           getPlaylistQuery.js
│           getSongsByPlaylistIdQuery.js
│
├───hooks
│       useDebounce.js
│
└───utils
        formatTime.js
```



## Features implemented

- [x] Search 
- [x] Music Control — Play/Pause/Next/Previous
- [x] Tab change (e.g. For You to Top Tracks)
- [x] Controlling music via seeker
- [x] Responsive design

### Could not implement the change background according to Song 
 - I tried to implement the feature of changing the website background according to the song poster, but I faced CORS error while implementing it 
 ```js
Uncaught SecurityError: Failed to execute 'getImageData' on 'CanvasRenderingContext2D': The canvas has been tainted by cross-origin data
```
 ```js
Access to image at 'https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3' from origin 'http://127.0.0.1:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
this feature can be implemented if  CORS headers are properly set on the server hosting the image to allow cross-origin access.
The Algo for implementing this feature would be 

- Construct a canvas
- drawing the image on the canvas
- iterating on the pixels of the image
- counting the Red, Green, and Blue pixels 
- finding the R,G,B % in the total image
- forming the average color 
- Change the background of the website

