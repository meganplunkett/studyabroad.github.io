$(document).ready(function() {

    function jumbotron(data){
      var htmlcode = '<div class= "jumbotron">' +
      '<div class= "container">' +
      '<h1>'+ data.heading +'</h1>' +
      '<p>'+ data.subheading +'</p>' +
      '</div>' +
    '</div>' ;
      $("#main").append(htmlcode)
    };

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
        ],
        "index.html" : {
          "blocks" : [
            {
              "type" : "jumbotron",
              "heading": "Index page",
              "subheading": "This is our Index page",
            }
          ]
        },
        "about.html" : {
          "blocks" : [
            {
              "type" : "jumbotron",
              "heading": "About page",
              "subheading": "This is our About page",
            }
          ]
        },
        "team.html" : {
          "blocks" : [
            {
              "type" : "jumbotron",
              "heading": "Team page",
              "subheading": "This is our Team page",
            }
          ]
        },
        "locations.html" : {
          "blocks" : [
            {
              "type" : "jumbotron",
              "heading": "Locations page",
              "subheading": "This is our Locations page",
            }
          ]
        },
        "contact.html" : {
          "blocks" : [
            {
              "type" : "jumbotron",
              "heading": "This is our Contact page",
              "subheading": "This is our Contact page",
            }
          ] 
        },
}


for(var i=0; i<content.navbar.length; i++){

      console.log (content.navbar[i].title+' | '+ content.navbar[i].url); 

      $("#mynav").append('<li class="nav-item"><a class="nav-link" href="'+content.navbar[i].url+'">'+ content.navbar[i].title +'</a></li>')
      }

      



console.log(window.location);
console.log(window.location.pathname);
var pagefile = window.location.pathname.split ("/").pop();
console.log(pagefile);
//jumbotron();
/*if (content[pagefile] != ""){*/

var blocks = content[pagefile].blocks;
console.log(blocks);
for(var i=0; i<blocks.length; i++){
    if(blocks[i].type == 'jumbotron') {

       jumbotron(blocks[i]); 
    }
}

  $.ajax({
    url: 'https://randomuser.me/api/?results=20',
    dataType: 'json',
    success: function(data){
      console.log(data);
      for (var i = 0; i<20; i++) {
        var firstname = data.results[i].name.first
        var lastname = data.results[i].name.last 
        var mediumpicture = data.results[i].picture.medium 
        var nat = data.results[i].nat.toLowerCase()
      $("#users").append('<div class="col-md-2"> <img src="'+mediumpicture+'" class="fluid rounded-circle"> <p> '+ firstname +' '+lastname +' </p> <p> <span class="flag-icon flag-icon-'+nat+' "></span> </p> <p> <i class="fab fa-facebook"></i> <i class="fab fa-twitter"></i> <i class="fab fa-instagram"></i> </p> </div>');
    }
  }
  });


 });



