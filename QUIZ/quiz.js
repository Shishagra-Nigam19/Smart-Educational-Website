const questions = [
    {
        question: "The alkaline earth metal sulphate(s) which are readily soluble in water is/are: A)BeSO4 B)MgSO4  C)CasO4  D)SrSO4  E)BasO4",
        options: ["A only ", " B only ", "A AND B ", "B AND C"],
        correctAnswer: "A AND B"
    },
    {
        question: "Amongst the following compounds , which one is an antacid ? (A) Ranitidine (B) Terfenadine (C) Meprobamate (D) Brompheniramine",
        options: ["", " ", "Meprobamate", "Brompheniramine"],
        correctAnswer: " "
    },
    {
        question: "Potassium dichromate acts as a strong oxidizing agent in acidic solution. During this process, the oxidation state changes from (1) +3 to +1 (2) +6 to +3 (3) +2 to +1 (4) +6 to +2  ",
        options: [" A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "The isomeric deuterated bromide with molecular formula CH Dbr having two chiral carbon atoms is (1) 2-Bromo-1-deuterobutane (2) 2-Bromo-2-deuterobutane (3) 2-Bromo-3-deuterobutane (4) 2-Bromo-1-deutro-2-methylpropane  ",
        options: [ "A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Which element is not present in nessler's reagent? (1) Mercury (2) POtassium (3) Iodine (4) Oxygen   ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "D"
    },
    {
        question: "An observer is moving with half the speed of light towards a stationary microwave source emitting waves at frequency 10 ghz What is the frequency of the microwave measured by the observer?(speed of light = 3 x 108 ms-1) (1) 12.1 Ghz (2) 17.3 Ghz (3) 15.3 Ghz (4) 10.1 Ghz",
        options: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "Which element is not present in nessler's reagent? (1) Mercury (2) POtassium (3) Iodine (4) Oxygen  ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "D"
    },
    {
        question: "An observer is moving with half the speed of light towards a stationary microwave source emitting waves at frequency 10 ghz What is the frequency of the microwave measured by the observer?(speed of light = 3 x 108 ms-1) (1) 12.1 Ghz (2) 17.3 Ghz (3) 15.3 Ghz (4) 10.1 Ghz  ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "A solid metal cube of edge length 2 cm is moving in the postive y direction at a constant speed of 6 m/s. There is a uniform magnetic field of 0.1 T in the positive z direction . The potential difference between the two faces of the cube perpendicular to the x axis, is: (1) 6 mv (2) 1 mv (3) 12 mv (4) 2 mv   ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "A 2W carbon resistor is color coded with green, black, red and brown respectively. The maximum current which can be passed through this resistor is: (1) 63 mA (2) 0.4 mA (3) 100 mA (4) 20 mA  ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Two guns A and B can fire buullets at speed 1 km/s  and 2km/s respectively. From a point on a horizontal ground , they are fired in all possible direction. The ratio of maximum areas covered by the bullets fired by two guns, on the ground is: (1) 1 : 2 (2) 1 : 4  (3) 1 : 8  (4) 1 : 16   ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "D"
    },
    {
        question: "Two hollow conducting spheres of radii R1 and R2 (R1 >> R2) have equal charges. The potential would be (1) More on bigger sphere (2) More on smaller sphere (3) Equal on both the spheres (4) Dependent on the material property of the sphere   ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },
    {
        question: "Which one of the following plants does not show plasticity? (1) Cotton (2) Coriander (3) Buttercup (4) Maize   ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "D"
    },
    {
        question: "XO type of sex distribution can be found in: (1) Drosophila  (2) Birds (3) Grasshoppers (4) Monkeys   ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Production of cucumber has increased manifold in recent years. Application of the following phytohormones has resulted in this increased yield as the hormone is known to produce female flowers in the plants: (1) ABA (2) Gibberellin (3) Ethylene  (4) Ctyokinin  ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "The devices which can remoove particulate matter present in the exhaust from a thermal power plant is: (1) STP (2) Incinerator  (3) Electrostatic Precipitator (4) Catalytic Convertor   ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Which one of the following plants shows vexillary aestivation and diadelphous stamens? (1) Colchium Autumnale (2) Pisum sativum (3) Allium cepa (4) Solanum nigrum    ",
        options: ["A", "B", "C", "D"],
        correctAnswer: "B"
    },


];

let currentQuestionIndex = 0;
let timer;

function startTimer() {
    let time = 60; // 60 seconds for each question
    timer = setInterval(() => {
        document.getElementById("time").textContent = time;
        time--;

        if (time < 0) {
            clearInterval(timer);
            // Move to the next question when time is up
            nextQuestion();
        }
    }, 1000);
}

function displayQuestion(index) {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const currentQuestion = questions[index];

    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < 4; i++) {
        const optionButton = document.getElementById(`option${i + 1}`);
        optionButton.textContent = currentQuestion.options[i];

        optionButton.addEventListener("click", () => {
            if (currentQuestion.options[i] === currentQuestion.correctAnswer) {
                clearInterval(timer);
                alert("Correct!");
                nextQuestion();
            } else {
                clearInterval(timer);
                alert("Incorrect!");
                nextQuestion();
            }
        });
    }

    startTimer();
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        // Quiz is finished
        alert("Quiz finished!");
    }
}

// Initial display
displayQuestion(currentQuestionIndex);