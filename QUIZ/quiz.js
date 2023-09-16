const questions = [
  
    {
        question: " The alkaline earth metal sulphate(s) which are readily soluble in water is/are:
        A)BeSO4 
        B)MgSO4 
        C)CasO4 
        D)SrSO4 
        E)BasO4" 
        choices: ["1) A only ", " 2)B only ", "3) A and B", "4) B and C"],
        correctAnswer: "3) A and B"
    },
  
 {
        question: "Amongst the following compounds , which one is an antacid ?
	(A) Ranitidine
	(B) Terfenadine
	(C) Meprobamate
	(D) Brompheniramine
		choices: ["1) A", " 2) 	B" , "3) c", "4) D"],
		 CorrectAnswer: "1) A"
    },
{
        question:  "Potassium dichromate acts as a strong oxidizing agent in acidic solution. During this process, the oxidation state changes from
	(1) +3 to +1
	(2) +6 to +3
	(3) +2 to +1
	(4) +6 to +2"
		choices: ["1) A", " 2) B", "3) C", "4) D"]
		CorrectAnswer: "2) B"
    },
{
        question: "The isomeric deuterated bromide with molecular formula CH Dbr having two chiral carbon atoms is
	(1) 2-Bromo-1-deuterobutane
	(2) 2-Bromo-2-deuterobutane
	(3) 2-Bromo-3-deuterobutane
	(4) 2-Bromo-1-deutro-2-methylpropane"
		choices: ["1) A", " 2) B", 3) C", "4) D"]
		CorrectAnswer: "3) C" END
    },
{
        question: "Which element is not present in nessler's reagent?
	(1) Mercury
	(2) POtassium
	(3) Iodine
	(4) Oxygen"
		choices: ["1) A", " 2) B", "3) C", "4) D"],
		CorrectAnswer: "4) D"
    },//PHYSICS STARTS FROM HERE
{
	question: "An observer is moving with half the speed of light towards a stationary microwave source emitting waves at frequency 10 ghz What is the frequency of the microwave measured by the observer?(speed of light = 3 x 108 ms-1)
	(1) 12.1 Ghz
	(2) 17.3 Ghz
	(3) 15.3 Ghz
	(4) 10.1 Ghz"
		choices; ["1) A", " 2) B", "3) C", "4) D"]
		CorrectAnswer: "2) B"
            },
{
      question: "A solid metal cube of edge length 2 cm is moving in the postive y direction at a constant speed of 6 m/s. There is a uniform magnetic field of 0.1 T in the positive z direction . The potential difference between the two faces of the cube perpendicular to the x axis, is:
      (1) 6 mv
      (2) 1 mv
      (3) 12 mv
      (4) 2 mv"
       		choices: ["1) A", " 2) B", "3) C", "4) D"]
	CorrectAnswer: "3) C"   
    },
{
 	question:  "A 2W carbon resistor is color coded with green, black, red and brown respectively. The maximum current which can be passed through this resistor is:
	(1) 63 mA
        (2) 0.4 mA
	(3) 100 mA
	(4) 20 mA
	        choices:["1) A", " 2) B", "3) C", "4) D"]
		CorrectAnswer: "3) C"
    },
{
        question:"Two guns A and B can fire buullets at speed 1 km/s  and 2km/s respectively. From a point on a horizontal ground , they are fired in all possible direction. The ratio of maximum areas covered by the bullets fired by two guns, on the ground is:
	(1) 1 : 2
	(2) 1 : 4
	(3) 1 : 8
	(4) 1 : 16"
		choices: ["1) A", " 2) B", "3) C", "4) D"]
		CorrectAnswer: "4) D"
    },
{
        question: "Two hollow conducting spheres of radii R1 and R2 (R1 >> R2) have equal charges. The potential would be
	(1) More on bigger sphere
	(2) More on smaller sphere
	(3) Equal on both the spheres
	(4) Dependent on the material property of the sphere"
		choices: ["1) A", "2) B", "3) C", "4) D"]
		CorrectAnswer: "2) B"
    },//BIO STARTS FROM HERE

{
       question: "Which one of the following plants does not show plasticity?
	(1) Cotton
	(2) Coriander
	(3) Buttercup
	(4) Maize"
		choices: ["1) A", "2) B", "3) C", "4) D"],
		CoreectAnswer: "4) D"
    },
{
        question: "XO type of sex distribution can be found in:
	(1) Drosophila
	(2) Birds
	(3) Grasshoppers
	(4) Monkeys"
		choices: ["1) A", " 2) B", "3) C", "4) D"]
		CorrectAnswer: "3) C"
    },
{
      question: "Production of cucumber has increased manifold in recent years. Application of the following phytohormones has resulted in this increased yield as the hormone is known to produce female flowers in the plants:
	(1) ABA
	(2) Gibberellin
	(3) Ethylene 
	(4) Ctyokinin"
		Choices: ["1) A", "2) B", "3) C", "4) D"]
		CorrectAnswer: "3) C"  
    },
{
        question: "The devices which can remoove particulate matter present in the exhaust from a thermal power plant is:
	(1) STP
	(2) Incinerator
	(3) Electrostatic Precipitator
	(4) Catalytic Convertor"
		choices: ["1) A", "2) B", "3) C", "4) D"]
		CorrectAnswer: "3) C"
    },
{
      question: "Which one of the following plants shows vexillary aestivation and diadelphous stamens?
	(1) Colchium Autumnale
	(2) Pisum sativum
	(3) Allium cepa
	(4) Solanum nigrum"
		choices: ["1) A", "2) B", "3) C", "4) D"]
		CorrectAnswer: "2) B"
    },
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const timerElement = document.getElementById("timer");
const nextButton = document.getElementById("next-btn");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(li);
    });

    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft + " seconds";

        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer(null); // Time's up, check answer
        }
    }, 1000);
}

function checkAnswer(selectedChoice) {
    clearInterval(timer);
    nextButton.disabled = false;
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedChoice === currentQuestion.correctAnswer;

    if (isCorrect) {
        // Handle correct answer logic
        console.log("Correct!");
    } else {
        // Handle incorrect answer logic
        console.log("Incorrect!");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        // End of the quiz
        questionElement.textContent = "Quiz is over!";
        choicesElement.innerHTML = "";
        timerElement.textContent = "";
        nextButton.disabled = true;
    } else {
        timeLeft = 60;
        displayQuestion();
    }
}

nextButton.addEventListener("click", () => {
    nextButton.disabled = true;
    checkAnswer(null); // Move to the next question
});

// Start the quiz
displayQuestion();