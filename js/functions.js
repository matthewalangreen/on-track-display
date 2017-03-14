$(document).ready(function() {
    $.ajax({
        url : "data/names.json",
        dataType: "json",
        success : function (data) {
          var res = "";
          for (var i = 0; i < data.length; i++) {
            res = res + data[i][0]+" "+data[i][1]+",";
          }
          $(".text").html(res);
        }
    });
});