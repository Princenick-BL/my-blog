import Head from 'next/head'

export const config = { amp: true };

export default function Home() {
  return (
    <>
      <Head>
        <title>Example AMP Story in Next.js</title>
        <script
          async
          key="amp-story"
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        />
        <script
          async
          key="amp-video"
          custom-element="amp-video"
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        />
        
      </Head>

      <amp-story
        standalone=""
        title="Stories in AMP - Hello World"
        publisher="AMP Project"
        publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
        poster-portrait-src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
        poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
        poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg"
      >
        {/* <!-- A story consists of one or more pages. Each page is declared by an `amp-story-page` element. Pages are designed by layering videos, images and text. Here we have a page that uses two layers. One layer filling the available space with an image and one text layer that shows a heading. --> */}
        <amp-story-page id="page-1" style = {{ borderRadius : "10px ",width:"calc( 100% - 2px )"}}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog2.jpg"
              width="720"
              height="500"
              layout="fixed"
              style = {{
                position : "absolute",
                maxWidth : "100%",
                maxHeight:"60%",
              }}
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <svg 
              id="wave" 
              style={{
                transform:"rotate(0deg)", 
                transition: "0.3s",
                position : "absolute",
                top : "0",
                transform: "rotate(180deg)"
              }} 
              viewBox="0 0 1440 250" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="#0E3EDA" offset="0%"></stop>
                    <stop stopColor="#2FA4FF" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path style={{transform:"translate(0, 0px)", opacity:1}} fill="url(#sw-gradient-0)" d="M0,175L40,158.3C80,142,160,108,240,83.3C320,58,400,42,480,33.3C560,25,640,25,720,45.8C800,67,880,108,960,133.3C1040,158,1120,167,1200,170.8C1280,175,1360,175,1440,150C1520,125,1600,75,1680,83.3C1760,92,1840,158,1920,175C2000,192,2080,158,2160,120.8C2240,83,2320,42,2400,20.8C2480,0,2560,0,2640,0C2720,0,2800,0,2880,33.3C2960,67,3040,133,3120,166.7C3200,200,3280,200,3360,195.8C3440,192,3520,183,3600,150C3680,117,3760,58,3840,62.5C3920,67,4000,133,4080,170.8C4160,208,4240,217,4320,187.5C4400,158,4480,92,4560,58.3C4640,25,4720,25,4800,58.3C4880,92,4960,158,5040,162.5C5120,167,5200,108,5280,108.3C5360,108,5440,167,5520,175C5600,183,5680,142,5720,120.8L5760,100L5760,250L5720,250C5680,250,5600,250,5520,250C5440,250,5360,250,5280,250C5200,250,5120,250,5040,250C4960,250,4880,250,4800,250C4720,250,4640,250,4560,250C4480,250,4400,250,4320,250C4240,250,4160,250,4080,250C4000,250,3920,250,3840,250C3760,250,3680,250,3600,250C3520,250,3440,250,3360,250C3280,250,3200,250,3120,250C3040,250,2960,250,2880,250C2800,250,2720,250,2640,250C2560,250,2480,250,2400,250C2320,250,2240,250,2160,250C2080,250,2000,250,1920,250C1840,250,1760,250,1680,250C1600,250,1520,250,1440,250C1360,250,1280,250,1200,250C1120,250,1040,250,960,250C880,250,800,250,720,250C640,250,560,250,480,250C400,250,320,250,240,250C160,250,80,250,40,250L0,250Z"></path>
            </svg>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <div
              style = {{
                height: "40%",
                position : "absolute",
                maxWidth : "100%",
                maxHeight:"60%",
                bottom : 0,
                backgroundColor : "#fff",
                padding : "1rem",
                paddingBottom : "60px"
              }}
            >
              <h1 >Hello World</h1>
            </div>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <svg 
              id="wave" 
              style={{
                transform:"rotate(0deg)", 
                transition: "0.3s",
                position : "absolute",
                bottom : "0"
              }} 
              viewBox="0 0 1440 250" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs>
                <path style={{transform:"translate(0, 0px)", opacity:1}} fill="url(#sw-gradient-0)" d="M0,175L40,158.3C80,142,160,108,240,83.3C320,58,400,42,480,33.3C560,25,640,25,720,45.8C800,67,880,108,960,133.3C1040,158,1120,167,1200,170.8C1280,175,1360,175,1440,150C1520,125,1600,75,1680,83.3C1760,92,1840,158,1920,175C2000,192,2080,158,2160,120.8C2240,83,2320,42,2400,20.8C2480,0,2560,0,2640,0C2720,0,2800,0,2880,33.3C2960,67,3040,133,3120,166.7C3200,200,3280,200,3360,195.8C3440,192,3520,183,3600,150C3680,117,3760,58,3840,62.5C3920,67,4000,133,4080,170.8C4160,208,4240,217,4320,187.5C4400,158,4480,92,4560,58.3C4640,25,4720,25,4800,58.3C4880,92,4960,158,5040,162.5C5120,167,5200,108,5280,108.3C5360,108,5440,167,5520,175C5600,183,5680,142,5720,120.8L5760,100L5760,250L5720,250C5680,250,5600,250,5520,250C5440,250,5360,250,5280,250C5200,250,5120,250,5040,250C4960,250,4880,250,4800,250C4720,250,4640,250,4560,250C4480,250,4400,250,4320,250C4240,250,4160,250,4080,250C4000,250,3920,250,3840,250C3760,250,3680,250,3600,250C3520,250,3440,250,3360,250C3280,250,3200,250,3120,250C3040,250,2960,250,2880,250C2800,250,2720,250,2640,250C2560,250,2480,250,2400,250C2320,250,2240,250,2160,250C2080,250,2000,250,1920,250C1840,250,1760,250,1680,250C1600,250,1520,250,1440,250C1360,250,1280,250,1200,250C1120,250,1040,250,960,250C880,250,800,250,720,250C640,250,560,250,480,250C400,250,320,250,240,250C160,250,80,250,40,250L0,250Z"></path>
            </svg>
          </amp-story-grid-layer>
        </amp-story-page>

        {/* <!-- Here we have a page consisting of a video which autoplays and loops. --> */}
        <amp-story-page id="page-2"  style = {{ borderRadius : "10px ",width:"calc( 100% - 2px )"}}>
          <amp-story-grid-layer template="fill">
            <amp-video
              autoplay=""
              loop=""
              width="720"
              height="960"
              poster="https://amp.dev/static/samples/img/story_video_dog_cover.jpg"
              layout="responsive"
            >
              <source
                src="https://amp.dev/static/samples/video/story_video_dog.mp4"
                type="video/mp4"
              />
            </amp-video>
          </amp-story-grid-layer>
        </amp-story-page>

        {/* <!-- Pre-defined entry animations make it possible to create dynamic pages without videos. The length and initial delay can be customized using the `animate-in-duration` and `animate-in-delay` properties. The [animations sample](/documentation/examples/visual-effects/amp_story_animations/) shows all available animantions in action. --> */}
        <amp-story-page id="animation-demo"  style = {{ borderRadius : "10px ",width:"calc( 100% - 2px )"}}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="animation-demo"  style = {{ borderRadius : "10px ",width:"calc( 100% - 2px )"}}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="animation-demo"  style = {{ borderRadius : "10px ",width:"calc( 100% - 2px )"}}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="animation-demo"  style = {{ borderRadius : "10px ",width:"calc( 100% - 2px )"}}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="animation-demo"  style = {{ borderRadius : "10px ",width:"calc( 100% - 2px )"}}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-page id="animation-demo"  style = {{ borderRadius : "10px ",width:"calc( 100% - 2px )"}}>
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://amp.dev/static/samples/img/story_dog4.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            />
          </amp-story-grid-layer>
          <amp-story-grid-layer template="thirds">
            <h2
              animate-in="fly-in-bottom"
              grid-area="lower-third"
              animate-in-delay="0.4s"
            >
              Best walk ever!
            </h2>
          </amp-story-grid-layer>
        </amp-story-page>mon

        {/* <!-- Stories can use predefined layouts to style the page. Here we're using the `thirds` template. For an overview about the available layouts take a look at the [layouts sample](/documentation/examples/style-layout/amp_story_layouts/). --> */}
        <amp-story-page id="layout-demo"  style = {{ borderRadius : "10px ",width:"calc( 100% - 2px )"}}>
          <amp-story-grid-layer template="thirds">
            <amp-img
              grid-area="upper-third"
              src="https://amp.dev/static/samples/img/story_thirds_1.jpg"
              width="560"
              height="420"
              layout="responsive"
            />
            <amp-img
              grid-area="middle-third"
              src="https://amp.dev/static/samples/img/story_thirds_2.jpg"
              width="560"
              height="420"
              layout="responsive"
            />
            <amp-img
              grid-area="lower-third"
              src="https://amp.dev/static/samples/img/story_thirds_3.jpg"
              width="560"
              height="420"
              layout="responsive"
            />
          </amp-story-grid-layer>
        </amp-story-page>

        {/* <!-- A "bookend" panel containing links to other resources will appear on the last page of your story if you include an `amp-story-bookend` that references a [bookend JSON config](/static/samples/json/bookend.json). --> */}
        <amp-story-bookend
          src="https://amp.dev/static/samples/json/bookend.json"
          layout="nodisplay"
        />
      </amp-story>
    </>
  )
}