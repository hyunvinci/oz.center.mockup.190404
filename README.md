# oz.center.mockup.190404


수정사항 반영 전

구현씨

피드백 드립니다

1.	데시보드 - 위젯 - 추가시 발생되는 UI 추가

2.	[반영 완료]
Edge - Things - 수정시 통신 방식과 Things Profile은 수정할수 없도록 합니다 (이는 구현의 단순화 과정으로 추후 버전에서 수정에 대한 기능을 포함시키고자 합니다)

3.	[반영 완료]
Edge - Things 수정 UI에서  Data 표시 부분은 시계열 방식이 아닌 각 키에 대한 마지막 값 정보(Value, Date)만 표출하도록 단순화 합니다

4.	Edge - Things 수정 UI에서 Log 부분은 일단은 이상 상태에 대한 로그를 표출하도록하며 아래와 같은 테이블 형태 구조로 정리하겠습니다
시간 | Error 코드 | Error 설명
시간 | Error 코드 | Error 설명
시간 | Error 코드 | Error 설명

5.	[반영 완료]
OZ.Edge.SmartDn Edge UI에서는 로그인시 admin 항목 자체를 빼주세요

6.	[반영 완료]
OZ.Edge.SmartDn Edge UI 로그인후 진입된 화면에서 좌측 Tree View 항목없이 바로 Edge ID 입력 할수 있도록 하고 이미 입력된 Edge ID가 있다면 ID를 수정기능없이 설정된 ID를 보여주기만 하면 됩니다

7.	[반영 완료]
OZ.Edge.SmartDn Edge UI에서 Edge ID는 대략 아래와 같은 구조입니다
123e4567-e89b-12d3-a456-426655440000

8.	[반영 완료]
OZ.Edge.SmartDn Edge UI 로그인 사용자 개념은 없기 때문에 패스워드 변경 개념만 있으면 됩니다 (우측 상단 아이콘 열쇠모양 정도만)

세부적인 사항은 내일 미팅에서 추가 논의 하면 될듯 합니다

감사합니다
