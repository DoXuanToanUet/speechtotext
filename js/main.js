
// tippy('[data-tippy-content]');
window.addEventListener('DOMContentLoaded', (event) => {
    tippy('.tt-tooltip', {
        animation: 'scale-extreme'
    });

    // Download txt 
    function newFilename(){
        function e(e) {
            return ("0" + e).slice(-2);
        }
        var t = new Date();
        return "SpeechTexter_" + e(t.getHours()) + e(t.getMinutes()) + e(t.getSeconds());
    }
    txt= document.querySelector(".tt-downloadtxt");
    data= document.querySelector(".data");
    doc = document.querySelector('.tt-downloaddoc');
   
    console.log(data.innerHTML);
    txt.addEventListener('click', function(){
        var content = tinymce.get("data-mce").getContent();
         data.innerHTML = content;
        var e = data.innerText,
        t = new Blob([e], { type: "text/plain;charset=utf-8" }),
        n = newFilename() + ".txt";
        saveAs(t, n);
    })

    // Download doc
    doc.addEventListener("click", function(){
        var content = tinymce.get("data-mce").getContent();
        data.innerHTML = content;
        var e = newFilename() + ".doc",
        t =
            "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>" +
            data.innerHTML +
            "</body></html>",
        n = new Blob(["\ufeff", t], { type: "application/msword" }),
        a = "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(t),
        o = document.createElement("a");
        o.className = "download-doc";
    document.body.appendChild(o), navigator.msSaveOrOpenBlob ? navigator.msSaveOrOpenBlob(n, e) : ((o.href = a), (o.download = e), o.click()), document.body.removeChild(o);
    })
       
    // Record js
    // const record = document.querySelector(".tt-record");
    try {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
    } catch (e) {
        console.error(e);
        $('.no-browser-support').toggleClass("support");
        $('.tt-content').hide();
    }
    var noteContent="";
    var instructions = $('#recording-instructions');
    recognition.continuous = true;
    recognition.onresult = function(event) {

        // event is a SpeechRecognitionEvent object.
        // It holds all the lines we have captured so far. 
        // We only need the current one.
        var current = event.resultIndex;
    
        // Get a transcript of what was said.
        var transcript = event.results[current][0].transcript;
    
        // Add the current transcript to the contents of our Note.
        // There is a weird bug on mobile, where everything is repeated twice.
        // There is no official solution so far so we have to handle an edge case.
        var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
    
        if (!mobileRepeatBug) {
            noteContent += transcript;
            tinymce.get("data-mce").setContent(noteContent)
        }
    };
    
    recognition.onstart = function() {
        instructions.html("<p class='btn-info'>Đang ghi âm, bạn hãy nói gì đó</p>");
        setTimeout(function (){
            instructions.html("");
        },2000)
        
       
    }
    
    recognition.onspeechend = function() {
        instructions.html("<p class='btn-info'>Bạn đã im lặng 1 lúc nên sẽ tự động bị tắt</p>");
        setTimeout(function (){
            instructions.html("");
        },2000)
        

    }
    
    recognition.onerror = function(event) {
        if (event.error == 'no-speech') {
            instructions.html("<p class='btn-info'>Bạn đã không nói gì. Vui lòng thử lại</p>");
            setTimeout(function (){
                instructions.html("");
            },2000)
        };
    }
    $('.tt-record').on('click', function(e) {
        if (noteContent.length) {
            noteContent += ' ';
        }
        recognition.start();
    });
    
    $('.tt-pause').on('click', function(e) {
        recognition.stop();
        instructions.html("<p class='btn-info'>Bạn đã tạm dừng ghi âm</p>");
        setTimeout(function (){
            instructions.html("");
        },2000)
    });
   
    // tinymce.get("data-mce").setContent(setdata)
    $('.tt-download').click(function (){
       $(".tt-download-content").toggle();
    })
});
    

