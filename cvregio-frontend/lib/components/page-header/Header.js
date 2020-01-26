import * as React from 'react';
import './Header.scss';

class Header extends React.Component {
  // mobileToggle() {
  //     const { onMobileToggle } = this.props;
  //     return onMobileToggle && onMobileToggle();
  // }
  render() {
    const {
      title,
      subtitle,
      small,
      mobile,
      logoUrl,
      children,
      menuButton,
      className = ''
    } = this.props;
    return React.createElement("div", {
      className: `cv-page-header ${small ? 'cv-page-header--small' : ''} ${mobile ? 'cv-page-header--mobile' : ''} ${className}`
    }, React.createElement("div", {
      className: "cv-page-header__body"
    }, React.createElement("a", {
      href: "/",
      className: "cv-page-header__link"
    }, React.createElement("div", {
      className: "cv-page-header__logo-container"
    }, React.createElement("img", {
      alt: "",
      className: "cv-page-header__logo",
      src: logoUrl
    })), React.createElement("div", {
      className: "cv-page-header__title-wrapper"
    }, React.createElement("span", {
      className: "cv-page-header__title"
    }, title), React.createElement("span", {
      className: "cv-page-header__subtitle"
    }, subtitle))), !mobile && children, mobile && React.createElement("div", {
      className: "cv-page-header__menu-button"
    }, menuButton)));
  }

}

export default Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL0hlYWRlci50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwic21hbGwiLCJtb2JpbGUiLCJsb2dvVXJsIiwiY2hpbGRyZW4iLCJtZW51QnV0dG9uIiwiY2xhc3NOYW1lIiwicHJvcHMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU8sZUFBUDs7QUFhQSxNQUFNQyxNQUFOLFNBQXFCRCxLQUFLLENBQUNFLFNBQTNCLENBQWtEO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBRU9DLEVBQUFBLE1BQVAsR0FBZ0I7QUFDWixVQUFNO0FBQ0ZDLE1BQUFBLEtBREU7QUFFRkMsTUFBQUEsUUFGRTtBQUdGQyxNQUFBQSxLQUhFO0FBSUZDLE1BQUFBLE1BSkU7QUFLRkMsTUFBQUEsT0FMRTtBQU1GQyxNQUFBQSxRQU5FO0FBT0ZDLE1BQUFBLFVBUEU7QUFRRkMsTUFBQUEsU0FBUyxHQUFHO0FBUlYsUUFTRixLQUFLQyxLQVRUO0FBVUEsV0FDSTtBQUNJLE1BQUEsU0FBUyxFQUFHLGtCQUFpQk4sS0FBSyxHQUFHLHVCQUFILEdBQTZCLEVBQUcsSUFDOURDLE1BQU0sR0FBRyx3QkFBSCxHQUE4QixFQUN2QyxJQUFHSSxTQUFVO0FBSGxCLE9BS0k7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0k7QUFBRyxNQUFBLElBQUksRUFBQyxHQUFSO0FBQVksTUFBQSxTQUFTLEVBQUM7QUFBdEIsT0FDSTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FDSTtBQUFLLE1BQUEsR0FBRyxFQUFDLEVBQVQ7QUFBWSxNQUFBLFNBQVMsRUFBQyxzQkFBdEI7QUFBNkMsTUFBQSxHQUFHLEVBQUVIO0FBQWxELE1BREosQ0FESixFQUlJO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNJO0FBQU0sTUFBQSxTQUFTLEVBQUM7QUFBaEIsT0FBeUNKLEtBQXpDLENBREosRUFFSTtBQUFNLE1BQUEsU0FBUyxFQUFDO0FBQWhCLE9BQTRDQyxRQUE1QyxDQUZKLENBSkosQ0FESixFQVlLLENBQUNFLE1BQUQsSUFBV0UsUUFaaEIsRUFhS0YsTUFBTSxJQUNIO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUVLRyxVQUZMLENBZFIsQ0FMSixDQURKO0FBNEJIOztBQTdDNkM7O0FBZ0RsRCxlQUFlVCxNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0hlYWRlci5zY3NzJztcblxuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJQcm9wcyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBzdWJ0aXRsZTogc3RyaW5nO1xuICAgIHNtYWxsOiBib29sZWFuO1xuICAgIG1vYmlsZTogYm9vbGVhbjtcbiAgICBsb2dvVXJsOiBzdHJpbmc7XG4gICAgLy8gb25Nb2JpbGVUb2dnbGU/OiAoKSA9PiB2b2lkO1xuICAgIG1lbnVCdXR0b246IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxIZWFkZXJQcm9wcz4ge1xuICAgIC8vIG1vYmlsZVRvZ2dsZSgpIHtcbiAgICAvLyAgICAgY29uc3QgeyBvbk1vYmlsZVRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyAgICAgcmV0dXJuIG9uTW9iaWxlVG9nZ2xlICYmIG9uTW9iaWxlVG9nZ2xlKCk7XG4gICAgLy8gfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBzdWJ0aXRsZSxcbiAgICAgICAgICAgIHNtYWxsLFxuICAgICAgICAgICAgbW9iaWxlLFxuICAgICAgICAgICAgbG9nb1VybCxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgbWVudUJ1dHRvbixcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjdi1wYWdlLWhlYWRlciAke3NtYWxsID8gJ2N2LXBhZ2UtaGVhZGVyLS1zbWFsbCcgOiAnJ30gJHtcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlID8gJ2N2LXBhZ2UtaGVhZGVyLS1tb2JpbGUnIDogJydcbiAgICAgICAgICAgICAgICB9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdi1wYWdlLWhlYWRlcl9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImN2LXBhZ2UtaGVhZGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN2LXBhZ2UtaGVhZGVyX19sb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiY3YtcGFnZS1oZWFkZXJfX2xvZ29cIiBzcmM9e2xvZ29Vcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3YtcGFnZS1oZWFkZXJfX3RpdGxlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdi1wYWdlLWhlYWRlcl9fdGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN2LXBhZ2UtaGVhZGVyX19zdWJ0aXRsZVwiPntzdWJ0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICB7LyogVE9ETyBBZGQgY2xhc3NlcyB0byBjaGlsZHJlbiAqL31cbiAgICAgICAgICAgICAgICAgICAgey8qIDxzbG90IHYtaWY9XCIhbW9iaWxlXCIgbmFtZT1cImRlZmF1bHRcIiBjbGFzc05hbWU9XCJjdi1wYWdlLWhlYWRlcl9fbmF2XCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIHshbW9iaWxlICYmIGNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICB7bW9iaWxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3YtcGFnZS1oZWFkZXJfX21lbnUtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzbG90IG5hbWU9XCJtZW51LWJ1dHRvblwiIGNsYXNzTmFtZT1cImN2LXBhZ2UtaGVhZGVyX19tZW51LWJ1dHRvblwiIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ==