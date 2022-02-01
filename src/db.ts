export default {
  decks: [
    {
      id: 1,
      name: 'Algorithms + Data structures',
    },
    {
      id: 2,
      name: 'System design',
    },
  ],

  cards: [
    {
      id: 1,
      deck: {
        id: 1,
        name: 'System design',
      },
      level: 0,
      content: [
        'Performance vs scalability',
        `A service is scalable if it results in increased performance in a manner proportional to resources added. Generally, increasing performance means serving more units of work, but it can also be to handle larger units of work, such as when datasets grow.1
      `,
      ],
    },
    {
      id: 2,
      deck: {
        id: 1,
        name: 'System design',
      },
      level: 0,
      content: [
        'Latency vs throughput',
        `Latency is the time to perform some action or to produce some result.

        Throughput is the number of such actions or results per unit of time.
        
        Generally, you should aim for maximal throughput with acceptable latency.
      `,
      ],
    },
    {
      id: 3,
      deck: {
        id: 1,
        name: 'System design',
      },
      level: 0,
      content: [
        'Consistency patterns',
        `With multiple copies of the same data, we are faced with options on how to synchronize them so clients have a consistent view of the data. Recall the definition of consistency from the CAP theorem - Every read receives the most recent write or an error.
      `,
      ],
    },
  ],
};
