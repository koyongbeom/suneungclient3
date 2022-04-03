const userList = [
    {
        "user_id": "4",
        "name": "",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "7",
        "idx_last_modified": "3571",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:59.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "57000",
        "idx_user_id_num": "3000",
        "idx_name": "1000",
        "idx_phone": "3000",
        "idx_email": "3000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "1",
        "name": "Administrator",
        "gender": "1",
        "birthday": "1977-10-08T04:00:00.00Z",
        "photo_exists": "false",
        "pin_exists": "false",
        "login_id": "admin",
        "password_exists": "true",
        "updated_count": "1",
        "last_modified": "8",
        "idx_last_modified": "3515",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "20",
        "display_count": "3",
        "permission": {
            "id": "1",
            "name": "Administrator",
            "description": "this is a permission for Administrator",
            "filter": {
                "UserGroup": [
                    "1"
                ],
                "DeviceGroup": [
                    "1"
                ],
                "DoorGroup": [
                    "1"
                ],
                "ElevatorGroup": [
                    "1"
                ],
                "ZoneType": [
                    "-1"
                ],
                "AccessGroup": [
                    "0"
                ],
                "GraphicMapGroup": [
                    "1"
                ]
            },
            "module": {
                "Dashboard": {
                    "read": "true",
                    "write": "true"
                },
                "User": {
                    "read": "true",
                    "write": "true"
                },
                "Device": {
                    "read": "true",
                    "write": "true"
                },
                "Door": {
                    "read": "true",
                    "write": "true"
                },
                "Elevator": {
                    "read": "true",
                    "write": "true"
                },
                "Zone": {
                    "read": "true",
                    "write": "true"
                },
                "AccessControl": {
                    "read": "true",
                    "write": "true"
                },
                "Monitoring": {
                    "read": "true",
                    "write": "true"
                },
                "TA": {
                    "read": "true",
                    "write": "true"
                },
                "Setting": {
                    "read": "true",
                    "write": "true"
                },
                "Video": {
                    "read": "true",
                    "write": "true"
                },
                "Visitor": {
                    "read": "true",
                    "write": "true"
                }
            }
        },
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "1000",
        "idx_user_id_num": "1000",
        "idx_name": "2000",
        "idx_phone": "1000",
        "idx_email": "1000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "124",
        "name": "강다연",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "103",
        "idx_last_modified": "3543",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "29000",
        "idx_user_id_num": "74000",
        "idx_name": "3000",
        "idx_phone": "73000",
        "idx_email": "73000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [
            {
                "id": 8132,
                "userId": 124,
                "permission": 1,
                "direction": "outside",
                "time": "1646610405289",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:46:45.000Z",
                "name": "강다연",
                "accessGroup": "관리자",
                "realTime": "7 - 8 - 46"
            },
            {
                "id": 8196,
                "userId": 124,
                "permission": 1,
                "direction": "inside",
                "time": "1646621835282",
                "kinds": "f",
                "DateInserted": "2022-03-07T02:57:15.000Z",
                "name": "강다연",
                "accessGroup": "관리자",
                "realTime": "7 - 11 - 57"
            },
            {
                "id": 8202,
                "userId": 124,
                "permission": 1,
                "direction": "outside",
                "time": "1646622167008",
                "kinds": "f",
                "DateInserted": "2022-03-07T03:02:47.000Z",
                "name": "강다연",
                "accessGroup": "관리자",
                "realTime": "7 - 12 - 2"
            },
            {
                "id": 8253,
                "userId": 124,
                "permission": 1,
                "direction": "inside",
                "time": "1646625831258",
                "kinds": "f",
                "DateInserted": "2022-03-07T04:03:51.000Z",
                "name": "강다연",
                "accessGroup": "관리자",
                "realTime": "7 - 13 - 3"
            },
            {
                "id": 8254,
                "userId": 124,
                "permission": 1,
                "direction": "inside",
                "time": "1646625832405",
                "kinds": "f",
                "DateInserted": "2022-03-07T04:03:52.000Z",
                "name": "강다연",
                "accessGroup": "관리자",
                "realTime": "7 - 13 - 3"
            },
            {
                "id": 8255,
                "userId": 124,
                "permission": 1,
                "direction": "outside",
                "time": "1646625845186",
                "kinds": "f",
                "DateInserted": "2022-03-07T04:04:05.000Z",
                "name": "강다연",
                "accessGroup": "관리자",
                "realTime": "7 - 13 - 4"
            },
            {
                "id": 8366,
                "userId": 124,
                "permission": 1,
                "direction": "inside",
                "time": "1646644996018",
                "kinds": "f",
                "DateInserted": "2022-03-07T09:23:16.000Z",
                "name": "강다연",
                "accessGroup": "관리자",
                "realTime": "7 - 18 - 23"
            },
            {
                "id": 8367,
                "userId": 124,
                "permission": 1,
                "direction": "outside",
                "time": "1646645008379",
                "kinds": "f",
                "DateInserted": "2022-03-07T09:23:28.000Z",
                "name": "강다연",
                "accessGroup": "관리자",
                "realTime": "7 - 18 - 23"
            },
            {
                "id": 8399,
                "userId": 124,
                "permission": 1,
                "direction": "inside",
                "time": "1646647586467",
                "kinds": "f",
                "DateInserted": "2022-03-07T10:06:26.000Z",
                "name": "강다연",
                "accessGroup": "관리자",
                "realTime": "7 - 19 - 6"
            }
        ],
        "reply": []
    },
    {
        "user_id": "130",
        "name": "강지수",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "110",
        "idx_last_modified": "3549",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "35000",
        "idx_user_id_num": "80000",
        "idx_name": "4000",
        "idx_phone": "79000",
        "idx_email": "79000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8095,
                "userId": 130,
                "permission": 1,
                "direction": "outside",
                "time": "1646606089694",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:34:49.000Z",
                "name": "강지원",
                "accessGroup": "학생",
                "realTime": "7, 7, 34"
            }
        ],
        "reply": []
    },
    {
        "user_id": "114",
        "name": "강지은",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "92",
        "idx_last_modified": "3532",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "18000",
        "idx_user_id_num": "64000",
        "idx_name": "5000",
        "idx_phone": "63000",
        "idx_email": "63000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "83",
        "name": "고민수",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "70",
        "idx_last_modified": "3589",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "75000",
        "idx_user_id_num": "39000",
        "idx_name": "6000",
        "idx_phone": "43000",
        "idx_email": "43000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8113,
                "userId": 83,
                "permission": 1,
                "direction": "outside",
                "time": "1646608707404",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:18:27.000Z",
                "name": "고미건",
                "accessGroup": "학생",
                "realTime": "7, 8, 18"
            }
        ],
        "reply": [
            {
                "id": 804,
                "userId": 35,
                "fingerprintUserId": 83,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "three",
                "firstReply": "고미건/조퇴/정기일정 (12시조퇴 - 병원)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:32:23.000Z",
                "secondReplyTime": "2022-03-07T04:34:12.000Z",
                "createdAt": "2022-03-07T04:32:14.000Z"
            },
            {
                "id": 815,
                "userId": 35,
                "fingerprintUserId": 83,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "four",
                "firstReply": "3교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T05:53:40.000Z",
                "secondReplyTime": "2022-03-07T05:54:16.000Z",
                "createdAt": "2022-03-07T05:53:40.000Z"
            },
            {
                "id": 825,
                "userId": 35,
                "fingerprintUserId": 83,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "five",
                "firstReply": "3교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T07:35:42.000Z",
                "secondReplyTime": "2022-03-07T07:36:23.000Z",
                "createdAt": "2022-03-07T07:35:42.000Z"
            },
            {
                "id": 833,
                "userId": 35,
                "fingerprintUserId": 83,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "3교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:50:29.000Z",
                "secondReplyTime": "2022-03-07T09:55:23.000Z",
                "createdAt": "2022-03-07T09:50:29.000Z"
            }
        ]
    },
    {
        "user_id": "129",
        "name": "고승연",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "109",
        "idx_last_modified": "3548",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "34000",
        "idx_user_id_num": "79000",
        "idx_name": "7000",
        "idx_phone": "78000",
        "idx_email": "78000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8128,
                "userId": 129,
                "permission": 1,
                "direction": "outside",
                "time": "1646610161418",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:42:41.000Z",
                "name": "고승연",
                "accessGroup": "학생",
                "realTime": "7, 8, 42"
            }
        ],
        "reply": []
    },
    {
        "user_id": "2",
        "name": "고용범",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "8",
        "last_modified": "22",
        "idx_last_modified": "3558",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1007",
            "name": "관리자"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "44000",
        "idx_user_id_num": "2000",
        "idx_name": "8000",
        "idx_phone": "2000",
        "idx_email": "2000",
        "fingerprint_template_count": "2",
        "face_count": "0",
        "card_count": "1",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "102",
        "name": "공용출입카드",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "78",
        "idx_last_modified": "3519",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "5000",
        "idx_user_id_num": "52000",
        "idx_name": "9000",
        "idx_phone": "50000",
        "idx_email": "50000",
        "fingerprint_template_count": "0",
        "face_count": "0",
        "card_count": "1",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "103",
        "name": "공용출입카드2",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "79",
        "idx_last_modified": "3520",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "6000",
        "idx_user_id_num": "53000",
        "idx_name": "10000",
        "idx_phone": "51000",
        "idx_email": "51000",
        "fingerprint_template_count": "0",
        "face_count": "0",
        "card_count": "1",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "6",
        "name": "곽윤정",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "2",
        "last_modified": "27",
        "idx_last_modified": "3583",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1007",
            "name": "관리자"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "69000",
        "idx_user_id_num": "5000",
        "idx_name": "11000",
        "idx_phone": "5000",
        "idx_email": "5000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "12",
        "name": "권민경",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "41",
        "idx_last_modified": "3625",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "24000",
        "idx_user_id_num": "9001",
        "idx_name": "12000",
        "idx_phone": "16000",
        "idx_email": "16000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8121,
                "userId": 12,
                "permission": 1,
                "direction": "outside",
                "time": "1646609701565",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:35:01.000Z",
                "name": "권민경",
                "accessGroup": "학생",
                "realTime": "7, 8, 35"
            }
        ],
        "reply": []
    },
    {
        "user_id": "110",
        "name": "권석찬",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "88",
        "idx_last_modified": "3528",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "14000",
        "idx_user_id_num": "60000",
        "idx_name": "13000",
        "idx_phone": "59000",
        "idx_email": "59000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8092,
                "userId": 110,
                "permission": 1,
                "direction": "outside",
                "time": "1646605138888",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:18:58.000Z",
                "name": "권석찬",
                "accessGroup": "학생",
                "realTime": "7, 7, 18"
            }
        ],
        "reply": [
            {
                "id": 834,
                "userId": 35,
                "fingerprintUserId": 110,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "정기일정 (18시 조퇴-운동/컨디션조절)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:50:50.000Z",
                "secondReplyTime": "2022-03-07T09:55:25.000Z",
                "createdAt": "2022-03-07T09:50:50.000Z"
            }
        ]
    },
    {
        "user_id": "95",
        "name": "권순재",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "33",
        "idx_last_modified": "3595",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "81000",
        "idx_user_id_num": "45000",
        "idx_name": "14000",
        "idx_phone": "8000",
        "idx_email": "8000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8143,
                "userId": 95,
                "permission": 1,
                "direction": "outside",
                "time": "1646610945787",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:55:45.000Z",
                "name": "권순재",
                "accessGroup": "학생",
                "realTime": "7, 8, 55"
            }
        ],
        "reply": []
    },
    {
        "user_id": "68",
        "name": "권혁진",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "118",
        "idx_last_modified": "3586",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "72000",
        "idx_user_id_num": "37000",
        "idx_name": "15000",
        "idx_phone": "85000",
        "idx_email": "85000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8104,
                "userId": 68,
                "permission": 1,
                "direction": "outside",
                "time": "1646606864389",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:47:44.000Z",
                "name": "권혁진",
                "accessGroup": "학생",
                "realTime": "7, 7, 47"
            }
        ],
        "reply": []
    },
    {
        "user_id": "24",
        "name": "김다영",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "48",
        "idx_last_modified": "3563",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "49000",
        "idx_user_id_num": "17000",
        "idx_name": "16000",
        "idx_phone": "22000",
        "idx_email": "22000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8097,
                "userId": 24,
                "permission": 1,
                "direction": "outside",
                "time": "1646606369523",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:39:29.000Z",
                "name": "김다영",
                "accessGroup": "학생",
                "realTime": "7, 7, 39"
            }
        ],
        "reply": []
    },
    {
        "user_id": "19",
        "name": "김도영",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "44",
        "idx_last_modified": "3557",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "43000",
        "idx_user_id_num": "12000",
        "idx_name": "17000",
        "idx_phone": "18000",
        "idx_email": "18000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8142,
                "userId": 19,
                "permission": 1,
                "direction": "outside",
                "time": "1646610931406",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:55:31.000Z",
                "name": "김도영",
                "accessGroup": "학생",
                "realTime": "7, 8, 55"
            }
        ],
        "reply": []
    },
    {
        "user_id": "120",
        "name": "김동욱",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "99",
        "idx_last_modified": "3539",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "25000",
        "idx_user_id_num": "70000",
        "idx_name": "18000",
        "idx_phone": "69000",
        "idx_email": "69000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8131,
                "userId": 120,
                "permission": 1,
                "direction": "outside",
                "time": "1646610374896",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:46:14.000Z",
                "name": "김동욱",
                "accessGroup": "학생",
                "realTime": "7, 8, 46"
            },
            {
                "id": 8135,
                "userId": 120,
                "permission": 1,
                "direction": "inside",
                "time": "1646610609713",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:50:09.000Z",
                "name": "김동욱",
                "accessGroup": "학생",
                "realTime": "7, 8, 50"
            }
        ],
        "reply": [
            {
                "id": 790,
                "userId": 35,
                "fingerprintUserId": 120,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "들어올 때 지문 인식 X / 1교시 등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:01:27.000Z",
                "secondReplyTime": "2022-03-07T00:16:34.000Z",
                "createdAt": "2022-03-07T00:15:54.000Z"
            },
            {
                "id": 816,
                "userId": 35,
                "fingerprintUserId": 120,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "four",
                "firstReply": "** 잠깐 외출",
                "secondReply": null,
                "firstReplyTime": "2022-03-07T05:55:06.000Z",
                "secondReplyTime": null,
                "createdAt": "2022-03-07T05:53:45.000Z"
            },
            {
                "id": 835,
                "userId": 35,
                "fingerprintUserId": 120,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "김동욱/조퇴/정기일정",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:51:15.000Z",
                "secondReplyTime": "2022-03-07T09:55:27.000Z",
                "createdAt": "2022-03-07T09:51:15.000Z"
            }
        ]
    },
    {
        "user_id": "118",
        "name": "김동훈",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "96",
        "idx_last_modified": "3536",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "22000",
        "idx_user_id_num": "68000",
        "idx_name": "19000",
        "idx_phone": "67000",
        "idx_email": "67000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "115",
        "name": "김민서",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "93",
        "idx_last_modified": "3591",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "19000",
        "idx_user_id_num": "65000",
        "idx_name": "20001",
        "idx_phone": "64000",
        "idx_email": "64000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "140",
        "name": "김민수",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "131",
        "idx_last_modified": "3660",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "40005",
        "idx_user_id_num": "85005",
        "idx_name": "20002",
        "idx_phone": "7",
        "idx_email": "7",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 781,
                "userId": 35,
                "fingerprintUserId": 140,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "코로나 밀첩 접촉",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T00:11:12.000Z",
                "secondReplyTime": "2022-03-07T00:16:06.000Z",
                "createdAt": "2022-03-07T00:11:12.000Z"
            },
            {
                "id": 793,
                "userId": 35,
                "fingerprintUserId": 140,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "two",
                "firstReply": "1교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T01:37:32.000Z",
                "secondReplyTime": "2022-03-07T04:01:43.000Z",
                "createdAt": "2022-03-07T01:37:29.000Z"
            },
            {
                "id": 800,
                "userId": 35,
                "fingerprintUserId": 140,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "three",
                "firstReply": "1교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:30:54.000Z",
                "secondReplyTime": "2022-03-07T04:33:55.000Z",
                "createdAt": "2022-03-07T04:30:44.000Z"
            },
            {
                "id": 810,
                "userId": 35,
                "fingerprintUserId": 140,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "four",
                "firstReply": "1교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T05:53:18.000Z",
                "secondReplyTime": "2022-03-07T05:53:59.000Z",
                "createdAt": "2022-03-07T05:53:15.000Z"
            },
            {
                "id": 820,
                "userId": 35,
                "fingerprintUserId": 140,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "five",
                "firstReply": "1교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T07:35:27.000Z",
                "secondReplyTime": "2022-03-07T07:36:14.000Z",
                "createdAt": "2022-03-07T07:35:21.000Z"
            },
            {
                "id": 830,
                "userId": 35,
                "fingerprintUserId": 140,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "1교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:49:44.000Z",
                "secondReplyTime": "2022-03-07T09:55:19.000Z",
                "createdAt": "2022-03-07T09:49:41.000Z"
            }
        ]
    },
    {
        "user_id": "46",
        "name": "김수영",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "82",
        "idx_last_modified": "3645",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "62000",
        "idx_user_id_num": "29000",
        "idx_name": "21001",
        "idx_phone": "53000",
        "idx_email": "53000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 782,
                "userId": 35,
                "fingerprintUserId": 46,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "자율등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T00:11:17.000Z",
                "secondReplyTime": "2022-03-07T00:16:07.000Z",
                "createdAt": "2022-03-07T00:11:17.000Z"
            },
            {
                "id": 794,
                "userId": 35,
                "fingerprintUserId": 46,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "two",
                "firstReply": "1교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T01:37:33.000Z",
                "secondReplyTime": "2022-03-07T04:01:44.000Z",
                "createdAt": "2022-03-07T01:37:33.000Z"
            },
            {
                "id": 807,
                "userId": 35,
                "fingerprintUserId": 46,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "three",
                "firstReply": "자율등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:35:23.000Z",
                "secondReplyTime": "2022-03-07T04:33:56.000Z",
                "createdAt": "2022-03-07T04:33:56.000Z"
            },
            {
                "id": 819,
                "userId": 35,
                "fingerprintUserId": 46,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "four",
                "firstReply": "자율등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T05:54:28.000Z",
                "secondReplyTime": "2022-03-07T05:54:01.000Z",
                "createdAt": "2022-03-07T05:54:01.000Z"
            },
            {
                "id": 821,
                "userId": 35,
                "fingerprintUserId": 46,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "five",
                "firstReply": "자율등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T07:37:22.000Z",
                "secondReplyTime": "2022-03-07T07:36:15.000Z",
                "createdAt": "2022-03-07T07:35:29.000Z"
            },
            {
                "id": 831,
                "userId": 35,
                "fingerprintUserId": 46,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "1교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:49:45.000Z",
                "secondReplyTime": "2022-03-07T09:55:20.000Z",
                "createdAt": "2022-03-07T09:49:45.000Z"
            }
        ]
    },
    {
        "user_id": "141",
        "name": "김서영T",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "136",
        "idx_last_modified": "3661",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "40006",
        "idx_user_id_num": "85006",
        "idx_name": "21002",
        "idx_phone": "4",
        "idx_email": "4",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "92",
        "name": "김선형",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "32",
        "idx_last_modified": "3594",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "80000",
        "idx_user_id_num": "44000",
        "idx_name": "22000",
        "idx_phone": "7000",
        "idx_email": "7000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8115,
                "userId": 92,
                "permission": 1,
                "direction": "outside",
                "time": "1646608915345",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:21:55.000Z",
                "name": "김선형",
                "accessGroup": "학생",
                "realTime": "7, 8, 21"
            },
            {
                "id": 8126,
                "userId": 92,
                "permission": 1,
                "direction": "inside",
                "time": "1646610092097",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:41:32.000Z",
                "name": "김선형",
                "accessGroup": "학생",
                "realTime": "7, 8, 41"
            },
            {
                "id": 8134,
                "userId": 92,
                "permission": 1,
                "direction": "outside",
                "time": "1646610523623",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:48:43.000Z",
                "name": "김선형",
                "accessGroup": "학생",
                "realTime": "7, 8, 48"
            }
        ],
        "reply": [
            {
                "id": 836,
                "userId": 35,
                "fingerprintUserId": 92,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "ㅠㅠ어제 친구를 잠깐 만났는데 서로 마스크 안벗고 있긴했는데 그친구가 오늘 코로나 확진판정이 나서 혹시나 다른분들께 피해갈 수 있으니 짐챙겨서 2-3일정도 경과를 지켜본 후에 등원하겠습니다ㅠㅠ 지금 바로 짐챙겨서 집에서 공부하겠습니다.! 학원내에서 식사 하지 않았으니 아마 다른분들께 피해는 없을거예요.!ㅜㅠ양성 나오진 않을것 같긴 합니당,,",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:51:39.000Z",
                "secondReplyTime": "2022-03-07T09:55:29.000Z",
                "createdAt": "2022-03-07T09:51:31.000Z"
            }
        ]
    },
    {
        "user_id": "43",
        "name": "김수찬",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "67",
        "idx_last_modified": "3573",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "59000",
        "idx_user_id_num": "26000",
        "idx_name": "23000",
        "idx_phone": "40000",
        "idx_email": "40000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8129,
                "userId": 43,
                "permission": 1,
                "direction": "outside",
                "time": "1646610172660",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:42:52.000Z",
                "name": "김수찬",
                "accessGroup": "학생",
                "realTime": "7, 8, 42"
            }
        ],
        "reply": []
    },
    {
        "user_id": "7",
        "name": "김아현",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "28",
        "idx_last_modified": "3601",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "73000",
        "idx_user_id_num": "6000",
        "idx_name": "24001",
        "idx_phone": "6000",
        "idx_email": "6000",
        "fingerprint_template_count": "0",
        "face_count": "0",
        "card_count": "1",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "87",
        "name": "김인동",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "135",
        "idx_last_modified": "3667",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "78002",
        "idx_user_id_num": "42002",
        "idx_name": "24002",
        "idx_phone": "5",
        "idx_email": "5",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8141,
                "userId": 87,
                "permission": 1,
                "direction": "outside",
                "time": "1646610888694",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:54:48.000Z",
                "name": "김영동",
                "accessGroup": "학생",
                "realTime": "7, 8, 54"
            }
        ],
        "reply": [
            {
                "id": 809,
                "userId": 35,
                "fingerprintUserId": 87,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "three",
                "firstReply": "12:30에 상담 끝나고 점심이 늦어져서 1:47 등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:48:12.000Z",
                "secondReplyTime": "2022-03-07T04:48:18.000Z",
                "createdAt": "2022-03-07T04:48:06.000Z"
            }
        ]
    },
    {
        "user_id": "53",
        "name": "김나은",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "73",
        "idx_last_modified": "3580",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "66000",
        "idx_user_id_num": "32000",
        "idx_name": "26000",
        "idx_phone": "46000",
        "idx_email": "46000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 783,
                "userId": 35,
                "fingerprintUserId": 53,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "9:01 등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T00:11:35.000Z",
                "secondReplyTime": "2022-03-07T00:16:08.000Z",
                "createdAt": "2022-03-07T00:11:35.000Z"
            },
            {
                "id": 805,
                "userId": 35,
                "fingerprintUserId": 53,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "three",
                "firstReply": "김예영 외출 정기일정 (12-17)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:33:27.000Z",
                "secondReplyTime": "2022-03-07T04:35:31.000Z",
                "createdAt": "2022-03-07T04:33:17.000Z"
            },
            {
                "id": 817,
                "userId": 35,
                "fingerprintUserId": 53,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "four",
                "firstReply": "3교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T05:53:49.000Z",
                "secondReplyTime": "2022-03-07T05:54:19.000Z",
                "createdAt": "2022-03-07T05:53:49.000Z"
            },
            {
                "id": 826,
                "userId": 35,
                "fingerprintUserId": 53,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "five",
                "firstReply": "3교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T07:35:47.000Z",
                "secondReplyTime": "2022-03-07T07:36:24.000Z",
                "createdAt": "2022-03-07T07:35:44.000Z"
            }
        ]
    },
    {
        "user_id": "117",
        "name": "김원상",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "95",
        "idx_last_modified": "3535",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "21000",
        "idx_user_id_num": "67000",
        "idx_name": "27000",
        "idx_phone": "66000",
        "idx_email": "66000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "85",
        "name": "김재진",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "55",
        "idx_last_modified": "3591",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "77000",
        "idx_user_id_num": "41000",
        "idx_name": "28000",
        "idx_phone": "29000",
        "idx_email": "29000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8107,
                "userId": 85,
                "permission": 1,
                "direction": "outside",
                "time": "1646607450853",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:57:30.000Z",
                "name": "김재진",
                "accessGroup": "학생",
                "realTime": "7, 7, 57"
            }
        ],
        "reply": []
    },
    {
        "user_id": "11",
        "name": "김주희",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "40",
        "idx_last_modified": "3527",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "13000",
        "idx_user_id_num": "8000",
        "idx_name": "30000",
        "idx_phone": "15000",
        "idx_email": "15000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 778,
                "userId": 35,
                "fingerprintUserId": 11,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "김주희/지각/개인사유 - 저 지각으로 정정할게요! 몸 괜찮아지면 가겠습니다.",
                "secondReply": "무단지각",
                "firstReplyTime": "2022-03-07T00:10:32.000Z",
                "secondReplyTime": "2022-03-07T00:09:11.000Z",
                "createdAt": "2022-03-07T00:09:00.000Z"
            },
            {
                "id": 795,
                "userId": 35,
                "fingerprintUserId": 11,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "two",
                "firstReply": "1교시와 동일 (괜찮아지면 등원)",
                "secondReply": "무단지각",
                "firstReplyTime": "2022-03-07T04:02:27.000Z",
                "secondReplyTime": "2022-03-07T04:01:46.000Z",
                "createdAt": "2022-03-07T01:37:35.000Z"
            },
            {
                "id": 801,
                "userId": 35,
                "fingerprintUserId": 11,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "three",
                "firstReply": "1교시와 동일",
                "secondReply": "무단지각",
                "firstReplyTime": "2022-03-07T04:30:55.000Z",
                "secondReplyTime": "2022-03-07T04:34:02.000Z",
                "createdAt": "2022-03-07T04:30:52.000Z"
            },
            {
                "id": 811,
                "userId": 35,
                "fingerprintUserId": 11,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "four",
                "firstReply": "1교시와 동일",
                "secondReply": "무단지각",
                "firstReplyTime": "2022-03-07T05:53:20.000Z",
                "secondReplyTime": "2022-03-07T05:54:05.000Z",
                "createdAt": "2022-03-07T05:53:20.000Z"
            }
        ]
    },
    {
        "user_id": "44",
        "name": "김준석",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "74",
        "idx_last_modified": "3574",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "60000",
        "idx_user_id_num": "27000",
        "idx_name": "31000",
        "idx_phone": "47000",
        "idx_email": "47000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 780,
                "userId": 35,
                "fingerprintUserId": 44,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "아침식사 배달이 늦어서 20분정도 늦을것 같습니다",
                "secondReply": "무단지각",
                "firstReplyTime": "2022-03-07T00:10:47.000Z",
                "secondReplyTime": "2022-03-07T00:11:00.000Z",
                "createdAt": "2022-03-07T00:10:47.000Z"
            }
        ]
    },
    {
        "user_id": "21",
        "name": "김지수",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "61",
        "idx_last_modified": "3560",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "46000",
        "idx_user_id_num": "14000",
        "idx_name": "32000",
        "idx_phone": "34000",
        "idx_email": "34000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8094,
                "userId": 21,
                "permission": 1,
                "direction": "outside",
                "time": "1646605948076",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:32:28.000Z",
                "name": "김지수",
                "accessGroup": "학생",
                "realTime": "7, 7, 32"
            }
        ],
        "reply": [
            {
                "id": 837,
                "userId": 35,
                "fingerprintUserId": 21,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "6:49 돌아옴",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:51:53.000Z",
                "secondReplyTime": "2022-03-07T09:55:31.000Z",
                "createdAt": "2022-03-07T09:51:48.000Z"
            }
        ]
    },
    {
        "user_id": "5",
        "name": "박가을",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "4",
        "last_modified": "80",
        "idx_last_modified": "3578",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1007",
            "name": "관리자"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "64000",
        "idx_user_id_num": "4000",
        "idx_name": "34000",
        "idx_phone": "4000",
        "idx_email": "4000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "96",
        "name": "박소윤",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "34",
        "idx_last_modified": "3596",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "82000",
        "idx_user_id_num": "46000",
        "idx_name": "35000",
        "idx_phone": "9000",
        "idx_email": "9000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8119,
                "userId": 96,
                "permission": 1,
                "direction": "outside",
                "time": "1646609355557",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:29:15.000Z",
                "name": "박소윤",
                "accessGroup": "학생",
                "realTime": "7, 8, 29"
            }
        ],
        "reply": []
    },
    {
        "user_id": "123",
        "name": "박장희",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "102",
        "idx_last_modified": "3542",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1009",
            "name": "학생"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "28000",
        "idx_user_id_num": "73000",
        "idx_name": "36000",
        "idx_phone": "72000",
        "idx_email": "72000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8106,
                "userId": 123,
                "permission": 1,
                "direction": "outside",
                "time": "1646607006701",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:50:06.000Z",
                "name": "박장희",
                "accessGroup": "학생",
                "realTime": "7, 7, 50"
            }
        ],
        "reply": []
    },
    {
        "user_id": "101",
        "name": "박재연",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "75",
        "idx_last_modified": "3518",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "4000",
        "idx_user_id_num": "51000",
        "idx_name": "37000",
        "idx_phone": "48000",
        "idx_email": "48000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "107",
        "name": "박준호",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "85",
        "idx_last_modified": "3524",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "10000",
        "idx_user_id_num": "57000",
        "idx_name": "38000",
        "idx_phone": "56000",
        "idx_email": "56000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8146,
                "userId": 107,
                "permission": 1,
                "direction": "outside",
                "time": "1646611063464",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:57:43.000Z",
                "name": "박준호",
                "accessGroup": "학생",
                "realTime": "7, 8, 57"
            }
        ],
        "reply": [
            {
                "id": 847,
                "userId": 35,
                "fingerprintUserId": 107,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "** 문자 보냄",
                "secondReply": null,
                "firstReplyTime": "2022-03-07T09:58:45.000Z",
                "secondReplyTime": null,
                "createdAt": "2022-03-07T09:58:45.000Z"
            }
        ]
    },
    {
        "user_id": "25",
        "name": "박진수",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "49",
        "idx_last_modified": "3564",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "50000",
        "idx_user_id_num": "18000",
        "idx_name": "39000",
        "idx_phone": "23000",
        "idx_email": "23000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 779,
                "userId": 35,
                "fingerprintUserId": 25,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "박진희/지각 (저녁시간 등원)/정기일정(근무) ",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T00:09:29.000Z",
                "secondReplyTime": "2022-03-07T00:16:13.000Z",
                "createdAt": "2022-03-07T00:09:29.000Z"
            },
            {
                "id": 796,
                "userId": 35,
                "fingerprintUserId": 25,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "two",
                "firstReply": "1교시와 동일 (저녁 등원)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:02:20.000Z",
                "secondReplyTime": "2022-03-07T04:01:48.000Z",
                "createdAt": "2022-03-07T01:37:44.000Z"
            },
            {
                "id": 802,
                "userId": 35,
                "fingerprintUserId": 25,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "three",
                "firstReply": "1교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:31:11.000Z",
                "secondReplyTime": "2022-03-07T04:34:05.000Z",
                "createdAt": "2022-03-07T04:31:11.000Z"
            },
            {
                "id": 812,
                "userId": 35,
                "fingerprintUserId": 25,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "four",
                "firstReply": "1교시와 동일 (저녁 등원)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T05:54:54.000Z",
                "secondReplyTime": "2022-03-07T05:54:07.000Z",
                "createdAt": "2022-03-07T05:53:22.000Z"
            },
            {
                "id": 822,
                "userId": 35,
                "fingerprintUserId": 25,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "five",
                "firstReply": "1교시와 동일 (저녁등원)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T07:37:49.000Z",
                "secondReplyTime": "2022-03-07T07:36:16.000Z",
                "createdAt": "2022-03-07T07:35:30.000Z"
            }
        ]
    },
    {
        "user_id": "98",
        "name": "박미리",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "36",
        "idx_last_modified": "3598",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "84000",
        "idx_user_id_num": "48000",
        "idx_name": "40000",
        "idx_phone": "11000",
        "idx_email": "11000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 784,
                "userId": 35,
                "fingerprintUserId": 98,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "9:00 등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T00:11:47.000Z",
                "secondReplyTime": "2022-03-07T00:16:15.000Z",
                "createdAt": "2022-03-07T00:11:47.000Z"
            },
            {
                "id": 838,
                "userId": 35,
                "fingerprintUserId": 98,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "6:40 돌아옴",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:52:29.000Z",
                "secondReplyTime": "2022-03-07T09:55:36.000Z",
                "createdAt": "2022-03-07T09:52:29.000Z"
            }
        ]
    },
    {
        "user_id": "113",
        "name": "소병준",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "91",
        "idx_last_modified": "3531",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "17000",
        "idx_user_id_num": "63000",
        "idx_name": "41000",
        "idx_phone": "62000",
        "idx_email": "62000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "57",
        "name": "손서영",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "69",
        "idx_last_modified": "3582",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "68000",
        "idx_user_id_num": "34000",
        "idx_name": "42000",
        "idx_phone": "42000",
        "idx_email": "42000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8144,
                "userId": 57,
                "permission": 1,
                "direction": "outside",
                "time": "1646610994649",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:56:34.000Z",
                "name": "손서영",
                "accessGroup": "학생",
                "realTime": "7, 8, 56"
            }
        ],
        "reply": []
    },
    {
        "user_id": "132",
        "name": "이지은",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "112",
        "idx_last_modified": "3551",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "37000",
        "idx_user_id_num": "82000",
        "idx_name": "43000",
        "idx_phone": "81000",
        "idx_email": "81000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 785,
                "userId": 35,
                "fingerprintUserId": 132,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "9:09 등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T00:11:56.000Z",
                "secondReplyTime": "2022-03-07T00:16:15.000Z",
                "createdAt": "2022-03-07T00:11:56.000Z"
            },
            {
                "id": 799,
                "userId": 35,
                "fingerprintUserId": 132,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "two",
                "firstReply": "10:31 들어옴",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T01:38:11.000Z",
                "secondReplyTime": "2022-03-07T04:02:32.000Z",
                "createdAt": "2022-03-07T01:38:11.000Z"
            },
            {
                "id": 839,
                "userId": 35,
                "fingerprintUserId": 132,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "6:40 돌아옴",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:52:43.000Z",
                "secondReplyTime": "2022-03-07T09:55:37.000Z",
                "createdAt": "2022-03-07T09:52:43.000Z"
            }
        ]
    },
    {
        "user_id": "135",
        "name": "송윤성",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "117",
        "idx_last_modified": "3587",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "40001",
        "idx_user_id_num": "85001",
        "idx_name": "44000",
        "idx_phone": "84000",
        "idx_email": "84000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "35",
        "name": "송재은",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "54",
        "idx_last_modified": "3596",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "55001",
        "idx_user_id_num": "23001",
        "idx_name": "45000",
        "idx_phone": "28000",
        "idx_email": "28000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8140,
                "userId": 35,
                "permission": 1,
                "direction": "outside",
                "time": "1646610884894",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:54:44.000Z",
                "name": "송재은",
                "accessGroup": "학생",
                "realTime": "7, 8, 54"
            }
        ],
        "reply": []
    },
    {
        "user_id": "50",
        "name": "송진형",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "58",
        "idx_last_modified": "3579",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "65000",
        "idx_user_id_num": "31000",
        "idx_name": "46000",
        "idx_phone": "31000",
        "idx_email": "31000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8147,
                "userId": 50,
                "permission": 1,
                "direction": "outside",
                "time": "1646611102745",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:58:22.000Z",
                "name": "송진형",
                "accessGroup": "학생",
                "realTime": "7, 8, 58"
            }
        ],
        "reply": []
    },
    {
        "user_id": "116",
        "name": "신태섭",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "94",
        "idx_last_modified": "3534",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "20000",
        "idx_user_id_num": "66000",
        "idx_name": "47000",
        "idx_phone": "65000",
        "idx_email": "65000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "65",
        "name": "안세화",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "53",
        "idx_last_modified": "3589",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "71000",
        "idx_user_id_num": "36000",
        "idx_name": "48001",
        "idx_phone": "27000",
        "idx_email": "27000",
        "fingerprint_template_count": "0",
        "face_count": "0",
        "card_count": "2",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8091,
                "userId": 65,
                "permission": 1,
                "direction": "outside",
                "time": "1646603367517",
                "kinds": "f",
                "DateInserted": "2022-03-06T21:49:27.000Z",
                "name": "안세화",
                "accessGroup": "학생",
                "realTime": "7, 6, 49"
            },
            {
                "id": 8114,
                "userId": 65,
                "permission": 1,
                "direction": "inside",
                "time": "1646608818787",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:20:18.000Z",
                "name": "안세화",
                "accessGroup": "학생",
                "realTime": "7, 8, 20"
            },
            {
                "id": 8116,
                "userId": 65,
                "permission": 1,
                "direction": "outside",
                "time": "1646609203583",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:26:43.000Z",
                "name": "안세화",
                "accessGroup": "학생",
                "realTime": "7, 8, 26"
            }
        ],
        "reply": []
    },
    {
        "user_id": "136",
        "name": "양세현",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "119",
        "idx_last_modified": "3588",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "40002",
        "idx_user_id_num": "85002",
        "idx_name": "48002",
        "idx_phone": "1",
        "idx_email": "1",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8102,
                "userId": 136,
                "permission": 1,
                "direction": "outside",
                "time": "1646606703583",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:45:03.000Z",
                "name": "양세현",
                "accessGroup": "학생",
                "realTime": "7, 7, 45"
            },
            {
                "id": 8123,
                "userId": 136,
                "permission": 1,
                "direction": "inside",
                "time": "1646609937643",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:38:57.000Z",
                "name": "양세현",
                "accessGroup": "학생",
                "realTime": "7, 8, 38"
            },
            {
                "id": 8124,
                "userId": 136,
                "permission": 1,
                "direction": "outside",
                "time": "1646609944797",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:39:04.000Z",
                "name": "양세현",
                "accessGroup": "학생",
                "realTime": "7, 8, 39"
            },
            {
                "id": 8125,
                "userId": 136,
                "permission": 1,
                "direction": "inside",
                "time": "1646609957912",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:39:17.000Z",
                "name": "양세현",
                "accessGroup": "학생",
                "realTime": "7, 8, 39"
            },
            {
                "id": 8133,
                "userId": 136,
                "permission": 1,
                "direction": "outside",
                "time": "1646610445596",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:47:25.000Z",
                "name": "양세현",
                "accessGroup": "학생",
                "realTime": "7, 8, 47"
            }
        ],
        "reply": []
    },
    {
        "user_id": "126",
        "name": "양송은",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "2",
        "last_modified": "106",
        "idx_last_modified": "3545",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "31000",
        "idx_user_id_num": "76000",
        "idx_name": "49000",
        "idx_phone": "75000",
        "idx_email": "75000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 791,
                "userId": 35,
                "fingerprintUserId": 126,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": null,
                "secondReply": "",
                "firstReplyTime": null,
                "secondReplyTime": "2022-03-07T00:16:17.000Z",
                "createdAt": "2022-03-07T00:16:17.000Z"
            },
            {
                "id": 829,
                "userId": 35,
                "fingerprintUserId": 126,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "five",
                "firstReply": null,
                "secondReply": "",
                "firstReplyTime": null,
                "secondReplyTime": "2022-03-07T07:36:34.000Z",
                "createdAt": "2022-03-07T07:36:34.000Z"
            },
            {
                "id": 846,
                "userId": 35,
                "fingerprintUserId": 126,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": null,
                "secondReply": "",
                "firstReplyTime": null,
                "secondReplyTime": "2022-03-07T09:55:39.000Z",
                "createdAt": "2022-03-07T09:55:39.000Z"
            }
        ]
    },
    {
        "user_id": "28",
        "name": "양유란",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "65",
        "idx_last_modified": "3566",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "52000",
        "idx_user_id_num": "20000",
        "idx_name": "50000",
        "idx_phone": "38000",
        "idx_email": "38000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8136,
                "userId": 28,
                "permission": 1,
                "direction": "outside",
                "time": "1646610647359",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:50:47.000Z",
                "name": "양유란",
                "accessGroup": "학생",
                "realTime": "7, 8, 50"
            }
        ],
        "reply": []
    },
    {
        "user_id": "63",
        "name": "양지원",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "52",
        "idx_last_modified": "3584",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "70000",
        "idx_user_id_num": "35000",
        "idx_name": "51000",
        "idx_phone": "26000",
        "idx_email": "26000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8112,
                "userId": 63,
                "permission": 1,
                "direction": "outside",
                "time": "1646608315776",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:11:55.000Z",
                "name": "양지원",
                "accessGroup": "학생",
                "realTime": "7, 8, 11"
            }
        ],
        "reply": []
    },
    {
        "user_id": "30",
        "name": "엄희재",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "51",
        "idx_last_modified": "3568",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "54000",
        "idx_user_id_num": "22000",
        "idx_name": "52000",
        "idx_phone": "25000",
        "idx_email": "25000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8108,
                "userId": 30,
                "permission": 1,
                "direction": "outside",
                "time": "1646607679206",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:01:19.000Z",
                "name": "엄희재",
                "accessGroup": "학생",
                "realTime": "7, 8, 1"
            }
        ],
        "reply": []
    },
    {
        "user_id": "97",
        "name": "원이수",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "35",
        "idx_last_modified": "3597",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "83000",
        "idx_user_id_num": "47000",
        "idx_name": "53000",
        "idx_phone": "10000",
        "idx_email": "10000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8101,
                "userId": 97,
                "permission": 1,
                "direction": "outside",
                "time": "1646606658211",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:44:18.000Z",
                "name": "원이수",
                "accessGroup": "학생",
                "realTime": "7, 7, 44"
            }
        ],
        "reply": []
    },
    {
        "user_id": "131",
        "name": "유재은",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "111",
        "idx_last_modified": "3550",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "36000",
        "idx_user_id_num": "81000",
        "idx_name": "54000",
        "idx_phone": "80000",
        "idx_email": "80000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [
            {
                "id": 8403,
                "userId": 131,
                "permission": 1,
                "direction": "outside",
                "time": "1646649181228",
                "kinds": "f",
                "DateInserted": "2022-03-07T10:33:01.000Z",
                "name": "유재은",
                "accessGroup": "관리자",
                "realTime": "7 - 19 - 33"
            },
            {
                "id": 8423,
                "userId": 131,
                "permission": 1,
                "direction": "inside",
                "time": "1646653557809",
                "kinds": "f",
                "DateInserted": "2022-03-07T11:45:57.000Z",
                "name": "유재은",
                "accessGroup": "관리자",
                "realTime": "7 - 20 - 45"
            },
            {
                "id": 8424,
                "userId": 131,
                "permission": 1,
                "direction": "outside",
                "time": "1646653629226",
                "kinds": "f",
                "DateInserted": "2022-03-07T11:47:09.000Z",
                "name": "유재은",
                "accessGroup": "관리자",
                "realTime": "7 - 20 - 47"
            },
            {
                "id": 8434,
                "userId": 131,
                "permission": 1,
                "direction": "inside",
                "time": "1646655738162",
                "kinds": "f",
                "DateInserted": "2022-03-07T12:22:18.000Z",
                "name": "유재은",
                "accessGroup": "관리자",
                "realTime": "7 - 21 - 22"
            },
            {
                "id": 8435,
                "userId": 131,
                "permission": 1,
                "direction": "outside",
                "time": "1646656078821",
                "kinds": "f",
                "DateInserted": "2022-03-07T12:27:58.000Z",
                "name": "유재은",
                "accessGroup": "관리자",
                "realTime": "7 - 21 - 27"
            },
            {
                "id": 8458,
                "userId": 131,
                "permission": 1,
                "direction": "inside",
                "time": "1646658515648",
                "kinds": "f",
                "DateInserted": "2022-03-07T13:08:35.000Z",
                "name": "유재은",
                "accessGroup": "관리자",
                "realTime": "7 - 22 - 8"
            },
            {
                "id": 8464,
                "userId": 131,
                "permission": 1,
                "direction": "outside",
                "time": "1646658738133",
                "kinds": "f",
                "DateInserted": "2022-03-07T13:12:18.000Z",
                "name": "유재은",
                "accessGroup": "관리자",
                "realTime": "7 - 22 - 12"
            },
            {
                "id": 8499,
                "userId": 131,
                "permission": 1,
                "direction": "inside",
                "time": "1646663035455",
                "kinds": "f",
                "DateInserted": "2022-03-07T14:23:55.000Z",
                "name": "유재은",
                "accessGroup": "관리자",
                "realTime": "7 - 23 - 23"
            }
        ],
        "reply": []
    },
    {
        "user_id": "99",
        "name": "유정원",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "37",
        "idx_last_modified": "3599",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "85000",
        "idx_user_id_num": "49000",
        "idx_name": "55000",
        "idx_phone": "12000",
        "idx_email": "12000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8100,
                "userId": 99,
                "permission": 1,
                "direction": "outside",
                "time": "1646606630825",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:43:50.000Z",
                "name": "유정원",
                "accessGroup": "학생",
                "realTime": "7, 7, 43"
            }
        ],
        "reply": []
    },
    {
        "user_id": "105",
        "name": "유지형",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "83",
        "idx_last_modified": "3522",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "8000",
        "idx_user_id_num": "55000",
        "idx_name": "56000",
        "idx_phone": "54000",
        "idx_email": "54000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8120,
                "userId": 105,
                "permission": 1,
                "direction": "outside",
                "time": "1646609526508",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:32:06.000Z",
                "name": "유지형",
                "accessGroup": "학생",
                "realTime": "7, 8, 32"
            }
        ],
        "reply": []
    },
    {
        "user_id": "41",
        "name": "윤홍재",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "66",
        "idx_last_modified": "3572",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "58000",
        "idx_user_id_num": "25000",
        "idx_name": "58000",
        "idx_phone": "39000",
        "idx_email": "39000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8093,
                "userId": 41,
                "permission": 1,
                "direction": "outside",
                "time": "1646605863787",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:31:03.000Z",
                "name": "윤홍재",
                "accessGroup": "학생",
                "realTime": "7, 7, 31"
            },
            {
                "id": 8122,
                "userId": 41,
                "permission": 1,
                "direction": "inside",
                "time": "1646609850641",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:37:30.000Z",
                "name": "윤홍재",
                "accessGroup": "학생",
                "realTime": "7, 8, 37"
            },
            {
                "id": 8130,
                "userId": 41,
                "permission": 1,
                "direction": "outside",
                "time": "1646610193295",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:43:13.000Z",
                "name": "윤홍재",
                "accessGroup": "학생",
                "realTime": "7, 8, 43"
            }
        ],
        "reply": [
            {
                "id": 840,
                "userId": 35,
                "fingerprintUserId": 41,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "윤홍재 외출 정기일정 (18:30-20:00 운동)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:53:10.000Z",
                "secondReplyTime": "2022-03-07T09:55:40.000Z",
                "createdAt": "2022-03-07T09:52:52.000Z"
            }
        ]
    },
    {
        "user_id": "121",
        "name": "이가은",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "100",
        "idx_last_modified": "3540",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "26000",
        "idx_user_id_num": "71000",
        "idx_name": "59000",
        "idx_phone": "70000",
        "idx_email": "70000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "111",
        "name": "이나경",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "89",
        "idx_last_modified": "3529",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "15000",
        "idx_user_id_num": "61000",
        "idx_name": "60000",
        "idx_phone": "60000",
        "idx_email": "60000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8103,
                "userId": 111,
                "permission": 1,
                "direction": "outside",
                "time": "1646606715162",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:45:15.000Z",
                "name": "이나경",
                "accessGroup": "학생",
                "realTime": "7, 7, 45"
            }
        ],
        "reply": []
    },
    {
        "user_id": "86",
        "name": "이동수",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "71",
        "idx_last_modified": "3602",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "78001",
        "idx_user_id_num": "42001",
        "idx_name": "61000",
        "idx_phone": "44000",
        "idx_email": "44000",
        "fingerprint_template_count": "2",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 786,
                "userId": 35,
                "fingerprintUserId": 86,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "** 문자 보냄",
                "secondReply": "",
                "firstReplyTime": "2022-03-07T00:13:29.000Z",
                "secondReplyTime": "2022-03-07T00:16:19.000Z",
                "createdAt": "2022-03-07T00:13:29.000Z"
            },
            {
                "id": 797,
                "userId": 35,
                "fingerprintUserId": 86,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "two",
                "firstReply": "**전화, 문자 응답X",
                "secondReply": "무단지각",
                "firstReplyTime": "2022-03-07T04:02:01.000Z",
                "secondReplyTime": "2022-03-07T04:02:06.000Z",
                "createdAt": "2022-03-07T01:37:47.000Z"
            },
            {
                "id": 808,
                "userId": 35,
                "fingerprintUserId": 86,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "three",
                "firstReply": "4교시에 등원하겠습니다!",
                "secondReply": "무단지각",
                "firstReplyTime": "2022-03-07T04:34:59.000Z",
                "secondReplyTime": "2022-03-07T04:35:02.000Z",
                "createdAt": "2022-03-07T04:34:59.000Z"
            },
            {
                "id": 813,
                "userId": 35,
                "fingerprintUserId": 86,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "four",
                "firstReply": "허리통증 지속으로 집에서 공부하다 저녁시간까지 등원하겠습니다.",
                "secondReply": "무단지각",
                "firstReplyTime": "2022-03-07T06:13:13.000Z",
                "secondReplyTime": "2022-03-07T05:54:11.000Z",
                "createdAt": "2022-03-07T05:53:30.000Z"
            },
            {
                "id": 823,
                "userId": 35,
                "fingerprintUserId": 86,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "five",
                "firstReply": "4교시와 동일 (저녁등원)",
                "secondReply": "무단지각",
                "firstReplyTime": "2022-03-07T07:37:54.000Z",
                "secondReplyTime": "2022-03-07T07:36:20.000Z",
                "createdAt": "2022-03-07T07:35:35.000Z"
            }
        ]
    },
    {
        "user_id": "128",
        "name": "이연경",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "108",
        "idx_last_modified": "3547",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "33000",
        "idx_user_id_num": "78000",
        "idx_name": "62000",
        "idx_phone": "77000",
        "idx_email": "77000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8096,
                "userId": 128,
                "permission": 1,
                "direction": "outside",
                "time": "1646606286968",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:38:06.000Z",
                "name": "이연경",
                "accessGroup": "학생",
                "realTime": "7, 7, 38"
            },
            {
                "id": 8098,
                "userId": 128,
                "permission": 1,
                "direction": "inside",
                "time": "1646606400541",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:40:00.000Z",
                "name": "이연경",
                "accessGroup": "학생",
                "realTime": "7, 7, 40"
            },
            {
                "id": 8105,
                "userId": 128,
                "permission": 1,
                "direction": "outside",
                "time": "1646606976166",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:49:36.000Z",
                "name": "이연경",
                "accessGroup": "학생",
                "realTime": "7, 7, 49"
            }
        ],
        "reply": []
    },
    {
        "user_id": "17",
        "name": "이윤",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "60",
        "idx_last_modified": "3555",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "41000",
        "idx_user_id_num": "10000",
        "idx_name": "63000",
        "idx_phone": "33000",
        "idx_email": "33000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8118,
                "userId": 17,
                "permission": 1,
                "direction": "outside",
                "time": "1646609274206",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:27:54.000Z",
                "name": "이윤",
                "accessGroup": "학생",
                "realTime": "7, 8, 27"
            }
        ],
        "reply": []
    },
    {
        "user_id": "100",
        "name": "이정민",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "39",
        "idx_last_modified": "3517",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "3000",
        "idx_user_id_num": "50000",
        "idx_name": "64000",
        "idx_phone": "14000",
        "idx_email": "14000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8137,
                "userId": 100,
                "permission": 1,
                "direction": "outside",
                "time": "1646610650747",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:50:50.000Z",
                "name": "이정민",
                "accessGroup": "학생",
                "realTime": "7, 8, 50"
            }
        ],
        "reply": [
            {
                "id": 827,
                "userId": 35,
                "fingerprintUserId": 100,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "five",
                "firstReply": "이정민 조퇴 정기일정 (운동)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T07:36:01.000Z",
                "secondReplyTime": "2022-03-07T07:36:36.000Z",
                "createdAt": "2022-03-07T07:36:01.000Z"
            },
            {
                "id": 841,
                "userId": 35,
                "fingerprintUserId": 100,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "이정민 조퇴 정기일정 (운동/병원)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:53:32.000Z",
                "secondReplyTime": "2022-03-07T09:55:41.000Z",
                "createdAt": "2022-03-07T09:53:23.000Z"
            }
        ]
    },
    {
        "user_id": "22",
        "name": "이정국",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "46",
        "idx_last_modified": "3561",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "47000",
        "idx_user_id_num": "15000",
        "idx_name": "65000",
        "idx_phone": "20000",
        "idx_email": "20000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 787,
                "userId": 35,
                "fingerprintUserId": 22,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "자율등원 - 다리",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T00:59:05.000Z",
                "secondReplyTime": "2022-03-07T00:59:10.000Z",
                "createdAt": "2022-03-07T00:15:08.000Z"
            },
            {
                "id": 806,
                "userId": 35,
                "fingerprintUserId": 22,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "three",
                "firstReply": "이정연/조퇴/정기일정 (치과)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:33:45.000Z",
                "secondReplyTime": "2022-03-07T04:35:32.000Z",
                "createdAt": "2022-03-07T04:33:37.000Z"
            },
            {
                "id": 818,
                "userId": 35,
                "fingerprintUserId": 22,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "four",
                "firstReply": "3교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T05:53:55.000Z",
                "secondReplyTime": "2022-03-07T05:54:23.000Z",
                "createdAt": "2022-03-07T05:53:55.000Z"
            },
            {
                "id": 828,
                "userId": 35,
                "fingerprintUserId": 22,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "five",
                "firstReply": "정기일정 - 조퇴",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:54:27.000Z",
                "secondReplyTime": "2022-03-07T07:36:38.000Z",
                "createdAt": "2022-03-07T07:36:08.000Z"
            },
            {
                "id": 842,
                "userId": 35,
                "fingerprintUserId": 22,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "정기일정 조퇴",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:54:11.000Z",
                "secondReplyTime": "2022-03-07T09:55:45.000Z",
                "createdAt": "2022-03-07T09:53:45.000Z"
            }
        ]
    },
    {
        "user_id": "122",
        "name": "이정현",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "101",
        "idx_last_modified": "3541",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "27000",
        "idx_user_id_num": "72000",
        "idx_name": "66000",
        "idx_phone": "71000",
        "idx_email": "71000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8139,
                "userId": 122,
                "permission": 1,
                "direction": "outside",
                "time": "1646610877696",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:54:37.000Z",
                "name": "이정현",
                "accessGroup": "학생",
                "realTime": "7, 8, 54"
            }
        ],
        "reply": [
            {
                "id": 843,
                "userId": 35,
                "fingerprintUserId": 122,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "** 잠깐 외출",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:54:46.000Z",
                "secondReplyTime": "2022-03-07T09:55:46.000Z",
                "createdAt": "2022-03-07T09:54:43.000Z"
            }
        ]
    },
    {
        "user_id": "106",
        "name": "이종호",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "84",
        "idx_last_modified": "3594",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "9000",
        "idx_user_id_num": "56000",
        "idx_name": "67001",
        "idx_phone": "55000",
        "idx_email": "55000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "36",
        "name": "이지수",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "122",
        "idx_last_modified": "3666",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "55002",
        "idx_user_id_num": "23002",
        "idx_name": "67002",
        "idx_phone": "10",
        "idx_email": "10",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8127,
                "userId": 36,
                "permission": 1,
                "direction": "outside",
                "time": "1646610119312",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:41:59.000Z",
                "name": "이지수",
                "accessGroup": "학생",
                "realTime": "7, 8, 41"
            }
        ],
        "reply": [
            {
                "id": 844,
                "userId": 35,
                "fingerprintUserId": 36,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "이지수 외출 정기일정 (18:30-20:30 운동)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:55:04.000Z",
                "secondReplyTime": "2022-03-07T09:55:48.000Z",
                "createdAt": "2022-03-07T09:55:04.000Z"
            }
        ]
    },
    {
        "user_id": "84",
        "name": "이현지",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "64",
        "idx_last_modified": "3590",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "76000",
        "idx_user_id_num": "40000",
        "idx_name": "69000",
        "idx_phone": "37000",
        "idx_email": "37000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8145,
                "userId": 84,
                "permission": 1,
                "direction": "outside",
                "time": "1646611035466",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:57:15.000Z",
                "name": "이현지",
                "accessGroup": "학생",
                "realTime": "7, 8, 57"
            }
        ],
        "reply": [
            {
                "id": 845,
                "userId": 35,
                "fingerprintUserId": 84,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "이현지 / 지각 /20분정도 늦어요!",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:55:13.000Z",
                "secondReplyTime": "2022-03-07T09:55:49.000Z",
                "createdAt": "2022-03-07T09:55:13.000Z"
            }
        ]
    },
    {
        "user_id": "47",
        "name": "인소희",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "72",
        "idx_last_modified": "3655",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "63000",
        "idx_user_id_num": "30000",
        "idx_name": "70001",
        "idx_phone": "45000",
        "idx_email": "45000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 788,
                "userId": 35,
                "fingerprintUserId": 47,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "9:01 등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T00:15:23.000Z",
                "secondReplyTime": "2022-03-07T00:16:23.000Z",
                "createdAt": "2022-03-07T00:15:23.000Z"
            }
        ]
    },
    {
        "user_id": "142",
        "name": "임동현",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "137",
        "idx_last_modified": "3662",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "40007",
        "idx_user_id_num": "85007",
        "idx_name": "70002",
        "idx_phone": "3",
        "idx_email": "3",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "104",
        "name": "임수정",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "81",
        "idx_last_modified": "3521",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "7000",
        "idx_user_id_num": "54000",
        "idx_name": "71000",
        "idx_phone": "52000",
        "idx_email": "52000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "112",
        "name": "장윤진",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "90",
        "idx_last_modified": "3624",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "16000",
        "idx_user_id_num": "62000",
        "idx_name": "72001",
        "idx_phone": "61000",
        "idx_email": "61000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "15",
        "name": "장윤호",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "133",
        "idx_last_modified": "3664",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "40009",
        "idx_user_id_num": "9002",
        "idx_name": "72002",
        "idx_phone": "6",
        "idx_email": "6",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8099,
                "userId": 15,
                "permission": 1,
                "direction": "outside",
                "time": "1646606593523",
                "kinds": "f",
                "DateInserted": "2022-03-06T22:43:13.000Z",
                "name": "장윤호",
                "accessGroup": "학생",
                "realTime": "7, 7, 43"
            }
        ],
        "reply": []
    },
    {
        "user_id": "139",
        "name": "장채원",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "128",
        "idx_last_modified": "3659",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "40004",
        "idx_user_id_num": "85004",
        "idx_name": "73002",
        "idx_phone": "8",
        "idx_email": "8",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "108",
        "name": "정세연",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "86",
        "idx_last_modified": "3525",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "11000",
        "idx_user_id_num": "58000",
        "idx_name": "74000",
        "idx_phone": "57000",
        "idx_email": "57000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [
            {
                "id": 8377,
                "userId": 108,
                "permission": 1,
                "direction": "outside",
                "time": "1646645450474",
                "kinds": "f",
                "DateInserted": "2022-03-07T09:30:50.000Z",
                "name": "정세연",
                "accessGroup": "관리자",
                "realTime": "7 - 18 - 30"
            },
            {
                "id": 8433,
                "userId": 108,
                "permission": 1,
                "direction": "inside",
                "time": "1646655429226",
                "kinds": "f",
                "DateInserted": "2022-03-07T12:17:09.000Z",
                "name": "정세연",
                "accessGroup": "관리자",
                "realTime": "7 - 21 - 17"
            }
        ],
        "reply": []
    },
    {
        "user_id": "20",
        "name": "정지양",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "45",
        "idx_last_modified": "3665",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "45000",
        "idx_user_id_num": "13000",
        "idx_name": "75001",
        "idx_phone": "19000",
        "idx_email": "19000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8148,
                "userId": 20,
                "permission": 1,
                "direction": "outside",
                "time": "1646611145079",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:59:05.000Z",
                "name": "정지양",
                "accessGroup": "학생",
                "realTime": "7, 8, 59"
            }
        ],
        "reply": []
    },
    {
        "user_id": "143",
        "name": "정지원",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "139",
        "idx_last_modified": "3663",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "40008",
        "idx_user_id_num": "85008",
        "idx_name": "75002",
        "idx_phone": "2",
        "idx_email": "2",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "18",
        "name": "정혜연",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "43",
        "idx_last_modified": "3556",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "42000",
        "idx_user_id_num": "11000",
        "idx_name": "77000",
        "idx_phone": "17000",
        "idx_email": "17000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8138,
                "userId": 18,
                "permission": 1,
                "direction": "outside",
                "time": "1646610653986",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:50:53.000Z",
                "name": "정혜연",
                "accessGroup": "학생",
                "realTime": "7, 8, 50"
            }
        ],
        "reply": []
    },
    {
        "user_id": "134",
        "name": "지용성",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "116",
        "idx_last_modified": "3553",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "39000",
        "idx_user_id_num": "84000",
        "idx_name": "78000",
        "idx_phone": "83000",
        "idx_email": "83000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "45",
        "name": "최우영",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "57",
        "idx_last_modified": "3575",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "61000",
        "idx_user_id_num": "28000",
        "idx_name": "79000",
        "idx_phone": "30000",
        "idx_email": "30000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 789,
                "userId": 35,
                "fingerprintUserId": 45,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "9:03 등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T00:15:32.000Z",
                "secondReplyTime": "2022-03-07T00:16:28.000Z",
                "createdAt": "2022-03-07T00:15:32.000Z"
            }
        ]
    },
    {
        "user_id": "27",
        "name": "최민정",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "76",
        "idx_last_modified": "3607",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "51000",
        "idx_user_id_num": "19000",
        "idx_name": "80001",
        "idx_phone": "49000",
        "idx_email": "49000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 777,
                "userId": 35,
                "fingerprintUserId": 27,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": "최윤정/7일 지각/ 정기일정 - 치과",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T00:16:43.000Z",
                "secondReplyTime": "2022-03-07T00:16:31.000Z",
                "createdAt": "2022-03-07T00:08:46.000Z"
            },
            {
                "id": 798,
                "userId": 35,
                "fingerprintUserId": 27,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "two",
                "firstReply": "1교시와 동일 (저녁 등원)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:02:15.000Z",
                "secondReplyTime": "2022-03-07T04:02:10.000Z",
                "createdAt": "2022-03-07T01:37:48.000Z"
            },
            {
                "id": 803,
                "userId": 35,
                "fingerprintUserId": 27,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "three",
                "firstReply": "1교시와 동일",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T04:31:16.000Z",
                "secondReplyTime": "2022-03-07T04:34:09.000Z",
                "createdAt": "2022-03-07T04:31:16.000Z"
            },
            {
                "id": 814,
                "userId": 35,
                "fingerprintUserId": 27,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "four",
                "firstReply": "1교시와 동일 (저녁 등원)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T05:54:41.000Z",
                "secondReplyTime": "2022-03-07T05:54:14.000Z",
                "createdAt": "2022-03-07T05:53:35.000Z"
            },
            {
                "id": 824,
                "userId": 35,
                "fingerprintUserId": 27,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "five",
                "firstReply": "1교시와 동일 (저녁등원)",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T07:37:59.000Z",
                "secondReplyTime": "2022-03-07T07:36:22.000Z",
                "createdAt": "2022-03-07T07:35:37.000Z"
            },
            {
                "id": 832,
                "userId": 35,
                "fingerprintUserId": 27,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "six",
                "firstReply": "6:49 등원",
                "secondReply": "벌점X",
                "firstReplyTime": "2022-03-07T09:50:20.000Z",
                "secondReplyTime": "2022-03-07T09:55:21.000Z",
                "createdAt": "2022-03-07T09:50:20.000Z"
            }
        ]
    },
    {
        "user_id": "138",
        "name": "최홍석(본도시락)",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "126",
        "idx_last_modified": "3658",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "40003",
        "idx_user_id_num": "85003",
        "idx_name": "80002",
        "idx_phone": "9",
        "idx_email": "9",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [],
        "reply": [
            {
                "id": 792,
                "userId": 35,
                "fingerprintUserId": 138,
                "targetDate": "2022-03-06T15:00:00.000Z",
                "period": "one",
                "firstReply": null,
                "secondReply": "",
                "firstReplyTime": null,
                "secondReplyTime": "2022-03-07T00:16:32.000Z",
                "createdAt": "2022-03-07T00:16:32.000Z"
            }
        ]
    },
    {
        "user_id": "56",
        "name": "하정원",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "62",
        "idx_last_modified": "3581",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "67000",
        "idx_user_id_num": "33000",
        "idx_name": "81000",
        "idx_phone": "35000",
        "idx_email": "35000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8111,
                "userId": 56,
                "permission": 1,
                "direction": "outside",
                "time": "1646607939334",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:05:39.000Z",
                "name": "하정원",
                "accessGroup": "학생",
                "realTime": "7, 8, 5"
            }
        ],
        "reply": []
    },
    {
        "user_id": "23",
        "name": "한승지",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "47",
        "idx_last_modified": "3562",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "48000",
        "idx_user_id_num": "16000",
        "idx_name": "82000",
        "idx_phone": "21000",
        "idx_email": "21000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8117,
                "userId": 23,
                "permission": 1,
                "direction": "outside",
                "time": "1646609214798",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:26:54.000Z",
                "name": "한승지",
                "accessGroup": "학생",
                "realTime": "7, 8, 26"
            }
        ],
        "reply": []
    },
    {
        "user_id": "119",
        "name": "허승호",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "1",
        "last_modified": "98",
        "idx_last_modified": "3537",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "23000",
        "idx_user_id_num": "69000",
        "idx_name": "83000",
        "idx_phone": "68000",
        "idx_email": "68000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "2",
                "name": "관리자"
            }
        ],
        "records": [],
        "reply": []
    },
    {
        "user_id": "10",
        "name": "홍민정",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "38",
        "idx_last_modified": "3516",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "2000",
        "idx_user_id_num": "7000",
        "idx_name": "84000",
        "idx_phone": "13000",
        "idx_email": "13000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8090,
                "userId": 10,
                "permission": 1,
                "direction": "outside",
                "time": "1646603218338",
                "kinds": "f",
                "DateInserted": "2022-03-06T21:46:58.000Z",
                "name": "홍민정",
                "accessGroup": "학생",
                "realTime": "7, 6, 46"
            }
        ],
        "reply": []
    },
    {
        "user_id": "29",
        "name": "황주현",
        "gender": "0",
        "photo_exists": "false",
        "pin_exists": "false",
        "password_exists": "false",
        "updated_count": "0",
        "last_modified": "50",
        "idx_last_modified": "3567",
        "start_datetime": "2001-01-01T00:00:00.00Z",
        "expiry_datetime": "2030-12-31T23:59:00.00Z",
        "security_level": "0",
        "display_duration": "0",
        "display_count": "0",
        "inherited": "false",
        "user_group_id": {
            "id": "1",
            "name": "All Users"
        },
        "disabled": "false",
        "expired": "false",
        "idx_user_id": "53000",
        "idx_user_id_num": "21000",
        "idx_name": "85000",
        "idx_phone": "24000",
        "idx_email": "24000",
        "fingerprint_template_count": "1",
        "face_count": "0",
        "card_count": "0",
        "access_groups": [
            {
                "id": "3",
                "name": "학생"
            }
        ],
        "records": [
            {
                "id": 8110,
                "userId": 29,
                "permission": 1,
                "direction": "outside",
                "time": "1646607926202",
                "kinds": "f",
                "DateInserted": "2022-03-06T23:05:26.000Z",
                "name": "황주현",
                "accessGroup": "학생",
                "realTime": "7, 8, 5"
            }
        ],
        "reply": []
    }
]

export default userList;