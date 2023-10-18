//If a function is part of an object, it becomes a method in an object
//this references the whole object itself

//method -> object
//function -> global (Window, global);

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

// video.stop = function() {
//     console.log(this);
// }
// video.play();


video.showTags();


