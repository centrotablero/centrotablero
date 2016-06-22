// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "",
        "main":    "<img src='http://95.85.56.122/quiz/qdqlogo.png'>",
        "results": "<h5></p>",
        "level1":  "Pablo Iglesias</br></br>Eres tan bueno que puedes vender Unidad y Patria en España, fraternidad y federalismo en Cataluña, y que te voten en ambos lugares. ¡Torero!",
        "level2":  "La Abuela Franquista</br></br>Enhorabuena: estás dentro de las posiciones de honor. ¡Venciste y vencerás!",
        "level3":  "Jorge Vestrynge</br></br>¡Lo has entendido casi a la perfección! Eres el conducto casi perfecto entre el neofascismo francés y el nacionalcomunismo patrio. ¡Impresionante!",
        "level4":  "Pablo Echenique</br></br>¡Muy bien! ¡Parece que el quiz te ha ido sobre ruedas! Sí. Sobre ruedas. Rue-das. ¿O esperabas que esto iba a ir todo el rato de humor sofisticado y cosmopolita, bandido?",
        "level5":  "Joan Coscubiela</br></br>¡Muy buen resultado! Yo lo celebraría con una foto intimista en blanco y negro. Serás la sensación en el instagram revolucionario.",
        "level6":  "José Bono</br></br>Sí, ya sabemos que tu padre era franquista, José. De verdad, no insistas más.",
        "level7":  "Sáenz de Ynestrillas</br></br>¡Buen trabajo! ¡Eres la prueba viviente de que se puede ser de Podemos sin dejar de ser facha!",
        "level8":  "Jean Marie Le Pen</br></br>Tu hija lo haría mejor que tú.",
        "level9":  "Manolo el del Bombo</br></br>Nunca fallas a las grandes citas. Lástima que este quiz no sea una de ellas.",
        "level10":  "José Antonio Samaranch</br></br>Si el fascismo fuese deporte olímpico hubieras conseguido un diploma. Todavía lejos de las medallas.",
        "level11":  "Salva Ballesta</br></br>Fallas más que aciertas, deberías pensar más con la cabeza que con los pies (en el supuesto de que piense).",
        "level12":  "Lluís Rabell</br></br>Haríamos un chiste muy gracioso con tu fracaso... si recordáramos quién eres.",
        "level13":  "Blas Piñar</br></br>Lo has inentado con todas tus fuerzas, pero te adornan más fracasos que aciertos.",
        "level14":  "Enric Juliana</br></br>Por mucho que te empeñes, no das ni una. Ya nadie te toma en serio.",
        "level15":  "Juan Carlos Monedero</br></br>Avergüenzas a Pablo. ¡Condenado al ostracismo!",
        "level16":  "Xavier Domènech</br></br>No te enteras de nada. Un abrazo fraternal." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "«El amor a tu Patria es un afecto político poderosísimo y noble en esencia»",
            "a": [
                {"option": "Le Pen",              "correct": false},
                {"option": "Falange",              "correct": false},
                {"option": "Podemos",      "correct": true}
                ],
            "correct": "<p><span>¡Correcto!</span></p><p> ¡Notamos dentro de ti un sano patriotismo popular!</p>",
            "incorrect": "<p><span>Has estado cerca, pero no. La respuesta era Podemos.</span></p><p>Entendemos tu confusión, no te rindas ahora.</p>" // no comma here
        },
        { // Question 2
            "q": "«Si hay una palabra que defina a nuestra candidatura es 'patriótica'»",
            "a": [
                {"option": "Falange",    "correct": false},
                {"option": "Le Pen",     "correct": false},
                {"option": "Podemos",   "correct": true} // no comma here
            ],
            "correct": "<p><span>¡Correcto!</span></p><p> ¡Te veo muy 'connossieur' del populismo europeo, bandido!</p>",
            "incorrect": "<p><span>Error, la frase es de Pablo Iglesias.</span></p><p> ¿Para qué ir tan lejos cuando tienes la verdad tan cerca?</p>" // no comma here
        },
             { // Question 3
            "q": "«Estamos participando en una espiral de austeridad sin fin para salvar el euro y el modelo alemán de salarios bajos»",
            "a": [
                {"option": "Le Pen",    "correct": true},
                {"option": "Podemos",     "correct": false},
                {"option": "Falange",   "correct": false} // no comma here
            ],
            "correct": "<p><span>¡Acierto!</span></p><p>¿De verdad que no estás en uno de esos Círculos dándolo todo como si no hubiera mañana? </p>",
            "incorrect": "<p><span>La frase es de Marine Le Pen, lo sentimos.</span></p><p> ¡No te rindas ahora, dalo todo en la próxima! ¡Sí se puede, sí se puede! </p>" // no comma here
        },
             { // Question 4
            "q": "«Patria es defender a un ejército donde la promoción de la tropa sea en base a la igualdad, mérito y capacidad»",
            "a": [
                {"option": "Falange",    "correct": false},
                {"option": "Le Pen",     "correct": false},
                {"option": "Podemos",   "correct": true} // no comma here
            ],
            "correct": "<p><span>¡BOOM! ¡Diste en el blanco!</span></p><p>Por tierra, mar y aire. ¡Estás 'on fire', soldado!</p>",
            "incorrect": "<p><span>Es de Pablo Iglesias. ¡Error!</span></p><p>¡A fregar letrinas, cadete!</p>" // no comma here
        },
             { // Question 5
            "q": "«Ser patriota es defender a tu gente frente a los intereses de las empresas extranjeras»",
            "a": [
                {"option": "Le Pen",    "correct": false},
                {"option": "Podemos",     "correct": true},
                {"option": "Falange",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correcto.</span></p><p>¡Recórcholis! ¡Qué maravilla de concursante!</p>",
            "incorrect": "<p><span>¡Nooo! La frase es de Podemos.</span></p><p>¿No serás extranjero, verdad?</p>" // no comma here
        },
             { // Question 6
            "q": "«Los comunistas y los socialdemócratas son especies del pasado»",
            "a": [
                {"option": "Falange",    "correct": false},
                {"option": "Podemos",     "correct": true},
                {"option": "Le Pen",   "correct": false} // no comma here
            ],
            "correct": "<p><span>¡Gol! La frase es de Iñigo Errejón.</span></p><p>¡Te vemos de actualidad total, no eres del pasado para nada!</p>",
            "incorrect": "<p><span>¡Fuera! La respuesta correcta era 'Iñigo Errejón'.</span></p><p>Menudo fallo. ¿No serás una especie del pasado tu también, verdad?</p>" // no comma here
        },
             { // Question 7
            "q": "«Ni Podemos ni Marine Le Pen son populistas»",
            "a": [
                {"option": "Podemos",    "correct": true},
                {"option": "Le Pen",   "correct": false} // no comma here
            ],
            "correct": "<p><span>¡Nos pillaste!</span></p><p>A diferencia del resto, esta tenía truco. ¡Menudo lince!</p>",
            "incorrect": "<p><span>Caíste, era de Podemos.</span></p><p>A diferencia del resto, esta pregunta tenía truco. Normal que hayas picado.</p>" // no comma here
        },
             { // Question 8
            "q": "«Nadie nos tiene que dar lecciones de patriotismo. Esto es hacer patria»",
            "a": [
                {"option": "Falange",    "correct": false},
                {"option": "Le Pen",     "correct": false},
                {"option": "Podemos",   "correct": true} // no comma here
            ],
            "correct": "<p><span>¡Tú sí que puedes!</span></p><p>Responder este quiz también es hacer patria, ¡claro que sí!</p>",
            "incorrect": "<p><span>¡Patinazo! La frase es de Podemos.</span></p><p>Creemos que necesitas lecciones de patriotismo.</p>" // no comma here
        },
             { // Question 9
            "q": "«Queremos menos palabrería liberal y más respeto a la libertad profunda del hombre»",
            "a": [
                {"option": "Falange",    "correct": false},
                {"option": "Podemos",     "correct": true},
                {"option": "Le Pen",   "correct": false} // no comma here
            ],
            "correct": "<p><span>¡Claro que sí! La frase es de Pablo Echenique.</span></p><p>Esta era complicada, pero ni así fallaste. ¡Felicidades!</p>",
            "incorrect": "<p><span>Error. La respuesta es 'Pablo Echenique'.</span></p><p>Menos palabrería y más contestar preguntas como Dios manda, compañero.</p>" // no comma here
        },
             { // Question 10
            "q": "«¡Gibraltar Español!»",
            "a": [
                {"option": "José María Aznar",    "correct": false},
                {"option": "Juan Carlos I",     "correct": false},
                {"option": "Pablo Iglesias",      "correct": false},
                {"option": "Todos ellos",   "correct": true} // no comma here
            ],
            "correct": "<p><span>¡Menudo crack!</span></p><p>Esta era la más truculenta hasta el momento, pero ni así hemos logrado cazarte. ¡Fenómeno!</p>",
            "incorrect": "<p><span>¡Ha! La respuesta esa 'Todos ellos'.</span></p><p>¡No podemos creer que hayas caído en una trampa tan facilona!</p>" // no comma here
        },
             { // Question 11
            "q": "«No es tolerable que masas enormes vivan miserablemente mientras unos cuantos disfrutan de todos los lujos»",
            "a": [
                {"option": "Falange",    "correct": true},
                {"option": "Podemos",      "correct": false},
                {"option": "Le Pen",   "correct": false} // no comma here
            ],
            "correct": "<p><span>¡Correcto!</span></p><p>¡Menudo Florido Pensil estás hecho!</p>",
            "incorrect": "<p><span>Lástima, la respuesta correcta es 'Falange'.</span></p><p>Entendemos tu confusión, camarada: quizás la nueva politica no sea tan nueva como parece.</p>" // no comma here
        },
             { // Question 12
            "q": "«Tras la caída del muro de Berlín ya no existe la lógica de la derecha y de la izquierda»",
            "a": [
                {"option": "Falange",    "correct": false},
                {"option": "Le Pen",     "correct": false},
                {"option": "Podemos",   "correct": true} // no comma here
            ],
            "correct": "<p><span>YASSSSSS, la frase es de Pablo Iglesias.</span></p><p>Te veo muy docto en política europea, compañero.</p>",
            "incorrect": "<p><span>Fallaste, lo sentimos: la frase es de Pablo Iglesias.</span></p><p>Try again, Fräulein.</p>" // no comma here
        },
            { // Question 13
          "q": "«El problema de Europa no es Grecia, sino el sistema liberal capitalista al servicio del poder financiero que está aniquilando a sus naciones»",
          "a": [
              {"option": "Falange",    "correct": true},
              {"option": "Le Pen",     "correct": false},
              {"option": "Podemos",   "correct": false} // no comma here
            ],
       "correct": "<p><span>NAI.</span></p><p>Que viene a ser que sí, que acertaste, en griego. ¿O era al revés? El resultado de ese referendum aún nos tiene confundidos.</p>",
       "incorrect": "<p><span>OXI. (La correcta es 'Falange').</span></p><p>Que viene a ser que no, que no acertaste. En Griego.</p>" // no comma here
      },
      { // Question 14
    "q": "«La globalización es que fabriquen los esclavos para vender a los desempleados»",
    "a": [
        {"option": "Le Pen",    "correct": true},
        {"option": "Podemos",     "correct": false},
        {"option": "Falange",   "correct": false} // no comma here
      ],
 "correct": "<p><span>¡Correcto!</span></p><p>¿Eres esclavo o desempleado? Debes tener mucho tiempo libre para estar contestando este quiz. Desempleadoo, entonces.</p>",
 "incorrect": "<p><span>¡Incorrecto¡ ¿Quieres saber la correcta? Es de madame Le Pen.</span></p><p>¿Eres esclavo o desempleado? Debes tener mucho tiempo libre para estar contestando este quiz. Desempleado, entonces.</p>" // no comma here
},
{ // Question 15
"q": "«Entre Podemos y Le Pen sí hay un hilo: la necesidad de volver a reconstruir comunidad y sentirse parte de algo; de una patria democrática que en las malas me protege»",
"a": [
  {"option": "Le Pen",    "correct": false},
  {"option": "Podemos",   "correct": true} // no comma here
],
"correct": "<p><span>¡Oh là là!</span></p><p>Qué maravilla la transversalidad, ¿verdad?</p>",
"incorrect": "<p><span>¡Sacre bleu, es de Podemos!</span></p><p>Qué maravilla la transversalidad, ¿verdad?</p>" // no comma here
},
{ // Question 16
"q": "«Defender la independencia de Venezuela e incumplir los compromisos internacionales adquiridos en el pasado que menoscaben la dignidad y soberanía de Venezuela y de los Venezolanos.»",
"a": [
  {"option": "Le Pen",    "correct": false},
  {"option": "Falange",    "correct": true},
  {"option": "Podemos",   "correct": false} // no comma here
],
"correct": "<p><span>¡Impresionante!</span></p><p>La pregunta tenía truco: se trata de la Unión Falangista Venezolana. Qué cosas, ¿verdad?</p>",
"incorrect": "<p><span>¡Error! Es de la Falange!</span></p><p>La pregunta tenía truco: se trata de la Unión Falangista Venezolana. Qué cosas, ¿verdad?</p>" // no comma here
},
    ]
};
