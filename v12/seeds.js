var mongoose = require("mongoose"),
Campground = require("./models/campground"),
Comment = require("./models/comment");

var data = [
        {
            name: "Mount Shasta",
            image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est eros, tempus vel pulvinar id, pulvinar commodo lacus. Quisque neque est, cursus ut massa eget, tincidunt convallis erat. Integer fermentum rhoncus vestibulum. Ut condimentum risus facilisis, porta lacus auctor, fringilla magna. Phasellus eu dui id sem tempus commodo. Donec pulvinar ullamcorper erat id euismod. Sed vitae malesuada lectus. Fusce vitae metus vitae ex facilisis pharetra. Nulla rutrum sem ac massa ultricies venenatis."
        },
        {
            name: "Leh Ladakh",
            image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est eros, tempus vel pulvinar id, pulvinar commodo lacus. Quisque neque est, cursus ut massa eget, tincidunt convallis erat. Integer fermentum rhoncus vestibulum. Ut condimentum risus facilisis, porta lacus auctor, fringilla magna. Phasellus eu dui id sem tempus commodo. Donec pulvinar ullamcorper erat id euismod. Sed vitae malesuada lectus. Fusce vitae metus vitae ex facilisis pharetra. Nulla rutrum sem ac massa ultricies venenatis."
        },        
        {
            name: "Clouds Rest",
            image: "https://farm4.staticflickr.com/3881/14146164489_0cb49d2904.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est eros, tempus vel pulvinar id, pulvinar commodo lacus. Quisque neque est, cursus ut massa eget, tincidunt convallis erat. Integer fermentum rhoncus vestibulum. Ut condimentum risus facilisis, porta lacus auctor, fringilla magna. Phasellus eu dui id sem tempus commodo. Donec pulvinar ullamcorper erat id euismod. Sed vitae malesuada lectus. Fusce vitae metus vitae ex facilisis pharetra. Nulla rutrum sem ac massa ultricies venenatis."
        }
    ];

function seedDB(){
    // Remove Campgrounds
    Campground.remove({}, function(err){
        if (err){
            console.log(err);
        }
        console.log("Campgrounds removed");
        
        // Add Campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Campground added");
                    
                    Comment.create({
                            text: "This place is great but I wish there was internet.",
                            author: "Sachin"
                    }, 
                    function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Comment Added");
                        }
                    });
                }
            });
        });
    });
    
    // Add few comments

}

module.exports = seedDB;