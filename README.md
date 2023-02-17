# [Burn.Fit] Front-end 과제

- 제출 기한 : 과제 안내 메일을 받으신 시점으로부터 1주일 이내

- 제출 방법 : github에 올리고 주소를 메일([admin@bunnit.kr](mailto:admin@bunnit.kr))로 회신

<br>

## 과제 내용

### Level 1

- [x] React Native 기반 앱을 제작 하시오.
- [x] 앱 하단에 Bottom Tabs Navigator를 추가 하시오.
- [x] 4개의 탭을 추가 후 4개의 스크린을 생성하여 각 탭과 연결 하시오.

### Level 2

[x] 캘린더 탭에 외부 캘린더 라이브러리를 이용하지 않고 캘린더 컴포넌트를 제작하시오.  
[x] 캘린더에 현재 월을 출력하고 오늘 날짜를 구현 하시오.  
[x] 상단 좌우 화살표 버튼 클릭 시 전월, 익월을 캘린더에 출력 하시오.  
[x] 캘린더 상에 특정 날짜를 선택하면 해당 날짜에 원을 표시 하시오.

### Level 3

- [ ] react-native-reanimated, react-native-gesture-handler 라이브러리를 이용해서 제스처 이벤트가 발생하면 아래와 같이 캘린더의 형태가 월 캘린더에서 주 캘린더로, 주 캘린더에서 다시 월 캘린더로 변환 가능하도록 구현 하시오

## 💫 Demo

|                                                        **탭 선택**                                                         |                                                   **오늘날짜 표시 및 날짜 선택**                                                   |
| :------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
|    ![네비게이션](https://user-images.githubusercontent.com/85497694/219690872-30807cdb-3982-4110-bfa0-c6d439245868.gif)    |         ![날짜선택](https://user-images.githubusercontent.com/85497694/219698646-af16ce26-347b-4c14-8375-a13e16a6b914.gif)         |
|                                                     **달력 좌우 버튼**                                                     |                                               **지난,다음 달 날짜 클릭시 달력변경**                                                |
|  ![월달력좌우버튼](https://user-images.githubusercontent.com/85497694/219699367-4702158c-81df-4b1e-bb87-7f7def1051be.gif)  | ![지난다음달날짜클릭시이동](https://user-images.githubusercontent.com/85497694/219699814-50646c4b-585b-432a-aa97-8ac6dac12bb7.gif) |
|                                                   **주간 캘린더로 변경**                                                   |                                                          **달력 스크롤**                                                           |
| ![주간캘린더로변경](https://user-images.githubusercontent.com/85497694/219700360-f528f9ee-f5d6-4ef3-a344-e6189aeafe1d.gif) |       ![캘린더스크롤](https://user-images.githubusercontent.com/85497694/219700521-15da0d5a-d411-4ac7-ac51-b3382e09d730.gif)       |

<br/>

<br/>

## Commit Message Convention

| Tag Name | Description                                           |
| -------- | ----------------------------------------------------- |
| feat     | 새로운 기능을 추가할 경우                             |
| fix      | 버그를 고친 경우                                      |
| design   | CSS 등 사용자 UI 디자인 변경                          |
| style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| chore    | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우   |
| refactor | 코드 리팩토링                                         |
| docs     | 문서 수정                                             |
