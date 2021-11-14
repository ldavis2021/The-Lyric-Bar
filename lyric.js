const btn = document.getElementById("btn");
const titleInput = document.getElementById("Title")
const artistInput = document.getElementById("Artist")
const lyricdiv = document.getElementById("lyric-div")
btn.addEventListener('click', function () {

  let title = titleInput.value.toLowerCase()
  let artist = artistInput.value.toLowerCase()
  searchlyrics(artist, title);

});



async function searchlyrics(artist, title) {
  let res = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  console.log(res.data);
  lyricdiv.innerHTML = res.data.lyrics

}

// const searchWindow;
// function openWindow()
// search
 // var name = document.getElementById("myName").value;
  // alert("Name: " + name);