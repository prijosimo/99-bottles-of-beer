function printLyrics(){
    const lyricsDiv=document.getElementById("lyrics");
    let lyrics="";

    for(let i=99;i>0;i--){
        let next=i-1;
        lyrics += `<p>${i} bottles of beer on the wall, ${i} bottles of beer.<br>
        Take one down and pass it around, ${next > 0 ? next : "no more"} bottles of beer on the wall.</p>`;
    }

    lyricsDiv.innerHTML = lyrics;
}

printLyrics();