
//I  wanted to have a correct answer screen after each question, but ran out of time.
//Struggled a lot with OB1 problems on this one!

// Array containing questions, answers, correctAnswer, and link to image
const triviaQuestions = [
    { 
        question: 'Pablo Picasso\'s real name is actually how many words long?',
        answers:  ['a. 5', 'b. 12', 'c. 23', 'd. 19'],
        correctAnswer: 'c. 23',
        fullAnswer: ' c. 23 (Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Martyr Patricio Clito Ruíz y Picasso)',
        image: 'picasso.jpg'
    },
    {
        question: 'English artist Andy Brown created a portrait of Queen Elizabeth II using what?',
        answers: ['a. Used bras', 'b. Used tea bags', 'c. Used handkerchiefs', 'd. Used wigs'],
        fullAnswer: 'b. Used tea bags',
        correctAnswer: 'b. Used tea bags',
        image: 'AndyBrown.jpg'
    },
    {
        question: 'How many paintings did Vincent Van Gogh sell in his lifetime?',
        answers: ['a. 1', 'b. 3', 'c. 5', 'd. 7'],
        correctAnswer: 'a. 1',
        fullAnswer: 'a. 1',
        image: 'vanGogh.jpg'
    },
    {
        question: 'Which architect was responsible for the glass Pyramid at the Lourve?',
        answers: ['a. Louis Le Vau', 'b. Ieoh M Pei', 'c. François Mansart', 'd. Henri Labrouste'],
        correctAnswer: 'b. Ieoh M Pei',
        fullAnswer: 'b. Ieoh M Pei',
        image: 'louvre.jpg'
    },
    {
        question: 'Pop Art originated in which city?',
        answers: ['a. Amsterdam', 'b. New York', 'c. Frankfurt', 'd. London'],
        correctAnswer: 'd. London',
        fullAnswer: 'd. London',
        image: 'warhol.jpg'
    },
    {
        question: 'How many times has the Mona Lisa been stolen?',
        answers: ['a. 8', 'b. 13', 'c. 1', 'd. 22'],
        correctAnswer: 'c. 1',
        fullAnswer: 'c. 1 (in August 21, 1911)',
        image: 'monaLisa.jpg'
    },
    {
        question: 'Whose art style became known as Surrealism?',
        answers: ['a. Francisco de Goya', 'b. Edgar Degas', 'c. Peter Paul Rubens', 'd. Salvador Dali'],
        correctAnswer: 'd. Salvador Dali',
        fullAnswer: 'd. Salvador Dali',
        image: 'madonna.jpg'
    },
    {
        question: ' In which year was the Bauhaus School of Design closed?',
        answers: ['a. 1914', 'b. 1933', 'c. 1952', 'd. 1969'],
        correctAnswer: 'b. 1933',
        fullAnswer: ' b. 1933 (closed by the Nazis) ',
        image: 'bauhaus.jpeg'
    },
    {
        question: 'Michelangelo considered himself a sculptor first. Which was his favorite rock?',
        answers: ['a. Quartz', 'b. Granite', 'c. Marble', 'd. Onyx'],
        correctAnswer: 'c. Marble',
        fullAnswer: 'c. Marble',
        image: 'moses.jpg'
    },
    {
        question: '\'Fall of Man\' was painted by whom?',
        answers: ['a. Durer', 'b. Delacroix', 'c. Hockney', 'd. Gris'],
        correctAnswer: 'a. Durer',
        fullAnswer: 'a. Durer',
        image: 'fallofMan.jpg'
    },
    {
        question: 'Leonardi Da Vinci is said to have invented which one of these items?',
        answers: ['a. Kites', 'b. High heels', 'c. Gunpowder', 'd. Wine cork'],
        correctAnswer: 'b. High heels',
        fullAnswer: 'b. High heels.  While he may have designed a heel or two, the history of high heels predates the Renaissance polymath.',
        image: 'Leonardo_helicopter.jpeg'
    },
    {
        question: 'Marvel Comics artist Jack Kirby was affectionately known by which nickname?',
        answers: ['a. The Founder', 'b. The Artist', 'c. The Prophet', 'd. The King'],
        correctAnswer: 'd. The King',
        fullAnswer: 'd. The King',
        image: 'jackKirby.jpg'
    },
    {
        question: 'How long was the original shark used in Damian Hirst\'s iconic work \'The Physical Impossibility of Death in the Mind of Someone Living\'?',
        answers: ['a. 14 feet', 'b. 19 feet', 'c. 23 feet', 'd. 30 feet'],
        correctAnswer: 'a. 14 feet',
        fullAnswer: 'a. 14 feet',
        image: 'shark.jpg'
    },
    {
        question: 'Which type of paint does NOT use the color white?',
        answers: ['a. Acrylic', 'b. Casein', 'c. Gouache', 'd. Watercolor'],
        correctAnswer: 'd. Watercolor',
        fullAnswer: 'd. Watercolor',
        image: 'turner.jpg'
    },
    {
        question: 'Who once declared \"Art is anything you can get away with\"?',
        answers: ['a. Tracy Enim', 'b. Andy Warhol', 'c. Cornelia Parker', 'd. Claude Monet'],
        correctAnswer: 'b. Andy Warhol',
        fullAnswer: 'b. Andy Warhol is commonly credited with using the phrase coined by Canadian media guru, Marshall McLuhan',
        image: 'Fountain.jpg'
    },
    {
        question: 'Which artist created the concrete cast of the interior of an entire Victorian house?',
        answers: ['a. Antony Gormley', 'b. Mona Hatoum', 'c. Rachel Whiteread', 'd. Edward Allington'],
        correctAnswer: 'c. Rachel Whiteread',
        fullAnswer: 'c. Rachel Whiteread',
        image: 'house.jpg'
    }, 
    {
        question: 'Rousseau\'s \'The Repast of the Lion\' is an example of what type of art?',
        answers: ['a. Color Field', 'b. Institutional Gothic', 'c. Maximalism', 'd. Naïve Art'],
        correctAnswer: 'd. Naïve Art',
        fullAnswer: 'd. Naïve Art',
        image: 'repastofLion.jpg'
    },
    
    {
        question: 'Which art movement claimed to be anti-art?',
        answers: ['a. Dada', 'b. Cubism', 'c. Art Nouveau', 'd. Fauvism'],
        correctAnswer: 'a. Dada',
        fullAnswer: 'a. Dada',
        image: 'anti-art.jpg'
    },
    {
        question: 'Who painted \'The Conversion of St. Paul\'?',
        answers: ['a. Constable', 'b. Caravaggio', 'c. El Greco', 'd. Van Gogh'],
        correctAnswer: 'b. Caravaggio',
        fullAnswer: 'b. Caravaggio',
        image: 'stPaul.jpg'
    },
    {
        question: 'Name the technique that places lines closely side by side.',
        answers: ['a. Hatching', 'b. Screentone', 'c. Whittling', 'd. Pholage'],
        correctAnswer: '',
        fullAnswer: '',
        image: 'technique.png'
    }
]
// Global variables
var index = 0
var i = 0
let score = 0
let wrong = 0
var btnAns

// Cycle through the questions on a timer
function intro() {
    index = 0;
    fillQuestions(index);
    var intervalId =
    setInterval(function(){
        fillQuestions(index);
        btns(index);
        if(index === triviaQuestions.length-1){
           clearInterval(intervalId);
        }
        index++;
    }, 6000); 
    
};


// Display question and multiple choices
function fillQuestions(index) {
    const questn = triviaQuestions[index].question
    const imgUrl = triviaQuestions[index].image
    const multChoice = triviaQuestions[index].answers
    $('#question').text(questn); 
    $('#artImage').attr("src", './assets/images/'+imgUrl);
    //Create buttons for each of the choices
    $('#choices').empty();
    for (let i = 0; i < multChoice.length; i++) {
        const btnAns = multChoice[i]
         $('#choices').append('<button class="ansButton" data-value="'+btnAns+'">' + multChoice[i] + '</button>');
        }  
}
function btns() {
    $('button.ansButton').on("click", (function() {
        var response  = ($(this).attr("data-value"));
       $('button').off("click");
        checkAnswer(response)
        
    // On click, compare user answer to correct answer and advance to next question

function checkAnswer(ans){
   let corrAns = triviaQuestions[index-1].correctAnswer
  
   console.log('Guess: ' + ans +' Answer: '+ corrAns);
   // Store score right/wrong
   if (ans === corrAns) {
       score++;
    } else {
        wrong++;
    }
    $('#score').empty(); 
    $('#score').append('Correct:' +score + '<br> Wrong:' +wrong);
}

    index++;
    fillQuestions(index);
    }));
}

// Show correct answer for a few seconds before advancing to next question.
    function rightAnswer(ans) { 
        $('#question').empty();
        $('#choices').empty();
        $('#question').append(ans)
        
     }

// On click or when time runs out, move to next question