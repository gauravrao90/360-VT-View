TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5",
       "backwardYaw": 153.15,
       "class": "AdjacentPanorama",
       "yaw": 15.69,
       "distance": 1
      }
     ],
     "label": "Living Room",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_B7537002_B9B2_BBF9_41E1_B98B17397956",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 2)",
           "toolTip": "Kitchen"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_0_HS_1_0.png",
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 80
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -55.96,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -0.39,
           "hfov": 7.5
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_0_HS_1_0_0_map.gif",
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 40
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.39,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -55.96,
           "hfov": 7.5
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_B6AE52B6_B9B2_5C19_41DA_FC78711C862B",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "toolTip": "Dining Area"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_0_HS_0_0.png",
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 80
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 15.69,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -1.09,
           "hfov": 7.5
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_0_HS_0_0_0_map.gif",
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 40
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 15.69,
           "hfov": 7.5
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_r_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_f_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_b_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_u_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_d_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_l_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_t.jpg",
     "mapLocations": [
      {
       "y": 437.95,
       "angle": 179.43,
       "class": "PanoramaMapLocation",
       "map": {
        "scaleMode": "fit_inside",
        "image": {
         "levels": [
          {
           "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3.jpeg",
           "height": 1027,
           "class": "ImageResourceLevel",
           "width": 1600
          },
          {
           "grayscale": true,
           "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_lq.jpeg",
           "height": 513,
           "class": "ImageResourceLevel",
           "width": 800
          }
         ],
         "class": "ImageResource"
        },
        "label": "1 BHK-Type A_For VR Plan-01",
        "fieldOfViewOverlayInsideOpacity": 0.4,
        "thumbnailUrl": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_t.jpg",
        "overlays": [
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_HS_0.png",
              "height": 101,
              "class": "ImageResourceLevel",
              "width": 89
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 138.9,
           "height": 110,
           "y": 880.9,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_AFFACF7E_B9AE_C409_41E4_CA940FA722CB",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 0)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 880.9,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_HS_0_map.gif",
              "height": 50,
              "class": "ImageResourceLevel",
              "width": 44
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 138.9
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_HS_1.png",
              "height": 101,
              "class": "ImageResourceLevel",
              "width": 89
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 298.9,
           "height": 110,
           "y": 382.95,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_AF3861D9_B9D1_DC0B_41E1_8C68B254971F",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 1)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 382.95,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_HS_1_map.gif",
              "height": 50,
              "class": "ImageResourceLevel",
              "width": 44
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 298.9
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_HS_2.png",
              "height": 101,
              "class": "ImageResourceLevel",
              "width": 89
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 806.95,
           "height": 110,
           "y": 541.95,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_AE9EBBA2_B9D2_4C39_41E6_6FF1485F297E",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 2)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 541.95,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_HS_2_map.gif",
              "height": 50,
              "class": "ImageResourceLevel",
              "width": 44
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 806.95
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_HS_3.png",
              "height": 101,
              "class": "ImageResourceLevel",
              "width": 89
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 666.95,
           "height": 110,
           "y": 820.95,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_AF65903E_B9D2_FC06_41D9_6EAD62C48B79",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 4)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 820.95,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_HS_3_map.gif",
              "height": 50,
              "class": "ImageResourceLevel",
              "width": 44
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 666.95
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_HS_4.png",
              "height": 101,
              "class": "ImageResourceLevel",
              "width": 89
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 1119.95,
           "height": 110,
           "y": 568.95,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_AE80563B_B9D2_440E_41B4_687FB73F14A4",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 3)",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 568.95,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3_HS_4_map.gif",
              "height": 50,
              "class": "ImageResourceLevel",
              "width": 44
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 1119.95
          }
         }
        ],
        "fieldOfViewOverlayInsideColor": "#FFFFFF",
        "minimumZoomFactor": 0.99,
        "class": "Map",
        "fieldOfViewOverlayOutsideColor": "#000000",
        "maximumZoomFactor": 0.99,
        "fieldOfViewOverlayOutsideOpacity": 0,
        "fieldOfViewOverlayRadiusScale": 0.1,
        "initialZoomFactor": 0.99,
        "width": 1725,
        "height": 1108,
        "id": "map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3"
       },
       "x": 346.9
      }
     ],
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104"
    },
    "backwardYaw": 2.88,
    "class": "AdjacentPanorama",
    "yaw": -26.85,
    "distance": 1
   },
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A",
          "backwardYaw": 177.38,
          "class": "AdjacentPanorama",
          "yaw": -172.47,
          "distance": 1
         }
        ],
        "label": "Master Bedroom",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_A9EC99B5_B9B2_4C1B_41D1_3F358C91AA58",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "toolTip": "Kitchen"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_0_HS_0_0.png",
                 "height": 90,
                 "class": "ImageResourceLevel",
                 "width": 90
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -172.47,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 1.93,
              "hfov": 8.43
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_0_HS_0_0_0_map.gif",
                 "height": 45,
                 "class": "ImageResourceLevel",
                 "width": 45
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 1.93,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -172.47,
              "hfov": 8.43
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_r_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_f_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_b_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_u_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_d_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_l_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_t.jpg",
        "mapLocations": [
         {
          "y": 623.95,
          "angle": 4.48,
          "class": "PanoramaMapLocation",
          "map": "this.map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3",
          "x": 1167.95
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7"
       },
       "backwardYaw": 164.31,
       "class": "AdjacentPanorama",
       "yaw": 118.55,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A",
          "backwardYaw": 177.38,
          "class": "AdjacentPanorama",
          "yaw": -115.58,
          "distance": 1
         }
        ],
        "label": "Bathroom",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_A2AAD72B_B9D1_C40E_41E0_4A998D4FB343",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_0_HS_0_0.png",
                 "height": 80,
                 "class": "ImageResourceLevel",
                 "width": 80
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -115.58,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 2.92,
              "hfov": 7.49
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_0_HS_0_0_0_map.gif",
                 "height": 40,
                 "class": "ImageResourceLevel",
                 "width": 40
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 2.92,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -115.58,
              "hfov": 7.49
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_r_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_f_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_b_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_u_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_d_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_l_hq.jpeg",
             "height": 1216,
             "class": "ImageResourceLevel",
             "width": 1216
            },
            {
             "url": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_t.jpg",
        "mapLocations": [
         {
          "y": 875.95,
          "angle": 104.54,
          "class": "PanoramaMapLocation",
          "map": "this.map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3",
          "x": 714.95
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104"
       },
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": -148.88,
       "distance": 1
      },
      {
       "panorama": "this.panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5",
       "backwardYaw": 153.15,
       "class": "AdjacentPanorama",
       "yaw": -125.52,
       "distance": 1
      }
     ],
     "label": "Kitchen",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_B6AAD27F_B9B6_FC07_41C3_AC96FEE3420F",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "toolTip": "Dining Area"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_0_HS_1_0.png",
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 80
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -125.52,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -1.09,
           "hfov": 7.5
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_0_HS_1_0_0_map.gif",
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 40
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -1.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -125.52,
           "hfov": 7.5
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_A989F28A_B9B7_DC09_41D3_BE3A7D1576BB",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 3)",
           "toolTip": "Master Bedroom"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_0_HS_0_0.png",
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 80
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 118.55,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 0.3,
           "hfov": 7.5
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_0_HS_0_0_0_map.gif",
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 40
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.3,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 118.55,
           "hfov": 7.5
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_A3798688_B9DE_C409_41DC_F29D49691DD1",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 4)",
           "toolTip": "Bathroom"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_0_HS_2_0.png",
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 80
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -148.88,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -0.57,
           "hfov": 7.5
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_0_HS_2_0_0_map.gif",
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 40
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.57,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -148.88,
           "hfov": 7.5
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_r_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_f_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_b_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_u_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_d_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_l_hq.jpeg",
          "height": 1216,
          "class": "ImageResourceLevel",
          "width": 1216
         },
         {
          "url": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_t.jpg",
     "mapLocations": [
      {
       "y": 596.95,
       "angle": 0,
       "class": "PanoramaMapLocation",
       "map": "this.map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3",
       "x": 854.95
      }
     ],
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A"
    },
    "backwardYaw": 177.38,
    "class": "AdjacentPanorama",
    "yaw": 24.06,
    "distance": 1
   }
  ],
  "label": "Dining Area",
  "hfovMax": 120,
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B354C9AD_B9BF_CC0A_41CF_FD7B52164CC9",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "toolTip": "Living Room"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_0_HS_2_0.png",
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 80
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -26.85,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 2.4,
        "hfov": 7.49
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_0_HS_2_0_0_map.gif",
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.4,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -26.85,
        "hfov": 7.49
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_B54CBD46_B9B2_C406_41CE_51C189DEA4F9",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "toolTip": "Kitchen"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_0_HS_3_0.png",
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 80
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 24.06,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.14,
        "hfov": 7.49
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_0_HS_3_0_0_map.gif",
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.14,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 24.06,
        "hfov": 7.49
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_r_hq.jpeg",
       "height": 1216,
       "class": "ImageResourceLevel",
       "width": 1216
      },
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_f_hq.jpeg",
       "height": 1216,
       "class": "ImageResourceLevel",
       "width": 1216
      },
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_b_hq.jpeg",
       "height": 1216,
       "class": "ImageResourceLevel",
       "width": 1216
      },
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_u_hq.jpeg",
       "height": 1216,
       "class": "ImageResourceLevel",
       "width": 1216
      },
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_d_hq.jpeg",
       "height": 1216,
       "class": "ImageResourceLevel",
       "width": 1216
      },
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_l_hq.jpeg",
       "height": 1216,
       "class": "ImageResourceLevel",
       "width": 1216
      },
      {
       "url": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_t.jpg",
  "mapLocations": [
   {
    "y": 935.9,
    "angle": 32.97,
    "class": "PanoramaMapLocation",
    "map": "this.map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3",
    "x": 186.9
   }
  ],
  "hfovMin": 60,
  "pitch": 0,
  "id": "panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5"
 },
 {
  "buttonRestart": {
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minWidth": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "width": 40,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "height": 40,
   "paddingRight": 0
  },
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonZoomOut": {
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minWidth": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "width": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "height": 32,
   "paddingRight": 0
  },
  "buttonMoveRight": {
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minWidth": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "width": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "height": 32,
   "paddingRight": 0
  },
  "displayPlaybackBar": true,
  "buttonPlayPause": {
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minWidth": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "toggle",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "width": 40,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "height": 40,
   "paddingRight": 0
  },
  "buttonMoveUp": {
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minWidth": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "width": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "height": 32,
   "paddingRight": 0
  },
  "buttonPlayLeft": {
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minWidth": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "width": 40,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "height": 40,
   "paddingRight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPlayRight": {
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minWidth": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "width": 40,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "height": 40,
   "paddingRight": 0
  },
  "buttonZoomIn": {
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minWidth": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "width": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "height": 32,
   "paddingRight": 0
  },
  "buttonMoveDown": {
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minWidth": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "width": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "height": 32,
   "paddingRight": 0
  },
  "buttonMoveLeft": {
   "transparencyActive": true,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "borderSize": 0,
   "minWidth": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "width": 32,
   "horizontalAlign": "center",
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "height": 32,
   "paddingRight": 0
  }
 },
 {
  "viewerArea": "this.MapViewer",
  "buttonZoomOut": "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "buttonZoomIn": "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
  "movementMode": "constrained"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "id": "sequence_9CBE2AFD_B9B2_4C0B_41C1_8D5261CE77E8",
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 1000,
  "id": "panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_camera",
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_9CBE2AFD_B9B2_4C0B_41C1_8D5261CE77E8",
  "initialPosition": {
   "pitch": 0.35,
   "class": "PanoramaCameraPosition",
   "yaw": -26.85
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "id": "sequence_9C82F0BC_B9B3_DC09_41D8_49C835F012D5",
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 1000,
  "id": "panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_camera",
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_9C82F0BC_B9B3_DC09_41D8_49C835F012D5",
  "initialPosition": {
   "pitch": 3.14,
   "class": "PanoramaCameraPosition",
   "yaw": -177.12
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "id": "sequence_9C4BA9DA_B9B3_CC0E_41E5_6A37EDF3E33C",
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 1000,
  "id": "panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_camera",
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_9C4BA9DA_B9B3_CC0E_41E5_6A37EDF3E33C",
  "initialPosition": {
   "pitch": -1.57,
   "class": "PanoramaCameraPosition",
   "yaw": -2.62
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "id": "sequence_9C1E7ED8_B9B3_C409_41D3_9990B48B5D13",
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 1000,
  "id": "panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_camera",
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_9C1E7ED8_B9B3_C409_41D3_9990B48B5D13",
  "initialPosition": {
   "pitch": -1.92,
   "class": "PanoramaCameraPosition",
   "yaw": -15.69
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "id": "sequence_9FF9BFBE_B9B2_4409_41E1_8FE54A8A67DC",
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 1000,
  "id": "panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_camera",
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_9FF9BFBE_B9B2_4409_41E1_8FE54A8A67DC",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90C53F99_BA51_C40B_41DB_ACBC3B16B3CC, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_90C53F99_BA51_C40B_41DB_ACBC3B16B3CC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B069AB51_B9AE_4C1B_41E0_44BD0C5401E5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90C54F99_BA51_C40B_41BE_074292AE4412, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_90C54F99_BA51_C40B_41BE_074292AE4412",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0974F15_B9AE_441B_41C3_D1D3E529A104_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90C59F99_BA51_C40B_41D4_2CD756A973FE, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_90C59F99_BA51_C40B_41D4_2CD756A973FE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0995279_B9AE_7C0B_41B8_BAB26DACDA6A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90C62F9A_BA51_C409_4175_6EC40FF0D72E, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_90C62F9A_BA51_C409_4175_6EC40FF0D72E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B09905CB_B9AE_440F_41E6_F4F1819AFBB7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_90C67F9A_BA51_C409_41E2_9D1D5D7A9CB2, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_90C67F9A_BA51_C409_41E2_9D1D5D7A9CB2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B099391C_B9AE_4C0A_41B9_8A39363F8104_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3",
 {
  "items": [
   {
    "media": "this.map_A15AE015_B9AF_DC1B_41C6_096F313C0FC3",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_90C4BF98_BA51_C409_41E5_B7F3B32BC20F",
  "class": "PlayList"
 },
 {
  "id": "audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC",
  "class": "MediaAudio",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC.mp3"
  }
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "top": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "minHeight": 50,
  "paddingLeft": 0,
  "borderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "transitionMode": "blending",
  "minWidth": 100,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "paddingBottom": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressLeft": 10,
  "playbackBarBorderSize": 2,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarLeft": 0,
  "id": "MainViewer",
  "width": "100%",
  "playbackBarHeadHeight": 30,
  "borderSize": 0,
  "playbackBarHeadBorderSize": 0,
  "paddingRight": 0,
  "progressRight": 10,
  "progressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "height": "100%",
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarOpacity": 1,
  "playbackBarBottom": 10,
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingTop": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderSize": 2,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "left": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarRight": 0
 },
 {
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "scrollBarColor": "#000000",
    "height": "95.07%",
    "gap": 4,
    "scrollBarOpacity": 0.5,
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "scrollBarColor": "#000000",
      "height": "100%",
      "gap": 4,
      "scrollBarOpacity": 0.5,
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "minHeight": 20,
      "paddingLeft": 0,
      "borderRadius": 0,
      "contentOpaque": false,
      "borderSize": 0,
      "minWidth": 20,
      "shadow": false,
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver",
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "class": "Container",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "overflow": "hidden",
      "scrollBarMargin": 2,
      "width": 40,
      "horizontalAlign": "center",
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "layout": "vertical",
      "paddingRight": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "transparencyActive": true,
      "minHeight": 0,
      "paddingLeft": 0,
      "borderRadius": 0,
      "borderSize": 0,
      "minWidth": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "mode": "toggle",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "class": "IconButton",
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "cursor": "hand",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "width": 40,
      "horizontalAlign": "center",
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "height": 40,
      "paddingRight": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "minHeight": 20,
    "paddingLeft": 0,
    "borderRadius": 0,
    "contentOpaque": false,
    "borderSize": 0,
    "minWidth": 360,
    "shadow": false,
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "class": "Container",
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "overflow": "hidden",
    "scrollBarMargin": 2,
    "width": 360,
    "horizontalAlign": "center",
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "layout": "horizontal",
    "paddingRight": 0
   }
  ],
  "bottom": "0%",
  "minHeight": 1,
  "paddingLeft": 0,
  "borderRadius": 0,
  "contentOpaque": false,
  "minWidth": 1,
  "shadow": false,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "overflow": "scroll",
  "width": "100%",
  "horizontalAlign": "center",
  "height": 142,
  "layout": "horizontal",
  "paddingRight": 0
 },
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "bottom": "1.89%",
  "toolTipTextShadowOpacity": 0,
  "minHeight": 1,
  "toolTipShadowColor": "#333333",
  "paddingLeft": 0,
  "borderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "minWidth": 1,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "progressLeft": 10,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 2,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowSpread": 0,
  "borderSize": 0,
  "width": "17.424%",
  "playbackBarHeadHeight": 30,
  "id": "MapViewer",
  "playbackBarHeadBorderSize": 0,
  "paddingRight": 0,
  "progressRight": 10,
  "progressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "height": "19.497%",
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarOpacity": 1,
  "playbackBarBottom": 0,
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 2,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingTop": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderSize": 2,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeight": 20,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBorderSize": 0,
  "right": "1.27%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarRight": 0
 }
], 
 "scrollBarColor": "#000000",
 "gap": 10,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "start": "this.playAudioList([this.audio_9F84A6C4_B572_865D_41D7_2F28DA0D50EC]); this.mainPlayList.set('selectedIndex', 0); this.playList_90C4BF98_BA51_C409_41E5_B7F3B32BC20F.set('selectedIndex', 0)",
 "scripts": {
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "unregisterKey": function(key){    delete window[key]; },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "existsKey": function(key){    return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){    return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); }
 },
 "minHeight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "minWidth": 20,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "mouseWheelEnabled": true,
 "class": "Player",
 "paddingBottom": 0,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "width": "100%",
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "layout": "absolute",
 "paddingRight": 0
})