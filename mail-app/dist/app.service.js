"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages/messages.service");
let AppService = class AppService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ;
    getHello() {
        return 'Hello World!';
    }
    async sendMessage(message) {
        try {
            console.log('PreSend message', message);
            const savedMessage = await this.messageService.saveMessage(message);
            console.log('message saved and sended');
        }
        catch (err) {
            console.log(err);
        }
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map