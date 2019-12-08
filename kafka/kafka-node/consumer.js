var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092,127.0.0.1:9093,127.0.0.1:9094'}),
    consumer = new Consumer(
        client,
        [
            { topic: 'topic-test', partition: 0 }
        ]
    );
    consumer.on('message', function (message) {
        console.log(message);
    });