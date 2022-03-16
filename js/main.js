var audio_datkaa = new Audio('sound/butter.mp3');
var audio_jukySan = new Audio('sound/dynamite.mp3');
var audio_erik = new Audio('sound/happy-birthday.mp3');
var audio_justatee = new Audio('sound/savage-love.mp3');
$(document).ready(function() {
    $('#begin').click(function() {
        console.log('click hear');
        (function() {
            audio_erik.play();
        })()
        setTimeout(function() {
            firstQuestion();
            $('.spinner').fadeOut();
            $('#preloader').delay(32000).fadeOut('slow');
            $('body').delay(9950).css({
                'overflow': 'visible'
            });
        }, 0);
        setTimeout(typeWriter(),10000);
    });
})
function loopQ1(){
    setTimeout(()=>{
        audio_datkaa.play();
    },33000)
    setTimeout(()=>{
        document.getElementById("demo").style.display = "none";
        document.getElementById("tutorial").style.display = "none";
    },34000)
    // 63000
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,

        // 2. Ảnh ở câu hỏi đầu tiên
        imageUrl: 'https://raw.githubusercontent.com/zukahai/Confess-Crush/main/img/logi.gif',
        imageWidth: 300,
        imageHeight: 300,
        background: `#fff url("https://cdn.dribbble.com/users/2286753/screenshots/10052587/love_background-01.jpg") 100% 100% `,
        backdrop: `
              rgba(0,0,123,0.4)
              url("https://cdn8.hifigif.cc/picture/original/nUE0pUZ6Yl90nUIgLaZhM_M5L_S0YzAioF9OL3WiLzS0nJAQoTI_MKWOMJqyLJ5wLKDgp_y6MI9lMKA0pzywqTIxYzqcMvxeXPuVnHMcE0yTYzAwXI9uL3WiLzS0nJAwoTI_MKWuMJqyLJ5wLKDgp_y6MF1lMKA0pzywqTIxYzqcMt3p9W/(HiFiGIF.cc)_free-video-background-for-birthday-full.gif")

            `,
        imageAlt: 'Custom image',
        showCancelButton: true,
        cancelButtonText: 'Hông trả lời đấy thì sao',
        confirmButtonText: CONFIG.btnIntro
      }).then(function(result){
        if (result.isConfirmed) {
            setTimeout(()=>{
                audio_datkaa.pause();
            },0)
            audio_jukySan.play()
            $('.content').show(200);
          } else {
            Swal.fire({
                title: "He he mất nút kia rồi còn một nút này thôi! ",
                text: CONFIG.introDesc,

                // 2. Ảnh ở câu hỏi đầu tiên
                imageUrl: 'https://raw.githubusercontent.com/zukahai/Confess-Crush/main/img/logi.gif',
                imageWidth: 300,
                imageHeight: 300,
                background: `#fff url("https://cdn.dribbble.com/users/2286753/screenshots/10052587/love_background-01.jpg") 100% 100% `,
                backdrop: `
                      rgba(0,0,123,0.4)
                      url("https://cdn8.hifigif.cc/picture/original/nUE0pUZ6Yl90nUIgLaZhM_M5L_S0YzAioF9OL3WiLzS0nJAQoTI_MKWOMJqyLJ5wLKDgp_y6MI9lMKA0pzywqTIxYzqcMvxeXPuVnHMcE0yTYzAwXI9uL3WiLzS0nJAwoTI_MKWuMJqyLJ5wLKDgp_y6MF1lMKA0pzywqTIxYzqcMt3p9W/(HiFiGIF.cc)_free-video-background-for-birthday-full.gif")

                    `,
                imageAlt: 'Custom image',
                denyButtonText: `Don't save`,
                confirmButtonText: CONFIG.btnIntro
              }).then(function(result){
                if (result.isConfirmed) {
                    setTimeout(()=>{
                        audio_datkaa.pause();
                    },0)
                    audio_jukySan.play();
                    $('.content').show(200);
                }
                // loopQ2();
              })
          }
        secondQuestion();
      })
}
function loopQ2(){
    Swal.fire({
        title: "He he mất nút kia rồi còn một nút này thôi! ",
        text: CONFIG.introDesc,

        // 2. Ảnh ở câu hỏi đầu tiên
        imageUrl: 'https://raw.githubusercontent.com/zukahai/Confess-Crush/main/img/logi.gif',
        imageWidth: 300,
        imageHeight: 300,
        background: `#fff url("https://cdn.dribbble.com/users/2286753/screenshots/10052587/love_background-01.jpg") 100% 100% `,
        backdrop: `
              rgba(0,0,123,0.4)
              url("https://cdn8.hifigif.cc/picture/original/nUE0pUZ6Yl90nUIgLaZhM_M5L_S0YzAioF9OL3WiLzS0nJAQoTI_MKWOMJqyLJ5wLKDgp_y6MI9lMKA0pzywqTIxYzqcMvxeXPuVnHMcE0yTYzAwXI9uL3WiLzS0nJAwoTI_MKWuMJqyLJ5wLKDgp_y6MF1lMKA0pzywqTIxYzqcMt3p9W/(HiFiGIF.cc)_free-video-background-for-birthday-full.gif")

            `,
        imageAlt: 'Custom image',
        denyButtonText: `Don't save`,
        confirmButtonText: CONFIG.btnIntro
      }).then(function(result){
        if (result.isConfirmed) {
            setTimeout(()=>{
                audio_datkaa.pause();
            },0)
            audio_jukySan.play();
            $('.content').show(200);
          } else {
            loopQ2();
          }
        secondQuestion();
      })
}
function init(){
    $('#title').text(CONFIG.title)
    $('#desc').text(CONFIG.desc)
    $('#yes').text(CONFIG.btnYes)
    $('#no').text(CONFIG.btnNo)
}

function firstQuestion(){
    $('.content').hide();
    loopQ1();
}
function secondQuestion(){
    // audio_jukySan.play();
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    audio_jukySan.play();
    Swal.fire({
        title: CONFIG.question,
        text: 'Do không bấm được nút kia hay là do:',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='" + CONFIG.reasonPlaceholder + "'>",
        background: `#fff url("https://data.whicdn.com/images/353109914/original.gif")    center center` ,
        backdrop: `
              rgba(0,0,123,0.4)
              url("https://bestanimations.com/uploads/gifs/1697162351rotating-red-heart-gif-animation61.gif")

               top center
              repeat
            `,
        confirmButtonColor: '#3085d6',
        confirmButtonColor: '#fe8a71',
        confirmButtonText: CONFIG.btnReply
        }).then((result) => {
            if (result.value) {
                setTimeout(()=>{
                    audio_jukySan.pause();
                },0)
                audio_justatee.play();
                Swal.fire({
                    width: 900,
                    confirmButtonText: CONFIG.btnAccept,
                    background: '#fff url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEemuTNZE7w8pIMrGqW1rncqpE8sVwHR-Cw&usqp=CAU")',
                    title: CONFIG.mess,
                    text: CONFIG.messDesc,
                    confirmButtonColor: '#83d0c9',
                    backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://cdn.dribbble.com/users/31664/screenshots/4117469/dribbble_2.gif")

                    top center
                    repeat
                    `,
                    showCancelButton: true,
                    cancelButtonText: 'Chưa đủ đô thì tiếp nào.',
                    cancelButtonColor: '#d33',
                    onClose: () => {
                        window.location = CONFIG.messLink;
                    }
                }).then(function(result){
                    if (result.isConfirmed) {
                        window.location = CONFIG.messLink;
                      } else {
                        window.location = CONFIG.step2Link;
                      }
                  })
            }
        })
    })
////Yes
}

 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}

function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    var x = Math.random() * ($(window).width() - $('#no').width()) * 0.9 ;
    var y = Math.random() * ($(window).height() - $('#no').height()) * 0.9;
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}

init()

var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " " + CONFIG.reply;
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}
// countdown

