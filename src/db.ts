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
        `A service is <b>scalable</b> if it results in increased performance in a manner proportional to resources added. Generally, increasing performance means serving more units of work, but it can also be to handle larger units of work, such as when datasets grow.1
        <hr />
        Another way to look at performance vs scalability:
        <ul>
        <li>
         If you have a performance problem, your system is slow for a single user.
        </li>
        <li>
        If you have a scalability problem, your system is fast for a single user but slow under heavy load.
        </li>
        </ul>
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
        `<h3>Consistency patterns</h3>
        With multiple copies of the same data, we are faced with options on how to synchronize them so clients have a consistent view of the data. Recall the definition of consistency from the CAP theorem - Every read receives the most recent write or an error.
        
        <h4>Weak consistency</h4>
        After a write, reads may or may not see it. A best effort approach is taken.
        
        This approach is seen in systems such as memcached. Weak consistency works well in real time use cases such as VoIP, video chat, and realtime multiplayer games. For example, if you are on a phone call and lose reception for a few seconds, when you regain connection you do not hear what was spoken during connection loss.
        
        Eventual consistency
        After a write, reads will eventually see it (typically within milliseconds). Data is replicated asynchronously.
        
        This approach is seen in systems such as DNS and email. Eventual consistency works well in highly available systems.
        
        Strong consistency
        After a write, reads will see it. Data is replicated synchronously.
        
        This approach is seen in file systems and RDBMSes. Strong consistency works well in systems that need transactions.
      `,
      ],
    },
  ],
};
