

var isLand = false

$('.landing-toggle-button').click(function(){

  if (isLand) {
    document.getElementById('land').style.top = "-100%"
    document.getElementById('landing-toggle-enclosure').style.top = "25px"
    isLand = false
  } else {
    document.getElementById('land').style.top = "0"
    document.getElementById('landing-toggle-enclosure').style.top = "calc(100% - 125px)"
    isLand = true
  }


})

var bannerH = 100;

$(".mid-banner").click(function(){
  bannerH = (bannerH + 100) % 200
  var topBannerTop = (0 - ((bannerH + 100) % 200))
  document.getElementById('top-banner').style.height = (bannerH + "px")
  document.getElementById('logo-container').style.top = (topBannerTop + "px")
  document.getElementById('designed-by-container').style.top = (topBannerTop + "px")
  document.getElementById('main').style.height = "calc(100% - " + (bannerH + 50) + "px)"
  document.getElementById('mid-banner-text').style.top = (bannerH + "px")
  document.getElementById('mid-banner-breadcrumb').style.top = (bannerH + "px")
  document.getElementById('landing-toggle-enclosure').style.top = ((topBannerTop + 25) + "px")
});

var selectedAlbum = null;
var selectedSong = null;

function collapseMenu() {
  document.getElementById('top-banner').style.height = "0px"
  document.getElementById('logo-container').style.top = "-100px"
  document.getElementById('designed-by-container').style.top = "-100px"
  document.getElementById('main').style.height = "calc(100% - 50px)"
  document.getElementById('mid-banner-text').style.top = "0px"
  document.getElementById('mid-banner-breadcrumb').style.top = "0px"
  document.getElementById('landing-toggle-enclosure').style.top = "-100px"

  bannerH = 0;
}

$('.album-bubble').click(function(event){
  event.preventDefault();

  let scrollW = $('.abyss').get(0).scrollWidth

  collapseMenu();

  let item = ('#' + (this.href).split('/').pop())

  // $('.album-bubble').css({
  //   "animation": "none"
  // });

  $('.album-bubble').css("top", $('.album-bubble').css("top"))
  $('.album-bubble').css("margin-top", $('.album-bubble').css("margin-top"))
  $('.album-bubble').css("margin-left", $('.album-bubble').css("margin-left"))
  $('.album-bubble').css("margin-right", $('.album-bubble').css("margin-right"))
  $('.album-bubble').css("left", "0")
  $('.album-bubble').css("right", "0")

  $('.album-bubble').css({
    "top": "0",
    "margin-top": "50px",
    "margin-left": "50px",
    "margin-right": "50px",
    "width": "200px",
    "height": "200px",
    "border-radius": "100px",
    "border": "3px solid rgba(200,240,255,.1)",
  });


  if (item !== selectedAlbum) {
    // set the originals, in order to respect change to new
    $(item).css("top", $(item).css("top"))
    $(item).css("margin-top", $(item).css("margin-top"))
    $(item).css("margin-left", "0")
    $(item).css("margin-right", "0")
    $(item).css("left", "0")
    $(item).css("right", "0")
    // change to new
    $(item).css({
      "top": "0",
      "margin-top": "0",
      "width": "300px",
      "height": "300px",
      "border-radius": "150px",
      "margin-left": "200px",
      "margin-right": "200px",
      "transition": "2s"
    });
    selectedAlbum = item;


    album_song = {
      "nostalgia-ultra": ["There-Will-Be-Tears", "Swim-Good", "Strawberry-Swing", "Novacane"],
      "channel-orange": ["Pink-Matter", "Super-Rich-Kids", "Thinkin-Bout-You"],
      "blonde": ["Be-Yourself", "Ivy", "Nikes", "Pink-and-White", "Solo"],
      "unreleased": ["Biking", "Chanel"],
      "endless": ["endless-one"]
    }







    $('.song-bubble-container').remove();
    $('.song-bubble-inner').remove();
    $('.song-bubble').remove();
    $('.deriv-bubble-container').remove();
    $('.deriv-bubble-inner').remove();
    $('.deriv-bubble').remove();

    let songs_margs_list = {
      "nostalgia-ultra": -25,
      "channel-orange": 370,
      "blonde": 525,
      "unreleased": 1080,
      "endless": 1490
    }

    $('.song-bubble-container').css('margin-left', songs_margs_list[(this.href).split('/').pop()])

    $('<div/>', {
        'id':'nothing',
        'class':'song-bubble-container'
    }).on('click', function(){
        // alert(this.id); // the song name
    }).appendTo('.abyss');

    var songs = album_song[(this.href).split('/').pop()]

    for (i=0; i<songs.length; i++) {

      var inner_name = songs[i] + 'inner'

      $('<a/>', {
        'id':inner_name,
        'href':"#",
        'class':'song-bubble-inner'
      }).on('click', function(){
        songClicked(this.id)
      }).appendTo('.song-bubble-container');

      $('<div/>', {
        'id':songs[i],
        'class':'song-bubble',
        'text':songs[i].replace(/-/g," ")
      }).on('click', function(){
        // nothing
      }).appendTo('#' + inner_name);

      var top = 0
      var marg = 0
      var dist = Math.abs(((songs.length - 1) / 2) - i)
      if (dist % 1 !== 0) {
        dist = Math.floor(dist)
      }
      dist = dist * -1
      distSq = (dist * dist) * -1
      top = (17*distSq) + (40*dist) + Math.floor(50*songs.length / 2)

      $("#" + songs[i] + 'inner').css({
        "top": top
      })

      var marg = 20 + (dist*10)

      $('#' + songs[i] + 'inner').css({
        "margin": marg
      })

      // refresh
      $('.song-bubble-container').css({
        "margin-left": $('.song-bubble-container').css('margin-left'),
        "margin-top": $('.song-bubble-container').css('margin-top')
      })
      // set to new
      $('.song-bubble-container').css({
        "margin-left": songs_margs_list[(this.href).split('/').pop()],
        "margin-top": "0"
      })
    }

    $('.abyss').css("width","100%")
    $('.abyss').css("height","100%")
    $('.abyss').css("overflow","auto")

  } else {
    // send it down, album is deselected
    selectedAlbum = null;
    $('.song-bubble-container').remove();
    $('.song-bubble-inner').remove();
    $('.song-bubble').remove();
    $('.deriv-bubble-container').remove();
    $('.deriv-bubble-inner').remove();
    $('.deriv-bubble').remove();
  }


});















derived_works = {
  "nostalgia-ultra": 0,
  "channel-orange": 0,
  "blonde": 0,
  "unreleased": 0,
  "endless": 0
}

table_names = {
  "nostalgia-ultra": {
    "title": Derivs_Ultra,
    "work-keys": {
      "Novacane": "Novacane_Ultra",
      "Strawberry-Swing": "Strawberry_Ultra",
      "Swim-Good": "SwimGood_Ultra",
      "There-Will-Be-Tears": "Tears_Ultra"
    }
  },
  "channel-orange": {
    "title": Derivs_Orange,
    "work-keys": {
      "Pink-Matter": "PinkMatter_Orange",
      "Super-Rich-Kids": "SuperRichKids_Orange",
      "Thinkin-Bout-You": "Thinkin_Orange"
    }
  },
  "blonde": {
    "title": Derivs_Blonde,
    "work-keys": {
      "Be-Yourself": "BeYourself_Blonde",
      "Ivy": "Ivy_Blonde",
      "Nikes": "Nikes_Blonde",
      "Pink-and-White": "PinkWhite_Blonde",
      "Solo": "Solo_Blonde"
    }
  },
  "unreleased": {
    "title": Derivs_Miscel,
    "work-keys": {
      "Biking": "Biking_miscel",
      "Chanel": "Chanel_miscel"
    }
  },
  "endless": {
    "title": Derivs_Endless,
    "work-keys": {
      "Endless": "Endless"
    }
  }
}










var num_deriv_works = {
  "Nikes": 3,
  "Ivy": 4,
  "Pink-and-White": 3,
  "Be-Yourself": 3,
  "Solo": 3,
  "Thinkin-Bout-You": 4,
  "Pink-Matter": 3,
  "Super-Rich-Kids": 3,
  "Novacane": 3,
  "Swim-Good": 3,
  "There-Will-Be-Tears": 3,
  "Strawberry-Swing": 3,
  "Chanel": 3,
  "Biking": 3,
  "Endless": 2
}






function songClicked(name) {
  $('.deriv-bubble-container').remove();
  $('.deriv-bubble-inner').remove();
  $('.deriv-bubble').remove();



  if (name !== selectedSong) {

    // $(".song-bubble-inner").mouseover(function() {
    //   $(this).css("border","3px solid rgb(14,255,219)");
    // }).mouseout(function() {
    //     $(this).css("border","1px solid gray");
    // });

    $('head').append('<style>a.song-bubble-inner:hover {background-color: rgb(14,255,219);}</style>')

    $('.song-bubble-inner').css("border", "1px solid gray")
    $('#' + name).css("border", "3px solid rgb(14,255,219)")
    // $('#' + name).css("border", "3px solid rgb(255,81,150)")

    $('<div/>', {
        'id':'nothing-else',
        'class':'deriv-bubble-container'
    }).on('click', function(){
        // alert(this.id); // the song name
    }).appendTo('.abyss');













    selectedSong = name;

    var cleaned_name = selectedSong.replace("inner", "")
    // console.log(cleaned_name)

    var num_derivs = num_deriv_works[cleaned_name]
    // console.log(num_derivs)

    selectedAlbum = selectedAlbum.replace("#", "")
    var this_album = table_names[selectedAlbum]
    console.log(selectedAlbum)

    var this_work_keys = this_album['work-keys']
    var this_song_table = this_work_keys[cleaned_name]

    var der_works = this_album["title"]
    var this_der_works = der_works[this_song_table]

    for (i = 0; i < num_derivs; i++) {

      var this_der_work = this_der_works[i]
      var der_work_name = this_der_work["workName"]
      var der_work_name_unchanged = this_der_work["workName"]

      // temporary space removal
      der_work_name = der_work_name.replace(/ /g, "")
      der_work_name = der_work_name.replace(/\(/g, "")
      der_work_name = der_work_name.replace(/\)/g, "")
      der_work_name = der_work_name.replace(/\-/g, "")

      console.log(der_work_name)

      // var inner_name = (name + i + "inner")
      var inner_name = (der_work_name + "inner")


      $('<a/>', {
        'id':inner_name,
        'href':"#",
        'class':'deriv-bubble-inner'
      }).on('click', function(){
        // songClicked(this.id)
      }).appendTo('.deriv-bubble-container');

      $('<div/>', {
        'id':der_work_name,
        'class':'deriv-bubble',
        'text':der_work_name_unchanged
      }).on('click', function(){
        // nothing
      }).appendTo('#' + inner_name);

      // $('<div/>', {
      //     'id':this_work,
      //     'class':'deriv-bubble'
      // }).on('click', function(){
      //     // alert(this.id); // the song name
      // }).appendTo('.deriv-bubble-container');

    }

    // refresh
    $('.deriv-bubble-container').css({
      "margin-left": $('.deriv-bubble-container').css('margin-left'),
      "margin-top": $('.deriv-bubble-container').css('margin-top')
    })
    // set to new
    $('.deriv-bubble-container').css({
      "margin-left": "100px",
      "margin-top": "0"
    })


  } else {

    $('.deriv-bubble-container').remove();
    $('.deriv-bubble-inner').remove();
    $('.deriv-bubble').remove();
    selectedSong = null;
    $('.song-bubble-inner').css("border", "1px solid gray")

  }



}
