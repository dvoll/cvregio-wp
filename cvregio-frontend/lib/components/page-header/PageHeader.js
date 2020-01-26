function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuPage from './MenuPage';
import Icon, { IconTypes } from '../base/Icon';
import Header from './Header';
import PageSubmenu from './PageSubmenu';
import Navigation from './Navigation';
import './PageHeader.scss';
import Hamburger from './Hamburger'; // import './MenuPage.scss';

class PageHeader extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "smallHeaderHeight", 50);

    _defineProperty(this, "state", {
      smallHeader: false,
      activeItem: undefined,
      mobileOpen: false,
      isMobile: false
    });
  }

  componentDidMount() {
    this.addScrollEventListener();
    this.addResizeEventListener();
    this.handleResize(window.innerWidth);
  }

  submenuIsOpen() {
    var _activeItem$children;

    const {
      activeItem
    } = this.state;
    const length = activeItem === null || activeItem === void 0 ? void 0 : (_activeItem$children = activeItem.children) === null || _activeItem$children === void 0 ? void 0 : _activeItem$children.length;
    return (length !== null && length !== void 0 ? length : 0) > 0;
  }

  shouldShowSmallHeader() {
    const {
      smallHeader,
      isMobile
    } = this.state;
    return smallHeader || isMobile;
  }

  disableBodyScroll(noscroll) {
    if (noscroll) {
      document.getElementsByTagName('body')[0].classList.add('no-scroll');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('no-scroll');
    }
  }

  addResizeEventListener() {
    let lastKnownResizeWidth = 0;
    let ticking = false;
    window.addEventListener('resize', () => {
      lastKnownResizeWidth = window.innerWidth;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.handleResize(lastKnownResizeWidth);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  addScrollEventListener() {
    let lastKnownScrollPosition = 0;
    let ticking = false;
    window.addEventListener('scroll', () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.changeHeader(lastKnownScrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  changeHeader(position) {
    const {
      smallHeader
    } = this.state;

    if (!smallHeader && position > this.smallHeaderHeight) {
      this.setState({
        smallHeader: true
      });
    }

    if (smallHeader && position < this.smallHeaderHeight) {
      this.setState({
        smallHeader: false
      });
    }
  }

  handleResize(width) {
    const {
      mobileOpen
    } = this.state;
    let shouldMobile = width < 1200;

    if (width < 1200) {
      shouldMobile = true;
      this.disableBodyScroll(mobileOpen);
    } else {
      shouldMobile = false;
      this.setState({
        mobileOpen: false
      });
      this.disableBodyScroll(false);
    }

    this.setState({
      isMobile: shouldMobile
    });
  }

  toggleMenu(menuItem) {
    const {
      activeItem
    } = this.state;

    if (activeItem && activeItem.title === menuItem.title) {
      this.setState({
        activeItem: undefined
      });
      return;
    }

    this.setState({
      activeItem: menuItem
    });
  }

  toggleMobileMenu() {
    const {
      mobileOpen
    } = this.state;

    if (mobileOpen && this.submenuIsOpen()) {
      this.closeSubmenu();
    }

    this.setState({
      mobileOpen: !mobileOpen
    });
    this.disableBodyScroll(mobileOpen);
  }

  closeSubmenu() {
    console.log('close submenu');
    this.setState({
      activeItem: undefined
    });
  }

  render() {
    const {
      smallHeader,
      activeItem,
      mobileOpen,
      isMobile
    } = this.state;
    const {
      menuItems,
      title,
      subtitle,
      logoUrl
    } = this.props;
    let classNames = 'cv-header';

    if (this.shouldShowSmallHeader()) {
      classNames += ' cv-header--small';
    }

    if (activeItem && (!isMobile || mobileOpen)) {
      classNames += ' cv-header--submenu-open';
    }

    if (isMobile) {
      classNames += ' cv-header--mobile';
    }

    if (mobileOpen) {
      classNames += ' cv-header--mobile-open';
    }

    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: `header-placeholder ${isMobile ? 'header-placeholder--mobile' : ''}`
    }), React.createElement(CSSTransition, {
      in: activeItem && !isMobile // in
      ,
      timeout: 200,
      classNames: "fade",
      unmountOnExit: true // onEnter={() => setShowButton(false)}
      // onExited={() => setShowButton(true)}

    }, React.createElement("div", {
      className: "overlay",
      "aria-hidden": "true",
      onClick: () => this.closeSubmenu(),
      style: {
        position: 'fixed',
        zIndex: 95,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.2)'
      } // style="position: fixed; z-index: 95; width: 100vw; height: 100vh; background: rgba(0,0,0,0.2);"

    })), React.createElement("div", {
      className: classNames
    }, React.createElement(CSSTransition, {
      in: isMobile && mobileOpen,
      timeout: 200,
      classNames: "fade-from-top",
      unmountOnExit: true
    }, React.createElement(MenuPage, {
      className: "cv-header__mobile-menu",
      menuItems: menuItems,
      onItemSelect: item => this.toggleMenu(item),
      title: "Men\xFC"
    })), React.createElement(CSSTransition, {
      in: isMobile && mobileOpen && this.submenuIsOpen(),
      timeout: 2000,
      classNames: "fade-from-left",
      unmountOnExit: true
    }, React.createElement(MenuPage, {
      className: "cv-header__mobile-submenu",
      "v-if": "isMobile && mobileOpen && this.submenuIsOpen()",
      menuItems: activeItem === null || activeItem === void 0 ? void 0 : activeItem.children,
      allowChildren: false,
      title: activeItem ? activeItem.title : '',
      backButtonTitle: "Zur\xFCck",
      close: () => {
        this.closeSubmenu();
      }
    }, React.createElement("template", {
      slot: "info"
    }, React.createElement("p", {
      className: "description-block__text"
    }), React.createElement("a", {
      href: activeItem === null || activeItem === void 0 ? void 0 : activeItem.href,
      className: "button description-block__link"
    }, React.createElement(Icon, {
      icon: IconTypes.ArrowRight
    }), "\xDCbersicht")))), !isMobile && React.createElement(PageSubmenu, {
      className: "cv-header__submenu",
      isList: false,
      menuItem: activeItem
    }), React.createElement(Header, {
      className: "cv-header__page-header",
      title: title,
      subtitle: subtitle,
      small: this.shouldShowSmallHeader(),
      logoUrl: logoUrl,
      mobile: isMobile,
      menuButton: React.createElement(Hamburger, {
        open: mobileOpen,
        onClick: () => this.toggleMobileMenu()
      })
    }, React.createElement(Navigation, {
      menuItems: menuItems,
      toggleMenu: menuItem => this.toggleMenu(menuItem),
      activeItem: activeItem,
      small: smallHeader
    }))));
  }

}

export default PageHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL1BhZ2VIZWFkZXIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ1NTVHJhbnNpdGlvbiIsIk1lbnVQYWdlIiwiSWNvbiIsIkljb25UeXBlcyIsIkhlYWRlciIsIlBhZ2VTdWJtZW51IiwiTmF2aWdhdGlvbiIsIkhhbWJ1cmdlciIsIlBhZ2VIZWFkZXIiLCJzbWFsbEhlYWRlciIsImFjdGl2ZUl0ZW0iLCJ1bmRlZmluZWQiLCJtb2JpbGVPcGVuIiwiaXNNb2JpbGUiLCJjb21wb25lbnREaWRNb3VudCIsImFkZFNjcm9sbEV2ZW50TGlzdGVuZXIiLCJhZGRSZXNpemVFdmVudExpc3RlbmVyIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN1Ym1lbnVJc09wZW4iLCJzdGF0ZSIsImxlbmd0aCIsImNoaWxkcmVuIiwic2hvdWxkU2hvd1NtYWxsSGVhZGVyIiwiZGlzYWJsZUJvZHlTY3JvbGwiLCJub3Njcm9sbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJsYXN0S25vd25SZXNpemVXaWR0aCIsInRpY2tpbmciLCJhZGRFdmVudExpc3RlbmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGFzdEtub3duU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwiY2hhbmdlSGVhZGVyIiwicG9zaXRpb24iLCJzbWFsbEhlYWRlckhlaWdodCIsInNldFN0YXRlIiwid2lkdGgiLCJzaG91bGRNb2JpbGUiLCJ0b2dnbGVNZW51IiwibWVudUl0ZW0iLCJ0aXRsZSIsInRvZ2dsZU1vYmlsZU1lbnUiLCJjbG9zZVN1Ym1lbnUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwibWVudUl0ZW1zIiwic3VidGl0bGUiLCJsb2dvVXJsIiwicHJvcHMiLCJjbGFzc05hbWVzIiwiekluZGV4IiwiaGVpZ2h0Iiwi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SixFQTJDSyxDQUFDakQsUUFBRCxJQUNHLG9CQUFDLFdBQUQ7QUFDSSxNQUFBLFNBQVMsRUFBQyxvQkFEZDtBQUVJLE1BQUEsTUFBTSxFQUFFLEtBRlo7QUFHSSxNQUFBLFFBQVEsRUFBRUg7QUFIZCxNQTVDUixFQWtESSxvQkFBQyxNQUFEO0FBQ0ksTUFBQSxTQUFTLEVBQUMsd0JBRGQ7QUFFSSxNQUFBLEtBQUssRUFBRW9DLEtBRlg7QUFHSSxNQUFBLFFBQVEsRUFBRU8sUUFIZDtBQUlJLE1BQUEsS0FBSyxFQUFFLEtBQUs3QixxQkFBTCxFQUpYO0FBS0ksTUFBQSxPQUFPLEVBQUU4QixPQUxiO0FBTUksTUFBQSxNQUFNLEVBQUV6QyxRQU5aO0FBT0ksTUFBQSxVQUFVLEVBQ04sb0JBQUMsU0FBRDtBQUFXLFFBQUEsSUFBSSxFQUFFRCxVQUFqQjtBQUE2QixRQUFBLE9BQU8sRUFBRSxNQUFNLEtBQUttQyxnQkFBTDtBQUE1QztBQVJSLE9BV0ksb0JBQUMsVUFBRDtBQUNJLE1BQUEsU0FBUyxFQUFFSyxTQURmO0FBRUksTUFBQSxVQUFVLEVBQUVQLFFBQVEsSUFBSSxLQUFLRCxVQUFMLENBQWdCQyxRQUFoQixDQUY1QjtBQUdJLE1BQUEsVUFBVSxFQUFFbkMsVUFIaEI7QUFJSSxNQUFBLEtBQUssRUFBRUQ7QUFKWCxNQVhKLENBbERKLENBM0JKLENBREo7QUFtR0g7O0FBNU9nRTs7QUErT3JFLGVBQWVELFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IE1lbnVQYWdlIGZyb20gJy4vTWVudVBhZ2UnO1xuaW1wb3J0IEljb24sIHsgSWNvblR5cGVzIH0gZnJvbSAnLi4vYmFzZS9JY29uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IFBhZ2VTdWJtZW51IGZyb20gJy4vUGFnZVN1Ym1lbnUnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9QYWdlSGVhZGVyLnNjc3MnO1xuaW1wb3J0IEhhbWJ1cmdlciBmcm9tICcuL0hhbWJ1cmdlcic7XG4vLyBpbXBvcnQgJy4vTWVudVBhZ2Uuc2Nzcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUhlYWRlclByb3BzIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHN1YnRpdGxlOiBzdHJpbmc7XG4gICAgbG9nb1VybDogc3RyaW5nO1xuICAgIG1lbnVJdGVtcz86IE1lbnVJdGVtW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUhlYWRlclN0YXRlIHtcbiAgICBzbWFsbEhlYWRlcjogYm9vbGVhbjtcbiAgICBhY3RpdmVJdGVtPzogTWVudUl0ZW07XG4gICAgbW9iaWxlT3BlbjogYm9vbGVhbjtcbiAgICBpc01vYmlsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbSB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBocmVmOiBzdHJpbmc7XG4gICAgY2hpbGRyZW4/OiBNZW51SXRlbVtdO1xuICAgIGN1cnJlbnQ/OiBib29sZWFuO1xufVxuXG5jbGFzcyBQYWdlSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50PFBhZ2VIZWFkZXJQcm9wcywgUGFnZUhlYWRlclN0YXRlPiB7XG4gICAgc21hbGxIZWFkZXJIZWlnaHQgPSA1MDtcblxuICAgIHJlYWRvbmx5IHN0YXRlOiBQYWdlSGVhZGVyU3RhdGUgPSB7XG4gICAgICAgIHNtYWxsSGVhZGVyOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlSXRlbTogdW5kZWZpbmVkLFxuICAgICAgICBtb2JpbGVPcGVuOiBmYWxzZSxcbiAgICAgICAgaXNNb2JpbGU6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hZGRTY3JvbGxFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkUmVzaXplRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmhhbmRsZVJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgfVxuXG4gICAgc3VibWVudUlzT3BlbigpIHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBhY3RpdmVJdGVtPy5jaGlsZHJlbj8ubGVuZ3RoO1xuICAgICAgICByZXR1cm4gKGxlbmd0aCA/PyAwKSA+IDA7XG4gICAgfVxuXG4gICAgc2hvdWxkU2hvd1NtYWxsSGVhZGVyKCkge1xuICAgICAgICBjb25zdCB7IHNtYWxsSGVhZGVyLCBpc01vYmlsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIHNtYWxsSGVhZGVyIHx8IGlzTW9iaWxlO1xuICAgIH1cblxuICAgIGRpc2FibGVCb2R5U2Nyb2xsKG5vc2Nyb2xsOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChub3Njcm9sbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRSZXNpemVFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBsZXQgbGFzdEtub3duUmVzaXplV2lkdGggPSAwO1xuICAgICAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgbGFzdEtub3duUmVzaXplV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgICAgaWYgKCF0aWNraW5nKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzaXplKGxhc3RLbm93blJlc2l6ZVdpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFNjcm9sbEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgICAgIGxldCBsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgICAgIGxldCB0aWNraW5nID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBsYXN0S25vd25TY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgICAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VIZWFkZXIobGFzdEtub3duU2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlSGVhZGVyKHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgeyBzbWFsbEhlYWRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKCFzbWFsbEhlYWRlciAmJiBwb3NpdGlvbiA+IHRoaXMuc21hbGxIZWFkZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbWFsbEhlYWRlcjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzbWFsbEhlYWRlciAmJiBwb3NpdGlvbiA8IHRoaXMuc21hbGxIZWFkZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzbWFsbEhlYWRlcjogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUod2lkdGg6IG51bWJlcikge1xuICAgICAgICBjb25zdCB7IG1vYmlsZU9wZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBzaG91bGRNb2JpbGUgPSB3aWR0aCA8IDEyMDA7XG4gICAgICAgIGlmICh3aWR0aCA8IDEyMDApIHtcbiAgICAgICAgICAgIHNob3VsZE1vYmlsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCb2R5U2Nyb2xsKG1vYmlsZU9wZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdWxkTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlT3BlbjogZmFsc2UgfSk7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCb2R5U2Nyb2xsKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNNb2JpbGU6IHNob3VsZE1vYmlsZSB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KG1lbnVJdGVtOiBNZW51SXRlbSkge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW0gJiYgYWN0aXZlSXRlbS50aXRsZSA9PT0gbWVudUl0ZW0udGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiB1bmRlZmluZWQgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG1lbnVJdGVtIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZU1vYmlsZU1lbnUoKSB7XG4gICAgICAgIGNvbnN0IHsgbW9iaWxlT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAobW9iaWxlT3BlbiAmJiB0aGlzLnN1Ym1lbnVJc09wZW4oKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVN1Ym1lbnUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlT3BlbjogIW1vYmlsZU9wZW4gfSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZUJvZHlTY3JvbGwobW9iaWxlT3Blbik7XG4gICAgfVxuXG4gICAgY2xvc2VTdWJtZW51KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xvc2Ugc3VibWVudScpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogdW5kZWZpbmVkIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzbWFsbEhlYWRlciwgYWN0aXZlSXRlbSwgbW9iaWxlT3BlbiwgaXNNb2JpbGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHsgbWVudUl0ZW1zLCB0aXRsZSwgc3VidGl0bGUsIGxvZ29VcmwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZXMgPSAnY3YtaGVhZGVyJztcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkU2hvd1NtYWxsSGVhZGVyKCkpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMgKz0gJyBjdi1oZWFkZXItLXNtYWxsJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlSXRlbSAmJiAoIWlzTW9iaWxlIHx8IG1vYmlsZU9wZW4pKSB7XG4gICAgICAgICAgICBjbGFzc05hbWVzICs9ICcgY3YtaGVhZGVyLS1zdWJtZW51LW9wZW4nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lcyArPSAnIGN2LWhlYWRlci0tbW9iaWxlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9iaWxlT3Blbikge1xuICAgICAgICAgICAgY2xhc3NOYW1lcyArPSAnIGN2LWhlYWRlci0tbW9iaWxlLW9wZW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhlYWRlci1wbGFjZWhvbGRlciAke2lzTW9iaWxlID8gJ2hlYWRlci1wbGFjZWhvbGRlci0tbW9iaWxlJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICBpbj17YWN0aXZlSXRlbSAmJiAhaXNNb2JpbGV9XG4gICAgICAgICAgICAgICAgICAgIC8vIGluXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcz1cImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uRW50ZXI9eygpID0+IHNldFNob3dCdXR0b24oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAvLyBvbkV4aXRlZD17KCkgPT4gc2V0U2hvd0J1dHRvbih0cnVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VTdWJtZW51KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMCwwLDAuMiknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyB6LWluZGV4OiA5NTsgd2lkdGg6IDEwMHZ3OyBoZWlnaHQ6IDEwMHZoOyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuICAgICAgICAgICAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaW49e2lzTW9iaWxlICYmIG1vYmlsZU9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXsyMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzPVwiZmFkZS1mcm9tLXRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51UGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN2LWhlYWRlcl9fbW9iaWxlLW1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtcz17bWVudUl0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdD17aXRlbSA9PiB0aGlzLnRvZ2dsZU1lbnUoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNZW7DvFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpbj17aXNNb2JpbGUgJiYgbW9iaWxlT3BlbiAmJiB0aGlzLnN1Ym1lbnVJc09wZW4oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9ezIwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzPVwiZmFkZS1mcm9tLWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudVBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdi1oZWFkZXJfX21vYmlsZS1zdWJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXNNb2JpbGUgJiYgbW9iaWxlT3BlbiAmJiB0aGlzLnN1Ym1lbnVJc09wZW4oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1zPXthY3RpdmVJdGVtPy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NoaWxkcmVuPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YWN0aXZlSXRlbSA/IGFjdGl2ZUl0ZW0udGl0bGUgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrQnV0dG9uVGl0bGU9XCJadXLDvGNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU3VibWVudSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWJsb2NrX190ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2FjdGl2ZUl0ZW0/LmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gZGVzY3JpcHRpb24tYmxvY2tfX2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtJY29uVHlwZXMuQXJyb3dSaWdodH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOcYmVyc2ljaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVQYWdlPlxuICAgICAgICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIHshaXNNb2JpbGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VTdWJtZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3YtaGVhZGVyX19zdWJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpc3Q9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3YtaGVhZGVyX19wYWdlLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbD17dGhpcy5zaG91bGRTaG93U21hbGxIZWFkZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ29Vcmw9e2xvZ29Vcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGU9e2lzTW9iaWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudUJ1dHRvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhhbWJ1cmdlciBvcGVuPXttb2JpbGVPcGVufSBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZU1vYmlsZU1lbnUoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbXM9e21lbnVJdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVNZW51PXttZW51SXRlbSA9PiB0aGlzLnRvZ2dsZU1lbnUobWVudUl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw9e3NtYWxsSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWRlcjtcbiJdfQ==