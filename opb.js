// 変数定義
const eris = require('eris')
const bot = new eris('token') //token

// Botの準備が出来たらconsoleにオンライン化に成功と表示（変更可）
bot.on('ready', () => {
    console.log('オンライン化に成功しました！')
    bot.editStatus('online', {name: '.os:h1と打ってHelpを見よう!'})
})

//---------ここから下にソースコードを書いていく----------

//メッセージを作る系のソースはこの下に書いていく

bot.on('messageCreate', (msg) => {

    //.os:h<ページ数>系統のソースはこの下から
    if(msg.content.match(/.os:h/)) {

        var page = msg.content.replace('.os:h', '')
        if(page <= 0) {
            bot.createMessage(msg.channel.id, 'ページの指定数が足りません。ページ数は1~1で書いてください。')
        }
        var page = msg.content.replace('.os:h', '')
        if(page >= 2) {
            bot.createMessage(msg.channel.id, 'ページの指定数が大きすぎます。ページ数は1~1で書いてください。')
        }
        var page = msg.content.replace('.os:h', '')
        if(page === 1) {
                bot.createMessage(msg.channel.id, '===O.S.コマンド一覧表===   page[1/1] ====' + '\n' + '**.os:h<ページ数>**' + '\n' + '当鯖のコマンド一覧表の<ページ数>/1を表示します。' + '\n' + '=================================' + '\n' + '**.os:p<ページ数>**' + '\n' + '当鯖の役職一覧表の<ページ数>/1を表示します。' + '\n' + '=================================' + '\n' + '**今の時間は(を含む7文字以下の文字列)**' + '\n' + '日本の現在時刻を年~秒単位で表示します。' + '\n' + '=================================')
        }
    }
    //.os:h<ページ数>系統のソースはここまで
})

//メッセージを作る系のソースはこの上に書いていく

bot.on('messageCreate', (msg) => {
    if(msg.content === '.os:p1') {
        bot.createMessage(msg.channel.id, '===O.S.役職一覧表===   page[1/1] ========' + '\n' + '**鯖主【OWNER】**' + '\n' + '本鯖の設立者の権限です。全権限を使用することができます。' + '\n' + '=================================' + '\n' + '')
    }
})

bot.on('guildMemberAdd', (guild, member, msg, author) => {
    bot.createMessage('428884489738125324', {
        embed: {
            author: {
                name: member.user.username + 'さんoyatyu-serverへようこそ！',
                url: 'https://discord.gg/pWkJeHs',
            },
            title: 'ここをクリックで参加希望部のアンケートに飛びます。', 
            color: 0x4286f4,
            url: 'https://goo.gl/forms/6lFkWrpNr43iEzBC2',
            description: '\n' + '本鯖の説明等は全てBOTのコマンドで行っています。' + '\n' + '<#445121154915500032>にて .os:h1 と書き込んでコマンドの確認をしてください。',
            timestamp: new Date(),
        }
    })
})

bot.on('guildMemberRemove', (guild, member) => {
    bot.createMessage('428884489738125324', '<@' + member.user.id + '>さんまた来てね！')
})

bot.on('messageCreate', (msg) => {
    if(msg.author.bot === false) {
        if(msg.content.match(/今の時間は/)) {
            var n = 7
            if(msg.content.length <= 7) {
                var date = new Date()
                var year = date.getFullYear()
                var month = date.getMonth() + 1
                var dates = date.getDate()
                var day = date.getDay()
                var days = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
                var hours = date.getHours()
                var minutes = date.getMinutes()
                var seconds = date.getSeconds()

                bot.createMessage(msg.channel.id, '今日は' + year + '年' + month + '月' + dates + '日 ' + days[day] + '\n' + '時刻は' + hours + '時' + minutes + '分' + seconds + '秒です。')
            }
        }
    }
})


//---------ここから上にソースコードを書くこと------------

// Discordに接続
bot.connect()
