/* eslint-disable */
const fetch = (...args) =>
  import("node-fetch")
    .then(({ default: f }) => f(...args))
    .catch((err) => console.log(err));
const cheerio = require("cheerio");
const { writeFileSync } = require("fs");
const path = require("path");

(async function () {
  let page = 1;
  let has_next = 1;
  let members = [];

  do {
    let html = await (
      await fetch(`https://github.com/orgs/bellshade/people/?page=${page}`)
    ).text();
    let $ = cheerio.load(html);
    $(
      '[class="d-flex flex-items-center flex-justify-end member-list-item js-bulk-actions-item border border-top-0 "]',
    ).each(function () {
      let avatar = $(this)
        .find('[data-hovercard-type="user"]')
        .eq(0)
        .find("img")
        .attr("src");
      let name = $(this)
        .find('[data-hovercard-type="user"]')
        .eq(1)
        .text()
        .trim();
      let uname = $(this)
        .find('[data-hovercard-type="user"]')
        .eq(1)
        .attr("href")
        .slice(1);
      members.push({
        avatar,
        name,
        username: uname,
      });
    });
    has_next = !$(".next_page").hasClass("disabled") ? 1 : 0;
    page++;
  } while (has_next === 1);

  console.log(`Recieved ${members.length} members data.`);
  members.forEach((f) => {
    console.log(`Name: ${f.name}
Username: ${f.username}
Avatar URL: ${f.avatar}\n`);
  });
  writeFileSync(
    path.join(__dirname, "data-json", "bellshade-member.json"),
    JSON.stringify(members, null, 2),
  );
})(0);
