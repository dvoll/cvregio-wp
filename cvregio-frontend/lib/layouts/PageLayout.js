import React from 'react';

const PageLayout = ({ header, content }) => {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            {
                id: 'page',
                className: 'site',
            },
            React.createElement(
                'a',
                {
                    className: 'skip-link screen-reader-text',
                    href: '#content',
                },
                'Zum Inhalt springen'
            ),
            React.createElement(
                'header',
                {
                    id: 'masthead',
                    className: 'site-header', // data-classname="{ 'featured-image': featuredImage }"
                },
                React.createElement(
                    'div',
                    {
                        className: 'site-branding-container',
                    },
                    React.createElement('div', null, header)
                )
            ),
            React.createElement(
                'div',
                {
                    id: 'content',
                    className: 'site-content',
                },
                React.createElement(
                    'section',
                    {
                        id: 'primary',
                        className: 'content-area',
                    },
                    React.createElement(
                        'main',
                        {
                            id: 'main',
                            className: 'site-main',
                        },
                        content
                    )
                )
            ),
            React.createElement(
                'footer',
                {
                    id: 'colophon',
                    className: 'site-footer',
                },
                React.createElement(
                    'aside',
                    {
                        className: 'widget-area',
                        role: 'complementary',
                        'aria-label': 'Footer',
                    },
                    React.createElement(
                        'div',
                        {
                            className: 'widget-column footer-widget-1',
                        },
                        React.createElement(
                            'section',
                            {
                                id: 'search-4',
                                className: 'widget widget_search',
                            },
                            React.createElement(
                                'form',
                                {
                                    role: 'search',
                                    method: 'get',
                                    className: 'search-form',
                                    action: 'http://0.0.0.0:8000/',
                                },
                                React.createElement(
                                    'label',
                                    null,
                                    React.createElement(
                                        'span',
                                        {
                                            className: 'screen-reader-text',
                                        },
                                        'Suche nach:'
                                    ),
                                    React.createElement('input', {
                                        type: 'search',
                                        className: 'search-field',
                                        placeholder: 'Suche\xA0\u2026',
                                        value: '',
                                        name: 's',
                                    })
                                ),
                                React.createElement('input', {
                                    type: 'submit',
                                    className: 'search-submit',
                                    value: 'Suche',
                                })
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    {
                        className: 'site-info',
                    },
                    React.createElement(
                        'a',
                        {
                            className: 'site-name',
                            href: 'http://0.0.0.0:8000/',
                            rel: 'home',
                        },
                        'CVJM Hagekirchstift e.V.'
                    ),
                    ',',
                    React.createElement(
                        'a',
                        {
                            href: 'https://de.wordpress.org/',
                            className: 'imprint',
                        },
                        'Stolz pr\xE4sentiert von WordPress.'
                    )
                )
            )
        )
    );
};

export default PageLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXlvdXRzL1BhZ2VMYXlvdXQudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUGFnZUxheW91dCIsImhlYWRlciIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBT0EsTUFBTUMsVUFBcUMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE1BQUY7QUFBVUMsRUFBQUE7QUFBVixDQUFELEtBQXlCO0FBQ25FLFNBQ0ksb0JBQUMsS0FBRCxDQUFPLFFBQVAsUUFDSTtBQUFLLElBQUEsRUFBRSxFQUFDLE1BQVI7QUFBZSxJQUFBLFNBQVMsRUFBQztBQUF6QixLQUNJO0FBQUcsSUFBQSxTQUFTLEVBQUMsOEJBQWI7QUFBNEMsSUFBQSxJQUFJLEVBQUM7QUFBakQsMkJBREosRUFLSTtBQUNJLElBQUEsRUFBRSxFQUFDLFVBRFA7QUFFSSxJQUFBLFNBQVMsRUFBQyxhQUZkLENBR0k7O0FBSEosS0FLSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDSSxpQ0FBTUQsTUFBTixDQURKLENBTEosQ0FMSixFQWVJO0FBQUssSUFBQSxFQUFFLEVBQUMsU0FBUjtBQUFrQixJQUFBLFNBQVMsRUFBQztBQUE1QixLQUNJO0FBQVMsSUFBQSxFQUFFLEVBQUMsU0FBWjtBQUFzQixJQUFBLFNBQVMsRUFBQztBQUFoQyxLQUNJO0FBQU0sSUFBQSxFQUFFLEVBQUMsTUFBVDtBQUFnQixJQUFBLFNBQVMsRUFBQztBQUExQixLQUNLQyxPQURMLENBREosQ0FESixDQWZKLEVBdUJJO0FBQVEsSUFBQSxFQUFFLEVBQUMsVUFBWDtBQUFzQixJQUFBLFNBQVMsRUFBQztBQUFoQyxLQUNJO0FBQ0ksSUFBQSxTQUFTLEVBQUMsYUFEZDtBQUVJLElBQUEsSUFBSSxFQUFDLGVBRlQ7QUFHSSxrQkFBVztBQUhmLEtBS0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0k7QUFDSSxJQUFBLEVBQUUsRUFBQyxVQURQO0FBRUksSUFBQSxTQUFTLEVBQUM7QUFGZCxLQUlJO0FBQ0ksSUFBQSxJQUFJLEVBQUMsUUFEVDtBQUVJLElBQUEsTUFBTSxFQUFDLEtBRlg7QUFHSSxJQUFBLFNBQVMsRUFBQyxhQUhkO0FBSUksSUFBQSxNQUFNLEVBQUM7QUFKWCxLQU1JLG1DQUNJO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsbUJBREosRUFJSTtBQUNJLElBQUEsSUFBSSxFQUFDLFFBRFQ7QUFFSSxJQUFBLFNBQVMsRUFBQyxjQUZkO0FBR0ksSUFBQSxXQUFXLEVBQUMsaUJBSGhCO0FBSUksSUFBQSxLQUFLLEVBQUMsRUFKVjtBQUtJLElBQUEsSUFBSSxFQUFDO0FBTFQsSUFKSixDQU5KLEVBa0JJO0FBQ0ksSUFBQSxJQUFJLEVBQUMsUUFEVDtBQUVJLElBQUEsU0FBUyxFQUFDLGVBRmQ7QUFHSSxJQUFBLEtBQUssRUFBQztBQUhWLElBbEJKLENBSkosQ0FESixDQUxKLENBREosRUF1Q0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0k7QUFDSSxJQUFBLFNBQVMsRUFBQyxXQURkO0FBRUksSUFBQSxJQUFJLEVBQUMsc0JBRlQ7QUFHSSxJQUFBLEdBQUcsRUFBQztBQUhSLGdDQURKLE9BU0k7QUFBRyxJQUFBLElBQUksRUFBQywyQkFBUjtBQUFvQyxJQUFBLFNBQVMsRUFBQztBQUE5QywyQ0FUSixDQXZDSixDQXZCSixDQURKLENBREo7QUFpRkgsQ0FsRkQ7O0FBb0ZBLGVBQWVGLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VMYXlvdXRQcm9wcyB7XG4gICAgaGVhZGVyOiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgY29udGVudDogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBQYWdlTGF5b3V0OiBSZWFjdC5GQzxQYWdlTGF5b3V0UHJvcHM+ID0gKHsgaGVhZGVyLCBjb250ZW50IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFnZVwiIGNsYXNzTmFtZT1cInNpdGVcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJza2lwLWxpbmsgc2NyZWVuLXJlYWRlci10ZXh0XCIgaHJlZj1cIiNjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIFp1bSBJbmhhbHQgc3ByaW5nZW5cbiAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICA8aGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibWFzdGhlYWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgIC8vIGRhdGEtY2xhc3NOYW1lPVwieyAnZmVhdHVyZWQtaW1hZ2UnOiBmZWF0dXJlZEltYWdlIH1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWJyYW5kaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aGVhZGVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwic2l0ZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cImNvbnRlbnQtYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4gaWQ9XCJtYWluXCIgY2xhc3NOYW1lPVwic2l0ZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxmb290ZXIgaWQ9XCJjb2xvcGhvblwiIGNsYXNzTmFtZT1cInNpdGUtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhc2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkZ2V0LWFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNvbXBsZW1lbnRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkZvb3RlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbHVtbiBmb290ZXItd2lkZ2V0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaC00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkZ2V0IHdpZGdldF9zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kPVwiZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImh0dHA6Ly8wLjAuMC4wOjgwMDAvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNjcmVlbi1yZWFkZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWNoZSBuYWNoOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3VjaGUmIzE2MDsmaGVsbGlwO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLXN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTdWNoZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovLzAuMC4wLjA6ODAwMC9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cImhvbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENWSk0gSGFnZWtpcmNoc3RpZnQgZS5WLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZGUud29yZHByZXNzLm9yZy9cIiBjbGFzc05hbWU9XCJpbXByaW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvbHogcHLDpHNlbnRpZXJ0IHZvbiBXb3JkUHJlc3MuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VMYXlvdXQ7XG4iXX0=
