import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` 
◢【REKOMENDASI ANIME】◣
L I S T   A N I M E : 
▷▷GENRE ACTION◁◁
- Kill La kill
- Akame Ga Kill
- Saiki Kouso
- Black Butler
- Belzeebub
- UQ Holder
- Charlote
- Dies Irae
- Isekai Maou
- Hataraku Maou Sama
- Isekai Wa Smartphone
- Kekkai Sensen
- Code Geass
- God Eater
- Darling In Fanxx 
- Mirai Nikki 
- Hellsing Ultimete
- Radiant
- Gulity Crown 
- Knight And Magic
- Youjo Senki
- Re:Zero Kara Hajimeru Isekai Seikatsu
- Sword Art Online
- No Game no Life
- Hai To Gensou No Grimgar
- Death March
- Log Horizon
- Mondaiji
- Ushio To Tora
- Overlord
- Big order
- Mahouka koukou
- Re : Creator
- Kyokai No Kanata
- Date Alive
- Magi Series
- Rokudenashi majutsu
- Owari No Sherap
- Gakusen Tosh Asterisk
- Shinmai Maou No Testament
- Kiseiju
- Dead Note
- Sakamoto Desu Ga
- Rosario Vampire
- Shingeki No Kyojin
- Classroom Of The Elite
- Tensei Shitara Slime datta ken
- Noragami
- Mob Psycho
- Sousei No onmyouji 

▷▷GENRE ROMANCE◁◁
-white album 
-white album 2
-golden time
-bokura ga ita
-hachimitsu to clover
-ao haru ride
-kokoro connect
-relife
-clannad
-shigatsu wa kimi no uso
-orange
-true tears
-plastic memories
-hanbun no tsuki ga noboru sora
-tsuki ga kirei
-koi to uso
-fukumenkei noise
-kimi no todoke
-toradora
-sakuraso no pet na kanojo
-oreimo
-zutto mae kara suki deshita
-suki ni naru shunkan wo
-5 cm per second
-kotonaha no niwa
-koe no katachi
-aishiteru ze baby? 
-kyoukai na kanata
-kumou no muko ya kusoku no basho
-isshuukan friends
-anonatsu de matteru
-chuunibyou demo shina kata:ren
-koi kaze
-angel beast
-guilty crown
-sukitteli na yo
-re: zero kara hajimeru isekai seikatsu
-itazura no kiss
-kimi no nawa
-anohana
-kanon
-hyouka
-air
-the ocean waves
-ef : a tales of memories
-shakugan no shana
-kimi no iru machi
-mashiro iro symphony
-hanasaku iroha
-suka suka
-ef : a tale of melodies
-sakamichi no apollon

▷▷GENRE COMEDY◁◁
-Asobi asobase
-beelzebub
-himotou umaru-chan
-Great Teacher Onizuka
-Working!! Series
-SKET Dance
-Danshi Koukousei no Nichijou
-Prison School
-Clannad
-Tamako Market
-Konosuba 
-Aho Girl
-Kobayashi-san Chi no Maid Dragon
-Servant x Service
-Detroit Metal City

▷▷GENRE MYSTERY◁◁
•death note
•another
•Gosick
•Boku Dake ga Inai Machi
•Detective Conan
•Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru
•Subete ga F ni Naru: The Perfect Insider

▷▷GENRE PSYCHOLOGICAL◁◁
-monster
-ghost in the shell
-kokkoku
-mawaru penguindrum
-elfed lied
-kanojo to kanojo no neko:everything  flows
-youkoso jitsuryaku shijou shugi no kyoushitsu e
-zetsuen no tempest
-zankyou no terror
-inuyashiki
-jigoku shoujo
-kakegurui
-death parade
-danganronpa
-chäoS;HEAd
-psycho pass
-tokyo ghoul
-gantz:O
-btooom!
-death note
-mirai nikki
-ping pong the animation
-re:zero kara hajimeru isekai seikatsu
-kiseijuu:sei no kakuritsu
-boku dake ga inai machi (erased)

▷▷GENRE ADVENTURE◁◁
-Kino no Tabi: The Beautiful World
-Ookami to Koushinryou (Spice and Wolf)
-Howl no Ugoku Shiro (Howl’s Moving Castle)

▷▷GENRE DRAMA◁◁
-Sankarea
-Yahari Ore no Seishun Love Come wa Mac Higatteiru
-Ano hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.
-Clannad Series
-Glasslip

▷▷GENRE SLICE OF LIFE◁◁
-Dagashi Kashi
-Himouto! Umaru-chan
-Servant x Service
-Non Non Biyori
-Usagi Drop
-New Game!

▷▷GENRE FANTASY◁◁
-Gate: Jieitai Kanochi Nite, Kaku Tatakaeri
-Shingeki no Bahamut Series
-Konosuba
-Nanatsu no Taizai
-Magi Series

▷▷GENRE MAGIC◁◁
-Rokudenashi Majutsu Koushi to Akashic Records
-Fate Series
-Fairy Tail
-Amagi Brilliant Park
-Junketsu no Maria
-Black Clover

▷▷GENRE HORROR◁◁
-Yami Shibai
-Jigoku Shoujo
-Shiki
-Kagewani
-Another

▷▷GENRE YAOI AND YURI◁◁
-Junjou Romantica
-Loveless
-Super Lovers
-Love Stage
-Hyakujitsu no Bara

-Maria-sama ga Miteru
-Aoi Hana
-Yuru Yuri
-Maria Holic
-Sakura Trick

▷▷GENRE TRAGEDY◁◁

-Mawaru Penguindrum
-Mahou Shoujo Madoka Magica
-Hoshi no Koe
-True Tears
-Tokyo Magnitude 8.0

▷▷GENRE SHOUNEN,SHOUJO,SEINEN◁◁
-Katetyo Hitman Reborn!
-Bakuman.
-Beelzebub
-School Rumble 
-D. Gray-Man

-Soredemo Sekai wa Utsukushii
-Sabage-bu!
-Nijiro Days
-Donten ni Warau
-Free!

-Ajin
-Black Bullet
-Baccano!
-Sakamoto Desu-ga?
-Elfend Lied

▷▷GENRE ISEKAI◁◁
•Re:Zero Kara Hajimeru Isekai Seikatsu
•Sword Art Online
•No Game no Life
•Overlord
•Hai to Gensou no Grimgar
•Isekai wa smartphone to tomo ni
•Death march
•log horizon
•mondaiji tachi
•how to sommon demon lord?
•knight & magic
•outbreak company

▷▷GENRE ECCHI◁◁
•High School DxD
•Kanokon
•Shimoneta to iu Gainen ga Sonzai Shinai Taikutsu na Sekai
•B Gate H Kei
•Shinmai Maou no Testament

▷▷GORE, PSYCHO,HORROR◁◁

•yami shibai
•another
•kagewani
•corpse party
•higurashi no naku koro ni
•jigoku shoujo(hell girl) 
•shigurui
•genocyber
•petshop of horor
•mneymosyne no musume tachi
•serial experiments lain
•blood C
•gakkou gurashi
•gantz
•vampire hunter D
•elfen lied
•berserk
•ghost stories (gakkou no kaidan) 
•shiki
•ghost hunt
•Deadman wonderland
•kakurenbo : hide & seek
•moster
•kemonozume
•gyo : tokyo fish attack
•akira
•paprika
•umineko no naku koro ni
•perfect blue
•mirai niki
•devilman : cry baby
•kara no kyoukai
•tasogare otome X amnesia
•shinsekai yori
•helsing
•kurayami santa
•mononoke
•shingetsutan tsukihime
•shikabane hime
•shinrei tantei yakumo

▷▷HAREM◁◁
-isekai Wa No Smartphone To Tomo Ni
-date A Live
-nisekoi
-shinmai Maou no Testament
-rosario Vampire
-campione
-monster Musume
-orelmo
-high school dxd
-gotoubun no hanayome

▷▷ L I S T  A N I M E : MOVIE◁◁
1. Momo e no Tegami
2. Jin-Roh: The Wolf Brigade
3. Colorful
4. Flanders no Inu
5. Kokoro ga Sakebitagatterunda
6. Grave of the Fireflies
7. Hotarubi no Mori e
8. Wolf Children
9. Toki wo Kakeru Shojo
10. 5  Per Second
11. Koe no katachi 
12. Kimi no nawa
13. Tenki no ko
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://www.otakudesu.watch/', 'link nonton', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)
}

handler.help = ['listanime']
handler.tags = ['info']
handler.command = /^list(nime|anime)$/i
export default handler