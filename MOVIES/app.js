const url = "https://yts.mx/api/v2/list_movies.json?";

const $movieList = document.querySelector(".movie-list");
const $sortDownloadBtn = document.getElementById("s_rate");
const $sortYearBtn = document.getElementById("s_year");
const $sortLikeBtn = document.getElementById("s_like");

//모달 DOM
const myModal = new bootstrap.Modal(document.getElementById("detailModal"));
const $modalTitle = document.getElementById("exampleModalLabel");
const $modalImage = document.querySelector(".desc-image");
const $modalDesc = document.querySelector(".movie-description");

const $load = document.getElementById("loading");

//정렬을 위한 세부주소
const sortDownload = "sort_by=download_count&order_by=desc";
const sortLike = "sort_by=like_count&order_by=desc";
const sortYear = "sort_by=year&order_by=desc";

let pageCount = 0;
let isLoading = false;
let sortOption;

// 영화 목록을 가져오는 함수(option : 정렬방법)
async function getMoviesData(option) {
  console.log("pageCount", pageCount);

  if (isLoading) return;
  $load.style.opacity = "1";
  const res = await fetch(`${url}${option}&limit=20&page=${pageCount}`);
  const result = await res.json();
  const movies = result.data.movies;

  // 가져온 데이터를 렌더링한다.
  rendMoviesList(movies);
}

// 가져온 데이터 렌더링
function rendMoviesList(movies) {
  setTimeout(() => {
    for (const movie of movies) {
      const {
        large_cover_image: movieImage,
        title: movieTitle,
        year: movieYear,
        rating: movieRating,
        id: movieId,
      } = movie;

      const $newDiv = document.createElement("div");
      $newDiv.classList.add("movie");
      $newDiv.setAttribute("id", movieId);
      $newDiv.innerHTML = `<div class="img-box">
                  <img src="${movieImage}" alt="표지사진">
              </div>
              <div class="inner">
                  <div class="title">${movieTitle}</div>
                  <div class="year">${movieYear}</div>
                  <div class="rating">${movieRating}</div>`;
      $movieList.append($newDiv);
    }
    isLoading = false;
    $load.style.opacity = "0";
  }, 1000);
}

// 모달 팝업에 데이터 넣기
async function modalData(id) {

  // 영화의 id를 가지고 검색
  const res = await fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
  );
  const result = await res.json();
  const {
    description_full: movieDetail,
    title: movieTitle,
    medium_cover_image: movieImage,
  } = result.data.movie;

  $modalTitle.textContent = movieTitle;
  $modalImage.setAttribute("src", movieImage);
  $modalDesc.textContent = movieDetail || 'Details unavailable.';
  myModal.show();
}

function init(option) {
  $movieList.innerHTML = "";
  pageCount = 1;
  sortOption = option;
  isLoading = false;
}

const observer = new IntersectionObserver(
  (entries) => {
    console.log("ddddd", entries[0]);
    if (entries[0].isIntersecting && !isLoading) {
      console.log("ddddddddd");
      getMoviesData(sortOption);
      pageCount++;
    }
  },
  { threshold: 0.5 }
);
observer.observe($load);

$sortDownloadBtn.addEventListener("click", (e) => {
  init(sortDownload);
});
$sortYearBtn.addEventListener("click", (e) => {
  init(sortYear);
});
$sortLikeBtn.addEventListener("click", (e) => {
  init(sortLike);
});
$movieList.addEventListener("click", (e) => {
  const $selectedMovie = e.target.closest(".movie");

  const movieId = $selectedMovie.id;
  modalData(movieId);
});
