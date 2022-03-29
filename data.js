let songs = [
    {
        name: 'The fall',
        path: 'musics/01.Thefall.mp3',
        artist: 'Lovejoy',
        cover: 'https://i.scdn.co/image/ab67616d0000b273287a30c3d4309d7d50ec7ed9',
        
    },
    {
        name: 'Taunt',
        path: 'musics/02.Taunt.mp3',
        artist: 'Lovejoy',
        cover: 'https://lastfm.freetls.fastly.net/i/u/ar0/191dbed347bd4df313b350b98ff6d429.jpg',
        
    },
    {
        name: 'One day',
        path: 'musics/03.Oneday.mp3',
        artist: 'Lovejoy',
        cover: 'https://lastfm.freetls.fastly.net/i/u/ar0/191dbed347bd4df313b350b98ff6d429.jpg',
        
    },
    {
        name: 'Cabinet man',
        path: 'musics/04.Cabinetman.mp3',
        artist: 'Lemon Demon',
        cover: 'https://i.scdn.co/image/ab67616d0000b273ae390841cf7a97bf3a59bb5d',
        
    },
    {
        name: 'Touch-Tone Telephone',
        path: 'musics/05.Touchtonetelephone.mp3',
        artist: 'Lemon Demon',
        cover: 'https://i.scdn.co/image/ab67616d0000b273ae390841cf7a97bf3a59bb5d',
        
    },
    {
        name: 'Agoraphobic',
        path: 'musics/06.Agoraphobic.mp3',
        artist: 'Corpse',
        cover: 'https://i1.sndcdn.com/artworks-RsjS3PWjfOXk8JIx-0ySnGQ-t500x500.jpg',
        
    },
    {
        name: 'Creeper vs Zombie',
        path: 'musics/07.Creepervszombie.mp3',
        artist: 'Zarcortgame',
        cover: 'https://i.ytimg.com/vi/wAMZ6KpMGQI/maxresdefault.jpg',
       
    },
    {
        name: 'Lo malo de ser bueno',
        path: 'musics/08.Lomalodeserbueno.mp3',
        artist: 'Cuarteto de nos',
        cover: 'https://i.scdn.co/image/ab67616d0000b273e32b600cf149063d811341e3',
        
    },
    {
        name: 'Nobody',
        path: 'musics/09.Nobody.mp3',
        artist: 'Mitski',
        cover: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/b/a/8/1/655291535552067.jpg',
        
    },
    {
        name: 'The ultimate showdown',
        path: 'musics/10.Theultimate.mp3',
        artist: 'Lemon Demon',
        cover: 'https://i.scdn.co/image/ab67616d0000b2735d2f39265b6ffeebcae4bfaf',
        
    },
    {
        name: 'Crescent moon',
        path: 'musics/11.Crescentmoon.mp3',
        artist: 'Kaito',
        cover: 'https://c-cl.cdn.smule.com/rs-s91/arr/d3/67/b1d462f4-a92a-4533-8035-a7e9eb6e5974_1024.jpg',
        
    },
    {
        name: 'Duele el amor (Kaito)',
        path: 'musics/12.Dueleelamor.mp3',
        artist: 'Kaito',
        cover: 'https://i1.sndcdn.com/artworks-000240905910-otvx2h-t500x500.jpg',
        
    },
    {
        name: 'Oedo Julia Night',
        path: 'musics/13O.edojulianight.mp3',
        artist: 'Kaito & Hatsune Miku',
        cover: 'https://i1.sndcdn.com/artworks-000240905910-otvx2h-t500x500.jpg',
        
    },
    {
        name: 'Juicio de la corrupción',
        path: 'musics/14.Juiciodelacorrupcion.mp3',
        artist: 'Kaito',
        cover: 'https://i1.sndcdn.com/artworks-000176610773-t9r905-t500x500.jpg',
        
    },
    {
        name: 'Judas',
        path: 'musics/15.Judas.mp3',
        artist: 'Kaito',
        cover: 'https://static.wikia.nocookie.net/v__/images/e/ed/Judas_SukoyakaDaiseidou.jpg/revision/latest?cb=20211128050133&path-prefix=vocaloidlyrics',
        
    },
    {
        name: 'U',
        path: 'musics/16.U.mp3',
        artist: 'Super Junior',
        cover: 'https://i.pinimg.com/originals/cf/76/d7/cf76d722c826f6e902a9524872e031d9.jpg',
        
    },
    {
        name: 'Black Suit',
        path: 'musics/17.Blacksuit.mp3',
        artist: 'Super Junior',
        cover: 'https://i.scdn.co/image/ab67616d0000b27364a3178b264477550c4bcdb6',
        
    },
    {
        name: 'SPY',
        path: 'musics/18.SPY.mp3',
        artist: 'Super Junior',
        cover: 'https://i1.sndcdn.com/artworks-000028554832-c2rwoa-t500x500.jpg',
        
    },
    {
        name: 'Growing pains',
        path: 'musics/19.growingpains.mp3',
        artist: 'Super junior D&E',
        cover: 'http://2.bp.blogspot.com/-EpxYiVunrtQ/VP4WPP1PZ5I/AAAAAAAACDU/RUkaeWW4P0g/s1600/SUPER-JUNIOR-DE-DongHae-EunHyuk-The-Beat-Goes-On.jpg',
        
    },
    {
        name: 'Dokuringo',
        path: 'musics/20.Dokuringo.mp3',
        artist: 'Tsuduri',
        cover: 'https://linkstorage.linkfire.com/medialinks/images/74a861c3-9228-4899-abd2-c9f42783057f/artwork-440x440.jpg',
        
    },
]

let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < songs.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${songs[i].img}"/>
      </div>
      <div class="more">
      <audio src="${songs[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${songs[i].name}</p>
         <p>${songs[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};
