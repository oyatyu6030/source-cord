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

//---------ここから上にソースコードを書くこと-------------

// Discordに接続
bot.connect()
