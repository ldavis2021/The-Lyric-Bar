# Project Overview
`
## Project Name

The Lyric Bar
Web Link: https://ldavis2021.github.io/The-Lyric-Bar/

## Project Description

The Lyric Bar is a website for inspiring songwriters and music lovers to research lyrics of their choice.
In music a bar is considered a lyric of music and in business a bar is a place to get drinks and entertainment. This combination is what inspired The Lyric Bar theme. 
 https://api.lyrics.ovh/v1/



## Wireframes
Web View: https://i.ibb.co/F3099k6/The-Lyric-Bar-1-25x.png
Mobile View: https://i.ibb.co/5nPGXgx/The-Lyric-Bar-Mobile-1-25x.png

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api (api.lyrics.ovh/v1/)
- Render data on page 


#### PostMVP  

- Add second API
- Allow user to search lyric data by genre
- Allow user to research lyric data
- Allow user to upload personal data

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Nov 5-8| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|Nov 8| Project Approval | complete
|Nov 9| Core Application Structure (HTML, CSS, etc.) | complete
Nov 10| Pseudocode / actual code | complete
|Nov 115| Initial Clickable Model  | Complete
Nov 12| MVP | Complete
|Nov 13| Presentations | 

## Priority Matrix

https://i.ibb.co/T4xSGRB/The-Lyric-Bar-Priority-Matrix.png

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Designing | H | 8hrs| 8hrs | 8hrs |
| Working with API | H | 8hrs| 8hrs || 10hrs |
| Total | H | 16hrs| 16hrs | 18hrs |

## Code Snippet

async function searchlyrics(artist, title) {
  let res = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  console.log(res.data);
  lyricdiv.innerHTML = res.data.lyrics
The async function successfully grabs the API info(lyrics) on demand of the user input and displays it on the page. 
<marquee behavior="scroll" direction="left">
      <h1 style="color:#623911 ;font-size:60px;">WELCOME TO THE LYRIC BAR!!!</h1>
    </marquee>
The html marquee successfully scrolls text across the page. 
}


## Change Log
  Create Mobile View Post MVP
  Added an html marquee scroll to the image background. It was added for enhancement of the background. 