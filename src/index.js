import Collection from "lk-collection";
import dotenv from "dotenv";

dotenv.load();

var Notifications = new Collection({
    name: "notifications",
    kinesisStreamName: process.env.KINESIS_STREAM_NAME
});

export var handler = Notifications.jsonRpcToKinesis;
