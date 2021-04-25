let testimonailCard = newData()
let immnuneCard = Immnune()
let doctorDetail = doctor()
let test =document.querySelector('#testimonial');
let Immunetest = document.querySelector('#immuneCard');
let doctortext = document.querySelector('#doctor');

console.log(doctorDetail)
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


// Doctor Section


let doc = ``;
for(let card of doctorDetail ){
  console.log(card)

  doc += `<div class="childDoctor col-lg-5 col-md-7 col-sm-8 mr-lg-5 ml-sm-3">
                <div>
                  <h5 class="font-weight-bold heading5 mb-4 pt-4">${card.doctor_type}</h5>
                  <img src="${card.image}" alt="" class="rounded mx-auto" >
                  <h3 class="mt-3 nameHead">${card.doctor_Name}</h3>
                  <p class="para1 mt-3">${card.doctor_position}</p>
                  <p class="para2">${card.doctor_position2}</p>
                  <div class="line"></div>
                  <div class="paraDiv">
                    <p class="doctorDesc">${card.text}</p>
                  </div>

                  <button class="btn btn-primary mt-3 mb-4 knowMore-Btn">Know More</button>
                </div>
              </div>`
}
 
doctortext.innerHTML = doc;

 

