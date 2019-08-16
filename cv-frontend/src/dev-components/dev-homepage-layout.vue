<template>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#content">Zum Inhalt springen</a>

        <header id="masthead" class="site-header">
            <div class="site-branding-container">
                <div>
                    <dev-header></dev-header>
                </div>
                <!-- .site-branding -->
            </div>
            <!-- .layout-wrap -->
        </header>
        <!-- #masthead -->

        <div id="content" class="site-content">
            <section id="primary" class="content-area">
                <main id="main" class="site-main">
                    <!-- #post-${ID} -->
                </main>
                <!-- .site-main -->
            </section>
            <!-- .content-area -->
        </div>
        <!-- #content -->

        <footer id="colophon" class="site-footer">
            <aside class="widget-area" role="complementary" aria-label="Footer">
                <div class="widget-column footer-widget-1">
                    <section id="search-4" class="widget widget_search">
                        <form
                            role="search"
                            method="get"
                            class="search-form"
                            action="http://0.0.0.0:8000/"
                        >
                            <label>
                                <span class="screen-reader-text">Suche nach:</span>
                                <input
                                    type="search"
                                    class="search-field"
                                    placeholder="Suche&#160;&hellip;"
                                    value=""
                                    name="s"
                                />
                            </label>
                            <input type="submit" class="search-submit" value="Suche" />
                        </form>
                    </section>
                </div>
            </aside>
            <!-- .widget-area -->

            <div class="site-info">
                <a class="site-name" href="http://0.0.0.0:8000/" rel="home"
                    >CVJM Hagekirchstift e.V.</a
                >,
                <a href="https://de.wordpress.org/" class="imprint">
                    Stolz präsentiert von WordPress.
                </a>
            </div>
            <!-- .site-info -->
        </footer>
        <!-- #colophon -->
    </div>
    <!-- #page -->
</template>
