let testimonailCard = newData()
let immnuneCard = Immnune()
let test =document.querySelector('#testimonial');
let Immunetest = document.querySelector('#immuneCard')

$ ( `#marrowTransplant` )
  .click ( () => {
    $ ( `#marrowTransplantDesc` )
      .toggle ();
  } );
// Testimonial
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

let testimonail = ``;
for(let card of testimonailCard){
 
  testimonail += `<div class="carousel-item col-md-4 ${card.active}">
                    <div class="card">
                      <div class="mt-3">
                        <img class="card-img-top img-fluid float-left ml-3 mt-3 mr-1" src="${card.image}" alt="Card image cap" id="logoImg" />
                        <div class="mt-3 container-fluid">
                          <h4 class="m-0 font-weight-bold">${card.First_Name}</h4>
                          <p class="m-0">${card.department}</p>
                        </div>
                      </div>

                      <div class="card-body">
                        <p class="card-text">
                         ${card.text}
                        </p>
                      </div>
                    </div>
                  </div>`
}
test.innerHTML = testimonail;


 // Immune deficiency


let immune = ``;
for(let card of immnuneCard)
{
  immune += `<div class="warningSigns col-lg-2 col-md-3 col-sm-4 mr-lg-4 mr-md-3 mr-sm-3">
                  <img src="${card. image}" alt="Card image cap" class = "mt-4 mb-2" />
                  <p class = "mt-2">${card.text}</p>
                </div>`
}

Immunetest.innerHTML = immune;