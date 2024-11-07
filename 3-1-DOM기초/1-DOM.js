<html lang="ko">
  <head>
    <body>
      <section>
        <ul>
          <li>양파</li>
          <li>피망</li>
        </ul>
      </section>
    </body>
  </head>
</html>;

const htmlTag = {
  tagName : 'html',
  children : [headTag,bodyTag],
};
const headTag = {
  tagName : 'head',
};
const sectionTag = {
  tagName : 'section',
};
const bodyTag = {
  tagName : 'body',
  children : [sectionTag],
  parentElement : htmlTag,
  previousElementSidling : null,
};
const ulTag = {
  tagName : 'ul',
};
const liTag1 = {
  tagName : 'li',
};
const liTag2 = {
  tagName : 'li',
  children : [],
  parentElement : ulTag,
  previousElementSidling : liTag1,
  nextElementSidling : null,
  textContent : `피망`,
};
