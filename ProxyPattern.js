// "Proxy is a structural design pattern where a substitute object controls access to a real object. 
// The client interacts with the proxy instead of directly accessing the real object. T
// he proxy can provide additional functionality such as access control, lazy loading, caching, logging, or remote access."



class RealImage {

    constructor(filename) {
        this.filename = filename;
        this.loadFromServer();
    }

    loadFromServer() {
        console.log(`Loading ${this.filename} from server...`);
    }

    display() {
        console.log(`Displaying ${this.filename}`);
    }
}

class ImageProxy {

    constructor(filename) {
        this.filename = filename;
        this.realImage = null;
    }

    display() {

        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }

        this.realImage.display();
    }
}

const image = new ImageProxy("photo.jpg");
image.display();


// const image = new RealImage("test_10mb.jpg");




// first time

// User
//  ↓
// ImageProxy.display()
//  ↓
// RealImage doesn't exist
//  ↓
// Create RealImage
//  ↓
// Load image from server
//  ↓
// "Loading photo.jpg from server..."
//  ↓
// Display image
//  ↓
// "Displaying photo.jpg"


// second time

// User
//  ↓
// ImageProxy.display()
//  ↓
// RealImage already exists
//  ↓
// Don't load again
//  ↓
// "Displaying photo.jpg"