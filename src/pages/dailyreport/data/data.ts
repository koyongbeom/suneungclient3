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



export const qrSeatData = {
    gangnam : gangnamQrMapping,
    daechi : daechiQrMapping,
    daechi2 : daechi2QrMapping,
    daechi3 : daechi3QrMapping
}

export const patrolTime = [
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
]
