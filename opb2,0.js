// 変数定義
const eris = require('eris')
const bot = new eris('NDU3MTk0NDIwODYxNzk2MzUz.Dh3B-Q.YBHr0jRK2uXGA9Tw5k52LdUS2rU') //token
const fs = require('fs')
const dir = 'C:/Users/味噌ラーメン/Desktop/Discord-Bots/opb/userdata'

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
        if(page == '') {
            bot.createMessage(msg.channel.id, {
                embed: {
                    author: {
                        name:　'[error]',
                    },
                    description: '『原因』ページ数が指定されていません。' + '\n' + '\n' + '『解決策』ページ数を1~1で指定してください。' + '\n' + '\n' + '『詳細(エラーコード)』A0', 
                    color: 0xff3838,
                    timestamp: new Date(),
                }
            })
        }
        else {
            if(page <= 0) {
                bot.createMessage(msg.channel.id, {
                    embed: {
                        author: {
                            name:　'[error]',
                        },
                        description: '『原因』ページの指定数が足りません。' + '\n' + '\n' + '『解決策』ページ数は1~1で書いてください。' + '\n' + '\n' + '『詳細(エラーコード)』A1', 
                        color: 0xff3838,
                        timestamp: new Date(),
                    }
                })
            }
            else {
                if(page >= 3) {
                    bot.createMessage(msg.channel.id, {
                        embed: {
                            author: {
                                name:　'[error]',
                            },
                            description: '『原因』ページの指定数が大きすぎます。' + '\n' + '\n' + '『解決策』ページ数は1~1で書いてください。' + '\n' + '\n' + '『詳細(エラーコード)』A2', 
                            color: 0xff3838,
                            timestamp: new Date(),
                        }
                    })
                }
                else {
                    if(page == 1) {
                        bot.createMessage(msg.channel.id, {
                            embed: {
                                author: {
                                    name:　'===O.S.コマンド一覧表===   page[1/2] ====',
                                },
                                description: '**.os:h<ページ数>   ヘルプ番号[A1]**' + '\n' + '当鯖のコマンド一覧表の(<ページ数>/2 ページ)と簡易的な説明を表示します。' + '\n' + '\n' + '**os:h<ヘルプ番号>   ヘルプ番号[A2]**' + '\n' + '<ヘルプ番号>に対応したコマンドの詳細を表示します。' + '\n' + '\n' + '**.os:p<ページ数>   ヘルプ番号[A3]**' + '\n' + '当鯖の役職一覧表の(<ページ数>/1 ページ)と説明を表示します。' + '\n' + '\n' + '**今の時間は(を含む7文字以下の文字列)   ヘルプ番号[A4]**' + '\n' + '日本の現在時刻を年~秒単位で表示します。' + '\n' + '\n' + '**.os:tr <元の言語>:<翻訳する言語> <翻訳する文字>    ヘルプ番号[A5]**' + '\n' + '<翻訳する文字>を<元の言語>から<翻訳する言語>へ翻訳した結果への直結リンクを表示します。' + '\n' + '対応言語は詳細ヘルプに書いてあります。', 
                                color: 0xf49542,
                                timestamp: new Date(),
                            }
                        })
                    }
                    else {
                        if(page == 2) {
                            bot.createMessage(msg.channel.id, {
                                embed: {
                                    author: {
                                        name:　'===O.S.コマンド一覧表===   page[2/2] ====',
                                    },
                                    description: '**.os:g <検索する言葉>   ヘルプ番号[A6]**' + '\n' + '<検索する言葉>のGoogleへの直結リンクを表示します。' + '\n' + '\n' + '**os:y <検索する動画>   ヘルプ番号[A7]**' + '\n' + '<検索する動画>のYouTubeへの直結リンクを表示します。' + '\n' + '\n' + '**.os:m <計算式>   ヘルプ番号[A8]**' + '\n' + '<計算式>の計算結果を表示します。' + '\n' +'表記方法などが少し特殊なので詳細ヘルプを見てください。', 
                                    color: 0xf49542,
                                    timestamp: new Date(),
                                }
                            })
                        }
                        else {
                            if(page == 'A1') {
                                bot.createMessage(msg.channel.id, {
                                    embed: {
                                        author: {
                                            name:　'.os:h<ページ数>の詳細ヘルプ',
                                        },
                                        description: '\n' + '・このコマンドは各コマンドの簡易的な説明を表示するコマンドです。' + '\n' + '・現在ページは2ページあり、1ページには最大5個のコマンドが書いてあります。'　+ '\n' + '・表示されるページは<ページ数>に対応して表示されます。' + '\n' + '\n' + '例: .os:h1 = 簡易ヘルプの1ページ目を表示', 
                                        color: 0x5bb8ff,
                                        timestamp: new Date(),
                                    }
                                })
                            }
                            else {
                                if(page == 'A2') {
                                    bot.createMessage(msg.channel.id, {
                                        embed: {
                                            author: {
                                                name:　'.os:h<ヘルプ番号>の詳細ヘルプ',
                                            },
                                            description: '\n' + '・このコマンドは各コマンドの詳細を表示するコマンドです。' + '\n' + '・ヘルプ番号は簡易ヘルプに表示されるコマンドの右側に表示されています。'　+ '\n' + '・表示されるコマンドの詳細は<ヘルプ番号>に対応して表示されます。' + '\n' + '\n' + '例: .os:hA1 = ヘルプ番号[A1]に対応するコマンド詳細を表示', 
                                            color: 0x5bb8ff,
                                            timestamp: new Date(),
                                        }
                                    })
                                }
                                else {
                                    if(page == 'A3') {
                                        bot.createMessage(msg.channel.id, {
                                            embed: {
                                                author: {
                                                    name:　'.os:p<ページ数>の詳細ヘルプ',
                                                },
                                                description: '\n' + '・このコマンドは本鯖の役職を表示するコマンドです。' + '\n' + '・ヘルプ番号は簡易ヘルプに表示されるコマンドの右側に表示されています。'　+ '\n' + '・表示されるコマンドの詳細は<ヘルプ番号>に対応して表示されます。' + '\n' + '\n' + '例: .os:hA1 = ヘルプ番号[A1]に対応するコマンド詳細を表示', 
                                                color: 0x5bb8ff,
                                                timestamp: new Date(),
                                            }
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //.os:h<ページ数>系統のソースはここまで


    //.os:p<ページ数>系統のソースはこの下から

    if(msg.content.match(/.os:p/)) {

        var page = msg.content.replace('.os:p', '')
        if(page == '') {
            bot.createMessage(msg.channel.id, {
                embed: {
                    author: {
                        name:　'[error]',
                    },
                    description: '『原因』ページ数が指定されていません。' + '\n' + '\n' + '『解決策』ページ数を1~1で指定してください。' + '\n' + '\n' + '『詳細(エラーコード)』A0', 
                    color: 0xff3838,
                    timestamp: new Date(),
                }
            })
        }
        else {
            if(page <= 0) {
                bot.createMessage(msg.channel.id, {
                    embed: {
                        author: {
                            name:　'[error]',
                        },
                        description: '『原因』ページの指定数が足りません。' + '\n' + '\n' + '『解決策』ページ数は1~1で書いてください。' + '\n' + '\n' + '『詳細(エラーコード)』A1', 
                        color: 0xff3838,
                        timestamp: new Date(),
                    }
                })
            }
            else {
                if(page >= 2) {
                    bot.createMessage(msg.channel.id, {
                        embed: {
                            author: {
                                name:　'[error]',
                            },
                            description: '『原因』ページの指定数が大きすぎます。' + '\n' + '\n' + '『解決策』ページ数は1~1で書いてください。' + '\n' + '\n' + '『詳細(エラーコード)』A2', 
                            color: 0xff3838,
                            timestamp: new Date(),
                        }
                    })
                }
                else {
                    if(page == 1) {
                        bot.createMessage(msg.channel.id, '===O.S.権限一覧表===   page[1/1] ========' + '\n' + '**鯖主【OWNER】**' + '\n' + '本鯖の設立者に付与される権限です。全ての権限を使用することができます。' + '\n' + '=================================')
                    }
                }
            }
        }
    }

    //.os:p<ページ数>系統のソースはここまで


    //今の時間は？コマンドのソースはこの下から書く

    if(msg.author.bot === false) {
        if(msg.content.match(/今の時間は/)) {
            var n = 7
            if(msg.content.length <= 7)  {
                var date = new Date()
                year = date.getFullYear()
                month = date.getMonth() + 1
                dates = date.getDate()
                day = date.getDay()
                days = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
                hours = date.getHours()
                minutes = date.getMinutes()
                seconds = date.getSeconds()

                bot.createMessage(msg.channel.id, '今日は' + year + '年' + month + '月' + dates + '日 ' + days[day] + '\n' + '時刻は' + hours + '時' + minutes + '分' + seconds + '秒です。')
            }
            else {
                if(msg.content.length >= 8) {
                    bot.createMessage(msg.channel.id, '7文字以下で書いてください。')
                }
            }
        }
    }

    //今の時間は？コマンドのソースはここまで

    if(msg.author.bot === false) {
        if(msg.content.match(/.os:tr /)) {
            var tr = msg.content.replace('.os:tr ', '')
            if(tr.match(/日本語:英語 /)) {
                var tr2 = tr.replace('日本語:英語 ', '')
                bot.createMessage(msg.channel.id, {
                    embed: {
                        author: {
                            name:'Google翻訳' + tr,
                            url: 'https://translate.google.co.jp',
                        },
                        title: 'ここをクリックで' + tr2 + 'の翻訳結果を表示します。', 
                        color: 0x26ffc1,
                        url: 'https://translate.google.co.jp/#ja/en/' + tr2,
                        timestamp: new Date(),
                    }
                })
            }
            else {
                if(tr.match(/英語:日本語 /)) {
                    var tr2 = tr.replace('英語:日本語 ', '')
                    bot.createMessage(msg.channel.id, {
                        embed: {
                            author: {
                                name:'Google翻訳' + tr,
                                url: 'https://translate.google.co.jp',
                            },
                            title: 'ここをクリックで' + tr2 + 'の翻訳結果を表示します。', 
                            color: 0x26ffc1,
                            url: 'https://translate.google.co.jp/#en/ja/' + tr2,
                            timestamp: new Date(),
                        }
                    })
                }
            }
        }
    }

    if(msg.author.bot === false) {
        if(msg.content.match(/.os:g /)) {
            var go = msg.content.replace('.os:g ', '')
            bot.createMessage(msg.channel.id, {
                embed: {
                    author: {
                        name:'Google',
                        url: 'https://www.google.co.jp',
                    },
                    title: 'ここをクリックで' + go + 'の検索結果を表示します。', 
                    color: 0xff8f26,
                    url: 'https://www.google.co.jp/search?client=opera&source=hp&ei=ArA8W-ruNoKp0ATayI6IDw&q=' + go,
                    timestamp: new Date(),
                }
            })
        }
    }

    if(msg.author.bot === false) {
        if(msg.content.match(/.os:y /)) {
            var yo = msg.content.replace('.os:y ', '')
            bot.createMessage(msg.channel.id, {
                embed: {
                    author: {
                        name:'YouTube',
                        url: 'https://www.youtube.com/',
                    },
                    title: 'ここをクリックで' + yo + 'の検索結果を表示します。', 
                    color: 0xff3838,
                    url: 'https://www.youtube.com/results?search_query=' + yo,
                    timestamp: new Date(),
                }
            })
        }
    }

    if(msg.author.bot === false) {
        if(msg.content.match(/.os:m /)) {
            if(msg.content.match(/;/)) {
                var num1 = msg.content.replace('.os:m ', '')
                var num10 = num1.replace('(', '')
                var num11 = num10.replace(')', '')
                var num12 = num1.replace('(', 'q')
                var num = num11.replace('b', '')
                var num2 = ';'
                var num3 = num.indexOf(num2)
                var num4 = parseInt(num.slice(num3 + 1))
                var num5 = parseInt(num.substring(0, num3))
                var num6 = num.replace(';', '+')
                var num7 = num5 - num4
                var num8 = num5 + num4
                var num9 = num.replace(';', '')
                if(num12.match(/q/)) {
                    bot.createMessage(msg.channel.id, num9 + '=' + num8)
                }
                else {
                    bot.createMessage(msg.channel.id, num6 + '=' + num8)
                }
            }
            else {
                if(msg.content.match(/-/)) {
                    var num1 = msg.content.replace('.os:m ', '')
                    var num10 = num1.replace('(', '')
                    var num11 = num10.replace(')', '')
                    var num12 = num1.replace('(', 'q')
                    var num = num11.replace('b', '')
                    var num2 = '-'
                    var num3 = num.indexOf(num2)
                    var num4 = parseInt(num.slice(num3 + 1))
                    var num5 = parseInt(num.substring(0, num3))
                    var num7 = num5 - num4
                    var num8 = num5 + num4
                    if(num1.match(/b/)) {
                        bot.createMessage(msg.channel.id, '-' + num + '=-' + num8)
                    }
                    else {
                        bot.createMessage(msg.channel.id, num + '=' + num7)
                    }
                }
            }
        }
    }

    


})

//メッセージを作る系のソースはこの上に書いていく

//鯖入退出時の表示メッセージはこの下から書く

//入室メッセージはこの下

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

//入室メッセージはこの上

//退出メッセージはこの下

bot.on('guildMemberRemove', (guild, member) => {
    bot.createMessage('428884489738125324', '<@' + member.user.id + '>さんまた来てね！')
})

//退出メッセージはこの上

//鯖入退出時の表示メッセージはこの上に書く


//---------ここから上にソースコードを書くこと------------

// Discordに接続
bot.connect()