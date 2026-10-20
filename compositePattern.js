// Sabse important concept: Composite Pattern tab use hota hai jab hume individual objects aur objects ke groups ko same tarike se treat karna ho.
// Real-life example: File System — ek folder ke andar files bhi ho sakti hain aur doosre folders bhi.


// File ko open karna aur folder ko access karna alag operations hain. Lekin dono par getName() jaisa common operation call kar sakte hain.
// Composite Pattern ka goal: individual objects (File) aur groups (Folder) ko ek common interface se handle karna.


class File {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(`File: ${this.name}`);
    }
}