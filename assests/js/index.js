//To display the current date in the header
let currentDate = moment().format("dddd , MMMM Do");
$("#currentDay").text(currentDate);


//Function to create dynamic html page for the planner application
$(function(){
    //storing the current hour
    const currentHour =  moment().format("H");
    let timeTense = "";
    let loopTime;

    //For loop for generating the timeslot 
    for (let i = 9; i < 18; i++) {
        loopTime = moment(i,"H").format("ha");
              
        //For finding the present,past, future timeline
        if(i == currentHour){
            timeTense = "present";
        }
        else if(i < currentHour){
            timeTense = "past";
        }
        else{
            timeTense = "future";
        }

        //Based on past, present or future the corresponding classes are added to the div tag
       if(timeTense === "present"){
            let timeStamp = `<div class="row">
                            <div class="col-2 hour">${loopTime}</div>
                            <textarea class="col-8 textArea present" id="${loopTime}" data-tense="${timeTense}"></textarea>
                            <button class="col-2 saveBtn" id="${moment(i,"H").format("h")}" data-time="${loopTime}"><i class="fas fa-save"></i></button>
                            </div>`;
            $(".container").append(timeStamp);
       }
       else if(timeTense === "past"){
            let timeStamp = `<div class="row">
                            <div class="col-2 hour">${loopTime}</div>
                            <textarea class="col-8 textArea past" id="${loopTime}" data-tense="${timeTense}" ></textarea>
                            <button class="col-2 saveBtn" id="${moment(i,"H").format("h")}" data-time="${loopTime}"><i class="fas fa-save"></i></button>
                            </div>`;
            $(".container").append(timeStamp);
       }
       else{
            let timeStamp = `<div class="row">
                            <div class="col-2 hour">${loopTime}</div>
                            <textarea class="col-8 textArea future" id="${loopTime}" data-tense="${timeTense}" ></textarea>
                            <button class="col-2 saveBtn" id="${moment(i,"H").format("h")}" data-time="${loopTime}"><i class="fas fa-save"></i></button>
                            </div>`;
            $(".container").append(timeStamp);
       }
    }
});


// //To store the values in the textarea using local storage
// $(document).on('click', '.saveBtn', function(event) {
//     let eventItem = $(event.target).siblings("textarea").val();
//     let eventTime = $(event.target).attr("data-time");
//     console.log(eventItem);
//     console.log(eventTime)
//     localStorage.setItem(eventTime,eventItem);

//  });

//  //To retain the textarea details after refresh. Getting dettails from local storage
//  $(window).on('load', function(){
//     console.log("inside refresh")
//     console.log(localStorage.getItem("9am"));
//     console.log(localStorage.getItem("10am"));
//     $("textarea").val("tets");
//     $("#9am").val(localStorage.getItem("9am"));
//     $("#10am").val(localStorage.getItem("10am"));
//     $("#11am").val(localStorage.getItem("11am"));
//     $("#12pm").val(localStorage.getItem("12pm"));
//     $("#1pm").val(localStorage.getItem("1pm"));
//     $("#2pm").val(localStorage.getItem("2pm"));
//     $("#3pm").val(localStorage.getItem("3pm"));
//     $("#4pm").val(localStorage.getItem("4pm"));
//     $("#5pm").val(localStorage.getItem("5pm"));
// });


$(window).on('load', function() {
    console.log((localStorage.getItem("9am")))
    $("#9").on("click", function() {
        localStorage.setItem("9am", $("#9am").val())
    })
    $("#9am").val(localStorage.getItem("9am"))
  
    console.log((localStorage.getItem("10am")))
    $("#10").on("click", function() {
        localStorage.setItem("10am", $("#10am").val())
    })
    $("#10am").text(localStorage.getItem("10am"))
  
    console.log((localStorage.getItem("11am")))
    $("#11").on("click", function() {
        localStorage.setItem("11am", $("#11am").val())
    })
    $("#11am").text(localStorage.getItem("11am"))
  
    $("#12").on("click", function() {
        localStorage.setItem("12pm", $("#12pm").val())
    })
    $("#12pm").text(localStorage.getItem("12pm"))
  
    $("#1").on("click", function() {
        localStorage.setItem("1pm", $("#1pm").val())
    })
    $("#1pm").text(localStorage.getItem("1pm"))
  
    $("#2").on("click", function() {
        localStorage.setItem("2pm", $("#2pm").val())
    })
    $("#2pm").text(localStorage.getItem("2pm"))
  
    $("#3").on("click", function() {
        localStorage.setItem("3pm", $("#3pm").val())
    })
    $("#3pm").text(localStorage.getItem("3pm"))
  
    $("#4").on("click", function() {
        localStorage.setItem("4pm", $("#4pm").val())
    })
    $("#4pm").text(localStorage.getItem("4pm"))
  
    $("#5").on("click", function() {
        localStorage.setItem("5pm", $("#5pm").val())
    })
    $("#5pm").text(localStorage.getItem("5pm"))
    
  })










