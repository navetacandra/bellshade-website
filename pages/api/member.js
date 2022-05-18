const cheerio = require('cheerio');

export default async function (req, res) {
    let members = [];
    let currentPage = 1;
    let has_next_page = true;

    do {
        let url = 'https://github.com/orgs/bellshade/people/?page=' + currentPage;
        let f = await fetch(url);
        let html = await f.text();

        let $ = cheerio.load(html);
        $('[data-bulk-actions-parameter="member_ids"] > ul > li').each(function () {
            let avatar = $(this).find('img.avatar.avatar-user').attr('src');
            let name = '';
            let username = '';
            $(this).find('[class="py-3 css-truncate pl-3 flex-auto"]').each(function () {
                name = $(this).find('a').text().trim() || '';
                username = $(this).find('span').text().trim() || '';
            })

            members.push({
                name: name,
                username: username,
                avatar: avatar
            });
        })

        has_next_page = !$('.next_page').eq(0).hasClass('disabled');
        currentPage += 1;
    } while (has_next_page);

    res.status(200).json({
        status: 'success',
        members_count: members.length,
        members: members
    });

}