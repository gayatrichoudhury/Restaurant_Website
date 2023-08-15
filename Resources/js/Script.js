$(document).ready(function(){
    /* for the Sticky Navigation */
    $('js--section-features').waypoint(function(direction){
        if(direction == "down")
            {
                $('nav').addClass('sticky');
            }
        else{
            $('nav').removeClass('sticky');
        }
        
    });
    
    /* Scroll buttons */
    $('js--section-features').animate(function(){
        $('html''body').animate({scrollTop: $('.js--section-plans').offset().top},1000)
    });
        
    });
   
    
    
