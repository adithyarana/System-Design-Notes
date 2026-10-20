// 1. Observer
// Pehle user ka class:

class user {

    constructor(name) {
        this.name = name;
    }

    update(vedio) {
        console.log(`${this.name} recived notification:${vedio}`)

    }
}



// Subject ke responsibilities:
class youtubechannel {

    constructor() {
        this.subscribers = []
    }


    subscriber(user) {
        this.subscribers.push(user)
    }

    unsubscribers(user) {
        this.subscribers = this.subscribers.filter(
            subscribers => subscribers !== user
        )
    }

    uploadvedio(vedio) {
        console.log(`New video uploaded: ${vedio}`);

        this.notify(vedio)
    }

    notify(vedio) {
        this.subscribers.forEach(user => {
            user.update(vedio)

        });
    }
}



const channel = new youtubechannel();

const adithya = new user("aditjhya")
const akshay = new user("akshay")


channel.subscriber(adithya)
channel.subscriber(akshay)


channel.unsubscribers(akshay)



channel.uploadvedio(
    "Observer Design Pattern Explained"
);



//                  SUBJECT
//             YouTubeChannel
//                   │
//           subscribers[]
//                   │
//        ┌──────────┼──────────┐
//        ↓          ↓          ↓
//      User       User       User
//    Observer    Observer    Observer
//        │          │          │
//     update()   update()   update()