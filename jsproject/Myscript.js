$(document).ready(function() {

          /*console.log("It works!!");
          alert("I am a popup window");

          var things = 50;
          var things2 = 5;
          console.log(things);
          console.log("The value in the things is: " + things);

          var things3 = things + things2
          console.log(things3) ;

          var things3 = things - things2
          console.log(things3) ;

          var things3 = things * things2
          console.log(things3) ;

          var things3 = things / things2
          console.log(things3) ;
          $('#heading').html('Learning JavaScript');
          $ ('#jumbo').append('<h1>This is a title</h1><p class="text-center">This is a paragraph</p>') ;
          var title = "This is a title";
          var subtitle = "This is a paragraph" ;
          $('#jumbo2').append('<h1>' +title+ '</h1><p> '+subtitle+' </p>' ) ;

          var foods = ["Pasta", "Pizza", "Burgers", "Fries", "Ice Cream"];
          console.log(foods);
          console.log(foods.length);
          console.log (foods[4]);

          for(var i = 0;      i < foods.length;       i++)

          {
            console.log(foods[i]); 
          $ ("#myfoods").append('<li>' + foods[i] + '</li>')
        }
*/

        var content = {
          "navbar": [
            {
                  "title": "Home",
                  "url": "index.html"
            },
            {
                  "title": "About Us",
                  "url": "about.html"
            },
            {
                  "title": "Our Team",
                  "url": "team.html"
            },
            {
                  "title": "Locations",
                  "url": "locations.html"
            },
            {
                  "title": "Contact Us",
                  "url": "contact.html"
            }
          ]
        }; 

        for( var i=0; i<content.navbar.length; i++){

          console.log (content.navbar[i].title+' | '+ content.navbar[i].url); 

          $("#mynav").append('<li class="nav-item"><a class="nav-link" href="'+content.navbar[i].url+'">'+ content.navbar[i].title +'</a></li>')
        }

      });