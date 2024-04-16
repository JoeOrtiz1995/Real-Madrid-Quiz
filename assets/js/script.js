console.log("Hello from the console");

//Creates an array with all the questions and answers
//50 questions stored, but only 10 displayed per game
//The answers array in each question will hold the options and whether they're right or wrong
let questions = [
  {
    question:
      "Which Player was the only spanish player signed by Florentino in his first period as president?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "2 Who has won more Champions League titles?",
    answers: [
      { text: "Gareth Bale", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question:
      "3 Player was the only spanish player signed by Florentino in his first period as president?",
    answers: [
      { text: "Raul", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "4 Who has won more La Liga Titles?",
    answers: [
      { text: "Cristiano Ronaldo", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Isco", correct: false },
    ],
  },
  {
    question: "5 Who has made more competitive appearances for Madrid?",
    answers: [
      { text: "Sergio Ramos", correct: false },
      { text: "Iker Casillas", correct: true },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    question: "6 Who was Real Madrid captain for longer",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    question: "7 Who scored more Champions League goals?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Zidane", correct: false },
      { text: "Eden Hazard", correct: false },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    question:
      "8 Real Madrid has played its home matches in which stadium since 1947?",
    answers: [
      { text: "Santiago Bernabeu", correct: true },
      { text: "Montjuic", correct: false },
      { text: "Civitas Metropolitano", correct: false },
      { text: "Estadio Sanchez Pizjuan", correct: false },
    ],
  },
  {
    question: "9 What is Madrid's most common nickname?",
    answers: [
      { text: "Los Blancos", correct: true },
      { text: "Los Rallados", correct: false },
      { text: "Los Tigres", correct: false },
      { text: "Los Blaugrana", correct: false },
    ],
  },
  {
    question:
      "10 Real Madrid played home matches for the 2019/20 season at which small venue while their regular stadium was being renovated?",
    answers: [
      { text: "Alfredo di Stefano Stadium", correct: true },
      { text: "Montjuic Stadium", correct: false },
      { text: "Estadio de la Cartuja", correct: false },
      { text: "El Madrigal", correct: false },
    ],
  },
  {
    question:
      "11 Which British football manager took charge of Real Madrid from July 1989 to November 1990?",
    answers: [
      { text: "John Toshack", correct: true },
      { text: "Zidane", correct: false },
      { text: "Steve Bruce", correct: false },
      { text: "Neil Warnock", correct: false },
    ],
  },
  {
    question:
      "12 Cristiano Ronaldo is the all-time leading goalscorer with how many goals in all competitions?",
    answers: [
      { text: "450", correct: true },
      { text: "323", correct: false },
      { text: "101", correct: false },
      { text: "523", correct: false },
    ],
  },
  {
    question:
      "13 Which player spent 16 years of his career playing for Real Madrid and scored 323 goals during his career at the club?",
    answers: [
      { text: "Sergio Ramos", correct: true },
      { text: "Zidane", correct: false },
      { text: "Eden Hazard", correct: false },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    question: "14 Can you name the oldest player to ever play for Real Madrid?",
    answers: [
      { text: "Alfredo di Stefano", correct: true },
      { text: "Luka Modric", correct: false },
      { text: "Pepe", correct: false },
      { text: "Marcelo", correct: false },
    ],
  },
  {
    question:
      "15 As of 2024, how many European Cups/Champions Leagues have Real Madrid won?",
    answers: [
      { text: "14", correct: true },
      { text: "11", correct: false },
      { text: "10", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question:
      "16 In July 2000, who made a surprising 62 million Euros move to Real Madrid?",
    answers: [
      { text: "Luis Figo", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Raul", correct: false },
      { text: "Sergio Ramos", correct: false },
    ],
  },
  {
    question: "17 Which player is the oldest member in the current squad?",
    answers: [
      { text: "Sergio Ramos", correct: false },
      { text: "Luka Modric", correct: true },
      { text: "Toni Kroos", correct: false },
      { text: "Marcelo", correct: false },
    ],
  },
  {
    question:
      "18 Which Argentine born player was instrumental in the domination of the European Cup and La Liga during the 1950s?",
    answers: [
      { text: "Alfredo di Stefano", correct: true },
      { text: "Julian Alvarez", correct: false },
      { text: "Santiago Solari", correct: false },
      { text: "Carlo Ancelotti", correct: false },
    ],
  },
  {
    question: "19 Gareth Bale was signed for 101 million Euros in which year?",
    answers: [
      { text: "2013", correct: true },
      { text: "2012", correct: false },
      { text: "2010", correct: false },
      { text: "2014", correct: false },
    ],
  },
  {
    question:
      "20 Gareth Bale was signed for 101 million Euros from which Club?",
    answers: [
      { text: "Tottenham", correct: true },
      { text: "Chelsea", correct: false },
      { text: "Southampton", correct: false },
      { text: "Arsenal", correct: false },
    ],
  },
  {
    question:
      "21 What number shirt did David Beckham wear, citing his admiration of basketball player Michael Jordan who also wore this number shirt?",
    answers: [
      { text: "23", correct: true },
      { text: "5", correct: false },
      { text: "10", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question:
      "22 What name is given to any match between rivals FC Barcelona and Real Madrid?",
    answers: [
      { text: "El Clasico", correct: true },
      { text: "Der Klassiker", correct: false },
      { text: "El Derby", correct: false },
      { text: "The Old Firm", correct: false },
    ],
  },
  {
    question:
      "23 Which legendary Brazilian left back scored 68 goals in 527 appearances for Madrid between 1996 and 2007?",
    answers: [
      { text: "Roberto Carlos", correct: true },
      { text: "Marcelo", correct: false },
      { text: "Fabio Coentrao", correct: false },
      { text: "Dani Alves", correct: false },
    ],
  },
  {
    question:
      "24 What word was once used to describe expensive Real Madrid football players and is now often used for a select list of football superstars in any team??",
    answers: [
      { text: "Los Galacticos", correct: true },
      { text: "Las Estrellas", correct: false },
      { text: "Los de Florentino", correct: false },
      { text: "Los Merengues", correct: false },
    ],
  },
  {
    question:
      "25 On 22 May 2012, who signed a new four-year contract to remain as Real Madrid manager through to 2016?",
    answers: [
      { text: "Jose Mourinho", correct: true },
      { text: "Julen Lopetegui", correct: false },
      { text: "Carlo Ancelotti", correct: false },
      { text: "Zidane", correct: false },
    ],
  },
  {
    question:
      "26 In the 2018 UEFA Champions League Final what was the score between Real Madrid and Liverpool?",
    answers: [
      { text: "3-1", correct: true },
      { text: "1-0", correct: false },
      { text: "2-0", correct: false },
      { text: "4-1", correct: false },
    ],
  },
  {
    question:
      "27 David Beckham was the third Englishman to play for Real Madrid, who was the first?",
    answers: [
      { text: "Laurie Cunningham", correct: true },
      { text: "Steve McManaman", correct: false },
      { text: "Jonathan Woodgate", correct: false },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    question:
      "28 David Beckham was the third Englishman to play for Real Madrid, who was the second?",
    answers: [
      { text: "Steve McManaman", correct: true },
      { text: "Laurie Cunningham", correct: false },
      { text: "Jonathan Woodgate", correct: false },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    question:
      "29 Which goalkeeper made his debut in 1999 and went on to make 725 appearances for Madrid?",
    answers: [
      { text: "Iker Casillas", correct: true },
      { text: "Thibault Courtois", correct: false },
      { text: "Diego Lopez", correct: false },
      { text: "Unai Simon", correct: false },
    ],
  },
  {
    question:
      "30 Which player made his debut on 22 September 2005 when he famously scored an own goal before being sent off against Athletic Bilbao?",
    answers: [
      { text: "Laurie Cunningham", correct: false },
      { text: "Steve McManaman", correct: false },
      { text: "Jonathan Woodgate", correct: true },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    question: "31 In which year was Real Madrid founded?",
    answers: [
      { text: "1891", correct: true },
      { text: "1957", correct: false },
      { text: "1939", correct: false },
      { text: "1935", correct: false },
    ],
  },
  {
    question: "32 Who is the current Real Madrid Manager?",
    answers: [
      { text: "Carlo Ancelotti", correct: true },
      { text: "Zidane", correct: false },
      { text: "Julen Lopetegui", correct: false },
      { text: "Santiago Solari", correct: false },
    ],
  },
  {
    question: "33 What is the name of the Real Madrid youth academy?",
    answers: [
      { text: "La Fabrica", correct: true },
      { text: "La Masia", correct: false },
      { text: "La Casa", correct: false },
      { text: "El Bernabeu", correct: false },
    ],
  },
  {
    question: "34 How many Copa del Rey titles has Real Madrid won?",
    answers: [
      { text: "18", correct: true },
      { text: "16", correct: false },
      { text: "21", correct: false },
      { text: "13", correct: false },
    ],
  },
  {
    question: "35 Who was the first foreign manager at Real Madrid?",
    answers: [
      { text: "John Toshack", correct: true },
      { text: "Carlo Ancelotti", correct: false },
      { text: "Zidane", correct: false },
      { text: "Jose Mourinho", correct: false },
    ],
  },
  {
    question: "36 What is the name of the women's football team?",
    answers: [
      { text: "Real Madrid CF Femenino", correct: true },
      { text: "Real Femenino", correct: false },
      { text: "Real Madrid Femeni", correct: false },
      { text: "La Real", correct: false },
    ],
  },
  {
    question: "37 Who was Real Madrid's first ever Ballon d'Or winner?",
    answers: [
      { text: "Alfredo di Stefano", correct: true },
      { text: "Luka Modric", correct: false },
      { text: "Raul", correct: false },
      { text: "Cristiano Ronaldo", correct: false },
    ],
  },
  {
    question: "38 Who was Real Madrid’s last Ballon d’or winner?",
    answers: [
      { text: "Alfredo di Stefano", correct: false },
      { text: "Luka Modric", correct: true },
      { text: "Raul", correct: false },
      { text: "Cristiano Ronaldo", correct: false },
    ],
  },
  {
    question:
      "39 Which manager won 3 successive Champions Leagues with Real Madrid?",
    answers: [
      { text: "John Toshack", correct: false },
      { text: "Carlo Ancelotti", correct: false },
      { text: "Zidane", correct: true },
      { text: "Jose Mourinho", correct: false },
    ],
  },
  {
    question: "40 Who are Real Madrid’s main kit manufacturer?",
    answers: [
      { text: "Adidas", correct: true },
      { text: "New Balance", correct: false },
      { text: "Nike", correct: false },
      { text: "Puma", correct: false },
    ],
  },
  {
    question: "41 What is the record attendance for a Real Madrid match?",
    answers: [
      { text: "129,690", correct: true },
      { text: "87,800", correct: false },
      { text: "95,015", correct: false },
      { text: "57,591", correct: false },
    ],
  },
  {
    question: "42 How many la liga titles have Madrid won?",
    answers: [
      { text: "35", correct: true },
      { text: "45", correct: false },
      { text: "30", correct: false },
      { text: "33", correct: false },
    ],
  },
  {
    question:
      "43 Which ex Real Madrid manager went on to win a world cup and the euros with the Spanish National Team?",
    answers: [
      { text: "Vicente del Bosque", correct: true },
      { text: "Carlo Ancelotti", correct: false },
      { text: "Luis Aragones", correct: false },
      { text: "Julen Lopetegui", correct: false },
    ],
  },
  {
    question: "44 In which year did Cristiano Ronaldo sign for Madrid?",
    answers: [
      { text: "2008", correct: true },
      { text: "2007", correct: false },
      { text: "2009", correct: false },
      { text: "2010", correct: false },
    ],
  },
  {
    question:
      "45 Which ex Real Madrid defender is 41 and still plays in Portugal?",
    answers: [
      { text: "Sergio Ramos", correct: false },
      { text: "Iker Casillas", correct: false },
      { text: "Pepe", correct: true },
      { text: "Roberto Carlos", correct: false },
    ],
  },
  {
    question:
      "46 What position did Sergio Ramos play in before he was moved to central defense?",
    answers: [
      { text: "Right Back", correct: true },
      { text: "Left Back", correct: false },
      { text: "Striker", correct: false },
      { text: "Goalkeeper", correct: false },
    ],
  },
  {
    question:
      "47 Which player became the 7th Brit to play for the club in 2023?",
    answers: [
      { text: "Jude Bellingham", correct: true },
      { text: "Marcus Rashford", correct: false },
      { text: "Jonathan Woodgate", correct: false },
      { text: "Gareth Bale", correct: false },
    ],
  },
  {
    question: "48 Who is the current president at Real Madrid?",
    answers: [
      { text: "Florentino Perez", correct: true },
      { text: "Daniel Levy", correct: false },
      { text: "Joan Laporta", correct: false },
      { text: "Ryan Reynolds", correct: false },
    ],
  },
  {
    question:
      "49 Which manager was sacked by the Spanish Federation after he agreed to coach Real before the 2018 World Cup?",
    answers: [
      { text: "Julen Lopetegui", correct: true },
      { text: "Luis Aragones", correct: false },
      { text: "Vicente del Bosque", correct: false },
      { text: "Luis Enrique", correct: false },
    ],
  },
  {
    question:
      "50 Which ex Real Madrid Midfielder went on to win the German Bundesliga with Bayer Leverkusen?",
    answers: [
      { text: "Xabi Alonso", correct: true },
      { text: "Iker Casillas", correct: false },
      { text: "Xavi", correct: false },
      { text: "Isco", correct: false },
    ],
  },
];

//Variable quizQuestion will display the question text in #question h2
let quizQuestion = document.getElementById("question");

//Variable quizAnswers will display the potential answers in the .option buttons
let quizAnswers = document.getElementById("option");

//Variable nextBtn will apply to the next button
//Ideally this should be hidden untildisplayed question is answered
let nextBtn = document.getElementById("next-btn");

//Sets the score as 0 when the user starts the quiz and increases if question is answered correctly
let score = 0;

//Create a function which sets up the quiz by picking 10 Q's from the 50 available.
//Math.floor random to get 10 random numbers from 1 to 50. --- let i=math.floor random
//Asssign each of these a variable and

//creates a blank array where 10 random numbers from 1 to 50 are added
let questionNumbers = [];

let i = questionNumbers.push(Math.floor(Math.random() * 50) + 1);
while (questionNumbers.length < 10);
console.log(questionNumbers);

//function setup() {
//for (let i = 0; i < 10; i++) {
//questionNumbers[i] = Math.floor(Math.random() * 50) + 1;
//}
//}

//console.log(questionNumbers);

//if (questionNumbers[n] in questionNumbers === "true");
//for (let n; n < 11; n++) {
//  questionNumbers[n] = Math.floor(Math.random() * 50) + 1;
//}
//console.log(questionNumbers);

/**
 * Sets up the quiz by adding 10 random numbers to questionNumbers Array.
 * Then goes through this array and makes sure there are no duplicates.
 * If there are none, another array is created which will be the quiz questions for this game.
 */
function setupQuiz() {}

//Need to create a way to loop through array and check if any numbers are repeated and readd a question if so.

//Need to then go through the Array and match the number with the question rank

//creates a fn randomNumber() which
//Gets a random number from 1 to 50//
