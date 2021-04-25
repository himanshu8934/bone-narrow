let testimonailCard = newData()
let immnuneCard = Immnune()
let doctorDetail = doctor()
let test =document.querySelector('#testimonial');
let Immunetest = document.querySelector('#immuneCard');
let doctortext = document.querySelector('#doctor');
let toggleCard = toggleMethod()
let tog = document.querySelector('#mainToggle');
let BoneNarrow = BoneNarrowText()
let boneMarroType =document.querySelector('#boneMarroType');


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

 


// Form Validation

let validateForm = () => {
  let validate = userName() && Email() && number() && message();
          
  if(validate){
    alert('Submitted Successfully')
    return true;
  }
  else{
    return false;
  }
}

// userName validation
let userName = () =>{
  let user = document.querySelector('#name');
  if(user.value ===''){
    errorMsg('Name is Requried');
    color(user,'orangered')

    return false
  }
  else{
    color(user,'limegreen');
    return true
  }
}

// Email Address
let Email = () =>{
  let email = document.querySelector('#email');
  if(email.value ===''){
    errorMsg('Email is Requried');
    color(email,'orangered')

    return false
  }
  else{
    color(email,'limegreen');
    return true
  }
}

// Number
let number = () =>{
  let number = document.querySelector('#number');
  if(number.value ===''){
    errorMsg('Number is Requried');
    color(number,'orangered')

    return false
  }
  else{
    if(number.value.length == 10){
       color(number,'limegreen');
    return true
    }
    else{
      errorMsg('Enter max length:10');
      return false
    }
   
  }
}

// Text area

let message = () =>{
  let message = document.querySelector('#msg');
  if(message.value ===''){
    errorMsg('Message is Requried');
    color(message,'orangered')

    return false
  }
  else{
    color(message,'limegreen');
    return true
  }
}




//apply color

let color = (name,colors) =>{
  name.style.color = colors;
  name.style.boxShadow = `0 0 10px ${colors}`
}

// error Msg

let errorMsg = (message) => {
  let error = document.querySelector('#error-msg');
  let heading = document.createElement("h3");
  heading.innerText = message;
  error.appendChild(heading);
  setTimeout(remove,2000)
}

// remove Function

let remove = () =>{
  document.querySelector('#error-msg').remove();
}


// Toggle

      let toggleTest = ``;
      for(let tog of toggleCard){
        toggleTest+=` <div class="marrowTransplant dropdowmPara mt-5">
                <p class="marrowParagraph"  id="bone${tog.id}">
                  ${tog.title}
                  <span class="float-right"><img src="image/invertedTriangle.png" alt="" id="image${tog.id}" /></span>
                </p>
              </div>
              <div class="marrowTransplantDesc mt-5" id="content${tog.id}">
                <div class="d-flex mt-5">
                  <span><img src="image/double-tick-indicator.png" alt="" class="mr-4" ></span>
                  <p class="text-justify">${tog.content1}</p>
                </div>
                <div class="d-flex">
                  <span><img src="image/double-tick-indicator.png" alt="" class="mr-4"></span>
                  <p class="text-justify">${tog.content2}</p>
                </div>
              </div>
              <hr />`
      }


      tog.innerHTML = toggleTest; 

    $ ( `.marrowTransplantDesc` ).hide();
      tog.addEventListener('click', doSomething)
      
     
 function doSomething(e){
        if(e.target !== e.currentTarget){
          var clickItem = e.target.id;
          toggleCard.map((e)=>{
         
          
           if(`bone${e.id}` === clickItem || `image${e.id}` === clickItem ){
            $(`#content${e.id}`).toggle()

            
           }
          
          })
         
          
        }
      }



let bone = ``;
for(let card of BoneNarrow){
 
  bone += `<div class="row">
  <div class="col-0">
    <img src="image/plusLogo.png" alt="" />
  </div>
  <div class="col-11">
    <p>${card.content}</p>
  </div>
</div>`
}
boneMarroType.innerHTML = bone;

      