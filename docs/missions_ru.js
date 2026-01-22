window.MISSIONS = [
  {
    "id": 1,
    "block": 1,
    "type": "drag",
    "icon": "flag",
    "title": "Найди страну по флагу",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Перетащи флаги к странам.",
        "choices": {
          "items": [
            {
              "id": "fr",
              "label": "Франция"
            },
            {
              "id": "it",
              "label": "Италия"
            },
            {
              "id": "es",
              "label": "Испания"
            }
          ],
          "zones": [
            {
              "id": "zone_fr",
              "label": "Франция"
            },
            {
              "id": "zone_it",
              "label": "Италия"
            },
            {
              "id": "zone_es",
              "label": "Испания"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "fr": "zone_fr",
            "it": "zone_it",
            "es": "zone_es"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Соедини каждый флаг со своей страной.",
        "choices": {
          "items": [
            {
              "id": "fr",
              "label": "Франция"
            },
            {
              "id": "it",
              "label": "Италия"
            },
            {
              "id": "es",
              "label": "Испания"
            }
          ],
          "zones": [
            {
              "id": "zone_fr",
              "label": "Франция"
            },
            {
              "id": "zone_it",
              "label": "Италия"
            },
            {
              "id": "zone_es",
              "label": "Испания"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "fr": "zone_fr",
            "it": "zone_it",
            "es": "zone_es"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Найди, где какая страна: перетащи флаги.",
        "choices": {
          "items": [
            {
              "id": "fr",
              "label": "Франция"
            },
            {
              "id": "it",
              "label": "Италия"
            },
            {
              "id": "es",
              "label": "Испания"
            }
          ],
          "zones": [
            {
              "id": "zone_fr",
              "label": "Франция"
            },
            {
              "id": "zone_it",
              "label": "Италия"
            },
            {
              "id": "zone_es",
              "label": "Испания"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "fr": "zone_fr",
            "it": "zone_it",
            "es": "zone_es"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Флаги перепутались — помоги им найти страны!",
        "choices": {
          "items": [
            {
              "id": "fr",
              "label": "Франция"
            },
            {
              "id": "it",
              "label": "Италия"
            },
            {
              "id": "es",
              "label": "Испания"
            }
          ],
          "zones": [
            {
              "id": "zone_fr",
              "label": "Франция"
            },
            {
              "id": "zone_it",
              "label": "Италия"
            },
            {
              "id": "zone_es",
              "label": "Испания"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "fr": "zone_fr",
            "it": "zone_it",
            "es": "zone_es"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Перетащи флаг в правильную страну.",
        "choices": {
          "items": [
            {
              "id": "fr",
              "label": "Франция"
            },
            {
              "id": "it",
              "label": "Италия"
            },
            {
              "id": "es",
              "label": "Испания"
            }
          ],
          "zones": [
            {
              "id": "zone_fr",
              "label": "Франция"
            },
            {
              "id": "zone_it",
              "label": "Италия"
            },
            {
              "id": "zone_es",
              "label": "Испания"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "fr": "zone_fr",
            "it": "zone_it",
            "es": "zone_es"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 2,
    "block": 1,
    "type": "tap",
    "icon": "thermo",
    "title": "Жарко или холодно?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Выбери: жарко или холодно?",
        "choices": [
          "Жарко",
          "Холодно",
          "И так, и так"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Какой это день: жаркий или холодный?",
        "choices": [
          "Жарко",
          "Холодно",
          "И так, и так"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Что больше подходит: жарко или холодно?",
        "choices": [
          "Жарко",
          "Холодно",
          "И так, и так"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Угадай погоду: жарко/холодно.",
        "choices": [
          "Жарко",
          "Холодно",
          "И так, и так"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Быстрый выбор: жарко или холодно?",
        "choices": [
          "Жарко",
          "Холодно",
          "И так, и так"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 3,
    "block": 1,
    "type": "tap",
    "icon": "plane",
    "title": "Чем летят в Катар?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "На чём летят далеко в другую страну?",
        "choices": [
          "Самолёт",
          "Машина",
          "Лодка"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Какой транспорт летает по небу?",
        "choices": [
          "Самолёт",
          "Машина",
          "Лодка"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Что выбирают для перелёта?",
        "choices": [
          "Самолёт",
          "Машина",
          "Лодка"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Чем летят в Катар?",
        "choices": [
          "Самолёт",
          "Машина",
          "Лодка"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Какой транспорт быстрее всего по воздуху?",
        "choices": [
          "Самолёт",
          "Машина",
          "Лодка"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 4,
    "block": 1,
    "type": "drag",
    "icon": "landmark",
    "title": "Достопримечательность и страна",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Перетащи место к правильной стране.",
        "choices": {
          "items": [
            {
              "id": "eiffel",
              "label": "Эйфелева башня"
            },
            {
              "id": "col",
              "label": "Колизей"
            }
          ],
          "zones": [
            {
              "id": "fr",
              "label": "Франция"
            },
            {
              "id": "it",
              "label": "Италия"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "eiffel": "fr",
            "col": "it"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Соедини достопримечательности со странами.",
        "choices": {
          "items": [
            {
              "id": "eiffel",
              "label": "Эйфелева башня"
            },
            {
              "id": "col",
              "label": "Колизей"
            }
          ],
          "zones": [
            {
              "id": "fr",
              "label": "Франция"
            },
            {
              "id": "it",
              "label": "Италия"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "eiffel": "fr",
            "col": "it"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Где находится это место? Перетащи к стране.",
        "choices": {
          "items": [
            {
              "id": "eiffel",
              "label": "Эйфелева башня"
            },
            {
              "id": "col",
              "label": "Колизей"
            }
          ],
          "zones": [
            {
              "id": "fr",
              "label": "Франция"
            },
            {
              "id": "it",
              "label": "Италия"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "eiffel": "fr",
            "col": "it"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Помоги местам найти свою страну.",
        "choices": {
          "items": [
            {
              "id": "eiffel",
              "label": "Эйфелева башня"
            },
            {
              "id": "col",
              "label": "Колизей"
            }
          ],
          "zones": [
            {
              "id": "fr",
              "label": "Франция"
            },
            {
              "id": "it",
              "label": "Италия"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "eiffel": "fr",
            "col": "it"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Сделай пары: место → страна.",
        "choices": {
          "items": [
            {
              "id": "eiffel",
              "label": "Эйфелева башня"
            },
            {
              "id": "col",
              "label": "Колизей"
            }
          ],
          "zones": [
            {
              "id": "fr",
              "label": "Франция"
            },
            {
              "id": "it",
              "label": "Италия"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "eiffel": "fr",
            "col": "it"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 5,
    "block": 1,
    "type": "multi",
    "icon": "bag",
    "title": "Что берут в поездку?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Собери чемодан: что берём в поездку?",
        "choices": [
          "Паспорт",
          "Одежда",
          "Игрушки",
          "Холодильник"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Выбери вещи для путешествия.",
        "choices": [
          "Паспорт",
          "Одежда",
          "Игрушки",
          "Холодильник"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Что пригодится в дороге? Выбери несколько.",
        "choices": [
          "Паспорт",
          "Одежда",
          "Игрушки",
          "Холодильник"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Отметь, что можно взять с собой.",
        "choices": [
          "Паспорт",
          "Одежда",
          "Игрушки",
          "Холодильник"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Выбери всё нужное для поездки.",
        "choices": [
          "Паспорт",
          "Одежда",
          "Игрушки",
          "Холодильник"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      }
    ]
  },
  {
    "id": 6,
    "block": 2,
    "type": "tap",
    "icon": "logic",
    "title": "Что лишнее?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Найди лишнее.",
        "choices": [
          "Яблоко",
          "Банан",
          "Машина"
        ],
        "answer": {
          "correctIndex": 2
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Что не подходит к остальным?",
        "choices": [
          "Яблоко",
          "Банан",
          "Машина"
        ],
        "answer": {
          "correctIndex": 2
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Выбери лишний предмет.",
        "choices": [
          "Яблоко",
          "Банан",
          "Машина"
        ],
        "answer": {
          "correctIndex": 2
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Кто тут лишний?",
        "choices": [
          "Яблоко",
          "Банан",
          "Машина"
        ],
        "answer": {
          "correctIndex": 2
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Что выбивается из ряда?",
        "choices": [
          "Яблоко",
          "Банан",
          "Машина"
        ],
        "answer": {
          "correctIndex": 2
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 7,
    "block": 2,
    "type": "tap",
    "icon": "pattern",
    "title": "Продолжи ряд",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Продолжи ряд: 🔵 🔵 🔴 🔵 🔵 ?",
        "choices": [
          "🔴",
          "🔵",
          "🟢"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Продолжи ряд: ⭐ ⭐ 🌙 ⭐ ⭐ ?",
        "choices": [
          "🌙",
          "⭐",
          "☀️"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Продолжи числа: 1, 1, 2, 1, 1, ?",
        "choices": [
          "2",
          "1",
          "3"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Продолжи буквы: А, А, Б, А, А, ?",
        "choices": [
          "Б",
          "А",
          "В"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Продолжи фигуры: 🔺 🔺 ⚪ 🔺 🔺 ?",
        "choices": [
          "⚪",
          "🔺",
          "🟦"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 8,
    "block": 2,
    "type": "drag",
    "icon": "pair",
    "title": "Найди пару",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Собери пару одинаковых предметов.",
        "choices": {
          "items": [
            {
              "id": "sock1",
              "label": "Носок"
            },
            {
              "id": "sock2",
              "label": "Носок"
            }
          ],
          "zones": [
            {
              "id": "pair",
              "label": "Пара"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "sock1": "pair",
            "sock2": "pair"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Найди пару и перетащи в зону.",
        "choices": {
          "items": [
            {
              "id": "sock1",
              "label": "Носок"
            },
            {
              "id": "sock2",
              "label": "Носок"
            }
          ],
          "zones": [
            {
              "id": "pair",
              "label": "Пара"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "sock1": "pair",
            "sock2": "pair"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Два одинаковых — это пара. Собери!",
        "choices": {
          "items": [
            {
              "id": "sock1",
              "label": "Носок"
            },
            {
              "id": "sock2",
              "label": "Носок"
            }
          ],
          "zones": [
            {
              "id": "pair",
              "label": "Пара"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "sock1": "pair",
            "sock2": "pair"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Помоги предметам стать парой.",
        "choices": {
          "items": [
            {
              "id": "sock1",
              "label": "Носок"
            },
            {
              "id": "sock2",
              "label": "Носок"
            }
          ],
          "zones": [
            {
              "id": "pair",
              "label": "Пара"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "sock1": "pair",
            "sock2": "pair"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Пара нашлась? Перетащи сюда!",
        "choices": {
          "items": [
            {
              "id": "sock1",
              "label": "Носок"
            },
            {
              "id": "sock2",
              "label": "Носок"
            }
          ],
          "zones": [
            {
              "id": "pair",
              "label": "Пара"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "sock1": "pair",
            "sock2": "pair"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 9,
    "block": 2,
    "type": "tap",
    "icon": "size",
    "title": "Большой или маленький?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Слон — он какой?",
        "choices": [
          "Большой",
          "Маленький"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Мышка — она какая?",
        "choices": [
          "Большая",
          "Маленькая"
        ],
        "answer": {
          "correctIndex": 1
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Автобус — он какой?",
        "choices": [
          "Большой",
          "Маленький"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Муравей — он какой?",
        "choices": [
          "Большой",
          "Маленький"
        ],
        "answer": {
          "correctIndex": 1
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Гора — она какая?",
        "choices": [
          "Большая",
          "Маленькая"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 10,
    "block": 2,
    "type": "timer",
    "icon": "timer",
    "title": "Быстро выбери! (5 сек)",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Скорость агента: 5 секунд. Нажми «Старт»!",
        "choices": {
          "seconds": 5
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": false
        }
      },
      {
        "variantId": 2,
        "prompt": "Гонка: уложись в 5 секунд!",
        "choices": {
          "seconds": 5
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": false
        }
      },
      {
        "variantId": 3,
        "prompt": "Быстрый челлендж: 5 секунд.",
        "choices": {
          "seconds": 5
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": false
        }
      },
      {
        "variantId": 4,
        "prompt": "Проверка скорости: 5 секунд — поехали!",
        "choices": {
          "seconds": 5
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": false
        }
      },
      {
        "variantId": 5,
        "prompt": "Таймер 5 секунд: готов(а)?",
        "choices": {
          "seconds": 5
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": false
        }
      }
    ]
  },
  {
    "id": 11,
    "block": 3,
    "type": "timer",
    "icon": "freeze",
    "title": "Замри на 10 секунд!",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Замри как статуя на 10 секунд!",
        "choices": {
          "seconds": 10
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Статуя! Не двигайся 10 секунд.",
        "choices": {
          "seconds": 10
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Супер-агент замер: 10 секунд.",
        "choices": {
          "seconds": 10
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Тихо-тихо: замри на 10 секунд.",
        "choices": {
          "seconds": 10
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Проверка выдержки: 10 секунд без движения.",
        "choices": {
          "seconds": 10
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      }
    ]
  },
  {
    "id": 12,
    "block": 3,
    "type": "action",
    "icon": "jump",
    "title": "Прыгни N раз",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Прыгни 5 раз и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Прыгни 7 раз и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Прыгни 10 раз и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Прыгни 6 раз и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Прыгни 8 раз и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 13,
    "block": 3,
    "type": "creative",
    "icon": "body",
    "title": "Покажи страну телом",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Покажи «Францию» позой (как статуя).",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": false,
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Изобрази «Италию» как оперный певец.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": false,
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Покажи «Японию» как ниндзя (тихо!).",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": false,
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Изобрази «Испанию» как танцор фламенко.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": false,
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Покажи «Египет» как фараон.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": false,
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 14,
    "block": 3,
    "type": "action",
    "icon": "search",
    "title": "Найди в комнате",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Найди в комнате что-то круглое и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Найди что-то синее и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Найди что-то мягкое и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Найди предмет с кнопками и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Найди что-то, чем можно рисовать, и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 15,
    "block": 3,
    "type": "action",
    "icon": "speed",
    "title": "Медленно / Быстро",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Пройди 5 шагов ОЧЕНЬ медленно. Потом нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Сделай 5 хлопков БЫСТРО и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Подними руки медленно-медленно и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Сделай 3 приседания медленно и нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Покрутись 2 раза быстро и нажми «Я сделал!» (осторожно)",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 16,
    "block": 4,
    "type": "creative",
    "icon": "spark",
    "title": "Придумай страну",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Придумай новую страну и назови её.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Как называется твоя страна мечты?",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Придумай страну, где всё из конфет.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Придумай страну, где живут драконы.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Придумай страну, где всегда лето.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 17,
    "block": 4,
    "type": "creative",
    "icon": "flag",
    "title": "Придумай флаг",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Придумай флаг для своей страны: 2 цвета и 1 символ.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Какие цвета будут на флаге твоей страны?",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Придумай флаг: полоски, звезда или животное?",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Опиши флаг: что на нём нарисовано?",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Флаг мечты: какой он?",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 18,
    "block": 4,
    "type": "tap",
    "icon": "mask",
    "title": "Кто ты сегодня?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Кто ты сегодня? Выбери роль.",
        "choices": [
          "Путешественник",
          "Капитан",
          "Исследователь",
          "Суперагент"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Выбери роль на сегодня!",
        "choices": [
          "Путешественник",
          "Капитан",
          "Исследователь",
          "Суперагент"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Сегодня ты… (выбери).",
        "choices": [
          "Путешественник",
          "Капитан",
          "Исследователь",
          "Суперагент"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Кем ты хочешь быть сейчас?",
        "choices": [
          "Путешественник",
          "Капитан",
          "Исследователь",
          "Суперагент"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Выбери образ супер-агента!",
        "choices": [
          "Путешественник",
          "Капитан",
          "Исследователь",
          "Суперагент"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      }
    ]
  },
  {
    "id": 19,
    "block": 4,
    "type": "creative",
    "icon": "home",
    "title": "Где ты живёшь?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Расскажи: где ты живёшь? (1–2 предложения).",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Опиши свой дом: что там самое любимое?",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Где бы ты жил(а) в стране мечты?",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Дом у моря, в горах или в лесу? Напиши.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Придумай дом для супер-агента.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 20,
    "block": 4,
    "type": "creative",
    "icon": "animal",
    "title": "Животное твоей страны",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Придумай животное твоей страны и назови его.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Какое животное будет символом страны? Опиши.",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Придумай смешное животное (2–3 слова).",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Как выглядит животное-герой твоей страны?",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Какое доброе животное будет главным в твоей стране?",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "enableInput": true,
          "saveResponse": true,
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 21,
    "block": 5,
    "type": "action",
    "icon": "hello",
    "title": "Скажи «привет» на 3 языках",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Скажи: «Hello», «Bonjour», «Hola». Потом нажми «Я сказал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сказал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Скажи «привет» на 3 языках (любые 3). Потом нажми «Я сказал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сказал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Скажи: «Hello», «Ciao», «Привет». Потом нажми «Я сказал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сказал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Скажи: «Hello», «Salut», «Hallo». Потом нажми «Я сказал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сказал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Скажи: «Hello», «Ola», «Merhaba». Потом нажми «Я сказал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сказал!",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 22,
    "block": 5,
    "type": "tap",
    "icon": "sound",
    "title": "Как говорит животное?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Как говорит кошка?",
        "choices": [
          "Мяу",
          "Гав",
          "Му"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Как говорит собака?",
        "choices": [
          "Гав",
          "Мяу",
          "Кря"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Как говорит корова?",
        "choices": [
          "Му",
          "Ко-ко",
          "Гав"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Как говорит утка?",
        "choices": [
          "Кря",
          "Му",
          "Мяу"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Как говорит лягушка?",
        "choices": [
          "Ква",
          "Гав",
          "Чик-чирик"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 23,
    "block": 5,
    "type": "tap",
    "icon": "audio",
    "title": "Угадай язык по слову",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Какой это язык? Слово: «Bonjour».",
        "choices": [
          "Французский",
          "Итальянский",
          "Испанский"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Какой это язык? Слово: «Ciao».",
        "choices": [
          "Итальянский",
          "Французский",
          "Немецкий"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Какой это язык? Слово: «Hola».",
        "choices": [
          "Испанский",
          "Французский",
          "Итальянский"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Какой это язык? Слово: «Hallo».",
        "choices": [
          "Немецкий",
          "Испанский",
          "Французский"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Какой это язык? Слово: «Merhaba».",
        "choices": [
          "Турецкий",
          "Итальянский",
          "Английский"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 24,
    "block": 5,
    "type": "action",
    "icon": "repeat",
    "title": "Повтори слово",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Повтори фразу «Thank you» 3 раза. Потом нажми «Я сказал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сказал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Повтори слово «Please» 3 раза. Потом нажми «Я сказал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сказал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Повтори «Good morning» 2 раза. Потом нажми «Я сказал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сказал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Повтори «How are you?» 2 раза. Потом нажми «Я сказал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сказал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Повтори «See you!» 3 раза. Потом нажми «Я сказал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сказал!",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 25,
    "block": 5,
    "type": "tap",
    "icon": "lang",
    "title": "Выбери язык",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Какой язык ты хочешь учить? (любой выбор)",
        "choices": [
          "Английский",
          "Французский",
          "Итальянский",
          "Испанский"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Выбери язык на сегодня!",
        "choices": [
          "Английский",
          "Французский",
          "Итальянский",
          "Испанский"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Какой язык нравится больше?",
        "choices": [
          "Английский",
          "Французский",
          "Итальянский",
          "Испанский"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Выбери язык мечты.",
        "choices": [
          "Английский",
          "Французский",
          "Итальянский",
          "Испанский"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Выбери язык — и мы отправимся туда!",
        "choices": [
          "Английский",
          "Французский",
          "Итальянский",
          "Испанский"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      }
    ]
  },
  {
    "id": 26,
    "block": 6,
    "type": "drag",
    "icon": "family",
    "title": "Кто моя семья?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Перетащи всех членов семьи в «Моя семья».",
        "choices": {
          "items": [
            {
              "id": "mom",
              "label": "Мама"
            },
            {
              "id": "dad",
              "label": "Папа"
            },
            {
              "id": "me",
              "label": "Я"
            },
            {
              "id": "sis",
              "label": "Брат/сестра"
            }
          ],
          "zones": [
            {
              "id": "family",
              "label": "Моя семья"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "mom": "family",
            "dad": "family",
            "me": "family",
            "sis": "family"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Собери свою семью в одну зону.",
        "choices": {
          "items": [
            {
              "id": "mom",
              "label": "Мама"
            },
            {
              "id": "dad",
              "label": "Папа"
            },
            {
              "id": "me",
              "label": "Я"
            },
            {
              "id": "sis",
              "label": "Брат/сестра"
            }
          ],
          "zones": [
            {
              "id": "family",
              "label": "Моя семья"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "mom": "family",
            "dad": "family",
            "me": "family",
            "sis": "family"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Кто относится к семье? Перетащи сюда.",
        "choices": {
          "items": [
            {
              "id": "mom",
              "label": "Мама"
            },
            {
              "id": "dad",
              "label": "Папа"
            },
            {
              "id": "me",
              "label": "Я"
            },
            {
              "id": "sis",
              "label": "Брат/сестра"
            }
          ],
          "zones": [
            {
              "id": "family",
              "label": "Моя семья"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "mom": "family",
            "dad": "family",
            "me": "family",
            "sis": "family"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Семья рядом: собери всех в зоне.",
        "choices": {
          "items": [
            {
              "id": "mom",
              "label": "Мама"
            },
            {
              "id": "dad",
              "label": "Папа"
            },
            {
              "id": "me",
              "label": "Я"
            },
            {
              "id": "sis",
              "label": "Брат/сестра"
            }
          ],
          "zones": [
            {
              "id": "family",
              "label": "Моя семья"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "mom": "family",
            "dad": "family",
            "me": "family",
            "sis": "family"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Перетащи тех, кто семья, в правильную зону.",
        "choices": {
          "items": [
            {
              "id": "mom",
              "label": "Мама"
            },
            {
              "id": "dad",
              "label": "Папа"
            },
            {
              "id": "me",
              "label": "Я"
            },
            {
              "id": "sis",
              "label": "Брат/сестра"
            }
          ],
          "zones": [
            {
              "id": "family",
              "label": "Моя семья"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "mom": "family",
            "dad": "family",
            "me": "family",
            "sis": "family"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 27,
    "block": 6,
    "type": "tap",
    "icon": "heart",
    "title": "Что делает маму счастливой?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Что делает маму счастливой?",
        "choices": [
          "Обнять",
          "Кричать",
          "Бросать вещи"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Как порадовать маму?",
        "choices": [
          "Помочь",
          "Спорить",
          "Грубить"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Что маме приятно?",
        "choices": [
          "Сказать «спасибо»",
          "Игнорировать",
          "Обижать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Что помогает маме улыбаться?",
        "choices": [
          "Убрать игрушки",
          "Разбросать",
          "Сломать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Выбери лучший вариант для мамы.",
        "choices": [
          "Слушать",
          "Перебивать",
          "Дразнить"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 28,
    "block": 6,
    "type": "multi",
    "icon": "love",
    "title": "Как показать любовь?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Как можно показать любовь? Выбери несколько.",
        "choices": [
          "Обнять",
          "Сказать «спасибо»",
          "Помочь",
          "Обидеть"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Выбери добрые действия.",
        "choices": [
          "Слушать",
          "Помочь убрать",
          "Улыбнуться",
          "Кричать"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Что значит забота?",
        "choices": [
          "Нарисовать открытку",
          "Сказать доброе слово",
          "Помочь",
          "Толкаться"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Как показать, что ты любишь?",
        "choices": [
          "Обнять",
          "Попросить прощения",
          "Помочь",
          "Грубить"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Отметь хорошие поступки.",
        "choices": [
          "Сказать «я тебя люблю»",
          "Помочь",
          "Убрать за собой",
          "Дразнить"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      }
    ]
  },
  {
    "id": 29,
    "block": 6,
    "type": "tap",
    "icon": "listen",
    "title": "Когда слушать родителей?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Когда важно слушать родителей?",
        "choices": [
          "Когда предупреждают об опасности",
          "Когда хочется спорить",
          "Когда скучно"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "В каких ситуациях слушаем взрослых?",
        "choices": [
          "Когда переходишь дорогу",
          "Когда играешь",
          "Когда капризничаешь"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Когда нужно остановиться и послушать?",
        "choices": [
          "Когда взрослый говорит «стоп»",
          "Когда ты смеёшься",
          "Когда ты устал"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Когда родители говорят важное — что делаем?",
        "choices": [
          "Когда просят остановиться",
          "Когда не хочется",
          "Когда обидно"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Когда нужно быть внимательным?",
        "choices": [
          "Когда объясняют правила",
          "Когда всё равно",
          "Когда хочется перебить"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 30,
    "block": 6,
    "type": "drag",
    "icon": "thanks",
    "title": "Я благодарен за…",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Перетащи то, за что ты благодарен(а), в «Спасибо».",
        "choices": {
          "items": [
            {
              "id": "food",
              "label": "Вкусная еда"
            },
            {
              "id": "home",
              "label": "Дом"
            },
            {
              "id": "love",
              "label": "Любовь семьи"
            }
          ],
          "zones": [
            {
              "id": "thanks",
              "label": "Спасибо"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "food": "thanks",
            "home": "thanks",
            "love": "thanks"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Собери «Спасибо»: что хорошего есть у тебя?",
        "choices": {
          "items": [
            {
              "id": "food",
              "label": "Вкусная еда"
            },
            {
              "id": "home",
              "label": "Дом"
            },
            {
              "id": "love",
              "label": "Любовь семьи"
            }
          ],
          "zones": [
            {
              "id": "thanks",
              "label": "Спасибо"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "food": "thanks",
            "home": "thanks",
            "love": "thanks"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "За что можно сказать «спасибо»? Перетащи.",
        "choices": {
          "items": [
            {
              "id": "food",
              "label": "Вкусная еда"
            },
            {
              "id": "home",
              "label": "Дом"
            },
            {
              "id": "love",
              "label": "Любовь семьи"
            }
          ],
          "zones": [
            {
              "id": "thanks",
              "label": "Спасибо"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "food": "thanks",
            "home": "thanks",
            "love": "thanks"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Выбери добрые вещи и перетащи в зону «Спасибо».",
        "choices": {
          "items": [
            {
              "id": "food",
              "label": "Вкусная еда"
            },
            {
              "id": "home",
              "label": "Дом"
            },
            {
              "id": "love",
              "label": "Любовь семьи"
            }
          ],
          "zones": [
            {
              "id": "thanks",
              "label": "Спасибо"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "food": "thanks",
            "home": "thanks",
            "love": "thanks"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Собери благодарность в корзинку «Спасибо».",
        "choices": {
          "items": [
            {
              "id": "food",
              "label": "Вкусная еда"
            },
            {
              "id": "home",
              "label": "Дом"
            },
            {
              "id": "love",
              "label": "Любовь семьи"
            }
          ],
          "zones": [
            {
              "id": "thanks",
              "label": "Спасибо"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "food": "thanks",
            "home": "thanks",
            "love": "thanks"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 31,
    "block": 7,
    "type": "drag",
    "icon": "school",
    "title": "Слушаю / Не слушаю",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Разложи действия: «Слушаю» и «Не слушаю».",
        "choices": {
          "items": [
            {
              "id": "look",
              "label": "Смотрю на учителя"
            },
            {
              "id": "talk",
              "label": "Болтаю с другом"
            },
            {
              "id": "ask",
              "label": "Поднимаю руку"
            },
            {
              "id": "noise",
              "label": "Шуршу и мешаю"
            }
          ],
          "zones": [
            {
              "id": "listen",
              "label": "Слушаю"
            },
            {
              "id": "nolisten",
              "label": "Не слушаю"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "look": "listen",
            "ask": "listen",
            "talk": "nolisten",
            "noise": "nolisten"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Что значит слушать? Разложи по колонкам.",
        "choices": {
          "items": [
            {
              "id": "look",
              "label": "Смотрю на учителя"
            },
            {
              "id": "talk",
              "label": "Болтаю с другом"
            },
            {
              "id": "ask",
              "label": "Поднимаю руку"
            },
            {
              "id": "noise",
              "label": "Шуршу и мешаю"
            }
          ],
          "zones": [
            {
              "id": "listen",
              "label": "Слушаю"
            },
            {
              "id": "nolisten",
              "label": "Не слушаю"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "look": "listen",
            "ask": "listen",
            "talk": "nolisten",
            "noise": "nolisten"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Перетащи действия в правильные зоны.",
        "choices": {
          "items": [
            {
              "id": "look",
              "label": "Смотрю на учителя"
            },
            {
              "id": "talk",
              "label": "Болтаю с другом"
            },
            {
              "id": "ask",
              "label": "Поднимаю руку"
            },
            {
              "id": "noise",
              "label": "Шуршу и мешаю"
            }
          ],
          "zones": [
            {
              "id": "listen",
              "label": "Слушаю"
            },
            {
              "id": "nolisten",
              "label": "Не слушаю"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "look": "listen",
            "ask": "listen",
            "talk": "nolisten",
            "noise": "nolisten"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Собери правильное поведение на уроке.",
        "choices": {
          "items": [
            {
              "id": "look",
              "label": "Смотрю на учителя"
            },
            {
              "id": "talk",
              "label": "Болтаю с другом"
            },
            {
              "id": "ask",
              "label": "Поднимаю руку"
            },
            {
              "id": "noise",
              "label": "Шуршу и мешаю"
            }
          ],
          "zones": [
            {
              "id": "listen",
              "label": "Слушаю"
            },
            {
              "id": "nolisten",
              "label": "Не слушаю"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "look": "listen",
            "ask": "listen",
            "talk": "nolisten",
            "noise": "nolisten"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Слушаю или нет? Разложи.",
        "choices": {
          "items": [
            {
              "id": "look",
              "label": "Смотрю на учителя"
            },
            {
              "id": "talk",
              "label": "Болтаю с другом"
            },
            {
              "id": "ask",
              "label": "Поднимаю руку"
            },
            {
              "id": "noise",
              "label": "Шуршу и мешаю"
            }
          ],
          "zones": [
            {
              "id": "listen",
              "label": "Слушаю"
            },
            {
              "id": "nolisten",
              "label": "Не слушаю"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "look": "listen",
            "ask": "listen",
            "talk": "nolisten",
            "noise": "nolisten"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 32,
    "block": 7,
    "type": "action",
    "icon": "hand",
    "title": "Подними руку!",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Подними руку, как на уроке. Потом нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Потренируйся: подними руку и подожди. Потом нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Покажи: поднял(а) руку вежливо. Нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Подними руку тихо и спокойно. Нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Подними руку и улыбнись. Нажми «Я сделал!»",
        "choices": {},
        "answer": {
          "done": true
        },
        "ui": {
          "confirmText": "Я сделал!",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 33,
    "block": 7,
    "type": "tap",
    "icon": "class",
    "title": "Что делаю на уроке?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Что правильно делать на уроке?",
        "choices": [
          "Слушаю",
          "Кричу",
          "Бегаю"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Выбери поведение ученика.",
        "choices": [
          "Пишу",
          "Дерусь",
          "Шумлю"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Что помогает учиться?",
        "choices": [
          "Слежу за заданием",
          "Мешаю",
          "Болтаю громко"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Как ведёт себя ученик?",
        "choices": [
          "Поднимаю руку",
          "Перебиваю",
          "Кидаю"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Что делает хороший ученик?",
        "choices": [
          "Стараюсь",
          "Грублю",
          "Ссорюсь"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 34,
    "block": 7,
    "type": "tap",
    "icon": "stop",
    "title": "Когда нужно остановиться?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Когда нужно остановиться и слушать?",
        "choices": [
          "Когда говорит учитель",
          "Никогда",
          "Когда скучно"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Когда надо перестать говорить?",
        "choices": [
          "Когда взрослый просит",
          "Никогда",
          "Когда хочется спорить"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Когда нужно прекратить игру?",
        "choices": [
          "Когда мама сказала «стоп»",
          "Никогда",
          "Когда я выиграл(а)"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Когда надо остановиться и быть внимательным?",
        "choices": [
          "Когда это опасно",
          "Никогда",
          "Когда я хочу"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Когда нужно перестать шуметь?",
        "choices": [
          "Когда другим мешает",
          "Никогда",
          "Когда я рад"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 35,
    "block": 7,
    "type": "multi",
    "icon": "good",
    "title": "Хороший ученик — это…",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Хороший ученик — это… выбери несколько.",
        "choices": [
          "Слушает",
          "Старается",
          "Вежливый",
          "Мешает"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Какие качества у хорошего ученика?",
        "choices": [
          "Внимательный",
          "Трудится",
          "Спокойный",
          "Грубит"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Что помогает быть хорошим учеником?",
        "choices": [
          "Поднимает руку",
          "Соблюдает правила",
          "Помогает",
          "Дразнит"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Отметь правильное.",
        "choices": [
          "Старается",
          "Уважает",
          "Аккуратный",
          "Кричит"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Выбери верные качества.",
        "choices": [
          "Слушает",
          "Делает задания",
          "Вежливый",
          "Дерётся"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      }
    ]
  },
  {
    "id": 36,
    "block": 8,
    "type": "drag",
    "icon": "shop",
    "title": "Можно / Нельзя",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Разложи: что можно в магазине, а что нельзя.",
        "choices": {
          "items": [
            {
              "id": "hello",
              "label": "Поздороваться"
            },
            {
              "id": "run",
              "label": "Бегать по магазину"
            },
            {
              "id": "ask",
              "label": "Спросить вежливо"
            },
            {
              "id": "touch",
              "label": "Ломать товары"
            }
          ],
          "zones": [
            {
              "id": "can",
              "label": "Можно"
            },
            {
              "id": "cant",
              "label": "Нельзя"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "hello": "can",
            "ask": "can",
            "run": "cant",
            "touch": "cant"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Можно или нельзя? Перетащи в зоны.",
        "choices": {
          "items": [
            {
              "id": "hello",
              "label": "Поздороваться"
            },
            {
              "id": "run",
              "label": "Бегать по магазину"
            },
            {
              "id": "ask",
              "label": "Спросить вежливо"
            },
            {
              "id": "touch",
              "label": "Ломать товары"
            }
          ],
          "zones": [
            {
              "id": "can",
              "label": "Можно"
            },
            {
              "id": "cant",
              "label": "Нельзя"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "hello": "can",
            "ask": "can",
            "run": "cant",
            "touch": "cant"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Правила магазина: разложи действия.",
        "choices": {
          "items": [
            {
              "id": "hello",
              "label": "Поздороваться"
            },
            {
              "id": "run",
              "label": "Бегать по магазину"
            },
            {
              "id": "ask",
              "label": "Спросить вежливо"
            },
            {
              "id": "touch",
              "label": "Ломать товары"
            }
          ],
          "zones": [
            {
              "id": "can",
              "label": "Можно"
            },
            {
              "id": "cant",
              "label": "Нельзя"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "hello": "can",
            "ask": "can",
            "run": "cant",
            "touch": "cant"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Как вести себя в магазине? Разложи.",
        "choices": {
          "items": [
            {
              "id": "hello",
              "label": "Поздороваться"
            },
            {
              "id": "run",
              "label": "Бегать по магазину"
            },
            {
              "id": "ask",
              "label": "Спросить вежливо"
            },
            {
              "id": "touch",
              "label": "Ломать товары"
            }
          ],
          "zones": [
            {
              "id": "can",
              "label": "Можно"
            },
            {
              "id": "cant",
              "label": "Нельзя"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "hello": "can",
            "ask": "can",
            "run": "cant",
            "touch": "cant"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Выбери правильное поведение: перетащи в зоны.",
        "choices": {
          "items": [
            {
              "id": "hello",
              "label": "Поздороваться"
            },
            {
              "id": "run",
              "label": "Бегать по магазину"
            },
            {
              "id": "ask",
              "label": "Спросить вежливо"
            },
            {
              "id": "touch",
              "label": "Ломать товары"
            }
          ],
          "zones": [
            {
              "id": "can",
              "label": "Можно"
            },
            {
              "id": "cant",
              "label": "Нельзя"
            }
          ]
        },
        "answer": {
          "solutionMap": {
            "hello": "can",
            "ask": "can",
            "run": "cant",
            "touch": "cant"
          }
        },
        "ui": {
          "checkMode": "button",
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 37,
    "block": 8,
    "type": "tap",
    "icon": "please",
    "title": "Как вежливо попросить?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Как вежливо попросить?",
        "choices": [
          "Пожалуйста, можно…?",
          "Дай!",
          "Сейчас же!"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Выбери вежливую фразу.",
        "choices": [
          "Извините, можно спросить?",
          "Эй!",
          "Ну быстро!"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Как попросить правильно?",
        "choices": [
          "Спасибо!",
          "Отстань!",
          "Мне всё равно!"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Как сказать красиво?",
        "choices": [
          "Можно, пожалуйста?",
          "Не хочу!",
          "Сделай!"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Что сказать в магазине?",
        "choices": [
          "Будьте добры…",
          "Ты обязан!",
          "Слышишь!"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 38,
    "block": 8,
    "type": "timer",
    "icon": "queue",
    "title": "Ждать очередь",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Ждём очередь спокойно 8 секунд.",
        "choices": {
          "seconds": 8
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Очередь: 8 секунд терпения.",
        "choices": {
          "seconds": 8
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Потренируйся ждать: 7 секунд.",
        "choices": {
          "seconds": 7
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Очередь: 6 секунд без суеты.",
        "choices": {
          "seconds": 6
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Тихо ждём: 9 секунд.",
        "choices": {
          "seconds": 9
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      }
    ]
  },
  {
    "id": 39,
    "block": 8,
    "type": "tap",
    "icon": "buy",
    "title": "Купить / Не купить",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Если вещь не нужна — что делаем?",
        "choices": [
          "Не купить",
          "Купить",
          "Спрятать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Если это просто каприз — что делаем?",
        "choices": [
          "Не купить",
          "Купить",
          "Плакать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Если нет денег — что делаем?",
        "choices": [
          "Не купить",
          "Купить",
          "Кричать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Если мама сказала «не покупаем» — что делаем?",
        "choices": [
          "Не купить",
          "Купить",
          "Убежать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Если это вредно — что делаем?",
        "choices": [
          "Не купить",
          "Купить",
          "Схватить"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 40,
    "block": 8,
    "type": "multi",
    "icon": "words",
    "title": "Вежливые слова",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Выбери вежливые слова.",
        "choices": [
          "Пожалуйста",
          "Спасибо",
          "Извините",
          "Отстань"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Отметь вежливые слова.",
        "choices": [
          "Здравствуйте",
          "Спасибо",
          "Будьте добры",
          "Дай"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Какие слова добрые? Выбери.",
        "choices": [
          "Извините",
          "Пожалуйста",
          "Спасибо",
          "Не хочу"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Что говорить в магазине? Выбери.",
        "choices": [
          "Спасибо",
          "Пожалуйста",
          "Добрый день",
          "Сейчас же"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Выбери слова, которые делают людям приятно.",
        "choices": [
          "Пожалуйста",
          "Спасибо",
          "До свидания",
          "Эй"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": true
        }
      }
    ]
  },
  {
    "id": 41,
    "block": 9,
    "type": "tap",
    "icon": "angry",
    "title": "Что делать, если злюсь?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Что сделать, если ты злишься?",
        "choices": [
          "Подышать и сказать словами",
          "Драться",
          "Кричать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Когда злость — что помогает?",
        "choices": [
          "Сделать паузу",
          "Бросать вещи",
          "Обзывать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Выбери лучший способ успокоиться.",
        "choices": [
          "Попросить помощь",
          "Ломать",
          "Толкать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Злюсь — что делаю?",
        "choices": [
          "Посчитать до 5",
          "Ударить",
          "Кусаться"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Как справиться со злостью?",
        "choices": [
          "Сказать «я злюсь»",
          "Кидать",
          "Драться"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 42,
    "block": 9,
    "type": "tap",
    "icon": "sad",
    "title": "Когда мне грустно…",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Когда мне грустно, я могу…",
        "choices": [
          "Поговорить со взрослым",
          "Ударить",
          "Спрятаться навсегда"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Если грустно, лучше…",
        "choices": [
          "Попросить обнять",
          "Кричать",
          "Ломать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Когда грустно, можно…",
        "choices": [
          "Сказать, что я чувствую",
          "Драться",
          "Кидать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Когда грустно, я могу попросить…",
        "choices": [
          "Помощь",
          "Наказать",
          "Кричать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Когда грустно, помогает…",
        "choices": [
          "Дышать спокойно",
          "Пинать",
          "Толкать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 43,
    "block": 9,
    "type": "tap",
    "icon": "tired",
    "title": "Когда устал",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Когда устал — что лучше сделать?",
        "choices": [
          "Отдохнуть",
          "Ссориться",
          "Кричать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Устал — что помогает?",
        "choices": [
          "Поспать/полежать",
          "Драться",
          "Бегать без остановки"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Выбери правильное действие.",
        "choices": [
          "Попить воды",
          "Ломать",
          "Толкаться"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Когда нет сил — что делаем?",
        "choices": [
          "Сказать «я устал»",
          "Обзываться",
          "Скрывать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Если устал — что выбираем?",
        "choices": [
          "Сделать паузу",
          "Шуметь",
          "Кидать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 44,
    "block": 9,
    "type": "tap",
    "icon": "solve",
    "title": "Выбери решение",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Кто-то занял твоё место. Что лучше сделать?",
        "choices": [
          "Сказать вежливо и попросить",
          "Толкнуть",
          "Закричать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Друг расстроился. Что лучше сделать?",
        "choices": [
          "Спросить, что случилось",
          "Смеяться",
          "Игнорировать"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Ты ошибся(лась). Что лучше сделать?",
        "choices": [
          "Сказать «прости» и исправить",
          "Спрятаться",
          "Винить других"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Ты хочешь игрушку. Что лучше сделать?",
        "choices": [
          "Попросить вежливо",
          "Схватить",
          "Плакать громко"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Ты очень злишься. Что лучше сделать?",
        "choices": [
          "Подышать и сказать словами",
          "Ударить",
          "Бросить"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 45,
    "block": 9,
    "type": "timer",
    "icon": "breath",
    "title": "Дыхание агента",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Дышим как агент 6 секунд.",
        "choices": {
          "seconds": 6
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Дыхание агента: 8 секунд.",
        "choices": {
          "seconds": 8
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Спокойное дыхание 7 секунд.",
        "choices": {
          "seconds": 7
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Подыши медленно 5 секунд.",
        "choices": {
          "seconds": 5
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Агентское дыхание: 9 секунд.",
        "choices": {
          "seconds": 9
        },
        "answer": {
          "complete": true
        },
        "ui": {
          "autoAdvance": true,
          "tickSound": true
        }
      }
    ]
  },
  {
    "id": 46,
    "block": 10,
    "type": "multi",
    "icon": "globe",
    "title": "Где ты побывал?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Выбери, где ты «побывал» в игре (несколько).",
        "choices": [
          "Франция",
          "Италия",
          "Япония",
          "Марс"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": false
        }
      },
      {
        "variantId": 2,
        "prompt": "Отметь места, которые тебе запомнились.",
        "choices": [
          "Горы",
          "Море",
          "Пустыня",
          "Подушка"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": false
        }
      },
      {
        "variantId": 3,
        "prompt": "Какие места похожи на путешествие? Выбери.",
        "choices": [
          "Город",
          "Лес",
          "Океан",
          "Холодильник"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": false
        }
      },
      {
        "variantId": 4,
        "prompt": "Выбери 3 места, куда бы ты хотел(а) поехать.",
        "choices": [
          "Самолёт",
          "Поезд",
          "Карта",
          "Носок"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": false
        }
      },
      {
        "variantId": 5,
        "prompt": "Отметь страны/места, которые ты любишь.",
        "choices": [
          "Испания",
          "Греция",
          "Франция",
          "Шкафландия"
        ],
        "answer": {
          "correctIndexes": [
            0,
            1,
            2
          ]
        },
        "ui": {
          "lockNextUntilCorrect": false
        }
      }
    ]
  },
  {
    "id": 47,
    "block": 10,
    "type": "tap",
    "icon": "medal",
    "title": "Твои суперсилы",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Выбери суперсилу: что у тебя точно есть?",
        "choices": [
          "Смелость",
          "Лень",
          "Вредность"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Выбери суперсилу: что у тебя точно есть?",
        "choices": [
          "Доброта",
          "Грубость",
          "Ссоры"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Выбери суперсилу: что у тебя точно есть?",
        "choices": [
          "Любопытство",
          "Скука",
          "Капризы"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Выбери суперсилу: что у тебя точно есть?",
        "choices": [
          "Умение слушать",
          "Кричать",
          "Драться"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Выбери суперсилу: что у тебя точно есть?",
        "choices": [
          "Терпение",
          "Спешка",
          "Обиды"
        ],
        "answer": {
          "correctIndex": 0
        },
        "ui": {
          "autoAdvance": true
        }
      }
    ]
  },
  {
    "id": 48,
    "block": 10,
    "type": "tap",
    "icon": "flag",
    "title": "Твоя любимая страна",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Выбери любимую страну (любой выбор).",
        "choices": [
          "Япония",
          "Франция",
          "Италия",
          "Испания"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Какая страна нравится сегодня?",
        "choices": [
          "Греция",
          "Германия",
          "США",
          "Нидерланды"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Куда бы ты хотел(а) поехать?",
        "choices": [
          "Австралия",
          "Египет",
          "Великобритания",
          "Россия"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Выбери страну мечты на сегодня.",
        "choices": [
          "Италия",
          "Франция",
          "Япония",
          "Испания"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Какая страна звучит красивее?",
        "choices": [
          "Греция",
          "Япония",
          "Франция",
          "Италия"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      }
    ]
  },
  {
    "id": 49,
    "block": 10,
    "type": "tap",
    "icon": "star",
    "title": "Какой ты агент?",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Выбери: какой ты агент сегодня?",
        "choices": [
          "Добрый агент",
          "Сонный агент",
          "Вредный агент"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 2,
        "prompt": "Какой ты агент? Выбери.",
        "choices": [
          "Смелый агент",
          "Шумный агент",
          "Грустный агент"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 3,
        "prompt": "Выбери свой агентский стиль.",
        "choices": [
          "Умный агент",
          "Смешной агент",
          "Быстрый агент"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 4,
        "prompt": "Какой ты агент в этой миссии?",
        "choices": [
          "Внимательный агент",
          "Тихий агент",
          "Спокойный агент"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      },
      {
        "variantId": 5,
        "prompt": "Какой ты агент прямо сейчас?",
        "choices": [
          "Дружелюбный агент",
          "Суперагент",
          "Агент-исследователь"
        ],
        "answer": {
          "any": true
        },
        "ui": {
          "autoAdvance": true,
          "noWrongAnswer": true
        }
      }
    ]
  },
  {
    "id": 50,
    "block": 10,
    "type": "final",
    "icon": "trophy",
    "title": "Получи статус!",
    "variants": [
      {
        "variantId": 1,
        "prompt": "ФИНАЛ! Нажми кнопку, чтобы получить статус и открыть сертификат.",
        "choices": {
          "cta": "Получить статус!"
        },
        "answer": {
          "final": true
        },
        "ui": {
          "playFinalAnimation": true,
          "generateCertificate": true,
          "showSaveButton": true
        }
      },
      {
        "variantId": 2,
        "prompt": "ФИНАЛ! Ты почти MASTER EXPLORER. Нажми кнопку — и получишь сертификат.",
        "choices": {
          "cta": "Получить сертификат!"
        },
        "answer": {
          "final": true
        },
        "ui": {
          "playFinalAnimation": true,
          "generateCertificate": true,
          "showSaveButton": true
        }
      },
      {
        "variantId": 3,
        "prompt": "ФИНАЛ! Нажми кнопку — будет конфетти и награда.",
        "choices": {
          "cta": "Я готов(а)!"
        },
        "answer": {
          "final": true
        },
        "ui": {
          "playFinalAnimation": true,
          "generateCertificate": true,
          "showSaveButton": true
        }
      },
      {
        "variantId": 4,
        "prompt": "ФИНАЛ! Получи звание и открой финальную награду.",
        "choices": {
          "cta": "Открыть награду!"
        },
        "answer": {
          "final": true
        },
        "ui": {
          "playFinalAnimation": true,
          "generateCertificate": true,
          "showSaveButton": true
        }
      },
      {
        "variantId": 5,
        "prompt": "ФИНАЛ! Нажми кнопку и сохрани сертификат.",
        "choices": {
          "cta": "Сохранить!"
        },
        "answer": {
          "final": true
        },
        "ui": {
          "playFinalAnimation": true,
          "generateCertificate": true,
          "showSaveButton": true
        }
      }
    ]
  }
];
