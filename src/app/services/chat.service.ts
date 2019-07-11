import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

export class ChatService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message) {
        this.socket.emit('new-message', message);
    }

    public sendVideo(message) {
        this.socket.emit('new-video', message);
    }

    public playVideo(message) {
        this.socket.emit('play-video', message);
    }

    public pauseVideo(message) {
        this.socket.emit('pause-video', message);
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('new-message', (message) => {
                observer.next(message);
            });
        });
    }

    public getVideos = () => {
        return Observable.create((observer) => {
            this.socket.on('new-video', (message) => {
                observer.next(message);
            });
        });
    }

    public playVideos = () => {
        return Observable.create((observer) => {
            this.socket.on('play-video', (message) => {
                observer.next(message);
            });
        });
    }

    public pauseVideos = () => {
        return Observable.create((observer) => {
            this.socket.on('pause-video', (message) => {
                observer.next(message);
            });
        });
    }
}