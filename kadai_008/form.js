$(function(){
  // ボタンがクリックされたら
  $('.btn').on('click',function(){
  // valメソッドで.text-boxを取得、その後の処理を記述
    $('.text-box').val('クリックしました!');
  // コンソールに出力
    console.log($('.text-box').val());
  });
});