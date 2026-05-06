
export const seedData = {
  id: 123,
  version: '1.0',
  allExercises: [
    {
      "id": "let-section-101",
      "title": "LET",
      "videoID": "05",
      "questions": [
        {
          "id": "q-let-001",
          "title": "Default value of let",
          "question": "let score;\nconsole.log(score);",
          "options": [
            { "id": "opt-1", "option": "a", "text": "null", "correct": false, "selected": false },
            { "id": "opt-2", "option": "b", "text": "undefined", "correct": true, "selected": false },
            { "id": "opt-3", "option": "c", "text": "ReferenceError", "correct": false, "selected": false },
            { "id": "opt-4", "option": "d", "text": "0", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-let-002",
          "title": "Reassigning values",
          "question": "let city = 'New York';\ncity = 'Berlin';\nconsole.log(city);",
          "options": [
            { "id": "opt-5", "option": "a", "text": "New York", "correct": false, "selected": false },
            { "id": "opt-6", "option": "b", "text": "Error: Assignment to constant variable", "correct": false, "selected": false },
            { "id": "opt-7", "option": "c", "text": "Berlin", "correct": true, "selected": false },
            { "id": "opt-8", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-let-001",
          "title": "Declare and Initialize",
          "description": "Create a variable named %message% using %let% and assign it the value %'Hello'%. On the next line, change its value to %'Bye'%.",
          "example": "%console.log(message)% → %Bye%",
          "note": "implement in your editor / console",
          "solution": "let message = 'Hello';\nmessage = 'Bye';"
        },
        {
          "id": "task-let-002",
          "title": "Late Assignment",
          "description": "Declare a variable named %price% using %let% without assigning it a value. Then, on a new line, assign it the number %100%.",
          "example": "%console.log(price)% → %100%",
          "note": "implement in your editor / console",
          "solution": "let price;\nprice = 100;"
        }
      ]
    },
    {
      id: '9012315132432143210296812903810',
      title: 'aaaaaaaaaa',
      questions: [
        {
          id: '4123',
          title: 'aaaaaaa',
          question: "console.log(myVar);\nvar myVar = 5;\nconsole.log(myVar);",
          options: [
            { id: '21412323412341', option: 'a', text: 'undefined then 5', correct: true, selected: false },
            { id: '21431523412341', option: 'b', text: 'ReferenceError', correct: false, selected: false },
            { id: '21431234124141', option: 'c', text: '5 then 5', correct: false, selected: false },
            { id: '21431255555341', option: 'd', text: 'null then 5', correct: false, selected: false },
          ],
          correctAnswer: 'c'
        },
        {
          id: '9810283521342140229839221',
          title: 'Temporal dead zone',
          question: "console.log(a);\nlet a = 10;",
          options: [
            { id: '22212323412341', option: 'a', text: 'undefined', correct: false, selected: false },
            { id: '21412323417741', option: 'b', text: '10', correct: false, selected: false },
            { id: '21411123412341', option: 'c', text: 'ReferenceError', correct: true, selected: false },
            { id: '21412443412341', option: 'd', text: 'null', correct: false, selected: false },
          ],
          correctAnswer: 'c'
        },
      ],
      tasks: [
        {
          id: '901482f0aj9253214241971290h',
          title: "Reverse a string",
          description: "Write a function %reverseString(str)% that takes a string and returns it reversed.",
          example: '%reverseString("hello")% → %"olleh"%',
          note: "implement in your editor / console",
          solution: "const reverseString = str => str.split('').reverse().join('');"
        },
        {
          id: '901122f0aj953124221901290h',
          title: "Filter even numbers",
          description: "Write a function %filterEvens(arr)% that returns a new array containing only the even numbers.",
          example: '%filterEvens([1, 2, 3, 4, 5, 6])% → %[2, 4, 6]%',
          note: "implement in your editor / console",
          solution: "const filterEvens = arr => arr.filter(num => num % 2 === 0);"
        },
      ]
    },
  ]
}