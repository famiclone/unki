export default {
  decks: [
    {
      id: 1,
      name: 'Algorithms + Data structures',
    },
  ],

  cards: [
    {
      id: 1,
      deckId: 1,
      level: 0,
      content: [
        'Array',
        `In programming, a list of data values, all of the same type, any element of which can be referenced by an expression consisting of the array name followed by an indexing expression. Arrays are part of the fundamentals of data structures, which, in turn, are a major fundamental of computer programming
      <code-block lang="js">
 const array = [1, 2, 3, 4, 5];
 let array2 = [];
      </code-block>
      `,
      ],
    },
    {
      id: 2,
      deckId: 1,
      level: 0,
      content: [
        'Algorithm',
        'A computable set of steps to achieve a desired result.',
      ],
    },
    {
      id: 3,
      deckId: 1,
      level: 0,
      content: [
        'Linked list',
        'A data structure in which a list of nodes or elements of a data structure connected by pointers. A singly linked list has one pointer in each node pointing to the next node in the list; a doubly linked list has two pointers in each node pointing to the next and previous nodes. In a circular list, the first and last nodes of the list are linked together.',
      ],
    },
  ],
};
