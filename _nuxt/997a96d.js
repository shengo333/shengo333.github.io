(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{193:function(e,t,n){var content=n(195);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(88).default)("2ec5d14e",content,!0,{sourceMap:!1})},194:function(e,t,n){"use strict";n(193)},195:function(e,t,n){var r=n(87)(!1);r.push([e.i,'#header-wrapper[data-v-4e6d3f6d]{background:hsla(0,0%,50.2%,.39);margin-bottom:1.5rem;margin-top:2rem;padding:0 2rem}#header-wrapper[data-v-4e6d3f6d],.routes[data-v-4e6d3f6d]{display:flex;justify-content:space-between}.route[data-v-4e6d3f6d]{padding:0 1rem;text-decoration:none}h1[data-v-4e6d3f6d]{font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:50px;font-weight:700;letter-spacing:-2.5px;line-height:50px;color:rgba(83,80,80,.73333)}h1[data-v-4e6d3f6d],h3[data-v-4e6d3f6d]{font-style:normal;text-transform:none}h3[data-v-4e6d3f6d]{font-family:Esteban,Georgia,"Times New Roman",serif;font-size:20px;font-weight:400;letter-spacing:normal;line-height:20px;color:#000}',""]),e.exports=r},196:function(e,t,n){"use strict";n.r(t);var r={name:"Header"},o=(n(194),n(31)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"header-wrapper"}},[e._m(0),e._v(" "),n("div",{staticClass:"routes"},[n("router-link",{staticClass:"route",attrs:{to:"/"}},[n("h3",[e._v(" Home")])]),e._v(" "),n("router-link",{staticClass:"route",attrs:{to:"/games"}},[n("h3",[e._v(" Game page")])]),e._v(" "),n("router-link",{staticClass:"route",attrs:{to:"/pages"}},[n("h3",[e._v("Web pages")])]),e._v(" "),n("router-link",{staticClass:"route",attrs:{to:"/projects"}},[n("h3",[e._v("Check currency")])]),e._v(" "),n("router-link",{staticClass:"route",attrs:{to:"/resume"}},[n("h3",[e._v("Resume page")])])],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Beka Shengelia")])])}],!1,null,"4e6d3f6d",null);t.default=component.exports},203:function(e,t,n){var content=n(211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(88).default)("dd72b66a",content,!0,{sourceMap:!1})},209:function(e,t,n){"use strict";var r=n(3),o=n(91)(5),l="find",c=!0;l in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(90)(l)},210:function(e,t,n){"use strict";n(203)},211:function(e,t,n){var r=n(87)(!1);r.push([e.i,".vsc-initialized,body{margin:0!important}.game-mainWrapper a{color:#fff;padding:1rem;font-size:1.5rem;text-decoration:none}.game-mainWrapper h1{color:rgba(105,119,24,.651)}.page-enter-active,.page-leave-active{transition:opacity .9s}.page-enter,.page-leave-to{opacity:0}.content-wrapper{display:flex;flex-direction:column;align-items:center}.grid{display:grid;grid-template-columns:repeat(3,0fr)}.cell-input,.grid{justify-content:center}.cell-input{height:7rem;width:7rem;background-color:rgba(50,105,156,.63);border:1px solid #fff;display:flex;align-items:center}#changeMe{height:5rem;width:5rem;background-color:red}.game-mainWrapper{display:flex;flex-direction:column;align-items:center}.game-mainWrapper .router-link a{padding:.5rem;text-decoration:none;border:1px solid #9c9b9b;background:#969595;font-size:1.2rem;color:#fff;font-family:Montserrat,Helvetica,Arial,sans-serif}.router-link{margin-top:1.4rem}",""]),e.exports=r},229:function(e,t,n){"use strict";n.r(t);n(209),n(33),n(12),n(26),n(21),n(34),n(35),n(36);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,f=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){f=!0,l=e},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw l}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={components:{Header:n(196).default},methods:{changeUser:function(){this.userOne=!this.userOne,this.userTwo=!this.userTwo,this.userOne?document.querySelector("h1").innerHTML="User one":document.querySelector("h1").innerHTML="User Two"},changeColor:function(e){this.isBoxClickable(e)?(this.userOne&&(document.getElementById(e).innerHTML="0",this.playerOneClicks.push(e)),this.userTwo&&(document.getElementById(e).innerHTML="X",this.playerTwoClicks.push(e)),this.allClicks.push(e),this.changeUser(),this.getResults()):alert("this box allready clicked")},isBoxClickable:function(e){return!this.allClicks.find((function(element){return element==e}))},getResults:function(){this.checkWinner(),this.allClicks.length>=9&&(alert("game has been finished, nobody wins"),this.startAgain())},startAgain:function(){this.allClicks=[],this.playerOneClicks=[],this.playerTwoClicks=[];var e,t=r(document.getElementsByClassName("cell-input"));try{for(t.s();!(e=t.n()).done;){e.value.innerHTML=""}}catch(e){t.e(e)}finally{t.f()}},checkWinner:function(){this.isPlayeroneWinner(),this.isPlayeroneWinner()&&this.startAgain(),this.isPlayerTwoWinner(),this.isPlayerTwoWinner()&&this.startAgain()},isPlayeroneWinner:function(){var e=this;if(this.winningCombinations.some((function(t){return e.checkWinningCombination(t,e.playerOneClicks)})))return alert("player one wins"),!0;console.log("aint working")},isPlayerTwoWinner:function(){var e=this;if(this.winningCombinations.some((function(t){return e.checkWinningCombination(t,e.playerTwoClicks)})))return alert("player Two wins"),!0;console.log("aint working")},checkWinningCombination:function(e,t){return e.every((function(e){return t.find((function(t){return t==e}))}))}},data:function(){return{cellIds:[11,12,13,21,22,23,31,32,33],userOne:!0,userTwo:!1,allClicks:[],playerOneClicks:[],playerTwoClicks:[],winningCombinations:[[11,12,13],[21,22,23],[31,32,33],[12,22,32],[13,23,33],[11,21,31],[11,22,33],[13,22,31]]}}},c=(n(210),n(31)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),e._v(" "),n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"game-mainWrapper"},[n("h1",[e._v(" Please click on the box to Start the game")]),e._v(" "),n("div",{staticClass:"grid"},e._l(e.cellIds,(function(t){return n("div",{key:t,staticClass:"cell-input",attrs:{id:t},on:{click:function(n){return e.changeColor(t)}}})})),0)])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);