// This document.ready isn't necessary in this example... but is needed in cases where the HTML is complex.
    // This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
    // It's useful to become familiar with now.

    $(document).ready(function() {


// FUNCTIONS
      // ====================================================================
      // Here we create various "on click" events which capture clicks
      // Inside each click event is the code to create an alert, update the counter, and show the updated count.
      // Take note that you can chain events onto an element
      // With this even if our ids are created at a later date our events will still always work
      $("#Choosen").on("click", function() {

        alert("Mmm... Peanut Butter Jelly Time.");
        pbjCounter++;
        alert("You've eaten " + pbjCounter + " PB&J sandwiches");


      });
      $("#grilledcheese").on("click", function() {

        alert("Nom nom nom. Gooey Gooey Grilled Cheese!");
        grilledCheeseCounter++;
        alert("You've eaten " + grilledCheeseCounter + " grilled cheese sandwiches");


      });
      $("#roastbeef").on("click", function() {

        alert("No qualms about animal rights here. I'm all about that roast beef.");
        roastBeefCounter++;
        alert("You've eaten " + roastBeefCounter + " roast beef sandwiches");


      });