var kafka = require("kafka-node"),
    Producer = kafka.Producer,
    client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' }),
    producer = new Producer(client);

let count = 0;

let topicsToCreate = [{
  topic: 'member-service-topic-2',
  partitions: 1,
  replicationFactor: 1
}];

client.createTopics(topicsToCreate, (err, result) => {
	console.log('createTopics');
  // result is an array of any errors if a given topic could not be created
	if (err) {
			console.log(err);
	} else {
			console.log(result);
	}
});

producer.on("ready", function () {
		console.log('ready');
    setInterval(function () {
			  let message = {
					event_type: 'delete',
					event_message: { data: 'testtest' }
        };

        let payloads = [
            { topic: "member-service-topic-2", messages: JSON.stringify(message), key: "test-key" }
        ];

        producer.send(payloads, function (err, data) {
					  if (err) {
								console.log(err);
						} else {
								console.log(data);
						}
        });

        count += 1;
        count = count % 10;
    }, 500);
});

producer.on("error", function (err) {
    console.log(err);
});
