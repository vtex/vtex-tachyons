module.exports = {
  "typeScale": [
    3, 2.25, 1.5, 1.25, 1, 0.875, 0.75
  ],
  "spacing": [0.125, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 8, 16],
  "customMedia": [
    { "s": 20 },
    { "ns": {
        "value": 40,
        "minWidth": true
      }
    },
    { "m": {
        "value": 40,
        "minWidth": true
      }
    },
    { "l": {
      "value": 64,
      "minWidth": true
    }
    },
    { "xl": {
        "value": 80,
        "minWidth": true
      }
    }
  ],
  "colors": {
    "rebel-pink": "#F71963",   //DEPRECATE
    "heavy-rebel-pink": "#DD1659", //DEPRECATE
    "elite-purple": "#8914CC", //DEPRECATE
    "near-black": "#3F3F40", //DEPRECATE
    "dark-gray": "#585959", //DEPRECATE
    "mid-gray": "#727273", //DEPRECATE
    "gray": "#979899", //DEPRECATE
    "silver": "#CACBCC", //DEPRECATE
    "light-gray": "#E3E4E6", //DEPRECATE
    "light-silver": "#F2F4F5", //DEPRECATE
    "near-white": "#F7F9FA", //DEPRECATE
    "white": "#FFFFFF", //DEPRECATE
    "washed-blue": "#EDF4FA", //DEPRECATE
    "light-blue": "#cce8ff", //DEPRECATE
    "blue": "#368DF7", //DEPRECATE
    "heavy-blue": "#2A6DBF", //DEPRECATE
    "light-marine": "#3D5980",   //DEPRECATE
    "marine": "#25354D",   //DEPRECATE
    "serious-black": "#142032", //DEPRECATE
    "green": "#8BC34A", //DEPRECATE
    "washed-green": "#EAFCE3", //DEPRECATE
    "red": "#FF4C4C", //DEPRECATE
    "washed-red": "#FFE6E6", //DEPRECATE
    "yellow": "#FFB100", //DEPRECATE
    "washed-yellow": "#FFF6E0", //DEPRECATE

    "black-90": "rgba(0,0,0,.9)",
    "black-80": "rgba(0,0,0,.8)",
    "black-70": "rgba(0,0,0,.7)",
    "black-60": "rgba(0,0,0,.6)",
    "black-50": "rgba(0,0,0,.5)",
    "black-40": "rgba(0,0,0,.4)",
    "black-30": "rgba(0,0,0,.3)",
    "black-20": "rgba(0,0,0,.2)",
    "black-10": "rgba(0,0,0,.1)",
    "black-05": "rgba(0,0,0,.05)",
    "black-025": "rgba(0,0,0,.025)",
    "black-0125": "rgba(0,0,0,.0125)",

    "white-90": "rgba(255,255,255,.9)",
    "white-80": "rgba(255,255,255,.8)",
    "white-70": "rgba(255,255,255,.7)",
    "white-60": "rgba(255,255,255,.6)",
    "white-50": "rgba(255,255,255,.5)",
    "white-40": "rgba(255,255,255,.4)",
    "white-30": "rgba(255,255,255,.3)",
    "white-20": "rgba(255,255,255,.2)",
    "white-10": "rgba(255,255,255,.1)",
    "white-05": "rgba(255,255,255,.05)",
    "white-025": "rgba(255,255,255,.025)",
    "white-0125": "rgba(255,255,255,.0125)"
  },
  "semanticColors": {
    "background": {
      "base": "#ffffff",
      "base--inverted": "#3f3f40",
      "overlay": "rgba(0, 0, 0, 0.5)",
      "action-primary": "#134cd8",
      "action-secondary": "#eef3f7",
      "emphasis": "#f71963",
      "disabled": "#f2f4f5",
      "success": "#8bc34a",
      "success--faded": "#eafce3",
      "danger": "#ff4c4c",
      "danger--faded": "#ffe6e6",
      "warning": "#ffb100",
      "warning--faded": "#fff6e0",
      "muted-1": "#727273",
      "muted-2": "#979899",
      "muted-3": "#cacbcc",
      "muted-4": "#e3e4e6",
      "muted-5": "#f2f4f5"
    },
    "hover-background": {
      "action-primary": "#0c389f",
      "action-secondary": "#dbe9fd",
      "emphasis": "#dd1659",
      "success": "#8bc34a",
      "success--faded": "#eafce3",
      "danger": "#e13232",
      "danger--faded": "#ffe6e6",
      "warning": "#ffb100",
      "warning--faded": "#fff6e0",
      "muted-1": "#727273",
      "muted-2": "#979899",
      "muted-3": "#cacbcc",
      "muted-4": "#e3e4e6",
      "muted-5": "#f2f4f5"
    },
    "active-background": {
      "action-primary": "#0c389f",
      "action-secondary": "#dbe9fd",
      "emphasis": "#dd1659",
      "success": "#8bc34a",
      "success--faded": "#eafce3",
      "danger": "#ff4c4c",
      "danger--faded": "#ffe6e6",
      "warning": "#ffb100",
      "warning--faded": "#fff6e0",
      "muted-1": "#727273",
      "muted-2": "#979899",
      "muted-3": "#cacbcc",
      "muted-4": "#e3e4e6",
      "muted-5": "#f2f4f5"
    },
    "text": {
      "action-primary": "#134cd8",
      "action-secondary": "#eef3f7",
      "link": "#134cd8",
      "emphasis": "#f71963",
      "disabled": "#979899",
      "success": "#79B03A",
      "success--faded": "#eafce3",
      "danger": "#ff4c4c",
      "danger--faded": "#ffe6e6",
      "warning": "#E19D00",
      "warning--faded": "#fff6e0",
      "muted-1": "#727273",
      "muted-2": "#979899",
      "muted-3": "#cacbcc",
      "muted-4": "#e3e4e6",
      "muted-5": "#f2f4f5"
    },
    "visited-text": {
      "link": "#0c389f",
    },
    "hover-text": {
      "action-primary": "#0c389f",
      "action-secondary": "#dbe9fd",
      "link": "#0c389f",
      "emphasis": "#dd1659",
      "success": "#79B03A",
      "success--faded": "#eafce3",
      "danger": "#e13232",
      "danger--faded": "#ffe6e6",
      "warning": "#E19D00",
      "warning--faded": "#fff6e0"
    },
    "active-text": {
      "link": "#0c389f",
      "emphasis": "#dd1659",
      "success": "#79B03A",
      "success--faded": "#eafce3",
      "danger": "#ff4c4c",
      "danger--faded": "#ffe6e6",
      "warning": "#E19D00",
      "warning--faded": "#fff6e0"
    },
    "border": {
      "action-primary": "#1346d8",
      "action-secondary": "#eef3f7",
      "emphasis": "#f71963",
      "disabled": "#e3e4e6",
      "success": "#79B03A",
      "success--faded": "#eafce3",
      "danger": "#ff4c4c",
      "danger--faded": "#ffe6e6",
      "warning": "#E19D00",
      "warning--faded": "#fff6e0",
      "muted-1": "#727273",
      "muted-2": "#979899",
      "muted-3": "#cacbcc",
      "muted-4": "#e3e4e6",
      "muted-5": "#f2f4f5"
    },
    "hover-border": {
      "action-primary": "#0c389f",
      "action-secondary": "#dbe9fd",
      "emphasis": "#dd1659",
      "success": "#79B03A",
      "success--faded": "#eafce3",
      "danger": "#e13232",
      "danger--faded": "#ffe6e6",
      "warning": "#E19D00",
      "warning--faded": "#fff6e0",
      "muted-1": "#727273",
      "muted-2": "#979899",
      "muted-3": "#cacbcc",
      "muted-4": "#e3e4e6",
      "muted-5": "#f2f4f5"
    },
    "active-border": {
      "action-primary": "#0c389f",
      "action-secondary": "#dbe9fd",
      "emphasis": "#dd1659",
      "success": "#79B03A",
      "success--faded": "#eafce3",
      "danger": "#ff4c4c",
      "danger--faded": "#ffe6e6",
      "warning": "#E19D00",
      "warning--faded": "#fff6e0",
      "muted-1": "#727273",
      "muted-2": "#979899",
      "muted-3": "#cacbcc",
      "muted-4": "#e3e4e6",
      "muted-5": "#f2f4f5"
    },
    "on": {
      "base": "#3f3f40",
      "base--inverted": "#ffffff",
      "action-primary": "#ffffff",
      "action-secondary": "#134cd8",
      "emphasis": "#ffffff",
      "disabled": "#979899",
      "success": "#ffffff",
      "success--faded": "#3f3f40",
      "danger": "#ffffff",
      "danger--faded": "#3f3f40",
      "warning": "#ffffff",
      "warning--faded": "#1a1a1a",
      "muted-1": "#ffffff",
      "muted-2": "#ffffff",
      "muted-3": "#3f3f40",
      "muted-4": "#3f3f40",
      "muted-5": "#3f3f40"
    },
    "hover-on": {
      "action-primary": "#ffffff",
      "action-secondary": "#134cd8",
      "emphasis": "#ffffff",
      "success": "#ffffff",
      "success--faded": "#3f3f40",
      "danger": "#ffffff",
      "danger--faded": "#3f3f40",
      "warning": "#ffffff",
      "warning--faded": "#1a1a1a"
    },
    "active-on": {
      "action-primary": "#ffffff",
      "action-secondary": "#134cd8",
      "emphasis": "#ffffff",
      "success": "#ffffff",
      "success--faded": "#3f3f40",
      "danger": "#ffffff",
      "danger--faded": "#3f3f40",
      "warning": "#ffffff",
      "warning--faded": "#1a1a1a"
    },
  },
  "borderWidths": [0, 0.125, 0.25, 0.5, 1, 2],
  "borderRadius": [0, 0.125, 0.25, 0.5, 1],
  "widths": [1, 2, 4, 8, 16],
  "maxWidths": [1, 2, 4, 8, 16, 32, 48, 64, 96],
  "heights": [1, 2, 4, 8, 16],
  "sizes": [
    {name: "small", value: 2},
    {name: "regular", value: 2.5},
    {name: "large", value: 3},
  ],
  "typography":{
    "measure": [30, 34, 20],
    "styles": {
      "heading-1": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "700",
        "fontSize": "3rem",
        "textTransform": "initial",
        "letterSpacing": "0"
      },
      "heading-2": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "700",
        "fontSize": "2.25rem",
        "textTransform": "initial",
        "letterSpacing": "0"
      },
      "heading-3": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "700",
        "fontSize": "1.75rem",
        "textTransform": "initial",
        "letterSpacing": "0"
      },
      "heading-4": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "normal",
        "fontSize": "1.5rem",
        "textTransform": "initial",
        "letterSpacing": "0"
      },
      "heading-5": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "normal",
        "fontSize": "1.25rem",
        "textTransform": "initial",
        "letterSpacing": "0"
      },
      "heading-6": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "normal",
        "fontSize": "1.25rem",
        "textTransform": "initial",
        "letterSpacing": "0"
      },
      "body": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "normal",
        "fontSize": "1rem",
        "textTransform": "initial",
        "letterSpacing": "0"
      },
      "small": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "normal",
        "fontSize": "0.875rem",
        "textTransform": "initial",
        "letterSpacing": "0"
      },
      "mini": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "normal",
        "fontSize": "0.75rem",
        "textTransform": "initial",
        "letterSpacing": "0"
      },
      "action": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "500",
        "fontSize": "1rem",
        "textTransform": "uppercase",
        "letterSpacing": "0"
      },
      "action--small": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "500",
        "fontSize": "0.875rem",
        "textTransform": "uppercase",
        "letterSpacing": "0"
      },
      "action--large": {
        "fontFamily": "Fabriga, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        "fontWeight": "500",
        "fontSize": "1.25rem",
        "textTransform": "uppercase",
        "letterSpacing": "0"
      },
      "code": {
        "fontFamily": "Consolas, monaco, monospace",
        "fontWeight": "normal",
        "fontSize": "1rem",
        "textTransform": "initial",
        "letterSpacing": "0"
      }
    }
  },
  "opacity": [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05, 0.025, 0]
}
