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
          "result": "%Bye%",
          "note": "implement in your editor / console",
          "solution": "let message = 'Hello';\nmessage = 'Bye';"
        },
        {
          "id": "task-let-002",
          "title": "Late Assignment",
          "description": "Declare a variable named %price% using %let% without assigning it a value. Then, on a new line, assign it the number %100%.",
          "result": "%100%",
          "note": "implement in your editor / console",
          "solution": "let price;\nprice = 100;"
        }
      ]
    },
    {
      "id": "const-section-102",
      "title": "CONST",
      "videoID": "06",
      "questions": [
        {
          "id": "q-const-001",
          "title": "Reassigning const",
          "question": "const speed = 100;\nspeed = 120;",
          "options": [
            { "id": "opt-c1", "option": "a", "text": "The value of speed becomes 120", "correct": false, "selected": false },
            { "id": "opt-c2", "option": "b", "text": "TypeError: Assignment to constant variable", "correct": true, "selected": false },
            { "id": "opt-c3", "option": "c", "text": "speed becomes undefined", "correct": false, "selected": false },
            { "id": "opt-c4", "option": "d", "text": "The code runs without any change to speed", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-const-002",
          "title": "Const Initialization",
          "question": "const gravity;",
          "options": [
            { "id": "opt-c5", "option": "a", "text": "SyntaxError: Missing initializer in const declaration", "correct": true, "selected": false },
            { "id": "opt-c6", "option": "b", "text": "gravity is assigned undefined", "correct": false, "selected": false },
            { "id": "opt-c7", "option": "c", "text": "gravity is assigned null", "correct": false, "selected": false },
            { "id": "opt-c8", "option": "d", "text": "The code works perfectly", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-const-003",
          "title": "Const vs Let",
          "question": "Which of these allows you to change the value after the first assignment?",
          "options": [
            { "id": "opt-c9", "option": "a", "text": "Only const", "correct": false, "selected": false },
            { "id": "opt-c10", "option": "b", "text": "Both let and const", "correct": false, "selected": false },
            { "id": "opt-c11", "option": "c", "text": "Only let", "correct": true, "selected": false },
            { "id": "opt-c12", "option": "d", "text": "Neither of them", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-const-001",
          "title": "Constant Declaration",
          "description": "Create a constant named %PI% and assign it the value %3.14%.",
          "result": "%3.14%",
          "note": "implement in your editor / console",
          "solution": "const PI = 3.14;"
        },
        {
          "id": "task-const-002",
          "title": "Identifying Errors",
          "description": "Try to declare a %const% named %taxRate% without a value. Note the error you get in the console.",
          "result": "%SyntaxError%",
          "note": "This task is to observe the error behavior",
          "solution": "const taxRate = 0.2; // Correct way: must have a value"
        }
      ]
    },
    {
      "id": "naming-rules-103",
      "title": "Naming Rules",
      "videoID": "07",
      "questions": [
        {
          "id": "q-name-001",
          "title": "Case Sensitivity",
          "question": "let a = 5;\nlet A = 10;\nconsole.log(a);",
          "options": [
            { "id": "opt-n1", "option": "a", "text": "10", "correct": false, "selected": false },
            { "id": "opt-n2", "option": "b", "text": "5", "correct": true, "selected": false },
            { "id": "opt-n3", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-n4", "option": "d", "text": "SyntaxError", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-name-002",
          "title": "Starting a Variable Name",
          "question": "Which of these variable declarations will cause an error?",
          "options": [
            { "id": "opt-n5", "option": "a", "text": "let _user = 'John';", "correct": false, "selected": false },
            { "id": "opt-n6", "option": "b", "text": "let $price = 10;", "correct": false, "selected": false },
            { "id": "opt-n7", "option": "c", "text": "let 1stPlace = 'Winner';", "correct": true, "selected": false },
            { "id": "opt-n8", "option": "d", "text": "let user1 = 'John';", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-name-003",
          "title": "Spaces and Symbols",
          "question": "What happens if you use a space in a variable name like: let user name = 'Joe'?",
          "options": [
            { "id": "opt-n9", "option": "a", "text": "It works normally", "correct": false, "selected": false },
            { "id": "opt-n10", "option": "b", "text": "It results in a SyntaxError", "correct": true, "selected": false },
            { "id": "opt-n11", "option": "c", "text": "JS automatically adds an underscore", "correct": false, "selected": false },
            { "id": "opt-n12", "option": "d", "text": "The variable name becomes 'user'", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-name-001",
          "title": "Chaining Words",
          "description": "Declare a variable that contains two words (my score). Assign it a value and ensure there are no spaces or dashes.",
          "result": "%Mike%",
          "note": "Don't use spaces or illegal characters",
          "solution": "let myScore = 100;"
        },
        {
          "id": "task-name-002",
          "title": "Verify Case Sensitivity",
          "description": "Create two variables: %let color = 'red'% and %let Color = 'blue'%. Log both to see that they are separate variables.",
          "result": "%true%",
          "note": "JS sees capital and lowercase letters as different",
          "solution": "let color = 'red';\nlet Color = 'blue';"
        }
      ]
    },
    {
      "id": "comments-section-104",
      "title": "Comments",
      "videoID": "08",
      "questions": [
        {
          "id": "q-comm-001",
          "title": "Single-line Comments",
          "question": "Which characters are used to start a single-line comment in JavaScript?",
          "options": [
            { "id": "opt-m1", "option": "a", "text": "<!--", "correct": false, "selected": false },
            { "id": "opt-m2", "option": "b", "text": "//", "correct": true, "selected": false },
            { "id": "opt-m3", "option": "c", "text": "#", "correct": false, "selected": false },
            { "id": "opt-m4", "option": "d", "text": "/*", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-comm-002",
          "title": "Multi-line Comments",
          "question": "How do you start and end a multi-line comment block?",
          "options": [
            { "id": "opt-m5", "option": "a", "text": "// and //", "correct": false, "selected": false },
            { "id": "opt-m6", "option": "b", "text": "/* and */", "correct": true, "selected": false },
            { "id": "opt-m7", "option": "c", "text": "<!-- and -->", "correct": false, "selected": false },
            { "id": "opt-m8", "option": "d", "text": "{ and }", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-comm-003",
          "title": "VS Code Shortcut",
          "question": "What is the common shortcut to comment out a line of code in Visual Studio Code?",
          "options": [
            { "id": "opt-m9", "option": "a", "text": "Ctrl + C (Cmd + C on Mac)", "correct": false, "selected": false },
            { "id": "opt-m10", "option": "b", "text": "Ctrl + / (Cmd + / on Mac)", "correct": true, "selected": false },
            { "id": "opt-m11", "option": "c", "text": "Alt + F4", "correct": false, "selected": false },
            { "id": "opt-m12", "option": "d", "text": "Ctrl + S", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-comm-001",
          "title": "Comment Out Code",
          "description": "Take the line %let hiddenValue = 10;% and use a single-line comment so that the JavaScript engine ignores it.",
          "result": "%ignored%",
          "note": "Use the double forward slash",
          "solution": "// let hiddenValue = 10;"
        },
        {
          "id": "task-comm-002",
          "title": "Write a Note",
          "description": "Use a multi-line comment to write a two-line note about your code.",
          "result": "%ignored%",
          "note": "Ensure you close the comment block",
          "solution": "/* This is a \n note */"
        }
      ]
    },
    {
      "id": "strings-section-105",
      "title": "Strings",
      "videoID": "09",
      "questions": [
        {
          "id": "q-str-001",
          "title": "Escaping Characters",
          "question": "Which code correctly prints: That's ok.?",
          "options": [
            { "id": "opt-s1", "option": "a", "text": "console.log('That's ok.');", "correct": false, "selected": false },
            { "id": "opt-s2", "option": "b", "text": "console.log('That\\'s ok.');", "correct": true, "selected": false },
            { "id": "opt-s3", "option": "c", "text": "console.log('That/s ok.');", "correct": false, "selected": false },
            { "id": "opt-s4", "option": "d", "text": "console.log(\"That's ok.');", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-str-002",
          "title": "Template Literals",
          "question": "What is the correct syntax for injecting a variable into a template literal?",
          "options": [
            { "id": "opt-s5", "option": "a", "text": "'Hello, {name}'", "correct": false, "selected": false },
            { "id": "opt-s6", "option": "b", "text": "`Hello, ${name}`", "correct": true, "selected": false },
            { "id": "opt-s7", "option": "c", "text": "`Hello, ${'name'}`", "correct": false, "selected": false },
            { "id": "opt-s8", "option": "d", "text": "'Hello, ' + ${name}", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-str-003",
          "title": "String Concatenation",
          "question": "What is the result of: 'Hello' + ' ' + 'World'?",
          "options": [
            { "id": "opt-s9", "option": "a", "text": "'HelloWorld'", "correct": false, "selected": false },
            { "id": "opt-s10", "option": "b", "text": "'Hello World'", "correct": true, "selected": false },
            { "id": "opt-s11", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-s12", "option": "d", "text": "Error", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-str-004",
          "title": "New Line Character",
          "question": "Which character is used to create a new line inside a standard single-quoted string?",
          "options": [
            { "id": "opt-s13", "option": "a", "text": "/n", "correct": false, "selected": false },
            { "id": "opt-s14", "option": "b", "text": "\\line", "correct": false, "selected": false },
            { "id": "opt-s15", "option": "c", "text": "\\n", "correct": true, "selected": false },
            { "id": "opt-s16", "option": "d", "text": "Enter key", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-str-005",
          "title": "Backticks vs Quotes",
          "question": "Which quote type allows you to create multi-line strings naturally by pressing Enter?",
          "options": [
            { "id": "opt-s17", "option": "a", "text": "Single quotes ('')", "correct": false, "selected": false },
            { "id": "opt-s18", "option": "b", "text": "Double quotes (\"\")", "correct": false, "selected": false },
            { "id": "opt-s19", "option": "c", "text": "Backticks (``)", "correct": true, "selected": false },
            { "id": "opt-s20", "option": "d", "text": "None of the above", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-str-001",
          "title": "The Escape Task",
          "description": "Use single quotes to log the following sentence: %I'm learning JS%. Ensure you escape the single quote correctly.",
          "result": "%I'm learning JS%",
          "note": "Use the backslash character",
          "solution": "console.log('I\\'m learning JS');"
        },
        {
          "id": "task-str-002",
          "title": "Variable Injection",
          "description": "Declare a const %city = 'Paris'%. Use a template literal (backticks) to log: %I want to visit Paris%.",
          "result": "%I want to visit Paris%",
          "note": "Use backticks and ${}",
          "solution": "const city = 'Paris';\nconsole.log(`I want to visit ${city}`);"
        },
        {
          "id": "task-str-003",
          "title": "Old School Concatenation",
          "description": "Declare two variables, %firstName% and %lastName%. Use the %+% operator to join them with a space in between.",
          "result": "%John Doe%",
          "note": "Don't forget the empty string for the space",
          "solution": "console.log(firstName + ' ' + lastName);"
        },
        {
          "id": "task-str-004",
          "title": "Multi-line Challenge",
          "description": "Log a two-line message using backticks. The first line should say %Line one% and the second line %Line two%.",
          "result": "%Line one\nLine two%",
          "note": "Just press enter inside the backticks",
          "solution": "console.log(`Line one\nLine two`);"
        }
      ]
    },
    {
      "id": "numbers-section-106",
      "title": "Numbers",
      "videoID": "10",
      "questions": [
        {
          "id": "q-num-001",
          "title": "Mathematical Operations",
          "question": "What does console.log('Pizza' * 10) output?",
          "options": [
            { "id": "opt-n5", "option": "a", "text": "0", "correct": false, "selected": false },
            { "id": "opt-n6", "option": "b", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-n7", "option": "c", "text": "NaN", "correct": true, "selected": false },
            { "id": "opt-n8", "option": "d", "text": "Error", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-num-002",
          "title": "Checking Data Types",
          "question": "What is the result of typeof NaN?",
          "options": [
            { "id": "opt-n9", "option": "a", "text": "number", "correct": true, "selected": false },
            { "id": "opt-n10", "option": "b", "text": "NaN", "correct": false, "selected": false },
            { "id": "opt-n11", "option": "c", "text": "string", "correct": false, "selected": false },
            { "id": "opt-n12", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-num-003",
          "title": "Working with Mixed Types",
          "question": "What is the output of console.log('80' + 20)?",
          "options": [
            { "id": "opt-n13", "option": "a", "text": "100", "correct": false, "selected": false },
            { "id": "opt-n14", "option": "b", "text": "8020", "correct": true, "selected": false },
            { "id": "opt-n15", "option": "c", "text": "NaN", "correct": false, "selected": false },
            { "id": "opt-n16", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-num-004",
          "title": "Implicit Conversion",
          "question": "What is the result of console.log('200' / 2)?",
          "options": [
            { "id": "opt-n17", "option": "a", "text": "100", "correct": true, "selected": false },
            { "id": "opt-n18", "option": "b", "text": "200/2", "correct": false, "selected": false },
            { "id": "opt-n19", "option": "c", "text": "NaN", "correct": false, "selected": false },
            { "id": "opt-n20", "option": "d", "text": "2002", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        }
      ],
      "tasks": [
        {
          "id": "task-num-001",
          "title": "Basic Calculation",
          "description": "Declare a variable %points% and assign it %100%. On the next line, log the result of %points% divided by %4%.",
          "result": "%25%",
          "note": "Use the / operator",
          "solution": "let points = 100;\nconsole.log(points / 4);"
        },
        {
          "id": "task-num-002",
          "title": "Template Literal Math (Review)",
          "description": "Create two constants: %boys = 12% and %girls = 13%. Log a message using backticks that says: %Total students: 25%.",
          "result": "%Total students: 25%",
          "note": "Perform the math inside the ${} curly braces",
          "solution": "const boys = 12;\nconst girls = 13;\nconsole.log(`Total students: ${boys + girls}`);"
        },
        {
          "id": "task-num-003",
          "title": "Implicit Conversion",
          "description": "Declare a variable %level = '5'%. Log the result of %level - 1%.",
          "result": "%4%",
          "note": "Observe how subtraction forces the string to become a number",
          "solution": "let level = '5';\nconsole.log(level - 1);"
        }
      ]
    },
    {
      "id": "null-section-107",
      "title": "Null",
      "videoID": "11",
      "questions": [
        {
          "id": "q-null-001",
          "title": "Intentional Empty Values",
          "question": "Which value is used to represent an intentional absence of any object value?",
          "options": [
            { "id": "opt-nu1", "option": "a", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-nu2", "option": "b", "text": "null", "correct": true, "selected": false },
            { "id": "opt-nu3", "option": "c", "text": "0", "correct": false, "selected": false },
            { "id": "opt-nu4", "option": "d", "text": "NaN", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-null-002",
          "title": "Checking Null Type",
          "question": "What is the result of typeof null?",
          "options": [
            { "id": "opt-nu5", "option": "a", "text": "null", "correct": false, "selected": false },
            { "id": "opt-nu6", "option": "b", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-nu7", "option": "c", "text": "object", "correct": true, "selected": false },
            { "id": "opt-nu8", "option": "d", "text": "number", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-null-003",
          "title": "Null vs Undefined",
          "question": "If you declare a variable with 'let' but do not assign it a value, what is its default value?",
          "options": [
            { "id": "opt-nu9", "option": "a", "text": "null", "correct": false, "selected": false },
            { "id": "opt-nu10", "option": "b", "text": "undefined", "correct": true, "selected": false },
            { "id": "opt-nu11", "option": "c", "text": "NaN", "correct": false, "selected": false },
            { "id": "opt-nu12", "option": "d", "text": "0", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        }
      ],
      "tasks": [
        {
          "id": "task-null-001",
          "title": "Assigning Null",
          "description": "Declare a variable %userProfile% using %let% and intentionally assign it the value %null%.",
          "result": "%null%",
          "note": "Use this when you want to explicitly say 'nothing' is there",
          "solution": "let userProfile = null;"
        },
        {
          "id": "task-null-002",
          "title": "The Typeof Quirk",
          "description": "Log the %typeof% the value %null% to the console.",
          "result": "%object%",
          "note": "This is a well-known behavior in JavaScript",
          "solution": "console.log(typeof null);"
        },
        {
          "id": "task-null-003",
          "title": "Review: String & Null",
          "description": "Declare a const %username = null%. Use a template literal to log: %Current user is null%.",
          "result": "%Current user is null%",
          "note": "Reviewing template literals from the Strings section",
          "solution": "const username = null;\nconsole.log(`Current user is ${username}`);"
        }
      ]
    },
    {
      "id": "boolean-section-108",
      "title": "Booleans",
      "videoID": "12",
      "questions": [
        {
          "id": "q-bool-001",
          "title": "Logical NOT Operator",
          "question": "let isAdmin = true;\nconsole.log(!isAdmin);",
          "options": [
            { "id": "opt-b1", "option": "a", "text": "true", "correct": false, "selected": false },
            { "id": "opt-b2", "option": "b", "text": "false", "correct": true, "selected": false },
            { "id": "opt-b3", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-b4", "option": "d", "text": "null", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-bool-002",
          "title": "Data Types",
          "question": "What is the result of typeof true?",
          "options": [
            { "id": "opt-b5", "option": "a", "text": "string", "correct": false, "selected": false },
            { "id": "opt-b6", "option": "b", "text": "boolean", "correct": true, "selected": false },
            { "id": "opt-b7", "option": "c", "text": "object", "correct": false, "selected": false },
            { "id": "opt-b8", "option": "d", "text": "number", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-bool-003",
          "title": "The Double NOT Operator",
          "question": "If let data = null;, what is the result of console.log(!!data)?",
          "options": [
            { "id": "opt-b9", "option": "a", "text": "null", "correct": false, "selected": false },
            { "id": "opt-b10", "option": "b", "text": "true", "correct": false, "selected": false },
            { "id": "opt-b11", "option": "c", "text": "false", "correct": true, "selected": false },
            { "id": "opt-b12", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": [
        {
          "id": "task-bool-001",
          "title": "Toggling State",
          "description": "Declare a variable %isDark% using %let% and set it to %false%. On the next line, reassign it to the opposite of its current value using the %!% operator.",
          "result": "%true%",
          "note": "Think of it like a light switch",
          "solution": "let isDark = false;\nisDark = !isDark;"
        },
        {
          "id": "task-bool-002",
          "title": "Truthiness Check (Review)",
          "description": "Declare a constant %phoneNumber = null%. Use the %!!% operator to log whether this value exists as a boolean.",
          "result": "%false%",
          "note": "Reviewing null while learning truthiness",
          "solution": "const phoneNumber = null;\nconsole.log(!!phoneNumber);"
        },
        {
          "id": "task-bool-003",
          "title": "Dynamic Boolean Message",
          "description": "Create a variable %isSubscribed = true%. Use a template literal to log: %Subscription status is: true%.",
          "result": "%Subscription status is: true%",
          "note": "Reviewing template strings from section 105",
          "solution": "let isSubscribed = true;\nconsole.log(`Subscription status is: ${isSubscribed}`);"
        },
        {
          "id": "task-bool-004",
          "title": "Logical Reversal",
          "description": "Declare a constant %hasError = false%. Log the value of %!hasError%.",
          "result": "%true%",
          "note": "The ! operator flips the boolean value",
          "solution": "const hasError = false;\nconsole.log(!hasError);"
        }
      ]
    },
    {
      "id": "truthy-falsy-section-109",
      "title": "Truthy vs. Falsy Values",
      "videoID": "13",
      "questions": [
        {
          "id": "q-tf-001",
          "title": "The Number Zero",
          "question": "What is the boolean result of !!0?",
          "options": [
            { "id": "opt-tf1", "option": "a", "text": "true", "correct": false, "selected": false },
            { "id": "opt-tf2", "option": "b", "text": "false", "correct": true, "selected": false },
            { "id": "opt-tf3", "option": "c", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-tf4", "option": "d", "text": "NaN", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-tf-002",
          "title": "Empty Strings",
          "question": "Which of the following is a Falsy value?",
          "options": [
            { "id": "opt-tf5", "option": "a", "text": "' ' (string with a space)", "correct": false, "selected": false },
            { "id": "opt-tf6", "option": "b", "text": "'0'", "correct": false, "selected": false },
            { "id": "opt-tf7", "option": "c", "text": "'' (empty string)", "correct": true, "selected": false },
            { "id": "opt-tf8", "option": "d", "text": "'false'", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        },
        {
          "id": "q-tf-003",
          "title": "Evaluating NaN",
          "question": "What is the result of Boolean(NaN)?",
          "options": [
            { "id": "opt-tf9", "option": "a", "text": "true", "correct": false, "selected": false },
            { "id": "opt-tf10", "option": "b", "text": "false", "correct": true, "selected": false },
            { "id": "opt-tf11", "option": "c", "text": "null", "correct": false, "selected": false },
            { "id": "opt-tf12", "option": "d", "text": "TypeError", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-tf-004",
          "title": "Truthiness of Numbers",
          "question": "Which of these will evaluate to true?",
          "options": [
            { "id": "opt-tf13", "option": "a", "text": "!!-1", "correct": true, "selected": false },
            { "id": "opt-tf14", "option": "b", "text": "!!0", "correct": false, "selected": false },
            { "id": "opt-tf15", "option": "c", "text": "!!null", "correct": false, "selected": false },
            { "id": "opt-tf16", "option": "d", "text": "!!undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-tf-005",
          "title": "Strings with Content",
          "question": "Is the string 'false' truthy or falsy?",
          "options": [
            { "id": "opt-tf17", "option": "a", "text": "Truthy", "correct": true, "selected": false },
            { "id": "opt-tf18", "option": "b", "text": "Falsy", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-tf-006",
          "title": "Undefined Status",
          "question": "let x;\nconsole.log(!!x);",
          "options": [
            { "id": "opt-tf19", "option": "a", "text": "true", "correct": false, "selected": false },
            { "id": "opt-tf20", "option": "b", "text": "false", "correct": true, "selected": false },
            { "id": "opt-tf21", "option": "c", "text": "ReferenceError", "correct": false, "selected": false },
            { "id": "opt-tf22", "option": "d", "text": "undefined", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-tf-007",
          "title": "Logical NOT on Truthy",
          "question": "What is the result of !'Hello'?",
          "options": [
            { "id": "opt-tf23", "option": "a", "text": "true", "correct": false, "selected": false },
            { "id": "opt-tf24", "option": "b", "text": "false", "correct": true, "selected": false },
            { "id": "opt-tf25", "option": "c", "text": "'Hello'", "correct": false, "selected": false },
            { "id": "opt-tf26", "option": "d", "text": "''", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-tf-008",
          "title": "Null Check",
          "question": "What does !!null return?",
          "options": [
            { "id": "opt-tf27", "option": "a", "text": "true", "correct": false, "selected": false },
            { "id": "opt-tf28", "option": "b", "text": "false", "correct": true, "selected": false },
            { "id": "opt-tf29", "option": "c", "text": "null", "correct": false, "selected": false },
            { "id": "opt-tf30", "option": "d", "text": "object", "correct": false, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-tf-009",
          "title": "Numbers as Strings",
          "question": "What is the result of Boolean('0')?",
          "options": [
            { "id": "opt-tf31", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-tf32", "option": "b", "text": "false", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-tf-010",
          "title": "The Negative Zero",
          "question": "What is the truthiness of the value -0?",
          "options": [
            { "id": "opt-tf33", "option": "a", "text": "Truthy", "correct": false, "selected": false },
            { "id": "opt-tf34", "option": "b", "text": "Falsy", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-tf-011",
          "title": "Double NOT on String",
          "question": "What does !!' ' (a string with one space) return?",
          "options": [
            { "id": "opt-tf35", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-tf36", "option": "b", "text": "false", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-tf-012",
          "title": "Mixed Types Review",
          "question": "If let val = '10' - 10;, what is !!val?",
          "options": [
            { "id": "opt-tf37", "option": "a", "text": "true", "correct": false, "selected": false },
            { "id": "opt-tf38", "option": "b", "text": "false", "correct": true, "selected": false }
          ],
          "correctAnswer": "b"
        },
        {
          "id": "q-tf-013",
          "title": "Template Literal Truthiness",
          "question": "What is the truthiness of a template literal: !!`${null}`?",
          "options": [
            { "id": "opt-tf39", "option": "a", "text": "true (it becomes the string 'null')", "correct": true, "selected": false },
            { "id": "opt-tf40", "option": "b", "text": "false (it stays as null)", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-tf-014",
          "title": "Logical NOT on NaN",
          "question": "What is the result of !NaN?",
          "options": [
            { "id": "opt-tf41", "option": "a", "text": "true", "correct": true, "selected": false },
            { "id": "opt-tf42", "option": "b", "text": "false", "correct": false, "selected": false }
          ],
          "correctAnswer": "a"
        },
        {
          "id": "q-tf-015",
          "title": "Falsy Summary",
          "question": "Which of these is NOT a falsy value?",
          "options": [
            { "id": "opt-tf43", "option": "a", "text": "undefined", "correct": false, "selected": false },
            { "id": "opt-tf44", "option": "b", "text": "0", "correct": false, "selected": false },
            { "id": "opt-tf45", "option": "c", "text": "1", "correct": true, "selected": false },
            { "id": "opt-tf46", "option": "d", "text": "null", "correct": false, "selected": false }
          ],
          "correctAnswer": "c"
        }
      ],
      "tasks": []
    },
    
  ]
}