$(function(){
var count = 0;
$("#btn").click(function(){
  count++;
  $('#counter').val(count);
})
$("#btn2").click(function(){
  count--;
  $('#counter').val(count);
})
})
