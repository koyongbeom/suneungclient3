import React, {useState, useEffect, useRef} from "react";
import HeaderTwo from "../components/header2";
import styles from "../styles/testmap.module.css";
import data from "../testmapdata/data";

import ReactGa from "react-ga4";
import { getDialogActionsUtilityClass } from "@mui/material";
import { json } from "stream/consumers";

declare var naver : any;

const Testmap : React.FC<any> = (props) => {

    const ref = useRef<any>();

        //ga event------------------------------------------------
        useEffect(() => {
            // ReactGa.event({
            //     category: "view",
            //     action: "mappageview"
            // })




            const meta = document.createElement("meta");
            meta.name = "viewport";
            meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no";
            document.getElementsByTagName("head")[0].appendChild(meta);

            ReactGa.send({
                hitType : "pageview",
                page_title : "testmap"
            });
            
        }, []);
        //--------------------------------------------------------



        useEffect(() => {

            geoLocation();

            window.scrollTo(0, 0);

            makeMap();
            
            console.log(JSON.parse(data));
    
        }, []);

        const makeMap = async () => {

            const XY = await geoLocation();

            const map = new naver.maps.Map("map", {
                center: new naver.maps.LatLng(XY.lat, XY.lng),
                zoom: 16,
            });

            // const marker = new naver.maps.Marker({
            //     map: map,
            //     title: "수능선배",
            //     position: new naver.maps.LatLng(XY.lat, XY.lng),
            //     animation: naver.maps.Animation.BOUNCE
            // })

            const fullData: any = JSON.parse(data);
            

            fullData.forEach((eachData: any) => {


                const marker = new naver.maps.Marker({
                    map: map,
                    title: `${eachData.name}`,
                    position: new naver.maps.LatLng(eachData.lat, eachData.lng),
                })

                var contentString = [
                    '<div class="iw_inner">',
                    `   <h3 class="iw_inner_title">${eachData.name}</h3>`,
                    `<p>외부 응시 가능 인원 : ${eachData.numbers}명</p>`,
                    `   <p>${eachData.address}<br />`,
                    `       <div class="iw_inner_phonenumber"><a class="iw_inner_phoneBtn" href="tel:${eachData.phoneNumber}">${eachData.phoneNumber}</a></div>`,
                    '   </p>',
                    '</div>'
                ].join('');

                var infowindow = new naver.maps.InfoWindow({
                    content: contentString,
                    maxWidth : 320,
                    borderWidth: 0,
                    anchorSkew: false,
                    anchorSize : {
                        width : 10,
                        height : 5
                    },
                    backgroundColor : "transparent"
                });

                naver.maps.Event.addListener(marker, "click", function(e : any) {
                    if (infowindow.getMap()) {
                        infowindow.close();
                    } else {
                        console.log(marker);
                        infowindow.open(map, marker);
                    }
                });

                ref.current.addEventListener("click", (e : any)=>{
                    if(e.target.localName === "img"){
                    infowindow.close();
                    }
                })
    
                return function cleanup() {
                    ref.current.removeEventListener("click", (e : any)=>{
                        if(e.target.localName === "img"){
                        infowindow.close();
                        }
                    });
               };
            })
        }


        const geoLocation = async () => {
            console.log(3);
            let XY : any = new Object();

            XY.lat = 37.49726;
            XY.lng = 127.03210;

            if(navigator.geolocation) {
                
                let promise = new Promise((resolve : any, rejected : any) => {
                    navigator.geolocation.getCurrentPosition((position) => {
                        resolve(position);
                    }, (e : any) => {
                        console.error(e);
                        rejected(e);
                    });
                });

                var position : any;
                try {
                    position = await promise;
                    XY.lat = position.coords.latitude;
                    XY.log = position.coords.longitude;
                } catch (e) {
                    console.log("its error");
                }

            } else {
                console.log(2);
            }

            console.log(XY);
            return XY;
        }

    return (
        <div>
            <HeaderTwo />
            <div className={styles.voidHeader}>
            </div>
            <div>
                <div ref={ref} className={styles.mapDiv}>
                    <div id="map" className={styles.map}></div>
                </div>
            </div>
        </div>
    );
}

export default Testmap;