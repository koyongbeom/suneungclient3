interface PatrolTime {
    class : number;
    time : string[];
}

const daechiQrMapping = {
    "1" : { min: 1, max: 4 },
    "2" : { min: 5, max: 11 },
    "3" : { min: 12, max: 20 },
    "4" : { min: 21, max: 28 },
    "5" : { min: 29, max: 37 },
    "6" : { min: 38, max: 47 },
    "7" : { min: 48, max: 56 },
    "8" : { min: 57, max: 64 },
    "9" : { min: 65, max: 70 },
    "10" : { min: 71, max: 73 }
}

const gangnamQrMapping = {
    "1" : { min: 1, max: 10 },
    "2" : { min: 11, max: 19 },
    "3" : { min: 20, max: 29 },
    "4" : { min: 30, max: 39 },
    "5" : { min: 40, max: 51 },
    "6" : { min: 52, max: 55 },
    "7" : { min: 56, max: 61 },
    "8" : { min: 62, max: 69 },
    "9" : { min: 70, max: 75 }
}

const daechi2QrMapping = {
    "1" : { min: 101, max: 110 },
    "2" : { min: 111, max: 120 },
    "3" : { min: 121, max: 129 },
    "4" : { min: 130, max: 136 },
    "5" : { min: 137, max: 146 },
    "6" : { min: 147, max: 156 },
    "7" : { min: 157, max: 164 },
    "8" : { min: 165, max: 172 },
    "9" : { min: 173, max: 178 },
    "10" : { min: 179, max: 184 }
}

const daechi3QrMapping = {
    "1": { min: 201, max: 210 },
    "2": { min: 211, max: 220 },
    "3": { min: 221, max: 229 },
    "4": { min: 230, max: 236 },
    "5": { min: 237, max: 242 },
    "6": { min: 243, max: 248 },
    "7": { min: 249, max: 252 },
    "8": { min: 253, max: 260 },
    "9": { min: 261, max: 266 },
    "10": { min: 267, max: 273 }
}

const molipQrMapping = {
    "1" : {min : 1, max : 5},
    "2" : {min : 6, max : 14},
    "3" : {min : 15, max : 24},
    "4" : {min : 25, max : 34},
    "5" : {min : 35, max : 50},
    "6" : {min : 51, max : 62},
    "7" : {min : 63, max : 74},
    "8" : {min : 75, max : 85},
    "9" : {min : 86, max : 105},
}

const bundangQrMapping = {
    "1": { min: 1, max: 9 },
    "2": { min: 10, max: 18 },
    "3": { min: 19, max: 28 },
    "4": { min: 29, max: 38 },
    "5": { min: 39, max: 48 },
    "6": { min: 49, max: 57 },
    "7": { min: 58, max: 67 },
    "8": { min: 68, max: 77 },
    "9": { min: 78, max: 82 },
    "10": { min: 83, max: 85 },
    "11": { min: 86, max: 93 },
    "12": { min: 94, max: 101 },
    "13": { min: 102, max: 108 },
    "14": { min: 109, max: 116 },
    "15": { min: 117, max: 124 },
    "16": { min: 125, max: 132 },
    "17": { min: 133, max: 139 },
    "18": { min: 140, max: 146 }
}



export const qrSeatData = {
    gangnam : gangnamQrMapping,
    daechi : daechiQrMapping,
    daechi2 : daechi2QrMapping,
    daechi3 : daechi3QrMapping,
    molip : molipQrMapping,
    bundang : bundangQrMapping
}

// export const patrolTime = [
//     {
//         class : 1,
//         time : ["8:00", "8:20", "8:40"]
//     },
//     {
//         class : 2,
//         time : ["9:00", "9:20", "9:40", "10:00"]
//     },
//     {
//         class : 3,
//         time : ["10:30", "10:50", "11:10", "11:30"]
//     },
//     {
//         class : 4,
//         time : ["13:00", "13:20", "13:40", "14:00"]
//     },
//     {
//         class : 5,
//         time : ["14:30", "14:50", "15:10", "15:30"]
//     },
//     {
//         class : 6,
//         time : ["16:00", "16:20", "16:40", "17:00"]
//     },
//     {
//         class : 7,
//         time : ["18:30", "18:50", "19:10"]
//     },
//     {
//         class : 8,
//         time : ["19:45", "20:05", "20:25"]
//     },
//     {
//         class : 9,
//         time : ["21:00", "21:20", "21:40"]
//     },
// ]

export const returnCountOfClasses = (academy : string) => {

    interface ClassData {
        day : number;
        saturday : number;
    }

    interface ClassDatas {
        [key : string] : ClassData;
    }

    const classDatas : ClassDatas = {
        sunbae : {
            day : 9,
            saturday : 5
        },
        bundangsunbae : {
            day : 9,
            saturday : 5
        },
        molip : {
            day : 7,
            saturday : 7
        },
        mom : {
            day : 12,
            saturday : 12
        }
    }

    return classDatas[academy];

}

export const returnPatrolTime = (academy : string) => {

    if(!academy){
        return [];
    }

    const classDatas : Record<string, PatrolTime[]> = {
        sunbae : [
            {
                class : 1,
                time : ["8:00", "8:20", "8:40"]
            },
            {
                class : 2,
                time : ["9:00", "9:20", "9:40", "10:00"]
            },
            {
                class : 3,
                time : ["10:30", "10:50", "11:10", "11:30"]
            },
            {
                class : 4,
                time : ["13:00", "13:20", "13:40", "14:00"]
            },
            {
                class : 5,
                time : ["14:30", "14:50", "15:10", "15:30"]
            },
            {
                class : 6,
                time : ["16:00", "16:20", "16:40", "17:00"]
            },
            {
                class : 7,
                time : ["18:30", "18:50", "19:10"]
            },
            {
                class : 8,
                time : ["19:45", "20:05", "20:25"]
            },
            {
                class : 9,
                time : ["21:00", "21:20", "21:40"]
            },
        ],
        mom : [
            {
                class : 1,
                time : ["8:00", "8:20", "8:40"]
            },
            {
                class : 2,
                time : ["9:00", "9:20", "9:40", "10:00"]
            },
            {
                class : 3,
                time : ["10:20", "10:40", "11:00", "11:20", "11:40"]
            },
            {
                class : 4,
                time : ["13:00", "13:20", "13:40", "14:00"]
            },
            {
                class : 5,
                time : ["14:20", "14:40", "15:00", "15:20", "15:40"]
            },
            {
                class : 6,
                time : ["16:00", "16:20", "16:40"]
            },
            {
                class : 7,
                time : ["17:00", "17:20", "17:40"]
            },
            {
                class : 8,
                time : ["19:00", "19:20", "19:40", "20:00"]
            },
            {
                class : 9,
                time : ["20:20", "20:40", "21:00"]
            },
            {
                class : 10,
                time : ["21:20", "21:40", "22:00"]
            },
            {
                class : 11,
                time : ["22:20", "22:40", "23:00"]
            },
            {
                class : 12,
                time : ["23:20", "23:40"]
            }
        ],
        molip : [
            {
                class : 1,
                time : ["9:00", "9:30", "10:00"]
            },
            {
                class : 2,
                time : ["10:40", "11:10", "11:40"]
            },
            {
                class : 3,
                time : ["13:10", "13:40", "14:10"]
            },
            {
                class : 4,
                time : ["14:50", "15:20", "15:50"]
            },
            {
                class : 5,
                time : ["16:30", "17:00", "17:30"]
            },
            {
                class : 6,
                time : ["19:00", "19:30", "20:00"]
            },
            {
                class : 7,
                time : ["20:40", "21:10", "21:40"]
            }
        ],
        bundangsunbae : [
            {
                class : 1,
                time : ["8:00", "8:20", "8:40"]
            },
            {
                class : 2,
                time : ["9:00", "9:20", "9:40", "10:00"]
            },
            {
                class : 3,
                time : ["10:30", "10:50", "11:10", "11:30"]
            },
            {
                class : 4,
                time : ["13:00", "13:20", "13:40", "14:00"]
            },
            {
                class : 5,
                time : ["14:30", "14:50", "15:10", "15:30"]
            },
            {
                class : 6,
                time : ["16:00", "16:20", "16:40", "17:00"]
            },
            {
                class : 7,
                time : ["18:30", "18:50", "19:10"]
            },
            {
                class : 8,
                time : ["19:45", "20:05", "20:25"]
            },
            {
                class : 9,
                time : ["21:00", "21:20", "21:40"]
            },
        ],
    }

    const patrolTime = classDatas[academy];

    if(!patrolTime){
        return [];
    }

    return patrolTime;

}


export const whichAcademyIncludeLocation = (location : string) => {

    const academy = {
        sunbae : ["gangnam", "daechi", "daechi2", "daechi3", "bundang"],
        mom : ["songdo_fixed", "songdo_free"],
        molip : ["molip"],
    }

    for(const [key, value] of Object.entries(academy)){
        if(value.includes(location)){
            return key;
        }
    }

}
