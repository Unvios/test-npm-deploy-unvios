import { Injectable } from "@nestjs/common";

@Injectable()
export class TestClass {
    public getMessage () {
        return "Message from test service"
    }
}