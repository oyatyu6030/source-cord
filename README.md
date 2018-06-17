# source-cord
bot.on('guildMemberAdd', (guild, member) => {
    bot.createMessage('428884489738125324', {
        embed: {
            author: {
                name: member.user.username + 'さんoyatyu-serverへようこそ！',
                url: 'https://discord.gg/pWkJeHs',
            },
            title: 'ここをクリックで参加希望部のアンケートに飛びます。', 
            url: 'https://goo.gl/forms/6lFkWrpNr43iEzBC2',
        },
        description: '本鯖の説明等は全てBOTのコマンドで行っています。\n<#445121154915500032>にて .os:h1 と書き込んでコマンドの確認をしてください。',
        
        timestamp: new Date(),
    })
})
