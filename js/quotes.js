const quotes = [
    {
        quote: "당신이 사랑한다고 말할 때 당신의 사랑이 끝났고 당신의 사랑이 끝났을 때 내 사랑이 시작됐다.",
        author: "서래",
    },
    {
        quote: "다른 남자하고 헤어질 결심을 하려고.",
        author: "서래",
    },
    {
        quote: "슬픔이 파도처럼 밀려오는 사람이 있는가 하면 물에 잉크가 퍼지듯 서서히 물드는 사람도 있다",
        author: "해준",
    },
    {
        quote: "제가 언제 사랑한다고 했죠?",
        author: "해준",
    },
    {
        quote: "나는요, 붕괴됐어요.",
        author: "해준",
    },
    {
        quote: "나는 당신의 미결 사건이 되고싶어요.",
        author: "서래",
    },
    {
        quote: "나에게 선물하려면 친절한 형사의 심장을 가져다주세요.",
        author: "서래",
    },
    {
        quote: "그 폰은 깊은 바다에 버려요. 아무도 못 찾게.",
        author: "해준",
    },
    {
        quote: "긴장하지 않고도 그렇게 꼿꼿한 사람은 드물어요. 난 그게 서래씨에 대해서 많은 걸 말해준다고 생각합니다.",
        author: "해준",
    },
    {
        quote: "산에 가서 안 오면 걱정했어요. 마침내 죽을까봐",
        author: "서래",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;