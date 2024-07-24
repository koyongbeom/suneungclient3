import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../svg/logo/logo.svg";
import { set } from "lodash";

const classInfo = [
    {
        classNumber : "1교시",
        start : {
            hours : 8,
            minutes : 0
        },
        end : {
            hours : 9,
            minutes : 50
        },
        isFirst : true
    },
    {
        classNumber : "2교시",
        start : {
            hours : 10,
            minutes : 0
        },
        end : {
            hours : 12,
            minutes : 0
        }
    },
    {
        classNumber : "3교시",
        start : {
            hours : 13,
            minutes : 0
        },
        end : {
            hours : 14,
            minutes : 50
        }
    },
    {
        classNumber : "4교시",
        start : {
            hours : 15,
            minutes : 0
        },
        end : {
            hours : 16,
            minutes : 50
        }
    },
    {
        classNumber : "5교시",
        start : {
            hours : 17,
            minutes : 0
        },
        end : {
            hours : 18,
            minutes : 0
        }
    },
    {
        classNumber : "6교시",
        start : {
            hours : 19,
            minutes : 0
        },
        end : {
            hours : 20,
            minutes : 50
        }
    },
    {
        classNumber : "7교시",
        start : {
            hours : 21,
            minutes : 0
        },
        end : {
            hours : 22,
            minutes : 50
        },
        isLast : true
    },
    {
        classNumber : "8교시",
        start : {
            hours : 23,
            minutes : 0
        },
        end : {
            hours : 23,
            minutes : 59
        },
    },
    {
        classNumber : "lunch",
        start : {
            hours : 12,
            minutes : 0
        },
        end : {
            hours : 13,
            minutes : 0
        }
    },
    {
        classNumber : "dinner",
        start : {
            hours : 18,
            minutes : 0
        },
        end : {
            hours : 19,
            minutes : 0
        }
    }
]

const TvShowPage2: React.FC<any> = (props) => {

    const [time, setTime] = useState(new Date());
    const [currentClass, setCurrentClass] = useState();
    const [type, setType] = useState<"class" | "break" | "lunch" | "dinner" | "">("");
    const [string, setString] = useState("");




    useEffect(() => {
        const timer = setInterval(() => {

            setTime(new Date());

            const date = new Date();
            const currentTime = date.getHours() * 60 + date.getMinutes();

            var type: "lunch" | "dinner" | "class" | "break" | "" = "";

            classInfo.forEach((classInfo) => {

                const start = classInfo.start.hours * 60 + classInfo.start.minutes;
                const end = classInfo.end.hours * 60 + classInfo.end.minutes;

                if (currentTime >= start && currentTime < end) {
                    const classNumber = classInfo.classNumber;

                    if (classNumber === "lunch") {
                        type = "lunch";
                        setString("점심시간");
                    } else if (classNumber === "dinner") {
                        type = "dinner";
                        setString("저녁시간");
                    } else {
                        type = "class";
                        setString(classNumber);
                    }

                }
            });

            if (!type) {
                type = "break";
                setString("휴식시간");
            }

            setType(type);

        }, 1000);
        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    const formatTime = (time: Date) => {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div style={{ fontSize: '24em', display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 50px)" }}>
            {/* {formatTime(time)} */}

            <div style={{
                fontWeight: 500
            }}>
                <div style={{
                    fontSize: "0.9em",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom : "24px"
                }}>
                    {string}
                </div>
                <div>
                    {formatTime(time)}
                </div>
            </div>


            <div style={{
                position: "fixed",
                right: "30px",
                bottom: "30px",
                fontWeight: 500
            }}>
                <Logo style={{
                    width: "200px"
                }} />
            </div>
        </div>
    );

}

export default TvShowPage2;