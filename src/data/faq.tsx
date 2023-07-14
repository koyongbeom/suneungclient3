const list = 
[
    {
        category: "register",
        question: '등록 원할 시 예약 후 방문해야 하나요?',
        answer: '아닙니다. 평일 오전 9시 ~ 오후 10시 사이에 방문하시면 간단하게 시설 및 시스템 안내드리고 있습니다.\n상담 원하실 경우 050-7871-3574(문자, 전화 모두 가능) 예약 후 방문하시면 됩니다.'
    },
    {
        category: "register",
        question: '반드시 학원에 방문해서 상담을 받아야 학원 등록이 가능한지 궁금합니다.',
        answer: '아닙니다. 상담 여부 관계 없이 평일 오전 8시부터 \n오후 10시 사이 학원 측으로 문의 주시면 등록 가능합니다.'
    },
    {
        category: "register",
        question: '상담 시 인강 추천이나 연간 계획도 세워주시나요?',
        answer: '등록 후 학생별 상황에 맞는 전문 멘토를 배정하여 인강 및 커리큘럼 추천, 연간 계획 수립이 진행되고 있습니다.\n예를 들어, 치대를 목표로 하는 국수영탐 90/98/1/99인 이과 학생에게는 경희대 치대 재학 중인 국어 전담 멘토가 배정됩니다.'
    },
    {
        category: "register",
        question: '등록 기간이 따로 있나요?',
        answer: '아닙니다. 신규등록생 경우 항시 등록 가능합니다.'
    },
    {
        category: "register",
        question: '등록 시 응시해야하는 시험이 있나요?',
        answer: '등록에 필요한 학원 별도의 입학시험은 없습니다. 다만, 멘토링 등 학생별 학습 관리를 위해 등록 시, \n최근 모의고사 성적이나 이전 수능 성적이 요구될 수 있습니다.'
    },
    // {
    //     category: "register",
    //     question: '상담 예약을 하고 싶은데 어디로 연락하면 되나요?',
    //     answer: '아래 링크를 통해 신청하시거나 050-7871-3574로 연락주시면 됩니다\n<a href="https://suneungsunbae.com/register">상담 신청하기</a>'
    // },
    {
        category: "register",
        question: '상담 예약을 하고 싶은데 어디로 연락하면 되나요?',
        answer: '아래 링크를 통해 신청해주시면 됩니다\n<a href="https://suneungsunbae.com/register">상담 신청하기</a>'
    },
    // {
    //     category: "register",
    //     question: '전화상담도 가능한가요?',
    //     answer: '네, 가능합니다. 050-7871-3574로 연락주시면 됩니다.'
    // },
    {
        category: "register",
        question: '신규 등원 전 등록을 미리 예약할 수 있나요?',
        answer: ')네 가능합니다. 다만, 지정좌석 예약은 등록결제 후 가능합니다.'
    },
    // {
    //     category: "register",
    //     question: '남은 좌석 현황은 어디서 볼 수 있나요?',
    //     answer: 'OO > OO 페이지에 들어가시면 보실 수 있습니다.'
    // },
    // {
    //     category: "register",
    //     question: '1일 체험 가능한가요?',
    //     answer: '네, 가능합니다. 공석 확인 후 오전 9시 이후 방문하셔서 1일 체험 원한다고 말씀해주시면 안내드리고 있습니다.'
    // },
    {
        category: "register",
        question: '주말에도 등록이 가능한가요?',
        answer: '네 가능합니다. 토요일 오전 9시부터 오후 3시까지 해당 지점 데스크 방문 시 가능하며,\n이외의 경우 학원 측으로 사전 문의 해주시면 감사하겠습니다.'
    },
    {
        category: "register",
        question: '개인적으로 궁금한 문의 사항은 어디로 연락하면 되나요?',
        answer: '1668-5786로 연락주시거나 아래 링크 카카오톡 플러스 친구로 연락주시면 됩니다\n<a href="http://pf.kakao.com/_Whxexgxj/chat">카카오톡 상담</a>'
    },
    {
        category: "register",
        question: '1일 단위나 주 단위로 등록 가능한가요?',
        answer: '월 단위로만 등록 가능합니다. :)'
    },
    {
        category: "management",
        question: '자물쇠반 의무자습시간은 몇 시부터 몇 시까지인가요?',
        answer: '평일 오전 8시부터 오후 10시까지, 토요일 오전 9시부터 오후 3시까지 입니다. :)'
    },
    {
        category: "management",
        question: '교시가 어떻게 운영되는지 궁금합니다.',
        answer: '생활 시간표는 학습시스템 메뉴에서 확인하실 수 있습니다. 의무자습시간 외 시설 이용은 연중무휴 24시간 가능합니다. :)\n'
    },
    {
        category: "management",
        question: '반수생이라 의무자습시간을 다 채울 수 없는데 등록이 가능한가요?',
        answer: '네, 학교 시간표 제출하시면 부모님 확인 후 정기일정으로 등록해드립니다. :)'
    },
    {
        category: "management",
        question: '자물쇠반 의무자습시간 내 외부 과외나 단과 수업이 있는 경우 병행이 가능한가요?',
        answer: '네, 부모님 승인 하에 정기일정으로 등록하시면 외출이 허용됩니다. :)'
    },
    {
        category: "management",
        question: '핸드폰 제출은 의무인가요?',
        answer: '네, 의무입니다.'
    },
    {
        category: "management",
        question: '지각 시 교시 중 입실이 가능한가요?',
        answer: '교시 중 입실은 불가능합니다. 휴게실에서 공부하시다가 쉬는 시간에 입실하셔야 합니다. :)'
    },
    {
        category: "management",
        question: '교시 중 화장실 출입이 가능한가요?',
        answer: '가능합니다. :)'
    },
    {
        category: "mentor",
        question: '담임 상담을 원치 않을 경우 참여하지 않아도 되나요?',
        answer: '네, 가능합니다. :)'
    },
    // {
    //     category: "mentor",
    //     question: '자습실 이용하지 않고 별도로 담임 상담만 신청가능한가요?',
    //     answer: '네, 가능합니다. 등록비는 월 4회 (주 1회) 30분 기준 90,000원입니다. :)'
    // },
    {
        category: "mentor",
        question: '담임 상담 시 비대면으로도 가능한가요?',
        answer: '네, 가능합니다.'
    },
    {
        category: "mentor",
        question: '담임 상담 주기는 어떻게 되나요?',
        answer: '주 1회 30분 진행되며, 배정된 담임과 정기적으로 상담이 이뤄집니다.'
    },
    {
        category: "mentor",
        question: '상담시 주로 어떤 내용을 다루나요?',
        answer: '이번 주 학습 범위에 맞춘 개별 테스트, 인강 수강 및 학습 계획 이행 여부,\n다음 주 진도 목표 수립, 과목별 시간 분배, 복습 방법에 대한 상담 등이 이뤄집니다.'
    },
    {
        category: "mentor",
        question: '개별 테스트는 무엇인가요?',
        answer: '담임이 특정 학생에게 필요하다고 판단되는 과목의 특정 단원 문제를 수능선배 프로그램에서 선별하여 테스트를 출제합니다.\n이 테스트를 학생이 상담 직전에 풀고 상담에 들어가는 방식입니다.\n테스트 결과가 프로그램에 기록되고, 틀린문제는 다시 풀어볼 수 있는 기능도 있어 복습이 용이합니다.'
    },
    {
        category: "mentor",
        question: '어떤 담임선생님들이 계신가요? ',
        answer: '아래 링크를 클릭하시면 확인 가능합니다.\n<a href="https://suneungsunbae.com/teachers">담임선생님 보러 가기</a>'
    },
    {
        category: "mentor",
        question: '담임배정은 어떻게 이루어지나요?',
        answer: '등록 후 원장 상담을 통해 성적대, 계열, 취약과목, 공부성향 등을 파악한 후, 개별 케이스에 맞는 담임에게 배정해드리고 있습니다.'
    },
    {
        category: "question",
        question: '대면 질의응답은 주 몇 회 가능한가요?',
        answer: '대면 질의응답 횟수 제한은 없습니다.'
    },
    {
        category: "question",
        question: '질의응답 받아주시는 선생님들은 어떤 분들인가요?',
        answer: '수능 각 과목 백분위 99% 이상 현재 의치대, 약대, 서울대 재학 중인 멘토들입니다.'
    },
    {
        category: "question",
        question: '질의응답 시간에 공부 내용 외 학습 전략 상담도 가능한가요?',
        answer: '네, 물론입니다. :)'
    },
    {
        category : "contents",
        question : "학원에서 오프라인 컨텐츠를 구매할 수 있나요?",
        answer : "네, 이감, 한수, 상상, 바탕 모의고사 등을 구매하실 수 있습니다."
    },
    // {
    //     category: "coaching",
    //     question: '자습실 이용하지 않고 별도로 과외만 신청 가능한가요?',
    //     answer: '네, 가능합니다. 등록비는 주 1회 2시간 기준 (월 4회) 360,000원입니다. :)'
    // },
    // {
    //     category: "coaching",
    //     question: '주 2-3회 진행도 가능한가요?',
    //     answer: '네, 가능합니다. :)'
    // },
    // {
    //     category: "coaching",
    //     question: '과외 수업 시 비대면으로도 가능한가요?',
    //     answer: '네, 가능합니다.'
    // },
    // {
    //     category: "coaching",
    //     question: '과외 선생님 정보를 알 수 있나요?',
    //     answer: '아래 링크를 클릭하시면 확인하실 수 있습니다.\n모두 수능 평백 백분위 98% 이상 현재 의치대, 약대, 서울대 재학 중인 멘토들입니다.\n<a href="https://suneungsunbae.com/teachers">담임선생님 보러 가기</a>'
    // },
    {
        category: "where",
        question: '수능 이후 배치상담이 가능한가요?',
        answer: '네, 가능합니다.'
    },
    {
        category: "where",
        question: '수시 지원 시 상담이 가능한가요?',
        answer: '네, 가능합니다.'
    },
    {
        category: "meal",
        question: '도시락 신청이 가능한가요?',
        answer: '네, 가능합니다. \'본도시락\' 도시락과 특식 메뉴 중 선택해서 드실 수 있습니다. :)'
    },
    {
        category: "meal",
        question: '도시락 신청은 필수인가요?',
        answer: '선택사항이며, 한 끼씩 신청가능합니다.'
    },
    {
        category: "meal",
        question: '점심시간, 저녁시간에 외출이 가능한가요?',
        answer: '네, 시간표 상 점심/저녁시간으로 지정된 시간 범위 내 60분 이내로 외출이 가능합니다.'
    },
    {
        category: "meal",
        question: '도시락 비용이 어떻게 되나요?',
        answer: '메뉴에 따라 5천원 대부터 8천원 대까지 다양하며, 평균 7천원 선입니다. :)'
    },
   // {
   //     category: "meal",
   //     question: '도시락 메뉴 선택이 가능한가요?',
   //     answer: '도시락 메뉴는 전용 프로그램을 통해 원하는 메뉴를 클릭 한 번으로 학생이 선택할 수 있으며, 당일 취소도 가능합니다.\n메뉴를 직접 선택하기 힘드신 분들에게는 수능선배에서 식단표를 제공해서 식단표대로 식사하실 수 있습니다.'
   // },
    {
        category: "meal",
        question: '도시락은 한 달 단위로 하나요?',
        answer: '도시락은 한 끼 단위로 신청합니다. 당일 점심은 오전 9시 30분까지, 당일 저녁은 오후 2시 30분까지 신청가능합니다. :)'
    },
    {
        category: "meal",
        question: '집에서 도시락을 싸올 경우 먹을 수 있는 공간이 있나요?',
        answer: '네, 휴게실 1인 칸막이 내에서 식사하실 수 있습니다. :)'
    },
    {
        category: "meal",
        question: '외부에서 음식을 포장해올 경우 먹을 수 있는 공간이 있나요?',
        answer: '네, 휴게실 1인 칸막이 내에서 식사하실 수 있습니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 지정석인가요?',
        answer: '네, 맞습니다. 전 좌석 지정석이며, 좌석 변경 원할 시 사감 조교님을 통해 변경하실 수 있습니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 각 자리에 콘센트가 설치되어 있나요?',
        answer: '네, 모든 자리에 콘센트가 설치되어 있습니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 오전 몇 시부터 이용 가능한가요?',
        answer: '오전 5시부터 24시까지 이용가능합니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 밤 몇 시까지 이용 가능한가요?',
        answer: '연중무휴 24시간 이용가능합니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 백색소음기가 설치되어 있나요?',
        answer: '네, 있습니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 교실형과 칸막이형은 어떻게 다른가요?',
        answer: '교실형은 각 책상 옆에 책장이 위치하고 앞을 보고 있는 구조고\n칸막이형은 책상에 책장이 없는 대신에 사물함을 제공해드립니다.'
    },
    {
        category: "interior",
        question: '[자습실] 교실형 책상에 앉아있으면 앞사람, 옆사람 공부하는 모습 가려지나요? ',
        answer: '교실형 책상에도 앞면과 옆면에 칸막이가 쳐져 있어서\n앞사람과 옆사람 공부하는 모습이 가려집니다.'
    },
    // {
    //     category: "interior",
    //     question: '[자습실] 각 책상에 ?',
    //     answer: '오픈형은 개방되어 있는 도서관형 좌석이고, 독서실형은 세 면이 막혀 있는 독서실 책상형 좌석입니다.\n시설 안내 페이지의 사진을 참고하시기 바랍니다.'
    // },
    {
        category: "interior",
        question: '[자습실] 좌석 형태에 따른 가격 차이는 어떻게 되나요?',
        answer: '좌석 형태에 따라 가격 차이는 없고 월 62만원입니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 이용하다가 좌석을 변경할 수 있나요?',
        answer: '네, 가능합니다. 좌석 변경 원할 시 사감조교님을 통해 변경하실 수 있습니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 원하는 좌석이 있는데 이미 차있을 경우, 다른 좌석을 이용하다가 자리가 나면 변경할 수 있나요?',
        answer: '네, 가능합니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 윈드바이저가 설치되어 있나요?',
        answer: '네, 모든 냉난방기에 설치되어 있습니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 환기는 하루에 몇 번 하나요?',
        answer: '점심시간, 저녁시간, 새벽 청소시간, 총 세 번 30분씩 이루어집니다.'
    },
    {
        category: "interior",
        question: '[자습실] 공기청정기가 설치되어 있고 주기적으로 필터 청소가 되나요?',
        answer: '공기청정기가 설치되어 있으며 2주에 한번씩 필터 청소를 하고 있습니다.'
    },
    {
        category: "interior",
        question: '[자습실] 자습실 안에서 커피 마실 수 있나요?',
        answer: '무알콜 음료만 가능합니다.'
    },
    {
        category: "interior",
        question: '[자습실] 마스크 착용은 어떻게 관리되고 있나요?',
        answer: '매 교시 순찰하여, 마스크 미착용 시 1회 경고하고 2회 적발 시 퇴원 조치하고 있습니다.'
    },
    {
        category: "interior",
        question: '[휴게실] 식사 시 칸막이가 설치되어 있나요?',
        answer: '네, 다인용 테이블에 1인 칸막이가 설치되어 있어 각 칸에서 혼자 식사하실 수 있습니다.\n이 외 1인용 테이블을 이용하실 수 있습니다.'
    },
    {
        category: "interior",
        question: '[휴게실] 공부할 때 이용할 수 있는 콘센트가 있나요?',
        answer: '네, (스탠딩 테이블을 제외한) 전 테이블에 콘센트가 설치되어 있습니다. :)'
    },
    {
        category: "interior",
        question: '[휴게실] 서서 공부할 수 있는 스탠딩 테이블이 설치되어 있나요?',
        answer: '네, 있습니다. :)'
    },
    {
        category: "interior",
        question: '[휴게실] 사물함이 제공되나요?',
        answer: '네, 칸막이 책상의 경우 1인 1칸 무료 제공됩니다. :)'
    },
    // {
    //    category: "interior",
    //    question: '[상담실] 그룹 스터디 시, 상담실 이용이 가능한가요?',
    //    answer: '네, 사전 예약 후 사용하실 수 있습니다.'
    // },
    {
        category : "price",
        question: '월 등록비는 얼마인가요?',
        answer: '월 62만원입니다.\n담임멘토 상담, 질의응답, 생활관리 비용이 포함되어 있습니다. :)'
    },
    {
        category : "price",
        question: '등록비는 월 단위로 결제하나요?',
        answer: '네, 한 달 단위로 결제 가능합니다. :)'
    },
    {
        category : "price",
        question: '자물쇠반 등록비에 멘토링 비용이 포함되어 있나요?',
        answer: '네, 자물쇠반 시스템에 생활관리, 멘토링, 질의응답이 포함되어 있습니다.'
    },
    {
        category : "price",
        question: '자물쇠반 등록비에 도시락 비용이 포함되어 있나요?',
        answer: '도시락 비용은 별도입니다. :)'
    },
    {
        category : "price",
        question: '환불규정은 어떻게 되나요? ',
        answer: '\n1. 이용시작 전 : 수강료 전액 환불\n2. 1/3 경과 전 : 수강료 2/3 해당액 환불\n3. 1/2 경과 전 : 수강료의 1/2 해당액 환불\n4. 1/2이상이 경과한 경우 수강료 환불 불가'
    },
    // {
    //     category : "price",
    //     question: '장학금 제도가 있나요?',
    //     answer: '네, ddd 50% ddd 30%입니다.'
    // },
    {
        category : "etc",
        question: '지방에서 올라온 학생들은 보통 어디에 거주하는지 정보를 알 수 있을까요?',
        answer: '상담 시 문의해주시면 저희가 주변 괜찮은 곳들을 추천해드립니다.'
    },
    {
        category : "etc",
        question: '근처에 싸고 괜찮은 음식점이 있나요?',
        answer: '강남역 직장인과 학생들이 많은 곳이라 싸고 괜찮은 음식점이 많습니다.'
    }
]


export default list;