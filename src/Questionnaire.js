
function questionnaire(count = 10) {
    const qA = [{
        question: "How many continents are there?",
        option: ["A) 11", "B) 9", "C) 7", "D) 6"],
        answer: "7"
    },

    {
        question: "What is the capital of Austria?",
        option: ["A) Budapest", "B) Vienna", "C) Helsinki", "D) Venice"],
        answer: "Vienna"
    },

    {
        question: "Which country is Bucharest located?",
        option: ["A) UAE", "B) Canada", "C) Portugal", "D) Romania"],
        answer: "Romania"
    },

    {
        question: "Where is mount Everest located?",
        option: ["A) Kenya", "B) Spain", "C) Nepal", "D) Hawai"],
        answer: "Nepal"
    },

    {
        question: "The name of the longest River in the world is?",
        option: ["A) Mississippi", "B) Nile", "C) Yangzte", "D) Ganges"],
            answer: "Nile"
        },

        {
            question: "Which of these countries belonged to the former USSR?",
            option: ["A) Niger", "B) Russia", "C) Belgium", "D) England"],
            answer: "Russia"
        },

        {
            question: "Which of the following cities lies on the GMT?",
            option: ["A) Yaounde", "B) Lagos", "C) London", "D) Ankara"],
            answer: "London"
        },

        {
            question: "Where is the Grand Canyon located?",
            option: ["A) Utah", "B) Texas", "C) Arizona", "D) California"],
            answer: "Arizona"
        },

        {
            question: "Olympus Mons is the name of a mountain located in which of these planets?",
            option: ["A) Mars", "B) Earth", "C) Venus", "D) Neptune"],
            answer: "Mars"
        },
        {
            question: "Which of the following countries lies on GMT?",
            option: ["A) Algeria", "B) Ghana", "C) Tunisia", "D) Lesotho"],
            answer: "Ghana"
        },

        {
            question: "The name of the largest River in the world in terms of volume is?",
            option: ["A) Niger", "B) Limpopo", "C) Amazon", "D) Nile"],
            answer: "Amazon"
        },


        {
            question: "The highest mountain on Earth is named, Mount?",
            option: ["A) Everest", "B) Kilimanjaro", "C) Kilau", "D) Pele"],
            answer: "Everest"
        },


        {
            question: "One of the following is not a type of rainfall",
            option: ["A) Convectional", "B) Orogenic", "C) Beach", "D) Relief"],
            answer: "Beach"
        },
        {
            question: "One of the following is not a type of climate",
            option: ["A) Typhoon", "B) Mediterranean", "C) Temperate", "D) Tropical"],
            answer: "Typhoon"
        },

        {
            question: "All the following is a type of season except?",
            option: ["A) Fall", "B) Winter", "C) Harmattan", "D) Sunny"],
            answer: "Sunny"
        },

        {
            question: "All the following is a type of natural disaster except?",
            option: ["A) Flooding", "B) Tsunami", "C) Earthquacke", "D) Hurricane"],
            answer: "Earthquacke"
        },



        {
            question: "The Prime Latitude is called?",
            option: ["A) Tropics of Cancer", "B) Artic Circle", "C) Equator", "D) Lat"],
            answer: "Equator"
        },
        {
            question: "Which of the following rocks is formed from magma?",
            option: ["A) Granite", "B) Shale", "C) Limestone", "D) Marble"],
            answer: "Granite"
        },

        {
            question: "Which of these is caused by wind action?",
            option: ["A) Butte", "B) Cliff", "C) Stalagmite", "D) Karst"],
            answer: "Butte"
        },

        {
            question: "Which of the below is formed at the late stage of a river?",
            option: ["A) V shaped Valley", "B) Rapids and Cataract", "C) Ox-Bow Lake", "D) Delta"],
            answer: "Delta"
        },



        {
            question: "Which of the countries below is the largest in land mass?",
            option: ["A) Canada", "B) China", "C) Russia", "D) India"],
            answer: "Russia"
        },
        {
            question: "Which of the below is not a continent?",
            option: ["A) Africa", "B) USA", "C) Austalia", "D) Europe"],
            answer: "USA"
        },


        {
            question: "A place where the Water Table intersects the surface in a desert is called?",
            option: ["A) Well", "B) Stream", "C)Oasis", "D) River"],
            answer: "Oasis"
        },

        {
            question: "Sandstorm is a feature of what type of vegetation belt?",
            option: ["A) Rain Forest", "B) Mangroove", "C) Desert", "D) Guinea Savannah"],
            answer: "Desert"
        },
        {
            questio: "where is river niger located?",
            option:["A)Nigeria","B) Egypt", "C)Togo","D) Morocco" ],
            answer:"Nigeria"
        }


    ]
    return (
        qA.sort(() => { return (Math.random() - Math.random()) }).slice(0, count)
    )

}
export default questionnaire;