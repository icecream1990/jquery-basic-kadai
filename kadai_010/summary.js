$(function(){
  $('#change-color').on({
    'click':()=>{
      $('#target').css('color','red');
      console.log("文字を赤に変更");
    },
  });
});

$(function(){
  $('#change-text').on('click',function(){
    $('#target').text('こんばんは!');
    console.log("テキストを変更");
  });
});

$(function(){
  $('#fade-out').on('click',function(){
    $('#target').fadeOut(1000,function(){
      alert('fadeOut完了');
    });
    console.log("fadeOut完了");
  });
});

$(function(){
  $('#fade-in').on('click',function(){
    $('#target').fadeIn(1000,function(){
      alert('fadeIn完了');
    });
    console.log("fadeIn完了");
  });
});