var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092,127.0.0.1:9093,127.0.0.1:9094'}),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),
    payloads = [
        { topic: 'topic-test', messages: 'hi', partition: 0 },
        { topic: 'topic-test', messages: ['hello', 'world', km] }
    ];

producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});

producer.on('error', function (err) {
    console.log(err);
})