webpackHotUpdate(0,{

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(79), RootInstanceProvider = __webpack_require__(87), ReactMount = __webpack_require__(89), React = __webpack_require__(174); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(174);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(303);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n__webpack_require__(938);\n__webpack_require__(942);\n\n// 获取图片相关的数据\nvar imageDatas = __webpack_require__(944);\n\n\n// 利用自执行函数， 将图片名信息转成图片RUL路径信息\nimageDatas = function getImageURL(imageDatasArr) {\n  for (var i = 0, j = imageDatasArr.length; i < j; i++) {\n    var singleImageData = imageDatasArr[i];\n\n    singleImageData.imageURL = __webpack_require__(945)(\"./\" + singleImageData.fileName);\n\n    imageDatasArr[i] = singleImageData;\n  }\n  return imageDatasArr;\n}(imageDatas);\n\nvar yeomanImage = __webpack_require__(962);\n\nvar ImgFigure = _react2.default.createClass({\n  displayName: 'ImgFigure',\n  render: function render() {\n    return _react2.default.createElement(\n      'figure',\n      { className: 'img-figure' },\n      _react2.default.createElement('img', { src: this.props.data.imageURL,\n        alt: this.props.data.title\n      }),\n      _react2.default.createElement(\n        'figcaption',\n        null,\n        _react2.default.createElement(\n          'h2',\n          { className: 'img-title' },\n          this.props.data.title\n        )\n      )\n    );\n  }\n});\n\nvar AppComponent = function (_React$Component) {\n  _inherits(AppComponent, _React$Component);\n\n  function AppComponent() {\n    _classCallCheck(this, AppComponent);\n\n    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));\n  }\n\n  _createClass(AppComponent, [{\n    key: 'render',\n    value: function render() {\n\n      var controllereUnits = [],\n          imgFigures = [];\n      imageDatas.forEach(function (value) {\n        imgFigures.push(_react2.default.createElement(ImgFigure, { data: value }));\n      });\n      return _react2.default.createElement(\n        'section',\n        { className: 'stage' },\n        _react2.default.createElement(\n          'section',\n          { className: 'img-sec' },\n          imgFigures\n        ),\n        _react2.default.createElement('nav', { className: 'controller-nav' }),\n        _react2.default.createElement(\n          _semanticUiReact.Button,\n          null,\n          '123'\n        )\n      );\n    }\n  }]);\n\n  return AppComponent;\n}(_react2.default.Component);\n\nAppComponent.defaultProps = {};\n\nexports.default = AppComponent;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(963); if (makeExportsHot(module, __webpack_require__(174))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"Main.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzdjZDQiXSwibmFtZXMiOlsicmVxdWlyZSIsImltYWdlRGF0YXMiLCJnZXRJbWFnZVVSTCIsImltYWdlRGF0YXNBcnIiLCJpIiwiaiIsImxlbmd0aCIsInNpbmdsZUltYWdlRGF0YSIsImltYWdlVVJMIiwiZmlsZU5hbWUiLCJ5ZW9tYW5JbWFnZSIsIkltZ0ZpZ3VyZSIsImNyZWF0ZUNsYXNzIiwicmVuZGVyIiwicHJvcHMiLCJkYXRhIiwidGl0bGUiLCJBcHBDb21wb25lbnQiLCJjb250cm9sbGVyZVVuaXRzIiwiaW1nRmlndXJlcyIsImZvckVhY2giLCJ2YWx1ZSIsInB1c2giLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQTs7OztBQUNBOzs7Ozs7Ozs7O0FBUEEsbUJBQUFBLENBQVEsR0FBUjtBQUNBLG1CQUFBQSxDQUFRLEdBQVI7O0FBR0E7QUFDQSxJQUFJQyxhQUFhLG1CQUFBRCxDQUFRLEdBQVIsQ0FBakI7OztBQUtBO0FBQ0FDLGFBQWMsU0FBU0MsV0FBVCxDQUFxQkMsYUFBckIsRUFBb0M7QUFDakQsT0FBSSxJQUFJQyxJQUFJLENBQVIsRUFBV0MsSUFBSUYsY0FBY0csTUFBakMsRUFBeUNGLElBQUlDLENBQTdDLEVBQWdERCxHQUFoRCxFQUFvRDtBQUNuRCxRQUFJRyxrQkFBa0JKLGNBQWNDLENBQWQsQ0FBdEI7O0FBRUFHLG9CQUFnQkMsUUFBaEIsR0FBMkIsNkJBQVEsR0FBZUQsZ0JBQWdCRSxRQUF2QyxDQUEzQjs7QUFFQU4sa0JBQWNDLENBQWQsSUFBbUJHLGVBQW5CO0FBQ0E7QUFDRCxTQUFPSixhQUFQO0FBQ0EsQ0FUWSxDQVNWRixVQVRVLENBQWI7O0FBY0EsSUFBSVMsY0FBYyxtQkFBQVYsQ0FBUSxHQUFSLENBQWxCOztBQUVBLElBQUlXLFlBQVksZ0JBQU1DLFdBQU4sQ0FBbUI7QUFBQTtBQUNsQ0MsUUFEa0Msb0JBQ3pCO0FBQ1IsV0FDQztBQUFBO0FBQUEsUUFBUSxXQUFVLFlBQWxCO0FBQ0MsNkNBQUssS0FBSyxLQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JQLFFBQTFCO0FBQ0MsYUFBSyxLQUFLTSxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDO0FBRHRCLFFBREQ7QUFJQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsWUFBSSxXQUFVLFdBQWQ7QUFBMkIsZUFBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCQztBQUEzQztBQUREO0FBSkQsS0FERDtBQVVBO0FBWmlDLENBQW5CLENBQWhCOztJQWVNQyxZOzs7Ozs7Ozs7Ozs2QkFDSzs7QUFFUixVQUFJQyxtQkFBbUIsRUFBdkI7QUFBQSxVQUNFQyxhQUFhLEVBRGY7QUFFRWxCLGlCQUFXbUIsT0FBWCxDQUFtQixVQUFVQyxLQUFWLEVBQWlCO0FBQ25DRixtQkFBV0csSUFBWCxDQUFnQiw4QkFBQyxTQUFELElBQVcsTUFBTUQsS0FBakIsR0FBaEI7QUFDQSxPQUZEO0FBR0QsYUFDRTtBQUFBO0FBQUEsVUFBUyxXQUFVLE9BQW5CO0FBQ0U7QUFBQTtBQUFBLFlBQVMsV0FBVSxTQUFuQjtBQUNFRjtBQURGLFNBREY7QUFJRSwrQ0FBSyxXQUFVLGdCQUFmLEdBSkY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsT0FERjtBQWVEOzs7O0VBdkJ3QixnQkFBTUksUzs7QUEwQmpDTixhQUFhTyxZQUFiLEdBQTRCLEVBQTVCOztrQkFHZVAsWSIsImZpbGUiOiIzMDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnKTtcbnJlcXVpcmUoJ3N0eWxlcy9BcHAuc2NzcycpOyBcblxuXG4vLyDojrflj5blm77niYfnm7jlhbPnmoTmlbDmja5cbnZhciBpbWFnZURhdGFzID0gcmVxdWlyZSgnLi4vZGF0YS9pbWFnZURhdGFzLmpzb24nKVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiAsIENhcmQsIEljb24sIEltYWdlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cblxuLy8g5Yip55So6Ieq5omn6KGM5Ye95pWw77yMIOWwhuWbvueJh+WQjeS/oeaBr+i9rOaIkOWbvueJh1JVTOi3r+W+hOS/oeaBr1xuaW1hZ2VEYXRhcyA9IChmdW5jdGlvbiBnZXRJbWFnZVVSTChpbWFnZURhdGFzQXJyKSB7XG5cdGZvcih2YXIgaSA9IDAsIGogPSBpbWFnZURhdGFzQXJyLmxlbmd0aDsgaSA8IGo7IGkrKyl7XG5cdFx0dmFyIHNpbmdsZUltYWdlRGF0YSA9IGltYWdlRGF0YXNBcnJbaV07XG5cdFx0XG5cdFx0c2luZ2xlSW1hZ2VEYXRhLmltYWdlVVJMID0gcmVxdWlyZSgnLi4vaW1hZ2VzLycgKyBzaW5nbGVJbWFnZURhdGEuZmlsZU5hbWUpO1xuXHRcdFxuXHRcdGltYWdlRGF0YXNBcnJbaV0gPSBzaW5nbGVJbWFnZURhdGE7XG5cdH1cblx0cmV0dXJuIGltYWdlRGF0YXNBcnI7XG59KShpbWFnZURhdGFzKTtcblxuXG5cblxubGV0IHllb21hbkltYWdlID0gcmVxdWlyZSgnLi4vaW1hZ2VzL3llb21hbi5wbmcnKTtcblxudmFyIEltZ0ZpZ3VyZSA9IFJlYWN0LmNyZWF0ZUNsYXNzICh7XG5cdHJlbmRlcigpIHsgXG5cdFx0cmV0dXJuIChcblx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1nLWZpZ3VyZVwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlVVJMfVxuXHRcdFx0XHRcdGFsdD17dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZmlnY2FwdGlvbj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwiaW1nLXRpdGxlXCI+e3RoaXMucHJvcHMuZGF0YS50aXRsZX08L2gyPlxuXHRcdFx0XHQ8L2ZpZ2NhcHRpb24+XG5cdFx0XHQ8L2ZpZ3VyZT5cblx0XHQpO1xuXHR9XG59KTtcblxuY2xhc3MgQXBwQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICBcdFxuICBcdHZhciBjb250cm9sbGVyZVVuaXRzID0gW10sXG4gIFx0XHRcdGltZ0ZpZ3VyZXMgPSBbXTtcbiAgXHRcdFx0aW1hZ2VEYXRhcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICBcdFx0XHRcdGltZ0ZpZ3VyZXMucHVzaCg8SW1nRmlndXJlIGRhdGE9e3ZhbHVlfS8+KTtcbiAgXHRcdFx0fSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN0YWdlXCI+XG4gICAgICBcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiaW1nLXNlY1wiPlxuICAgICAgXHRcdFx0e2ltZ0ZpZ3VyZXN9XG4gICAgICBcdFx0PC9zZWN0aW9uPlxuICAgICAgXHRcdDxuYXYgY2xhc3NOYW1lPVwiY29udHJvbGxlci1uYXZcIj5cbiAgICAgIFx0XHQ8L25hdj5cbiAgICAgIFx0XHQ8QnV0dG9uPjEyMzwvQnV0dG9uPlxuICAgICAgXHRcdFxuICAgICAgXHRcdFxuICAgICAgXHRcdFxuICAgICAgXHRcdFxuICAgICAgXHRcdFxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQXBwQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL01haW4uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})