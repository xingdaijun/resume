setTimeout(function(){
  $dropdown=$(".dropdown");
  $nav=$(".nav");
  $dropdown.click(function(){
    if($dropdown.hasClass("select")){
      $dropdown.removeClass("select")
    }else{
      $dropdown.addClass("select")
    }
    if($nav.hasClass("active")){
      $nav.removeClass("active")
    }else{
      $nav.addClass("active")
    }
  })
  $li=$(".nav ul li a");
  $li.click(function(){
    $nav.removeClass("active")
  })
},1000)
