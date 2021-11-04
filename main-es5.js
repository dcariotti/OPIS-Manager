(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/bmM":
    /*!**********************************************!*\
      !*** ./src/app/formula/formula.component.ts ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function bmM(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FormulaComponent = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var weight_service_1 = __webpack_require__(
      /*! ../services/weight/weight.service */
      "DApg");

      var auth_service_1 = __webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/weight/weight.service */
      "DApg"));

      var i2 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans"));

      var i3 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/common */
      "ofXK"));

      var i4 = tslib_1.__importStar(__webpack_require__(
      /*! ng-katex */
      "a7Q/"));

      var i5 = tslib_1.__importStar(__webpack_require__(
      /*! @m0t0r/ngx-slider */
      "pFeF"));

      function FormulaComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div");
          i0.ɵɵelementStart(1, "table", 7);
          i0.ɵɵelementStart(2, "tr");
          i0.ɵɵelementStart(3, "td");
          i0.ɵɵtext(4, "DECISAMENTE NO");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(5, "td");
          i0.ɵɵtext(6, "E");
          i0.ɵɵelementStart(7, "sub");
          i0.ɵɵtext(8, "1");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(9, "td");
          i0.ɵɵtext(10);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(11, "tr");
          i0.ɵɵelementStart(12, "td");
          i0.ɵɵtext(13, "PI\xD9 NO CHE S\xCC");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(14, "td");
          i0.ɵɵtext(15, "E");
          i0.ɵɵelementStart(16, "sub");
          i0.ɵɵtext(17, "2");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(18, "td");
          i0.ɵɵtext(19);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(20, "tr");
          i0.ɵɵelementStart(21, "td");
          i0.ɵɵtext(22, "PI\xD9 S\xCC CHE NO");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(23, "td");
          i0.ɵɵtext(24, "E");
          i0.ɵɵelementStart(25, "sub");
          i0.ɵɵtext(26, "3");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(27, "td");
          i0.ɵɵtext(28);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(29, "tr");
          i0.ɵɵelementStart(30, "td");
          i0.ɵɵtext(31, "DECISAMENTE SI");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(32, "td");
          i0.ɵɵtext(33, "E");
          i0.ɵɵelementStart(34, "sub");
          i0.ɵɵtext(35, "4");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(36, "td");
          i0.ɵɵtext(37);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r0 = i0.ɵɵnextContext();
          i0.ɵɵadvance(10);
          i0.ɵɵtextInterpolate(ctx_r0.answersWeights[0]);
          i0.ɵɵadvance(9);
          i0.ɵɵtextInterpolate(ctx_r0.answersWeights[1]);
          i0.ɵɵadvance(9);
          i0.ɵɵtextInterpolate(ctx_r0.answersWeights[2]);
          i0.ɵɵadvance(9);
          i0.ɵɵtextInterpolate(ctx_r0.answersWeights[3]);
        }
      }

      function FormulaComponent_div_36_table_3_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "table", 10);
          i0.ɵɵelementStart(1, "thead");
          i0.ɵɵelementStart(2, "tr");
          i0.ɵɵelement(3, "th");
          i0.ɵɵelementStart(4, "th");
          i0.ɵɵtext(5, "Domande");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(6, "th");
          i0.ɵɵtext(7, "Pesi");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(8, "tbody");
          i0.ɵɵelementStart(9, "tr");
          i0.ɵɵelementStart(10, "td");
          i0.ɵɵtext(11, "V1");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(12, "td");
          i0.ɵɵtext(13, "1 - Le conoscenze preliminari possedute sono risultate sufficienti per la comprensione degli argomenti previsti nel programma d'esame?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(14, "td");
          i0.ɵɵtext(15);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(16, "tr");
          i0.ɵɵelementStart(17, "td");
          i0.ɵɵtext(18, "V1");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(19, "td");
          i0.ɵɵtext(20, "2 - Il carico di studio dell'insegnamento \xE8 proporzionato ai crediti assegnati?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(21, "td");
          i0.ɵɵtext(22);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(23, "tr");
          i0.ɵɵelement(24, "td", 11);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(25, "tr");
          i0.ɵɵelementStart(26, "td");
          i0.ɵɵtext(27, "V2");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(28, "td");
          i0.ɵɵtext(29, "4 - Le modalit\xE0 di esame sono state definite in modo chiaro?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(30, "td");
          i0.ɵɵtext(31);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(32, "tr");
          i0.ɵɵelementStart(33, "td");
          i0.ɵɵtext(34, "V2");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(35, "td");
          i0.ɵɵtext(36, "5 - Gli orari di svolgimento di lezioni, esercitazioni e altre eventuali attivit\xE0 didattiche sono rispettati?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(37, "td");
          i0.ɵɵtext(38);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(39, "tr");
          i0.ɵɵelementStart(40, "td");
          i0.ɵɵtext(41, "V2");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(42, "td");
          i0.ɵɵtext(43, "9 - L'insegnamento \xE8 stato svolto in maniera coerente con quanto dichiarato sul sito web del corso di studio?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(44, "td");
          i0.ɵɵtext(45);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(46, "tr");
          i0.ɵɵelementStart(47, "td");
          i0.ɵɵtext(48, "V2");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(49, "td");
          i0.ɵɵtext(50, "10 - Il docente \xE8 reperibile per chiarimenti e spiegazioni?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(51, "td");
          i0.ɵɵtext(52);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(53, "tr");
          i0.ɵɵelement(54, "td", 11);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(55, "tr");
          i0.ɵɵelementStart(56, "td");
          i0.ɵɵtext(57, "V3");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(58, "td");
          i0.ɵɵtext(59, "3 - Il materiale didattico (indicato e disponibile) \xE8 adeguato per lo studio della materia?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(60, "td");
          i0.ɵɵtext(61);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(62, "tr");
          i0.ɵɵelementStart(63, "td");
          i0.ɵɵtext(64, "V3");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(65, "td");
          i0.ɵɵtext(66, "6 - Il docente stimola/motiva l'interesse verso la disciplina?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(67, "td");
          i0.ɵɵtext(68);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(69, "tr");
          i0.ɵɵelementStart(70, "td");
          i0.ɵɵtext(71, "V3");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(72, "td");
          i0.ɵɵtext(73, "7 - Il docente espone gli argomenti in modo chiaro?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(74, "td");
          i0.ɵɵtext(75);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(76, "tr");
          i0.ɵɵelement(77, "td", 11);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(78, "tr");
          i0.ɵɵelement(79, "td");
          i0.ɵɵelementStart(80, "td");
          i0.ɵɵelementStart(81, "s");
          i0.ɵɵtext(82, "8 - Le attivit\xE0 didattiche integrative (esercitazioni, tutorati, laboratori, ... etc) sono utili all'apprendimento della materia?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(83, "td");
          i0.ɵɵtext(84);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(85, "tr");
          i0.ɵɵelement(86, "td");
          i0.ɵɵelementStart(87, "td");
          i0.ɵɵelementStart(88, "s");
          i0.ɵɵtext(89, "11 - \xC8 interessato/a agli argomenti trattati nell'insegnamento?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(90, "td");
          i0.ɵɵtext(91);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(92, "tr");
          i0.ɵɵelement(93, "td");
          i0.ɵɵelementStart(94, "td");
          i0.ɵɵelementStart(95, "s");
          i0.ɵɵtext(96, "12 - \xC8 complessivamente soddisfatto/a dell'insegnamento?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(97, "td");
          i0.ɵɵtext(98);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r6 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(15);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[0].peso_standard);
          i0.ɵɵadvance(7);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[1].peso_standard);
          i0.ɵɵadvance(9);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[3].peso_standard);
          i0.ɵɵadvance(7);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[4].peso_standard);
          i0.ɵɵadvance(7);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[8].peso_standard);
          i0.ɵɵadvance(7);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[9].peso_standard);
          i0.ɵɵadvance(9);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[2].peso_standard);
          i0.ɵɵadvance(7);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[5].peso_standard);
          i0.ɵɵadvance(7);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[6].peso_standard);
          i0.ɵɵadvance(9);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[7].peso_standard);
          i0.ɵɵadvance(7);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[10].peso_standard);
          i0.ɵɵadvance(7);
          i0.ɵɵtextInterpolate(ctx_r6.questionsWeights[11].peso_standard);
        }
      }

      function FormulaComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div");
          i0.ɵɵelementStart(1, "h2", 8);
          i0.ɵɵtext(2, "Valutazioni, domande e relativi pesi");
          i0.ɵɵelementEnd();
          i0.ɵɵtemplate(3, FormulaComponent_div_36_table_3_Template, 99, 12, "table", 9);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1 = i0.ɵɵnextContext();
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngIf", !!ctx_r1.questionsWeights);
        }
      }

      function FormulaComponent_ng_template_37_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 19);
          i0.ɵɵelementStart(1, "div", 20);
          i0.ɵɵelementStart(2, "p");
          i0.ɵɵtext(3, "1 - Le conoscenze preliminari possedute sono risultate sufficienti per la comprensione degli argomenti previsti nel programma d'esame?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(4, "div", 21);
          i0.ɵɵelementStart(5, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_37_div_11_Template_ngx_slider_valueChange_5_listener($event) {
            i0.ɵɵrestoreView(_r11);
            var ctx_r10 = i0.ɵɵnextContext(2);
            return ctx_r10.questionsWeights[0].peso_standard = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(6, "div", 20);
          i0.ɵɵelementStart(7, "p");
          i0.ɵɵtext(8, "2 - Il carico di studio dell'insegnamento \xE8 proporzionato ai crediti assegnati?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(9, "div", 21);
          i0.ɵɵelementStart(10, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_37_div_11_Template_ngx_slider_valueChange_10_listener($event) {
            i0.ɵɵrestoreView(_r11);
            var ctx_r12 = i0.ɵɵnextContext(2);
            return ctx_r12.questionsWeights[1].peso_standard = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r7 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r7.questionsWeights[0].peso_standard)("options", ctx_r7.questionSliderOptions);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r7.questionsWeights[1].peso_standard)("options", ctx_r7.questionSliderOptions);
        }
      }

      function FormulaComponent_ng_template_37_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 23);
          i0.ɵɵelementStart(1, "div", 20);
          i0.ɵɵelementStart(2, "p");
          i0.ɵɵtext(3, "4 - Le modalit\xE0 di esame sono state definite in modo chiaro?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(4, "div", 21);
          i0.ɵɵelementStart(5, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_37_div_12_Template_ngx_slider_valueChange_5_listener($event) {
            i0.ɵɵrestoreView(_r14);
            var ctx_r13 = i0.ɵɵnextContext(2);
            return ctx_r13.questionsWeights[3].peso_standard = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(6, "div", 20);
          i0.ɵɵelementStart(7, "p");
          i0.ɵɵtext(8, "5 - Gli orari di svolgimento di lezioni, esercitazioni e altre eventuali attivit\xE0 didattiche sono rispettati?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(9, "div", 21);
          i0.ɵɵelementStart(10, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_37_div_12_Template_ngx_slider_valueChange_10_listener($event) {
            i0.ɵɵrestoreView(_r14);
            var ctx_r15 = i0.ɵɵnextContext(2);
            return ctx_r15.questionsWeights[4].peso_standard = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(11, "div", 20);
          i0.ɵɵelementStart(12, "p");
          i0.ɵɵtext(13, "9 - L'insegnamento \xE8 stato svolto in maniera coerente con quanto dichiarato sul sito web del corso di studio?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(14, "div", 21);
          i0.ɵɵelementStart(15, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_37_div_12_Template_ngx_slider_valueChange_15_listener($event) {
            i0.ɵɵrestoreView(_r14);
            var ctx_r16 = i0.ɵɵnextContext(2);
            return ctx_r16.questionsWeights[8].peso_standard = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(16, "div", 20);
          i0.ɵɵelementStart(17, "p");
          i0.ɵɵtext(18, "10 - Il docente \xE8 reperibile per chiarimenti e spiegazioni?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(19, "div", 21);
          i0.ɵɵelementStart(20, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_37_div_12_Template_ngx_slider_valueChange_20_listener($event) {
            i0.ɵɵrestoreView(_r14);
            var ctx_r17 = i0.ɵɵnextContext(2);
            return ctx_r17.questionsWeights[9].peso_standard = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r8 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r8.questionsWeights[3].peso_standard)("options", ctx_r8.questionSliderOptions);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r8.questionsWeights[4].peso_standard)("options", ctx_r8.questionSliderOptions);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r8.questionsWeights[8].peso_standard)("options", ctx_r8.questionSliderOptions);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r8.questionsWeights[9].peso_standard)("options", ctx_r8.questionSliderOptions);
        }
      }

      function FormulaComponent_ng_template_37_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 24);
          i0.ɵɵelementStart(1, "div", 20);
          i0.ɵɵelementStart(2, "p");
          i0.ɵɵtext(3, "3 - Il materiale didattico (indicato e disponibile) \xE8 adeguato per lo studio della materia?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(4, "div", 21);
          i0.ɵɵelementStart(5, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_37_div_13_Template_ngx_slider_valueChange_5_listener($event) {
            i0.ɵɵrestoreView(_r19);
            var ctx_r18 = i0.ɵɵnextContext(2);
            return ctx_r18.questionsWeights[2].peso_standard = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(6, "div", 20);
          i0.ɵɵelementStart(7, "p");
          i0.ɵɵtext(8, "6 - Il docente stimola/motiva l'interesse verso la disciplina?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(9, "div", 21);
          i0.ɵɵelementStart(10, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_37_div_13_Template_ngx_slider_valueChange_10_listener($event) {
            i0.ɵɵrestoreView(_r19);
            var ctx_r20 = i0.ɵɵnextContext(2);
            return ctx_r20.questionsWeights[5].peso_standard = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(11, "div", 20);
          i0.ɵɵelementStart(12, "p");
          i0.ɵɵtext(13, "7 - Il docente espone gli argomenti in modo chiaro?");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(14, "div", 21);
          i0.ɵɵelementStart(15, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_37_div_13_Template_ngx_slider_valueChange_15_listener($event) {
            i0.ɵɵrestoreView(_r19);
            var ctx_r21 = i0.ɵɵnextContext(2);
            return ctx_r21.questionsWeights[6].peso_standard = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r9 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r9.questionsWeights[2].peso_standard)("options", ctx_r9.questionSliderOptions);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r9.questionsWeights[5].peso_standard)("options", ctx_r9.questionSliderOptions);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r9.questionsWeights[6].peso_standard)("options", ctx_r9.questionSliderOptions);
        }
      }

      function FormulaComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "ul", 12);
          i0.ɵɵelementStart(1, "li", 13);
          i0.ɵɵelementStart(2, "button", 14);
          i0.ɵɵlistener("click", function FormulaComponent_ng_template_37_Template_button_click_2_listener() {
            i0.ɵɵrestoreView(_r23);
            var ctx_r22 = i0.ɵɵnextContext();
            return ctx_r22.switchV(1);
          });
          i0.ɵɵtext(3, "V1");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(4, "li", 13);
          i0.ɵɵelementStart(5, "button", 14);
          i0.ɵɵlistener("click", function FormulaComponent_ng_template_37_Template_button_click_5_listener() {
            i0.ɵɵrestoreView(_r23);
            var ctx_r24 = i0.ɵɵnextContext();
            return ctx_r24.switchV(2);
          });
          i0.ɵɵtext(6, "V2");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(7, "li", 13);
          i0.ɵɵelementStart(8, "button", 14);
          i0.ɵɵlistener("click", function FormulaComponent_ng_template_37_Template_button_click_8_listener() {
            i0.ɵɵrestoreView(_r23);
            var ctx_r25 = i0.ɵɵnextContext();
            return ctx_r25.switchV(3);
          });
          i0.ɵɵtext(9, "V3");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(10, "div", 0);
          i0.ɵɵtemplate(11, FormulaComponent_ng_template_37_div_11_Template, 11, 4, "div", 15);
          i0.ɵɵtemplate(12, FormulaComponent_ng_template_37_div_12_Template, 21, 8, "div", 16);
          i0.ɵɵtemplate(13, FormulaComponent_ng_template_37_div_13_Template, 16, 6, "div", 17);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(14, "button", 18);
          i0.ɵɵlistener("click", function FormulaComponent_ng_template_37_Template_button_click_14_listener() {
            i0.ɵɵrestoreView(_r23);
            var ctx_r26 = i0.ɵɵnextContext();
            return ctx_r26.changeVWeights();
          });
          i0.ɵɵtext(15, "Salva modifiche");
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r3 = i0.ɵɵnextContext();
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngClass", ctx_r3.selectedV === 1 ? "selected-tab" : "");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngClass", ctx_r3.selectedV === 2 ? "selected-tab" : "");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngClass", ctx_r3.selectedV === 3 ? "selected-tab" : "");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngIf", ctx_r3.selectedV === 1);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r3.selectedV === 2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r3.selectedV === 3);
        }
      }

      function FormulaComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 25);
          i0.ɵɵelementStart(1, "div", 26);
          i0.ɵɵelementStart(2, "div", 27);
          i0.ɵɵtext(3, "DECISAMENTE NO");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(4, "div", 28);
          i0.ɵɵelementStart(5, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_39_Template_ngx_slider_valueChange_5_listener($event) {
            i0.ɵɵrestoreView(_r28);
            var ctx_r27 = i0.ɵɵnextContext();
            return ctx_r27.answersWeights[0] = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(6, "div", 26);
          i0.ɵɵelementStart(7, "div", 27);
          i0.ɵɵtext(8, "PI\xD9 NO CHE S\xCC");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(9, "div", 28);
          i0.ɵɵelementStart(10, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_39_Template_ngx_slider_valueChange_10_listener($event) {
            i0.ɵɵrestoreView(_r28);
            var ctx_r29 = i0.ɵɵnextContext();
            return ctx_r29.answersWeights[1] = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(11, "div", 26);
          i0.ɵɵelementStart(12, "div", 27);
          i0.ɵɵtext(13, "PI\xD9 S\xCC CHE NO");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(14, "div", 28);
          i0.ɵɵelementStart(15, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_39_Template_ngx_slider_valueChange_15_listener($event) {
            i0.ɵɵrestoreView(_r28);
            var ctx_r30 = i0.ɵɵnextContext();
            return ctx_r30.answersWeights[2] = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(16, "div", 26);
          i0.ɵɵelementStart(17, "div", 27);
          i0.ɵɵtext(18, "DECISAMENTE S\xCC");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(19, "div", 28);
          i0.ɵɵelementStart(20, "ngx-slider", 22);
          i0.ɵɵlistener("valueChange", function FormulaComponent_ng_template_39_Template_ngx_slider_valueChange_20_listener($event) {
            i0.ɵɵrestoreView(_r28);
            var ctx_r31 = i0.ɵɵnextContext();
            return ctx_r31.answersWeights[3] = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(21, "button", 29);
          i0.ɵɵlistener("click", function FormulaComponent_ng_template_39_Template_button_click_21_listener() {
            i0.ɵɵrestoreView(_r28);
            var ctx_r32 = i0.ɵɵnextContext();
            return ctx_r32.changeAnswersWeights();
          });
          i0.ɵɵtext(22, "Salva modifiche");
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r5 = i0.ɵɵnextContext();
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r5.answersWeights[0])("options", ctx_r5.answerSliderOptions);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r5.answersWeights[1])("options", ctx_r5.answerSliderOptions);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r5.answersWeights[2])("options", ctx_r5.answerSliderOptions);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r5.answersWeights[3])("options", ctx_r5.answerSliderOptions);
        }
      }

      var FormulaComponent = /*#__PURE__*/function () {
        function FormulaComponent(weightService, authService) {
          _classCallCheck(this, FormulaComponent);

          this.weightService = weightService;
          this.authService = authService;
          this.isLogged = false;
          this.answerSliderOptions = {
            floor: 1,
            ceil: 10,
            step: 1,
            minLimit: 0,
            maxLimit: 10,
            showTicks: true
          };
          this.questionSliderOptions = {
            floor: 0,
            ceil: 1,
            step: 0.1,
            minLimit: 0.1,
            maxLimit: 0.9,
            showTicks: true
          };
          this.selectedV = 1;
          this.paragraphContent = "\n  Il numero $D_j = \\frac{1}{N} \\sum_{i=1}^{4} X_{ij}  E_i  p_j $ rappresenta  la valutazione pesata relativa alla domanda $ D_j $ secondo il peso $ p_j $.\n  $ \\newline $\n  $ \\ $\n  $ \\newline $\n  I pesi sono numeri compresi tra zero e uno e vengono assegnati \u2013 all'interno di  un singolo gruppo di domande \u2013 in modo che la loro somma sia pari ad uno.\n  La valutazione complessiva del corso \u2013 relativamente al gruppo di domande considerato   \u2013 si ottiene sommando le valutazioni ottenute secondo la formula\n  $$ V = \\frac{1}{N} \\sum_{j=1}^{n} \\sum_{i=1}^{4} X_{ij} E_i p_j $$\n  ";
        }

        _createClass(FormulaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isLogged = this.authService.authTokenIsPresent();
            this.answersWeights = this.weightService.getAnswersWeights();
            var temp = setInterval(function () {
              _this.questionsWeights = _this.weightService.getQuestionsWeights();

              if (_this.questionsWeights != null) {
                clearInterval(temp);
              }
            }, 1000);
          } // TODO: refactor / remove or use Output()

        }, {
          key: "switchV",
          value: function switchV(v) {
            this.selectedV = v;
          }
        }, {
          key: "changeVWeights",
          value: function changeVWeights() {
            if (this.getGroupWeight('V1') !== 1) {
              alert('La somma di V1 è diversa da 1');
            } else if (this.getGroupWeight('V2') !== 1) {
              alert('La somma di V2 è diversa da 1');
            } else if (this.getGroupWeight('V3') !== 1) {
              alert('La somma di V3 è diversa da 1');
            } else {
              this.weightService.updateQuestionsWeights().subscribe(function (data) {
                return alert('Pesi aggiornati correttamente!');
              }, function (err) {
                alert('Errore nell\'aggiornare i pesi');
                console.log(err);
              });
            }
          }
        }, {
          key: "getGroupWeight",
          value: function getGroupWeight(group) {
            return this.questionsWeights.filter(function (domanda) {
              return domanda.gruppo === group;
            }).map(function (domanda) {
              return domanda.peso_standard;
            }).reduce(function (acc, val) {
              return acc + val;
            });
          }
        }, {
          key: "changeAnswersWeights",
          value: function changeAnswersWeights() {// save in DB
          }
        }]);

        return FormulaComponent;
      }();

      exports.FormulaComponent = FormulaComponent;

      FormulaComponent.ɵfac = function FormulaComponent_Factory(t) {
        return new (t || FormulaComponent)(i0.ɵɵdirectiveInject(i1.WeightService), i0.ɵɵdirectiveInject(i2.AuthService));
      };

      FormulaComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: FormulaComponent,
        selectors: [["app-formula"]],
        decls: 44,
        vars: 5,
        consts: [[1, "container"], [1, "text-danger"], [4, "ngIf", "ngIfElse"], [3, "paragraph"], ["align", "center"], ["questionslider", ""], ["answerslider", ""], [1, "table", "table-bordered", "formula-table"], [1, "text-center", "text-danger"], ["class", "table table-bordered", 4, "ngIf"], [1, "table", "table-bordered"], ["colspan", "3"], ["id", "tabs", 1, "nav", "nav-tabs"], [1, "nav-item", "tabs_button"], [1, "btn", "btn-opis", 3, "ngClass", "click"], ["id", "v1-sliders", "class", "row vslider", 4, "ngIf"], ["id", "v2-sliders", "class", "row vslider", 4, "ngIf"], ["id", "v3-sliders", "class", "row vslider", 4, "ngIf"], ["type", "button", 1, "btn", "btn-opis", 3, "click"], ["id", "v1-sliders", 1, "row", "vslider"], [1, "col-4"], [1, "col-8", "custom-slider"], [3, "value", "options", "valueChange"], ["id", "v2-sliders", 1, "row", "vslider"], ["id", "v3-sliders", 1, "row", "vslider"], ["id", "answer-sliders", 1, "answer-slider", "container"], [1, "row", "mt-2"], [1, "col-2", "my-auto"], [1, "col-10", "custom-slider"], ["type", "button", 1, "btn", "btn-opis", "pull-right", "mt-3", 3, "click"]],
        template: function FormulaComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "br");
            i0.ɵɵelementStart(2, "h2", 1);
            i0.ɵɵtext(3, "Modello per l'individuazione di indici atti a monitorare i servizi didattici");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "La scheda OPIS viene suddivisa in tre parti, ciascuna contenente un gruppo di n domande e viene effettuata una prima valutazione relativamente a ciascun gruppo. Consideriamo la generica domanda D");
            i0.ɵɵelementStart(6, "sub");
            i0.ɵɵtext(7, "j");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8, " del gruppo e assegniamo valori numerici agli esiti secondo la seguente");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "br");
            i0.ɵɵtemplate(10, FormulaComponent_div_10_Template, 38, 4, "div", 2);
            i0.ɵɵelement(11, "br");
            i0.ɵɵelementStart(12, "p");
            i0.ɵɵtext(13, "Sia X");
            i0.ɵɵelementStart(14, "sub");
            i0.ɵɵtext(15, "ij");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " il numero di studenti che hanno dato la risposta E");
            i0.ɵɵelementStart(17, "sub");
            i0.ɵɵtext(18, "i");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(19, " alla domanda D");
            i0.ɵɵelementStart(20, "sub");
            i0.ɵɵtext(21, "j");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(22, " e sia N il numero complessivo di studenti.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(23, "ng-katex-paragraph", 3);
            i0.ɵɵelementStart(24, "p", 4);
            i0.ɵɵtext(25, "La valutazione dell'intero corso \xE8 cos\xEC una terna di numeri \u2013 uno per ciascun gruppo - (V");
            i0.ɵɵelementStart(26, "sub");
            i0.ɵɵtext(27, "1");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(28, ", V");
            i0.ɵɵelementStart(29, "sub");
            i0.ɵɵtext(30, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(31, ", V");
            i0.ɵɵelementStart(32, "sub");
            i0.ɵɵtext(33, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(34, ").");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(35, "br");
            i0.ɵɵtemplate(36, FormulaComponent_div_36_Template, 4, 1, "div", 2);
            i0.ɵɵtemplate(37, FormulaComponent_ng_template_37_Template, 16, 6, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(39, FormulaComponent_ng_template_39_Template, 23, 8, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelement(41, "br");
            i0.ɵɵelement(42, "br");
            i0.ɵɵelement(43, "br");
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            var _r2 = i0.ɵɵreference(38);

            var _r4 = i0.ɵɵreference(40);

            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngIf", !ctx.isLogged)("ngIfElse", _r4);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("paragraph", ctx.paragraphContent);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngIf", !ctx.isLogged)("ngIfElse", _r2);
          }
        },
        directives: [i3.NgIf, i4.KatexParagraphComponent, i3.NgClass, i5.SliderComponent],
        styles: [".formula-table[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYS9mb3JtdWxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvcm11bGEvZm9ybXVsYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtdWxhLXRhYmxlIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(FormulaComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'app-formula',
            templateUrl: './formula.component.html',
            styleUrls: ['./formula.component.scss']
          }]
        }], function () {
          return [{
            type: i1.WeightService
          }, {
            type: i2.AuthService
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/4009093/projects/OPIS-Manager/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "45Ll":
    /*!**************************************!*\
      !*** ./src/app/cds/cds.component.ts ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function Ll(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CdsComponent = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var chart_js_1 = __webpack_require__(
      /*! chart.js */
      "MO+k");

      var graph_service_1 = __webpack_require__(
      /*! ../services/graph/graph.service */
      "67dP");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/graph/graph.service */
      "67dP"));

      var CdsComponent = /*#__PURE__*/function () {
        function CdsComponent(graphService) {
          _classCallCheck(this, CdsComponent);

          this.graphService = graphService;
        }

        _createClass(CdsComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.hasOwnProperty('cdsSchede')) {
              this.showCdsBoxplot();
            }
          }
        }, {
          key: "showCdsBoxplot",
          value: function showCdsBoxplot() {
            var _this2 = this;

            var vCds = this.graphService.elaborateFormula(this.cdsSchede.flatMap(function (cds) {
              return cds.insegnamenti;
            }).filter(function (insegnamento) {
              return insegnamento.schedeopis != null;
            }).map(function (insegnamento) {
              return insegnamento.schedeopis;
            }))[1];
            var sharedProps = {
              borderWidth: 1,
              outlierColor: '#999999',
              padding: 10,
              itemRadius: 0
            };
            var boxplotData = {
              // define label tree
              labels: [''],
              datasets: [Object.assign(Object.assign({
                label: 'V1',
                backgroundColor: 'rgba(255,0,0,0.5)',
                borderColor: 'red'
              }, sharedProps), {
                data: [Object.values(vCds).map(function (array) {
                  return array[0];
                }).map(function (val) {
                  return _this2.graphService.round(val);
                })]
              }), Object.assign(Object.assign({
                label: 'V2',
                backgroundColor: 'rgba(0,255,0,0.5)',
                borderColor: 'green'
              }, sharedProps), {
                data: [Object.values(vCds).map(function (array) {
                  return array[1];
                }).map(function (val) {
                  return _this2.graphService.round(val);
                })]
              }), Object.assign(Object.assign({
                label: 'V3',
                backgroundColor: 'rgba(0,0,255,0.5)',
                borderColor: 'blue'
              }, sharedProps), {
                data: [Object.values(vCds).map(function (array) {
                  return array[2];
                }).map(function (val) {
                  return _this2.graphService.round(val);
                })]
              })]
            };
            document.getElementById('corso-studio').innerHTML = '<canvas id="cds-canvas"></canvas>';
            var ctx = document.getElementById('cds-canvas').getContext('2d');
            this.chart = new chart_js_1.Chart(ctx, {
              type: 'horizontalBoxplot',
              data: boxplotData,
              options: {
                responsive: true,
                legend: {
                  position: 'top'
                },
                title: {
                  display: true,
                  text: 'CDS Stats'
                }
              }
            });
          }
        }]);

        return CdsComponent;
      }();

      exports.CdsComponent = CdsComponent;

      CdsComponent.ɵfac = function CdsComponent_Factory(t) {
        return new (t || CdsComponent)(i0.ɵɵdirectiveInject(i1.GraphService));
      };

      CdsComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: CdsComponent,
        selectors: [["app-cds"]],
        inputs: {
          cdsSchede: "cdsSchede"
        },
        features: [i0.ɵɵNgOnChangesFeature],
        decls: 1,
        vars: 0,
        consts: [["id", "corso-studio"]],
        template: function CdsComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
          }
        },
        styles: ["#corso-studio[_ngcontent-%COMP%] {\n  width: 95vw !important;\n  height: 55vw !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2RzL2Nkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Nkcy9jZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29yc28tc3R1ZGlvIHtcbiAgICB3aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTV2dyAhaW1wb3J0YW50O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(CdsComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'app-cds',
            templateUrl: './cds.component.html',
            styleUrls: ['./cds.component.scss']
          }]
        }], function () {
          return [{
            type: i1.GraphService
          }];
        }, {
          cdsSchede: [{
            type: core_1.Input
          }]
        });
      })();
      /***/

    },

    /***/
    "4K/k":
    /*!********************************************************!*\
      !*** ./src/app/registration/registration.component.ts ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function KK(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RegistrationComponent = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/forms */
      "3Pt+"));

      var i2 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/router */
      "tyNb"));

      var RegistrationComponent = /*#__PURE__*/function () {
        function RegistrationComponent() {
          _classCallCheck(this, RegistrationComponent);

          this.passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/); // tslint:disable-next-line: max-line-length

          this.emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        }

        _createClass(RegistrationComponent, [{
          key: "sendRegistrationRequest",
          value: function sendRegistrationRequest() {// if (!this.errorsInForm()) {
            // }
          } // tslint:disable-next-line

        }, {
          key: "errorsInForm",
          value: function errorsInForm() {
            // TODO: visually show errors
            var errors = false;

            if (this.firstName == null) {
              alert('Il nome è necessario');
              errors = true;
            }

            if (this.lastName == null) {
              alert('Il cognome è necessario');
              errors = true;
            }

            console.log(this.email);

            if (this.email == null) {
              alert('L\'email è necessaria');
              errors = true;
            } else if (!this.emailRegex.test(this.email)) {
              alert('L\'email non è valida');
              errors = true;
            }

            if (this.password == null && this.passwordConfirmation == null) {
              alert('La password è necessaria');
              errors = true;
            } else if (!this.passwordRegex.test(this.password)) {
              alert('La password non è valida: la password deve essere almeno 8 caratteri ' + +'e comprendere almeno un carattere minuscolo, uno maiuscolo ed un numero.');
              errors = true;
            } else if (this.password !== this.passwordConfirmation) {
              alert('Le password non corrispondono');
              errors = true;
            }

            return errors;
          }
        }]);

        return RegistrationComponent;
      }();

      exports.RegistrationComponent = RegistrationComponent;

      RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
        return new (t || RegistrationComponent)();
      };

      RegistrationComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: RegistrationComponent,
        selectors: [["app-registration"]],
        decls: 38,
        vars: 5,
        consts: [[1, "container"], [1, "card", "bg-light"], [1, "card-body", "mx-auto", 2, "max-width", "400px"], [1, "card-title", "mt-3", "text-center"], [1, "form-group", "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["id", "first-name", "name", "first-name", "placeholder", "Nome", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "last-name", "name", "last-name", "placeholder", "Cognome", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-envelope"], ["id", "email", "name", "email", "placeholder", "Email", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-lock"], ["id", "password", "name", "password", "placeholder", "Password", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "password-confirm", "name", "password-confirm", "placeholder", "Conferma password", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-opis", 3, "click"], [1, "text-center"], ["routerLink", "../login/"]],
        template: function RegistrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "article", 2);
            i0.ɵɵelementStart(3, "h4", 3);
            i0.ɵɵtext(4, "Crea un account");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "form");
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵelementStart(8, "span", 6);
            i0.ɵɵelement(9, "i", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "input", 8);
            i0.ɵɵlistener("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.firstName = $event;
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 4);
            i0.ɵɵelementStart(12, "div", 5);
            i0.ɵɵelementStart(13, "span", 6);
            i0.ɵɵelement(14, "i", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "input", 9);
            i0.ɵɵlistener("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.lastName = $event;
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 4);
            i0.ɵɵelementStart(17, "div", 5);
            i0.ɵɵelementStart(18, "span", 6);
            i0.ɵɵelement(19, "i", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "input", 11);
            i0.ɵɵlistener("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.email = $event;
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 4);
            i0.ɵɵelementStart(22, "div", 5);
            i0.ɵɵelementStart(23, "span", 6);
            i0.ɵɵelement(24, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "input", 13);
            i0.ɵɵlistener("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.password = $event;
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 4);
            i0.ɵɵelementStart(27, "div", 5);
            i0.ɵɵelementStart(28, "span", 6);
            i0.ɵɵelement(29, "i", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "input", 14);
            i0.ɵɵlistener("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.passwordConfirmation = $event;
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 15);
            i0.ɵɵelementStart(32, "button", 16);
            i0.ɵɵlistener("click", function RegistrationComponent_Template_button_click_32_listener() {
              return ctx.sendRegistrationRequest();
            });
            i0.ɵɵtext(33, " Create Account ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "p", 17);
            i0.ɵɵtext(35, "Hai gi\xE0 un account? ");
            i0.ɵɵelementStart(36, "a", 18);
            i0.ɵɵtext(37, "Log In");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngModel", ctx.firstName);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.lastName);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.email);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.password);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.passwordConfirmation);
          }
        },
        directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(RegistrationComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "67dP":
    /*!*************************************************!*\
      !*** ./src/app/services/graph/graph.service.ts ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function dP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GraphService = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var weight_service_1 = __webpack_require__(
      /*! ../weight/weight.service */
      "DApg");

      var mathjs_1 = __webpack_require__(
      /*! mathjs */
      "acA/");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! ../weight/weight.service */
      "DApg"));

      var GraphService = /*#__PURE__*/function () {
        function GraphService(weightService) {
          _classCallCheck(this, GraphService);

          this.weightService = weightService;
        }

        _createClass(GraphService, [{
          key: "round",
          value: function round(v) {
            var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            var pad = parseInt(1 + '0'.repeat(padding), 10);
            return Math.round(v * pad) / pad;
          }
        }, {
          key: "elaborateFormula",
          value: function elaborateFormula(schedeOpis) {
            var v1 = [];
            var v2 = [];
            var v3 = [];

            var _iterator = _createForOfIteratorHelper(schedeOpis),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var schedaOpis = _step.value;

                var _this$applyWeights = this.applyWeights(schedaOpis),
                    _this$applyWeights2 = _slicedToArray(_this$applyWeights, 3),
                    V1 = _this$applyWeights2[0],
                    V2 = _this$applyWeights2[1],
                    V3 = _this$applyWeights2[2];

                v1.push(V1);
                v2.push(V2);
                v3.push(V3);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var means = [this.round(mathjs_1.mean(v1)), this.round(mathjs_1.mean(v2)), this.round(mathjs_1.mean(v3))];
            return [means, [v1, v2, v3]];
          }
        }, {
          key: "applyWeights",
          value: function applyWeights(scheda) {
            var questionsWeights = this.weightService.getQuestionsWeights();
            var answersWeights = this.weightService.getAnswersWeights();
            var N = scheda.totale_schede;
            var d = 0;
            var V1 = 0;
            var V2 = 0;
            var V3 = 0;

            if (N >= 5) {
              var _loop = function _loop(j) {
                d = 0.0;
                d += scheda.domande[j][0] * answersWeights[0]; // Decisamente no

                d += scheda.domande[j][1] * answersWeights[1]; // Più no che sì

                d += scheda.domande[j][2] * answersWeights[2]; // Più sì che no

                d += scheda.domande[j][3] * answersWeights[3]; // Decisamente sì

                var domanda = questionsWeights.filter(function (question) {
                  return question.id === j + 1;
                })[0];

                if (domanda.gruppo === 'V1') {
                  V1 += d / N * domanda.peso_standard;
                } else if (domanda.gruppo === 'V2') {
                  V2 += d / N * domanda.peso_standard;
                } else if (domanda.gruppo === 'V3') {
                  V3 += d / N * domanda.peso_standard;
                }
              };

              for (var j = 0; j < scheda.domande.length; j++) {
                _loop(j);
              }
            }

            return [this.round(V1), this.round(V2), this.round(V3)];
          }
        }, {
          key: "parseInsegnamentoSchede",
          value: function parseInsegnamentoSchede(insegnamenti, subjectToSearch) {
            var insegnamentiVal = [];

            for (var i = 0; i < insegnamenti.length; i++) {
              if (insegnamenti[i].schedeopis == null) {
                continue;
              }

              if (subjectToSearch != null && insegnamenti[i].nome.toUpperCase().indexOf(subjectToSearch.toUpperCase()) === -1) {
                continue;
              }

              insegnamentiVal[i] = {};
              insegnamentiVal[i].nome = insegnamenti[i].nome;
              insegnamentiVal[i].nome_completo = insegnamenti[i].nome;

              if (insegnamentiVal[i].nome.length > 35) {
                insegnamentiVal[i].nome = insegnamentiVal[i].nome.substring(0, 35) + '... ';
              }

              if (insegnamenti[i].id_modulo !== 0 && insegnamenti[i].nome_modulo != null) {
                insegnamentiVal[i].nome += ' - ' + insegnamenti[i].nome_modulo;
                insegnamentiVal[i].nome_completo += ' -' + insegnamenti[i].nome_modulo;
              }

              if (insegnamenti[i].canale !== 'no') {
                insegnamentiVal[i].nome += ' (' + insegnamenti[i].canale + ')';
                insegnamentiVal[i].nome_completo += ' (' + insegnamenti[i].canale + ')';
              } // insegnamentiVal[i].nome += ' - ' + insegnamenti[i].schedeopis.totale_schede;


              insegnamentiVal[i].nome_completo += ' - ' + insegnamenti[i].schedeopis.totale_schede;
              insegnamentiVal[i].anno = insegnamenti[i].anno;
              insegnamentiVal[i].canale = insegnamenti[i].canale;
              insegnamentiVal[i].id_modulo = insegnamenti[i].id_modulo;
              insegnamentiVal[i].nome_modulo = insegnamenti[i].nome_modulo;
              insegnamentiVal[i].docente = insegnamenti[i].docente;
              insegnamentiVal[i].tot_schedeF = insegnamenti[i].schedeopis.totale_schede;
              insegnamentiVal[i].tot_schedeNF = insegnamenti[i].schedeopis.totale_schede_nf;
              insegnamentiVal[i].domande = insegnamenti[i].schedeopis.domande;
              /*insegnamentiVal[i].domande[0] = [];
                     let index = 0;
              for (let j = 0; j < insegnamenti[i].domande.length; j++) {
                if (j % 5 === 0 && j !== 0) {
                  index++;
                  insegnamentiVal[i].domande[index] = [];
                }
                       insegnamentiVal[i].domande[index].push(insegnamenti[i].domande[j]);
              }*/
            }

            return insegnamentiVal.filter(function (el) {
              return el != null;
            }); // remove empty slot
          }
        }]);

        return GraphService;
      }();

      exports.GraphService = GraphService;

      GraphService.ɵfac = function GraphService_Factory(t) {
        return new (t || GraphService)(i0.ɵɵinject(i1.WeightService));
      };

      GraphService.ɵprov = i0.ɵɵdefineInjectable({
        token: GraphService,
        factory: GraphService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(GraphService, [{
          type: core_1.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: i1.WeightService
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9ans":
    /*!***********************************************!*\
      !*** ./src/app/services/auth/auth.service.ts ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function ans(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AuthService = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var api_service_1 = __webpack_require__(
      /*! ../api/api.service */
      "oZWX");

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! ../api/api.service */
      "oZWX"));

      var AuthService = /*#__PURE__*/function () {
        function AuthService(apiService) {
          _classCallCheck(this, AuthService);

          this.apiService = apiService;
          this.isLogged = new rxjs_1.Subject();
          this.TOKEN_KEY = 'auth_token';
          this.TOKEN_EXP_KEY = 'auth_exp';

          if (this.authTokenIsPresent()) {
            if (this.authTokenHasExpired()) {
              this.refreshToken();
            } else {
              this.isLogged.next(true);
            }
          } else {
            this.isLogged.next(false);
          }
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(email, password) {
            var _this3 = this;

            var response = this.apiService.login(email, password);
            response.subscribe(function (data) {
              return _this3.saveToken(data);
            }, function (err) {
              return console.log(err);
            });
            return response;
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this4 = this;

            var response = this.apiService.refreshToken(localStorage.getItem(this.TOKEN_KEY).replace('bearer ', ''));
            response.subscribe(function (data) {
              return _this4.saveToken(data);
            }, function (err) {
              return console.log(err);
            });
            return response;
          }
        }, {
          key: "getAuthToken",
          value: function getAuthToken() {
            return localStorage.getItem(this.TOKEN_KEY);
          }
        }, {
          key: "authStatus",
          value: function authStatus() {
            return this.isLogged.asObservable();
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem(this.TOKEN_KEY);
            localStorage.removeItem(this.TOKEN_EXP_KEY);
            this.isLogged.next(false);
            this.removeTimeout();
          }
        }, {
          key: "saveToken",
          value: function saveToken(data) {
            var _this5 = this;

            localStorage.setItem(this.TOKEN_KEY, data.token_type + ' ' + data.access_token);
            localStorage.setItem(this.TOKEN_EXP_KEY, '' + (new Date().getTime() + data.expires_in * 1000));
            this.isLogged.next(true);
            this.removeTimeout();
            this.currentTimeoutFunction = setTimeout(function () {
              return _this5.refreshToken();
            }, data.expires_in * 1000);
          }
        }, {
          key: "removeTimeout",
          value: function removeTimeout() {
            if (this.currentTimeoutFunction != null) {
              clearTimeout(this.currentTimeoutFunction);
            }
          }
        }, {
          key: "authTokenHasExpired",
          value: function authTokenHasExpired() {
            var tokenExpiration = localStorage.getItem(this.TOKEN_EXP_KEY);

            if (tokenExpiration == null) {
              return true;
            } else {
              return parseInt(tokenExpiration, 10) <= new Date().getTime();
            }
          }
        }, {
          key: "authTokenIsPresent",
          value: function authTokenIsPresent() {
            return localStorage.getItem(this.TOKEN_KEY) != null;
          }
        }]);

        return AuthService;
      }();

      exports.AuthService = AuthService;

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(i0.ɵɵinject(i1.ApiService));
      };

      AuthService.ɵprov = i0.ɵɵdefineInjectable({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(AuthService, [{
          type: core_1.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: i1.ApiService
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function vUh(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HomeComponent = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var chart_js_1 = __webpack_require__(
      /*! chart.js */
      "MO+k");

      __webpack_require__(
      /*! chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js */
      "nzk/");

      var ChartAnnotation = tslib_1.__importStar(__webpack_require__(
      /*! chartjs-plugin-annotation */
      "Ym+k"));

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var graph_service_1 = __webpack_require__(
      /*! ../services/graph/graph.service */
      "67dP");

      var api_service_1 = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/graph/graph.service */
      "67dP"));

      var i2 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/api/api.service */
      "oZWX"));

      var i3 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/forms */
      "3Pt+"));

      var i4 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/common */
      "ofXK"));

      var i5 = tslib_1.__importStar(__webpack_require__(
      /*! ../cds/cds.component */
      "45Ll"));

      var i6 = tslib_1.__importStar(__webpack_require__(
      /*! ../academic-year/academic-year.component */
      "YqZD"));

      var i7 = tslib_1.__importStar(__webpack_require__(
      /*! ../teaching/teaching.component */
      "ATnn"));

      function HomeComponent_option_8_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "option", 10);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var department_r3 = ctx.$implicit;
          i0.ɵɵproperty("value", department_r3.id);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", department_r3.nome, " ");
        }
      }

      function HomeComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "li", 11);
          i0.ɵɵelementStart(1, "button", 12);
          i0.ɵɵlistener("click", function HomeComponent_li_12_Template_button_click_1_listener() {
            i0.ɵɵrestoreView(_r7);
            var i_r5 = ctx.index;
            var ctx_r6 = i0.ɵɵnextContext();
            return ctx_r6.getAllTeachingsOfSelectedCds(i_r5);
          });
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var i_r5 = ctx.index;
          var ctx_r1 = i0.ɵɵnextContext();
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngClass", ctx_r1.selectedCds === i_r5 ? "selected-tab" : "");
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate(ctx_r1.cds[i_r5].nome + " " + ctx_r1.cds[i_r5].classe);
        }
      }

      function HomeComponent_div_13_div_13_app_cds_1_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelement(0, "app-cds", 20);
        }

        if (rf & 2) {
          var ctx_r9 = i0.ɵɵnextContext(3);
          i0.ɵɵproperty("cdsSchede", ctx_r9.cdsWithSchede);
        }
      }

      function HomeComponent_div_13_div_13_app_academic_year_2_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelement(0, "app-academic-year", 21);
        }

        if (rf & 2) {
          var ctx_r10 = i0.ɵɵnextContext(3);
          i0.ɵɵproperty("nCds", ctx_r10.nCds)("vCds", ctx_r10.vCds)("cdsSchede", ctx_r10.cdsWithSchede);
        }
      }

      function HomeComponent_div_13_div_13_app_teaching_3_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelement(0, "app-teaching", 22);
        }

        if (rf & 2) {
          var ctx_r11 = i0.ɵɵnextContext(3);
          i0.ɵɵproperty("cds", ctx_r11.cds[ctx_r11.selectedCds])("teachings", ctx_r11.teachings)("vCds", ctx_r11.vCds)("nCds", ctx_r11.nCds);
        }
      }

      function HomeComponent_div_13_div_13_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 1);
          i0.ɵɵtemplate(1, HomeComponent_div_13_div_13_app_cds_1_Template, 1, 1, "app-cds", 17);
          i0.ɵɵtemplate(2, HomeComponent_div_13_div_13_app_academic_year_2_Template, 1, 3, "app-academic-year", 18);
          i0.ɵɵtemplate(3, HomeComponent_div_13_div_13_app_teaching_3_Template, 1, 4, "app-teaching", 19);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r8 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r8.currentOption === 0);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r8.currentOption === 1);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r8.currentOption === 2);
        }
      }

      function HomeComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div");
          i0.ɵɵelementStart(1, "div", 1);
          i0.ɵɵelementStart(2, "div", 13);
          i0.ɵɵelementStart(3, "div", 14);
          i0.ɵɵelementStart(4, "label", 15);
          i0.ɵɵlistener("click", function HomeComponent_div_13_Template_label_click_4_listener() {
            i0.ɵɵrestoreView(_r13);
            var ctx_r12 = i0.ɵɵnextContext();
            return ctx_r12.enableOption(0);
          });
          i0.ɵɵelementStart(5, "span");
          i0.ɵɵtext(6, "Corso di Studio");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(7, "label", 15);
          i0.ɵɵlistener("click", function HomeComponent_div_13_Template_label_click_7_listener() {
            i0.ɵɵrestoreView(_r13);
            var ctx_r14 = i0.ɵɵnextContext();
            return ctx_r14.enableOption(1);
          });
          i0.ɵɵelementStart(8, "span");
          i0.ɵɵtext(9, "Anno accademico");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(10, "label", 15);
          i0.ɵɵlistener("click", function HomeComponent_div_13_Template_label_click_10_listener() {
            i0.ɵɵrestoreView(_r13);
            var ctx_r15 = i0.ɵɵnextContext();
            return ctx_r15.enableOption(2);
          });
          i0.ɵɵelementStart(11, "span");
          i0.ɵɵtext(12, "Insegnamento");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵtemplate(13, HomeComponent_div_13_div_13_Template, 4, 3, "div", 16);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r2 = i0.ɵɵnextContext();
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("ngClass", ctx_r2.currentOption === 0 ? "checked" : "");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngClass", ctx_r2.currentOption === 1 ? "checked" : "");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngClass", ctx_r2.currentOption === 2 ? "checked" : "");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngIf", ctx_r2.currentOption != null);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(graphService, apiService) {
          _classCallCheck(this, HomeComponent);

          this.graphService = graphService;
          this.apiService = apiService;
          this.destroy$ = new rxjs_1.Subject();
          this.vCds = {};
          this.nCds = {};
          this.stepsYears = [];
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllDepartments(); // ChartJS Annotation plugin stuff

            var namedChartAnnotation = ChartAnnotation;
            namedChartAnnotation.id = 'annotation';
            chart_js_1.Chart.pluginService.register(namedChartAnnotation);
          }
        }, {
          key: "enableOption",
          value: function enableOption(val) {
            this.currentOption = val;
          }
        }, {
          key: "getAllDepartments",
          value: function getAllDepartments() {
            var _this6 = this;

            this.apiService.getDepartments().pipe(operators_1.take(1)).subscribe(function (data) {
              _this6.departments = data;
            });
          }
        }, {
          key: "getAllCdsOfSelectedDepartment",
          value: function getAllCdsOfSelectedDepartment(department) {
            var _this7 = this;

            this.apiService.getCDSOfDepartment(department).pipe(operators_1.take(1)).subscribe(function (data) {
              _this7.cds = data;
            });
            this.selectedCds = null;
          }
        }, {
          key: "getAllTeachingsOfSelectedCds",
          value: function getAllTeachingsOfSelectedCds(cds) {
            var _this8 = this;

            this.selectedCds = cds;
            var selectedCdsValue = this.cds[this.selectedCds];
            this.getSelectedCdsStats(selectedCdsValue);
            this.apiService.getTeachingsOfCDS(selectedCdsValue.id).pipe(operators_1.takeUntil(this.destroy$)).subscribe(function (data) {
              _this8.teachings = data;
            });
          }
        }, {
          key: "getSelectedCdsStats",
          value: function getSelectedCdsStats(cds) {
            var _this9 = this;

            this.apiService.getCDSCoarse(cds.unict_id).subscribe(function (cdsArray) {
              _this9.cdsWithSchede = cdsArray;
              var cdsSchede = cdsArray.flatMap(function (cdsCoarse) {
                return cdsCoarse.insegnamenti;
              }).filter(function (insegnamento) {
                return insegnamento.schedeopis != null;
              }).flatMap(function (insegnamento) {
                return insegnamento.schedeopis;
              }).filter(function (schedaopis) {
                return schedaopis.domande != null;
              });
              var annoSchede = rxjs_1.from(cdsSchede).pipe(operators_1.groupBy(function (scheda) {
                return scheda.anno_accademico;
              }), operators_1.mergeMap(function (group) {
                return group.pipe(operators_1.toArray());
              }));
              annoSchede.subscribe(function (schede) {
                _this9.vCds[schede[0].anno_accademico] = _this9.graphService.elaborateFormula(schede)[0];
                _this9.vCds = Object.assign({}, _this9.vCds); // copy into new object to trigger ngOnChange in child components

                _this9.nCds[schede[0].anno_accademico] = _this9.graphService.round(schede.map(function (scheda) {
                  return scheda.totale_schede;
                }).reduce(function (acc, val) {
                  return acc + val;
                }) / schede.length);
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return HomeComponent;
      }();

      exports.HomeComponent = HomeComponent;

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.GraphService), i0.ɵɵdirectiveInject(i2.ApiService));
      };

      HomeComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 14,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "text-center", "mt-3"], [1, "btn", "btn-opis", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "mt-3"], [1, "col-12"], ["id", "tabs", 1, "nav", "nav-tabs"], ["class", "nav-item tabs_button", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [1, "nav-item", "tabs_button"], [1, "btn", "btn-opis", 3, "ngClass", "click"], [1, "container-switcher"], [1, "segmented"], [3, "ngClass", "click"], ["class", "row", 4, "ngIf"], [3, "cdsSchede", 4, "ngIf"], [3, "nCds", "vCds", "cdsSchede", 4, "ngIf"], [3, "cds", "teachings", "vCds", "nCds", 4, "ngIf"], [3, "cdsSchede"], [3, "nCds", "vCds", "cdsSchede"], [3, "cds", "teachings", "vCds", "nCds"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "Scegli un dipartimento:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "select", 3);
            i0.ɵɵlistener("change", function HomeComponent_Template_select_change_5_listener($event) {
              return ctx.getAllCdsOfSelectedDepartment($event.target.value);
            });
            i0.ɵɵelementStart(6, "option");
            i0.ɵɵtext(7, "--");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, HomeComponent_option_8_Template, 2, 2, "option", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 5);
            i0.ɵɵelementStart(10, "div", 6);
            i0.ɵɵelementStart(11, "ul", 7);
            i0.ɵɵtemplate(12, HomeComponent_li_12_Template, 3, 2, "li", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, HomeComponent_div_13_Template, 14, 4, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.departments);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.cds);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.selectedCds != null);
          }
        },
        directives: [i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i4.NgForOf, i4.NgIf, i4.NgClass, i5.CdsComponent, i6.AcademicYearComponent, i7.TeachingComponent],
        styles: [".container-switcher[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  padding: 3px;\n  top: 13px;\n  margin: 0px 0;\n  width: 400px;\n}\n\n.segmented[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  box-sizing: border-box;\n  font-family: \"Helvetica Neue\";\n  font-size: 90%;\n  text-align: center;\n}\n\n.segmented[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: 1px solid darkgrey;\n  border-right: none;\n  color: #00695c;\n  margin: 0;\n  padding: 10px;\n  height: 50px;\n  text-align: center;\n  display: table;\n  flex: 1;\n  transition: 0.5s all;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  cursor: pointer;\n}\n\n.segmented[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.4em 0 0 0.4em;\n  border-right: 0;\n}\n\n.segmented[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.4em 0.4em 0;\n  border-right: 1px solid;\n}\n\n.segmented[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover, .segmented[_ngcontent-%COMP%]   label.checked[_ngcontent-%COMP%] {\n  background: #00897b;\n  color: #fff;\n  transition: 0.5s all;\n}\n\n.segmented[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.segmented[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n  margin: 0;\n  position: absolute;\n}\n\napp-academic-year[_ngcontent-%COMP%], app-teaching[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtFO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F6QlM7RUEwQlQsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUVBLG9CQUFBO0VBQ0Esc0JBQUE7R0FBQSxxQkFBQTtPQUFBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBTUk7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUFKTjs7QUFPSTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUFMTjs7QUFRSTtFQUNFLG1CQS9DTztFQWdEUCxXQWpEUTtFQWtEUixvQkFBQTtBQU5OOztBQVNJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQVBOOztBQVVJO0VBQ0UscUJBQUE7T0FBQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBUk47O0FBYUE7RUFDRSxXQUFBO0FBVkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JfZGFyazogIzAwNjk1YztcbiRjb2xvcl9saWdodDogI2ZmZjtcbiRjb2xvcl9tYWluOiAjMDA4OTdiO1xuXG4uY29udGFpbmVyLXN3aXRjaGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogM3B4O1xuICB0b3A6IDEzcHg7XG4gIG1hcmdpbjogMHB4IDA7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLnNlZ21lbnRlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCI7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgbGFiZWwge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGNvbG9yOiAkY29sb3JfZGFyaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGZsZXg6IDE7XG5cbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAuNGVtIDAgMCAuNGVtO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIC40ZW0gLjRlbSAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG4gICAgfVxuXG4gICAgJjpob3ZlciwgJi5jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvcl9tYWluO1xuICAgICAgY29sb3I6ICRjb2xvcl9saWdodDtcbiAgICAgIHRyYW5zaXRpb246IC41cyBhbGw7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gIH1cbn1cblxuYXBwLWFjYWRlbWljLXllYXIsIGFwcC10ZWFjaGluZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(HomeComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: i1.GraphService
          }, {
            type: i2.ApiService
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ATnn":
    /*!************************************************!*\
      !*** ./src/app/teaching/teaching.component.ts ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function ATnn(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TeachingComponent = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var chart_js_1 = __webpack_require__(
      /*! chart.js */
      "MO+k");

      var mathjs_1 = __webpack_require__(
      /*! mathjs */
      "acA/");

      var graph_service_1 = __webpack_require__(
      /*! ../services/graph/graph.service */
      "67dP");

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var api_service_1 = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");

      var utils_1 = __webpack_require__(
      /*! ../utils/utils */
      "oCjk");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/api/api.service */
      "oZWX"));

      var i2 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/graph/graph.service */
      "67dP"));

      var i3 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/forms */
      "3Pt+"));

      var i4 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/common */
      "ofXK"));

      var i5 = tslib_1.__importStar(__webpack_require__(
      /*! ../value-details/value-details.component */
      "OsNX"));

      var i6 = tslib_1.__importStar(__webpack_require__(
      /*! @m0t0r/ngx-slider */
      "pFeF"));

      function TeachingComponent_option_7_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "option", 7);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var i_r4 = ctx.index;
          var ctx_r0 = i0.ɵɵnextContext();
          i0.ɵɵproperty("ngValue", i_r4);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate3(" ", ctx_r0.teachings[i_r4].nome, " ", ctx_r0.teachings[i_r4].canale != "no" && ctx_r0.teachings[i_r4].canale != "" ? "(" + ctx_r0.teachings[i_r4].canale + ")" : "", " ", ctx_r0.teachings[i_r4].nome_modulo != null ? " - " + ctx_r0.teachings[i_r4].nome_modulo : "", " ");
        }
      }

      function TeachingComponent_div_9_div_15_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 18);
          i0.ɵɵelementStart(1, "div", 19);
          i0.ɵɵelementStart(2, "div", 20);
          i0.ɵɵelementStart(3, "h5", 21);
          i0.ɵɵtext(4, "Codice Insegnamento: ");
          i0.ɵɵelementStart(5, "b");
          i0.ɵɵtext(6);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(7, "div", 22);
          i0.ɵɵelementStart(8, "div", 23);
          i0.ɵɵelement(9, "div", 24);
          i0.ɵɵelementStart(10, "div", 24);
          i0.ɵɵelementStart(11, "b");
          i0.ɵɵtext(12, "Valutazione");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(13, "div", 24);
          i0.ɵɵelementStart(14, "b");
          i0.ɵɵtext(15, "N. schede");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(16, "div", 23);
          i0.ɵɵelementStart(17, "div", 24);
          i0.ɵɵelementStart(18, "b");
          i0.ɵɵtext(19, "Media CDS");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelement(20, "div", 25);
          i0.ɵɵelement(21, "div", 26);
          i0.ɵɵelement(22, "div", 27);
          i0.ɵɵelement(23, "div", 28);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(24, "div", 23);
          i0.ɵɵelementStart(25, "div", 24);
          i0.ɵɵelementStart(26, "b");
          i0.ɵɵtext(27, "Media Ins.");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelement(28, "div", 29);
          i0.ɵɵelement(29, "div", 30);
          i0.ɵɵelement(30, "div", 31);
          i0.ɵɵelement(31, "div", 32);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(32, "div", 23);
          i0.ɵɵelementStart(33, "div", 24);
          i0.ɵɵelementStart(34, "b");
          i0.ɵɵtext(35, "Varianza");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelement(36, "div", 33);
          i0.ɵɵelement(37, "div", 34);
          i0.ɵɵelement(38, "div", 35);
          i0.ɵɵelement(39, "div", 36);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(40, "div", 23);
          i0.ɵɵelementStart(41, "div", 24);
          i0.ɵɵelementStart(42, "b");
          i0.ɵɵtext(43, "Dev. std.");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelement(44, "div", 37);
          i0.ɵɵelement(45, "div", 38);
          i0.ɵɵelement(46, "div", 39);
          i0.ɵɵelement(47, "div", 40);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r5 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", !ctx_r5.showTeachingStats);
          i0.ɵɵadvance(5);
          i0.ɵɵtextInterpolate3("", ctx_r5.teachings[ctx_r5.selectedTeaching].codice_gomp, " ", ctx_r5.teachings[ctx_r5.selectedTeaching].canale, " ", ctx_r5.teachings[ctx_r5.selectedTeaching].nome_modulo, " ");
          i0.ɵɵadvance(14);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 1);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 3);
          i0.ɵɵadvance(6);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 1);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 3);
          i0.ɵɵadvance(6);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 1);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 3);
          i0.ɵɵadvance(6);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 1);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r5.switcherValues != 3);
        }
      }

      function TeachingComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div");
          i0.ɵɵelementStart(1, "ul", 8);
          i0.ɵɵelementStart(2, "li", 9);
          i0.ɵɵelementStart(3, "button", 10);
          i0.ɵɵlistener("click", function TeachingComponent_div_9_Template_button_click_3_listener() {
            i0.ɵɵrestoreView(_r7);
            var ctx_r6 = i0.ɵɵnextContext();
            return ctx_r6.switchVal(1);
          });
          i0.ɵɵtext(4, "V1");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(5, "li", 9);
          i0.ɵɵelementStart(6, "button", 10);
          i0.ɵɵlistener("click", function TeachingComponent_div_9_Template_button_click_6_listener() {
            i0.ɵɵrestoreView(_r7);
            var ctx_r8 = i0.ɵɵnextContext();
            return ctx_r8.switchVal(2);
          });
          i0.ɵɵtext(7, "V2");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(8, "li", 9);
          i0.ɵɵelementStart(9, "button", 10);
          i0.ɵɵlistener("click", function TeachingComponent_div_9_Template_button_click_9_listener() {
            i0.ɵɵrestoreView(_r7);
            var ctx_r9 = i0.ɵɵnextContext();
            return ctx_r9.switchVal(3);
          });
          i0.ɵɵtext(10, "V3");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(11, "li", 11);
          i0.ɵɵlistener("click", function TeachingComponent_div_9_Template_li_click_11_listener() {
            i0.ɵɵrestoreView(_r7);
            var ctx_r10 = i0.ɵɵnextContext();
            return ctx_r10.toggleStats();
          });
          i0.ɵɵelementStart(12, "button", 12);
          i0.ɵɵtext(13, "Stats");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelement(14, "br");
          i0.ɵɵtemplate(15, TeachingComponent_div_9_div_15_Template, 48, 16, "div", 13);
          i0.ɵɵelement(16, "app-value-details", 14);
          i0.ɵɵelement(17, "div", 15);
          i0.ɵɵelement(18, "div", 16);
          i0.ɵɵelement(19, "div", 17);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1 = i0.ɵɵnextContext();
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngClass", ctx_r1.switcherValues === 1 ? "selected-tab" : "");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngClass", ctx_r1.switcherValues === 2 ? "selected-tab" : "");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngClass", ctx_r1.switcherValues === 3 ? "selected-tab" : "");
          i0.ɵɵadvance(6);
          i0.ɵɵproperty("ngIf", ctx_r1.selectedTeaching != null);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("switcher", ctx_r1.switcherValues);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r1.switcherValues != 1);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r1.switcherValues != 2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("hidden", ctx_r1.switcherValues != 3);
        }
      }

      function TeachingComponent_ngx_slider_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "ngx-slider", 41);
          i0.ɵɵlistener("valueChange", function TeachingComponent_ngx_slider_13_Template_ngx_slider_valueChange_0_listener($event) {
            i0.ɵɵrestoreView(_r12);
            var ctx_r11 = i0.ɵɵnextContext();
            return ctx_r11.minValue = $event;
          })("valueChange", function TeachingComponent_ngx_slider_13_Template_ngx_slider_valueChange_0_listener() {
            i0.ɵɵrestoreView(_r12);
            var ctx_r13 = i0.ɵɵnextContext();
            return ctx_r13.updateTeachingChart();
          });
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r2 = i0.ɵɵnextContext();
          i0.ɵɵproperty("value", ctx_r2.minValue)("highValue", ctx_r2.maxValue)("options", ctx_r2.optionsSlider)("manualRefresh", ctx_r2.manualRefresh);
        }
      }

      var TeachingComponent = /*#__PURE__*/function () {
        function TeachingComponent(apiService, graphService) {
          var _this10 = this;

          _classCallCheck(this, TeachingComponent);

          this.apiService = apiService;
          this.graphService = graphService;
          this.destroy$ = new rxjs_1.Subject();
          this.selectedTeaching = null;
          this.showTeachingStats = false;
          this.switcherValues = 1;
          /* years slider */

          this.manualRefresh = new core_1.EventEmitter();
          this.minValue = 1;
          this.maxValue = 1;
          this.CONF = utils_1.getConf();
          this.optionsSlider = {
            floor: 1,
            ceil: 8,
            showTicksValues: true,
            getLegend: function getLegend(value) {
              return _this10.CONF.years[value - 1];
            }
          };
        }

        _createClass(TeachingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initOptions();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.hasOwnProperty('teachings')) {
              changes.teachings.currentValue.sort(function (a, b) {
                if (a.nome < b.nome) {
                  return -1;
                } else if (a.nome > b.nome) {
                  return 1;
                } else {
                  return 0;
                }
              });
            }
          }
        }, {
          key: "initOptions",
          value: function initOptions() {
            var _this11 = this;

            this.maxValue = this.CONF.years.length;
            this.optionsSlider = {
              floor: 1,
              ceil: this.maxValue,
              showTicksValues: true,
              getLegend: function getLegend(value) {
                return _this11.CONF.years[value - 1];
              }
            };
            this.manualRefresh.emit();
          } // TODO: refactor / remove or use Output()

        }, {
          key: "switchVal",
          value: function switchVal(v) {
            this.switcherValues = v;
          }
        }, {
          key: "toggleStats",
          value: function toggleStats() {
            this.showTeachingStats = !this.showTeachingStats;
          }
        }, {
          key: "showTeachingChart",
          value: function showTeachingChart(teachingResults) {
            var _this12 = this;

            var teachingName = document.getElementById('selTeaching');
            teachingName = this.teachings[this.selectedTeaching].nome;
            var charts = [];
            var matr = [[], [], []];

            var yearsArray = _toConsumableArray(this.CONF.years).splice(this.minValue - 1, this.maxValue - this.minValue + 1);

            for (var i = 0; i < teachingResults.length; i++) {
              if (!yearsArray.includes(teachingResults[i].anno)) {
                teachingResults.splice(i--, 1);
              }
            }

            var j = 0;

            for (var _i2 = 0, _Object$keys = Object.keys(yearsArray); _i2 < _Object$keys.length; _i2++) {
              var _i3 = _Object$keys[_i2];

              if (j < teachingResults.length && yearsArray[_i3] === teachingResults[j].anno) {
                matr[0].push(this.graphService.round(teachingResults[j].v1));
                matr[1].push(this.graphService.round(teachingResults[j].v2));
                matr[2].push(this.graphService.round(teachingResults[j].v3));
                j++;
              } else {
                matr[0].push(0);
                matr[1].push(0);
                matr[2].push(0);
              }
            }

            var teachingMean = [[], [], []];
            var cdsMean = [[], [], []];

            for (var _i4 = 0; _i4 < this.CONF.years.length; _i4++) {
              var _loop2 = function _loop2(v) {
                teachingMean[v][_i4] = _this12.graphService.round(mathjs_1.mean(_this12.filterZero(matr[v])));
                cdsMean[v][_i4] = _this12.graphService.round(mathjs_1.mean(Object.values(_this12.vCds).map(function (array) {
                  return array[v];
                })));
              };

              for (var v = 0; v < 3; v++) {
                _loop2(v);
              }
            }

            this.calculateTeachingStats(matr);
            var colorV1 = {
              fill: false,
              backgroundColor: '',
              borderColor: '#00897b'
            },
                colorV2 = {
              fill: false,
              backgroundColor: '#521a7d',
              borderColor: '#521a7d'
            },
                colorV3 = {
              fill: false,
              backgroundColor: '#a69319',
              borderColor: '#a69319'
            },
                colorV4 = {
              fill: false,
              backgroundColor: '#ffa500',
              borderColor: '#ffa500'
            }; // line graphs config

            var _loop3 = function _loop3(_i5) {
              var config = {
                type: 'line',
                data: {
                  labels: yearsArray,
                  datasets: [Object.assign(Object.assign({
                    label: 'V' + _i5
                  }, colorV1), {
                    data: matr[_i5 - 1]
                  }), Object.assign(Object.assign({
                    label: 'V' + _i5 + ' CDS'
                  }, colorV2), {
                    data: Object.values(_this12.vCds).map(function (array) {
                      return _this12.graphService.round(array[_i5 - 1]);
                    })
                  }), Object.assign(Object.assign({
                    label: 'Media Insegnamento'
                  }, colorV3), {
                    data: teachingMean[_i5 - 1],
                    pointRadius: 1
                  }), Object.assign(Object.assign({
                    label: 'Media CDS'
                  }, colorV4), {
                    data: cdsMean[_i5 - 1],
                    pointRadius: 1
                  })]
                },
                options: {
                  responsive: true,
                  title: {
                    display: true,
                    text: "".concat(teachingName, " V") + _i5
                  },
                  tooltips: {
                    mode: 'index',
                    intersect: false
                  },
                  hover: {
                    mode: 'nearest',
                    intersect: true
                  },
                  scales: {
                    xAxes: [{
                      display: true,
                      ticks: {
                        beginAtZero: true
                      },
                      scaleLabel: {
                        display: true,
                        labelString: 'Anno accademico'
                      }
                    }],
                    yAxes: [{
                      display: true,
                      ticks: {
                        beginAtZero: true
                      },
                      scaleLabel: {
                        display: true,
                        labelString: 'V' + _i5
                      }
                    }]
                  }
                }
              };
              document.getElementById('v' + _i5 + '-teaching').innerHTML = '<div style="width: 80%; margin: 0 auto;"><canvas id="V' + _i5 + '"></canvas></div>';
              var ctx = document.getElementById('V' + _i5).getContext('2d');
              charts.push(new chart_js_1.Chart(ctx, config));
            };

            for (var _i5 = 1; _i5 <= 3; _i5++) {
              _loop3(_i5);
            }
          }
        }, {
          key: "updateTeachingChart",
          value: function updateTeachingChart() {
            var _this13 = this;

            if (this.selectedTeaching == null) {
              return;
            }

            var teaching = this.teachings[this.selectedTeaching]; // get new data (schede) of the selected teaching

            this.apiService.getSchedeOfTeaching(teaching.codice_gomp, teaching.canale, teaching.id_modulo).pipe(operators_1.takeUntil(this.destroy$)).subscribe(function (schede) {
              var anniAccademici = [];

              for (var _i6 = 0, _Object$keys2 = Object.keys(schede); _i6 < _Object$keys2.length; _i6++) {
                var i = _Object$keys2[_i6];
                anniAccademici[i] = {};
                anniAccademici[i].anno = schede[i].anno_accademico;

                var _this13$graphService$ = _this13.graphService.applyWeights(schede[i]);

                var _this13$graphService$2 = _slicedToArray(_this13$graphService$, 3);

                anniAccademici[i].v1 = _this13$graphService$2[0];
                anniAccademici[i].v2 = _this13$graphService$2[1];
                anniAccademici[i].v3 = _this13$graphService$2[2];
                anniAccademici[i].totale_schede = schede[i].totale_schede + schede[i].totale_schede_nf;
              }

              _this13.selectedTeachingSchede = anniAccademici; // refresh the chart

              _this13.showTeachingChart(anniAccademici);
            });
            this.manualRefresh.emit(); // refresh years slider
          }
        }, {
          key: "calculateTeachingStats",
          value: function calculateTeachingStats(matr) {
            var _this14 = this;

            var _loop4 = function _loop4(i) {
              var teachingValues = _this14.filterZero(matr[i]);

              var mediaCDS = mathjs_1.mean(Object.values(_this14.vCds).map(function (array) {
                return array[i];
              }));
              var mediaInsegnamento = mathjs_1.mean(teachingValues);
              document.getElementById('v' + (i + 1) + '-cds-mean').innerHTML = "".concat(mediaCDS.toFixed(2));
              document.getElementById('v' + (i + 1) + '-ins-mean').innerHTML = "<span style=\"color:".concat(_this14.getLabelColor(mediaInsegnamento, mediaCDS), ";\">").concat(mediaInsegnamento.toFixed(2), "</span>");
              document.getElementById('v' + (i + 1) + '-var').innerHTML = "".concat(mathjs_1.variance(teachingValues).toFixed(3));
              document.getElementById('v' + (i + 1) + '-devstd').innerHTML = "".concat(mathjs_1.std(teachingValues).toFixed(3));
            };

            for (var i = 0; i < 3; i++) {
              _loop4(i);
            }

            var teachingSchede = this.filterZero(this.selectedTeachingSchede.map(function (t) {
              return t.totale_schede;
            }));
            var nMediaCDS = mathjs_1.mean(Object.values(this.nCds));
            var nMediaInsegnamento = mathjs_1.mean(teachingSchede);
            document.getElementById('n-cds-mean').innerHTML = "".concat(nMediaCDS.toFixed(2));
            document.getElementById('n-ins-mean').innerHTML = "<span style=\"color:".concat(this.getLabelColor(nMediaInsegnamento, nMediaCDS, 10), "\">").concat(nMediaInsegnamento.toFixed(2), "</span>");
            document.getElementById('n-var').innerHTML = "".concat(mathjs_1.variance(teachingSchede).toFixed(3));
            document.getElementById('n-devstd').innerHTML = "".concat(mathjs_1.std(teachingSchede).toFixed(3));
          }
        }, {
          key: "getLabelColor",
          value: function getLabelColor(mediaInsegnamento, mediaCDS) {
            var divider = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            var color = 'black';

            if (Math.round(mediaInsegnamento / divider) < Math.round(mediaCDS / divider)) {
              color = 'red';
            } else if (Math.round(mediaInsegnamento / divider) > Math.round(mediaCDS / divider)) {
              color = 'green';
            }

            return color;
          }
        }, {
          key: "filterZero",
          value: function filterZero(array) {
            var cleanedArray = array.filter(function (item) {
              return item !== 0 && !isNaN(item);
            });
            return cleanedArray.length > 0 ? cleanedArray : [0];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return TeachingComponent;
      }();

      exports.TeachingComponent = TeachingComponent;

      TeachingComponent.ɵfac = function TeachingComponent_Factory(t) {
        return new (t || TeachingComponent)(i0.ɵɵdirectiveInject(i1.ApiService), i0.ɵɵdirectiveInject(i2.GraphService));
      };

      TeachingComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: TeachingComponent,
        selectors: [["app-teaching"]],
        inputs: {
          cds: "cds",
          teachings: "teachings",
          vCds: "vCds",
          nCds: "nCds"
        },
        features: [i0.ɵɵNgOnChangesFeature],
        decls: 16,
        vars: 4,
        consts: [[1, "text-center"], [1, "list-option-container"], ["id", "selTeaching", 1, "btn", "btn-opis", "text-center", 3, "ngModel", "ngModelChange"], ["class", "text-center", 3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "custom-slider", "slider-years", "mb-5", 2, "width", "500px"], ["class", "addons-bar", 3, "value", "highValue", "options", "manualRefresh", "valueChange", 4, "ngIf"], [1, "text-center", 3, "ngValue"], ["id", "tabs", 1, "nav", "nav-tabs"], [1, "nav-item", "tabs_button"], [1, "btn", "btn-opis", 3, "ngClass", "click"], [1, "nav-item-right", "tabs_button", 3, "click"], [1, "btn", "btn-opis"], ["id", "teaching-stats", 4, "ngIf"], [3, "switcher"], ["id", "v1-teaching", 3, "hidden"], ["id", "v2-teaching", 3, "hidden"], ["id", "v3-teaching", 3, "hidden"], ["id", "teaching-stats"], [1, "card", 2, "margin-bottom", "20px", 3, "hidden"], [1, "card-body"], [1, "card-title"], [1, "container"], [1, "row"], [1, "col-2"], ["id", "v1-cds-mean", 1, "col-2", 3, "hidden"], ["id", "v2-cds-mean", 1, "col-2", 3, "hidden"], ["id", "v3-cds-mean", 1, "col-2", 3, "hidden"], ["id", "n-cds-mean", 1, "col-2"], ["id", "v1-ins-mean", 1, "col-2", 3, "hidden"], ["id", "v2-ins-mean", 1, "col-2", 3, "hidden"], ["id", "v3-ins-mean", 1, "col-2", 3, "hidden"], ["id", "n-ins-mean", 1, "col-2"], ["id", "v1-var", 1, "col-2", 3, "hidden"], ["id", "v2-var", 1, "col-2", 3, "hidden"], ["id", "v3-var", 1, "col-2", 3, "hidden"], ["id", "n-var", 1, "col-2"], ["id", "v1-devstd", 1, "col-2", 3, "hidden"], ["id", "v2-devstd", 1, "col-2", 3, "hidden"], ["id", "v3-devstd", 1, "col-2", 3, "hidden"], ["id", "n-devstd", 1, "col-2"], [1, "addons-bar", 3, "value", "highValue", "options", "manualRefresh", "valueChange"]],
        template: function TeachingComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtext(2, " Seleziona insegnamento: ");
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementStart(4, "select", 2);
            i0.ɵɵlistener("ngModelChange", function TeachingComponent_Template_select_ngModelChange_4_listener($event) {
              return ctx.selectedTeaching = $event;
            })("ngModelChange", function TeachingComponent_Template_select_ngModelChange_4_listener() {
              return ctx.updateTeachingChart();
            });
            i0.ɵɵelementStart(5, "option", 0);
            i0.ɵɵtext(6, "--");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, TeachingComponent_option_7_Template, 2, 4, "option", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div");
            i0.ɵɵtemplate(9, TeachingComponent_div_9_Template, 20, 8, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "br");
            i0.ɵɵelement(11, "br");
            i0.ɵɵelementStart(12, "div", 5);
            i0.ɵɵtemplate(13, TeachingComponent_ngx_slider_13_Template, 1, 4, "ngx-slider", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "br");
            i0.ɵɵelement(15, "br");
          }

          if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.selectedTeaching);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.teachings);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.selectedTeaching != null);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.selectedTeaching);
          }
        },
        directives: [i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i4.NgForOf, i4.NgIf, i4.NgClass, i5.ValueDetailsComponent, i6.SliderComponent],
        styles: [".nav-item-right[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.slider-years[_ngcontent-%COMP%] {\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hpbmcvdGVhY2hpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hpbmcvdGVhY2hpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWl0ZW0tcmlnaHQge1xuICBAZXh0ZW5kIC5uYXYtaXRlbSAhb3B0aW9uYWw7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc2xpZGVyLXllYXJzIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(TeachingComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'app-teaching',
            templateUrl: './teaching.component.html',
            styleUrls: ['./teaching.component.scss']
          }]
        }], function () {
          return [{
            type: i1.ApiService
          }, {
            type: i2.GraphService
          }];
        }, {
          cds: [{
            type: core_1.Input
          }],
          teachings: [{
            type: core_1.Input
          }],
          vCds: [{
            type: core_1.Input
          }],
          nCds: [{
            type: core_1.Input
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function AytR(module, exports, __webpack_require__) {
      "use strict"; // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.environment = void 0;
      exports.environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DApg":
    /*!***************************************************!*\
      !*** ./src/app/services/weight/weight.service.ts ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function DApg(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WeightService = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var api_service_1 = __webpack_require__(
      /*! ../api/api.service */
      "oZWX");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var auth_service_1 = __webpack_require__(
      /*! ../auth/auth.service */
      "9ans");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! ../api/api.service */
      "oZWX"));

      var i2 = tslib_1.__importStar(__webpack_require__(
      /*! ../auth/auth.service */
      "9ans"));

      var WeightService = /*#__PURE__*/function () {
        function WeightService(apiService, authService) {
          var _this15 = this;

          _classCallCheck(this, WeightService);

          this.apiService = apiService;
          this.authService = authService;
          this.apiService.getDomandePesi().pipe(operators_1.take(1)).subscribe(function (pesi) {
            _this15.questionsWeights = pesi;
          });
          this.answersWeights = [1, 4, 7, 10];
        }

        _createClass(WeightService, [{
          key: "getQuestionsWeights",
          value: function getQuestionsWeights() {
            return this.questionsWeights;
          }
        }, {
          key: "updateQuestionsWeights",
          value: function updateQuestionsWeights() {
            return this.apiService.updateDomandePesi(this.questionsWeights, this.authService.getAuthToken());
          }
        }, {
          key: "getAnswersWeights",
          value: function getAnswersWeights() {
            return this.answersWeights;
          }
        }]);

        return WeightService;
      }();

      exports.WeightService = WeightService;

      WeightService.ɵfac = function WeightService_Factory(t) {
        return new (t || WeightService)(i0.ɵɵinject(i1.ApiService), i0.ɵɵinject(i2.AuthService));
      };

      WeightService.ɵprov = i0.ɵɵdefineInjectable({
        token: WeightService,
        factory: WeightService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(WeightService, [{
          type: core_1.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: i1.ApiService
          }, {
            type: i2.AuthService
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OsNX":
    /*!**********************************************************!*\
      !*** ./src/app/value-details/value-details.component.ts ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function OsNX(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ValueDetailsComponent = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var free_solid_svg_icons_1 = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb"));

      var i2 = tslib_1.__importStar(__webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV"));

      var ValueDetailsComponent = function ValueDetailsComponent() {
        _classCallCheck(this, ValueDetailsComponent);

        this.faInfo = free_solid_svg_icons_1.faInfo;
        this.v1Info = false;
        this.v2Info = false;
        this.v3Info = false;
      };

      exports.ValueDetailsComponent = ValueDetailsComponent;

      ValueDetailsComponent.ɵfac = function ValueDetailsComponent_Factory(t) {
        return new (t || ValueDetailsComponent)();
      };

      ValueDetailsComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: ValueDetailsComponent,
        selectors: [["app-value-details"]],
        inputs: {
          switcher: "switcher"
        },
        decls: 87,
        vars: 9,
        consts: [["id", "v1-container", 3, "hidden"], [1, "text-center"], ["type", "button", 1, "btn", "btn-opis", 3, "click"], ["size", "lg", 3, "icon"], [1, "v-info", 3, "ngbCollapse"], [1, "table", "table-bordered"], ["id", "v2-container", 3, "hidden"], ["id", "v3-container", 3, "hidden"]],
        template: function ValueDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h2", 1);
            i0.ɵɵtext(2, " V1 - Come lo studente vede il corso ");
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function ValueDetailsComponent_Template_button_click_3_listener() {
              return ctx.v1Info = !ctx.v1Info;
            });
            i0.ɵɵelement(4, "fa-icon", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelementStart(6, "table", 5);
            i0.ɵɵelementStart(7, "thead");
            i0.ɵɵelementStart(8, "tr");
            i0.ɵɵelementStart(9, "th");
            i0.ɵɵtext(10, "Domande");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "th");
            i0.ɵɵtext(12, "Pesi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "tbody");
            i0.ɵɵelementStart(14, "tr");
            i0.ɵɵelementStart(15, "td");
            i0.ɵɵtext(16, "1 - Le conoscenze preliminari possedute sono risultate sufficienti per la comprensione degli argomenti previsti nel programma d'esame?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "td");
            i0.ɵɵtext(18, "0.7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "tr");
            i0.ɵɵelementStart(20, "td");
            i0.ɵɵtext(21, "2 - Il carico di studio dell'insegnamento \xE8 proporzionato ai crediti assegnati?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "td");
            i0.ɵɵtext(23, "0.3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 6);
            i0.ɵɵelementStart(25, "h2", 1);
            i0.ɵɵtext(26, " V2 - Come lo studente vede il docente ");
            i0.ɵɵelementStart(27, "button", 2);
            i0.ɵɵlistener("click", function ValueDetailsComponent_Template_button_click_27_listener() {
              return ctx.v2Info = !ctx.v2Info;
            });
            i0.ɵɵelement(28, "fa-icon", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 4);
            i0.ɵɵelementStart(30, "table", 5);
            i0.ɵɵelementStart(31, "thead");
            i0.ɵɵelementStart(32, "tr");
            i0.ɵɵelementStart(33, "th");
            i0.ɵɵtext(34, "Domande");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "th");
            i0.ɵɵtext(36, "Pesi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "tbody");
            i0.ɵɵelementStart(38, "tr");
            i0.ɵɵelementStart(39, "td");
            i0.ɵɵtext(40, "4 - Le modalit\xE0 di esame sono state definite in modo chiaro?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "td");
            i0.ɵɵtext(42, "0.1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "tr");
            i0.ɵɵelementStart(44, "td");
            i0.ɵɵtext(45, "5 - Gli orari di svolgimento di lezioni, esercitazioni e altre eventuali attivit\xE0 didattiche sono rispettati?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "td");
            i0.ɵɵtext(47, "0.3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "tr");
            i0.ɵɵelementStart(49, "td");
            i0.ɵɵtext(50, "9 - L'insegnamento \xE8 stato svolto in maniera coerente con quanto dichiarato sul sito web del corso di studio?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "td");
            i0.ɵɵtext(52, "0.3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "tr");
            i0.ɵɵelementStart(54, "td");
            i0.ɵɵtext(55, "10 - Il docente \xE8 reperibile per chiarimenti e spiegazioni?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "td");
            i0.ɵɵtext(57, "0.3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "div", 7);
            i0.ɵɵelementStart(59, "h2", 1);
            i0.ɵɵtext(60, " V3 - Come il docente interagisce con lo studente ");
            i0.ɵɵelementStart(61, "button", 2);
            i0.ɵɵlistener("click", function ValueDetailsComponent_Template_button_click_61_listener() {
              return ctx.v3Info = !ctx.v3Info;
            });
            i0.ɵɵelement(62, "fa-icon", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "div", 4);
            i0.ɵɵelementStart(64, "table", 5);
            i0.ɵɵelementStart(65, "thead");
            i0.ɵɵelementStart(66, "tr");
            i0.ɵɵelementStart(67, "th");
            i0.ɵɵtext(68, "Domande");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "th");
            i0.ɵɵtext(70, "Pesi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "tbody");
            i0.ɵɵelementStart(72, "tr");
            i0.ɵɵelementStart(73, "td");
            i0.ɵɵtext(74, "3 - Il materiale didattico (indicato e disponibile) \xE8 adeguato per lo studio della materia? ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "td");
            i0.ɵɵtext(76, "0.1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "tr");
            i0.ɵɵelementStart(78, "td");
            i0.ɵɵtext(79, "6 - Il docente stimola/motiva l'interesse verso la disciplina?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "td");
            i0.ɵɵtext(81, "0.5");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "tr");
            i0.ɵɵelementStart(83, "td");
            i0.ɵɵtext(84, "7 - Il docente espone gli argomenti in modo chiaro?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "td");
            i0.ɵɵtext(86, "0.4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵproperty("hidden", ctx.switcher != 1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("icon", ctx.faInfo);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngbCollapse", !ctx.v1Info);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("hidden", ctx.switcher != 2);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("icon", ctx.faInfo);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngbCollapse", !ctx.v2Info);
            i0.ɵɵadvance(29);
            i0.ɵɵproperty("hidden", ctx.switcher != 3);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("icon", ctx.faInfo);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngbCollapse", !ctx.v3Info);
          }
        },
        directives: [i1.FaIconComponent, i2.NgbCollapse],
        styles: [".v-info[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 900px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsdWUtZGV0YWlscy92YWx1ZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVlLWRldGFpbHMvdmFsdWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52LWluZm8ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDkwMHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(ValueDetailsComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'app-value-details',
            templateUrl: './value-details.component.html',
            styleUrls: ['./value-details.component.scss']
          }]
        }], null, {
          switcher: [{
            type: core_1.Input
          }]
        });
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! no static exports found */

    /***/
    function Sy1n(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AppComponent = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var animations_1 = __webpack_require__(
      /*! ./utils/animations */
      "xDih");

      var free_brands_svg_icons_1 = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");

      var auth_service_1 = __webpack_require__(
      /*! ./services/auth/auth.service */
      "9ans");

      var router_1 = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! ./services/auth/auth.service */
      "9ans"));

      var i2 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/router */
      "tyNb"));

      var i3 = tslib_1.__importStar(__webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV"));

      var i4 = tslib_1.__importStar(__webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb"));

      var i5 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/common */
      "ofXK"));

      function AppComponent_li_20_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "li", 9);
          i0.ɵɵelementStart(1, "a", 17);
          i0.ɵɵtext(2, "Login");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }
      }

      function AppComponent_li_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "li", 9);
          i0.ɵɵelementStart(1, "a", 18);
          i0.ɵɵlistener("click", function AppComponent_li_21_Template_a_click_1_listener() {
            i0.ɵɵrestoreView(_r4);
            var ctx_r3 = i0.ɵɵnextContext();
            return ctx_r3.logout();
          });
          i0.ɵɵtext(2, "Logout");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authService, router) {
          _classCallCheck(this, AppComponent);

          this.authService = authService;
          this.router = router;
          this.faGithub = free_brands_svg_icons_1.faGithub;
          this.isLogged = false;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            if (this.authService.authTokenIsPresent() && !this.authService.authTokenHasExpired()) {
              this.isLogged = true;
            }

            this.authService.authStatus().subscribe(function (status) {
              return _this16.isLogged = status;
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigate(['/login']);
          }
        }]);

        return AppComponent;
      }();

      exports.AppComponent = AppComponent;

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router));
      };

      AppComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 25,
        vars: 4,
        consts: [[1, "navbar", "navbar-expand-lg", "opis-nav"], [1, "container"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "nav", "nav-tabs"], [1, "nav-item", "opis-logo-menu"], ["id", "home-tab", "data-toggle", "tab", "routerLink", "/", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link"], ["src", "assets/logo.png"], [1, "nav-item"], ["id", "formula-tab", "data-toggle", "tab", "routerLink", "/formula", "role", "tab", "aria-controls", "formula", "aria-selected", "false", 1, "nav-link"], ["id", "info-tab", "data-toggle", "tab", "routerLink", "/info", "role", "tab", "aria-controls", "info", "aria-selected", "false", 1, "nav-link"], [1, "navbar-nav", "nav", "nav-tabs", "ml-auto"], ["href", "https://github.com/UNICT-DMI/OPIS-Manager", "target", "_blank", 1, "nav-link"], ["size", "lg", 3, "icon"], ["class", "nav-item", 4, "ngIf"], ["o", "outlet"], ["id", "info-tab", "data-toggle", "tab", "routerLink", "/login", "role", "tab", "aria-controls", "info", "aria-selected", "false", 1, "nav-link"], ["id", "info-tab", "data-toggle", "tab", "role", "tab", "aria-controls", "info", "aria-selected", "false", 1, "nav-link", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵelement(3, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelementStart(5, "ul", 5);
            i0.ɵɵelementStart(6, "li", 6);
            i0.ɵɵelementStart(7, "a", 7);
            i0.ɵɵelement(8, "img", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "li", 9);
            i0.ɵɵelementStart(10, "a", 10);
            i0.ɵɵtext(11, "Formula");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "li", 9);
            i0.ɵɵelementStart(13, "a", 11);
            i0.ɵɵtext(14, "Info");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "ul", 12);
            i0.ɵɵelementStart(16, "li", 6);
            i0.ɵɵelementStart(17, "a", 13);
            i0.ɵɵtext(18, " GitHub ");
            i0.ɵɵelement(19, "fa-icon", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(20, AppComponent_li_20_Template, 3, 0, "li", 15);
            i0.ɵɵtemplate(21, AppComponent_li_21_Template, 3, 0, "li", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "main");
            i0.ɵɵelement(23, "router-outlet", null, 16);
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            var _r2 = i0.ɵɵreference(24);

            i0.ɵɵadvance(19);
            i0.ɵɵproperty("icon", ctx.faGithub);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isLogged);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isLogged);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("@fadeAnimation", _r2.isActivated ? _r2.activatedRoute : "");
          }
        },
        directives: [i3.NgbNavbar, i2.RouterLinkWithHref, i4.FaIconComponent, i5.NgIf, i2.RouterOutlet],
        styles: [".opis-logo-menu[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #00897b;\n}\n\n.opis-logo-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n\n.opis-logo-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 134px;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0NBQUE7QUFERjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yX21haW46ICMwMDg5N2I7XG5cbi5vcGlzLWxvZ28tbWVudSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29sb3JfbWFpbjtcbn1cbi5vcGlzLWxvZ28tbWVudSBhIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5vcGlzLWxvZ28tbWVudSBhIGltZyB7XG4gIHdpZHRoOiAxMzRweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuIl19 */"],
        data: {
          animation: [animations_1.fadeAnimation]
        }
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(AppComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            animations: [animations_1.fadeAnimation]
          }]
        }], function () {
          return [{
            type: i1.AuthService
          }, {
            type: i2.Router
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XSv0":
    /*!****************************************!*\
      !*** ./src/app/info/info.component.ts ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function XSv0(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.InfoComponent = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var free_brands_svg_icons_1 = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");

      var free_solid_svg_icons_1 = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb"));

      var InfoComponent = function InfoComponent() {
        _classCallCheck(this, InfoComponent);

        this.faGithub = free_brands_svg_icons_1.faGithub;
        this.faTelegram = free_brands_svg_icons_1.faTelegram;
        this.faEnvelope = free_solid_svg_icons_1.faEnvelope;
        this.faLinkedin = free_brands_svg_icons_1.faLinkedin;
        this.faCubes = free_solid_svg_icons_1.faCubes;
        this.faUsers = free_solid_svg_icons_1.faUsers;
      };

      exports.InfoComponent = InfoComponent;

      InfoComponent.ɵfac = function InfoComponent_Factory(t) {
        return new (t || InfoComponent)();
      };

      InfoComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: InfoComponent,
        selectors: [["app-info"]],
        decls: 123,
        vars: 33,
        consts: [[1, "container"], [1, "jumbotron", "text-center", "opis-style"], ["src", "assets/logo.png", 1, "opis-logo"], [1, "row"], [1, "col-sm-4"], ["size", "lg", 1, "opis-icon", 3, "icon"], ["href", "https://github.com/UNICT-DMI/OPIS-Manager"], ["href", "https://github.com/UNICT-DMI/OPIS-Manager/blob/master/LICENSE"], [1, "text-center"], [1, "list-group", "opis-contributors"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge-pill"], ["target", "_blank", "href", "https://t.me/Helias", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "mailto:stefanoborzi32@gmail.com", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://linkedin.com/in/stefanoborzi/", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://github.com/Helias", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://t.me/Pierpaolo791", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "mailto:pierpaolo.pecoraio@gmail.com", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://www.linkedin.com/in/pierpaolo-pecoraio/", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://github.com/Pierpaolo791", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://t.me/Wornairz", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "mailto:alessandrocatalano999@gmail.com", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://www.linkedin.com/in/wornairz/", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://github.com/Wornairz", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://t.me/charlemgn", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "mailto:lemuelpuglisi001@gmail.com", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://www.linkedin.com/in/lemuel-puglisi-b3280a16b/", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://github.com/LemuelPuglisi", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://t.me/SimoneScionti", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "mailto:simonescionti@yahoo.com", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://www.linkedin.com/in/simone-scionti-108a51143/", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://t.me/Squalex95", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "mailto:alessiopiazza117@gmail.com", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://www.linkedin.com/in/alessio-piazza-70bb59136/", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://github.com/Squalex95", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://t.me/zeridos", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "mailto:dsinito@dmi.unict.it", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://www.linkedin.com/in/diegosinito/", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://t.me/SalAsero", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "mailto:SalAsero24@gmail.com", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://www.linkedin.com/in/salvo-asero-2a19a620a/", "role", "button", 1, "btn-lg"], ["target", "_blank", "href", "https://github.com/Guberlo/", "role", "button", 1, "btn-lg"]],
        template: function InfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "br");
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelement(3, "img", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 0);
            i0.ɵɵelementStart(5, "div", 3);
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵelementStart(7, "h4");
            i0.ɵɵelement(8, "fa-icon", 5);
            i0.ɵɵtext(9, " Creato e gestito da studenti");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "L'OPIS-Manager \xE8 stato realizzato da studenti del Dipartimento di Matematica e Informatica sulla base del modello matematico elaborato dalla ");
            i0.ɵɵelementStart(12, "strong");
            i0.ɵɵtext(13, "Commissione Paritetica del DMI");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 4);
            i0.ɵɵelementStart(15, "h4");
            i0.ɵɵelement(16, "fa-icon", 5);
            i0.ɵɵtext(17, " Per tutto l'Ateneo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "p");
            i0.ɵɵtext(19, "Compatibile con tutti i Corsi di Laurea di ogni Dipartimento dell'Ateneo dell'Universit\xE0 di Catania");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 4);
            i0.ɵɵelementStart(21, "h4");
            i0.ɵɵelement(22, "fa-icon", 5);
            i0.ɵɵtext(23, " Open Source");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "p");
            i0.ɵɵtext(25, "Chiunque pu\xF2 contribuire allo sviluppo dell'");
            i0.ɵɵelementStart(26, "a", 6);
            i0.ɵɵtext(27, "OPIS-Manager");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(28, " poich\xE8 esso \xE8 Open Source ed \xE8 rilasciato sotto licenza ");
            i0.ɵɵelementStart(29, "a", 7);
            i0.ɵɵtext(30, "GPLv3.0");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(31, "br");
            i0.ɵɵelementStart(32, "h2", 8);
            i0.ɵɵtext(33, "Questo progetto \xE8 stato realizzato da:");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "br");
            i0.ɵɵelementStart(35, "ul", 9);
            i0.ɵɵelementStart(36, "li", 10);
            i0.ɵɵtext(37, " Stefano Borz\xEC ");
            i0.ɵɵelementStart(38, "span", 11);
            i0.ɵɵelementStart(39, "a", 12);
            i0.ɵɵelement(40, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "a", 13);
            i0.ɵɵelement(42, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "a", 14);
            i0.ɵɵelement(44, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "a", 15);
            i0.ɵɵelement(46, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "li", 10);
            i0.ɵɵtext(48, " Pierpaolo Pecoraio ");
            i0.ɵɵelementStart(49, "span", 11);
            i0.ɵɵelementStart(50, "a", 16);
            i0.ɵɵelement(51, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "a", 17);
            i0.ɵɵelement(53, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "a", 18);
            i0.ɵɵelement(55, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "a", 19);
            i0.ɵɵelement(57, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "li", 10);
            i0.ɵɵtext(59, " Alessandro Catalano ");
            i0.ɵɵelementStart(60, "span", 11);
            i0.ɵɵelementStart(61, "a", 20);
            i0.ɵɵelement(62, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "a", 21);
            i0.ɵɵelement(64, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "a", 22);
            i0.ɵɵelement(66, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "a", 23);
            i0.ɵɵelement(68, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "li", 10);
            i0.ɵɵtext(70, " Lemuel Puglisi ");
            i0.ɵɵelementStart(71, "span", 11);
            i0.ɵɵelementStart(72, "a", 24);
            i0.ɵɵelement(73, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "a", 25);
            i0.ɵɵelement(75, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "a", 26);
            i0.ɵɵelement(77, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "a", 27);
            i0.ɵɵelement(79, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "li", 10);
            i0.ɵɵtext(81, " Simone Scionti ");
            i0.ɵɵelementStart(82, "span", 11);
            i0.ɵɵelementStart(83, "a", 28);
            i0.ɵɵelement(84, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "a", 29);
            i0.ɵɵelement(86, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "a", 30);
            i0.ɵɵelement(88, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "li", 10);
            i0.ɵɵtext(90, " Alessio Piazza ");
            i0.ɵɵelementStart(91, "span", 11);
            i0.ɵɵelementStart(92, "a", 31);
            i0.ɵɵelement(93, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "a", 32);
            i0.ɵɵelement(95, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "a", 33);
            i0.ɵɵelement(97, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "a", 34);
            i0.ɵɵelement(99, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "li", 10);
            i0.ɵɵtext(101, " Diego Sinit\xF2 ");
            i0.ɵɵelementStart(102, "span", 11);
            i0.ɵɵelementStart(103, "a", 35);
            i0.ɵɵelement(104, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "a", 36);
            i0.ɵɵelement(106, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "a", 37);
            i0.ɵɵelement(108, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "li", 10);
            i0.ɵɵtext(110, " Salvo Asero ");
            i0.ɵɵelementStart(111, "span", 11);
            i0.ɵɵelementStart(112, "a", 38);
            i0.ɵɵelement(113, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "a", 39);
            i0.ɵɵelement(115, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(116, "a", 40);
            i0.ɵɵelement(117, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "a", 41);
            i0.ɵɵelement(119, "fa-icon", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(120, "br");
            i0.ɵɵelement(121, "br");
            i0.ɵɵelement(122, "br");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("icon", ctx.faUsers);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("icon", ctx.faCubes);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("icon", ctx.faGithub);
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("icon", ctx.faTelegram);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faEnvelope);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faLinkedin);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faGithub);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", ctx.faTelegram);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faEnvelope);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faLinkedin);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faGithub);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", ctx.faTelegram);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faEnvelope);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faLinkedin);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faGithub);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", ctx.faTelegram);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faEnvelope);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faLinkedin);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faGithub);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", ctx.faTelegram);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faEnvelope);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faLinkedin);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", ctx.faTelegram);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faEnvelope);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faLinkedin);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faGithub);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", ctx.faTelegram);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faEnvelope);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faLinkedin);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("icon", ctx.faTelegram);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faEnvelope);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faLinkedin);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faGithub);
          }
        },
        directives: [i1.FaIconComponent],
        styles: [".opis-style[_ngcontent-%COMP%] {\n  background-color: #00897b;\n  color: #fff;\n}\n\n.opis-contributors[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.opis-logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0MseUJBSlk7RUFLWixXQUphO0FBRWQ7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JfbWFpbjogIzAwODk3YjtcbiRjb2xvcl9saWdodDogI2ZmZjtcblxuLm9waXMtc3R5bGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfbWFpbjtcblx0Y29sb3I6ICRjb2xvcl9saWdodDtcbn1cbi5vcGlzLWNvbnRyaWJ1dG9ycyB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5vcGlzLWxvZ28ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(InfoComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'app-info',
            templateUrl: './info.component.html',
            styleUrls: ['./info.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "YqZD":
    /*!**********************************************************!*\
      !*** ./src/app/academic-year/academic-year.component.ts ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function YqZD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AcademicYearComponent = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var free_solid_svg_icons_1 = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");

      var graph_service_1 = __webpack_require__(
      /*! ../services/graph/graph.service */
      "67dP");

      var chart_js_1 = __webpack_require__(
      /*! chart.js */
      "MO+k");

      var auth_service_1 = __webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans");

      var api_service_1 = __webpack_require__(
      /*! ../services/api/api.service */
      "oZWX");

      var utils_1 = __webpack_require__(
      /*! ../utils/utils */
      "oCjk");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/graph/graph.service */
      "67dP"));

      var i2 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans"));

      var i3 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/api/api.service */
      "oZWX"));

      var i4 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/common */
      "ofXK"));

      var i5 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/forms */
      "3Pt+"));

      var i6 = tslib_1.__importStar(__webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb"));

      var i7 = tslib_1.__importStar(__webpack_require__(
      /*! ../value-details/value-details.component */
      "OsNX"));

      var i8 = tslib_1.__importStar(__webpack_require__(
      /*! @m0t0r/ngx-slider */
      "pFeF"));

      function AcademicYearComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 25);
          i0.ɵɵelementStart(1, "div", 26);
          i0.ɵɵelementStart(2, "div", 27);
          i0.ɵɵelementStart(3, "div", 28);
          i0.ɵɵelementStart(4, "div", 27);
          i0.ɵɵelementStart(5, "div", 29);
          i0.ɵɵtext(6, " Scostamento media ");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(7, "div", 30);
          i0.ɵɵelementStart(8, "ngx-slider", 31);
          i0.ɵɵlistener("valueChange", function AcademicYearComponent_div_0_Template_ngx_slider_valueChange_8_listener($event) {
            i0.ɵɵrestoreView(_r4);
            var ctx_r3 = i0.ɵɵnextContext();
            return ctx_r3.getCdsOfSelectedYear().scostamento_media = $event;
          })("valueChange", function AcademicYearComponent_div_0_Template_ngx_slider_valueChange_8_listener($event) {
            i0.ɵɵrestoreView(_r4);
            var ctx_r5 = i0.ɵɵnextContext();
            return ctx_r5.sliderUpdate($event);
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(9, "div", 32);
          i0.ɵɵelementStart(10, "div", 29);
          i0.ɵɵtext(11, " Scostamento numerosit\xE0 ");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(12, "div", 30);
          i0.ɵɵelementStart(13, "ngx-slider", 31);
          i0.ɵɵlistener("valueChange", function AcademicYearComponent_div_0_Template_ngx_slider_valueChange_13_listener($event) {
            i0.ɵɵrestoreView(_r4);
            var ctx_r6 = i0.ɵɵnextContext();
            return ctx_r6.getCdsOfSelectedYear().scostamento_numerosita = $event;
          })("valueChange", function AcademicYearComponent_div_0_Template_ngx_slider_valueChange_13_listener($event) {
            i0.ɵɵrestoreView(_r4);
            var ctx_r7 = i0.ɵɵnextContext();
            return ctx_r7.sliderUpdate($event);
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(14, "div", 33);
          i0.ɵɵelementStart(15, "button", 34);
          i0.ɵɵlistener("click", function AcademicYearComponent_div_0_Template_button_click_15_listener() {
            i0.ɵɵrestoreView(_r4);
            var ctx_r8 = i0.ɵɵnextContext();
            return ctx_r8.updateCds();
          });
          i0.ɵɵtext(16, "Conferma");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r0 = i0.ɵɵnextContext();
          i0.ɵɵadvance(8);
          i0.ɵɵproperty("value", ctx_r0.getCdsOfSelectedYear().scostamento_media)("options", ctx_r0.meanSliderOptions);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("value", ctx_r0.getCdsOfSelectedYear().scostamento_numerosita)("options", ctx_r0.numerositySliderOptions);
        }
      }

      function AcademicYearComponent_option_8_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "option", 35);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var year_r9 = ctx.$implicit;
          i0.ɵɵproperty("ngValue", year_r9);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", year_r9, " ");
        }
      }

      function AcademicYearComponent_div_31_li_20_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "li");
          i0.ɵɵelementStart(1, "span", 45);
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var teaching_r14 = ctx.$implicit;
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate1(" ", teaching_r14.nome_completo, " ");
        }
      }

      function AcademicYearComponent_div_31_li_25_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "li");
          i0.ɵɵelementStart(1, "span", 46);
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var teaching_r15 = ctx.$implicit;
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate1(" ", teaching_r15.nome_completo, " ");
        }
      }

      function AcademicYearComponent_div_31_li_30_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "li");
          i0.ɵɵelementStart(1, "span", 45);
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var teaching_r16 = ctx.$implicit;
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate1(" ", teaching_r16.nome_completo, " ");
        }
      }

      function AcademicYearComponent_div_31_li_35_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "li");
          i0.ɵɵelementStart(1, "span", 46);
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var teaching_r17 = ctx.$implicit;
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate1(" ", teaching_r17.nome_completo, " ");
        }
      }

      function AcademicYearComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 36);
          i0.ɵɵelementStart(1, "div", 37);
          i0.ɵɵelementStart(2, "div", 38);
          i0.ɵɵelementStart(3, "div", 39);
          i0.ɵɵelementStart(4, "div", 40);
          i0.ɵɵelementStart(5, "h5", 41);
          i0.ɵɵtext(6);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(7, "div", 42);
          i0.ɵɵelementStart(8, "b");
          i0.ɵɵtext(9);
          i0.ɵɵelementEnd();
          i0.ɵɵtext(10);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(11, "div", 42);
          i0.ɵɵelementStart(12, "b");
          i0.ɵɵtext(13, "Media schede");
          i0.ɵɵelementEnd();
          i0.ɵɵtext(14);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(15, "div", 27);
          i0.ɵɵelementStart(16, "div", 43);
          i0.ɵɵelementStart(17, "p");
          i0.ɵɵtext(18);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(19, "ul");
          i0.ɵɵtemplate(20, AcademicYearComponent_div_31_li_20_Template, 3, 1, "li", 44);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(21, "div", 43);
          i0.ɵɵelementStart(22, "p");
          i0.ɵɵtext(23);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(24, "ul");
          i0.ɵɵtemplate(25, AcademicYearComponent_div_31_li_25_Template, 3, 1, "li", 44);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(26, "div", 43);
          i0.ɵɵelementStart(27, "p");
          i0.ɵɵtext(28, "Ins. con basso numero di schede");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(29, "ul");
          i0.ɵɵtemplate(30, AcademicYearComponent_div_31_li_30_Template, 3, 1, "li", 44);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(31, "div", 43);
          i0.ɵɵelementStart(32, "p");
          i0.ɵɵtext(33, "Ins. con elevato numero di schede");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(34, "ul");
          i0.ɵɵtemplate(35, AcademicYearComponent_div_31_li_35_Template, 3, 1, "li", 44);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r2 = i0.ɵɵnextContext();
          i0.ɵɵadvance(6);
          i0.ɵɵtextInterpolate2("Statistiche sul Corso di Studio ", ctx_r2.cdsSchede[0].unict_id, " - anno accademico ", ctx_r2.selectedYear, " ");
          i0.ɵɵadvance(3);
          i0.ɵɵtextInterpolate1("Media V", ctx_r2.switcherValues, "");
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", ctx_r2.vCds[ctx_r2.selectedYear][ctx_r2.switcherValues - 1], " ");
          i0.ɵɵadvance(4);
          i0.ɵɵtextInterpolate1(" ", ctx_r2.nCds[ctx_r2.selectedYear], " ");
          i0.ɵɵadvance(4);
          i0.ɵɵtextInterpolate1("Ins. con scarsa valutazione V", ctx_r2.switcherValues, "");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", ctx_r2.badValTeachings);
          i0.ɵɵadvance(3);
          i0.ɵɵtextInterpolate1("Ins. con buona valutazione V", ctx_r2.switcherValues, "");
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", ctx_r2.goodValTeachings);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("ngForOf", ctx_r2.badNSchedeTeachings);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("ngForOf", ctx_r2.goodNSchedeTeachings);
        }
      }

      var AcademicYearComponent = /*#__PURE__*/function () {
        function AcademicYearComponent(graphService, authService, apiService) {
          _classCallCheck(this, AcademicYearComponent);

          this.graphService = graphService;
          this.authService = authService;
          this.apiService = apiService;
          this.charts = [];
          this.faSearch = free_solid_svg_icons_1.faSearch;
          this.meanSliderOptions = {
            floor: 0,
            ceil: 5,
            step: 0.25,
            minLimit: 0,
            maxLimit: 5,
            showTicks: true
          };
          this.numerositySliderOptions = {
            floor: 5,
            ceil: 100,
            step: 5,
            minLimit: 5,
            maxLimit: 100,
            showTicks: true
          };
          this.switcherValues = 1;
          this.showStats = false;
          this.selectedYear = '--';
          this.isLogged = false;
          this.isLogged = this.authService.authTokenIsPresent();
          this.showStats = this.isLogged;
          this.CONF = utils_1.getConf();
        }

        _createClass(AcademicYearComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.hasOwnProperty('cdsSchede')) {
              this.showAcademicYearChartForSelectedYear();
            }
          } // TODO: refactor / remove or use Output()

        }, {
          key: "switchVal",
          value: function switchVal(v) {
            this.switcherValues = v;
            this.findGoodAndBadTeachings();
          }
        }, {
          key: "sliderUpdate",
          value: function sliderUpdate(value) {
            this.findGoodAndBadTeachings();
          }
        }, {
          key: "toggleStats",
          value: function toggleStats() {
            this.showStats = !this.showStats;
          }
        }, {
          key: "getCdsOfSelectedYear",
          value: function getCdsOfSelectedYear() {
            var _this17 = this;

            return this.cdsSchede.find(function (cds) {
              return cds.anno_accademico === _this17.selectedYear;
            });
          }
        }, {
          key: "updateCds",
          value: function updateCds() {
            var cds = this.getCdsOfSelectedYear();
            this.apiService.updateCDS(cds, this.authService.getAuthToken()).subscribe(function (data) {
              return alert('Valori aggiornati correttamente!');
            }, function (err) {
              alert('Errore durante l\'aggiornamento dei valori');
              console.log(err);
            });
          }
        }, {
          key: "showAcademicYearChartForSelectedYear",
          value: function showAcademicYearChartForSelectedYear() {
            var _this18 = this;

            if (this.selectedYear !== '--') {
              var teachingOfSelectedYear = this.cdsSchede.filter(function (cds) {
                return cds.anno_accademico === _this18.selectedYear;
              }).flatMap(function (cds) {
                return cds.insegnamenti;
              });
              this.teachings = this.graphService.parseInsegnamentoSchede(teachingOfSelectedYear, this.subject).sort(function (t1, t2) {
                if (t1.anno === t2.anno) {
                  if (t1.nome_completo < t2.nome_completo) {
                    return -1;
                  } else if (t1.nome_completo > t2.nome_completo) {
                    return 1;
                  } else {
                    return 0;
                  }
                } else if (t1.anno < t2.anno) {
                  return -1;
                } else {
                  return 1;
                }
              });

              var _this$graphService$el = this.graphService.elaborateFormula(this.teachings.map(function (insegnamento) {
                return {
                  totale_schede: insegnamento.tot_schedeF,
                  domande: insegnamento.domande
                };
              })),
                  _this$graphService$el2 = _slicedToArray(_this$graphService$el, 2),
                  values = _this$graphService$el2[1];

              this.findGoodAndBadTeachings();
              this.showAcademicYearChart(_toConsumableArray(values));
            }
          }
        }, {
          key: "findGoodAndBadTeachings",
          value: function findGoodAndBadTeachings() {
            var values = this.graphService.elaborateFormula(this.teachings.map(function (insegnamento) {
              return {
                totale_schede: insegnamento.tot_schedeF,
                domande: insegnamento.domande
              };
            }))[1];
            this.badNSchedeTeachings = [];
            this.badValTeachings = [];
            this.goodNSchedeTeachings = [];
            this.goodValTeachings = [];

            for (var i in this.teachings) {
              if (this.teachings[i].domande != null) {
                if (this.isBadTeaching(values[this.switcherValues - 1][i], this.vCds[this.selectedYear][this.switcherValues - 1], this.getCdsOfSelectedYear().scostamento_media)) {
                  this.badValTeachings.push(this.teachings[i]);
                } else if (this.isGoodTeaching(values[this.switcherValues - 1][i], this.vCds[this.selectedYear][this.switcherValues - 1], this.getCdsOfSelectedYear().scostamento_media)) {
                  this.goodValTeachings.push(this.teachings[i]);
                }

                if (this.isBadTeaching(this.teachings[i].tot_schedeF, this.nCds[this.selectedYear], this.getCdsOfSelectedYear().scostamento_numerosita)) {
                  this.badNSchedeTeachings.push(this.teachings[i]);
                } else if (this.isGoodTeaching(this.teachings[i].tot_schedeF, this.nCds[this.selectedYear], this.getCdsOfSelectedYear().scostamento_numerosita)) {
                  this.goodNSchedeTeachings.push(this.teachings[i]);
                }
              }
            }
          }
        }, {
          key: "isBadTeaching",
          value: function isBadTeaching(teachingVal, cdsVal, cdsDeviation) {
            if (teachingVal <= cdsVal - cdsDeviation) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "isGoodTeaching",
          value: function isGoodTeaching(teachingVal, cdsVal, cdsDeviation) {
            if (teachingVal >= cdsVal + cdsDeviation) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "showAcademicYearChart",
          value: function showAcademicYearChart(values) {
            var minSchede = Math.min.apply(Math, this.teachings.map(function (o) {
              return o.tot_schedeF;
            }));
            var maxSchede = Math.max.apply(Math, this.teachings.map(function (o) {
              return o.tot_schedeF;
            }));
            this.insertYear(values, '1', 0);

            for (var i = 2; i < this.teachings.length; i++) {
              if (this.teachings[i].anno !== this.teachings[i - 1].anno) {
                this.insertYear(values, this.teachings[i].anno, i);
              }
            }

            var fitColorInsegnamenti = this.getColorTeachings(maxSchede, minSchede);
            var materie = this.teachings.map(function (a) {
              return a.nome;
            }); // labels chartjs

            var docenti = this.teachings.map(function (a) {
              return a.docente;
            }); // tooltips/labels

            var materieComplete = this.teachings.map(function (a) {
              return a.nome_completo;
            }); // labels chartjs
            // chartjs stuff

            var ctx = []; // Destroy and recreate canvas to clear

            var canv = [];
            canv.push(document.getElementById('v1-canvas'));
            canv.push(document.getElementById('v2-canvas'));
            canv.push(document.getElementById('v3-canvas'));
            var parents = [];
            parents.push(canv[0].parentElement, canv[1].parentElement, canv[2].parentElement);
            parents[0].removeChild(canv[0]);
            parents[1].removeChild(canv[1]);
            parents[2].removeChild(canv[2]);
            var canvWidth = '90vw';
            var canvHeight = this.teachings.length * 25 + 'px';
            var minHeight = '150px';

            for (var _i7 = 0; _i7 < 3; _i7++) {
              var canvs = document.createElement('canvas');
              canvs.id = 'v' + (_i7 + 1) + '-canvas';
              canvs.style.width = canvWidth;
              canvs.style.height = canvHeight;
              canvs.style['min-height'] = minHeight;

              parents[_i7].appendChild(canvs);
            }

            canv = [];
            canv.push(document.getElementById('v1-canvas'));
            canv.push(document.getElementById('v2-canvas'));
            canv.push(document.getElementById('v3-canvas'));
            ctx.push(canv[0].getContext('2d'));
            ctx.push(canv[1].getContext('2d'));
            ctx.push(canv[2].getContext('2d'));

            for (var _i8 = 0, _Object$keys3 = Object.keys(ctx); _i8 < _Object$keys3.length; _i8++) {
              var c = _Object$keys3[_i8];
              // tslint:disable-next-line: variable-name
              var _options = {
                scales: {
                  xAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }],
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                },
                tooltips: {
                  titleFontSize: 25,
                  bodyFontSize: 25,
                  callbacks: {
                    title: function title(data) {
                      return materieComplete[data[0].index];
                    },
                    label: function label(data) {
                      return ' ' + docenti[data.index] + ' ' + data.value;
                    }
                  }
                },
                responsive: true,
                legend: {
                  display: false
                },
                annotation: {
                  annotations: [{
                    type: 'line',
                    mode: 'vertical',
                    scaleID: 'x-axis-0',
                    value: this.vCds[this.selectedYear][c],
                    borderColor: 'red',
                    label: {
                      content: 'Media CDS',
                      enabled: true,
                      position: 'top'
                    }
                  }]
                }
              }; // chartjs data
              // tslint:disable-next-line: variable-name

              var _data = {
                labels: materie,
                datasets: [{
                  data: values[c],
                  backgroundColor: fitColorInsegnamenti,
                  hoverBackgroundColor: fitColorInsegnamenti,
                  fill: true,
                  borderWidth: 1
                }]
              };
              var opt = Object.assign({}, _options);
              this.charts.push(new chart_js_1.Chart(ctx[c], {
                type: 'horizontalBar',
                data: _data,
                options: opt
              }));
            }
          }
        }, {
          key: "insertYear",
          value: function insertYear(values, year, position) {
            this.teachings.splice(position, 0, {
              nome: year + ' anno',
              nome_completo: year + ' anno',
              anno: year,
              canale: '',
              nome_modulo: '',
              id_modulo: 0,
              docente: '',
              domande: null,
              tot_schedeF: 0,
              tot_schedeNF: 0
            });
            values[0].splice(position, 0, 0);
            values[1].splice(position, 0, 0);
            values[2].splice(position, 0, 0);
          }
        }, {
          key: "getColorTeachings",
          value: function getColorTeachings(maxSchede, minSchede) {
            var Rx;
            var Gx;
            var Bx;
            var RGB1 = [255, 200, 45];
            var RGB2 = [0, 121, 107];
            var colorInsegnamenti = [];

            for (var _i9 = 0, _Object$keys4 = Object.keys(this.teachings); _i9 < _Object$keys4.length; _i9++) {
              var i = _Object$keys4[_i9];
              Rx = RGB1[0] + (RGB2[0] - RGB1[0]) * (this.teachings[i].tot_schedeF - minSchede) / (maxSchede - minSchede);
              Gx = RGB1[1] + (RGB2[1] - RGB1[1]) * (this.teachings[i].tot_schedeF - minSchede) / (maxSchede - minSchede);
              Bx = RGB1[2] + (RGB2[2] - RGB1[2]) * (this.teachings[i].tot_schedeF - minSchede) / (maxSchede - minSchede);
              colorInsegnamenti.push("rgba(".concat(Rx.toFixed(2), ", ").concat(Gx.toFixed(2), ", ").concat(Bx.toFixed(2), ", 1)"));
            }

            return colorInsegnamenti;
          }
        }]);

        return AcademicYearComponent;
      }();

      exports.AcademicYearComponent = AcademicYearComponent;

      AcademicYearComponent.ɵfac = function AcademicYearComponent_Factory(t) {
        return new (t || AcademicYearComponent)(i0.ɵɵdirectiveInject(i1.GraphService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.ApiService));
      };

      AcademicYearComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: AcademicYearComponent,
        selectors: [["app-academic-year"]],
        inputs: {
          vCds: "vCds",
          nCds: "nCds",
          cdsSchede: "cdsSchede"
        },
        features: [i0.ɵɵNgOnChangesFeature],
        decls: 47,
        vars: 14,
        consts: [["class", "academic-year", 4, "ngIf"], [1, "text-center"], [1, "list-option-container"], [1, "btn", "btn-opis", "text-center", "switch-years", 3, "ngModel", "ngModelChange"], ["class", "text-center", 3, "ngValue", 4, "ngFor", "ngForOf"], [3, "hidden"], ["id", "tabs", 1, "nav", "nav-tabs"], [1, "nav-item", "tabs_button"], [1, "btn", "btn-opis", 3, "ngClass", "click"], [1, "input-group", "addons-bar"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text", "selected-tab"], ["size", "lg", 1, "opis-icon", 3, "icon"], ["type", "text", "placeholder", "Fondamenti...", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [1, "nav-item", "tabs_button", "ml-auto"], [1, "btn", "btn-opis", 3, "click"], ["class", "card", "id", "cds-year-stats", 4, "ngIf"], [1, "color-bar"], [3, "switcher"], ["id", "v1", 3, "hidden"], ["id", "v1-canvas"], ["id", "v2", 3, "hidden"], ["id", "v2-canvas"], ["id", "v3", 3, "hidden"], ["id", "v3-canvas"], [1, "academic-year"], ["id", "deviation-sliders", 1, "container", "mt-4", "mb-4"], [1, "row"], [1, "col-10"], [1, "col-3", "my-auto"], [1, "col-9", "custom-slider"], [3, "value", "options", "valueChange"], [1, "row", "mt-2"], [1, "col-2", "my-auto", "mx-auto"], [1, "btn", "btn-opis", "pull-right", 3, "click"], [1, "text-center", 3, "ngValue"], ["id", "cds-year-stats", 1, "card"], [1, "card-body"], [1, "container"], [1, "row", "mb-2"], [1, "col-8"], [1, "card-title"], [1, "col-2"], [1, "col-3"], [4, "ngFor", "ngForOf"], [2, "color", "red"], [2, "color", "green"]],
        template: function AcademicYearComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵtemplate(0, AcademicYearComponent_div_0_Template, 17, 4, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtext(3, " Seleziona anno: ");
            i0.ɵɵelement(4, "br");
            i0.ɵɵelementStart(5, "select", 3);
            i0.ɵɵlistener("ngModelChange", function AcademicYearComponent_Template_select_ngModelChange_5_listener($event) {
              return ctx.selectedYear = $event;
            })("ngModelChange", function AcademicYearComponent_Template_select_ngModelChange_5_listener() {
              return ctx.showAcademicYearChartForSelectedYear();
            });
            i0.ɵɵelementStart(6, "option", 1);
            i0.ɵɵtext(7, "--");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, AcademicYearComponent_option_8_Template, 2, 2, "option", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 5);
            i0.ɵɵelementStart(10, "div");
            i0.ɵɵelementStart(11, "ul", 6);
            i0.ɵɵelementStart(12, "li", 7);
            i0.ɵɵelementStart(13, "button", 8);
            i0.ɵɵlistener("click", function AcademicYearComponent_Template_button_click_13_listener() {
              return ctx.switchVal(1);
            });
            i0.ɵɵtext(14, "V1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "li", 7);
            i0.ɵɵelementStart(16, "button", 8);
            i0.ɵɵlistener("click", function AcademicYearComponent_Template_button_click_16_listener() {
              return ctx.switchVal(2);
            });
            i0.ɵɵtext(17, "V2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "li", 7);
            i0.ɵɵelementStart(19, "button", 8);
            i0.ɵɵlistener("click", function AcademicYearComponent_Template_button_click_19_listener() {
              return ctx.switchVal(3);
            });
            i0.ɵɵtext(20, "V3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "li");
            i0.ɵɵelementStart(22, "div", 9);
            i0.ɵɵelementStart(23, "div", 10);
            i0.ɵɵelementStart(24, "span", 11);
            i0.ɵɵelement(25, "fa-icon", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "input", 13);
            i0.ɵɵlistener("ngModelChange", function AcademicYearComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.subject = $event;
            })("change", function AcademicYearComponent_Template_input_change_26_listener() {
              return ctx.showAcademicYearChartForSelectedYear();
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "li", 14);
            i0.ɵɵelementStart(28, "button", 15);
            i0.ɵɵlistener("click", function AcademicYearComponent_Template_button_click_28_listener() {
              return ctx.toggleStats();
            });
            i0.ɵɵtext(29, "Stats");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(30, "br");
            i0.ɵɵtemplate(31, AcademicYearComponent_div_31_Template, 36, 11, "div", 16);
            i0.ɵɵelement(32, "br");
            i0.ɵɵelementStart(33, "div");
            i0.ɵɵtext(34, "Colore per numerosit\xE0 di schede ");
            i0.ɵɵelementStart(35, "strong");
            i0.ɵɵtext(36, "MIN - ");
            i0.ɵɵelement(37, "div", 17);
            i0.ɵɵtext(38, " - MAX");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(39, "br");
            i0.ɵɵelement(40, "app-value-details", 18);
            i0.ɵɵelementStart(41, "div", 19);
            i0.ɵɵelement(42, "canvas", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 21);
            i0.ɵɵelement(44, "canvas", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 23);
            i0.ɵɵelement(46, "canvas", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isLogged && ctx.selectedYear != "--" && ctx.selectedYear != null);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.selectedYear);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.CONF.years);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", !ctx.selectedYear);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", ctx.switcherValues === 1 ? "selected-tab" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.switcherValues === 2 ? "selected-tab" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.switcherValues === 3 ? "selected-tab" : "");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("icon", ctx.faSearch);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.subject);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.selectedYear != "--" && ctx.showStats === true);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("switcher", ctx.switcherValues);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("hidden", ctx.switcherValues != 1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hidden", ctx.switcherValues != 2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("hidden", ctx.switcherValues != 3);
          }
        },
        directives: [i4.NgIf, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgModel, i5.NgSelectOption, i5.ɵangular_packages_forms_forms_x, i4.NgForOf, i4.NgClass, i6.FaIconComponent, i5.DefaultValueAccessor, i7.ValueDetailsComponent, i8.SliderComponent],
        styles: [".academic-year[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.color-bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 20px;\n  width: 200px;\n  background: rgba(0, 0, 0, 0) linear-gradient(to right, #ffc82d, #00796b) repeat scroll 0% 0%;\n  vertical-align: middle;\n}\n\n.switch-years[_ngcontent-%COMP%] {\n  width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNhZGVtaWMteWVhci9hY2FkZW1pYy15ZWFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0RkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hY2FkZW1pYy15ZWFyL2FjYWRlbWljLXllYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNhZGVtaWMteWVhciB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uY29sb3ItYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDIwMCwgNDUpLCByZ2IoMCwgMTIxLCAxMDcpKSByZXBlYXQgc2Nyb2xsIDAlIDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc3dpdGNoLXllYXJzIHtcbiAgd2lkdGg6IDM1MHB4O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(AcademicYearComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'app-academic-year',
            templateUrl: './academic-year.component.html',
            styleUrls: ['./academic-year.component.scss']
          }]
        }], function () {
          return [{
            type: i1.GraphService
          }, {
            type: i2.AuthService
          }, {
            type: i3.ApiService
          }];
        }, {
          vCds: [{
            type: core_1.Input
          }],
          nCds: [{
            type: core_1.Input
          }],
          cdsSchede: [{
            type: core_1.Input
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! no static exports found */

    /***/
    function ZAI4(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AppModule = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var platform_browser_1 = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var angular_fontawesome_1 = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      var ng_katex_1 = __webpack_require__(
      /*! ng-katex */
      "a7Q/");

      var animations_1 = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");

      var http_1 = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var forms_1 = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var angular2_chartjs_1 = __webpack_require__(
      /*! angular2-chartjs */
      "z+eI");

      var ng_bootstrap_1 = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var ngx_slider_1 = __webpack_require__(
      /*! @m0t0r/ngx-slider */
      "pFeF");

      var app_routing_module_1 = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");

      var app_component_1 = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var info_component_1 = __webpack_require__(
      /*! ./info/info.component */
      "XSv0");

      var formula_component_1 = __webpack_require__(
      /*! ./formula/formula.component */
      "/bmM");

      var home_component_1 = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");

      var value_details_component_1 = __webpack_require__(
      /*! ./value-details/value-details.component */
      "OsNX");

      var teaching_component_1 = __webpack_require__(
      /*! ./teaching/teaching.component */
      "ATnn");

      var academic_year_component_1 = __webpack_require__(
      /*! ./academic-year/academic-year.component */
      "YqZD");

      var cds_component_1 = __webpack_require__(
      /*! ./cds/cds.component */
      "45Ll");

      var registration_component_1 = __webpack_require__(
      /*! ./registration/registration.component */
      "4K/k");

      var login_component_1 = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      exports.AppModule = AppModule;
      AppModule.ɵmod = i0.ɵɵdefineNgModule({
        type: AppModule,
        bootstrap: [app_component_1.AppComponent]
      });
      AppModule.ɵinj = i0.ɵɵdefineInjector({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        imports: [[platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, angular_fontawesome_1.FontAwesomeModule, ng_katex_1.KatexModule, animations_1.BrowserAnimationsModule, http_1.HttpClientModule, forms_1.FormsModule, angular2_chartjs_1.ChartModule, ng_bootstrap_1.NgbModule, ngx_slider_1.NgxSliderModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, {
          declarations: [app_component_1.AppComponent, info_component_1.InfoComponent, formula_component_1.FormulaComponent, home_component_1.HomeComponent, value_details_component_1.ValueDetailsComponent, teaching_component_1.TeachingComponent, academic_year_component_1.AcademicYearComponent, cds_component_1.CdsComponent, registration_component_1.RegistrationComponent, login_component_1.LoginComponent],
          imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, angular_fontawesome_1.FontAwesomeModule, ng_katex_1.KatexModule, animations_1.BrowserAnimationsModule, http_1.HttpClientModule, forms_1.FormsModule, angular2_chartjs_1.ChartModule, ng_bootstrap_1.NgbModule, ngx_slider_1.NgxSliderModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        i0.ɵsetClassMetadata(AppModule, [{
          type: core_1.NgModule,
          args: [{
            declarations: [app_component_1.AppComponent, info_component_1.InfoComponent, formula_component_1.FormulaComponent, home_component_1.HomeComponent, value_details_component_1.ValueDetailsComponent, teaching_component_1.TeachingComponent, academic_year_component_1.AcademicYearComponent, cds_component_1.CdsComponent, registration_component_1.RegistrationComponent, login_component_1.LoginComponent],
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, angular_fontawesome_1.FontAwesomeModule, ng_katex_1.KatexModule, animations_1.BrowserAnimationsModule, http_1.HttpClientModule, forms_1.FormsModule, angular2_chartjs_1.ChartModule, ng_bootstrap_1.NgbModule, ngx_slider_1.NgxSliderModule],
            bootstrap: [app_component_1.AppComponent]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "oCjk":
    /*!********************************!*\
      !*** ./src/app/utils/utils.ts ***!
      \********************************/

    /*! no static exports found */

    /***/
    function oCjk(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getConf = void 0;

      function getConf() {
        var conf;

        try {
          conf = __webpack_require__(!function webpackMissingModule() {
            var e = new Error("Cannot find module '../../assets/config.json'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          }());
        } catch (_a) {
          conf = __webpack_require__(
          /*! ../../assets/default.json */
          "wCLQ");
        }

        return conf;
      }

      exports.getConf = getConf;
      /***/
    },

    /***/
    "oZWX":
    /*!*********************************************!*\
      !*** ./src/app/services/api/api.service.ts ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function oZWX(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ApiService = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var http_1 = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var utils_1 = __webpack_require__(
      /*! ../../utils/utils */
      "oCjk");

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/common/http */
      "tk/3"));

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.CONF = utils_1.getConf();
        }

        _createClass(ApiService, [{
          key: "getDepartments",
          value: function getDepartments(academicYear) {
            return this.http.get(this.CONF.apiUrl + 'v2/dipartimento?anno_accademico=' + (academicYear == null ? this.CONF.years[this.CONF.years.length - 1] : academicYear));
          }
        }, {
          key: "getCDSOfDepartment",
          value: function getCDSOfDepartment(department) {
            return this.http.get(this.CONF.apiUrl + 'v2/dipartimento/with-id/' + department + '/cds');
          }
        }, {
          key: "getTeachingsOfCDS",
          value: function getTeachingsOfCDS(cds) {
            return this.http.get(this.CONF.apiUrl + 'v2/cds/with-id/' + cds + '/insegnamenti');
          }
        }, {
          key: "getCDSCoarse",
          value: function getCDSCoarse(unictCds) {
            return this.http.get(this.CONF.apiUrl + 'v2/cds/coarse/' + unictCds + '/schedeopis');
          }
        }, {
          key: "getSchedeOfTeaching",
          value: function getSchedeOfTeaching(codiceGomp, canale, idModulo) {
            var extra = '?';

            if (canale != null) {
              extra += 'canale=' + canale + '&';
            }

            if (idModulo != null) {
              extra += 'id_modulo=' + idModulo;
            }

            return this.http.get(this.CONF.apiUrl + 'v2/insegnamento/coarse/' + codiceGomp + '/schedeopis' + extra).pipe(operators_1.map(function (insegnamenti) {
              return insegnamenti.filter(function (insegnamento) {
                return insegnamento.schedeopis != null;
              }).map(function (insegnamento) {
                return insegnamento.schedeopis;
              });
            }));
          }
        }, {
          key: "getDomandePesi",
          value: function getDomandePesi() {
            return this.http.get(this.CONF.apiUrl + 'v2/domande');
          }
        }, {
          key: "updateDomandePesi",
          value: function updateDomandePesi(domande, token) {
            var domandeJson = JSON.stringify(domande.map(function (domanda) {
              return {
                id: domanda.id,
                peso: domanda.peso_standard,
                gruppo: domanda.gruppo
              };
            }));
            var httpOptions = {
              headers: new http_1.HttpHeaders({
                Authorization: token
              })
            };
            return this.http.put(this.CONF.apiUrl + 'v2/domande?pesi_domande=' + domandeJson, {}, httpOptions);
          }
        }, {
          key: "updateCDS",
          value: function updateCDS(cds, token) {
            var httpOptions = {
              headers: new http_1.HttpHeaders({
                Authorization: token
              })
            };
            return this.http.put(this.CONF.apiUrl + 'v2/cds/with-id/' + cds.id + '?scostamento_numerosita=' + cds.scostamento_numerosita + '&scostamento_media=' + cds.scostamento_media, {}, httpOptions);
          }
        }, {
          key: "login",
          value: function login(email, password) {
            return this.http.post(this.CONF.apiUrl + 'auth/login', {
              email: email,
              password: password
            });
          }
        }, {
          key: "refreshToken",
          value: function refreshToken(token) {
            return this.http.post(this.CONF.apiUrl + 'auth/refresh', {
              token: token
            });
          }
        }]);

        return ApiService;
      }();

      exports.ApiService = ApiService;

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(i0.ɵɵinject(i1.HttpClient));
      };

      ApiService.ɵprov = i0.ɵɵdefineInjectable({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(ApiService, [{
          type: core_1.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: i1.HttpClient
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function vY5A(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AppRoutingModule = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var router_1 = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var home_component_1 = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");

      var formula_component_1 = __webpack_require__(
      /*! ./formula/formula.component */
      "/bmM");

      var info_component_1 = __webpack_require__(
      /*! ./info/info.component */
      "XSv0");

      var registration_component_1 = __webpack_require__(
      /*! ./registration/registration.component */
      "4K/k");

      var login_component_1 = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/router */
      "tyNb"));

      var routes = [{
        path: '',
        component: home_component_1.HomeComponent
      }, {
        path: 'formula',
        component: formula_component_1.FormulaComponent
      }, {
        path: 'info',
        component: info_component_1.InfoComponent
      }, {
        path: 'signup',
        component: registration_component_1.RegistrationComponent
      }, {
        path: 'login',
        component: login_component_1.LoginComponent
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      exports.AppRoutingModule = AppRoutingModule;
      AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[router_1.RouterModule.forRoot(routes, {
          useHash: true
        })], router_1.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, {
          imports: [i1.RouterModule],
          exports: [router_1.RouterModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        i0.ɵsetClassMetadata(AppRoutingModule, [{
          type: core_1.NgModule,
          args: [{
            imports: [router_1.RouterModule.forRoot(routes, {
              useHash: true
            })],
            exports: [router_1.RouterModule]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function vtpD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LoginComponent = void 0;

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var router_1 = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var auth_service_1 = __webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans");

      var i0 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/core */
      "fXoL"));

      var i1 = tslib_1.__importStar(__webpack_require__(
      /*! ../services/auth/auth.service */
      "9ans"));

      var i2 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/router */
      "tyNb"));

      var i3 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/common */
      "ofXK"));

      var i4 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/forms */
      "3Pt+"));

      function LoginComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 14);
          i0.ɵɵtext(1, " Email o password errati ");
          i0.ɵɵelementEnd();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, router) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.router = router;
          this.error = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.authTokenIsPresent()) {
              if (this.authService.authTokenHasExpired()) {
                this.refreshToken();
              } else {
                this.redirectToHome();
              }
            }
          }
        }, {
          key: "login",
          value: function login() {
            var _this19 = this;

            this.authService.login(this.email, this.password).subscribe(function (data) {
              return _this19.redirectToHome();
            }, function (err) {
              return _this19.error = true;
            });
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this20 = this;

            this.authService.refreshToken().subscribe(function (data) {
              return _this20.redirectToHome();
            }, function (err) {
              return _this20.error = true;
            });
          }
        }, {
          key: "redirectToHome",
          value: function redirectToHome() {
            this.router.navigate(['/']);
          }
        }]);

        return LoginComponent;
      }();

      exports.LoginComponent = LoginComponent;

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router));
      };

      LoginComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 20,
        vars: 3,
        consts: [[1, "container"], [1, "card", "bg-light"], [1, "card-body", "mx-auto", 2, "max-width", "400px"], ["class", "alert alert-danger", "role", "alert", "id", "login-error", 4, "ngIf"], [1, "card-title", "mt-3", "text-center"], [1, "form-group", "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-envelope"], ["id", "email", "name", "email", "placeholder", "Email", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-lock"], ["id", "password", "name", "password", "placeholder", "Password", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-opis", 3, "click"], ["role", "alert", "id", "login-error", 1, "alert", "alert-danger"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "article", 2);
            i0.ɵɵtemplate(3, LoginComponent_div_3_Template, 2, 0, "div", 3);
            i0.ɵɵelementStart(4, "h4", 4);
            i0.ɵɵtext(5, "Log In");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "form");
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵelementStart(9, "span", 7);
            i0.ɵɵelement(10, "i", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "input", 9);
            i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.email = $event;
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 5);
            i0.ɵɵelementStart(13, "div", 6);
            i0.ɵɵelementStart(14, "span", 7);
            i0.ɵɵelement(15, "i", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "input", 11);
            i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.password = $event;
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 12);
            i0.ɵɵelementStart(18, "button", 13);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_18_listener() {
              return ctx.login();
            });
            i0.ɵɵtext(19, " Login ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngModel", ctx.email);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.password);
          }
        },
        directives: [i3.NgIf, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i4.NgForm, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(LoginComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: i1.AuthService
          }, {
            type: i2.Router
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wCLQ":
    /*!*********************************!*\
      !*** ./src/assets/default.json ***!
      \*********************************/

    /*! exports provided: apiUrl, years, default */

    /***/
    function wCLQ(module) {
      module.exports = JSON.parse("{\"apiUrl\":\"https://opis-manager-api.herokuapp.com/api/\",\"years\":[\"2013/2014\",\"2014/2015\",\"2015/2016\",\"2016/2017\",\"2017/2018\",\"2018/2019\",\"2019/2020\",\"2020/2021\"]}");
      /***/
    },

    /***/
    "xDih":
    /*!*************************************!*\
      !*** ./src/app/utils/animations.ts ***!
      \*************************************/

    /*! no static exports found */

    /***/
    function xDih(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.fadeAnimation = void 0;

      var animations_1 = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      exports.fadeAnimation = animations_1.trigger('fadeAnimation', [// The '* => *' will trigger the animation to change between any two states
      animations_1.transition('* => *', [// The query function has three params.
      // First is the event, so this will apply on entering or when the element is added to the DOM.
      // Second is a list of styles or animations to apply.
      // Third we add a config object with optional set to true, this is to signal
      // angular that the animation may not apply as it may or may not be in the DOM.
      animations_1.query(':enter', [animations_1.style({
        opacity: 0
      })], {
        optional: true
      }), animations_1.query(':leave', // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [animations_1.style({
        opacity: 1
      }), animations_1.animate('0.3s', animations_1.style({
        opacity: 0
      }))], {
        optional: true
      }), animations_1.query(':enter', [animations_1.style({
        opacity: 0
      }), animations_1.animate('0.3s', animations_1.style({
        opacity: 1
      }))], {
        optional: true
      })])]);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no static exports found */

    /***/
    function zUnb(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "mrSG");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var environment_1 = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      var __NgCli_bootstrap_1 = tslib_1.__importStar(__webpack_require__(
      /*! ./app/app.module */
      "ZAI4"));

      var __NgCli_bootstrap_2 = tslib_1.__importStar(__webpack_require__(
      /*! @angular/platform-browser */
      "jhN1"));

      if (environment_1.environment.production) {
        core_1.enableProdMode();
      }

      __NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map