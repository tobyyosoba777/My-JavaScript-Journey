// console.log('hello world');

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

const circle1 = {
    radius: 1,
    location: 1,
    draw: function() {
        console.log("Circle drawn");
    },
    erase: function() {
        console.log("undo Circle Initiated");
    },
    redraw: function() {
        console.log("redo circle Initiated");
    }
};

circle1.redraw();
circle1.erase();





let square = {
    length: 5,
    width: 5,
    location: {
        y_axis: 25,
        x_axis: 40
    },
    draw: function() {
        console.log("Square Drawn");
    },
    delete: function() {
        console.log("Square Deleted");
    }
};

square.delete();
square.draw();





const car = {
    title: "Lamborghini",
    year: 2019,
    model: "Aventador",
    start_engine: function() {
        console.log("Car Started");
    },
    stop_engine: function() {
        console.log("Engine Stopped");
    },
    return_location: function(){
        console.log("Car Location: Milan, Italy")
    }
};

car.return_location();
car.start_engine();


// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("Draw");
        }
    };
}

const circlee = createCircle(1);
circlee.draw();



//Constructor Function
function Circle(radius) {
    console.log("this", this);
    this.radius = radius;
    this.draw = function() {
        console.log('Drawn Circle');
    }
}

//Removing new makes it a Global Object also known as the window object and defining global variables is a bad practice that can mess up our code
// Adding the new keyword when running the function makes it a local object

const another =  Circle(1);










