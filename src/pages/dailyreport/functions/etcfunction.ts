export const classInfo = [
    {
        classNumber : "zero",
        start : {
            hours : 8,
            minutes : 0
        },
        end : {
            hours : 8,
            minutes : 45
        }

    },
    {
        classNumber : "first",
        start : {
            hours : 9,
            minutes : 0
        },
        end : {
            hours : 10,
            minutes : 15
        }
    },
    {
        classNumber : "second",
        start :  {
            hours : 10,
            minutes : 30
        },
        end : {
            hours : 11,
            minutes : 45
        }
    },
    {
        classNumber : "third",
        start : {
            hours : 13,
            minutes : 0
        },
        end : {
            hours : 14,
            minutes : 15
        }
    },
    {
        classNumber : "fourth",
        start : {
            hours : 14,
            minutes : 30
        },
        end : {
            hours : 15,
            minutes : 45
        }

    },
    {
        classNumber : "fifth",
        start : {
            hours : 16,
            minutes : 0
        },
        end : {
            hours : 17,
            minutes : 15
        }
    },
    {
        classNumber : "sixth",
        start : {
            hours : 18,
            minutes : 30
        },
        end : {
            hours : 19,
            minutes : 30
        }

    },
    {
        classNumber : "seventh",
        start : {
            hours : 19,
            minutes : 45
        },
        end : {
            hours : 20,
            minutes : 45
        }

    },
    {
        classNumber : "eighth",
        start : {
            hours : 21,
            minutes : 0
        },
        end : {
            hours : 22,
            minutes : 0
        }
    }

];

export const ourLocationInfo = [
    {
        korean : "강남점",
        english : "gangnam"
    },
    {
        korean : "대치점",
        english : "daechi"
    },
    {
        korean : "대치3층",
        english : "daechi2"
    },
    {
        korean : "대치6층",
        english : "daechi3"
    },
    {
        korean : "송도",
        english : "songdo_fixed"
    },
    {
        korean : "송도",
        english : "songdo_free"
    }
]

export const koreanLocationToEnglish = (koreanLocation : string) => {
    
    const location = ourLocationInfo.find((location) => location.korean === koreanLocation);

    if(location){
        return location.english;
    }

}

export const englishLocationToKorean = (englishLocation : string) => {
    
    const location = ourLocationInfo.find((location) => location.english === englishLocation);

    if(location){
        return location.korean;
    }

}