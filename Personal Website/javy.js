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
                  "url": "pw.html"
            },
            {
                  "title": "Cover Letter",
                  "url": "pw2.html"
            },
            {
                  "title": "Resume",
                  "url": "pw3.html"
            },
            {
                  "title": "Works",
                  "url": "pw4.html"
            },
            {
                  "title": "Contact",
                  "url": "pw5.html"
            }
        ],
        "pw.html" : {
          "blocks" : [
            {
              "type" : "jumbotron",
              "heading": "Megan J. Plunkett",
              "subheading": "559.284.9740 , meganp2@icloud.com , <p> linkedin.com/in/megan-plunkett-a3a893198 </p>",
            }
          ]
        },
        "pw2.html" : {
          "blocks" : [
            {
              "type" : "jumbotron",
              "heading": "Cover Letter",
              "subheading": "A letter to you",
            }
          ]
        },
        "pw3.html" : {
          "blocks" : [
            {
              "type" : "jumbotron",
              "heading": "Resume",
              "subheading": "An Overview",
            }
          ]
        },
        "pw4.html" : {
          "blocks" : [
            {
              "type" : "jumbotron",
              "heading": "Works",
              "subheading": "List of Previous Works",
            }
          ]
        },
        "pw5.html" : {
          "blocks" : [
            {
              "type" : "jumbotron",
              "heading": "Contact page",
              "subheading": "List of Contacts",
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
    
 });