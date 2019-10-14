<template>
    <article id="post-2" class="post-2 page type-page status-publish hentry entry">
        <div class="featured-image">
            <slot name="featuredImage" />
        </div>

        <div class="entry-content entry-content--with-sidebar">
            <slot name="header">
                <header class="entry-header">
                    <h1 class="entry-title">Beispiel-Seite</h1>
                </header>
            </slot>
            <p>
                Dies ist eine Beispiel-Seite. Sie unterscheidet sich von Beiträgen, da sie stets an
                derselben Stelle bleibt und (bei den meisten Themes) in der Website-Navigation
                angezeigt wird. Die meisten starten mit einem Impressum, der Datenschutzerklärung
                oder einer &#8222;Über uns&#8220;-Seite, um sich möglichen Besucher der Website
                vorzustellen. Dort könnte zum Beispiel stehen:
            </p>

            <blockquote class="wp-block-quote">
                <p>
                    Hallo! Ich bin tagsüber im Kurierdienst tätig, nachts widme ich mich der
                    Schauspielkunst, und das ist meine Website. Ich lebe in einer Großstadt, habe
                    einen tollen Hund und ich mag Getränke mit Schirmchen (aber nicht ohne Schirm im
                    Regen zu stehen).
                </p>
            </blockquote>

            <p>&#8230;oder so etwas wie das hier:</p>

            <blockquote class="wp-block-quote">
                <p>
                    Das Unternehmen XYZ wurde 1971 gegründet und versorgt die Öffentlichkeit seither
                    mit qualitativ hochwertigen Produkten. An seinem Standort in einer kleinen
                    Großstadt beschäftigt der Betrieb über 2.000 Menschen und unterstützt die
                    Stadtbewohner in vielfacher Hinsicht.
                </p>
            </blockquote>

            <p>
                Als neuer WordPress-Benutzer solltest du dein
                <a href="http://0.0.0.0:8000/wp-admin/">Dashboard</a> aufrufen, um diese Seite zu
                löschen und neue Seiten für deinen Inhalt zu erstellen. Viel Spaß!
            </p>

            <cv-sidebar>
                <slot name="sidebar" />
            </cv-sidebar>

            <footer class="entry-footer">
                <span class="edit-link"
                    ><a
                        class="post-edit-link"
                        href="http://0.0.0.0:8000/wp-admin/post.php?post=2&#038;action=edit"
                        ><span class="screen-reader-text">Beispiel-Seite</span> bearbeiten</a
                    ></span
                >
            </footer>
        </div>
        <!-- .entry-content -->

        <!-- .entry-footer -->
    </article>
</template>
<script>
import CvSidebar from '../static-components/cv-sidebar.vue';

export default {
    components: {
        CvSidebar,
    },
};
</script>
