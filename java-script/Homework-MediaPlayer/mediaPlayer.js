// Creati o functie de tip constructor care instantiaza obiecte de tip music player.
// Aceste obiecte contin o lista de piese si implementeaze metode pentru
// urmatoarele functionalitati:
// ● play, pause si stop
// ● nextTrack si previousTrack
// ● addTrackToQueue
// ● removeTrackFromQueue
// ● showNextTrack
// ● showPlaylist



function MediaPlayer(song = []){
  this.song = song;

  this.showPlayList = function(){
    console.log(`${this.song}`)
  }

  this.playMusic = function(){
    console.log(`Playing: > ${this.song}`);
  }
  this.pauseSong = function(){
    console.log(`Pause: || ${this.song}`);
  } 
  this.stopSong = function(){
    console.log(`Stop: X ${this.song}`);
  } 
  this.addTrackToQueue = function (el){
    this.song.push(el);
    return this.song;
  }
  this.removeTrackFromQueue = function (){
    this.song.pop();
    return this.song;
  }
  this.nextTrack = function(el){
    for(var i = 0; i < song.length; i++){
       if(el === song[i]) {
           console.log(`Next Track: ${song[i+1]}`);
          }
      }
  }
  this.previousTrack = function(el){
    for(var i = 0; i < song.length; i++){
       if(el === song[i]) {
           console.log(`Previous Track: ${song[i-1]}`);
          }
      }
  }
};


const playList = new MediaPlayer([`Sugar`]);
playList.playMusic();
playList.pauseSong();
playList.stopSong();
playList.addTrackToQueue('Purple Rain');
playList.addTrackToQueue('Loco Contigo');
playList.showPlayList();
playList.removeTrackFromQueue();
playList.showPlayList();
console.log('');
playList.nextTrack('Sugar');
playList.previousTrack('Purple Rain');


playList.nextTrack('Purple Rain');


