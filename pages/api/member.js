const cheerio = require('cheerio');

export default async function GetMembers(req, res) {
  const members = [];
  const GetHtml = (uri) => fetch(uri).then((resp) => resp.text());
  let currentPage = 1;
  let hasNextPage = true;

  do {
    const url = `https://github.com/orgs/bellshade/people/?page=${currentPage}`;
    const html = GetHtml(url);

    const $ = cheerio.load(html);
    $('[data-bulk-actions-parameter="member_ids"] > ul > li').each(() => {
      const avatar = $(this).find('img.avatar.avatar-user').attr('src');
      let name = '';
      let username = '';
      $(this).find('[class="py-3 css-truncate pl-3 flex-auto"]').each(() => {
        name = $(this).find('a').text().trim() || '';
        username = $(this).find('span').text().trim() || '';
      });

      members.push({
        name,
        username,
        avatar,
      });
    });

    hasNextPage = !$('.next_page').eq(0).hasClass('disabled');
    currentPage += 1;
  } while (hasNextPage);

  res.status(200).json({
    status: 'success',
    members_count: members.length,
    members,
  });
}
