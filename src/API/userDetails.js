const userDetailsFetch = async (req, res, formatData, query) => {
    let userName = req.params.username;
    let limit = req.query.limit;
    await fetch('https://leetcode.cn/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://leetcode.cn'
        },
        body: JSON.stringify({ query: query, variables: { userSlug: userName } }),

    })
        .then(result => result.json())
        .then(data => {
            if (data.errors) {
                res.send(data);
            } else {
                console.log('Success:', data.data)
                res.json(formatData(data.data));
            }
        })
        .catch(err => {
            console.error('Error', err);
            res.send(err);
        });
};

module.exports = userDetailsFetch;
