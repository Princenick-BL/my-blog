import React,{useRef,useEffect} from 'react'
import styles from './index.module.scss'

const ampStoryPlayerUrl = "https://cdn.ampproject.org/amp-story-player-v0";

export default function PlayerWidget() {

    const playerRef = useRef(null);
  
    function getAmpScript(callback) {
        const ampJS = document.createElement("script");
        ampJS.async = true;
        ampJS.src = ampStoryPlayerUrl + ".js";
        ampJS.onload = callback;
        return ampJS;
    }
    
    function getAmpCss() {
        const ampCSS = document.createElement("link");
        ampCSS.href = ampStoryPlayerUrl + ".css";
        ampCSS.rel = "stylesheet";
        ampCSS.type = "text/css";
    
        return ampCSS;
    }
    
    const useAmpStoryPlayer = (callback) => {
        useEffect(() => {
        console.log("useAmpStoryPlayer");
        const ampScript = document.querySelector(
            `script[src="${ampStoryPlayerUrl + ".js"}"]`
        );
        if (!ampScript) {
            document.head.appendChild(getAmpScript(callback));
            document.head.appendChild(getAmpCss());
        }
        }, []);
    };
    
    const playerDo = (containerId, callback) => {
        const player = document.querySelector(`#${containerId} amp-story-player`);
        if (player.isReady) {
            console.log("player is ready");
            callback(player);
        } else {
            console.log("player is not ready");
            player.addEventListener("ready", () => {
                callback(player);
            });
        }
    };
    
    const loadPlayer = (playerRef) => () => {

        if (window.AmpStoryPlayer) {
            new window.AmpStoryPlayer(window, playerRef.current).load();
        }
    
        playerRef.current.add([
        {
            href:
            "https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/"
        }
        ]);
    };

    useAmpStoryPlayer(loadPlayer(playerRef));


    useEffect(()=>{
        playerDo("player-widget", (player) => {
            
            player.show(
              "https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/"
            );
            player.play();
            player.unmute();
        })
    },[])

    return (
         <div
            id="player-widget"
            className={styles.widget}
        >
            <amp-story-player
                style={{ width: "300px", height: "533.333333333px" }}
                ref={playerRef}
            >
                <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/"></a>
            </amp-story-player>
        </div>
    )
}
