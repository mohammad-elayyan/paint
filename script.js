const _0x145b99 = _0x5d91;
function _0x5d91(_0x1c348f, _0x4d4b09) {
  const _0x4a3a1e = _0x4a3a();
  return (
    (_0x5d91 = function (_0x5d912a, _0x4537e1) {
      _0x5d912a = _0x5d912a - 0x176;
      let _0x53e58b = _0x4a3a1e[_0x5d912a];
      return _0x53e58b;
    }),
    _0x5d91(_0x1c348f, _0x4d4b09)
  );
}
(function (_0x4bfa57, _0x37ebe3) {
  const _0x1496cd = _0x5d91,
    _0x1a0f1e = _0x4bfa57();
  while (!![]) {
    try {
      const _0xe77345 =
        (parseInt(_0x1496cd(0x1c2)) / 0x1) *
          (parseInt(_0x1496cd(0x1a0)) / 0x2) +
        (-parseInt(_0x1496cd(0x188)) / 0x3) *
          (parseInt(_0x1496cd(0x197)) / 0x4) +
        parseInt(_0x1496cd(0x1b2)) / 0x5 +
        parseInt(_0x1496cd(0x1be)) / 0x6 +
        -parseInt(_0x1496cd(0x1ba)) / 0x7 +
        (-parseInt(_0x1496cd(0x18a)) / 0x8) *
          (-parseInt(_0x1496cd(0x1ca)) / 0x9) +
        -parseInt(_0x1496cd(0x19d)) / 0xa;
      if (_0xe77345 === _0x37ebe3) break;
      else _0x1a0f1e["push"](_0x1a0f1e["shift"]());
    } catch (_0x1ec047) {
      _0x1a0f1e["push"](_0x1a0f1e["shift"]());
    }
  }
})(_0x4a3a, 0xd3be9);
const canvas = document[_0x145b99(0x1ae)](_0x145b99(0x1d4)),
  toolBtns = document["querySelectorAll"](_0x145b99(0x1a2)),
  fillColor = document[_0x145b99(0x1ae)]("#fill-color"),
  sizeSlider = document[_0x145b99(0x1ae)](_0x145b99(0x1a1)),
  colorBtns = document[_0x145b99(0x183)](_0x145b99(0x1bb)),
  colorPicker = document["querySelector"](_0x145b99(0x1af)),
  clearCanvas = document[_0x145b99(0x1ae)](_0x145b99(0x1c8)),
  saveImg = document["querySelector"](_0x145b99(0x18b)),
  addImg = document[_0x145b99(0x1ae)](_0x145b99(0x1b6)),
  ctx = canvas["getContext"]("2d");
function _0x4a3a() {
  const _0x2361d0 = [
    "offsetWidth",
    "change",
    ".clear-canvas",
    "getElementById",
    "18fbtyRZ",
    "getBoundingClientRect",
    "addEventListener",
    "classList",
    "forEach",
    "height",
    "brush",
    "files",
    "#FFF9F5",
    "fill",
    "canvas",
    "result",
    "toDataURL",
    "lineTo",
    "strokeStyle",
    "active",
    "putImageData",
    "rectangle",
    "offsetY",
    "touchend",
    "strokeRect",
    "beginPath",
    "checked",
    "download",
    "color",
    "image",
    "value",
    "pageY",
    ".options\x20.selected",
    "querySelectorAll",
    "pow",
    "rotate(90deg)",
    "add",
    "eraser",
    "2048073ThscjN",
    "width",
    "5869160Sdpqyc",
    ".save-img",
    ".jpg",
    "closePath",
    "children",
    "stroke",
    "transform",
    "fillRect",
    "selected",
    "addChild",
    "onload",
    "clearRect",
    "now",
    "4yiWqcG",
    "getImageData",
    "offsetX",
    "load",
    "click",
    "top",
    "26179700wdCrwG",
    "onclick",
    "remove",
    "834880fxZhCA",
    "#size-slider",
    ".tool",
    "fileInput",
    "href",
    "preventDefault",
    "naturalWidth",
    "lineWidth",
    "pageX",
    "sqrt",
    "parentElement",
    "fillStyle",
    "touchmove",
    "abs",
    "querySelector",
    "#color-picker",
    "Stage",
    "touchstart",
    "7647440TcDzjD",
    "left",
    "log",
    "push",
    "#add-img",
    "regY",
    "target",
    "circle",
    "5083162asikHo",
    ".colors\x20.option",
    "mousedown",
    "targetTouches",
    "6374844TiROhh",
    "src",
    "getComputedStyle",
    "readAsDataURL",
    "2veoygj",
    ".options\x20.active",
    "naturalHeight",
    "getPropertyValue",
  ];
  _0x4a3a = function () {
    return _0x2361d0;
  };
  return _0x4a3a();
}
let prevMouseX,
  prevMouseY,
  newMouseX,
  newMouseY,
  snapshot,
  elements = [],
  isDrawing = ![],
  selectedTool = _0x145b99(0x1d0),
  brushWidth = 0x5,
  selectedColor = "#000";
const setCanvasBackground = () => {
  const _0xe0dc1 = _0x145b99;
  (ctx[_0xe0dc1(0x1ab)] = _0xe0dc1(0x1d2)),
    ctx[_0xe0dc1(0x191)](0x0, 0x0, canvas[_0xe0dc1(0x189)], canvas["height"]),
    (ctx[_0xe0dc1(0x1ab)] = selectedColor);
};
window[_0x145b99(0x1cc)](_0x145b99(0x19a), () => {
  const _0x1393c1 = _0x145b99;
  (canvas[_0x1393c1(0x189)] = canvas[_0x1393c1(0x1c6)]),
    (canvas[_0x1393c1(0x1cf)] = canvas["offsetHeight"]),
    setCanvasBackground();
});
const drawRect = (_0x335c61) => {
    const _0x37a925 = _0x145b99;
    let _0x3951ba = _0x335c61[_0x37a925(0x1b8)][_0x37a925(0x1cb)]();
    (newMouseX = _0x335c61[_0x37a925(0x199)]
      ? _0x335c61["offsetX"]
      : _0x335c61[_0x37a925(0x1bd)][0x0][_0x37a925(0x1a8)] -
        _0x3951ba[_0x37a925(0x1b3)]),
      (newMouseY = _0x335c61[_0x37a925(0x178)]
        ? _0x335c61[_0x37a925(0x178)]
        : _0x335c61[_0x37a925(0x1bd)][0x0][_0x37a925(0x181)] -
          _0x3951ba[_0x37a925(0x19c)]);
    if (!fillColor[_0x37a925(0x17c)])
      return ctx[_0x37a925(0x17a)](
        newMouseX,
        newMouseY,
        prevMouseX - newMouseX,
        prevMouseY - newMouseY
      );
    ctx[_0x37a925(0x191)](
      newMouseX,
      newMouseY,
      prevMouseX - newMouseX,
      prevMouseY - newMouseY
    );
  },
  drawCircle = (_0x311398) => {
    const _0x343be3 = _0x145b99;
    let _0xdb153e = _0x311398[_0x343be3(0x1b8)]["getBoundingClientRect"]();
    (newMouseX = _0x311398[_0x343be3(0x199)]
      ? _0x311398["offsetX"]
      : _0x311398[_0x343be3(0x1bd)][0x0][_0x343be3(0x1a8)] -
        _0xdb153e[_0x343be3(0x1b3)]),
      (newMouseY = _0x311398["offsetY"]
        ? _0x311398[_0x343be3(0x178)]
        : _0x311398[_0x343be3(0x1bd)][0x0][_0x343be3(0x181)] -
          _0xdb153e[_0x343be3(0x19c)]),
      ctx["beginPath"]();
    let _0x4facfe = Math[_0x343be3(0x1a9)](
      Math[_0x343be3(0x184)](prevMouseX - newMouseX, 0x2) +
        Math[_0x343be3(0x184)](prevMouseY - newMouseY, 0x2)
    );
    ctx["arc"](prevMouseX, prevMouseY, _0x4facfe, 0x0, 0x2 * Math["PI"]),
      fillColor["checked"] ? ctx[_0x343be3(0x1d3)]() : ctx["stroke"](),
      elements[_0x343be3(0x1b5)]({
        x: prevMouseX,
        y: prevMouseY,
        radius: _0x4facfe,
        start: 0x0,
        end: 0x2 * Math["PI"],
      });
  },
  drawTriangle = (_0x6caafa) => {
    const _0x58c943 = _0x145b99;
    let _0x3e9fad = _0x6caafa["target"]["getBoundingClientRect"]();
    (newMouseX = _0x6caafa["offsetX"]
      ? _0x6caafa[_0x58c943(0x199)]
      : _0x6caafa[_0x58c943(0x1bd)][0x0][_0x58c943(0x1a8)] -
        _0x3e9fad[_0x58c943(0x1b3)]),
      (newMouseY = _0x6caafa[_0x58c943(0x178)]
        ? _0x6caafa[_0x58c943(0x178)]
        : _0x6caafa[_0x58c943(0x1bd)][0x0][_0x58c943(0x181)] -
          _0x3e9fad[_0x58c943(0x19c)]),
      ctx["beginPath"](),
      ctx["moveTo"](prevMouseX, prevMouseY),
      ctx[_0x58c943(0x1d7)](newMouseX, newMouseY),
      ctx[_0x58c943(0x1d7)](prevMouseX * 0x2 - newMouseX, newMouseY),
      ctx[_0x58c943(0x18d)](),
      fillColor[_0x58c943(0x17c)]
        ? ctx[_0x58c943(0x1d3)]()
        : ctx[_0x58c943(0x18f)]();
  },
  startDraw = (_0x4e201c) => {
    const _0x3b27db = _0x145b99;
    isDrawing = !![];
    let _0x21a1e0 = _0x4e201c[_0x3b27db(0x1b8)][_0x3b27db(0x1cb)]();
    (prevMouseX = _0x4e201c[_0x3b27db(0x199)]
      ? _0x4e201c[_0x3b27db(0x199)]
      : _0x4e201c[_0x3b27db(0x1bd)][0x0][_0x3b27db(0x1a8)] -
        _0x21a1e0[_0x3b27db(0x1b3)]),
      (prevMouseY = _0x4e201c[_0x3b27db(0x178)]
        ? _0x4e201c["offsetY"]
        : _0x4e201c["targetTouches"][0x0][_0x3b27db(0x181)] - _0x21a1e0["top"]),
      ctx[_0x3b27db(0x17b)](),
      (ctx[_0x3b27db(0x1a7)] = brushWidth),
      (ctx[_0x3b27db(0x1d8)] = selectedColor),
      (ctx[_0x3b27db(0x1ab)] = selectedColor),
      (snapshot = ctx[_0x3b27db(0x198)](
        0x0,
        0x0,
        canvas[_0x3b27db(0x189)],
        canvas["height"]
      ));
  },
  drawing = (_0x2a61d8) => {
    const _0x29d04b = _0x145b99;
    if (!isDrawing) return;
    ctx[_0x29d04b(0x176)](snapshot, 0x0, 0x0);
    let _0x1d28bf = _0x2a61d8[_0x29d04b(0x1b8)]["getBoundingClientRect"]();
    (newMouseX = _0x2a61d8[_0x29d04b(0x199)]
      ? _0x2a61d8[_0x29d04b(0x199)]
      : _0x2a61d8[_0x29d04b(0x1bd)][0x0][_0x29d04b(0x1a8)] -
        _0x1d28bf[_0x29d04b(0x1b3)]),
      (newMouseY = _0x2a61d8[_0x29d04b(0x178)]
        ? _0x2a61d8[_0x29d04b(0x178)]
        : _0x2a61d8[_0x29d04b(0x1bd)][0x0][_0x29d04b(0x181)] -
          _0x1d28bf[_0x29d04b(0x19c)]);
    if (selectedTool === "brush" || selectedTool === _0x29d04b(0x187))
      (ctx[_0x29d04b(0x1d8)] =
        selectedTool === "eraser" ? _0x29d04b(0x1d2) : selectedColor),
        ctx[_0x29d04b(0x1d7)](newMouseX, newMouseY),
        ctx[_0x29d04b(0x18f)]();
    else {
      if (selectedTool === _0x29d04b(0x177)) drawRect(_0x2a61d8);
      else
        selectedTool === _0x29d04b(0x1b9)
          ? drawCircle(_0x2a61d8)
          : drawTriangle(_0x2a61d8);
    }
  };
toolBtns[_0x145b99(0x1ce)]((_0x57def9) => {
  const _0x24d0a0 = _0x145b99;
  _0x57def9[_0x24d0a0(0x1cc)](_0x24d0a0(0x19b), () => {
    const _0x30c23b = _0x24d0a0;
    document[_0x30c23b(0x1ae)](_0x30c23b(0x1c3))[_0x30c23b(0x1cd)][
      _0x30c23b(0x19f)
    ]("active"),
      _0x57def9[_0x30c23b(0x1cd)][_0x30c23b(0x186)](_0x30c23b(0x1d9)),
      (selectedTool = _0x57def9["id"]);
  }),
    _0x57def9[_0x24d0a0(0x1cc)](_0x24d0a0(0x1b1), () => {
      const _0x27d16f = _0x24d0a0;
      document[_0x27d16f(0x1ae)](_0x27d16f(0x1c3))[_0x27d16f(0x1cd)][
        _0x27d16f(0x19f)
      ](_0x27d16f(0x1d9)),
        _0x57def9[_0x27d16f(0x1cd)]["add"](_0x27d16f(0x1d9)),
        (selectedTool = _0x57def9["id"]);
    });
}),
  sizeSlider[_0x145b99(0x1cc)](
    "change",
    () => (brushWidth = sizeSlider["value"])
  ),
  colorBtns[_0x145b99(0x1ce)]((_0x5e07bd) => {
    const _0x1604df = _0x145b99;
    _0x5e07bd[_0x1604df(0x1cc)](_0x1604df(0x19b), () => {
      const _0x15275f = _0x1604df;
      document["querySelector"](_0x15275f(0x182))?.[_0x15275f(0x1cd)][
        _0x15275f(0x19f)
      ](_0x15275f(0x192)),
        _0x5e07bd[_0x15275f(0x1cd)][_0x15275f(0x186)](_0x15275f(0x192)),
        (selectedColor = window[_0x15275f(0x1c0)](_0x5e07bd)[_0x15275f(0x1c5)](
          _0x15275f(0x17e)
        ));
    });
  }),
  colorPicker[_0x145b99(0x1cc)](_0x145b99(0x1c7), () => {
    const _0x3394cd = _0x145b99;
    (colorPicker[_0x3394cd(0x1aa)]["style"]["color"] =
      colorPicker[_0x3394cd(0x180)]),
      colorPicker[_0x3394cd(0x1aa)][_0x3394cd(0x19b)]();
  }),
  clearCanvas[_0x145b99(0x1cc)](_0x145b99(0x19b), () => {
    const _0x5d794a = _0x145b99;
    ctx[_0x5d794a(0x195)](0x0, 0x0, canvas[_0x5d794a(0x189)], canvas["height"]),
      setCanvasBackground();
  }),
  saveImg[_0x145b99(0x1cc)]("click", () => {
    const _0x42f60e = _0x145b99,
      _0x5526bd = document["createElement"]("a");
    (_0x5526bd[_0x42f60e(0x17d)] = Date[_0x42f60e(0x196)]() + _0x42f60e(0x18c)),
      (_0x5526bd[_0x42f60e(0x1a4)] = canvas[_0x42f60e(0x1d6)]()),
      _0x5526bd[_0x42f60e(0x19b)]();
  }),
  canvas["addEventListener"](_0x145b99(0x1bc), startDraw),
  canvas["addEventListener"]("mousemove", drawing),
  canvas[_0x145b99(0x1cc)]("mouseup", () => {
    const _0x4f24b1 = _0x145b99;
    (isDrawing = ![]),
      elements["push"]({
        x: prevMouseX,
        y: prevMouseY,
        width: Math[_0x4f24b1(0x1ad)](prevMouseX - newMouseX),
        height: Math["abs"](prevMouseY - newMouseY),
        isDragging: ![],
      }),
      console[_0x4f24b1(0x1b4)](elements);
  }),
  canvas["addEventListener"](_0x145b99(0x1b1), (_0x298c70) => {
    startDraw(_0x298c70);
  }),
  canvas[_0x145b99(0x1cc)](_0x145b99(0x1ac), (_0xb2426c) => {
    const _0x1b143a = _0x145b99;
    _0xb2426c[_0x1b143a(0x1a5)](), drawing(_0xb2426c);
  }),
  canvas[_0x145b99(0x1cc)](_0x145b99(0x179), (_0x7f8858) => {
    isDrawing = ![];
  });
const stage = new createjs[_0x145b99(0x1b0)](_0x145b99(0x1d4)),
  fileInput = document[_0x145b99(0x1c9)](_0x145b99(0x1a3));
(addImg[_0x145b99(0x19e)] = () => {
  const _0x2dee9c = _0x145b99;
  fileInput[_0x2dee9c(0x19b)]();
}),
  fileInput[_0x145b99(0x1cc)]("change", function (_0x5e0d70) {
    const _0xedf4d9 = _0x145b99,
      _0x291b14 = _0x5e0d70[_0xedf4d9(0x1b8)][_0xedf4d9(0x1d1)][0x0],
      _0x129133 = new FileReader();
    (_0x129133[_0xedf4d9(0x194)] = function (_0x1c86cf) {
      const _0x454997 = _0xedf4d9,
        _0x3fe3dc = new Image();
      (_0x3fe3dc[_0x454997(0x194)] = function () {
        const _0x31173f = _0x454997;
        _0x3fe3dc["style"][_0x31173f(0x190)] = _0x31173f(0x185);
        const _0x126ed2 = new createjs["Bitmap"](_0x3fe3dc);
        (_0x126ed2["regX"] = _0x3fe3dc["width"] / 0x2),
          (_0x126ed2[_0x31173f(0x1b7)] = _0x3fe3dc[_0x31173f(0x1cf)] / 0x2),
          (_0x126ed2["x"] = stage[_0x31173f(0x1d4)][_0x31173f(0x189)] / 0x2),
          (_0x126ed2["y"] = stage[_0x31173f(0x1d4)][_0x31173f(0x1cf)] / 0x2),
          (_0x126ed2[_0x31173f(0x17f)][_0x31173f(0x1a6)] >
            stage["canvas"][_0x31173f(0x189)] ||
            _0x126ed2[_0x31173f(0x17f)][_0x31173f(0x1c4)] >
              stage[_0x31173f(0x1d4)][_0x31173f(0x1cf)]) &&
            ((_0x126ed2["scaleX"] =
              stage[_0x31173f(0x1d4)][_0x31173f(0x189)] /
              _0x126ed2[_0x31173f(0x17f)][_0x31173f(0x1a6)]),
            (_0x126ed2["scaleY"] =
              stage[_0x31173f(0x1d4)][_0x31173f(0x1cf)] /
              _0x126ed2[_0x31173f(0x17f)]["naturalHeight"])),
          (stage[_0x31173f(0x18e)] = []),
          stage[_0x31173f(0x193)](_0x126ed2),
          stage["update"]();
      }),
        (_0x3fe3dc[_0x454997(0x1bf)] =
          _0x1c86cf[_0x454997(0x1b8)][_0x454997(0x1d5)]);
    }),
      _0x129133[_0xedf4d9(0x1c1)](_0x291b14);
  });
