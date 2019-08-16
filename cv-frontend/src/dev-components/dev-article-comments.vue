<template>
    <div id="comments" class="comments-area">
        <div class="comments-title-wrap">
            <h2 class="comments-title">
                Beteilige dich an der Unterhaltung
            </h2>
            <!-- .comments-title -->

            <div class="discussion-meta">
                <ol class="discussion-avatar-list">
                    <li>
                        <div class="comment-user-avatar comment-author vcard">
                            <img
                                alt=""
                                src="http://1.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=60&#038;d=mm&#038;r=g"
                                srcset="
                                    http://1.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=120&#038;d=mm&#038;r=g 2x
                                "
                                class="avatar avatar-60 photo"
                                height="60"
                                width="60"
                            />
                        </div>
                    </li>
                </ol>
                <!-- .discussion-avatar-list -->
                <p class="discussion-meta-info">
                    <svg
                        class="svg-icon"
                        width="24"
                        height="24"
                        aria-hidden="true"
                        role="img"
                        focusable="false"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <path
                            d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"
                        ></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                    <span>1 Kommentar</span>
                </p>
            </div>
            <!-- .discussion-meta -->
        </div>
        <!-- .comments-title-flex -->
        <ol class="comment-list">
            <li id="comment-1" class="comment even thread-even depth-1">
                <article id="div-comment-1" class="comment-body">
                    <footer class="comment-meta">
                        <div class="comment-author vcard">
                            <a href="https://wordpress.org/" rel="external nofollow" class="url"
                                ><img
                                    alt=""
                                    src="http://1.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=60&#038;d=mm&#038;r=g"
                                    srcset="
                                        http://1.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=120&#038;d=mm&#038;r=g 2x
                                    "
                                    class="avatar avatar-60 photo"
                                    height="60"
                                    width="60"
                                /><b class="fn"
                                    ><a
                                        href="https://wordpress.org/"
                                        rel="external nofollow"
                                        class="url"
                                        >Ein WordPress-Kommentator</a
                                    ></b
                                >
                                <span class="screen-reader-text says">sagt:</span></a
                            >
                        </div>
                        <!-- .comment-author -->

                        <div class="comment-metadata">
                            <a href="http://0.0.0.0:8000/?p=1#comment-1">
                                <time
                                    datetime="2019-03-24T13:28:18+02:00"
                                    title="24. März 2019 um 13:28"
                                >
                                    24. März 2019 um 13:28
                                </time>
                            </a>
                            <span class="edit-link-sep">&mdash;</span>
                            <span class="edit-link"
                                ><svg
                                    class="svg-icon"
                                    width="16"
                                    height="16"
                                    aria-hidden="true"
                                    role="img"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                >
                                    <path
                                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                                    ></path>
                                    <path d="M0 0h24v24H0z" fill="none"></path></svg
                                ><a
                                    class="comment-edit-link"
                                    href="http://0.0.0.0:8000/wp-admin/comment.php?action=editcomment&#038;c=1"
                                    >Bearbeiten</a
                                ></span
                            >
                        </div>
                        <!-- .comment-metadata -->
                    </footer>
                    <!-- .comment-meta -->

                    <div class="comment-content">
                        <p>
                            Hallo, dies ist ein Kommentar.<br />
                            Um mit dem Freischalten, Bearbeiten und Löschen von Kommentaren zu
                            beginnen, besuche bitte die Kommentare-Ansicht im Dashboard.<br />
                            Die Avatare der Kommentatoren kommen von
                            <a href="https://gravatar.com">Gravatar</a>.
                        </p>
                    </div>
                    <!-- .comment-content -->
                </article>
                <!-- .comment-body -->

                <div class="comment-reply">
                    <a
                        rel="nofollow"
                        class="comment-reply-link"
                        href="/?p=1&#038;replytocom=1#respond"
                        data-commentid="1"
                        data-postid="1"
                        data-belowelement="div-comment-1"
                        data-respondelement="respond"
                        aria-label="Antworte auf Ein WordPress-Kommentator"
                        >Antworten</a
                    >
                </div>
            </li>
            <!-- #comment-## -->
        </ol>
        <!-- .comment-list -->
        <div class="comment-form-flex">
            <span class="screen-reader-text">Schreib einen Kommentar</span>
            <div id="respond" class="comment-respond">
                <h3 id="reply-title" class="comment-reply-title">
                    <small
                        ><a
                            rel="nofollow"
                            id="cancel-comment-reply-link"
                            href="/?p=1#respond"
                            style="display: none;"
                            >Antworten abbrechen</a
                        ></small
                    >
                </h3>
                <form
                    action="http://0.0.0.0:8000/wp-comments-post.php"
                    method="post"
                    id="commentform"
                    class="comment-form"
                    novalidate
                >
                    <p class="comment-form-comment">
                        <label for="comment">Kommentar</label>
                        <textarea
                            id="comment"
                            name="comment"
                            cols="45"
                            rows="5"
                            maxlength="65525"
                            required="required"
                        ></textarea>
                    </p>
                    <p class="form-submit">
                        <input
                            name="submit"
                            type="submit"
                            id="submit"
                            class="submit"
                            value="Kommentar abschicken"
                        />
                        <input
                            type="hidden"
                            name="comment_post_ID"
                            value="1"
                            id="comment_post_ID"
                        />
                        <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                    </p>
                    <input
                        type="hidden"
                        id="_wp_unfiltered_html_comment_disabled"
                        name="_wp_unfiltered_html_comment_disabled"
                        value="0db768157c"
                    />
                </form>
            </div>
            <!-- #respond -->
            <h2 class="comments-title" aria-hidden="true">
                Schreib einen Kommentar
            </h2>
        </div>
    </div>
</template>
