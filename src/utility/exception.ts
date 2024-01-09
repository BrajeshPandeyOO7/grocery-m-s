class BadRequestException extends Error {
    statusCode;
    constructor(message:string) {
        super(message);
        this.statusCode = 400;
    }
}

class NotFoundException extends Error {
    statusCode;
    constructor(message:string) {
        super(message);
        this.statusCode = 404;
    }
}