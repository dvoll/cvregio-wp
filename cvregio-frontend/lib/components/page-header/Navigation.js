import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import Icon, { IconTypes } from '../base/Icon';
import './Navigation.scss';

class Navigation extends React.Component {
  toggleMenu(event, item) {
    event.preventDefault();
    this.props.toggleMenu(item);
  }

  hasCurrentAsChild(item) {
    if (item.children === undefined || item.children.length === 0) {
      return false;
    }

    const index = item.children.findIndex(childItem => childItem.current);
    return index >= 0;
  }

  render() {
    const {
      menuItems = [],
      isList = false,
      small,
      activeItem
    } = this.props;
    const items = menuItems.map(menuItem => {
      var _menuItem$children;

      const length = (_menuItem$children = menuItem.children) === null || _menuItem$children === void 0 ? void 0 : _menuItem$children.length;
      let className = 'menu-item';

      if (menuItem.current || this.hasCurrentAsChild(menuItem)) {
        className += ' current ';
      }

      if (menuItem.children && menuItem.children.length > 0) {
        className += ' menu-item-has-children';
      }

      return React.createElement("li", {
        key: menuItem.title,
        className: className
      }, (length !== null && length !== void 0 ? length : 0) > 0 ? // eslint-disable-next-line jsx-a11y/anchor-is-valid
      React.createElement("a", {
        role: "button",
        href: "",
        className: "menu-item__toggle",
        onClick: event => this.toggleMenu(event, menuItem)
      }, menuItem.title, React.createElement(CSSTransition, {
        in: (activeItem === null || activeItem === void 0 ? void 0 : activeItem.title) === menuItem.title,
        classNames: "fade-submenu-icon",
        timeout: 200
      }, React.createElement(Icon, {
        icon: IconTypes.ArrowRight,
        className: "menu-item__toggle-icon"
      }))) : React.createElement("a", {
        href: menuItem.href
      }, menuItem.title));
    });
    return React.createElement("ul", {
      className: `main-menu ${isList ? 'main-menu--list' : ''}${small ? 'main-menu--small' : ''}`
    }, items);
  }

}

export default Navigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL05hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ1NTVHJhbnNpdGlvbiIsIkljb24iLCJJY29uVHlwZXMiLCJOYXZpZ2F0aW9uIiwiQ29tcG9uZW50IiwidG9nZ2xlTWVudSIsImV2ZW50IiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJoYXNDdXJyZW50QXNDaGlsZCIsImNoaWxkcmVuIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjaGlsZEl0ZW0iLCJjdXJyZW50IiwicmVuZGVyIiwibWVudUl0ZW1zIiwiaXNMaXN0Iiwic21hbGwiLCJhY3RpdmVJdGVtIiwiaXRlbXMiLCJtYXAiLCJtZW51SXRlbSIsImNsYXNzTmFtZSIsInRpdGxlIiwiQXJyb3dSaWdodCIsImhyZWYiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsd0JBQTlCO0FBRUEsT0FBT0MsSUFBUCxJQUFlQyxTQUFmLFFBQWdDLGNBQWhDO0FBRUEsT0FBTyxtQkFBUDs7QUFVQSxNQUFNQyxVQUFOLFNBQXlCSixLQUFLLENBQUNLLFNBQS9CLENBQTBEO0FBQ3REQyxFQUFBQSxVQUFVLENBQUNDLEtBQUQsRUFBeURDLElBQXpELEVBQXlFO0FBQy9FRCxJQUFBQSxLQUFLLENBQUNFLGNBQU47QUFDQSxTQUFLQyxLQUFMLENBQVdKLFVBQVgsQ0FBc0JFLElBQXRCO0FBQ0g7O0FBRURHLEVBQUFBLGlCQUFpQixDQUFDSCxJQUFELEVBQWlCO0FBQzlCLFFBQUlBLElBQUksQ0FBQ0ksUUFBTCxLQUFrQkMsU0FBbEIsSUFBK0JMLElBQUksQ0FBQ0ksUUFBTCxDQUFjRSxNQUFkLEtBQXlCLENBQTVELEVBQStEO0FBQzNELGFBQU8sS0FBUDtBQUNIOztBQUNELFVBQU1DLEtBQUssR0FBR1AsSUFBSSxDQUFDSSxRQUFMLENBQWNJLFNBQWQsQ0FBd0JDLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxPQUEvQyxDQUFkO0FBRUEsV0FBT0gsS0FBSyxJQUFJLENBQWhCO0FBQ0g7O0FBRU1JLEVBQUFBLE1BQVAsR0FBZ0I7QUFDWixVQUFNO0FBQUVDLE1BQUFBLFNBQVMsR0FBRyxFQUFkO0FBQWtCQyxNQUFBQSxNQUFNLEdBQUcsS0FBM0I7QUFBa0NDLE1BQUFBLEtBQWxDO0FBQXlDQyxNQUFBQTtBQUF6QyxRQUF3RCxLQUFLYixLQUFuRTtBQUNBLFVBQU1jLEtBQUssR0FBR0osU0FBUyxDQUFDSyxHQUFWLENBQWNDLFFBQVEsSUFBSTtBQUFBOztBQUNwQyxZQUFNWixNQUFNLHlCQUFHWSxRQUFRLENBQUNkLFFBQVosdURBQUcsbUJBQW1CRSxNQUFsQztBQUNBLFVBQUlhLFNBQVMsR0FBRyxXQUFoQjs7QUFDQSxVQUFJRCxRQUFRLENBQUNSLE9BQVQsSUFBb0IsS0FBS1AsaUJBQUwsQ0FBdUJlLFFBQXZCLENBQXhCLEVBQTBEO0FBQ3REQyxRQUFBQSxTQUFTLElBQUksV0FBYjtBQUNIOztBQUNELFVBQUlELFFBQVEsQ0FBQ2QsUUFBVCxJQUFxQmMsUUFBUSxDQUFDZCxRQUFULENBQWtCRSxNQUFsQixHQUEyQixDQUFwRCxFQUF1RDtBQUNuRGEsUUFBQUEsU0FBUyxJQUFJLHlCQUFiO0FBQ0g7O0FBRUQsYUFDSTtBQUFJLFFBQUEsR0FBRyxFQUFFRCxRQUFRLENBQUNFLEtBQWxCO0FBQXlCLFFBQUEsU0FBUyxFQUFFRDtBQUFwQyxTQUNLLENBQUNiLE1BQUQsYUFBQ0EsTUFBRCxjQUFDQSxNQUFELEdBQVcsQ0FBWCxJQUFnQixDQUFoQixHQUNHO0FBQ0E7QUFDSSxRQUFBLElBQUksRUFBQyxRQURUO0FBRUksUUFBQSxJQUFJLEVBQUMsRUFGVDtBQUdJLFFBQUEsU0FBUyxFQUFDLG1CQUhkO0FBSUksUUFBQSxPQUFPLEVBQUVQLEtBQUssSUFBSSxLQUFLRCxVQUFMLENBQWdCQyxLQUFoQixFQUF1Qm1CLFFBQXZCO0FBSnRCLFNBTUtBLFFBQVEsQ0FBQ0UsS0FOZCxFQU9JLG9CQUFDLGFBQUQ7QUFDSSxRQUFBLEVBQUUsRUFBRSxDQUFBTCxVQUFVLFNBQVYsSUFBQUEsVUFBVSxXQUFWLFlBQUFBLFVBQVUsQ0FBRUssS0FBWixNQUFzQkYsUUFBUSxDQUFDRSxLQUR2QztBQUVJLFFBQUEsVUFBVSxFQUFDLG1CQUZmO0FBR0ksUUFBQSxPQUFPLEVBQUU7QUFIYixTQUtJLG9CQUFDLElBQUQ7QUFDSSxRQUFBLElBQUksRUFBRXpCLFNBQVMsQ0FBQzBCLFVBRHBCO0FBRUksUUFBQSxTQUFTLEVBQUM7QUFGZCxRQUxKLENBUEosQ0FGSCxHQXFCRztBQUFHLFFBQUEsSUFBSSxFQUFFSCxRQUFRLENBQUNJO0FBQWxCLFNBQXlCSixRQUFRLENBQUNFLEtBQWxDLENBdEJSLENBREo7QUEyQkgsS0FyQ2EsQ0FBZDtBQXNDQSxXQUNJO0FBQ0ksTUFBQSxTQUFTLEVBQUcsYUFBWVAsTUFBTSxHQUFHLGlCQUFILEdBQXVCLEVBQUcsR0FDcERDLEtBQUssR0FBRyxrQkFBSCxHQUF3QixFQUNoQztBQUhMLE9BS0tFLEtBTEwsQ0FESjtBQVNIOztBQWhFcUQ7O0FBbUUxRCxlQUFlcEIsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnLi9QYWdlSGVhZGVyJztcbmltcG9ydCBJY29uLCB7IEljb25UeXBlcyB9IGZyb20gJy4uL2Jhc2UvSWNvbic7XG5cbmltcG9ydCAnLi9OYXZpZ2F0aW9uLnNjc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25Qcm9wcyB7XG4gICAgbWVudUl0ZW1zPzogTWVudUl0ZW1bXTtcbiAgICB0b2dnbGVNZW51OiAoaXRlbTogTWVudUl0ZW0pID0+IHZvaWQ7XG4gICAgaXNMaXN0PzogYm9vbGVhbjtcbiAgICBzbWFsbDogYm9vbGVhbjtcbiAgICBhY3RpdmVJdGVtPzogTWVudUl0ZW07XG59XG5cbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TmF2aWdhdGlvblByb3BzPiB7XG4gICAgdG9nZ2xlTWVudShldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudCwgTW91c2VFdmVudD4sIGl0ZW06IE1lbnVJdGVtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlTWVudShpdGVtKTtcbiAgICB9XG5cbiAgICBoYXNDdXJyZW50QXNDaGlsZChpdGVtOiBNZW51SXRlbSkge1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkIHx8IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSBpdGVtLmNoaWxkcmVuLmZpbmRJbmRleChjaGlsZEl0ZW0gPT4gY2hpbGRJdGVtLmN1cnJlbnQpO1xuXG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgbWVudUl0ZW1zID0gW10sIGlzTGlzdCA9IGZhbHNlLCBzbWFsbCwgYWN0aXZlSXRlbSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaXRlbXMgPSBtZW51SXRlbXMubWFwKG1lbnVJdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG1lbnVJdGVtLmNoaWxkcmVuPy5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJ21lbnUtaXRlbSc7XG4gICAgICAgICAgICBpZiAobWVudUl0ZW0uY3VycmVudCB8fCB0aGlzLmhhc0N1cnJlbnRBc0NoaWxkKG1lbnVJdGVtKSkge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnIGN1cnJlbnQgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZW51SXRlbS5jaGlsZHJlbiAmJiBtZW51SXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9ICcgbWVudS1pdGVtLWhhcy1jaGlsZHJlbic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bWVudUl0ZW0udGl0bGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgeyhsZW5ndGggPz8gMCkgPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWl0ZW1fX3RvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50LCBtZW51SXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluPXthY3RpdmVJdGVtPy50aXRsZSA9PT0gbWVudUl0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJmYWRlLXN1Ym1lbnUtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtJY29uVHlwZXMuQXJyb3dSaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtaXRlbV9fdG9nZ2xlLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e21lbnVJdGVtLmhyZWZ9PnttZW51SXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWFpbi1tZW51ICR7aXNMaXN0ID8gJ21haW4tbWVudS0tbGlzdCcgOiAnJ30ke1xuICAgICAgICAgICAgICAgICAgICBzbWFsbCA/ICdtYWluLW1lbnUtLXNtYWxsJyA6ICcnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW1zfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXX0=