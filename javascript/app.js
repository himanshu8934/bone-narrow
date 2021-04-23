$ ( `#marrowTransplant` )
  .click ( () => {
    $ ( `#marrowTransplantDesc` )
      .toggle ();
  } );

  $ ( document )
  .ready ( () => {
    $ ( `#myCarousel` )
      .on ( `slide.bs.carousel`, function ( e ) {
        var $e = $ ( e.relatedTarget ),
            idx = $e.index (),
            itemsPerSlide = 3,
            totalItems = $ ( `.carousel-item` ).length;

        if ( idx >= totalItems - ( itemsPerSlide - 1 ) ) {
          var it = itemsPerSlide - ( totalItems - idx );

          for ( var i = 0; i < it; i++ ) {
            // append slides to end
            if ( e.direction == `left` ) {
              $ ( `.carousel-item` )
                .eq ( i )
                .appendTo ( `.carousel-inner` );
            } else {
              $ ( `.carousel-item` )
                .eq ( 0 )
                .appendTo ( $ ( this )
                  .find ( `.carousel-inner` ) );
            }
          }
        }
      } );
  } );