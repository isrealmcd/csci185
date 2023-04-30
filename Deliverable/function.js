$(document).ready(function() {
    var textArray = ["• Coach Sol is a record holding D1 track athlete from Central NC", "• Currently the 2022-2023 UNCA Track Team -Field- Captain", "• He holds multiple facility records as well as the winning 2023 indoor NCAA Mens Shot-put Big South Championship", "• Sol has been throwing for almost a decade and has coached people of all ages and backgrounds<", "• Currently Ranked top 100 in the world for Mens Shot-put", "• Ranked number 4 in New Zealand where he holds dual citizenship, he currently has a PR of 18.46m"];
    var index = 0;
    setInterval(function() {
      $("#text").fadeOut(2000, function() {
        $(this).text(textArray[index]);
      }).fadeIn(2000);
      index = (index + 1) % textArray.length;
    }, 2000);
  });