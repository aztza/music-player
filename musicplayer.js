const playlistContainerTag = document.getElementsByClassName("playlistContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const tracks = [{ trackId: "./music/Track1.mp3", title: "High Way to Hell - ACDC" },
                { trackId: "./music/Track2.mp3", title: "Buried Alive - AS" },
                { trackId: "./music/Track3.mp3", title: "Hail to the king - AS" },];

for(let i = 0; i<tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        const trackId = tracks[i].trackId;
        audioTag.src = trackId;
        audioTag.play();
    });
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + ". " + tracks[i].title;
    trackTag.textContent = title;
    playlistContainerTag.append(trackTag);
}