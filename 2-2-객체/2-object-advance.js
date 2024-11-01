let article = {
  title: "날씨가 좋네요",
  content: "단풍이 예뻐요",
  writer: {
    id: `tokki`,
    name: `토끼`,
    joinDate: `2023-10-05`,
    grade: "leaf",
  },
  viewCount: 12,
  likeCount: 3,
  disLikeCount: 0,
  regDate: `2024-11-01`,
  hashTag: [`날씨`, `단풍`],
};

console.log(`typeof(article.title)`);
console.log(typeof article.title); // string
console.log(`typeof(article)`);
console.log(typeof article); // obj
console.log(`typeof(article.writer)`);
console.log(typeof article.writer); // obj

console.log(`=============================`);

// 객체 프로퍼티 수정하기
article.title = "제목없음";
article.grade = `VIP`;

console.log(article);

console.log(`=============================`);

// 프로퍼티 동적 추가 : 실행중에 프로퍼티 추가
article.isAdmin = true;
console.log(article);

console.log(`=============================`);

// 프로퍼티 삭제
delete article.grade;
console.log(article);

console.log(`=============================`);

// 프로퍼티의 이름만 가져오기
console.log(Object.keys(article));

console.log(`=============================`);

//객체의 중첩구조
//예시 : 게시판

let articles = {
  totalCount: 25578, //총 게시물 수
  admin: "abc1234", //게시판 관리자 아이디
  page: 2558, //총 페이지 수
  articleList: [
    // 게시물 목록
    {
      bno: 3, //글번호
      title: "가위바위보", //글제목
      writer: "김짱껨뽀", //작성자
      content: "다덤벼 ^^", //글내용
      viewCount: 53, //조회수
      recomm: 10, //추천수
      regDate: "21-12-07", //작성일자
    },
    {
      bno: 2, //글번호
      title: "노는게", //글제목
      writer: "뽀로로", //작성자
      content: "제일조와~~~", //글내용
      viewCount: 253, //조회수
      recomm: 11, //추천수
      regDate: "21-12-06", //작성일자
    },
    {
      bno: 1, //글번호
      title: "아멘", //글제목
      writer: "개신교신자", //작성자
      content: "할렐루야", //글내용
      viewCount: 23, //조회수
      recomm: 5, //추천수
      regDate: "21-12-05", //작성일자
    },
  ],
};

console.log(articles.articleList.length); // 3

for (let i of articles.articleList) {
  console.log(i);  // articleList가 반환됨
}
