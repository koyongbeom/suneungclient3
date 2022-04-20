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
        answer: '아닙니다. 등록 원하시는 날짜에 오전 9시 이후 방문하시면 등록 안내드리고 있습니다.\n상담 원하실 경우 등록 후 상담 신청하셔도 됩니다.'
    },
    {
        category: "register",
        question: '상담 시 인강 추천이나 연간 계획도 세워주시나요?',
        answer: '등록 후 학생별 상황에 맞는 전문 멘토를 배정하여 인강 및 커리큘럼 추천, 연간 계획 수립이 진행되고 있습니다.\n예를 들어, 치대를 목표로 하는 국수영탐 90/98/1/99인 이과 학생에게는 경희대 치대 재학 중인 국어 전담 멘토가 배정됩니다.'
    },
    {
        category: "register",
        question: '등록 기간이 따로 있나요?',
        answer: '아닙니다. 항시 등록 가능합니다.'
    },
    {
        category: "register",
        question: '등록 시 응시해야하는 시험이 있나요?',
        answer: '입학시험은 따로 없고, 전년도 수능성적표 제출하시면 됩니다. :)'
    },
    {
        category: "register",
        question: '상담 예약을 하고 싶은데 어디로 연락하면 되나요?',
        answer: '아래 링크를 통해 신청하시거나 050-7871-3574로 연락주시면 됩니다\n<a href="https://suneungsunbae.com/register">상담 신청하기</a>'
    },
    {
        category: "register",
        question: '전화상담도 가능한가요?',
        answer: '네, 가능합니다. 050-7871-3574로 연락주시면 됩니다.'
    },
    {
        category: "register",
        question: '등록 전 예약할 수 있나요?',
        answer: '네, 등록 예약 가능하며 고정 좌석 예약은 등원 3일 전부터 가능합니다.'
    },
    // {
    //     category: "register",
    //     question: '남은 좌석 현황은 어디서 볼 수 있나요?',
    //     answer: 'OO > OO 페이지에 들어가시면 보실 수 있습니다.'
    // },
    {
        category: "register",
        question: '1일 체험 가능한가요?',
        answer: '네, 가능합니다. 오전 9시 이후 방문하셔서 1일 체험 원한다고 말씀해주시면 안내드리고 있습니다.'
    },
    {
        category: "register",
        question: '주말에도 등록이 가능한가요?',
        answer: '토요일 오전 9시부터 오후 3시까지 가능하며, 그 이후 등록원하실 경우 사전 예약 후 방문하시면 됩니다. :)'
    },
    {
        category: "register",
        question: '개인적으로 궁금한 문의 사항은 어디로 연락하면 되나요?',
        answer: '050-7871-3574로 연락주시거나 아래 링크 카카오톡 플러스 친구로 연락주시면 됩니다\n<a href="http://pf.kakao.com/_ViHeb/chat">카카오톡 상담</a>'
    },
    {
        category: "register",
        question: '1일 단위나 주 단위로 등록 가능한가요?',
        answer: '월 단위로만 등록 가능합니다. :)'
    },
    {
        category: "management",
        question: '자물쇠반 의무자습시간은 몇 시부터 몇 시까지인가요?',
        answer: '평일 오전 9시부터 오후 10시까지, 토요일 오전 9시부터 오후 3시까지 입니다. :)'
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
        answer: '네, 부모님 승인하에 정기일정으로 등록하시면 외출이 허용됩니다. :)'
    },
    {
        category: "management",
        question: '핸드폰 제출은 의무인가요?',
        answer: '네, 의무입니다.'
    },
    {
        category: "management",
        question: '지각 시 교시 중 입실이 가능한가요?',
        answer: '교시 중 입실은 불가능합니다. 휴게실에서 공부하시다가 쉬는시간에 입실하셔야 합니다. :)'
    },
    {
        category: "management",
        question: '교시 중 화장실 출입이 가능한가요?',
        answer: '가능합니다. :)'
    },
    {
        category: "mentor",
        question: '담임 상담을 원치 않을 경우 참여하지 않아도 되나요?',
        answer: '네, 가능합니다. 등록 시 말씀해주시면 월 상담료 3만원을 차감해드립니다. :)'
    },
    {
        category: "mentor",
        question: '자습실 이용하지 않고 별도로 담임 상담만 신청가능한가요?',
        answer: '네, 가능합니다. 등록비는 월 4회 (주 1회) 30분 기준 90,000원입니다. :)'
    },
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
        answer: '기본적으로 한 주간 등원시간 및 하원시간 체크, 수강하기로 약속한 인터넷 강의 수강여부 확인,\n한 주간 공부한 내용에 대한 테스트,숙제검사, 공부계획 수립, 혼자 공부하면서 어려움이 있었던 부분에 대한 상담\n등이 이뤄집니다. 추가적으로 플래너 피드백, 주간 테스트 피드백, 질의응답, 구두테스트 등이 이뤄질 수 있습니다.'
    },
    {
        category: "mentor",
        question: '주간테스트는 무엇인가요?',
        answer: '담당 담임이 학생에게 필요하다고 느끼는 과목의 특정 단원 문제를 수능선배 프로그램에서 선별하여 테스트를 구성합니다.\n이 테스트를 학생이 다음 상담 전까지 풀어오는 방식으로 진행되며, 테스트 관련 피드백 및 해설이 상담시간에 진행됩니다.\n매번의 테스트가 프로그램에 기록되고, 틀린문제는 다시 풀어볼 수 있는 기능도 있어 복습이 용이합니다.'
    },
    {
        category: "mentor",
        question: '어떤 담임선생님들이 계신가요? ',
        answer: '아래 링크를 클릭하시면 확인 가능합니다.\n수능선배 담인은 면접을 통해서 선발하고 있어 우수한 튜터님들로 튜터진을 구성하고 있습니다.\n<a href="https://suneungsunbae.com/teachers">담임선생님 보러 가기</a>'
    },
    {
        category: "mentor",
        question: '담임배정은 어떻게 이루어지나요?',
        answer: '학생이 원하는 담임에게 최대한 배정해드리고 있으며,\n특별히 원하는 멘토가 없는경우 첫 등원시 작성하는 학생카드를 참고해서 적합한 담임에게 배정해드리고\n배정한 이유를 학생분에게 전달드리고 있습니다.\n상담을 받아보시고 추후에 다른 담임으로 변경이 가능합니다.\n단, 배정을 원하는 담임의 수용인원이 만석인 경우 배정이 어려운 상황이 생길 수 있습니다.'
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
        question: '질의응답 시간에 공부 내용 외 학습 방법 질문도 가능한가요?',
        answer: '네, 물론입니다. :)'
    },
    {
        category : "contents",
        question : "학원에서 오프라인 컨텐츠를 구매할 수 있나요?",
        answer : "네, 이감, 한수, 상상, 더프, 바탕 모의고사 등을 구매하실 수 있습니다."
    },
    {
        category: "coaching",
        question: '자습실 이용하지 않고 별도로 과외만 신청 가능한가요?',
        answer: '네, 가능합니다. 등록비는 주 1회 2시간 기준 (월 4회) 360,000원입니다. :)'
    },
    {
        category: "coaching",
        question: '주 2-3회 진행도 가능한가요?',
        answer: '네, 가능합니다. :)'
    },
    {
        category: "coaching",
        question: '과외 수업 시 비대면으로도 가능한가요?',
        answer: '네, 가능합니다.'
    },
    {
        category: "coaching",
        question: '과외 선생님 정보를 알 수 있나요?',
        answer: '아래 링크를 클릭하시면 확인하실 수 있습니다.\n모두 수능 평백 백분위 98% 이상 현재 의치대, 약대, 서울대 재학 중인 멘토들입니다.\n<a href="https://suneungsunbae.com/teachers">담임선생님 보러 가기</a>'
    },
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
        answer: '네, 가능합니다. :)'
    },
    {
        category: "meal",
        question: '도시락 신청은 필수인가요?',
        answer: '선택사항이며, 한 끼씩 신청가능합니다.'
    },
    {
        category: "meal",
        question: '점심시간, 저녁시간에 외출이 가능한가요?',
        answer: '네, 시간표 상 점심/저녁시간으로 지정된 시간 범위 내 1시간 이내로 외출이 가능합니다.'
    },
    {
        category: "meal",
        question: '도시락 비용이 어떻게 되나요?',
        answer: '메뉴에 따라 5천원대부터 8천원대까지 다양합니다. :)'
    },
    {
        category: "meal",
        question: '도시락 메뉴 선택이 가능한가요?',
        answer: '도시락 메뉴는 전용 프로그램을 통해 원하는 메뉴를 클릭 한 번으로 학생이 선택할 수 있으며, 당일 취소도 가능합니다.\n메뉴를 직접 선택하기 힘드신 분들에게는 수능선배에서 식단표를 제공해서 식단표대로 식사하실 수 있습니다.'
    },
    {
        category: "meal",
        question: '도시락은 한 달 단위로 하나요?',
        answer: '도시락은 한 끼 단위로 신청합니다. 당일 점심은 오전 9시 30분까지, 당일 저녁은 오후 2시 30분까지 신청가능합니다. :)'
    },
    {
        category: "meal",
        question: '집에서 도시락을 싸올 경우 먹을 수 있는 공간이 있나요?',
        answer: '네, 휴게실에서 식사하실 수 있습니다. :)'
    },
    {
        category: "meal",
        question: '외부에서 음식을 포장해올 경우 먹을 수 있는 공간이 있나요?',
        answer: '네, 휴게실에서 식사하실 수 있습니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 지정석인가요?',
        answer: '네, 맞습니다. 전 좌석 지정석이며, 좌석 변경 원할 시 행정선생님을 통해 변경하실 수 있습니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 각 자리에 콘센트가 설치되어 있나요?',
        answer: '네, 모든 자리에 콘센트가 설치되어 있습니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 오전 몇 시부터 이용 가능한가요?',
        answer: '연중무휴 24시간 이용가능합니다. :)'
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
        question: '[자습실] 1인석과 일반석은 어떻게 다른가요?',
        answer: '1인석은 방처럼 생긴 독립된 공간 안에 1인 좌석이 있는 형태입니다.\n문은 설치되어 있지 않습니다.'
    },
    {
        category: "interior",
        question: '[자습실] 2인석과 일반석은 어떻게 다른가요?',
        answer: '2인석은 독립된 공간 안에 2인 좌석이 있는 형태입니다.\n일반석에 비해 좌석 뒤 개인 공간을 넓게 사용하실 수 있습니다.'
    },
    {
        category: "interior",
        question: '[자습실] 일반석 중 오픈형과 독서실형의 차이는 무엇인가요?',
        answer: '오픈형은 개방되어 있는 도서관형 좌석이고, 독서실형은 세 면이 막혀 있는 독서실 책상형 좌석입니다.\n시설 안내 페이지의 사진을 참고하시기 바랍니다.'
    },
    {
        category: "interior",
        question: '[자습실] 좌석 형태에 따른 가격 차이는 어떻게 되나요?',
        answer: '1인석은 월 48만원, 2인석은 월 45만원, 일반석은 월 42만원입니다. :)'
    },
    {
        category: "interior",
        question: '[자습실] 이용하다가 좌석을 변경할 수 있나요?',
        answer: '네, 가능합니다. 좌석 변경 원할 시 행정 선생님을 통해 변경하실 수 있습니다. :)'
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
        answer: '네, 1인 1칸 무료제공됩니다. :)'
    },
    {
        category: "interior",
        question: '[상담실] 그룹 스터디 시, 상담실 이용이 가능한가요?',
        answer: '네, 사전 예약 후 사용하실 수 있습니다.'
    },
    {
        category : "price",
        question: '월 등록비는 얼마인가요?',
        answer: '1인석은 월 48만원, 2인석은 월 45만원, 일반석은 월 42만원입니다. :)'
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
        answer: '학원법에 따라 \n1. 이용시작 전 : 수강료 전액 환불\n2. 1/3 경과 전 : 수강료 2/3 해당액 환불\n3. 1/2 경과 전 : 수강료의 1/2 해당액 환불\n4. 1/2이상이 경과한 경우 수강료 환불 불가'
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