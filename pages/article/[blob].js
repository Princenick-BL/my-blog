import React,{Fragment,useEffect,useState} from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import PlayerWidget from '../../components/PlayerWidget'
import { ArticleHeader } from '../../components/Header'
import BlogHead from '../../components/BlogHead'

export const config = { amp: true };


export default function Article({location}) {
      

    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8"/>
                <title>Hello, AMPs</title>
                <link rel="canonical" href={location}/>
            </Head>
            <BlogHead/>
            <Fragment>
            <header
      className="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4"
    >
      <div
        role="button"
        aria-label="open sidebar"
        on="tap:header-sidebar.toggle"
        tabindex="0"
        className="ampstart-navbar-trigger pr2"
      >
        ☰
      </div>
      <amp-img
        src="../img/blog/logo.png"
        width="100"
        height="61.3"
        layout="fixed"
        className="my0 mx-auto"
        alt="The Blog"
      ></amp-img>
    </header>


    <amp-sidebar
      id="header-sidebar"
      className="ampstart-sidebar px3"
      layout="nodisplay"
    >
      <div className="flex justify-start items-center ampstart-sidebar-header">
        <div
          role="button"
          aria-label="close sidebar"
          on="tap:header-sidebar.toggle"
          tabindex="0"
          className="ampstart-navbar-trigger items-start"
        >
          ✕
        </div>
      </div>
      <nav className="ampstart-sidebar-nav ampstart-nav">
        <ul className="list-reset m0 p0 ampstart-label">
          <li className="ampstart-nav-item ampstart-nav-dropdown relative">

            <amp-accordion
              layout="container"
              disable-session-states=""
              className="ampstart-dropdown"
            >
              <section>
                <header>Fashion</header>
                <ul className="ampstart-dropdown-items list-reset m0 p0">
                  <li className="ampstart-dropdown-item">
                    <a href="#" className="text-decoration-none">Styling Tips</a>
                  </li>
                  <li className="ampstart-dropdown-item">
                    <a href="#" className="text-decoration-none">Designers</a>
                  </li>
                </ul>
              </section>
            </amp-accordion>

          </li>
          <li className="ampstart-nav-item">
            <a className="ampstart-nav-link" href="#">Travel</a>
          </li>
          <li className="ampstart-nav-item ampstart-nav-dropdown relative">

            <amp-accordion
              layout="container"
              disable-session-states=""
              className="ampstart-dropdown"
            >
              <section>
                <header>Food</header>
                <ul className="ampstart-dropdown-items list-reset m0 p0">
                  <li className="ampstart-dropdown-item">
                    <a href="#" className="text-decoration-none">Recipes</a>
                  </li>
                  <li className="ampstart-dropdown-item">
                    <a href="#" className="text-decoration-none">Hosting Tips</a>
                  </li>
                </ul>
              </section>
            </amp-accordion>

          </li>
          <li className="ampstart-nav-item">
            <a className="ampstart-nav-link" href="#">Beauty</a>
          </li>
          <li className="ampstart-nav-item">
            <a className="ampstart-nav-link" href="#">Shop</a>
          </li>
        </ul>
      </nav>

      <ul
        className="ampstart-social-follow list-reset flex justify-around items-center flex-wrap m0 mb4"
      >
        <li>
          <a
            href="#"
            target="_blank"
            className="inline-block p1"
            aria-label="Link to AMP HTML Twitter"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22.2"
              viewBox="0 0 53 49"
            >
              <title>Twitter</title>
              <path
                d="M45 6.9c-1.6 1-3.3 1.6-5.2 2-1.5-1.6-3.6-2.6-5.9-2.6-4.5 0-8.2 3.7-8.2 8.3 0 .6.1 1.3.2 1.9-6.8-.4-12.8-3.7-16.8-8.7C8.4 9 8 10.5 8 12c0 2.8 1.4 5.4 3.6 6.9-1.3-.1-2.6-.5-3.7-1.1v.1c0 4 2.8 7.4 6.6 8.1-.7.2-1.5.3-2.2.3-.5 0-1 0-1.5-.1 1 3.3 4 5.7 7.6 5.7-2.8 2.2-6.3 3.6-10.2 3.6-.6 0-1.3-.1-1.9-.1 3.6 2.3 7.9 3.7 12.5 3.7 15.1 0 23.3-12.6 23.3-23.6 0-.3 0-.7-.1-1 1.6-1.2 3-2.7 4.1-4.3-1.4.6-3 1.1-4.7 1.3 1.7-1 3-2.7 3.6-4.6"
                className="ampstart-icon ampstart-icon-twitter"
              ></path></svg
          ></a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            className="inline-block p1"
            aria-label="Link to AMP HTML Facebook"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23.6"
              viewBox="0 0 56 55"
            >
              <title>Facebook</title>
              <path
                d="M47.5 43c0 1.2-.9 2.1-2.1 2.1h-10V30h5.1l.8-5.9h-5.9v-3.7c0-1.7.5-2.9 3-2.9h3.1v-5.3c-.6 0-2.4-.2-4.6-.2-4.5 0-7.5 2.7-7.5 7.8v4.3h-5.1V30h5.1v15.1H10.7c-1.2 0-2.2-.9-2.2-2.1V8.3c0-1.2 1-2.2 2.2-2.2h34.7c1.2 0 2.1 1 2.1 2.2V43"
                className="ampstart-icon ampstart-icon-fb"
              ></path></svg
          ></a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            className="inline-block p1"
            aria-label="Link to AMP HTML Instagram"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 54 54"
            >
              <title>instagram</title>
              <path
                d="M27.2 6.1c-5.1 0-5.8 0-7.8.1s-3.4.4-4.6.9c-1.2.5-2.3 1.1-3.3 2.2-1.1 1-1.7 2.1-2.2 3.3-.5 1.2-.8 2.6-.9 4.6-.1 2-.1 2.7-.1 7.8s0 5.8.1 7.8.4 3.4.9 4.6c.5 1.2 1.1 2.3 2.2 3.3 1 1.1 2.1 1.7 3.3 2.2 1.2.5 2.6.8 4.6.9 2 .1 2.7.1 7.8.1s5.8 0 7.8-.1 3.4-.4 4.6-.9c1.2-.5 2.3-1.1 3.3-2.2 1.1-1 1.7-2.1 2.2-3.3.5-1.2.8-2.6.9-4.6.1-2 .1-2.7.1-7.8s0-5.8-.1-7.8-.4-3.4-.9-4.6c-.5-1.2-1.1-2.3-2.2-3.3-1-1.1-2.1-1.7-3.3-2.2-1.2-.5-2.6-.8-4.6-.9-2-.1-2.7-.1-7.8-.1zm0 3.4c5 0 5.6 0 7.6.1 1.9.1 2.9.4 3.5.7.9.3 1.6.7 2.2 1.4.7.6 1.1 1.3 1.4 2.2.3.6.6 1.6.7 3.5.1 2 .1 2.6.1 7.6s0 5.6-.1 7.6c-.1 1.9-.4 2.9-.7 3.5-.3.9-.7 1.6-1.4 2.2-.7.7-1.3 1.1-2.2 1.4-.6.3-1.7.6-3.5.7-2 .1-2.6.1-7.6.1-5.1 0-5.7 0-7.7-.1-1.8-.1-2.9-.4-3.5-.7-.9-.3-1.5-.7-2.2-1.4-.7-.7-1.1-1.3-1.4-2.2-.3-.6-.6-1.7-.7-3.5 0-2-.1-2.6-.1-7.6 0-5.1.1-5.7.1-7.7.1-1.8.4-2.8.7-3.5.3-.9.7-1.5 1.4-2.2.7-.6 1.3-1.1 2.2-1.4.6-.3 1.6-.6 3.5-.7h7.7zm0 5.8c-5.4 0-9.7 4.3-9.7 9.7 0 5.4 4.3 9.7 9.7 9.7 5.4 0 9.7-4.3 9.7-9.7 0-5.4-4.3-9.7-9.7-9.7zm0 16c-3.5 0-6.3-2.8-6.3-6.3s2.8-6.3 6.3-6.3 6.3 2.8 6.3 6.3-2.8 6.3-6.3 6.3zm12.4-16.4c0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1.1 2.3 2.3z"
                className="ampstart-icon ampstart-icon-instagram"
              ></path></svg
          ></a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            className="inline-block p1"
            aria-label="Link to AMP HTML pin trest"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="28.5"
              viewBox="0 0 43 51"
            >
              <title>pinterest</title>
              <path
                d="M8.134 18.748c0-1.6.2-3 .8-4.4.5-1.4 1.2-2.6 2.2-3.6.9-1 2-1.9 3.2-2.6 1.2-.8 2.5-1.3 3.9-1.7 1.5-.4 2.9-.5 4.4-.5 2.2 0 4.3.4 6.2 1.4 1.9.9 3.5 2.3 4.7 4.1 1.2 1.9 1.8 3.9 1.8 6.2 0 1.4-.1 2.7-.4 4-.2 1.3-.7 2.6-1.2 3.8-.6 1.2-1.3 2.3-2.2 3.2-.8.9-1.8 1.7-3.1 2.2-1.2.6-2.5.9-4 .9-1 0-1.9-.3-2.9-.7-.9-.5-1.6-1.1-2-1.9-.1.5-.3 1.4-.6 2.4-.3 1.1-.4 1.7-.5 2-.1.3-.2.9-.4 1.6-.3.7-.4 1.2-.6 1.5-.1.3-.4.7-.7 1.3-.3.6-.6 1.2-1 1.7-.3.5-.7 1.1-1.3 1.8l-.3.1-.2-.2c-.2-2.2-.3-3.6-.3-4 0-1.3.2-2.8.5-4.4.3-1.7.8-3.7 1.4-6.2.6-2.5 1-3.9 1.1-4.4-.5-.9-.7-2.1-.7-3.6 0-1.2.4-2.3 1.1-3.3.8-1.1 1.7-1.6 2.8-1.6.9 0 1.6.3 2.1.9.4.6.7 1.3.7 2.2 0 .9-.3 2.3-1 4.1-.6 1.8-.9 3.1-.9 4 0 .9.3 1.6 1 2.2.6.6 1.4.9 2.3.9.8 0 1.5-.2 2.2-.5.6-.4 1.2-.9 1.6-1.5.5-.6.9-1.3 1.2-2 .4-.8.6-1.5.8-2.4.2-.8.4-1.6.5-2.4.1-.7.1-1.4.1-2.1 0-2.5-.8-4.4-2.3-5.8-1.6-1.4-3.6-2.1-6.1-2.1-2.8 0-5.2 1-7.1 2.8-1.9 1.9-2.9 4.2-2.9 7.1 0 .6.1 1.2.3 1.8.2.6.4 1.1.6 1.4.2.3.4.7.5 1 .2.3.3.5.3.6 0 .4-.1.9-.3 1.6-.2.6-.5 1-.8 1 0 0-.1-.1-.4-.1-.7-.2-1.3-.6-1.9-1.2-.5-.6-1-1.3-1.3-2-.3-.8-.5-1.6-.7-2.4-.2-.7-.2-1.5-.2-2.2z"
                className="ampstart-icon ampstart-icon-pinterest"
              ></path></svg
          ></a>
        </li>
      </ul>

      <ul className="ampstart-sidebar-faq list-reset m0">
        <li className="ampstart-faq-item">
          <a href="#" className="text-decoration-none">About</a>
        </li>
        <li className="ampstart-faq-item">
          <a href="#" className="text-decoration-none">Contact</a>
        </li>
      </ul>
    </amp-sidebar>

    <main id="content" role="main" className="">
      <article className="recipe-article">
        <header>
          <span className="ampstart-subtitle block px3 pt2 mb2">FOOD</span>
          <h1 className="mb1 px3">Ginger Strawberry Spritzer</h1>

          <address className="ampstart-byline clearfix mb4 px3 h5">
            <time
              className="ampstart-byline-pubdate block bold my1"
              datetime="2016-12-13"
              >December 13, 2016</time
            >
          </address>
          <amp-img
            src="../img/blog/spritzer.jpg"
            width="1280"
            height="853"
            layout="responsive"
            alt="The final spritzer"
            className="mb4 mx3"
          ></amp-img>
        </header>
        <p className="mb4 px3">
          Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
          quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
          Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
          Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit
          fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere.
        </p>

        <p className="mb4 px3">
          Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
          ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
          consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus
          ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat
          pretium libero.
        </p>
        <amp-img
          src="../img/blog/ingredient1.jpg"
          width="683"
          height="1024"
          layout="responsive"
          alt="strawberries"
          className="mb4 mx3"
        ></amp-img>

        <amp-img
          src="../img/blog/ingredient3.jpg"
          width="1280"
          height="960"
          layout="responsive"
          alt="strawberries lemons and mint"
          className="mb4 mx3"
        ></amp-img>

        <amp-img
          src="../img/blog/ingredient2.jpg"
          width="683"
          height="1024"
          layout="responsive"
          alt="lemon in a bowl"
          className="mb4 mx3"
        ></amp-img>

        <amp-img
          src="../img/blog/spritzer.jpg"
          width="1280"
          height="853"
          layout="responsive"
          alt="The final spritzer"
          className="mb4 mx3"
        ></amp-img>

        <section className="px3 mb4">
          <h2 className="mb2">Ingredients</h2>
          <span className="ampstart-hint block mb3">SERVINGS 4</span>
          <ul className="mb4">
            <li>2 bunches of strawberries</li>
            <li>1 lemon</li>
            <li>1 bunch of mint</li>
            <li>1 piece of ginger chopped</li>
            <li>1 bottle of sparkling water</li>
          </ul>

          <section className="mb4">
            <h2 className="mb3">Instructions</h2>

            <ol className="">
              <li className="mb4">
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              </li>
              <li className="mb4">
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                nisi. Nam eget dui. Etiam rhoncus.Nullam quis ante. Etiam sit
                amet orci eget eros faucibus tincidunt. Duis leo.
              </li>
              <li className="mb4">
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum.
              </li>
              <li className="mb4">
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem. Maecenas nec odio et ante tincidunt tempus. Phasellus
                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
                imperdiet. Etiam ultricies nisi vel augue.
              </li>
              <li className="mb4">
                Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                sagittis magna. Sed consequat, leo eget bibendum sodales, augue.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo.
              </li>
            </ol>
          </section>

          <section className="recipe-comments">
            <h2 className="mb3">4 Responses</h2>
            <ul className="list-reset">
              <li className="mb4">
                <h3 className="ampstart-subtitle">Sriram</h3>
                <span className="h5 block mb3">02.24.17 at 6:01 pm</span>
                <p>
                  This is perfect for a summer patio party. Thanks for another
                  great one!
                </p>
              </li>
              <li className="mb4">
                <h3 className="ampstart-subtitle">Eric</h3>
                <span className="h5 block mb3">02.24.17 at 5:14 am</span>
                <p>
                  These were so good I woke up dreaming about them. Regards,
                  Eric.
                </p>
              </li>
            </ul>
          </section>

          <div className="ampstart-card max-width-1 pt2">
            <form method="GET" action="/" target="_top" className="p0 m0 px3 mb4">
              <fieldset className="border-none p0 m0">
                <h2 className="block mb4">Get our newsletter</h2>

                <div className="ampstart-input inline-block relative m0 p0 mb3">
                  <input
                    type="email"
                    value=""
                    name="emailid"
                    id="emailid"
                    className="block border-none p0 m0"
                    placeholder="Email"
                  />
                  <label
                    for="emailid"
                    className="absolute top-0 right-0 bottom-0 left-0"
                    aria-hidden="true"
                    >Email</label
                  >
                </div>

                <input
                  type="submit"
                  name="submit"
                  value="SUBMIT"
                  id="submit"
                  className="ampstart-btn mb3 ampstart-btn-secondary"
                />
              </fieldset>
            </form>
          </div>

          <section className="recipe-popular-articles">
            <h2 className="mb4">Popular Articles</h2>

            <amp-img
              src="../img/blog/popular1.jpg"
              width="1280"
              height="853"
              layout="responsive"
              alt="The sandy beach walk"
              className="mb1"
            ></amp-img>
            <h3 className="mb4">Beach Getaway</h3>

            <amp-img
              src="../img/blog/popular2.png"
              width="649"
              height="497"
              layout="responsive"
              alt="Dinner on a plate"
              className="mb1"
            ></amp-img>
            <h3 className="mb4">Dinner party tips</h3>
          </section>

          <section>
            <h2 className="mb4">Want</h2>
            <amp-carousel
              type="carousel"
              layout="fixed-height"
              height="285"
              controls=""
              className="mb4"
            >
              <amp-img
                src="../img/blog/want1.png"
                width="205"
                height="285"
                alt="Want1"
              ></amp-img>
              <amp-img
                src="../img/blog/want2.png"
                width="205"
                height="285"
                alt="Want2"
              ></amp-img>
              <amp-img
                src="../img/blog/want3.png"
                width="205"
                height="285"
                alt="Want3"
              ></amp-img>
              <amp-img
                src="../img/blog/want1.png"
                width="205"
                height="285"
                alt="Want1"
              ></amp-img>
              <amp-img
                src="../img/blog/want2.png"
                width="205"
                height="285"
                alt="Want2"
              ></amp-img>
              <amp-img
                src="../img/blog/want3.png"
                width="205"
                height="285"
                alt="Want3"
              ></amp-img>
            </amp-carousel>
          </section>

          <section>
            <h2 className="mb4">Meet Lola</h2>
            <amp-img
              src="../img/blog/meetloloa.jpg"
              width="1280"
              height="853"
              layout="responsive"
              className="mb3"
              alt="Lola hanging out in the beach"
            ></amp-img>
            <p className="mb4">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue,
              elit erat euismod orci, ac placerat dolor lectus quis orci.
              Phasellus consectetuer vestibulum elit. Aenean tellus metus,
              bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla
              pede sit amet augue. In turpis. Pellentesque posuere. Praesent
              turpis.
            </p>
          </section>

          <amp-instagram
            data-shortcode="BRJd8UIjTXN"
            width="379"
            height="379"
            layout="responsive"
            className="ampstart-card p0 mb4 px3"
          ></amp-instagram>

          <ul
            className="ampstart-social-follow list-reset flex justify-around items-center flex-wrap m0 mb4"
          >
            <li>
              <a
                href="#"
                target="_blank"
                className="inline-block p1"
                aria-label="Link to AMP HTML Twitter"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22.2"
                  viewBox="0 0 53 49"
                >
                  <title>Twitter</title>
                  <path
                    d="M45 6.9c-1.6 1-3.3 1.6-5.2 2-1.5-1.6-3.6-2.6-5.9-2.6-4.5 0-8.2 3.7-8.2 8.3 0 .6.1 1.3.2 1.9-6.8-.4-12.8-3.7-16.8-8.7C8.4 9 8 10.5 8 12c0 2.8 1.4 5.4 3.6 6.9-1.3-.1-2.6-.5-3.7-1.1v.1c0 4 2.8 7.4 6.6 8.1-.7.2-1.5.3-2.2.3-.5 0-1 0-1.5-.1 1 3.3 4 5.7 7.6 5.7-2.8 2.2-6.3 3.6-10.2 3.6-.6 0-1.3-.1-1.9-.1 3.6 2.3 7.9 3.7 12.5 3.7 15.1 0 23.3-12.6 23.3-23.6 0-.3 0-.7-.1-1 1.6-1.2 3-2.7 4.1-4.3-1.4.6-3 1.1-4.7 1.3 1.7-1 3-2.7 3.6-4.6"
                    className="ampstart-icon ampstart-icon-twitter"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="inline-block p1"
                aria-label="Link to AMP HTML Facebook"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="23.6"
                  viewBox="0 0 56 55"
                >
                  <title>Facebook</title>
                  <path
                    d="M47.5 43c0 1.2-.9 2.1-2.1 2.1h-10V30h5.1l.8-5.9h-5.9v-3.7c0-1.7.5-2.9 3-2.9h3.1v-5.3c-.6 0-2.4-.2-4.6-.2-4.5 0-7.5 2.7-7.5 7.8v4.3h-5.1V30h5.1v15.1H10.7c-1.2 0-2.2-.9-2.2-2.1V8.3c0-1.2 1-2.2 2.2-2.2h34.7c1.2 0 2.1 1 2.1 2.2V43"
                    className="ampstart-icon ampstart-icon-fb"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="inline-block p1"
                aria-label="Link to AMP HTML Instagram"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 54 54"
                >
                  <title>instagram</title>
                  <path
                    d="M27.2 6.1c-5.1 0-5.8 0-7.8.1s-3.4.4-4.6.9c-1.2.5-2.3 1.1-3.3 2.2-1.1 1-1.7 2.1-2.2 3.3-.5 1.2-.8 2.6-.9 4.6-.1 2-.1 2.7-.1 7.8s0 5.8.1 7.8.4 3.4.9 4.6c.5 1.2 1.1 2.3 2.2 3.3 1 1.1 2.1 1.7 3.3 2.2 1.2.5 2.6.8 4.6.9 2 .1 2.7.1 7.8.1s5.8 0 7.8-.1 3.4-.4 4.6-.9c1.2-.5 2.3-1.1 3.3-2.2 1.1-1 1.7-2.1 2.2-3.3.5-1.2.8-2.6.9-4.6.1-2 .1-2.7.1-7.8s0-5.8-.1-7.8-.4-3.4-.9-4.6c-.5-1.2-1.1-2.3-2.2-3.3-1-1.1-2.1-1.7-3.3-2.2-1.2-.5-2.6-.8-4.6-.9-2-.1-2.7-.1-7.8-.1zm0 3.4c5 0 5.6 0 7.6.1 1.9.1 2.9.4 3.5.7.9.3 1.6.7 2.2 1.4.7.6 1.1 1.3 1.4 2.2.3.6.6 1.6.7 3.5.1 2 .1 2.6.1 7.6s0 5.6-.1 7.6c-.1 1.9-.4 2.9-.7 3.5-.3.9-.7 1.6-1.4 2.2-.7.7-1.3 1.1-2.2 1.4-.6.3-1.7.6-3.5.7-2 .1-2.6.1-7.6.1-5.1 0-5.7 0-7.7-.1-1.8-.1-2.9-.4-3.5-.7-.9-.3-1.5-.7-2.2-1.4-.7-.7-1.1-1.3-1.4-2.2-.3-.6-.6-1.7-.7-3.5 0-2-.1-2.6-.1-7.6 0-5.1.1-5.7.1-7.7.1-1.8.4-2.8.7-3.5.3-.9.7-1.5 1.4-2.2.7-.6 1.3-1.1 2.2-1.4.6-.3 1.6-.6 3.5-.7h7.7zm0 5.8c-5.4 0-9.7 4.3-9.7 9.7 0 5.4 4.3 9.7 9.7 9.7 5.4 0 9.7-4.3 9.7-9.7 0-5.4-4.3-9.7-9.7-9.7zm0 16c-3.5 0-6.3-2.8-6.3-6.3s2.8-6.3 6.3-6.3 6.3 2.8 6.3 6.3-2.8 6.3-6.3 6.3zm12.4-16.4c0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1.1 2.3 2.3z"
                    className="ampstart-icon ampstart-icon-instagram"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="inline-block p1"
                aria-label="Link to AMP HTML pin trest"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="28.5"
                  viewBox="0 0 43 51"
                >
                  <title>pinterest</title>
                  <path
                    d="M8.134 18.748c0-1.6.2-3 .8-4.4.5-1.4 1.2-2.6 2.2-3.6.9-1 2-1.9 3.2-2.6 1.2-.8 2.5-1.3 3.9-1.7 1.5-.4 2.9-.5 4.4-.5 2.2 0 4.3.4 6.2 1.4 1.9.9 3.5 2.3 4.7 4.1 1.2 1.9 1.8 3.9 1.8 6.2 0 1.4-.1 2.7-.4 4-.2 1.3-.7 2.6-1.2 3.8-.6 1.2-1.3 2.3-2.2 3.2-.8.9-1.8 1.7-3.1 2.2-1.2.6-2.5.9-4 .9-1 0-1.9-.3-2.9-.7-.9-.5-1.6-1.1-2-1.9-.1.5-.3 1.4-.6 2.4-.3 1.1-.4 1.7-.5 2-.1.3-.2.9-.4 1.6-.3.7-.4 1.2-.6 1.5-.1.3-.4.7-.7 1.3-.3.6-.6 1.2-1 1.7-.3.5-.7 1.1-1.3 1.8l-.3.1-.2-.2c-.2-2.2-.3-3.6-.3-4 0-1.3.2-2.8.5-4.4.3-1.7.8-3.7 1.4-6.2.6-2.5 1-3.9 1.1-4.4-.5-.9-.7-2.1-.7-3.6 0-1.2.4-2.3 1.1-3.3.8-1.1 1.7-1.6 2.8-1.6.9 0 1.6.3 2.1.9.4.6.7 1.3.7 2.2 0 .9-.3 2.3-1 4.1-.6 1.8-.9 3.1-.9 4 0 .9.3 1.6 1 2.2.6.6 1.4.9 2.3.9.8 0 1.5-.2 2.2-.5.6-.4 1.2-.9 1.6-1.5.5-.6.9-1.3 1.2-2 .4-.8.6-1.5.8-2.4.2-.8.4-1.6.5-2.4.1-.7.1-1.4.1-2.1 0-2.5-.8-4.4-2.3-5.8-1.6-1.4-3.6-2.1-6.1-2.1-2.8 0-5.2 1-7.1 2.8-1.9 1.9-2.9 4.2-2.9 7.1 0 .6.1 1.2.3 1.8.2.6.4 1.1.6 1.4.2.3.4.7.5 1 .2.3.3.5.3.6 0 .4-.1.9-.3 1.6-.2.6-.5 1-.8 1 0 0-.1-.1-.4-.1-.7-.2-1.3-.6-1.9-1.2-.5-.6-1-1.3-1.3-2-.3-.8-.5-1.6-.7-2.4-.2-.7-.2-1.5-.2-2.2z"
                    className="ampstart-icon ampstart-icon-pinterest"
                  ></path></svg
              ></a>
            </li>
          </ul>

          <section>
            <h2 className="mb3">Categories</h2>
            <ul className="list-reset p0 m0 mb4">
              <li className="mb2">
                <a href="#" className="text-decoration-none h3">Fashion</a>
              </li>
              <li className="mb2">
                <a href="#" className="text-decoration-none h3">Travel</a>
              </li>
              <li className="mb2">
                <a href="#" className="text-decoration-none h3">Decor</a>
              </li>
              <li className="mb2">
                <a href="#" className="text-decoration-none h3">Beauty</a>
              </li>
            </ul>
          </section>
        </section>
      </article>
    </main>

    <footer className="ampstart-footer flex flex-column items-center px3">
      <nav className="ampstart-footer-nav">
        <ul className="list-reset flex flex-wrap mb3">
          <li className="px1">
            <a className="text-decoration-none ampstart-label" href="#">About</a>
          </li>
          <li className="px1">
            <a className="text-decoration-none ampstart-label" href="#">Contact</a>
          </li>
          <li className="px1">
            <a className="text-decoration-none ampstart-label" href="#">Terms</a>
          </li>
        </ul>
      </nav>
      <small> © Your Company, 2016 </small>
    </footer>
            </Fragment>
            
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    
    const { req, query, res, asPath, pathname } = context;
    if (req) {
      var host = req.headers.referer // will give you localhost:3000
    }
    // Pass data to the page via props

    return { props: {location : host || ""} }
  }