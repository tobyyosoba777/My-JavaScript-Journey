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

const circlee = createCircle();
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

const another = new Circle(1);
// Circle.name();



const shape = {
    type: function(){
        console.log("Trapezium");
    },
    color: function() { console.log("red"); },
    dimension: 3,
    createShape: function() {
        for(i=0; i <= this.dimension; i++) {
            console.log(i);
        }
    },

    deleteShape: function() {
        for (i= this.dimension; i >= 0; i--) {
            console.log(i);
        };
    }
};

shape.type();
shape.deleteShape();



const shapeNew = {
    type: function() {
        console.log("Rhombus");
    },
    color: function() {console.log("Blue"); },
    dimensions: 4,
    drawShape: function() {
        for(i=1; i<=this.dimensions; i++) {
            console.log(i);
        }
    },

    deleteShape: function() {
        for(i=this.dimensions; i >= 1; i--) {
            console.log(i);
        }
    }
}
shapeNew.type();
shapeNew.color();
shapeNew.drawShape();
shapeNew.deleteShape();






const drive = {
    make: function() {
        console.log("Intel")
    },
    driveType: function() {
        console.log("SSD")
    },
    storageCapactity: function() {console.log("180gb")},
    dimension: 4,
    drawDrive: function() {
        for(i=0; i<=this.dimension; i++) {
            console.log(i)
        }
    },

    deleteDrive: function() {
        for (i=this.dimension; i<=0; i--) {
            console.log(i)
        }
    }
}


drive.make();
drive.driveType();
drive.storageCapactity();
drive.drawDrive();
// drive.dimension(); wont work because it was not given a console.log() function



const laptop = {
    make: function (){
        console.log('HP');
    },
    year: function () {
        console.log(2013);
    },
    type: function() {console.log('Elitebook');},
    model: function() {console.log('8470p');},
    displayDriver: function() {
        console.log('Intel HD Graphics 4000');
    },
    ramDetails: function() {
        console.log('Samsung and Hynix 8GB');
    },
    cpu: function() {
        console.log('Intel(R) Core(TM) i5-3210M CPU @ 2.50GHz   2.50 GHz');
    },
    hardDisk: function() {
        console.log('167gb Intel SSD');
    }
};
laptop.year();
laptop.make();
laptop.type();
laptop.model();
laptop.cpu();
laptop.hardDisk();










