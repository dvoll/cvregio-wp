<template>
    <div>
        <nav id="site-navigation" class="main-navigation" aria-label="Oberes Menü">
            <div class="menu-primary-container">
                <ul id="menu-primary" class="main-menu">
                    <li
                        id="menu-item-324"
                        class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-324"
                    >
                        <a href="http://0.0.0.0:8000" aria-current="page">Startseite</a>
                    </li>
                    <li
                        id="menu-item-325"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-325"
                    >
                        <a href="http://0.0.0.0:8000/?page_id=225">Block Test</a>
                    </li>
                    <li
                        id="menu-item-328"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-328"
                    >
                        <a
                            href="http://0.0.0.0:8000/?page_id=5"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >Angebote</a
                        ><button class="submenu-expand" tabindex="-1">
                            <svg
                                class="svg-icon"
                                width="24"
                                height="24"
                                aria-hidden="true"
                                role="img"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                                ></path>
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                            </svg>
                        </button>
                        <ul class="sub-menu">
                            <li
                                id="menu-item-327"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-327"
                            >
                                <a
                                    href="http://0.0.0.0:8000/?page_id=7"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    >Mädchenjungschar</a
                                ><button class="submenu-expand" tabindex="-1">
                                    <svg
                                        class="svg-icon"
                                        width="24"
                                        height="24"
                                        aria-hidden="true"
                                        role="img"
                                        focusable="false"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                                        ></path>
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    </svg>
                                </button>
                                <ul class="sub-menu">
                                    <li
                                        id="menu-item-329"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-329"
                                    >
                                        <a href="http://0.0.0.0:8000/?page_id=2">Beispiel-Seite</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li
                        id="menu-item-326"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-326"
                    >
                        <a href="http://0.0.0.0:8000/?page_id=78">Landingpage</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cv-nav {
    color: #000;
}

.main-menu {
    list-style: none;
    display: flex;
    flex-direction: row;

    .menu-item {
        padding: 5px 10px;
    }

    .menu-item a {
        text-decoration: none;
        color: rgb(50, 50, 50);
        font-family: 'Open Sans';
        font-size: 14px;
        text-transform: uppercase;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: rgba(0, 0, 0, 0);
            // border-bottom: 1px solid rgba(0, 0, 0, 0);
        }
    }

    .menu-item a:hover:before {
        background: rgb(50, 50, 50);
        height: 1px;
    }

    .menu-item.current-menu-item a {
        font-weight: 600;
        color: rgb(192, 32, 32);

        &:before {
            background: rgb(192, 32, 32);
        }
    }
}

.submenu-expand {
    display: none;
}

.sub-menu {
    display: none;
}
</style>
