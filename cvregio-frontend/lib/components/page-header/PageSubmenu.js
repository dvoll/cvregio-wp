function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import Icon, { IconTypes } from '../base/Icon';
import SubmenuLink from './SubmenuLink';
import './PageSubmenu.scss';

// export interface PageSubmenuState {}
class PageSubmenu extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      menuItem: this.props.menuItem,
      show: false
    });
  }

  componentDidUpdate(prevProps) {
    var _this$props$menuItem, _prevProps$menuItem;

    if (((_this$props$menuItem = this.props.menuItem) === null || _this$props$menuItem === void 0 ? void 0 : _this$props$menuItem.title) !== ((_prevProps$menuItem = prevProps.menuItem) === null || _prevProps$menuItem === void 0 ? void 0 : _prevProps$menuItem.title)) {
      if (this.props.menuItem) {
        this.setState({
          show: true,
          menuItem: this.props.menuItem
        });
      } else {
        this.setState({
          show: false
        });
      }
    }
  }

  render() {
    var _menuItem$children;

    const {
      className = '',
      isList
    } = this.props;
    const {
      show,
      menuItem
    } = this.state;
    const items = menuItem === null || menuItem === void 0 ? void 0 : (_menuItem$children = menuItem.children) === null || _menuItem$children === void 0 ? void 0 : _menuItem$children.map(item => {
      return React.createElement("li", {
        key: item.title,
        className: "menu-list__item"
      }, React.createElement(SubmenuLink, {
        href: item.href,
        type: "block"
      }, item.title));
    });
    return React.createElement(CSSTransition, {
      in: show,
      timeout: 200,
      classNames: "fade-from-top",
      unmountOnExit: true
    }, React.createElement("div", {
      className: `page-submenu ${className} ${isList ? 'page-submenu--list' : 'page-submenu--grid'}`
    }, React.createElement("div", {
      className: "page-submenu__info description-block"
    }, React.createElement("h2", {
      className: "description-block__header"
    }, menuItem === null || menuItem === void 0 ? void 0 : menuItem.title), React.createElement("p", {
      className: "description-block__text"
    }), React.createElement("a", {
      href: menuItem === null || menuItem === void 0 ? void 0 : menuItem.href,
      className: "button description-block__link"
    }, React.createElement(Icon, {
      icon: IconTypes.ArrowRight
    }), "\xDCbersicht")), React.createElement("ul", {
      className: `page-submenu__menu-list ${!isList ? 'page-submenu__menu-list--grid' : ''}`
    }, items)));
  }

}

export default PageSubmenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL1BhZ2VTdWJtZW51LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkNTU1RyYW5zaXRpb24iLCJJY29uIiwiSWNvblR5cGVzIiwiU3VibWVudUxpbmsiLCJQYWdlU3VibWVudSIsIkNvbXBvbmVudCIsIm1lbnVJdGVtIiwicHJvcHMiLCJzaG93IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwidGl0bGUiLCJzZXRTdGF0ZSIsInJlbmRlciIsImNsYXNzTmFtZSIsImlzTGlzdCIsInN0YXRlIiwiaXRlbXMiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJocmVmIiwiQXJyb3dSaWdodCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxTQUFTQyxhQUFULFFBQThCLHdCQUE5QjtBQUNBLE9BQU9DLElBQVAsSUFBZUMsU0FBZixRQUFnQyxjQUFoQztBQUNBLE9BQU9DLFdBQVAsTUFBd0IsZUFBeEI7QUFHQSxPQUFPLG9CQUFQOztBQWFBO0FBRUEsTUFBTUMsV0FBTixTQUEwQkwsS0FBSyxDQUFDTSxTQUFoQyxDQUE4RTtBQUFBO0FBQUE7O0FBQUEsbUNBQ3ZDO0FBQy9CQyxNQUFBQSxRQUFRLEVBQUUsS0FBS0MsS0FBTCxDQUFXRCxRQURVO0FBRS9CRSxNQUFBQSxJQUFJLEVBQUU7QUFGeUIsS0FEdUM7QUFBQTs7QUFNMUVDLEVBQUFBLGtCQUFrQixDQUFDQyxTQUFELEVBQThCO0FBQUE7O0FBQzVDLFFBQUksOEJBQUtILEtBQUwsQ0FBV0QsUUFBWCw4RUFBcUJLLEtBQXJCLDhCQUErQkQsU0FBUyxDQUFDSixRQUF6Qyx3REFBK0Isb0JBQW9CSyxLQUFuRCxDQUFKLEVBQThEO0FBQzFELFVBQUksS0FBS0osS0FBTCxDQUFXRCxRQUFmLEVBQXlCO0FBQ3JCLGFBQUtNLFFBQUwsQ0FBYztBQUFFSixVQUFBQSxJQUFJLEVBQUUsSUFBUjtBQUFjRixVQUFBQSxRQUFRLEVBQUUsS0FBS0MsS0FBTCxDQUFXRDtBQUFuQyxTQUFkO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS00sUUFBTCxDQUFjO0FBQUVKLFVBQUFBLElBQUksRUFBRTtBQUFSLFNBQWQ7QUFDSDtBQUNKO0FBQ0o7O0FBRU1LLEVBQUFBLE1BQVAsR0FBZ0I7QUFBQTs7QUFDWixVQUFNO0FBQUVDLE1BQUFBLFNBQVMsR0FBRyxFQUFkO0FBQWtCQyxNQUFBQTtBQUFsQixRQUE2QixLQUFLUixLQUF4QztBQUNBLFVBQU07QUFBRUMsTUFBQUEsSUFBRjtBQUFRRixNQUFBQTtBQUFSLFFBQXFCLEtBQUtVLEtBQWhDO0FBQ0EsVUFBTUMsS0FBSyxHQUFHWCxRQUFILGFBQUdBLFFBQUgsNkNBQUdBLFFBQVEsQ0FBRVksUUFBYix1REFBRyxtQkFBb0JDLEdBQXBCLENBQXdCQyxJQUFJLElBQUk7QUFDMUMsYUFDSTtBQUFJLFFBQUEsR0FBRyxFQUFFQSxJQUFJLENBQUNULEtBQWQ7QUFBcUIsUUFBQSxTQUFTLEVBQUM7QUFBL0IsU0FDSSxvQkFBQyxXQUFEO0FBQWEsUUFBQSxJQUFJLEVBQUVTLElBQUksQ0FBQ0MsSUFBeEI7QUFBOEIsUUFBQSxJQUFJLEVBQUM7QUFBbkMsU0FDS0QsSUFBSSxDQUFDVCxLQURWLENBREosQ0FESjtBQU9ILEtBUmEsQ0FBZDtBQVNBLFdBQ0ksb0JBQUMsYUFBRDtBQUFlLE1BQUEsRUFBRSxFQUFFSCxJQUFuQjtBQUF5QixNQUFBLE9BQU8sRUFBRSxHQUFsQztBQUF1QyxNQUFBLFVBQVUsRUFBQyxlQUFsRDtBQUFrRSxNQUFBLGFBQWE7QUFBL0UsT0FDSTtBQUNJLE1BQUEsU0FBUyxFQUFHLGdCQUFlTSxTQUFVLElBQ2pDQyxNQUFNLEdBQUcsb0JBQUgsR0FBMEIsb0JBQ25DO0FBSEwsT0FLSTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FDSTtBQUFJLE1BQUEsU0FBUyxFQUFDO0FBQWQsT0FBMkNULFFBQTNDLGFBQTJDQSxRQUEzQyx1QkFBMkNBLFFBQVEsQ0FBRUssS0FBckQsQ0FESixFQUVJO0FBQUcsTUFBQSxTQUFTLEVBQUM7QUFBYixNQUZKLEVBR0k7QUFBRyxNQUFBLElBQUksRUFBRUwsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVlLElBQW5CO0FBQXlCLE1BQUEsU0FBUyxFQUFDO0FBQW5DLE9BQ0ksb0JBQUMsSUFBRDtBQUFNLE1BQUEsSUFBSSxFQUFFbkIsU0FBUyxDQUFDb0I7QUFBdEIsTUFESixpQkFISixDQUxKLEVBYUk7QUFDSSxNQUFBLFNBQVMsRUFBRywyQkFDUixDQUFDUCxNQUFELEdBQVUsK0JBQVYsR0FBNEMsRUFDL0M7QUFITCxPQUtLRSxLQUxMLENBYkosQ0FESixDQURKO0FBeUJIOztBQXJEeUU7O0FBd0Q5RSxlQUFlYixXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IEljb24sIHsgSWNvblR5cGVzIH0gZnJvbSAnLi4vYmFzZS9JY29uJztcbmltcG9ydCBTdWJtZW51TGluayBmcm9tICcuL1N1Ym1lbnVMaW5rJztcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnLi9QYWdlSGVhZGVyJztcblxuaW1wb3J0ICcuL1BhZ2VTdWJtZW51LnNjc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VTdWJtZW51UHJvcHMge1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIGlzTGlzdDogYm9vbGVhbjtcbiAgICBtZW51SXRlbT86IE1lbnVJdGVtO1xufVxuXG5pbnRlcmZhY2UgUGFnZVN1Ym1lbnVTdGF0ZSB7XG4gICAgbWVudUl0ZW0/OiBNZW51SXRlbTtcbiAgICBzaG93OiBib29sZWFuO1xufVxuXG4vLyBleHBvcnQgaW50ZXJmYWNlIFBhZ2VTdWJtZW51U3RhdGUge31cblxuY2xhc3MgUGFnZVN1Ym1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UGFnZVN1Ym1lbnVQcm9wcywgUGFnZVN1Ym1lbnVTdGF0ZT4ge1xuICAgIHJlYWRvbmx5IHN0YXRlOiBQYWdlU3VibWVudVN0YXRlID0ge1xuICAgICAgICBtZW51SXRlbTogdGhpcy5wcm9wcy5tZW51SXRlbSxcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFBhZ2VTdWJtZW51UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWVudUl0ZW0/LnRpdGxlICE9PSBwcmV2UHJvcHMubWVudUl0ZW0/LnRpdGxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tZW51SXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlLCBtZW51SXRlbTogdGhpcy5wcm9wcy5tZW51SXRlbSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWUgPSAnJywgaXNMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHNob3csIG1lbnVJdGVtIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBpdGVtcyA9IG1lbnVJdGVtPy5jaGlsZHJlbj8ubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9XCJtZW51LWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFN1Ym1lbnVMaW5rIGhyZWY9e2l0ZW0uaHJlZn0gdHlwZT1cImJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9TdWJtZW51TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17c2hvd30gdGltZW91dD17MjAwfSBjbGFzc05hbWVzPVwiZmFkZS1mcm9tLXRvcFwiIHVubW91bnRPbkV4aXQ+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwYWdlLXN1Ym1lbnUgJHtjbGFzc05hbWV9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xpc3QgPyAncGFnZS1zdWJtZW51LS1saXN0JyA6ICdwYWdlLXN1Ym1lbnUtLWdyaWQnXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXN1Ym1lbnVfX2luZm8gZGVzY3JpcHRpb24tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1ibG9ja19faGVhZGVyXCI+e21lbnVJdGVtPy50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tYmxvY2tfX3RleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bWVudUl0ZW0/LmhyZWZ9IGNsYXNzTmFtZT1cImJ1dHRvbiBkZXNjcmlwdGlvbi1ibG9ja19fbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e0ljb25UeXBlcy5BcnJvd1JpZ2h0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOcYmVyc2ljaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGFnZS1zdWJtZW51X19tZW51LWxpc3QgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNMaXN0ID8gJ3BhZ2Utc3VibWVudV9fbWVudS1saXN0LS1ncmlkJyA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVN1Ym1lbnU7XG4iXX0=