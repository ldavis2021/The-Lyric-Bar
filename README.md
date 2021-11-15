# Project Overview

## Project Name

The Lyric Bar

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## API and Data Sample
API 
 https://api.lyrics.ovh/v1/



## Wireframes
Images Uploaded
### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api (api.lyrics.ovh/v1/)
- Render data on page 


#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Allow user to search lyric data by genre
- Allow user to research lyric data
- Allow user to input data

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

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Designing | H | 4hrs| 4hrs | 4hrs || 4hrs || 4hrs |
| Working with API | H | 4hrs| 4hrs | 4rs || 4hrs |
| Total | H | 8hrs| 8hrs | 8hrs || 8hrs || 8hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  
async function searchlyrics(artist, title) {
  let res = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  console.log(res.data);
  lyricdiv.innerHTML = res.data.lyrics
The async function successfully grabs the API info(lyrics) on demand of the user input and displays it on the page. 
<marquee behavior="scroll" direction="left">
      <h1 style="color:#623911 ;font-size:60px;">WELCOME TO THE LYRIC BAR!!!</h1>
    </marquee>
The html marquee successful scrolls text across the page. 
}


## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
Moved the interaction 