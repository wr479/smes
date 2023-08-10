
export function animation_dog(){

    const tickers = document.querySelectorAll('.js-ticker');

tickers.forEach((ticker) => {
  
        const tickerInner = ticker.querySelector(".js-ticker-inner");
        const tickerWidth = tickerInner.offsetWidth;
  console.log(tickerWidth)
        const time = ticker.dataset.time;
        tickerInner.childNodes.forEach((node) => {
          tickerInner.appendChild(node.cloneNode(true));
        });
        rhTickerMove(tickerInner, tickerWidth, time);
    });
    
    function rhTickerMove(element, tickerWidth, time) {
        gsap.fromTo(
            element,
            {
                x: 0
            },
            {
                duration: time,
                x: -tickerWidth,
                ease: Linear.easeNone,
                onComplete: rhTickerMove,
                onCompleteParams: [element, tickerWidth, time]
            }
        );
    }
}