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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
        <style amp-custom>
        {`  [data-product-id="lamp"] {
              top: 20%;
              left: 21%;
          }
              [data-product-id="chair"] {
              top: 53%;
              left: 30%;
          }
          [data-product-id="flowers"] {
              top: 46%;
              left: 83%;
          }
          .i-amphtml-story-draggable-drawer *::-webkit-scrollbar-track
          {
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
              border-radius: 10px;
              background-color: #F5F5F5;
          }

          .i-amphtml-story-draggable-drawer *::-webkit-scrollbar
          {
              width: 4px;
              background-color: #F5F5F5;
          }

          .i-amphtml-story-draggable-drawer *::-webkit-scrollbar-thumb
          {
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
              background-color: #555;
          }
          .page{
              background-color: #fff;
              border-radius: 15px;
              border: 3px solid #fff;
              width: calc(100% - 6px ) !important;
              height: calc(100% - 6px ) !important;
              box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }
          amp-story[standalone]{
              background-color: #1b1588 !important;
          }
          .logo{
              display: flex;
              justify-content: center;
          }
          .logo svg{
              max-height: 40px;
              margin: 0 auto;
          }`}
      </style>
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
        <amp-story-page id="page-1" class="page">
          <amp-story-grid-layer template="vertical">
            <amp-img  id="image1"
              animate-in="fade-in"
              animate-in-delay="1s"
              animate-in-duration="1s"
              src="https://unsplash.it/720/320/?image=10"
              width="720"
              height="420"
              layout="responsive"
              alt="..."
              style={{position : "absolute", top:"100px", margin:"5px",width:"calc( 100% - 10px )",borderRadius:"10px"}}
            ></amp-img>
          </amp-story-grid-layer>
          
          <amp-story-grid-layer template="vertical">
            <div
              animate-in="fly-in-bottom"
              style = {{
                height: "40%",
                position : "absolute",
                maxWidth : "100%",
                maxHeight:"30%",
                bottom : "70px",
                backgroundColor : "#fff",
                padding : "1rem",
                paddingBottom : "60px"
              }}
            >
              <h1
                style={{
                  fontFamily: "Dancing Script, cursive",
                  fontSize : "1.5rem",
                  textAlign : "center",
                  lineHeight : "2"
                }}
               >FERRARI 812 GTS: LE RETOUR DE LA SPIDER V12</h1>
            </div>
          </amp-story-grid-layer>
        </amp-story-page>

        {/* <!-- Here we have a page consisting of a video which autoplays and loops. --> */}
        <amp-story-page id="page-2"  class="page">
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
              <h1
                style={{
                  fontFamily: "Dancing Script, cursive",
                  fontSize : "1.5rem"
                }}
               >Hello World</h1>
            </div>
          </amp-story-grid-layer>
        
        </amp-story-page>

        {/* <!-- Pre-defined entry animations make it possible to create dynamic pages without videos. The length and initial delay can be customized using the `animate-in-duration` and `animate-in-delay` properties. The [animations sample](/documentation/examples/visual-effects/amp_story_animations/) shows all available animantions in action. --> */}
        <amp-story-page id="animation-demo"  class="page">
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

        <amp-story-page id="animation-demo"  class="page">
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

        <amp-story-page id="animation-demo"  class="page">
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

        <amp-story-page id="animation-demo"  class="page">
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

        <amp-story-page id="animation-demo"  class="page">
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
        <amp-story-page id="animation-demo"  class="page">
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
        <amp-story-page id="layout-demo"  class="page">
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